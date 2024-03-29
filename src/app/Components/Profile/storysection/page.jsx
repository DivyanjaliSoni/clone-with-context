"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
// import useSWR from 'swr'

// const fetcher = (...args) => fetch(...args).then((res) => res.json())


const StorySection = () => {
  const [openModal, setopenModal] = useState(null);
  const [allUsers,setAllUsers] = useState([])
  const [loading,setLoading] = useState(false)

  // const { data, error } = useSWR('/api/users/allusers', fetcher)

  // if (error) return <div>Failed to load</div>
  // if (!data) return <div className="flex p-3 space-x-6 overflow-x-scroll"><div className="w-[50px] h-[50px] rounded-full ring-2 ring-offset-2 ring-pink-300 bg-gray-200 cursor-pointer "></div><div className="w-[50px] h-[50px] rounded-full ring-2 ring-offset-2 ring-pink-300 bg-gray-200 cursor-pointer "></div><div className="w-[50px] h-[50px] rounded-full ring-2 ring-offset-2 ring-pink-300 bg-gray-200 cursor-pointer "></div><div className="w-[50px] h-[50px] rounded-full ring-2 ring-offset-2 ring-pink-300 bg-gray-200 cursor-pointer "></div><div className="w-[50px] h-[50px] rounded-full ring-2 ring-offset-2 ring-pink-300 bg-gray-200 cursor-pointer "></div></div>


  // const getAllUsers = async() =>{
  //   try {
  //     setLoading(true)
  //   const response = await axios.get("/api/users/allusers",{ next: { revalidate: 0 }})
  //     console.log(response.data.data)
  //     setAllUsers([response.data.data][0])
  //     setLoading(false)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // useEffect(()=>{
  //   getAllUsers()
  // },[])

  return (
    <div className="w-full border border-b-gray-400 md:border-gray-400 md:rounded-md">
      <div className="flex p-3 space-x-6 overflow-x-scroll">
            <div>
              <div
                className="w-[50px] h-[50px] rounded-full ring-2 ring-offset-2 ring-pink-300 bg-cover bg-center bg-no-repeat cursor-pointer "
                style={{ backgroundImage: `url(https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*)})` }}
                id="101"
                onClick={() => setopenModal(user._id)}
              ></div>
              {openModal === "101" && (
                <dialog
                  id="101"
                  className="modal z-40 w-full flex justify-center  bg-black bg-opacity-50 h-screen absolute top-0 md:top-[-40px] items-center"
                >
                  <div className="modal-box">
                    <div className="h-[70vh] w-[300px]">
                    <ImCross className="float-end my-5" onClick={()=>{setopenModal(null)}} />
                      <img
                        className="object-cover w-full h-full"
                        src={user.pic}
                      ></img>
                    </div>
                  </div>
                </dialog>
              )}
            </div>
      </div>
    </div>
  );
};

export default StorySection;
