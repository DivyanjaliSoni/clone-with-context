"use client";
import React, { useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FaHome } from "react-icons/fa";
import { FiPlusCircle } from "react-icons/fi";
import { FaVideo } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { FiUpload } from "react-icons/fi";
import axios from "axios";
import { mutate } from "swr";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useRouteContext } from "@/app/contexts";


const ProfileFooter = () => {
  const [footerSlider, openFooterSlider] = useState(false);
  const { updateCurrentPage } = useRouteContext()
  return (
    <>
      <div className="header-icons space-x-4 items-center justify-around flex md:hidden fixed bg-white py-2 bottom-0 w-full">
        <FaHome
          className="text-2xl cursor-pointer"
         
        />
        <IoSearch onClick={()=>updateCurrentPage("search")}
          className="text-2xl cursor-pointer"
        />
        <FiPlusCircle
          className="text-2xl cursor-pointer"
        />
        <FaVideo className="text-2xl cursor-pointer" />

        <IoPersonCircle
          className="text-2xl cursor-pointer"
          onClick={() => {
            openFooterSlider(!footerSlider)
          }}
        />
      </div>
      {footerSlider === true && (
        <div className="fixed bottom-10 border-t-2 w-full bg-white flex flex-col space-y-3 py-2 ">
          <button>
            Edit profile
          </button>
          <button onClick={()=> {updateCurrentPage("myprofile")}}
          >
            Profile
          </button>
          <button className="text-red-500">
              Logout
          </button>
        </div>
      )}
      <Toaster />
    </>
  );
};

export default ProfileFooter;
