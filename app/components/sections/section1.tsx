'use client'



"use client"
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
export default function Section1() {


    return (
        <>
            <section id="hero-slider" className="">
                
                <div className="container" >
                    <div className="row">
                        <div className="col-12">
                            <div className="">
                                <div className="carousel">
                                    <Carousel>
                                    <div className="carousel-image">
                                        <a href="single-post.html" className="img-bg d-flex align-items-end" style={{backgroundImage: "url('/assert/img/images/1.jpg')"}}>
                                            <div className="img-bg-inner">
                                                <h2>Mussoorie</h2>
                                                <p></p>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="carousel-image">
                                        <a href="single-post.html" className="img-bg d-flex align-items-end" style={{backgroundImage:  "url('/assert/img/images/2.jpg')" }}>
                                            <div className="img-bg-inner">
                                                <h2>Mussoorie</h2>
                                                <p></p>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="carousel-image">
                                        <a href="single-post.html" className="img-bg d-flex align-items-end" style={{backgroundImage: "url('/assert/img/images/3.jpg')"}}>
                                            <div className="img-bg-inner">
                                                <h2></h2>
                                                <p></p>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="carousel-image">
                                        <a href="single-post.html" className="img-bg d-flex align-items-end" style={{backgroundImage: "url('../../assert/img/images/4.jpg')"}}>
                                            <div className="img-bg-inner">
                                                <h2></h2>
                                                <p></p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="carousel-image">
                                        <a href="single-post.html" className="img-bg d-flex align-items-end" style={{backgroundImage: "url('../../assert/img/images/5.jpg')"}}>
                                            <div className="img-bg-inner">
                                                <h2>Kedarnath</h2>
                                                <p></p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="carousel-image">
                                        <a href="single-post.html" className="img-bg d-flex align-items-end" style={{backgroundImage: "url('../../assert/img/images/6.jpg')"}}>
                                            <div className="img-bg-inner">
                                                <h2>Hotel</h2>
                                                <p></p>
                                            </div>
                                        </a>
                                    </div>
                                    </Carousel>
                                </div>
                               
                                
                            </div>
                        </div>
                    </div>
                </div>
               
            </section>
        </>
    )
}