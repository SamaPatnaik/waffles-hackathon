import React from 'react';
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className='lpgbody'>
      <div className='content'>
          <h1>Empower your health with the support <span className='deserve'>you deserve.</span></h1>
          {/* <p>It's easy! Connect with professionals in your area tailored to your preferences,
      & make lifelong friends who understand you.</p>
      <button>sign in</button> */}
      </div>

      <div className='para'>
      <p>It's easy! Connect with professionals in your area tailored to your preferences,
      & make lifelong friends who understand you.</p>
      <button>try chatbot</button>
      </div> 

      {/* <div className='signin'>
        <button>sign in</button>
      </div> */}
    </div>
  );
}

export default LandingPage;
