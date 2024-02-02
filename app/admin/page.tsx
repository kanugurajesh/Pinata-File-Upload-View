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
      // toast.error(e);
      console.log(e);
    }
  };

  return (
    <main>
      <Toaster />
      <form onSubmit={onSubmit}>
        <input
          type="file"
          name="file"
          onChange={(e) => setFile(e.target.files?.[0])}
        />
        <input type="submit" value="upload" />
      </form>
    </main>
  );
}
