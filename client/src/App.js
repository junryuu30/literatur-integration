import 'bootstrap/dist/css/bootstrap.min.css';


import React, { useContext, useEffect, useState } from "react";
import "./css/style.css"
import Search from './pages/Search';
import Profile from './pages/Profile';
import LandingLi from "./pages/LandingLi";
import TryProfile from './pages/TryProfile';
import AllNavbar from './components/AllNavbar';
import SearchResult from './pages/SearchResult';
import DetailLiteratur from './pages/DetailLiteratur';
import MyCollection from './pages/MyCollection';
import AddLiterature from './pages/AddLiterature';
import BookVerification from './pages/BookVerification';
import Home from './pages/Home';
// import { Router } from 'react-router-dom';
import { Routes, Route, useNavigate } from "react-router-dom";
import EditProfile from './pages/EditProfile';
import { UserContext } from './components/context/userContext';
import { API, setAuthToken } from './config/api';

function App() {

  const [state, dispatch] = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  let navigate = useNavigate();

  // useEffect(() => {
  //   // Redirect Auth
  //   if (localStorage.token) {
  //     setAuthToken(localStorage.token);
  //   }

  //   if (state.isLogin === false && !isLoading) {
  //     navigate("/");
  //   }
  // }, [state]);

  const checkUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const response = await API.get("/check-auth");
      // If the token incorrect
      if (response.status === 404) {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }

      // Get user data
      let payload = response.data.data;
      // Get token from local storage
      payload.token = localStorage.token;

      // Send data to useContext
      dispatch({
        type: "USER_SUCCESS",
        payload,
      });
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <>
    <Routes>
      <Route exac path="/" element={<Home />} />
      <Route exac path="/search" element={<Search />} />
      <Route exac path="/search-result" element={<SearchResult />} />
      <Route exac path="/profile" element={<Profile />} />
      <Route exac path="/edit-profile" element={<EditProfile />} />
      <Route exac path="/my-collection" element={<MyCollection />} />
      <Route exac path="/add-literature" element={<AddLiterature />} />
      <Route exac path="/detail-literature/:id" element={<DetailLiteratur />} />
      <Route exac path="/verification" element={<BookVerification />} />
    </Routes>
  </>
  );
}

export default App;
