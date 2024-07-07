"use client";

import Image from "next/image";
import Link from "next/link";
import { useStatusCodes } from "../../context/StatusCodesContext";
import { htmlToText } from "html-to-text";

// URL path for status codes, after groups (1xx/100, 2xx/200, 4xx/404, etc. )
export default function StatusCode({ params }) {
  // grabs the group and code from the parameters in the URL
  const { code, group } = params;
  const statusCodes = useStatusCodes();
  const statusCode = statusCodes.find((sc) => sc.code.toString() === code);

  // if statusCode is a valid status code, uses the data fetched in layout in the description
  return (
    <main className="flex flex-col items-center justify-center max-h-full p-2">
      {statusCode ? (
        <>
          <Link
            href={`/${group}`}
            className="text-gray-800 dark:text-white font-semibold bg-gray-200 dark:bg-gray-500 hover:bg-gray-400 dark:hover:bg-gray-400 px-1 py-1 rounded-md">
            {"< "}Back to status code group
          </Link>
          <h1 className="text-2xl font-bold mb-1 text-gray-800 dark:text-white">
            Status Code: {code}
          </h1>
          <p className="text-lg mb-4 text-gray-600 dark:text-gray-300 max-w-[80vw]">
            {htmlToText(statusCode.description)}
          </p>
          <Image
            src={`https://http.cat/${code}`}
            alt={`${code} Status Code`}
            width={600}
            height={600}
            priority
          />
        </>
      ) : (
        <h1 className="text-3xl font-bold mb-2 text-gray-800 dark:text-white">
          {" "}
          This page doesn{"'"}t exist! Refer to the nav bar above 🙂
        </h1>
      )}
    </main>
  );
}
