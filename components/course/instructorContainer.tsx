import Image from "next/image";
import React from "react";

const InstructorContainer = () => {
  return (
    <div className="flex flex-col items-center justify-center py-6 px-4 text-center sm:px-8 md:px-12 lg:px-20">
      <h1 className="mb-4">Axel Dubin</h1>
      <div className="relative mb-3 h-24 w-24 overflow-hidden rounded-full  sm:h-32 sm:w-32 lg:h-40 lg:w-40 ">
        <Image
          fill={true}
          className=" object-cover"
          src="/profile-image.png"
          alt="Profile Image"
        />
      </div>
      <div className="">
        <h1 className="text-text">Entrenador/atleta</h1>
        <h1 className="text-text">Instagram: @axeldubin</h1>
      </div>
    </div>
  );
};

export default InstructorContainer;
