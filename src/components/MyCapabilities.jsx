import React from "react";

const MyCapabilities = () => {
  return (
    <section id="stack" className="scroll-mt-32">
      <div>
        <div className="flex px-12 pb-32">
          <div className="flex-[1]">
            <h1 className="font-bebas text-[#FFFFFF] text-[4.75rem] leading-none">
              MY TECH STACK
            </h1>
          </div>

          <div className="flex flex-col gap-8 flex-[1] pl-64">
            <p className="font-manrope text-[#C7C7C7] text-lg">
              I am always looking to add more skills. Morbi egestas neque eu
              blandit fermentum. Nulla ac lobortis ligula. Pellentesque ac ex at
              purus faucibus tristique ut et dolor.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              {[
                "HTML",
                "CSS",
                "JAVASCRIPT",
                "REACT",
                "FIGMA",
                "TAILWIND CSS",
              ].map((tech) => (
                <button
                  key={tech}
                  className="text-[#ffffff] font-manrope font-bold px-10 py-5 rounded-[6.25rem] border border-[#484848]"
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyCapabilities;
