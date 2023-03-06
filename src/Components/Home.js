import React from 'react'
import Header from './Header'
import img1 from '../Images/img1.jpg'
import img2 from '../Images/img2.jpg'
import img3 from '../Images/img3.jpg'


// Home page of the e-comerce site
const Home = () => {
    return (
        <div>
            <Header />
            <div className="banner_section layout_padding">
                <div id="main_slider" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h1 className="banner_taital">Best <br /> Electronics Devices <br />Service</h1>
                                        <p className="banner_text">It is a long established fact that a reader will bedistracted by the readable content of </p>
                                        <div className="image_2"><img src={img2} /></div>
                                        <div className="btn_main">
                                            {/* <div className="contact_bt"><a href="/contact">Contact US</a></div> */}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="image_1"><img src={img1} /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="carousel-item">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h1 className="banner_taital">Best <br /> Design <br />of Furnitur</h1>
                                        <p className="banner_text">It is a long established fact that a reader will bedistracted by the readable content of </p>
                                        <div className="btn_main">
                                            <div className="contact_bt"><a href="#">Contact US</a></div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="image_1"><img src={img2} /></div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="carousel-item">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h1 className="banner_taital">Best <br /> Design <br />of Furnitur</h1>
                                        <p className="banner_text">It is a long established fact that a reader will bedistracted by the readable content of </p>
                                        <div className="btn_main">
                                            <div className="contact_bt"><a href="#">Contact US</a></div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="image_1"><img rc={img2} /></div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>



                </div>
            </div>
            {/* banner section end */}
            {/* about section start */}
            <div className="about_section layout_padding">
                <div className="container">
                    <div className="about_section_2">
                        <div className="row">
                            <div className="col-md-6">

                            </div>
                            <div className="col-md-6">
                                <h1 className="about_taital">About Us</h1>
                                <p className="about_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised </p>
                                {/* <div className="readmore_bt"><a href="#">Read More</a></div> */}
                                <div className="image_2"><img src={img3} /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
