import React from "react";
import { Link } from "react-router-dom";
import "./MyGigs.scss";
import getCurrentUser from "../../utils/getCurrentUser";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

function MyGigs() {
  const currentUser = getCurrentUser();
  
console.log("CurrentUser:", currentUser);

  const queryClient = useQueryClient();

  // const { isLoading, error, data } = useQuery({
  //   queryKey: ["myGigs"],
  //   queryFn: () =>
  //     newRequest.get(`/gigs?userId=${currentUser.id}`).then((res) => {
  //       return res.data;
  //     }),
  // });

  // 2 type
  // const { isLoading, error, data } = useQuery({
  //   queryKey: ["myGigs"],
  //   queryFn: () =>
  //     newRequest.get(`/gigs?userId=${currentUser.id}`).then((res) => {
  //       console.log("Gigs Data:", res.data); // Log the data
  //       return res.data;
  //     }),
  // });

  const userId = currentUser && currentUser.id;
  // const { isLoading, error, data } = useQuery({
  //   queryKey: ["myGigs"],
  //   queryFn: () => {
  //     if (!currentUser || !currentUser.id) {
  //       // Handle the case where userId is undefined
  //       return Promise.resolve([]);
  //     }
  //     return newRequest.get(`/gigs?userId=${currentUser.id}`).then((res) => res.data);
  //   },
  // });
  const { isLoading, error, data } = useQuery({
    queryKey: ["myGigs"],
    queryFn: () => {
      if (!currentUser || !currentUser._id) {
        // Handle the case where userId is undefined
        return Promise.resolve([]);
      }
      return newRequest.get(`/gigs?userId=${currentUser._id}`).then((res) => res.data);
    },
  });
  
  


  // const { isLoading, error, data } = useQuery({
  //   queryKey: ["myGigs"],
  //   queryFn: () =>
  //     newRequest.get(`/gigs?userId=${currentUser.id}`).then((res) => res.data),
  //   enabled: !!currentUser, // Execute the query only if currentUser is truthy
  // });

  
  

  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.delete(`/gigs/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myGigs"]);
    },
  });

  const handleDelete = (id) => {
    mutation.mutate(id);
  };

  
  return (
    <div className="myGigs">
      {isLoading ? (
        "loading"
      ) : error ? (
        "error"
      ) : (
        <div className="container">
          <div className="title">
            <h1>Property</h1>
            {currentUser.isSeller && (
              <Link to="/add">
                <button>Add New property</button>
              </Link>
            )}
          </div>
          {/* <table>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Sales</th>
              <th>Action</th>
            </tr>
            {data.map((gig) => (
              <tr key={gig._id}>
                <td>
                  <img className="image" src={gig.cover} alt="" />
                </td>
                <td>{gig.title}</td>
                <td>{gig.price}</td>
                <td>{gig.sales}</td>
                <td>
                  <img
                    className="delete"
                    src="./img/delete.png"
                    alt=""
                    onClick={() => handleDelete(gig._id)}
                  />
                </td>
              </tr>
            ))}
          </table> */}
          
<table>
  <thead>
    <tr>
      <th>Cover Image</th>
      <th>Location</th>
      <th>Price</th>
      <th></th>
      <th>available</th>
    </tr>
  </thead>
  <tbody>
    {data.map((gig) => (
      <tr key={gig._id}>
        <td>
          <img className="image" src={gig.cover} alt={gig.title} />
        </td>
        <td>{gig.title}</td>
        <td>{gig.price}</td>
        {/* <td>{gig.sales}</td> */}
        <td>
          <img
            className="delete"
            src="./img/delete.png"
            alt=""
            onClick={() => handleDelete(gig._id)}
          />
        </td>
      </tr>
    ))}
  </tbody>
</table>
        </div>
      )}
    </div>
  );
}

export default MyGigs;
