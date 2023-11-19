import "./home.css";
import React from "react";
import { FirstPage } from "./firstpage"; 
import { SecondPage } from "./secondpage";
import { ContactUs, Service } from ".";

export function Home() {
  return (
    <div className="home">
      <FirstPage />
      <SecondPage />
      <Service id="service" />
      <ContactUs id="contactUs" /> {/* Add 'id' prop to ContactUs component */}
    </div>
  );
}