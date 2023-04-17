import "./FormStyles.css"
import React, { useState } from 'react'


const Form = () => {
  
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject]= useState("");
    const [message, setMessage]=useState("");
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        let result = await fetch('http://localhost:5000/register', {
            method: "post",
            body: JSON.stringify({ name, email, subject, message }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        console.warn(result);
        if (result) {
            alert("Thank you for your message !!");
            setEmail("");
            setName("");
            setSubject("");
            setMessage("");
        }
    }
  return (
    <div className="form">
        <form>
            <label>Your Name</label>
            <input type={"text"} value={name} onChange={(e) => setName(e.target.value)}></input>
            <label>Email</label>
            <input type={"email"} value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <label>Subject</label>
            <input type={"text"} value={subject} onChange={(e) => setSubject(e.target.value)}></input> 
            <label>Message</label>
            <textarea rows="6" placeholder="Type your message here" value={message} onChange={(e) => setMessage(e.target.value)}/>
            <button className="btn" onClick={handleOnSubmit}>Sumbit</button>
      </form>
    </div>
  )
}

export default Form