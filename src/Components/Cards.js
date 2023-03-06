import React, { useState,useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardData from './CardData'
import "./style.css";
import { useDispatch } from 'react-redux';
// import { ADD } from '../redux/actions/action';
import Header from './Header';
import { ADD } from '../redux/actions/action';
import CardsDetails from './CardDetails';
import { NavLink, useNavigate } from 'react-router-dom';

// Shop items
const Cards = () => {

  
    const [data, setData] = useState([]); 
    

    //fetch data from the json server
    useEffect(() => {
        fetch(" http://localhost:3001/posts").then((res) => {
            return res.json();
        }).then((resp) => {
          setData(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    //const [data, setData] = useState(CardData);
    
    console.log(CardData)
    const dispatch = useDispatch()

//send item to the cart
  const send = (e)=>{
     console.log(e);
    dispatch(ADD(e));
  }

  const navigate=useNavigate()
    
  
    return (
      <>
      <Header/>
      <div className='container mt-3'>
      {/* <h2 className='text-center'>Add to Cart Projects</h2> */}
      {/* Mapping is done on whch data come from the json server and show it on the browser one by one as the form of the listing */}
      <div className="row d-flex justify-content-center align-items-center">
        {
          data.map((element, id) => {
            return (
              <>
                <Card style={{ width: '22rem',border:"none" }} className="mx-2 mt-4 card_style" key={id}>
                  <Card.Img variant="top" src={element.img} style={{height:"16rem"}} className="mt-3" />
                  <Card.Body>
                 <Card.Title>{element.name}</Card.Title>
                    <Card.Text>
                    Price : ₹ {element.price}
                    </Card.Text>
                    <div className="button_div d-flex justify-content-center">
                    <Button variant="primary"  
                      onClick={()=> send(element)}
                     className='col-lg-12'>Add to Cart</Button>

                     
                    </div>
                  
                  </Card.Body>
                </Card>
              </>
            )
          })
        }

      </div>
    </div>
    </>
    );
      
}

export default Cards


// import React, { useState } from 'react'
// import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'
// import Cardsdata from './CardData'
// import "./style.css";
// import { useDispatch } from 'react-redux';
// import { ADD } from '../redux/actions/action';

// const Cards = () => {

//   const [data, setData] = useState([Cardsdata]);
//   // console.log(data);


//   const dispatch = useDispatch();


//   const send = (e)=>{
//     // console.log(e);
//     dispatch(ADD(e));
//   }

//   return (
//     <div className='container mt-3'>
//       <h2 className='text-center'>Add to Cart Projects</h2>

//       <div className="row d-flex justify-content-center align-items-center">
//         {
//           data.map((element, id) => {
//             return (
//               <>
//                 <Card style={{ width: '22rem',border:"none" }} className="mx-2 mt-4 card_style" >
//                   <Card.Img variant="top" src={element.img} style={{height:"16rem"}} className="mt-3" />
//                   <Card.Body>
//                     <Card.Title>{element.name}</Card.Title>
//                     <Card.Text>
//                     Price : ₹ {element.price}
//                     </Card.Text>
//                     <div className="button_div d-flex justify-content-center">
//                     <Button variant="primary"  
//                       onClick={()=> send(element)}
//                      className='col-lg-12'>Add to Cart</Button>
//                     </div>
                  
//                   </Card.Body>
//                 </Card>
//               </>
//             )
//           })
//         }

//       </div>
//     </div>
//   )
// }

// export default Cards