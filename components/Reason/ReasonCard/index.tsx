"use client";
import Image from "next/image";

const ReasonCard = ({title, desc}:{title:string, desc:string}) => {
  return (
    <>
      {/* <!-- ===== reasonCards Table Start ===== --> */}
      

<div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-blacksection dark:border-gray-700 hover:scale-105 transition duration-300 ease-out">
    <svg className="w-7 h-7 text-[#006BFF]  mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
    </svg>
    <a href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
    </a>
    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{desc}</p>
</div>

      {/* <!-- ===== reasonCards Table End ===== --> */}
    </>
  );
};

export default ReasonCard;

