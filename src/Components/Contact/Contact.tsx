import React from 'react'

const Contact = () => {
  return (
    <section id="contact-section">
      <main className="">
        <div className="title-container">
          <h1 className="page-title">Contact</h1>
          <p className="text-center">Feel free to contact us</p>
        </div>

        <form action="">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea
            name=""
            id=""
            cols={50}
            rows={5}
            placeholder="Write your message here"
        
          ></textarea>
          <input type="submit" value="Send Message" />
        </form>
      </main>
    </section>
  )
}

export default Contact