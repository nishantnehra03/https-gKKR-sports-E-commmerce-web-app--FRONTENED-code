import React from "react";
import "./Contact.scss";

function Contact() {
  return (
    <div>
      <section class="contact " id="Contact">
        <hr />
        <h1 class="text-center">CONTACT </h1>
        <form class="form">
          <input
            class="form-group"
            type="text "
            name="name "
            id="name "
            placeholder="Enter your Name "
          />

          

          <input
            class="form-group"
            type="text "
            name="email "
            id="email "
            placeholder="Enter your Email Id "
          />

          <input
            class="form-group"
            type="text "
            name="mobile "
            id="mobile "
            placeholder="Enter your Phone Number "
          />

          <textarea
            class="form-group"
            name="text "
            id="text "
            placeholder="Elaborate your Concern "
            cols="20 "
            rows="6 "></textarea>

          <button type="submit " class="btn">
          <a href="#Contact ">Submit</a>
            
          </button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
