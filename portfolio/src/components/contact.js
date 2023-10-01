import React from "react";

function Contact({validEmail, setValidEmail, emptyName, setEmptyName, emptyEmail, setEmptyEmail, emptyMessage, setEmptyMessage}) {

  function handleEmptyField(event) {
    const { target } = event;

    switch (target.id) {
      case 'name':
        if(target.value === '') {
          setEmptyName(true);
         } else {
           const regex = /[a-zA-z]{3,}/;
           const result = regex.test(String(target.value).toLowerCase());
           if(result) {
             setEmptyName(false);
           }
           else if(!result) {
             setEmptyName(true);
           }
         }
        break;
      case 'email':
        if(target.value === '') {
          setEmptyEmail(true);
         } else {
           setEmptyEmail(false)
         }
        break;
      case 'message':
        if(target.value === '') {
          setEmptyMessage(true);
         } else {
           const regex = /[a-zA-z]{3,}/;
           const result = regex.test(String(target.value).toLowerCase());
           if(result) {
             setEmptyMessage(false);
           }
           else if(!result) {
             setEmptyMessage(true);
           }
         }
        break;
      default:
        break;
    }
  }

  function checkEmail(event) {
    const { target } = event;
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const result = regex.test(String(target.value).toLowerCase());
    setValidEmail(result);
    return result;
  }

  return (
    <div>
      <div className='row'>
        <p className='display-3 text-center'>Contact</p>
        <div className='col'>
          <form className="needs-validation">
            <div className="pb-3 pt-3">
              <label className="form-label">Name:</label>
              <input 
              type="text" 
              className="form-control" 
              id="name" 
              placeholder="Your name"
              onMouseOut={handleEmptyField}>
              </input>
              {(emptyName) ? 
                (<div className="text-danger">Please Enter at least 3 characters</div>) : 
                (<div></div>)
              }
            </div>
            <div className="pb-3 pt-3">
              <label className="form-label">Email:</label>
              <input 
              type="email" 
              className="form-control" 
              id="email" 
              placeholder="Enter email" 
              name="email"
              onMouseOut={handleEmptyField}
              onChange={checkEmail}
              onBlur={checkEmail}>
              </input>
              {
                (emptyEmail) ? 
                  (<div className="text-danger">Please enter an email</div>) : 
                  (<div></div>)
              }
              {
                (!validEmail && !emptyEmail) ? 
                  (<div className="text-danger">Please enter a valid email</div>) : 
                  (<div></div>)
              }
            </div>
            <div className="pb-3 pt-3">
              <label className="form-label">Message:</label>
              <textarea 
              className="form-control" 
              rows="3" 
              id="message" 
              name="text"
              onMouseOut={handleEmptyField}>
              </textarea>
              {
                (emptyMessage) ? 
                (<div className="text-danger">Please enter a message</div>) : 
                (<div></div>)
              }
            </div>
            <div className="pb-3 pt-3 d-flex justify-content-center">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;