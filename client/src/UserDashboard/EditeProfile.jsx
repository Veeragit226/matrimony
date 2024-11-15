import React from "react";
import Navebar from "../Pages/Navebar";
import Footer from "../Pages/Footer";
import ContNav from "../Pages/ContNav";

const EditeProfile = () => {
  return (
    <>
    <ContNav/>
    <Navebar/>
    <div className="bg-[#fffcf2] p-10">
    <div className="max-w-4xl mx-auto lg:py-6 py-2 px-8 lg:px-20  bg-white  shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Edit My Profile</h2>

      {/* Basic Info Section */}
      <section className="mb-8 text-sm">
        <h3 className="text-lg font-light text-yellow-900 mb-2">Basic Info</h3>
        <div className="grid grid-cols-1  gap-4">
          <label htmlFor="">Name:</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            className="border p-2 placeholder-black rounded-md w-full"
          />
          <label htmlFor="">Email:</label>
          <input
            type="email"
            placeholder="Enter your Email"
            className="border placeholder-black p-2 rounded-md w-full"
          />
          <label htmlFor="">Phone:</label>
          <input
            type="text"
            placeholder="Enter your Phone No"
            className="border placeholder-black p-2 rounded-md w-full"
          />
          <label htmlFor="">Password:</label>
          <input
            type="password"
            placeholder="Enter your Password"
            className="border p-2 placeholder-black rounded-md w-full"
          />
        </div>
      </section>

      {/* Advanced Bio Section */}
      <section className="mb-8 text-sm">
        <h3 className="text-lg font-light text-yellow-900 mb-2">Advanced Bio</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <select  className="border p-2  placeholder-black rounded-md w-full">
          
            <optgroup>
              <option value="">Gender</option>
              <option value="">Male</option>
              <option value="">Female</option>
              
            </optgroup>
          </select>
          <input
            type="text"
            placeholder="City"
            className="border p-2 placeholder-black rounded-md w-full"
          />
          <input
            type="date"
            placeholder="Date of Birth"
            className="border placeholder-black p-2 rounded-md w-full"
          />
          <input
            type="text"
            placeholder="Age"
            className="border placeholder-black p-2 rounded-md w-full"
          />
          <input
            type="text"
            placeholder="Height"
            className="border placeholder-black p-2 rounded-md w-full"
          />
          <input
            type="text"
            placeholder="Weight"
            className="border placeholder-black p-2 rounded-md w-full"
          />
        </div>
      </section>

      {/* Job & Education Section */}
      <section className="mb-8">
        <h3 className="text-lg font-light text-yellow-900 mb-2">Job & Education</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Job Type"
            className="border p-2 placeholder-black rounded-md w-full"
          />
          <input
            type="text"
            placeholder="Company Name"
            className="border p-2 placeholder-black rounded-md w-full"
          />
          <input
            type="text"
            placeholder="Degree"
            className="border p-2 placeholder-black rounded-md w-full"
          />
          <input
            type="text"
            placeholder="Institute"
            className="border p-2 placeholder-black rounded-md w-full"
          />
        </div>
      </section>

      {/* Social Media Section */}
      <section className="mb-8">
        <h3 className="text-lg font-light text-yellow-900 mb-2">Social Media</h3>
        <div className="grid grid-cols-1 gap-4">
          <input
            type="text"
            placeholder="WhatsApp"
            className="border p-2 placeholder-black rounded-md w-full"
          />
          <input
            type="text"
            placeholder="Facebook"
            className="border p-2 placeholder-black rounded-md w-full"
          />
          <input
            type="text"
            placeholder="Instagram"
            className="border p-2 placeholder-black rounded-md w-full"
          />
          <input
            type="text"
            placeholder="LinkedIn"
            className="border p-2 placeholder-black rounded-md w-full"
          />
        </div>
      </section>

      {/* Hobbies Section */}
      <section className="mb-8">
        <h3 className="text-lg font-light text-yellow-900 mb-2">Hobbies</h3>
        <input
          type="text"
          placeholder="Hobbies"
          className="border p-2 placeholder-black rounded-md w-full"
        />
      </section>

      {/* Submit Button */}
      <button className="bg-blue-500 placeholder-black text-white p-3 rounded-md w-full">
        Submit
      </button>
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default EditeProfile;
