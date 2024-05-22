import React, { useState } from 'react';


export default function About() {
  const [mystyle, setMystyle] = useState( {
    accordionItem: {
      backgroundColor: 'transparent',
      border: 'none',
      marginBottom: '16px',
    },
    accordionButton: {
      background: 'linear-gradient(45deg, #000000, #2575fc)',

      color: '#fff',
      borderRadius: '20px',
      padding: '15px 20px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      ':hover': {
        backgroundColor: '#555',
      },
    },
    accordionBody: {
      backgroundColor: '#f8f9fa',
      borderRadius: '20px',
      padding: '20px',
      color: '#000',
    },


  });
 const [btns,setbtns]=useState('Enable Light Mode');

 const togstyle=()=>{
if(mystyle.accordionButton.background==='linear-gradient(45deg, #000000 , #2575fc)')
{
setMystyle({
    accordionItem: {
        backgroundColor: 'transparent',
        border: 'none',
        marginBottom: '16px',
      },
      accordionButton: {
        background: 'linear-gradient(45deg, #6a11cb, #2575fc)',
        color: '#fff',
        borderRadius: '20px',
        padding: '15px 20px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        ':hover': {
          backgroundColor: '#555',
        },
      },
      accordionBody: {
        backgroundColor: '#f8f9fa',
        borderRadius: '20px',
        padding: '20px',
        color: '#000',
      },
})
setbtns("Enable dark Mode")
}
else
{
setMystyle({
accordionItem: {
      backgroundColor: 'transparent',
      border: 'none',
      marginBottom: '16px',
    },
    accordionButton: {
      background: 'linear-gradient(45deg, #000000 , #2575fc)',

      color: '#fff',
      borderRadius: '20px',
      padding: '15px 20px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      ':hover': {
        backgroundColor: '#555',
      },
    },
    accordionBody: {
      backgroundColor: '#f8f9fa',
      borderRadius: '20px',
      padding: '20px',
      color: '#000',
    },
})
setbtns("Enable light Mode")
}
};

  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center mb-5 text-dark">About Us</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item" style={mystyle.accordionItem}>
            <div className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={mystyle.accordionButton}
              >
                Our Story
              </button>
            </div>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={mystyle.accordionBody}>
                <p>
                  We are a team of passionate individuals who came together to
                  create something truly unique and innovative. Our journey began
                  with a simple idea, but through hard work and dedication, we've
                  turned it into a reality that we're incredibly proud of.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item" style={mystyle.accordionItem}>
            <div className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={mystyle.accordionButton}
              >
                Our Mission
              </button>
            </div>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={mystyle.accordionBody}>
                <p>
                  Our mission is to create innovative solutions that make people's
                  lives easier and more enjoyable. We strive to push the
                  boundaries of what's possible, always seeking new ways to
                  improve and evolve.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item" style={mystyle.accordionItem}>
            <div className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={mystyle.accordionButton}
              >
                Our Team
              </button>
            </div>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={mystyle.accordionBody}>
                <p>
                  Our team is made up of a diverse group of individuals from
                  various backgrounds and disciplines. What unites us is our
                  passion for creativity, innovation, and excellence. We work
                  together seamlessly, combining our unique perspectives and
                  expertise to create truly remarkable products and services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button type="button" className="btn btn-outline-dark mx-2" onClick={togstyle}>
       {btns}
      </button>
    </>
  );
}