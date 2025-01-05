import React, { useContext } from "react";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const AdminDashboard = () => {
  
  const token = Cookies.get("accessToken") ?? "";
  const [accessToken, setAccessToken] = useState(token);
  const [userData, setUserData] = useState({});
  const [isTokenExpired, setIsTokenExpired] = useState(false);

  useEffect(() => {
    const getAuthenticatedUser = async () => {
      try {
        const response = await fetch("https://dummyjson.com/user/me", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`, // Pass JWT via Authorization header
          },
          // credentials: "include",
        });

        if (response && response.ok) {
          setIsTokenExpired(false);
          const data = await response.json();
          setUserData(data);
        } else if (response.status === 401) {
          setIsTokenExpired(true);
          console.log(response) //Token expired
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getAuthenticatedUser();
  }, [accessToken]);

if (isTokenExpired) {
    Cookies.remove("accessToken");
    window.location.href = "/";
  }
  
  return (
    <>
      <div className="container">
        <h1>Admin Dashboard</h1>
        {userData && ( // Check if userData is populated before accessing properties
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Phone</th>
                <th>Username</th>
                {/* Add more columns as needed */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{userData.id}</td>
                <td>{userData.firstName}</td>
                <td>{userData.lastName}</td>
                <td>{userData.email}</td>
                <td>{userData.age}</td>
                <td>{userData.phone}</td>
                <td>{userData.username}</td>
                {/* Add more columns as needed */}
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default AdminDashboard;
