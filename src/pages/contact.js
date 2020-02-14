import { Layout } from "../components"
import React from "react"

export default function ContactPage({ location }) {
  return (
    <Layout location={location}>
      <div className="page container center padding">
        <br />
        <fieldset className="fieldset">
          <form
            className="form"
            name="netlify-contact-form"
            method="POST"
            data-netlify="true"
          >
            {/* This hidden input needs to be here for netlify form */}
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
      </div>
    </Layout>
  )
}
