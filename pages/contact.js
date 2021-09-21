import React from "react";
import * as emailjs from "emailjs-com";

import {
  FaBeer,
  FaFacebook,
  FaPhoneVolume,
  FaPlaceOfWorship,
  FaVoicemail,
  FaEnvelope,
  FaSkype,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const contact = () => {
  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "gmail",
  //       "template_0oegcxu",
  //       form.current,
  //       "user_LHsecyZ4rBf2T3jCUlWO9"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7wgnz3q",
        "template_0oegcxu",
        e.target,
        "user_LHsecyZ4rBf2T3jCUlWO9"
      )
      .then(
        (result) => {
          if (result) {
            alert("your message successfully sent!");
          }
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div className="antialiased bg-gray-100 pt-20  sm:pb-0 pb-24 lg:pb-18">
      <div className="flex w-full min-h-screen justify-center items-center">
        <div className="flex  flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-indigo-900 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white">
          {/* contact info */}
          <div className="flex flex-col space-y-8 justify-between">
            <div>
              <h1 className="font-bold text-4xl tracking-wide">Contact Us</h1>
              <p className="pt-2 text-white text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
                rerum temporibus magnam!
              </p>
            </div>
            {/*contact info icon */}
            <div className="flex flex-col space-y-6">
              <div className="inline-flex space-x-2 items-center">
                <FaPhoneVolume
                  className="cursor-pointer"
                  size="1.2rem"
                  color="white"
                />
                <span>+0000 123 456 789</span>
              </div>

              <div className="inline-flex space-x-2 items-center">
                <FaEnvelope
                  className="cursor-pointer"
                  size="1.2rem"
                  color="white"
                />
                <span>info@example.com</span>
              </div>

              <div className="inline-flex space-x-2 items-center">
                <FaPlaceOfWorship
                  className="cursor-pointer"
                  size="1.2rem"
                  color="white"
                />
                <span>1203 Town Center Drive FL 33458 BD</span>
              </div>
            </div>
            <div className="flex space-x-4 text-lg">
              <a href="#">
                <FaFacebook />
              </a>

              <a href="#">
                <FaSkype />
              </a>

              <a href="#">
                <FaTwitter />
              </a>

              <a href="#">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* contact form */}
          <div className="relative">
            <div className="bg-white rounded-xl shadow-lg p-8 text-indigo-900 md:w-80">
              <form className="flex flex-col space-y-4" onSubmit={sendEmail}>
                <div>
                  <label htmlFor="" className="text-sm">
                    Your Name
                  </label>

                  <input
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    className="ring-1 ring-indigo-900 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2"
                  />
                </div>

                <div>
                  <label htmlFor="" className="text-sm">
                    Email address
                  </label>

                  <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                    className="ring-1 ring-indigo-900 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2"
                  />
                </div>

                <div>
                  <label htmlFor="" className="text-sm">
                    Message
                  </label>

                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Your Message"
                    className="ring-1 ring-indigo-900 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2"
                  />
                </div>

                <input
                  type="submit"
                  value="Send Message"
                  className="inline-block self-end bg-indigo-900 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm"
                />

                {/* <button className="inline-block self-end bg-indigo-900 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">
                  Send Message
                </button> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
