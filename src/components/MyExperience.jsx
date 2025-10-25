import React from "react";

const MyExperience = (props) => {
  return (
    <div>
      <div>
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-[#FFFFFF] font-manrope font-medium text-2xl">
              {props.position}
            </h2>
            <p className="font-manrope text-[#C7C7C7] text-lg">{props.date} </p>
          </div>

          <p className="text-[#D3E97A] text-lg font-manrope font-semibold">
            {props.company}
          </p>

          <p className="font-manrope text-[#C7C7C7] text-lg">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyExperience;
