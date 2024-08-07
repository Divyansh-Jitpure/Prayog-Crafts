import React from "react";
import TeamMember from "./TeamMember";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

const OurTeam = () => {
  return (
    <div className="mx-auto flex flex-col items-center">
      <h1 className="my-4 text-4xl font-medium text-gray-600">Our Team</h1>
      <div className="flex flex-col sm:flex-row">
        <TeamMember
          memberName="Paras Jit"
          imgSrc="https://media.licdn.com/dms/image/C5603AQHTrzEldVAdcQ/profile-displayphoto-shrink_200_200/0/1659712246272?e=2147483647&v=beta&t=u0qpcSsOXFJDmnLRQSDQMJUYZqm-1tWvyBAeupR3EVo"
          socials={
            <div className="flex justify-center *:mx-1 *:text-2xl">
              <a
                href="https://www.linkedin.com/in/paras-jitpure-624923247/"
                target="__blank"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/jitpureparas/"
                target="__blank"
              >
                <FaInstagram />
              </a>
              <a href="https://x.com/paras_jitpure" target="__blank">
                <FaXTwitter />
              </a>
              <a
                href="https://www.youtube.com/@beingmachine3601"
                target="__blank"
              >
                <IoLogoYoutube />
              </a>
            </div>
          }
        />
        <TeamMember
          memberName="Divyansh Jitpure"
          imgSrc="https://media.licdn.com/dms/image/D4D03AQGF_evdjs7EeA/profile-displayphoto-shrink_800_800/0/1723016133772?e=1728518400&v=beta&t=d0B8s10aiqMlCZ4XwjZ6SQU9k9Mi1Mpq3TMMvuO_CWU"
          socials={
            <div className="flex justify-center *:mx-1 *:text-2xl">
              <a
                href="https://www.linkedin.com/in/divyansh-jitpure/"
                target="__blank"
              >
                <FaLinkedin />
              </a>
              <a href="https://github.com/Divyansh-Jitpure" target="__blank">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/one_djansh/" target="__blank">
                <FaInstagram />
              </a>
              <a href="https://x.com/DivyanshJitpure" target="__blank">
                <FaXTwitter />
              </a>
              <a href="https://www.youtube.com/@one_Divyansh" target="__blank">
                <IoLogoYoutube />
              </a>
            </div>
          }
        />
        <TeamMember
          memberName="Anshuman Satankar"
          imgSrc="https://media.licdn.com/dms/image/D4D03AQFqUONiFINM9w/profile-displayphoto-shrink_200_200/0/1703702664109?e=2147483647&v=beta&t=r7vbqMLBuufzYuwifv5Y6z3kTmlN2VxpSZmjO4uwQk4"
          socials={
            <div className="flex justify-center *:mx-1 *:text-2xl">
              <a
                href="https://www.linkedin.com/in/anshuman-satankar-5b7b61189/"
                target="__blank"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/anshuman_satankar_/"
                target="__blank"
              >
                <FaInstagram />
              </a>
              <a href="https://twitter.com/anshumansatank4" target="__blank">
                <FaXTwitter />
              </a>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default OurTeam;
