"use client";
import { useRouter } from "next/navigation";
import React from "react";

export const KataHari = ({ id, nama, isi, createdAt }) => {
  const router = useRouter();
  async function handleHapusKata() {
    await fetch("https://v1.appbackend.io/v1/rows/GdwuslDMxRqM", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([{ id }]),
    });

    router.refresh();
  }

  return (
    <div className="katakata-hari">
      <div className="flex flex-col">
        <h1>{nama}</h1>
        <h1>{isi}</h1>
      </div>
      <button className="btn-danger" onClick={handleHapusKata}>
        Hapus
      </button>
    </div>
  );
};
