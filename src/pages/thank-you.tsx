import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["200", "300", "400"],
  subsets: ["latin"],
  style: ["normal"],
});

const ThankYouPage = () => {
  return (
    <div className={poppins.className}>
      {" "}
      <div className="bg-gray-800 text-white py-4 ">
        <h1 className="text-xl sm:text-xl md:text-xl lg:text-2xl ml-3 ">
          Thank You{" "}
        </h1>
      </div>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div className="max-w-lg w-full bg-white rounded-md p-8 ">
          <p className="text-center mb-6">
            Thank you for the information you&apos;ve entered! We&apos;ve
            calculated your personalized water intake.
          </p>

          <p className="text-center text-gray-600">
            Please look at the LCD screen for your personalized water intake.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
