"use client";

import Image from "next/image";
import Link from "next/link";
import { useStatusCodes } from "../../context/StatusCodesContext";
import { htmlToText } from "html-to-text";

export default function StatusCode({ params }) {
  const { code, group } = params;
  const statusCodes = useStatusCodes();
  const statusCode = statusCodes.find((sc) => sc.code.toString() === code);

  if (!statusCode) {
    return (
      <div className="text-2xl font-bold mb-1 text-gray-800 dark:text-white">
        Status code not found
      </div>
    );
  }

  return (
    <main className="flex flex-col items-center justify-center max-h-full p-2">
      <Link
        href={`/${group}`}
        className="text-gray-800 dark:text-white font-semibold bg-gray-200 dark:bg-gray-500 hover:bg-gray-400 dark:hover:bg-gray-400 px-1 py-1 rounded-md">
        {"< "}Back
      </Link>
      <h1 className="text-2xl font-bold mb-1 text-gray-800 dark:text-white">Status Code: {code}</h1>
      <p className="text-lg mb-4 text-gray-600 dark:text-gray-300">
        {htmlToText(statusCode.description)}
      </p>
      {/* <p
        className="text-lg mb-4 text-gray-600 dark:text-gray-300"
        dangerouslySetInnerHTML={{ __html: statusCode.description }}
      /> */}
      <Image
        src={`https://http.cat/${code}`}
        alt={`${code} Status Code`}
        width={600}
        height={600}
      />
    </main>
  );
}
