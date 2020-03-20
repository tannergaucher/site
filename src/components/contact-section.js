import React from "react"

export default function ContactSection() {
  return (
    <section className="padding container center">
      <hr />
      <h2
        className="text--xxl"
        id="contact"
        style={{ margin: `var(--space-xl) 0` }}
      >
        Contact
      </h2>
      <fieldset className="fieldset">
        <form
          className="form"
          name="netlify-contact-form"
          method="POST"
          data-netlify="true"
        >
          {/* Hidden input is here for netlify form */}
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
      <br />
    </section>
  )
}
