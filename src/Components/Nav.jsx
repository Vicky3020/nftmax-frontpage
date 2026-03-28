import React from "react";
import bag from "../assets/css.png";
import bage from "../assets/js.png";
import pen from "../assets/html.png";
import max from "../assets/neww.webp";
import mysql from "../assets/sql.png";
import rct from "../assets/React.png";
import logo from "../assets/nf.jpg";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      {/* <Link to={'/'}> Home </Link>
        <Link to={'/about'}> About </Link>
        <Link to={'/contact'}> Contact </Link> */}

      {/* <NavLink to={'/'}><p> Home </p> </NavLink>
       <NavLink to={'/about'}><p> About </p> </NavLink>
       <NavLink to={'/contact'}><p> Contact </p> </NavLink> */}
      <section className="h-screen w-screen relative bg-amber-400">
        <div className="flex justify-start items-start  text-5xl font-bold tracking-wider ">
          <h1 className="absolute top-4 left-6 ">Nftmax-Bootstrap 5 </h1>
          <h1 className=" absolute top-17 left-6"> laravel Admin Templates </h1>

          <div className="flex justify-end items-end">
            <h2 className=" absolute right-8 top-7 text-3xl text-gray-700 font-bold tracking-tighter ">
              NFTMAX
            </h2>
          </div>
          <div>
            <img src={logo} alt="" className="absolute size-13  right-40 top-6 rounded-full" />
          </div>
          <div>
            <img
              src={bag}
              alt="css image"
              className=" absolute left-10 top-50   bg-white size-20 rounded-full "
            />
          </div>

          <div>
            <img
              src={bage}
              alt="js image"
              className=" absolute left-40 top-45 text-8xl  bg-white size-20 rounded-full"
            />
          </div>
          <div>
            <img src={mysql} alt="sql" className=" absolute left-34 top-70 rounded-full size-20" />
            <img src={rct} alt="react" className=" absolute left-22 top-97 rounded-full size-18  bg-white" />
          </div>

          <div>
            <img
              src={pen}
              alt="html image"
              className=" absolute left-8 top-75 text-8xl  bg-white size-20 rounded-full"
            />
            <img src={max} alt="" className=" absolute right-12 top-45 size-2/3 rotate-4 border-2 rounded-2xl"/>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Nav;
