import React from "react";
// import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";

export default function Form2() {
  // Function that displays a success toast on bottom right of the page when form submission is successful
  // const toastifySuccess = () => {
  //   toast("Form successfully sent to Emily!", {
  //     position: "bottom-right",
  //     autoClose: 5000,
  //     hideProgressBar: true,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: false,
  //     className: "submit-feedback success",
  //     toastId: "notifyToast"
  //   });
  // };

  const {
    register,
    formState: { errors }
  } = useForm();

  // const sendEmail = (data, e) => {
  //   e.preventDefault();
  //
  //   register.then(
  //     result => {
  //       toastifySuccess();
  //       console.log("SUCCESS!", result.status, result.text);
  //     },
  //     error => {
  //       console.log("FAILED...", error.text);
  //     }
  //   );
  //   reset();
  //   toastifySuccess();
  // };

  return (
    <div className="ContactForm">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="contactForm">
              <form
                name="contact"
                method="post"
                id="contact-form"
                data-netlify="true"
              >
                {/* Row 1 of form */}
                <input type="hidden" name="form-name" value="contact" />
                <div className="row formRow">
                  <div className="col-6">
                    <p>
                      <label htmlFor="name"></label>
                      <br />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        {...register("name", {
                          required: {
                            value: true,
                            message: "Please enter your name"
                          },
                          maxLength: {
                            value: 30,
                            message: "Please use 30 characters or less"
                          }
                        })}
                        className="form-control formInput"
                        placeholder="Name"
                        required
                      />
                      {errors.name && (
                        <span className="errorMessage">
                          {errors.name.message}
                        </span>
                      )}
                    </p>
                  </div>
                  <div className="col-6">
                    <p>
                      <label htmlFor="email"></label> <br />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        {...register("email", {
                          required: true,
                          pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                        })}
                        className="form-control formInput"
                        placeholder="Email address"
                        required
                      />
                      {errors.email && (
                        <span className="errorMessage">
                          Please enter a valid email address
                        </span>
                      )}
                    </p>
                  </div>
                </div>
                {/* Row 2 of form */}
                <div className="row formRow">
                  <div className="col">
                    <p>
                      <label htmlFor="subject"></label> <br />
                      <input
                        type="subject"
                        id="subject"
                        name="subject"
                        {...register("subject", {
                          required: {
                            value: true,
                            message: "Please enter a subject"
                          },
                          maxLength: {
                            value: 75,
                            message: "Subject cannot exceed 75 characters"
                          }
                        })}
                        className="form-control formInput"
                        placeholder="Subject"
                        required
                      />
                      {errors.subject && (
                        <span className="errorMessage">
                          {errors.subject.message}
                        </span>
                      )}
                    </p>
                    <p>
                      <label htmlFor="message"></label> <br />
                      <textarea
                        id="message"
                        name="message"
                        {...register("message", {
                          required: true
                        })}
                        className="form-control formInput"
                        placeholder="Message"
                        required
                      ></textarea>
                      {errors.message && (
                        <span className="errorMessage">
                          Please enter a message
                        </span>
                      )}
                    </p>
                  </div>
                </div>
                <br />
                {/* Row 3 of form */}
                <div className="row formRow">
                  <div className="col">
                    <p>
                      <input
                        type="submit"
                        value="Send message to Emily"
                        className="submit-btn"
                      />
                    </p>
                  </div>
                </div>
              </form>
            </div>
            {/*<ToastContainer className="toastifySuccess" />*/}
          </div>
        </div>
      </div>
    </div>
  );
}
