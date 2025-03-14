import React from "react";
import rakesh from "../assets/images/rakesh.png";
import sagar from "../assets/images/sagar.png";
import nirajan from "../assets/images/Nirajan.jpg";
import pabitra from "../assets/images/pabitra.png";

const TeamCards = () => {
  const teamMembers = [
    {
      name: "Nirajan Acharya ",
      rollNumber: "Kan077bct051",
      imageUrl: nirajan,
    },
    ,
    {
      name: "Sagar Niroula",
      rollNumber: "Kan077bct069",
      imageUrl: sagar,
    },
    {
        name: "Pabitra Rai ",
        rollNumber: "Kan077bct054",
        imageUrl:pabitra,
    },
    {
      name: "Rakesh Pandey ",
      rollNumber: "Kan077bct062",
      imageUrl: rakesh,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 py-16 px-4">
      <div className="max-w-7xl mx-auto mt-12">
        <h1 className="text-5xl font-bold text-center text-white mb-4">
          Our Team
        </h1>
        <p className="text-xl text-center text-white mb-16">
          The brilliant minds behind our success
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member) => (
            <div
              key={member.rollNumber}
              className="group relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-70 transition-opacity duration-300" />

              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-full h-72 object-cover"
              />

              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                <div className="text-white">
                  <p className="text-sm font-medium mb-1 opacity-90">
                    {member.rollNumber}
                  </p>
                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <p className="text-lg font-semibold mb-2">{member.role}</p>
                  <p className="text-sm opacity-90">{member.expertise}</p>
                </div>
              </div>

              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500 mb-1">
                  {member.rollNumber}
                </p>
                <p className="text-md font-medium text-gray-700">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamCards;
