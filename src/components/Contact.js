import {useRef} from 'react'
import emailjs from '@emailjs/browser';
import Popup from './PopUp'
import './Contact.css'
import { useState } from 'react'


const Contact = () => {

    const [popUp, setPopUp] = useState(false);
    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_s3oqndd', 'template_mhldggn', form.current, 'lXN1DSOn5-N2FVE1O')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          openPop();
          e.target.reset()
      };

      function openPop() {
        setPopUp(true);
    }

  return (

    <section className="order" >



          
    <h6 className="heading">Contact Form Using EMAIL</h6>
                <div className="row">
               
                    <form  ref={form} onSubmit={sendEmail}>
    
    
                        <input type="text" placeholder="first name" name='user_name'  class="box" required
                           />
                        
                        <input type="email" placeholder="your email" name='user_email'class="box" required 
                         />

                        <input type="text" placeholder='subject' name='subject'  class="box" required 
                        />

                        <textarea id="textarea" cols="30" rows="4" name='message'class="box" placeholder="your message" required
                          ></textarea>

                        <button className="btn" class="btn"  type='submit'>Submit</button>
                    </form>
    
                    <Popup trigger={popUp}>
                        <h2>Success!</h2>
                        <br></br>
                        <h3>Form submitted</h3>
                    </Popup>
    
                    <div className="image" data-aos="fade-left">
                        <img src="https://firebasestorage.googleapis.com/v0/b/makingminds0.appspot.com/o/photos%2FContact.png?alt=media&token=27d23ee5-76bc-48bf-814b-543262ba9589" alt=""></img>
                    </div>
    
                </div>
    
            </section>
//     <div className='container'>
//         <h2 className='text-center'>CONTACT US</h2>
// <form ref={form} onSubmit={sendEmail} className='--form-control --card --flex-center --dir-column'>
// <input type="text" placeholder='NAME' name='user_name' required /><br />
// <input type="email" placeholder='email' name='user_email' required /><br />
// <input type="text" placeholder='subject' name='subject' required /><br />
// <textarea name='message' cols='30' rows='10'></textarea><br />
// <button className='--btn --btn-primary' type='submit'>SEND MESSAGE</button>
// </form>
//     </div>
  )
}

export default Contact