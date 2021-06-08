import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import WhyPolyStarterSlider from "../../Components/WhyPolyStarterSlider/WhyPolyStarterSlider";
const WhyPolystarter = () => {
    return (
        <section id="feature">
            <div className="title p-5 text-center">
                <p className="text-secondary">Feature</p>
                <h1>Why PolyStarter</h1>
            </div>
            <div className="row container-fluid">
                <div className="col-3"></div>
                <div className="col-6">
                    <WhyPolyStarterSlider>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                        </SwiperSlide>
                    </WhyPolyStarterSlider>
                </div>
                <div className="col-3"></div>
            </div>
        </section>
    );
};

export default WhyPolystarter;
