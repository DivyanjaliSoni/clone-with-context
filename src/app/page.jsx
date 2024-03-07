"use client"
import Index from "./index";
import { RouteProvider } from "./contexts";
import { useState } from "react";

export default function Home() {
  const [CurrentPage, setCurrentPage] = useState("login");
  const updateCurrentPage = (page) => {
    setCurrentPage(page);
  };
  return (
    <>
      <RouteProvider
        value={{
          CurrentPage,updateCurrentPage
        }}
      >
        <Index />
      </RouteProvider>
    </>
  );
}
