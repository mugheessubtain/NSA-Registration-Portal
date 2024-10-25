"use client"
import Image from "next/image";
export default function Navbar(){
    return(

 

<div className="navbar bg-sky-400 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Homepage</a></li>
        <li><a>Portfolio</a></li>
        <li><a>About</a></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
  <Image
            src={"/images/nsa logo.jfif"}
            alt="logo"
            width={55}
            height={25}
            className="rounded-full w-12 md:w-14"
          />
  </div>
  <div className="navbar-end">
   
    
  </div>
</div>
   )
}
