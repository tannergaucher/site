import React from "react"

export default function ContactSection() {
  return (
    <section className="container center padding">
      <h2 id="contact">Contact</h2>
      <br />
      <fieldset className="fieldset">
        <form
          className="form"
          name="netlify-contact-form"
          method="POST"
          data-netlify="true"
        >
          {/* Hidden input is here because of netlify form */}
          <input
            className="input"
            type="hidden"
            name="form-name"
            value="netlify-contact-form"
          />
          <input
            className="input"
            type="email"
            name="contact-form-email"
            placeholder="Your Email"
            required
          />
          <textarea
            className="textarea"
            type="text"
            name="contact-form-message"
            cols="10"
            rows="10"
            placeholder="Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
      </fieldset>
    </section>
  )
}
