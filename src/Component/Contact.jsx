import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullName: "",
    phone: "",
    email: "",
    massage: "",
  });

  const inputEvent = (e) => {
    const { name, value } = e.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My name is ${data.fullName} My mobile number is ${data.phone} My email is ${data.email}  My message is${data.massage}`
    );
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us </h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="form-group">
                <label>FullName</label>
                <input
                  type="text"
                  className="my-2 form-control"
                  id="exampleInputName"
                  name="fullName"
                  value={data.fullName}
                  onChange={inputEvent}
                  placeholder="Enter Your Name"
                />
              </div>
              <div>
                <label>Phone</label>
                <input
                  type="text"
                  className="my-2 form-control"
                  id="exampleInputNumber"
                  name="phone"
                  value={data.phone}
                  onChange={inputEvent}
                  placeholder="Enter Your Number"
                />
              </div>
              <div>
                <label>Email address</label>
                <input
                  type="email"
                  className="my-2 form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                  placeholder="Enter Your email"
                />
              </div>
              <div>
                <label>Message</label>
                <textarea
                  className="my-2 form-control"
                  id="exampleformControlTextarea"
                  rows="3"
                  name="massage"
                  value={data.massage}
                  onChange={inputEvent}
                  placeholder="Write message here"
                ></textarea>
              </div>
              <button type="submit" className=" my-1 btn btn-outline-primary">
                Submit form
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
