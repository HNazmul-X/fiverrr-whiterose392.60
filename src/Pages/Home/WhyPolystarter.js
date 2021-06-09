import React from "react";
import SliderCard from "../../Components/WhyPolyStarterSlider/SliderCard";
import WhyPolyStarterSlider from "../../Components/WhyPolyStarterSlider/WhyPolyStarterSlider";
import featureimg from "../../Images/feature1.png";
import BlurSlider from "../../Images/sliderBlurPart.png";

const WhyPolystarter = () => {
  return (
    <section id="feature">
      <div className="title p-5 text-center">
        <p className="text-secondary">Feature</p>
        <h1>Why PolyStarter</h1>
      </div>
      <div className="row container-fluid align-items-center" id="sliderPart">
        <div className="col-3 text-center d-none d-lg-block">
          <img src={BlurSlider} alt="" className="img-fluid" />
        </div>
        <div className="col-lg-6">
          <WhyPolyStarterSlider>
            <div class="carousel-item active slider-box_DINDnad">
              <SliderCard img={featureimg} title="ASSURANCE" desc="Investing in projectsn ever before. Because now, each project launched through our platform is backed through our insurance pool." />
            </div>
            <div class="carousel-item slider-box_DINDnad">
              <SliderCard img={featureimg} title="ASSURANCE" desc="Investing in projbefore. Because now, each project launched through our platform is backed through our insurance pool." />
            </div>
            <div class="carousel-item slider-box_DINDnad">
              <SliderCard
                img={featureimg}
                title="ASSURANCE"
                desc="Investing in projects that launch through g in projects that launch through g in projects that launch through g in projects that launch through PolyStarter is safer than ever before. Because now, each project launched through our platform is backed through our insurance pool."
              />
            </div>
            <div class="carousel-item slider-box_DINDnad">
              <SliderCard
                img={featureimg}
                title="ASSURANCE"
                desc="Investing in projects that launch through PolyStarter is safer than ever before. Because now, each project launched through our platform is backed through our insurance pool."
              />
            </div>
            <div class="carousel-item slider-box_DINDnad">
              <SliderCard img={featureimg} title="ASSURANCE" desc="Investing in projects tlaunched through our platform is backed through our insurance pool." />
            </div>
          </WhyPolyStarterSlider>
        </div>
        <div className="col-3 text-center d-none d-lg-block">
          <img src={BlurSlider} alt="" className="img-fluid" />
        </div>
      </div>
    </section>
  );
};

export default WhyPolystarter;
