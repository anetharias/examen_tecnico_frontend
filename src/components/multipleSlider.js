import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import ArrowLeft from "@material-ui/icons/ArrowBackIos";
import ArrowRight from "@material-ui/icons/ArrowForwardIos";
import ButtonBase from "@material-ui/core/ButtonBase";
import API from "../service/api";


function SampleNextArrow() {
  return <></>;
}

function SamplePrevArrow() {
  return <></>;
}
const Multipleslider = () => {
  const sliderRef = useRef(null);
  const [width, setWidth] = useState(0);

  const [slider, setSlider] = useState([]);
  const [loading, setLoading] = useState(false);

  const getDataApi = async () => {
    try {
      

      const responseSliders = await API.utils.sliders();
      console.log("[LOG] [ RESPONSE SLIDERS2 ]", responseSliders.data);
      setSlider(responseSliders.data);
      setLoading(true);

      

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getDataApi();
  }, []);

  const renderArrows = () => (
    <div className="slider-arrow">
      <ButtonBase
        className="arrow-btn prev"
        onClick={() => sliderRef.current.slickPrev()}
      >
        <ArrowLeft />
      </ButtonBase>
      <ButtonBase
        className="arrow-btn next"
        onClick={() => sliderRef.current.slickNext()}
      >
        <ArrowRight />
      </ButtonBase>
    </div>
  );

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth)
    })
    window.dispatchEvent(new Event('resize'));
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.screen.width)
    }
  }, [])
  useEffect(() => {
    window.dispatchEvent(new Event('resize'));
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrow: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
     {loading ? <div className="w-full" style={{ marginTop: "-30px"}} id="Inicio">
        <div style={{ position: "relative", marginTop: "4rem" }}>
          {renderArrows()}

          <Slider ref={sliderRef} {...settings}>
            {slider.map((json, key) => {
              return (
                <div
                  className="mx-auto w-full flex-shrink-0 z-0"
                  key={key}
                >
                  <img
                    style={{objectFit: 'cover'}}
                    alt=""
                    src={json.webp_md}
                    width={width}
                    height={650}
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </div> : <> </>} 
    </>
  );
}

export default Multipleslider;
