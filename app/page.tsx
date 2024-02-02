"use client";

import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <main className="flex items-center justify-center flex-col h-screen gap-10">
      <h1 className="font-bold text-3xl">
        <Typewriter
          words={["welcome to","pinata-upload-view"]}
          loop={1000}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
      <div className="flex gap-10">
        <Link
          href="/admin"
          className="font-bold text-md w-[100px] h-10 text-white bg-black flex items-center justify-center hover:bg-white hover:text-black hover:border-black hover:border-2 rounded-sm transition ease-in-out duration-300"
        >
          Upload
        </Link>
        <Link
          href="/user"
          className="font-bold text-md w-[100px] h-10 text-white bg-black flex items-center justify-center hover:bg-white hover:text-black hover:border-black hover:border-2 rounded-sm transition ease-in-out duration-300"
        >
          View
        </Link>
      </div>
    </main>
  );
}
