import React, { useState } from 'react';
import newimage from '../images/newimage.svg';
import './Design.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import userface from '../images/userface.svg';

function ImagesDemo() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmission = () => {
    setIsSubmitting(!isSubmitting);
};

  return (
    // <div className={`main1 ${isSubmitting ? 'submitting' : ''}` }>
    <div className={"main1"}>
      <div className='outer-design outer-design1'> </div>
      <div className='main'>
      <div className='img'>
        <img src={newimage} height='500' width='400' alt='New Image' />
      </div>
      <div className='comp'>
        <div className='user'>
          <img src={userface} height='100' width='100' alt='User Face' />
        </div>
        <h1>WELCOME</h1>
        <div className='comp1'>
          <FontAwesomeIcon icon={faUser} className='f'/>
          <input type="text" className="text" required></input>
          <label className="label" required>Name</label>
        </div>
        <div className='comp2'>
          <FontAwesomeIcon icon={faLock} className='f' />
          <input type="password" className="text" required ></input>
          <label className="label">Password</label>
        </div>
        <button onClick={handleSubmission}>
          Submit
        </button>
        <p>If you don't have any account <a href='Sign Up'>Sign Up</a> or</p>
        <div className='comp3'>
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faGithub} />
          <FontAwesomeIcon icon={faLinkedinIn} />
        </div>
      </div>
      {isSubmitting && (
        <div className='block'>
          <div className="model">
              <p onClick={handleSubmission}>X</p>
              <p>success!!!!!!woho</p>
          </div>
        </div>
      )}
      </div>

      
     
    </div>
  );
}

export default ImagesDemo;
