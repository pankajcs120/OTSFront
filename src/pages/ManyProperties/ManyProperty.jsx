// ManyProperty.jsx
import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from 'react';
import SearchBar from '../../components/searchBar/SearchBar';
import GigCard from '../../components/gigCard/GigCard';
import newRequest from '../../utils/newRequest';
import { useLocation } from 'react-router-dom';
import getCurrentUser from "../../utils/getCurrentUser";
import { useQuery } from '@tanstack/react-query';

const ManyProperty = () => {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();

  const { search } = useLocation();
  
  const currentUser = getCurrentUser();
  console.log(currentUser);

  
  // const { isLoading, error, data: allGigsData ,refetch} = useQuery({
  //   queryKey: ["allGigs"], // You can use a different key if needed
  //   queryFn: () =>
  //     newRequest.get("/gigs").then((res) => res.data), // Fetch all gigs
  // });

  const { isLoading, error, data: allGigsData ,refetch} = useQuery({
    queryKey: ["gigs"],
    queryFn: () => {
      const baseRequest = newRequest.get("/gigs");
      
      if (search) {
        // If search is present, make the search request
        return baseRequest
          .get(`/gigs${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`)
          .then((res) => res.data);
      } else {
        // If no search, just make the base request
        return baseRequest.then((res) => res.data);
      }
    },
  });
  
  useEffect(() => {
    // This effect runs only once when the component mounts
    // You can perform additional actions here if needed
  }, []);

  // console.log(data);
  
  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  useEffect(() => {
    refetch();
  }, [sort]);

  const apply = () => {
    refetch();
  };

 
  // const userImage = currentUser.img || "../../../public/img/noavatar.jpg";
  return (
               
    //       <h2>All Gigs:</h2>
    //   {allGigsData ? (
    //     <ul>
    //       {allGigsData.map((gig) => (
    //         <li key={gig._id}>
    //           <Link to={`/gig/${gig._id}`}>{gig.title}</Link>
    //         </li>
    //       ))}
    //     </ul>
    //   ) : (
    //     <p>No gigs available.</p>
    //   )}
    //       <Link to="/">
    //         <button className="back-button">Back</button>
    //       </Link>

    //     </>
    //   )}
    // </div>
    <div className="gigs">
    <div className="container">
      <span className="breadcrumbs"> ,</span>
      <h1>All Listed Properties</h1>
      <p>
        Below are all the listed properties
      </p>
      <div>
        <SearchBar/>
      </div>
      <div className="cards">
        {isLoading
          ? "loading"
          : error
          ? "Something went wrong!"
          : allGigsData.map((gig) => <GigCard key={gig._id} item={gig} />)}
      </div>
    </div>
  </div>
  );
};

export default ManyProperty;
