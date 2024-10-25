"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify"; // Ensure you have react-toastify installed
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for toast notifications

export default function RegistrationSuccess () {
   
    const route=useRouter();
    const changeRoute=()=>{
        route.push("/")
    }

    return (
        <div className="flex flex-col items-center justify-center p-10 bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-center mb-4">Thank You for Registering!</h1>
            <p className="text-lg text-gray-700 mb-4">Your details have been successfully saved.</p>
            <img 
                src="https://cdn-icons-png.flaticon.com/512/1250/1250650.png" 
                alt="Thumbs Up" 
                className="w-24 h-24 mb-4" 
            />
        
        <button className="btn btn-primary" onClick={changeRoute }>
                Go Back to Home
            </button>
        </div>
    );
};


