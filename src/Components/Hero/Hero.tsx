import mainImage from '../../Assets/svgs/mainImage.svg'
import smalllImage from '../../Assets/svgs/small.svg';
const Hero = () => {
  return (
    <section id="hero-section">
      <main >
        <div id="nav-container">
          <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#services-section">Services</a></li>
              <li><a href="#skills-section">Skills</a></li>
              <li><a href="#projects-section">Projects</a></li>
              <li><a href="#awards-section">Awards</a></li>
              <li><a href="#contact-section">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div className="center ">
          <img
            className="mainimg"
            src={mainImage}
            alt=""
            loading="lazy"
          />
          <img
            className="smallimg"
            src={smalllImage}
            alt=""
            loading="lazy"
          />
          <article className="person-details">
            <h1 id="person-fullname">
              <span id="first-name">Muhaimen</span>
              Khatib
            </h1>

            <p id="person-job">Software Engineer</p>

            <p>
              I'm Computer Engineering student at Arab American<br />
              University and am interested in Software Engineering, AI<br />
              and Data Science.🖥️
            </p>

            <div>
              <ul className="flex-cnetered-gapped-row flex-row-center smallgap">
                <li className="social-media-linkbox flex-center-box">
                  <a href="tel:+970595253071"><i className="fa fa-phone"></i></a>
                </li>
                <li className="social-media-linkbox flex-center-box">
                  <a href="mailto:khatibmuhaimen@gmail.com"
                    ><i className="fa-solid fa-envelope"></i
                  ></a>
                </li>
                <li className="social-media-linkbox flex-center-box">
                  <a href="https://linkedin.com/in/m5atib"
                    ><i className="fa-brands fa-linkedin"></i
                  ></a>
                </li>
                <li className="social-media-linkbox flex-center-box">
                  <a href="https://github.com/m5atib"
                    ><i className="fa-brands fa-github"></i
                  ></a>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </main>
    </section>
  )
}

export default Hero