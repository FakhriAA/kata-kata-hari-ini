"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export const KataHariCreate = () => {
  const [nama, setNama] = useState("");
  const [isi, setIsi] = useState("");
  const router = useRouter();

  async function handleAddKata() {
    await fetch("https://v1.appbackend.io/v1/rows/GdwuslDMxRqM", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([{ nama, isi }]),
    });

    router.refresh();
  }

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h1 className="text-slate-1000">Kata-Kata Hari Ini</h1>
      <input
        className="text-slate-800 border rounded-md bg-slate-200 p-1"
        onChange={(e) => setNama(e.target.value)}
        placeholder="nama"
      ></input>
      <textarea
        className="text-slate-800 border rounded-md bg-slate-200 p-1"
        onChange={(e) => setIsi(e.target.value)}
        placeholder="kata-kata"
      ></textarea>
      <button
        className="text-white border rounded-lg bg-indigo-900 p-3"
        onClick={handleAddKata}
      >
        Kirim
      </button>
    </div>
  );
};
