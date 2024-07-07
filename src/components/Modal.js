"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Modal({ group, code, onClose }) {
  const [description, setDescription] = useState("");
  const { status } = code;
  const { desc } = code;

  useEffect(() => {
    // set current description for status code
    setDescription(desc);
  }, [desc]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      onClick={onClose}>
      <div
        className="flex flex-col bg-white dark:bg-gray-800 p-6 rounded-lg max-w-2xl max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}>
        <Link
          href={`/${group}/${status}`}
          className="text-2xl font-bold underline text-center text-gray-800 dark:text-white">
          Status Code: {status}
        </Link>
        <Image
          src={`https://http.cat/${status}`}
          alt={`${status} Status Code`}
          width={500}
          height={500}
          className="my-4"
        />
        <p className="text-gray-700 text-center dark:text-gray-300 max-w-[500px]">{description}</p>
      </div>
    </div>
  );
}
