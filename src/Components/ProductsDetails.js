import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import {ADD} from '../redux/actions/action'

const ProductsDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const addProduct = () => {
        dispatch(ADD(product));
    }


    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`http://localhost:3001/posts/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    }, []);

    const Loading = () => {
        return (
            <>
                <div className="col-md-6">
                    <Skeleton height={400} />
                </div>
                <div className="col-md-6" style={{ lineHeight: 2 }}>
                    <Skeleton height={50} width={300} />
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                    <Skeleton height={50} width={250} />
                </div>
            </>
        );
    }

    const ShowProduct = () => {
        return (
            <>
                <div className="col-md-6">
                    <img src={product.img}  height="400px" width="400px" />
                </div>
                <div className="col-md-6">
                    {/* <h4 className="text-uppercase product-detail-category mb-3">
                        <strong>{product.details}</strong>
                    </h4> */}
                    <h1 className="display-5 product-detail-title">
                        {product.name}
                    </h1>
                    <p className="lead fw-bolder">
                        Rating {product.rating}
                        <i className="fa fa-star ms-1 text-warning"></i>
                    </p>
                    <h3 className="display-6 fw-bold my-3">
                        $ {product.price}
                    </h3>
                    <p className="lead">
                        {product.details}
                    </p>
                    <button className="btn add-to-btn fw-bold px-4 py-2" onClick={() => addProduct(product)}>Add To Cart</button>
                    <NavLink to="/cart" className="btn fw-bold btn-dark ms-3 px-3 py-2">Go To Cart</NavLink>
                </div>
            </>
        );
    }

    return (
        <div>
            <div className="container py-5">
                <div className="row py-5">
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </div>
    )
}

export default ProductsDetails;