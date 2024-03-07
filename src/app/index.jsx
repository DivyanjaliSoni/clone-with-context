"use client";
import React, { useEffect } from "react";
import LogInOrSignuppage from "./Components/LoginOrSignup/page";
import { Toaster } from "react-hot-toast";
import { useRouteContext } from "./contexts";
import MyProfilePage from "./Components/MyProfile";
import ProfilePage from "./Components/Profile/page";
import SearchPage from "./Components/Search";
import MessageListPage from "./Components/MessageList"

const index = () => {
  const { CurrentPage } = useRouteContext();
  console.log(CurrentPage);
  return (
    <>
      {CurrentPage === "login" && !localStorage?.getItem("userLogIn") ? (
        <LogInOrSignuppage />
      ) : CurrentPage === "profile" ? (
        <ProfilePage />
      ) : CurrentPage === "myprofile" ? (
        <MyProfilePage />
      ) : CurrentPage === "search" ? (
        <SearchPage />
      ) : CurrentPage === "messagelist" ? (
        <MessageListPage />
      ) : (
        <ProfilePage />
      )}
      <Toaster />
    </>
  );
};

export default index;
