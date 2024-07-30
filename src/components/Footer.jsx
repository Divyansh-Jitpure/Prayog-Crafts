import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer class="body-font bg-[#98D8AA] text-gray-600">
      <div class="container mx-auto flex flex-col items-center px-5 sm:flex-row">
        <a class="title-font flex items-center justify-center font-medium text-gray-900 md:justify-start">
          <img
            className="h-[70px] w-[70px]"
            src="/logoTransparent.png"
            alt="logo"
          />
        </a>
        <p class="mt-4 text-sm text-gray-500 sm:ml-4 sm:mt-0 sm:border-l-2 sm:border-black sm:py-2 sm:pl-4">
          © 2024 Prayog Crafts —
          <a
            href="#"
            class="ml-1 text-gray-600"
            rel="noopener noreferrer"
            // target="_blank"
          >
            @ParasJitpure
          </a>
          <a
            href="#"
            class="ml-1 text-gray-600"
            rel="noopener noreferrer"
            // target="_blank"
          >
            @DivyanshJitpure
          </a>
          <a
            href="#"
            class="ml-1 text-gray-600"
            rel="noopener noreferrer"
            // target="_blank"
          >
            @AnshumanSatankar
          </a>
        </p>
        <span class="mt-4 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
          <button onClick={() => navigate("/terms")} className="mr-3">
            Terms of Service
          </button>
          <a class="text-gray-500">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="h-5 w-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a class="ml-3 text-gray-500">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="h-5 w-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a class="ml-3 text-gray-500">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="h-5 w-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a class="ml-3 text-gray-500">
            <svg
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0"
              class="h-5 w-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
