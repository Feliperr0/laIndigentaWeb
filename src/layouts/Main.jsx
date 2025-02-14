import React from "react";
import { Outlet } from "react-router-dom";




export default function Main() {
  return (
    <>
    <div className="min-h-screen flex flex-col bg-yellow-400">
      <div className="bg-black">
 <h1 className="text-white">Layout</h1>
 
      </div>
      <main className="flex-1 mt-1"> 
        <Outlet />
      </main>

      </div>
      </>
  );
}