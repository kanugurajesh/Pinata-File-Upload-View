"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  const [file, setFile] = useState<File>();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return;

    try {
      const data = new FormData();
      data.set("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: data,
      });

      if (!res.ok) {
        toast.error("Failed to upload file");
        throw new Error(await res.text());
      }
    } catch (e: any) {
      console.log(e);
    }

    toast.success("File uploaded");
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <Toaster />
      <form onSubmit={onSubmit} className="flex flex-col gap-5 items-center justify-center">
        <input
          type="file"
          name="file"
          onChange={(e) => setFile(e.target.files?.[0])}
        />
        <input
          type="submit"
          value="upload"
          className="font-bold text-md w-[100px] h-10 text-white bg-black flex items-center justify-center hover:bg-white hover:text-black hover:border-black hover:border-2 rounded-sm transition ease-in-out duration-300"
        />
      </form>
    </main>
  );
}
