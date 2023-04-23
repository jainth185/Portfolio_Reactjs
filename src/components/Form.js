import "./FormStyles.css"
// import React, { useState } from 'react'


const Form = () => {
  
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [subject, setSubject]= useState("");
    // const [message, setMessage]=useState("");
    // const handleSubmit = (event) => {
    //     event.preventDefault();
      
    //     const myForm = event.target;
    //     const formData = new FormData(myForm);
        
    //     fetch("/", {
    //       method: "POST",
    //       headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //       body: new URLSearchParams(formData).toString(),
    //     })
    //       .then(() => console.log("Form successfully submitted"))
    //       .catch((error) => alert(error));
    //   };
  return (
    <div className="form">
        <form action="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="/"/>
            <label>Your Name</label>
            <input type="text" name="name"></input>
            <label>Email</label>
            <input type="email" name="email"></input>
            <label>Subject</label>
            <input type="text" name="subject"></input> 
            <label>Message</label>
            <textarea rows="6" placeholder="Type your message here" name="message"/>
            <button className="btn" type="sumbit">Sumbit</button>
            <div data-netlify-recaptcha="true"></div>
      </form>
    </div>
  )
}

export default Form