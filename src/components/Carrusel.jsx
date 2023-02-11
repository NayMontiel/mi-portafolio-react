import Carousel from "react-bootstrap/Carousel";
import banner from "../assets/img/banner.jpg";
import banner2 from "../assets/img/banner2.png";
import banner3 from "../assets/img/banner3.png";
import banner4 from "../assets/img/banner4.png";

export const Carrusel = () => {
  return (
    <div className="container">
      <div className="row slider my-3">
        <div className="col">
          <Carousel
            variant="light"
            className="animate__animated animate__fadeInRight"
          >
            <Carousel.Item>
              <img
                className="d-block w-100 banner"
                src={banner}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 banner"
                src={banner2}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 banner"
                src={banner3}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 banner"
                src={banner4}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
