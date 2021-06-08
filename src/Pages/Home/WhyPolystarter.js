import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderCard from "../../Components/WhyPolyStarterSlider/SliderCard";
import WhyPolyStarterSlider from "../../Components/WhyPolyStarterSlider/WhyPolyStarterSlider";
import featureimg from "../../Images/feature1.png"
const WhyPolystarter = () => {
    return (
        <section id="feature">
            <div className="title p-5 text-center">
                <p className="text-secondary">Feature</p>
                <h1>Why PolyStarter</h1>
            </div>
            <div className="row container-fluid" id="sliderPart">
                <div className="col-3"></div>
                <div className="col-6">
                    <WhyPolyStarterSlider>
                        <SwiperSlide className="SwiperSlider-box">
                            <SliderCard img={featureimg} title/>
                        </SwiperSlide>
                        <SwiperSlide className="SwiperSlider-box">
                            <div>
                                <div className="row align-items-center p-3 ">
                                    <div className="col-md-3">
                                        <img src={featureimg} alt="" />
                                    </div>
                                    <div className="col-md-9">
                                        <h1 className=" text-uppercase">FAIRNESS</h1>
                                    </div>
                                </div>
                                <div className="px-3">
                                    <p className="text-secondary">We protect our group backers from presale dumps by setting individual limits and by having a fair delivery method.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </WhyPolyStarterSlider>
                </div>
                <div className="col-3"></div>
            </div>
        </section>
    );
};

export default WhyPolystarter;
