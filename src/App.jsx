// import { useState } from 'react'
import "./App.css";
import SideMenu from "./Components/SideBar/SideMenu";
import MainBody from "./Components/MainBody/MainBody";

import { useEffect, useState } from "react";
import Login from "./Components/LoginPage/Login";

function App() {
  // const [isLogin, setLogIn] = useState(null);

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("userAccount");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const handleLogIn = (userData) => {
    setUser(userData);
  };
  const handleLogOut = () => setUser(null);

  useEffect(() => {
    if (user) {
      localStorage.setItem("userAccount", JSON.stringify(user));
    } else {
      localStorage.removeItem("userAccount");
    }
  }, [user]);

  return (
    <>
      {user ? (
        <div className="fullPage">
          <SideMenu className="sidemenuBar" user={handleLogOut} />
          <MainBody className="MainBody" />
        </div>
      ) : (
        <Login user={handleLogIn} />
      )}
    </>
  );
}

export default App;
