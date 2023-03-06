// import './style.css'

// import React, { useState,useEffect } from 'react'
// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Badge from '@mui/material/Badge';
// import { NavLink, useParams } from 'react-router-dom';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import { useDispatch, useSelector } from 'react-redux';
// import { ADD } from '../redux/actions/action';
// import axios from 'axios';



// // it's navbar of the page , which is common for all the routing pages
// const Header = () => {

//     const getdata = useSelector((state) => state.cartreducer.carts);
//     console.log(getdata);

//     //const dispatch = useDispatch();


//     const [anchorEl, setAnchorEl] = useState();
//     const open = Boolean(anchorEl);
//     const handleClick = (event) => {
//         setAnchorEl(event.currentTarget);
//     };
//     const handleClose = () => {
//         setAnchorEl(null);
//     }
//     return (
//         <div>
//             <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
//                 <Container>
//                     <NavLink to='/' className="text-decoration-none mx-3"><Navbar.Brand >E-Commerce</Navbar.Brand></NavLink>
//                     <Nav className="me-auto">
//                         <NavLink to='/' className="text-decoration-none text-light mx-3">Home</NavLink>
//                         <NavLink to='/shop' className="text-decoration-none text-light mx-3">Shop</NavLink>
//                         <NavLink to='/contact' className="text-decoration-none text-light mx-3">Contact</NavLink>
//                     </Nav>

//                     <Badge badgeContent={getdata.length} color="primary" style={{ marginRight: 90 }}
//                         id="basic-button"
//                         aria-controls={open ? 'basic-menu' : undefined}
//                         aria-haspopup="true"
//                         aria-expanded={open ? 'true' : undefined}
//                         onClick={handleClick}
//                     >
//                         <i class="fa-solid fa-cart-shopping text-light" style={{ fontSize: 25, cursor: "pointer" }}></i>

//                     </Badge>
//                 </Container>

//                 <Menu
//                     id="basic-menu"
//                     anchorEl={anchorEl}
//                     open={open}
//                     onClose={handleClose}
//                     MenuListProps={{
//                         'aria-labelledby': 'basic-button',
//                     }}
//                 >
//                     <div className='card_details d-flex justify-content-center align-items-center' style={{ width: "24rem", padding: 10, position: "relative" }}>
//                         <i className='fas fa-close smallclose' style={{ position: "Absolute", top: 2, right: 20, fontSize: 23, cursor: "pointer" }} onClick={handleClose}></i>
//                         <p style={{ fontSize: 22 }}>Your carts is empty</p>
//                         <img src='./cart.gif' className='emptycart_img' style={{ width: "5rem", padding: 10 }} />
//                     </div>
//                 </Menu>

//             </Navbar>
//         </div>
//     )
// }
// export default Header


import React, { useEffect, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Badge from '@mui/material/Badge';
import Nav from 'react-bootstrap/Nav'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/esm/Table';
import { DELETE } from '../redux/actions/action'

const Header = () => {

    const [price, setPrice] = useState(0);
    // console.log(price);

    const getdata = useSelector((state) => state.cartreducer.carts);
    // console.log(getdata);

    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const dlt = (id) => {
        dispatch(DELETE(id))
    }


    const total = () => {
        let price = 0;
        getdata.map((ele, k) => {
            price = ele.price * ele.quantity + price
        });
        setPrice(price);
    };

    useEffect(() => {
        total();
    }, [total])

    return (
        <>
            <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
                <Container>
                    <NavLink to='/' className="text-decoration-none mx-3"><Navbar.Brand >E-Commerce</Navbar.Brand></NavLink>
                    <Nav className="me-auto">
                        <NavLink to='/' className="text-decoration-none text-light mx-3">Home</NavLink>
                        <NavLink to='/shop' className="text-decoration-none text-light mx-3">Shop</NavLink>
                        <NavLink to='/contact' className="text-decoration-none text-light mx-3">Contact</NavLink>
                    </Nav>

                    <Badge badgeContent={getdata.length} color="primary"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <i class="fa-solid fa-cart-shopping text-light" style={{ fontSize: 25, cursor: "pointer" }}></i>
                    </Badge>

                </Container>


                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >

                    {
                        getdata.length ?
                            <div className='card_details' style={{ width: "24rem", padding: 10 }}>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Products</th>
                                            <NavLink to='/cartitems' className="text-decoration-none text-dark mx-3"> <th>Go To Cart </th></NavLink>

                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            getdata.map((e) => {
                                                return (
                                                    <>
                                                        <tr>
                                                            <td>
                                                                <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                                                                    <img src={e.img} style={{ width: "5rem", height: "5rem" }} alt="" />
                                                                </NavLink>
                                                            </td>
                                                            <td>
                                                                <p>{e.rname}</p>
                                                                <p>Price : ₹{e.price}</p>
                                                                <p>Quantity : {e.quantity}</p>
                                                                <p style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={() => dlt(e.id)}>
                                                                    <i className='fas fa-trash smalltrash'></i>
                                                                </p>
                                                            </td>

                                                            <td className='mt-5' style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={() => dlt(e.id)}>
                                                                <i className='fas fa-trash largetrash'></i>
                                                            </td>
                                                        </tr>
                                                    </>
                                                )
                                            })
                                        }
                                        <p className='text-center'>Total :₹ {price}</p>
                                    </tbody>
                                </Table>
                            </div> :

                            <div className='card_details d-flex justify-content-center align-items-center' style={{ width: "24rem", padding: 10, position: "relative" }}>
                                <i className='fas fa-close smallclose'
                                    onClick={handleClose}
                                    style={{ position: "absolute", top: 2, right: 20, fontSize: 23, cursor: "pointer" }}></i>
                                <p style={{ fontSize: 22 }}>Your carts is empty</p>
                                <img src="./cart.gif" alt="" className='emptycart_img' style={{ width: "5rem", padding: 10 }} />
                            </div>
                    }

                </Menu>
            </Navbar>
        </>
    )
}

export default Header