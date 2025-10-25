import React from "react";
import LiveDemo from "../assets/livedemo.svg";
import GitHubCode from "../assets/seegithub.svg";

const IndividualProjects = (props) => {
  return (
    <div>
      <div className="flex justify-between items-center gap-20 pt-16">
        <div className="bg-[#1A1A1A] w-[37.5rem] h-[37.5rem] rounded-xl flex justify-center items-center">
          {props.projectimage}
        </div>

        <div className="flex-1 font-manrope py-10 pl-36">
          <h1 className="text-[2rem] font-medium text-[#FFFFFF] pb-7">
            {props.projectname}
          </h1>

          <p className="text-[#C7C7C7] text-lg pb-7">
            {props.projectdescription}
          </p>

          <div className="border-b border-b-[#484848]">
            <h2 className="font-semibold text-[#FFFFFF] pb-7">PROJECT INFO</h2>
          </div>

          <div className="flex justify-between font-medium text-[#C7C7C7] border-b border-b-[#484848] py-7">
            <p>Client</p>

            <p>{props.client}</p>
          </div>

          <div className="flex justify-between font-medium text-[#C7C7C7] border-b border-b-[#484848] py-7">
            <p>Year</p>

            <p>{props.year}</p>
          </div>

          <div className="flex justify-between font-medium text-[#C7C7C7] border-b border-b-[#484848] py-7">
            <p>Role</p>

            <p>{props.role}</p>
          </div>

          <div className="flex gap-6 pt-8">
            <a href="#">
              <img src={LiveDemo} alt="view project demo" />
            </a>

            <a href="#">
              <img src={GitHubCode} alt="view project code" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualProjects;
