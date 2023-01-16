import React from 'react'
import small from '../../Assets/svgs/smallimageProfile.svg'
const Awards = () => {
  return (
    <section id="awards-section">
      <main className="">
        <div className="title-container">
          <h1 className="page-title">Awards</h1>
        </div>
        <div className="rows  ">
          <div className="row-1">
            <div className="award-card small-award-card opacity-low">
              <div className="icons-box"></div>
              <div className="details-box"></div>
            </div>
            <div className="award-card large-award-card">
              <div className="icons-box"></div>
              <div className="details-box"></div>
            </div>
            <div className="award-card large-award-card">
              <div className="icons-box"></div>
              <div className="details-box"></div>
            </div>
            <div className="award-card small-award-card opacity-low">
              <div className="icons-box"></div>
              <div className="details-box"></div>
            </div>
          </div>
          <div className="row-2">
            <div className="award-card large-award-card">
              <div className="icons-box"></div>
              <div className="details-box"></div>
            </div>
            <div className="award-card small-award-card">
              <div className="icons-box"></div>
              <div className="details-box"></div>
            </div>
            <div className="award-card small-award-card">
              <div className="icons-box"></div>
              <div className="details-box"></div>
            </div>
          </div>
          <div className="row-3">
            <div className="award-card small-award-card opacity-low">
              <div className="icons-box"></div>
              <div className="details-box"></div>
            </div>
            <div className="award-card large-award-card">
              <div className="icons-box"></div>
              <div className="details-box"></div>
            </div>
            <div className="award-card large-award-card">
              <div className="icons-box"></div>
              <div className="details-box"></div>
            </div>
            <div className="award-card small-award-card opacity-low">
              <div className="icons-box"></div>
              <div className="details-box"></div>
            </div>
          </div>
        </div>

        <article className="qoutation-box">
          <p className="qoute">
            "It's not the distance, but the goal you want to achieve"
          </p>
          <div className="writer">
            <img src={small} alt="" />
            <a href='https://khatib.netlify.app'>Muhaimen Khatib</a>
          </div>
        </article>
      </main>
    </section>
  )
}

export default Awards