import React from "react";
// import React, {useState} from 'react';

// function Contact() {
//     const [data,setData]=useState(null)
//     const [print,setPrint]=useState(false)
//     function getData(val)
//     {
//         setData(val.target.value)
//         setPrint(false)
//         console.log(val.target.value)
//     }
//     return (
//       <section>
//         <h1 id="contact">
//         {
//             print?
//             <h1>{data}</h1>
//             :null
//         }
//         <input type = "text" onChange={getData}/>
//         <button onClick={() => setPrint(true)}>Print Value</button>
//         <input type = "text" onChange={getData}/>
//         <button onClick={() => setPrint(true)}>Print Value</button>
//         <input type = "text" onChange={getData}/>
//         <button onClick={() => setPrint(true)}>Print Value</button>
//         </h1>
//       </section>
//     );
//   }

function Contact() {
    return (
        <section>
          <h1>Contact me</h1>
          <form id="contact-form">
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" />
            </div>
            <div>
              <label htmlFor="email">Email address:</label>
              <input type="email" name="email" />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea name="message" rows="5" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </section>
        );
}

export default Contact;
