import React from "react";
import mainImage from '../../Assets/svgs/smallmain.svg'

const Services = () => {
  return (
    <section id="services-section">
      <main className="">
        <div className="title-container">
          <h1 className="page-title">Services</h1>
        </div>
        <div className="center">
          <div className="col-1">
            <div className="service-card">
              <div className="icon-box">
                <i className="fa-solid fa-trophy"></i>
              </div>
              <div className="service-card-details">
                <p className="service-card-title">Entrepreneur</p>
                <p className="service-card-desc">#Projects #Products #Awards</p>
              </div>
            </div>
            <div className="service-card">
              <div className="icon-box">
                <i className="fa-solid fa-flask"></i>
              </div>
              <div className="service-card-details">
                <p className="service-card-title">Data Scientists</p>
                <p className="service-card-desc">#Machine #Deep Learning #AI</p>
              </div>
            </div>
          </div>
          <div className="col-2">
            <img
              className="mainimg gray"
              src={mainImage}
              alt=""
            />
          </div>
          <div className="col-3">
            <div className="service-card flex-row-center smallgap">
              <div className="icon-box">
                <i className="fa-solid fa-pen-nib"></i>
              </div>
              <div className="service-card-details">
                <p className="service-card-title">Graphic Design</p>
                <p className="service-card-desc">#PS, #Ai, #Adobe XD</p>
              </div>
            </div>
            <div className="service-card flex-row-center smallgap">
              <div className="icon-box flex-center-box">
                <i className="fa-solid fa-code"></i>
              </div>
              <div className="service-card-details">
                <p className="service-card-title">Full Stack Developer</p>
                <p className="service-card-desc">#React #ReactNative #.NET</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rich-text text-center">
          <p>
            Get creative and enjoy the most dedicated
            <br />
            web development services from Khatib.
          </p>
        </div>
      </main>
    </section>
  );
};

export default Services;
