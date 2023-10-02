import React from "react";
import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles,  } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Design = () => {
  const [isActive, setIsActive] = useState(0);
  const [progress, setProgress] = useState(0);

  var timer;
  useEffect(() => {
    timer = setInterval(() => {
      setProgress(progress + 1);
      if (progress === 59) {
        setIsActive(isActive + 1);
        setProgress(0);
      }
    }, 1000);
    return () => clearInterval(timer);
  });

  const startTimer = () => {
    setIsActive(0);
    setProgress(0);
  };
  const stopTimer = () => {
    clearInterval(timer);
  };

  return (
    <>
      <div className="nav">
        <img
          src="/images/bgremove.png.png"
          id="logo"
          alt="A beautiful sunset over the mountains"
        />
        <div className="color">
          <div className="col color1">HOME</div>
          <div className="col color2">ABOUT</div>
          <div className="col color3">CONTACT</div>
        </div>
      </div>
      <div className="main">
      <div className="image1">
     
        <img
          src="/images/image2@2x.beb9005f.png"
          alt="A beautiful sunset over the mountains"
          id="idea"/>
          </div>
        
        <h1>
          <span>‘’</span> Dedicate Just 2 Minutes Twice A Day To Teeth Cleaning
          For A Lifetime Of Healthy Smiles
        </h1>
        <div className="elem">
          <div className="box">
            <div className="item" style={{ width: "150px", height: "102px" }}>
            <img
            id="tee"
    src="/images/th__6_-removebg-preview.png" 
    alt="Teeth"
    style={{
      position: 'absolute',
      top: '46%',
      left: '58%',
      transform: 'translate(-50%, -50%)',
      width: '30px', 
      height: '20px',
      borderRadius: '50%', 
      zIndex: '1', 
    }}
  />
              <CircularProgressbar
                value={progress}
                styles={buildStyles({
                 pathColor: "#F5D1BE",
                 trailColor: "white",
                })}
                strokeWidth={13} 
              />
            </div>
            <img
              src="/images/brushing-unscreen 1.b0ccebe7.png"
              alt="A beautiful sunset over the mountains" className="img5" />
          </div>
          <div className="rec">
            <div className="text">
              
                
                  {isActive < 10 ? "0" + isActive : isActive}:
                  {progress < 10 ? "0" + progress : progress}
                
            
            </div>

            <div className="btn1">
<button id="btn" onClick={stopTimer}> Pause </button>
              <button onClick={startTimer}>Cancel</button>
            </div>
          </div>
        </div>
        <div className="img12">
        <img
          id="btm"
          src="/images/image3@2x.58090194.png"
          alt="A beautiful sunset over the mountains"
        />
        </div>
      </div>
    </>
  );
};

export default Design;
