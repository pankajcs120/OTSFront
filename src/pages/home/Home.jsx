import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";
import CatCard from "../../components/catCard/CatCard";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { cards, projects } from "../../data";

function Home() {
  return (
    <div className="home">
      <Featured />
      {/* <TrustedBy /> */}
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>One Stop Solution For Any Type Of Rental Property </h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Find Perfect Property Without Any Hassle
            </div>
            <p>
              Select category (e.g. Flat,PG) and loof for your desired property at your desired location in just one click.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Tenant Communication Hub
            </div>
            <p>
            Stay connected with our tenant communication platform. Receive important updates, announcements, and communicate directly with property management.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Quick Overview Of Property 
            </div>
            <p>
              You Can take a quick overview of property with the help of images uploaded by landlord of the property.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Transparent Ratings and Reviews
            </div>
            <p>
            Read transparent reviews from fellow tenants. Share your experiences to help others in our community.
            </p>
          </div>
          <div className="item">
            <img src="./img/bulb.gif" controls />
          </div>
        </div>
      </div>
      <div className="explore">
        <div className="container">
          <h1>HOW IT WORKS</h1>
          <div className="items">
            <div className="item">
              <img
                src="./img/category.png"
                alt=""
              />
              <div className="line"></div>
              <span>Select Category(Flat/PG/House/etc.)</span>
            </div>
            <div className="item">
              <img
                src="./img/find.png"
                alt=""
              />
              <div className="line"></div>

              <span>Find property on OTS</span>
            </div>
            <div className="item">
              <img
                src="./img/look1.webp"
                alt=""
              />
              <div className="line"></div>
              <span>Get quicklook of property & essential features </span>
            </div>
            <div className="item">
              <img
                src="./img/comm1.png"
                alt=""
              />
              <div className="line"></div>
              <span>Communicate & Negotiate with landlord</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Lock the deal</span>
            </div>
            <div className="item">
              
              
            </div>
            <div className="item">
              
              
            </div>
            <div className="item">
              
              
            </div>
            <div className="item">
              
              
            </div>
            <div className="item">
             
      
            </div>
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>
              MISSION & <i>VALUES</i>
            </h1>
            <h1>
            "At OTS,We are committed to simplify the rental process and providing innovative and seamless solutions. <i></i>
            </h1>
            <p>
            Our vision is to make finding and enjoying a home an effortless and fulfilling experience for every tenant we serve.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Customer-Centric Approach
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Integrity and Transparency
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Real-time communication, ensuring that tenants and property manager can stay connected.
            </div>
            <button>Get Started</button>
          </div>
          <div className="item">
            <img
              src="https://cdn.dribbble.com/users/11834937/screenshots/19234028/media/49e136af13910630e69ca08fc4f6271d.gif"
              alt=""
            />
          </div>
        </div>
      </div>
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </Slide>
    </div>
  );
}

export default Home;
