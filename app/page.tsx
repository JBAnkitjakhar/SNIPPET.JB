"use client"

import React from 'react';
import DataObjectIcon from "@mui/icons-material/DataObject";
import { mainColor } from "@/Colors";
import { useAuth } from '@clerk/nextjs';
import Link from 'next/link';

export default function Home() {
  // return (
  //   <div className="poppins bg-blue min-h-screen">
  //     <Navbar />
  //     <CTASection />
  //   </div>
  // );
  return(
    <div>
      <Navbar />
      <CTASection />
    </div>
  )
} 

function Navbar() {
  return (
    /* className="flex justify-between items-center py-5 px-8 max-sm:mt-9 max-sm:flex-col max-sm:items-start"  
    className={`bg-[${mainColor}] text-white py-2 px-6 rounded-md text-sm max-sm:flex-grow`}
    
    */
    <nav >   
      <Logo />
      <Buttons />
    </nav>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className={`bg-[${mainColor}] p-[6px] rounded-md`}>
        <DataObjectIcon style={{ fontSize: 27, color: "white" }} />
      </div>
      <div className="flex text-[19px]">
        <span className={`font-bold text-[${mainColor}]`}>Snippet</span>
        <span className="font-normal text-slate-600">Master</span>
      </div>
    </div>
  );
}

function Buttons() {
  const {userId} = useAuth();
  return (
    <div className=''> 
    {userId ? (
      <Link href="/my-notes">
        <button>
          Access to the app
        </button>
      </Link>
    ):(
      <div className="flex gap-2 max-sm:mt-8 max-sm:w-full">
      <button  >
       <Link href="/sign-in">Sign In </Link>
      </button>
      <Link href="/sign-up"> 
      <button className={`border border-[${mainColor}] text-[${mainColor}] py-2 px-6 rounded-md text-sm hover:bg-[${mainColor}] hover:text-white transition-colors max-sm:flex-grow`}>
        Sign Up
      </button>
      </Link>
    </div>
    )}
    </div>
  );
}

function CTASection() {
  return (
    <div className="flex flex-col items-center text-center px-4 mt-[120px]">
      <h1 className="text-4xl font-bold mb-4">
        Organize Your Code Snippets <span className={`text-[${mainColor}]`}>Efficiently!</span>
      </h1>
      <p className="text-gray-600 mb-8 max-w-2xl">
        With our advanced tagging and search features, you can quickly find the snippet you need, right when you need it. Spend less time searching for code and more time writing it.
      </p>
      <button className={`bg-[${mainColor}] text-white py-3 px-8 rounded-md text-lg font-semibold hover:bg-[${mainColor}]/90 transition-colors`}>
        Lets Get Started
      </button>
    </div>
  );
}