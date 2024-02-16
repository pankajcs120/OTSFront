import React, { useState } from "react";
import "./Featured.scss";
import gher from "../../../public/img/blink.gif";
import { useNavigate } from "react-router-dom";

function Featured() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/gigs?search=${input}`);
  };
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Perfect Place To Find <span>Desired Property</span> You Are Looking For
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input
                type="text"
                placeholder='search for House/PG/Flats'
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <button onClick={handleSubmit}>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Flats</button>
            <button>Hostel</button>
            <button>PG</button>
            <button>House</button>
          </div>
        </div>
        <div className='right'>
              <img src={gher} alt='' />
         </div>
      </div>
    </div>
  );
}

export default Featured;
