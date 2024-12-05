import React from "react";

const Cta11 = () => {
  return (
    <section>
      {/*Container */}
      <div className="mx-auto w-full  px-5 py-16 md:px-10 md:py-24 lg:py-32">
        {/* Component */}
        <div className="bg-blue-50 p-8 text-center sm:p-10 md:p-16">
          {/* Title */}
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">
            Join the TailwindFlex Community
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-[#647084] md:mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna
          </p>
          {/* Form */}
          <form
            name="email-form"
            method="get"
            className="relative mx-auto mb-4 flex w-full max-w-2xl flex-col items-start justify-center sm:flex-row"
          >
            <input
              type="email"
              className="mb-3 mr-6 block h-9 w-full bg-white px-6 py-7 text-sm text-[#333333] focus:border-[#3898ec]"
              placeholder="Enter your email"
              required=""
            />
            <input
              type="submit"
              defaultValue="Subscribe"
              className="inline-block w-full cursor-pointer bg-[#276ef1] px-6 py-3 text-center font-semibold text-white transition [box-shadow:rgb(171,_196,_245)_-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px] sm:w-28"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Cta11;
