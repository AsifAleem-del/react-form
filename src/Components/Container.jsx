import React, { useState } from 'react'
import styles from "./Container.module.css"

function Container() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(event);
        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);
    }

  return (
    <div className={styles.conatiner}>
      <form onSubmit={onSubmit}>
        <div className={styles.form_control}>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name'/>
        </div>
        <div className={styles.form_control}>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email'/>
        </div>
        <div className={styles.form_control}>
            <label htmlFor='text'>Text</label>
            <textarea name='text' rows='8'></textarea>
        </div>
        <button className={styles.submitButton} text="Submit Button">Submit Button</button>
      </form>
      <div> 
        <h1>Form Output</h1>
        <div>
            <span>Name: </span>
            <span>{name}</span>
        </div>
        <div>
            <span>Email: </span>
            <span>{email}</span>
        </div>
        <div>
            <span>Textarea: </span>
            <span>{text}</span>
        </div>
      </div>
    </div>
  )
}

export default Container
