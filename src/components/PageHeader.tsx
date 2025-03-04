"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Portfolio = () => {
  const [activePage, setActivePage] = useState("home");

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 animate-gradient"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-xl rounded-3xl p-8 text-center w-[90%] max-w-3xl border border-gray-300 relative z-10"
      >
        {activePage === "home" && (
          <>
            <motion.img
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              src="/images/IMG_6993.jpeg"
              alt="Derrick Araujo"
              className="w-50 h-55 rounded-2xl mx-auto mb-4 border-4 border-gray-800 shadow-lg object-cover"
            />
            <motion.h1 className="text-4xl font-extrabold text-gray-900">
              Derrick Araujo
            </motion.h1>
            <p className="text-lg text-gray-600 mt-2"></p>
            <motion.p
              className="text-gray-700 mt-4 text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3 }}
            >
              <div className="mt-6 text-center text-gray-800">
                <p>
                  <strong>Email:</strong> derrickmaraujo@gmail.com
                </p>
                <p>
                  <strong>Phone:</strong> (484) 222-9182
                </p>
                <p>
                  <strong>Location:</strong> Nazareth, PA 18064
                </p>
              </div>
              <div className="text-center">
                I am a Finance graduate with a minor in Personal Financial
                Planning from Bloomsburg University of Pennsylvania. My
                background in finance, administration, and project coordination
                has equipped me with strong analytical, problem-solving, and
                organizational skills. As a Horizontal Construction Engineer in
                the U.S. Army Reserves, I have developed expertise in strategic
                planning, project management, and compliance with safety
                standards. Previously, I worked as an Administrative Assistant
                at the Union Township Municipal Building, where I managed
                records, assisted residents, and ensured efficient office
                operations. With a strong foundation in Finance, operations, and
                leadership, I am eager to apply my skills in a dynamic
                professional setting.
              </div>
            </motion.p>
            <div className="flex justify-center gap-4 mt-6">
              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={() => setActivePage("education")}
                className="text-white bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700 shadow-md"
              >
                Education
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={() => setActivePage("experience")}
                className="text-white bg-green-600 px-5 py-2 rounded-lg hover:bg-green-700 shadow-md"
              >
                Work Experience
              </motion.button>
            </div>
          </>
        )}

        {activePage === "education" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Education</h2>
            <div className="mb-4 text-center">
              <h3 className="text-lg font-semibold">
                Bloomsburg University of Pennsylvania
              </h3>
              <p className="text-sm text-gray-500">Aug 2024 | Bloomsburg, PA</p>
              <p className="text-gray-700">B.S.B.A in Finance</p>
              <p className="text-gray-700">
                Minor in Personal Financial Planning
              </p>
              <p className="text-gray-700">127 credits completed | 3.1 GPA</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() => setActivePage("home")}
              className="text-blue-600 hover:underline"
            >
              Back to Home
            </motion.button>
          </motion.div>
        )}

        {activePage === "experience" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Work Experience
            </h2>
            <div className="mb-4 text-left">
              <h3 className="text-lg font-semibold">
                Horizontal Construction Engineer - U.S. Army Reserves
              </h3>
              <p className="text-sm text-gray-500">
                Sep. 2024 - Present | Fort Leonard Wood, MO
              </p>
              <p className="text-gray-700">
                Gained hands-on experience in the planning, design, and
                execution of construction projects related to roads, highways,
                and other infrastructure. Assisted in the setup and operation of
                heavy machinery such as graders, bulldozers, and excavators,
                conducted site surveys, measured and staked out construction
                zones, and ensured compliance with safety and quality standards.
                Collaborated with senior engineers to monitor project progress,
                troubleshoot issues, and maintain efficient workflows.
              </p>
              <h3 className="text-lg font-semibold">
                Administration Assistant - Union Township Municipal Building
              </h3>
              <p className="text-sm text-gray-500">
                May. 2024 - Sep. 2024 | Union Township, NJ
              </p>
              <p className="text-gray-700">
                As an Administrative Assistant for the township building, I
                focused on organizing and managing property records and
                documents, ensuring they were properly filed and easily
                accessible. I answered phone calls, directed inquiries, and
                greeted visitors at the front desk, providing assistance or
                directing them to the appropriate department. My role required
                attention to detail, strong organizational skills, and effective
                communication to support the township&apos;s operations and
                assist residents with their needs.
              </p>
              <h3 className="text-lg font-semibold">
                Warehouse/ Event Delivery Crew - K&J Party Rental
              </h3>
              <p className="text-sm text-gray-500">
                Sep. 2016 - Aug. 2022 | Nazareth, PA
              </p>
              <p className="text-gray-700">
                As a part of the warehouse/event delivery crew, I prepared and
                executed event setups, ensuring that all equipment, including
                tents, tables, chairs, and inflatables, are safely and
                efficiently set up to meet the specific requirements of each
                event.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() => setActivePage("home")}
              className="text-blue-600 hover:underline"
            >
              Back to Home
            </motion.button>
          </motion.div>
        )}
      </motion.div>

      {/* Custom CSS for Animation */}
      <style>
        {`
          @keyframes gradientAnimation {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradientAnimation 8s ease infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Portfolio;
