import React from 'react'
import line from '../../Assets/svgs/hzline.svg'
const Skills = () => {
  return (
    <section id="skills-section">
      <main className="">
        <div className="title-container">
          <h1 className="page-title">Skills</h1>
        </div>
        <div className="center skills-wrapper">
          <div className="skill-card">
            <div className="circle-icon">
              <i className="fa-solid fa-comments"></i>
            </div>
            <div className="skill-card-detail-wrapp">
              <p className="card-skill-title">Communication</p>
              <div className="card-skill-rate">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
          </div>
          <img
            className="link-between-card"
            src={line}
            alt=""
          />
          <div className="skill-card">
            <div className="circle-icon">
              <i className="fa-solid fa-list-check"></i>
            </div>
            <div className="skill-card-detail-wrapp">
              <p className="card-skill-title">Leadership</p>
              <div className="card-skill-rate">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
          </div>
          <img
            className="link-between-card"
            src={line}
            alt=""
          />

          <div className="skill-card">
            <div className="circle-icon">
              <i className="fa-solid fa-people-group"></i>
            </div>
            <div className="skill-card-detail-wrapp">
              <p className="card-skill-title">Teamwork</p>
              <div className="card-skill-rate">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
          </div>
          <img
            className="link-between-card"
            src={line}
            alt=""
          />

          <div className="skill-card">
            <div className="circle-icon">
              <i className="fa-solid fa-pen-ruler"></i>
            </div>
            <div className="skill-card-detail-wrapp">
              <p className="card-skill-title">UX/UI Design</p>
              <div className="card-skill-rate">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
          </div>
          <img
            className="link-between-card"
            src={line}
            alt=""
          />

          <div className="skill-card">
            <div className="circle-icon">
              <i className="fa-solid fa-laptop-code"></i>
            </div>
            <div className="skill-card-detail-wrapp">
              <p className="card-skill-title">Frameworks</p>
              <div className="card-skill-rate">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}

export default Skills