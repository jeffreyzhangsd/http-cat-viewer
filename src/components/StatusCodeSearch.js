"use client";

import { useState } from "react";
import Image from "next/image";

const statusCodesOnly = [
  100, 101, 102, 103, 200, 201, 202, 203, 204, 205, 206, 207, 208, 226, 300, 301, 302, 303, 304,
  305, 307, 308, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415,
  416, 417, 418, 420, 421, 422, 423, 424, 425, 426, 428, 429, 431, 444, 450, 451, 497, 498, 499,
  500, 501, 502, 503, 504, 506, 507, 508, 509, 510, 511, 521, 522, 523, 525, 530, 599,
];

export default function StatusCodeSearch() {
  const [statusCode, setStatusCode] = useState("200");

  const handleChange = (e) => {
    e.preventDefault();
    const input = e.target.value;
    if (input.length === 3) {
      if (statusCodesOnly.includes(parseInt(input))) {
        setStatusCode(input || "404");
      } else {
        setStatusCode("404");
      }
    }
  };

  return (
    <div className="flex flex-1 flex-col mb-4 items-center">
      <input
        type="text"
        name="statusCode"
        placeholder="Search for a 3 digit status code!"
        className="px-2 py-1 mb-2 border rounded text-center w-[300px]"
        autocomplete="off"
        onChange={handleChange}
      />
      <Image
        src={`https://http.cat/${statusCode}`}
        width={500}
        height={500}
        className="rounded-lg shadow-lg mx-auto min-h-[500px] max-h-[500px]"
        priority
        alt={`${statusCode} Status Code Cat`}
      />
    </div>
  );
}