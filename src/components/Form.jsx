import React from "react";

const Form = () => {
  return (
    <div>
      <div className="">
        <form className="flex flex-col gap-[1.5rem]">
          <label htmlFor="firstname">First Name</label>
          <input type="text" placeholder="Enter First Name" />

          <label htmlFor="lastname">Last Name</label>
          <input type="text" placeholder="Enter Last Name" />

          <label htmlFor="email">Email</label>
          <input type="text" placeholder="Enter Email" />

          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Enter Message"
          ></textarea>

          <button
            className="bg-[#D3E97A] text-[#0A0A0A] font-manrope font-bold px-10 py-5 rounded-[6.25rem] w-fit cursor-pointer"
            type="submit"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
