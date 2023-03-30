import React from 'react'

const Footer = () => {
  return (
    <footer className=" ">
      <a
        href="/"
        className="text-xl font-bold text-gray-600 transition-colors duration-300 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
      >
        Muhaimen Khatib
      </a>

      

      <div className="social-media-wrapper">
        <a
          href="https://linkedin.com/in/m5atib"
          className="social-icon-link"
          aria-label="Linkedin"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>

        <a
          href="https://facebook.com/m5atib"
          className="social-icon-link"
          aria-label="Facebook"
        >
          <i className="fa-brands fa-facebook"></i>
        </a>

        <a
          href="https://github.com/m5atib"
          className="social-icon-link"
          aria-label="Github"
        >
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </footer>
  )
}

export default Footer