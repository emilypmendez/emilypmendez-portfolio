import React, { useRef } from "react";
import { useForm } from "react-hook-form";
// import { send } from "emailjs-com";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { init } from "@emailjs/browser";

const ContactForm = () => {
  init("1OP-vqGmz-t_eBqLk"); // https://dashboard.emailjs.com/admin/integration
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  // Function that displays a success toast on bottom right of the page when form submission is successful
  const toastifySuccess = () => {
    toast("Form successfully sent to Emily!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast"
    });
  };

  const form = useRef();

  const sendEmail = (data, e) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.target
      )
      .then(
        result => {
          toastifySuccess();
          console.log("SUCCESS!", result.status, result.text);
        },
        error => {
          console.log("FAILED...", error.text);
        }
      );
    reset();
  };

  // Function called on submit that uses emailjs to send email of valid contact form
  // const onSubmit = async data => {
  //   // Destructure data object
  //   const { name, email, subject, message } = data;
  //   try {
  //     const templateParams = {
  //       name,
  //       email,
  //       subject,
  //       message
  //     };
  //     await emailjs.sendForm(
  //       process.env.REACT_APP_SERVICE_ID,
  //       process.env.REACT_APP_TEMPLATE_ID,
  //       templateParams,
  //       process.env.REACT_APP_USER_ID
  //     );
  //     reset(); // call reset function and reset the form
  //     toastifySuccess(); // call the toastifySuccess function to trigger the notification
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  return (
    <div className="ContactForm">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="contactForm">
              <form
                id="contact-form"
                onSubmit={handleSubmit(sendEmail)}
                noValidate
              >
                {/* Row 1 of form */}
                <div className="row formRow">
                  <div className="col-6">
                    <input
                      type="text"
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
                    ></input>
                    {errors.name && (
                      <span className="errorMessage">
                        {errors.name.message}
                      </span>
                    )}
                  </div>
                  <div className="col-6">
                    <input
                      type="email"
                      name="email"
                      {...register("email", {
                        required: true,
                        pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                      })}
                      className="form-control formInput"
                      placeholder="Email address"
                    ></input>
                    {errors.email && (
                      <span className="errorMessage">
                        Please enter a valid email address
                      </span>
                    )}
                  </div>
                </div>
                <br />
                {/* Row 2 of form */}
                <div className="row formRow">
                  <div className="col">
                    <input
                      type="text"
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
                    ></input>
                    {errors.subject && (
                      <span className="errorMessage">
                        {errors.subject.message}
                      </span>
                    )}
                  </div>
                </div>
                <br />
                {/* Row 3 of form */}
                <div className="row formRow">
                  <div className="col">
                    <textarea
                      rows={3}
                      name="message"
                      {...register("message", {
                        required: true
                      })}
                      className="form-control formInput"
                      placeholder="Message"
                    ></textarea>
                    {errors.message && (
                      <span className="errorMessage">
                        Please enter a message
                      </span>
                    )}
                  </div>
                </div>
                <br />
                <button className="submit-btn" type="submit">
                  Send Message to Emily
                </button>
              </form>
            </div>
            <ToastContainer className="toastifySuccess" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
