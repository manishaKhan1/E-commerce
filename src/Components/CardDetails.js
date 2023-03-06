import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {ADD,DELETE,REMOVE} from '../redux/actions/action'

//details page for cartItems
const CardsDetails = () => {

  const [data, setData] = useState([]);
   console.log(data);

  const { id } = useParams();
   console.log(id);

  const history = useNavigate();

  const dispatch = useDispatch();


  const getdata = useSelector((state) => state.cartreducer.carts);
   //console.log(getdata);


  const compare = () => {
    let comparedata = getdata.filter((e) => {
      return e.id == id
    });
    setData(comparedata);
  }

  // add data


  const send = (e) => {
    // console.log(e);
    dispatch(ADD(e));
  }

  const dlt = (id) => {
    dispatch(DELETE(id));
    history("/");
  }

  // remove one
  const remove = (item) => {
    dispatch(REMOVE(item))
  }


  // useEffect(() => {
  //   compare();
  // }, [id])

  useEffect(() => {
    fetch(" http://localhost:3001/posts"+id).then((res) => {
        return res.json();
    }).then((resp) => {
       setData(resp);
      compare()
    }).catch((err) => {
        console.log(err.message);
    })
},
[]);

  return (
    <>
      <div className="container mt-2">
        
      <NavLink to='/' className="text-decoration-none mx-3"><button>🔙</button></NavLink>
        <h2 className='text-center'>Iteams Details Page
        </h2>

        <section className='container mt-3'>
          <div className="iteamsdetails">
            {
              data.map((ele) => {
                return (
                  <>
                    <div className="items_img">
                      <img src={ele.img} alt="" />
                    </div>

                    <div className="details">
                      <Table>
                        <tr>
                          <td>
                            <p> <strong>Product</strong>  : {ele.name}</p>
                            <p> <strong>Price</strong>  : ₹{ele.price}</p>
                            
                            <p> <strong>Total</strong>  :₹  {ele.price * ele.quantity}</p>
                            <div className='mt-5 d-flex justify-content-between align-items-center' style={{ width: 100, cursor: "pointer", background: "#ddd", color: "#111" }}>
                              <span style={{ fontSize: 24 }} onClick={ele.quantity <= 1 ? () => dlt(ele.id) : () => remove(ele)}>-</span>
                              <span style={{ fontSize: 22 }}>{ele.quantity}</span>
                              <span style={{ fontSize: 24 }} onClick={() => send(ele)}>+</span>

                            </div>

                          </td>
                          <td>
                            <p><strong>Rating :</strong> <span style={{ background: "green", color: "#fff", padding: "2px 5px", borderRadius: "5px" }}>{ele.rating} ★	</span></p>
                            <p><strong>Product Details :</strong> <span >{ele.details}	</span></p>
                            <p><strong>Remove :</strong> <span ><i className='fas fa-trash' onClick={() => dlt(ele.id)} style={{ color: "red", fontSize: 20, cursor: "pointer" }}></i>	</span></p>
                          </td>
                        </tr>
                      </Table>
                      
                    </div>

                  </>
                )
              })
            }
          </div>
        </section>
      </div>
    </>
  )
}

export default CardsDetails



// import React from 'react'
// import  Table  from 'react-bootstrap/Table'
// const CardDetails = () => {
//   return (
//     <div className='container mt-2'>
//       <h2 className='text-center'>Items details</h2>

//       <section className='container mt-3'>
//           <div className='iteamsdetails'>
//             {/* show the image */}
//             <div className='items_img'>
//               <img src="https://cdn.bhdw.net/im/logitech-craft-wireless-keyboard-wallpaper-16860_w635.webp"></img>
//             </div>

//             {/* show the items details */}
//             <div className='details'>
//                <Table>
//                 <tr>
//                   <td></td>
//                 </tr>
//                </Table>
//             </div>
//           </div>
//       </section>
//     </div>
//   )
// }

// export default CardDetails
