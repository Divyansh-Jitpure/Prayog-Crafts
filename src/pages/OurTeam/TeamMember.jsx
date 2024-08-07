import React from "react";

const TeamMember = ({ memberName, socials, imgSrc }) => {
  return (
    <div className="mb-3 w-72 overflow-hidden rounded-lg border p-5 shadow-xl sm:mx-2">
      <div className="mx-3 overflow-hidden rounded">
        <img className="w-full" src={imgSrc} alt="memberPic" />
      </div>
      <p className="my-1 text-center text-xl font-medium">{memberName}</p>
      {/* <p className="my-4 text-center"></p> */}
      {socials}
    </div>
  );
};

export default TeamMember;
