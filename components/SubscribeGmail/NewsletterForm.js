import { useState } from "react";
import { decode } from "html-entities";

const NewsletterForm = ({ status, message, onValidated }) => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState(null);

  const handleFormSubmit = () => {
    setError(null);

    if (!email) {
      setError("Please enter a valid email address");
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });

    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  };

  const handleInputKeyEvent = (event) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  };

  const getMessage = (message) => {
    if (!message) {
      return null;
    }
    const result = message?.split("-") ?? null;
    if ("0" !== result?.[0]?.trim()) {
      return decode(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? decode(formattedMessage) : null;
  };

  return (
    <>
      <div className="flex justify-center items-center w-screen mb-20">
        <section className="w-full bg-indigo-900">
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-1 my-4 lg:grid-cols-3">
              <div className="flex flex-row text-center justify-center text-white my-auto ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white my-auto mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                  />
                </svg>
                <h1 className="font-bold text-2xl md:text-3xl my-3 lg:my-0">
                  Subscribe for Join Us!
                </h1>
              </div>
              <div className="text-center text-white my-auto">
                <h2 className="text-xl my-3 lg:my-0">
                  Subscribe to get the new book collection.
                </h2>
              </div>
              <div className="py-2 mx-4 lg:py-10">
                <div className="bg-white shadow flex w-full">
                  <input
                    onChange={(event) => setEmail(event?.target?.value ?? "")}
                    type="email"
                    placeholder="Your email"
                    onKeyUp={(event) => handleInputKeyEvent(event)}
                    className="w-full  py-2 px-4 outline-none"
                  />
                  <button
                    className="bg-red-500 hover:bg-red-600 py-2 px-4"
                    onClick={handleFormSubmit}
                  >
                    <span className="text-white font-semibold">Subscribe</span>
                  </button>
                </div>
                {/* here all error and success message */}
                <div className="text-white font-semibold mt-1">
                  {status === "sending" && <div>Sending...</div>}
                  {status === "error" || error ? (
                    <div
                      className="text-red-600 font-semibold"
                      dangerouslySetInnerHTML={{
                        __html: error || getMessage(message),
                      }}
                    />
                  ) : null}
                  {status === "success" && status !== "error" && !error && (
                    <div
                      dangerouslySetInnerHTML={{ __html: decode(message) }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NewsletterForm;
