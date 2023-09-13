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
      <div className='row d-flex justify-content-center'>
        <div className='col-6 d-flex justify-content-around'>
          <a href="https://github.com/javieb5186">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
          </a>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
            </svg>
          </a>
          <a href="#">
            {/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
            <svg xmlns="http://www.w3.org/2000/svg" height="4em" viewBox="0 0 512 512">
              <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;