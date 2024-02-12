import React from "react";
import "../features/Main/Main.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';

const BackToHome = () => {
    const navigate = useNavigate();
    const clickHandler = () => {
      navigate("/");
    };
    return (
      <div>
        <div className="mb-2 backhome-btn" onClick={clickHandler}>
        <FontAwesomeIcon icon={faLeftLong} className="px-2"/>
          Back to Home Page
        </div>
        <hr className=" mt-0" />
      </div>
    );
  };
  export default BackToHome;