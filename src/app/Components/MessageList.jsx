"use client";
import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { CiCamera } from "react-icons/ci";
import Link from "next/link";
import useSWR from "swr";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useRouteContext } from "../contexts";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const MessageList = () => {
  const { updateCurrentPage } = useRouteContext()
  return (
    <div>
      <div className="flex justify-between items-center py-4 px-2  shadow">
        <div className="flex justify-center items-center space-x-4">
          <IoIosArrowBack
            className="text-2xl cursor-pointer"
            onClick={() => updateCurrentPage("profile")}
          />
          <p className="font-semibold">User name</p>
        </div>
        <div className="flex justify-center items-center space-x-4">
          <RiVideoAddLine className="text-2xl" />
          <FaEdit className="text-2xl" />
        </div>
      </div>
      <div className="flex items-center space-x-2 bg-gray-200 p-2 rounded-md m-2">
        <label>
          <IoIosSearch className="text-2xl" />
        </label>
        <input
          placeholder="Search"
          className="bg-transparent outline-none w-full"
        />
        <p className="cursor-pointer text-sm" onClick={() => searchUser()}>
          Search
        </p>
      </div>
      <div className="flex p-2 justify-between m-2">
        <div>Message</div>
        <div className="text-pink-400">Requests</div>
      </div>
        <div>
          <div className="p-2 m-2 font-semibold">Search Result</div>
          <div className="flex p-2 justify-between items-center ">
            <Link href="#">
              <div className="flex space-x-4">
                <div>
                  <img
                    src="https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709683200&semt=ais"
                    className="w-[40px] h-[40px] rounded-full object-cover ring-1 ring-offset-2 ring-pink-300"
                  />
                </div>
                <div className="text-sm">
                  <p>
                  searchedUserResult
                  </p>
                </div>
              </div>
            </Link>
            <div>
              <CiCamera className="text-2xl" />
            </div>
          </div>
        </div>
      <div className="p-2 m-2 font-semibold">All users</div>
      <div className="m-2">
              <div
                className="flex p-2 justify-between items-center "
               
              >
                <Link href="#">
                  <div className="flex space-x-4">
                    <div>
                      <img
                        src="https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709683200&semt=ais"
                        className="w-[40px] h-[40px] rounded-full object-cover ring-1 ring-offset-2 ring-pink-300"
                      />
                    </div>
                    <div className="text-sm">
                      <p>username</p>
                    </div>
                  </div>
                </Link>
                <div>
                  <CiCamera className="text-2xl" />
                </div>
              </div>
      </div>
      <Toaster />
    </div>
  );
};

export default MessageList;
