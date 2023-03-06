import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSproductctor } from 'react-redux'
import { ADD, DELETE, DproductTE, REMOVE } from '../redux/actions/action'
import Header from './Header'
import { useSelector } from 'react-redux'
import { textAlign } from '@mui/system'

const CartItems = () => {
    //     const [data, setData] = useState([]);
    //    console.log(data);

    //   const { id } = useParams();
    //    console.log(id);

    //   const history = useNavigate();

    //   const dispatch = useDispatch();


    //   const getdata = useSproductctor((state) => state.cartreducer.carts);
    //    //console.log(getdata);


    //   const compare = () => {
    //     let comparedata = getdata.filter((e) => {
    //       return e.id == id
    //     });
    //     setData(comparedata);
    //   }

    //   // add data


    //   const send = (e) => {
    //     // console.log(e);
    //     dispatch(ADD(e));
    //   }

    //   const dlt = (id) => {
    //     dispatch(DproductTE(id));
    //     history("/");
    //   }

    //   // remove one
    //   const handleRemove = (item) => {
    //     dispatch(REMOVE(item))
    //   }


    // useEffect(() => {
    //   compare();
    // }, [id])

    //   useEffect(() => {
    //     fetch(" http://localhost:3001/posts"+id).then((res) => {
    //         return res.json();
    //     }).then((resp) => {
    //        setData(resp);
    //       compare()
    //     }).catch((err) => {
    //         console.log(err.message);
    //     })
    // },
    // []);
    const dispatch = useDispatch();
    const data = useSelector((state) => state.cartreducer.carts)
    // const handleAdd = (productInfo) => {
    //   dispatch(ADD(productInfo))
    // }
    // const handleRemove = (productInfo) => {
    //   dispatch(REMOVE(productInfo))
    // }

    // add data

    const history = useNavigate();
    const send = (e) => {
        // console.log(e);
        dispatch(ADD(e));
    }

    //delete from the cart
    const dlt = (id) => {
        dispatch(DELETE(id));
         //history("/");
    }

    // remove one
    const remove = (item) => {
        dispatch(REMOVE(item))
    }

    return (
        <>
            <Header />
            <h2 className='text-center'>My Cart</h2>
            <div className="cartWrapper py-md-5 py-4">

                {data.map((product, index) => (
                    <div className="px-4 rounded-3" key={product.id}>
                        <div className="container py-4">
                            <div className="row justify-content-center">
                                <div className="col-md-10 shadow cart-box rounded">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img src={product.img} height="180px" width="150px" />
                                            <p><strong>Product Details:</strong> {product.details}</p>
                                        </div>
                                        <div className="col-md-6">
                                            <h3>{product.name}</h3>
                                            <p><strong>Rating :</strong> <span style={{ background: "green", color: "#fff", padding: "2px 5px", borderRadius: "5px" }}>{product.rating} ★	</span></p>
                                            
                                            <p> <strong>Price</strong>  : ₹{product.price}</p>

                                            <p> <strong>Total</strong>  :₹  {product.price * product.quantity}</p>
                                            <div className='mt-5 d-flex justify-content-between align-items-center' style={{ width: 100, cursor: "pointer", background: "#ddd", color: "#111" }}>
                                                <span style={{ fontSize: 24 }} onClick={product.quantity <= 1 ? () => dlt(product.id) : () => remove(product)}>-</span>
                                                <span style={{ fontSize: 22 }}>{product.quantity}</span>
                                                <span style={{ fontSize: 24 }} onClick={() => send(product)}>+</span>

                                                
                                            </div>
                                            <p></p>
                                        </div>
                                        
                                            <div className="col-md-2">
                                            <p><span ><i className='fas fa-trash' onClick={() => dlt(product.id)} style={{ color: "red", fontSize: 20, cursor: "pointer" }}></i></span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        ))}
                        <div className="container">
                            <div className="row">
                                {
                                    data.length>0 ?
                                    <NavLink to="/checkout" className="btn btn-primary">Proceed To Checkout</NavLink>
                                    :
                                    (<div>
                                        <img src="./cart.gif" alt="" className='emptycart_img' style={{ }} />
                                             <p style={{ fontSize: 22, textAlign:'center'}}>Cart is empty</p>
                                    </div>)
                                   
                                }
                                
                            </div>
                        </div>
                    </div>
      </>
            )
  
  }


            export default CartItems
