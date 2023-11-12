import React from "react";
import { FaFacebook, FaGithub, FaInstagram,  } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/KampanartPoonpanao",
    },
    {
      id: 2,
      child: (
        <>
          Email <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:s6303051633093@kmutnb.ac.th",
    },
    {
      id: 3,
      child: (
        <>
          Facebook <FaFacebook size={30} />
        </>
      ),
      href: "https://www.facebook.com/kampanart.poonpanao",
      style: "rounded-br-md",
    },
    {
      id: 4,
      child: (
        <>
          instagram <FaInstagram size={30} />
        </>
      ),
      href: "https://www.instagram.com/2pnthegreat/",
      style: "rounded-br-md",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
