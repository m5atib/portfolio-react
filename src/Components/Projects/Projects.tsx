import React from 'react'
import one from '../../Assets/projects_imgs/1.png'
import two from '../../Assets/projects_imgs/2.png'
import three from '../../Assets/projects_imgs/3.png'
const Projects = () => {
  return (
    <section id="projects-section">
      <main className="">
        <div className="tilte-container flex-row-center">
          <h1 className="page-title text-center">Projects</h1>
        </div>
        <div className="projects-wrapper">
          <div className="project-card">
            <img
              src={one}
              width="260"
              height="140"
              alt=""
            />
            <div className="project-details">
              <div className="left">
                <h2 className="card-title">Hearize</h2>
                <p className="card-date">10 october 2022</p>
              </div>
              <div className="right">
                
                <span className="like">
                  <p>86</p>
                  <i className="fa-solid fa-thumbs-up"></i>
                </span>
                <span className="rate">
                  <p>4</p>
                  <i className="fa-solid fa-star"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="project-card">
            <img
              src={one}
              width="260"
              height="140"
              alt=""
            />
            <div className="project-details">
              <div className="left">
                <h2 className="card-title">Cartostine</h2>
                <p className="card-date">10 october 2022</p>
              </div>
              <div className="right">
                
                <span className="like">
                  <p>54</p>
                  <i className="fa-solid fa-thumbs-up"></i>
                </span>
                <span className="rate">
                  <p>3.5</p>
                  <i className="fa-solid fa-star"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="project-card">
            <img
              src={one}
              width="260"
              height="140"
              alt=""
            />
            <div className="project-details">
              <div className="left">
                <h2 className="card-title">Dailyin</h2>
                <p className="card-date">10 october 2022</p>
              </div>
              <div className="right">
                
                <span className="like">
                  <p>205</p>
                  <i className="fa-solid fa-thumbs-up"></i>
                </span>
                <span className="rate">
                  <p>4.9</p>
                  <i className="fa-solid fa-star"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="project-card">
            <img src={one} width="260" alt="" />
            <div className="project-details">
              <div className="left">
                <h2 className="card-title">fitternity</h2>
                <p className="card-date">4 November 2023</p>
              </div>
              <div className="right">
                
                <span className="like">
                  <p>12</p>
                  <i className="fa-solid fa-thumbs-up"></i>
                </span>
                <span className="rate">
                  <p>4.2</p>
                  <i className="fa-solid fa-star"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="project-card">
            <img src={one} width="260" alt="" />
            <div className="project-details">
              <div className="left">
                <h2 className="card-title">Scentancer</h2>
                <p className="card-date">11 March 2022</p>
              </div>
              <div className="right">
                
                <span className="like">
                  <p>12</p>
                  <i className="fa-solid fa-thumbs-up"></i>
                </span>
                <span className="rate">
                  <p>4.2</p>
                  <i className="fa-solid fa-star"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="project-card">
            <img src={one} width="260" alt="" />
            <div className="project-details">
              <div className="left">
                <h2 className="card-title">Fitrize</h2>
                <p className="card-date">10 April 2022</p>
              </div>
              <div className="right">
                
                <span className="like">
                  <p>12</p>
                  <i className="fa-solid fa-thumbs-up"></i>
                </span>
                <span className="rate">
                  <p>4.2</p>
                  <i className="fa-solid fa-star"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="project-card">
            <img src={one} width="260" alt="" />
            <div className="project-details">
              <div className="left">
                <h2 className="card-title">Scentancer</h2>
                <p className="card-date">10 october 2022</p>
              </div>
              <div className="right">
                
                <span className="like">
                  <p>12</p>
                  <i className="fa-solid fa-thumbs-up"></i>
                </span>
                <span className="rate">
                  <p>4.2</p>
                  <i className="fa-solid fa-star"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="project-card">
            <img src={one} width="260" alt="" />
            <div className="project-details">
              <div className="left">
                <h2 className="card-title">Scentancer</h2>
                <p className="card-date">10 october 2022</p>
              </div>
              <div className="right">
                
                <span className="like">
                  <p>12</p>
                  <i className="fa-solid fa-thumbs-up"></i>
                </span>
                <span className="rate">
                  <p>4.2</p>
                  <i className="fa-solid fa-star"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}

export default Projects