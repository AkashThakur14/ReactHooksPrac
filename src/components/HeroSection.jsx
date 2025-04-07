import React from "react";
// import { UseEffectApi } from "./api/UseEffectApi.jsx";
import { useState } from "react";



export const HeroSection = () => {
  const [myname, setMyname] = useState("Akash thakur");

  // toggle data change on button click 
  const changeName = () => {
    let val = myname;
    if (val === 'Akash thakur') {
      setMyname("Hi, Akash value have been changed")
    } else {
      setMyname("Akash thakur")
    }

  }

  return (
    <>
      {/* <section className="hero-container text-center">
       <UseEffectApi />
     </section> */}



      <section className="hero-container text-center bg-info">
        <h1>{myname}</h1>
        <button className="btn btn-warning" onClick={changeName}>Click me plz</button>
      </section>

    </>
  );
};
