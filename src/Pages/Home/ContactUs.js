import React from "react";

const ContactUs = () => {
  return (
    <section id="contact">
      <div className="contact-section">
        <div className="ufrer-part">
          <div className="p-4 text-center">
            <h5 className="text-secondary">Let’s get in touch</h5>
            <h1 className="fw-bolder ">
              Are You <span className="theme-text"> Developing a project?</span>{" "}
            </h1>
            <p className="text-secondary">We Will Build Your Community</p>
          </div>
        </div>

        <div className="the-contact-form">
          <form action="">
            <div className="the-first-block">
              <div className="input-holder">
                <div className="the-block form-floating mb-3">
                  <input type="txt" className="form-control" id="floatingInput" placeholder="NAME*" />
                  <label for="floatingInput">NAME*</label>
                </div>
              </div>
              <div className="input-holder">
                <div className="the-block form-floating mb-3">
                  <input type="email" className="form-control" id="email" placeholder="EMAIL*" />
                  <label for="email">EMAIL*</label>
                </div>
              </div>
            </div>

            <div className="the-second-block">
              <div className="input-holder">
                <div className="the-block form-floating mb-3">
                  <div className="the-block form-floating mb-3">
                    <input type="txt" className="form-control" id="projectTitle" placeholder="PROJECT TITLE*" />
                    <label for="projectTitle">PROJECT TITLE*</label>
                  </div>
                </div>
              </div>

              <div className="the-third-block">
                <div className="the-block form-floating mb-3">
                  <div className="the-block form-floating mb-3">
                    <textarea placeholder="ABOUT YOUR PROJECT*" className="form-control" name="" id="projectTitle" cols="30" rows="10"></textarea>
                    <label for="projectTitle">ABOUT YOUR PROJECT*</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="the-third-block">
              <input type="submit" className="submit-button" value="SUBMIT" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
