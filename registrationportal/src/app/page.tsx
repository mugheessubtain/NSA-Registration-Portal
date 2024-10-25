"use client";

import React from "react";
import { useRouter } from "next/navigation"; 

export default function HomePage(){
    const router = useRouter();

    const handleRegistrationClick = () => {
        router.push("/Registration"); 
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-center mb-2 text-gray-800">Welcome to NSA!</h1>
            <p className="text-lg text-center text-gray-600 mb-6">
                Registration for the Olympiad.The biggest event of NED is now open!
            </p>
            <button 
                className="btn btn-primary"
                onClick={handleRegistrationClick}
            >
                Register Now
            </button>
        </div>
    );
};

