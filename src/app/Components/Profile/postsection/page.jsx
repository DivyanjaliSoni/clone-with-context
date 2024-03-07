"use client";
import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { MdOutlineSaveAlt } from "react-icons/md";
import { FaHeart } from "react-icons/fa6";
import { FaRegSmileBeam } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { MdGif } from "react-icons/md";
import Link from "next/link";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";
import useSWR, { mutate } from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const PostSection = () => {
  const [sharePost, setSharePost] = useState(false);
  const [showComments, setShowComments] = useState("");
  const [postSentTo, setPostSentTo] = useState("");
  const [comment, setComment] = useState("");
  const [islike, setIsLike] = useState();

  return (
    <div className="mb-10">
      
          <div
            className="mt-2 md:border border-gray-400 rounded-md p-3 flex flex-col justify-center items-center"
           
          >
            <div className=" w-full rounded-sm md:border border-gray-200 md:p-2">
              <div className="flex items-center justify-between mt-3">
                <div className="flex space-x-3 md:space-x-4 items-center">
                  <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] rounded-full ring-2 ring-offset-2 ring-pink-300 bg-cover bg-center bg-no-repeat">
                    <img
                      src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
                      className="w-full h-full object-cover rounded-full"
                    ></img>
                  </div>
                  <div>
                    <Link
                      href="#"
                      className="font-semibold"
                    >
                      username
                    </Link>
                  </div>
                </div>
                <button
                      className="text-sm md:text-base bg-pink-400 text-white px-2 py-1 rounded-md font-semibold transform transition hover:bg-white hover:text-pink-400 disabled:bg-pink-300 hover:scale-95"
                      onClick={() => followUser(post.userId)}
                    >
                      Follow
                    </button>
              </div>

              <div className="mt-3 image">
                <img
                  src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
                  className="object-fill min-w-full h-[300px]"
                  
                ></img>
              </div>

              <div className="post-icons flex justify-between items-center mt-3 md:px-2">
                <div className="flex space-x-4">
                <FaRegHeart
                      className="text-2xl md:text-3xl"
                      
                    />
                  <FaRegComment
                    className="text-2xl md:text-3xl cursor-pointer"
                    onClick={() => {
                      setShowComments(post._id);
                    }}
                  />
                  <FaRegShareFromSquare
                    className="text-2xl md:text-3xl cursor-pointer"
                    onClick={() => setSharePost(true)}
                  />
                </div>
                <div>
                  <MdOutlineSaveAlt
                    className="text-2xl md:text-3xl cursor-pointer"
                    onClick={() => {
                      toast.success("Your Post is saved !");
                    }}
                  />
                </div>
              </div>

              <div className="mt-3 md:px-2">
                <div className="text-sm">10 likes</div>
                <div>
                  <span className="font-semibold mr-1 text-sm md:text-base">
                    username
                  </span>
                  <span className="text-sm md:text-base">captionon</span>
                </div>
                
                <div className="text-gray-400 text-xs md:text-sm mt-1">
                 10 May
                </div>

                <div className="mt-4 flex justify-between pb-2">
                  <div className="flex space-x-4 items-center ">
                    <div
                      className="w-[20px] h-[20px] rounded-full ring-2 ring-offset-2 ring-pink-300 bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage: `url(https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*)`,
                      }}
                    ></div>
                    <div>
                      <input
                        type="text"
                        className="font-semibold w-100 outline-none"
                        placeholder="Add a comment.."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        onKeyUp={(e) => {
                          sendComment(e, post._id);
                        }}
                      ></input>
                    </div>
                  </div>
                  <div>
                    <FaRegSmileBeam className="text-2xl " />
                  </div>
                </div>
              </div>
              
            </div>
           
            <Toaster />
          </div>
       
    </div>
  );
};

export default PostSection;
