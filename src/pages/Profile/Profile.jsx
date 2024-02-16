import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import getCurrentUser from "../../utils/getCurrentUser";
import newRequest from "../../utils/newRequest";
import { useQuery } from "@tanstack/react-query";

import "./Profile.scss";

const Profile = () => {
  const currentUser = getCurrentUser();

  const { isLoading, error, data: gigsData } = useQuery({
    queryKey: ["myGigs"],
    queryFn: () => {
      if (!currentUser || !currentUser._id) {
        // Handle the case where userId is undefined
        return Promise.resolve([]);
      }
      return newRequest.get(`/gigs?userId=${currentUser._id}`).then((res) => res.data);
    },
  });

  useEffect(() => {
    // This effect runs only once when the component mounts
    // You can perform additional actions here if needed
  }, []);

  const userImage = currentUser.img || "../../../public/img/noavatar.jpg";

  return (
    <div className="profile-container">
      {isLoading ? (
        "Loading..."
      ) : error ? (
        "Error loading user profile"
      ) : (
        <div className="profile-card">
          <div className="profile-header">
            <img className="profile-image" src={userImage} alt="User" />
            <div className="profile-info">
              <h1>{currentUser.username}</h1>
              <p>Email: {currentUser.email}</p>
              <p>Total properties: {currentUser.totalGigs}</p>
              <p>Is Seller: {currentUser.isSeller ? "Yes" : "No"}</p>
              <p>Country: {currentUser.country}</p>
              <p>Joined: {new Date(currentUser.createdAt).toLocaleDateString()}</p>
            </div>
          </div>

          <h2></h2>
          {gigsData ? (
            <ul className="gig-list">
              {gigsData.map((gig) => (
                <li key={gig._id}>
                  <Link to={`/gig/${gig._id}`}>{gig.title}</Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>No gigs available.</p>
          )}

          <Link to="/">
            <button className="back-button">Back</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Profile;
