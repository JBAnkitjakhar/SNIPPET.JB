"use client"

import React from 'react';
import DataObjectIcon from "@mui/icons-material/DataObject";
import { mainColor } from "@/Colors";
import { useAuth } from '@clerk/nextjs';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="font-poppins min-h-screen bg-gray-100">
      <Navbar />
      <CTASection />
    </div>
  );
}

function Navbar() {
  return (
        <div className="flex m-5 max-sm:mt-9 mx-8 items-center justify-between max-sm:flex-col">
          <Logo />
          <Buttons />
        </div>
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
    <div className="text-center max-w-3xl mx-auto mt-20">
      <h2 className="text-3xl font-bold mb-4">
        Organize your code snippets <span className="text-primary">Efficiently!</span>
      </h2>
      <p className="text-gray-600 mb-8">
        With our advanced tagging and search features, you can quickly find the snippet you 
        need, right when you need it. Spend less time searching for code and more time writing it.
      </p>
      <button className="bg-primary text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition">
         Lets get started!
      </button>
    </div>
  );
}