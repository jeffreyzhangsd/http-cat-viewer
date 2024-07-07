"use client";

import { useState } from "react";
import Image from "next/image";
import Modal from "../../components/Modal";

export default function StatusCodeGroup({ params }) {
  const [selectedCode, setSelectedCode] = useState(null);

  const group = statusCodes[params.group] || { codes: [], description: "" };

  return (
    <main className="p-6">
      {statusCodes[params.group] ? (
        <h1 className="text-3xl font-bold mb-2 text-gray-800 dark:text-white">
          {params.group} Status Codes - Click a card for a short description!
        </h1>
      ) : (
        <h1 className="text-3xl font-bold mb-2 text-gray-800 dark:text-white">
          {" "}
          This page doesn{"'"}t exist! Refer to the nav bar above 🙂
        </h1>
      )}
      <p className="mx-2 mb-6 text-gray-600 dark:text-gray-400">{group.description}</p>
      {/* grid that changes size according to screen size */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {group.codes.map((code) => (
          // each card and their styles
          <div
            key={code.status}
            className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 cursor-pointer hover:bg-gray-400 transition-shadow bg-gray-200 dark:bg-black dark:hover:bg-gray-400"
            onClick={() => setSelectedCode(code)}>
            <Image
              src={`https://http.cat/${code.status}`}
              alt={`${code.status} Status Code`}
              width={300}
              height={300}
              className="w-full h-auto"
            />
            {/* <p className="text-center mt-2 text-gray-800 dark:text-white">{code}</p> */}
          </div>
        ))}
      </div>
      {selectedCode && (
        <Modal group={params.group} code={selectedCode} onClose={() => setSelectedCode(null)} />
      )}
    </main>
  );
}

const statusCodesOnly = [
  100, 101, 102, 103, 200, 201, 202, 203, 204, 205, 206, 207, 208, 226, 300, 301, 302, 303, 304,
  305, 307, 308, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415,
  416, 417, 418, 420, 421, 422, 423, 424, 425, 426, 428, 429, 431, 444, 450, 451, 497, 498, 499,
  500, 501, 502, 503, 504, 506, 507, 508, 509, 510, 511, 521, 522, 523, 525, 599,
];

// statusCodes -> key: {description, codes: [{ status, desc }]}
const statusCodes = {
  "1xx": {
    description: "Informational: The server got the request and is doing something about it.",
    codes: [
      { status: 100, desc: "Continue: Server got initial request, client should proceed." },
      { status: 101, desc: "Switching Protocols: Server is changing protocols." },
      { status: 102, desc: "Processing: Server received and is processing the request." },
      {
        status: 103,
        desc: "Early Hints: Server is likely to send a final response with the headers included.",
      },
    ],
  },
  "2xx": {
    description:
      "Success: The request was successfully received, understood, and accepted. The browser has gotten whatever info or data it needs.",
    codes: [
      { status: 200, desc: "OK: Request succeeded. Default response for HTTP success." },
      { status: 201, desc: "Created: Request succeeded, new resource created." },
      { status: 202, desc: "Accepted: Request received, but not yet acted upon." },
      {
        status: 203,
        desc: "Non-Authoritative Info: Request processed, info is from another source.",
      },
      { status: 204, desc: "No Content: Request processed, no content to send back." },
      { status: 205, desc: "Reset Content: Request processed, reset the document view." },
      { status: 206, desc: "Partial Content: Server is delivering only part of the resource." },
      { status: 207, desc: "Multi-Status: Multiple status codes for multiple status operations." },
      { status: 208, desc: "Already Reported: Members of a DAV binding already enumerated." },
      { status: 226, desc: "IM Used: Server has fulfilled a GET request for the resource." },
    ],
  },
  "3xx": {
    description:
      "Redirection: Request has been redirected and completion requires a further action.",
    codes: [
      { status: 300, desc: "Multiple Choices: Multiple options for the resource delivered." },
      { status: 301, desc: "Moved Permanently: Resource permanently moved to a new URL." },
      { status: 302, desc: "Found: Resource temporarily moved to a different URL." },
      { status: 303, desc: "See Other: Response to the request can be found under another URL." },
      { status: 304, desc: "Not Modified: Resource hasn't been modified since last request." },
      { status: 305, desc: "Use Proxy: Requested resource must be accessed through a proxy." },
      { status: 307, desc: "Temporary Redirect: Resource temporarily moved to a different URL." },
      {
        status: 308,
        desc: "Permanent Redirect: Resource has been permanently moved to another URL.",
      },
    ],
  },
  "4xx": {
    description:
      "Client errors: The request contains bad syntax or cannot be fulfilled, the website/page could not be reached, or is unavailable.",
    codes: [
      { status: 400, desc: "Bad Request: Server cannot process due to client error." },
      { status: 401, desc: "Unauthorized: Authentication is required and has failed." },
      { status: 402, desc: "Payment Required: Reserved for future use." },
      { status: 403, desc: "Forbidden: Server understood but refuses to authorize." },
      { status: 404, desc: "Not Found: Server can't find the requested resource." },
      { status: 405, desc: "Method Not Allowed: Request method not supported for the resource." },
      {
        status: 406,
        desc: "Not Acceptable: Server can't produce a response matching the list of acceptable values.",
      },
      {
        status: 407,
        desc: "Proxy Authentication Required: Client must first authenticate itself with the proxy.",
      },
      { status: 408, desc: "Request Timeout: Server timed out waiting for the request." },
      { status: 409, desc: "Conflict: Request couldn't be processed because of conflict." },
      {
        status: 410,
        desc: "Gone: Resource requested is no longer available and will not be available again.",
      },
      {
        status: 411,
        desc: "Length Required: Server rejected the request because the Content-Length header field is not defined.",
      },
      {
        status: 412,
        desc: "Precondition Failed: Server doesn't meet one of the preconditions that the requester put on the request.",
      },
      {
        status: 413,
        desc: "Payload Too Large: Request entity is larger than limits defined by server.",
      },
      {
        status: 414,
        desc: "URI Too Long: The URI requested by the client is longer than the server is willing to interpret.",
      },
      {
        status: 415,
        desc: "Unsupported Media Type: Media format of the requested data is not supported by the server.",
      },
      {
        status: 416,
        desc: "Range Not Satisfiable: Client has asked for a portion of the file, but the server cannot supply that portion.",
      },
      {
        status: 417,
        desc: "Expectation Failed: Server cannot meet the requirements of the Expect request-header field.",
      },
      {
        status: 418,
        desc: "I'm a teapot: The server refuses to brew coffee because it is a teapot.",
      },
      { status: 420, desc: "Enhance Your Calm: Twitter rate limiting." },
      {
        status: 421,
        desc: "Misdirected Request: Request directed at a server that is not able to produce a response.",
      },
      {
        status: 422,
        desc: "Unprocessable Entity: Request was well-formed but was unable to be followed due to semantic errors.",
      },
      { status: 423, desc: "Locked: Resource that is being accessed is locked." },
      {
        status: 424,
        desc: "Failed Dependency: Request failed due to failure of a previous request.",
      },
      {
        status: 425,
        desc: "Too Early: Server is unwilling to risk processing a request that might be replayed.",
      },
      { status: 426, desc: "Upgrade Required: Client should switch to a different protocol." },
      {
        status: 428,
        desc: "Precondition Required: Origin server requires the request to be conditional.",
      },
      {
        status: 429,
        desc: "Too Many Requests: User has sent too many requests in a given amount of time.",
      },
      {
        status: 431,
        desc: "Request Header Fields Too Large: Server is unwilling to process the request because either an individual header field, or all the header fields collectively, are too large.",
      },
      {
        status: 444,
        desc: "Connection Closed Without Response: Server has closed the connection without sending any response.",
      },
      {
        status: 450,
        desc: "Blocked by Windows Parental Controls: Windows Parental Controls are turned on and are blocking access to the given webpage.",
      },
      {
        status: 451,
        desc: "Unavailable For Legal Reasons: Resource unavailable for legal reasons.",
      },
      {
        status: 497,
        desc: "HTTP Request Sent to HTTPS Port: An expansion of the 400 Bad Request response code.",
      },
      { status: 498, desc: "Invalid Token: Token expired/invalid (Esri)." },
      {
        status: 499,
        desc: "Client Closed Request: Connection closed by client while HTTP server is processing.",
      },
    ],
  },
  "5xx": {
    description: "Server errors: Request is valid, but the server could not complete the request.",
    codes: [
      {
        status: 500,
        desc: "Internal Server Error: Server encountered an unexpected condition that prevented it from fulfilling the request.",
      },
      {
        status: 501,
        desc: "Not Implemented: Server does not support the functionality required to fulfill the request.",
      },
      {
        status: 502,
        desc: "Bad Gateway: Server received an invalid response from the upstream server.",
      },
      { status: 503, desc: "Service Unavailable: Server is not ready to handle the request." },
      {
        status: 504,
        desc: "Gateway Timeout: Server did not receive a timely response from the upstream server.",
      },
      { status: 506, desc: "Variant Also Negotiates: Server has an internal configuration error." },
      {
        status: 507,
        desc: "Insufficient Storage: Server is unable to store the representation needed to complete the request.",
      },
      {
        status: 508,
        desc: "Loop Detected: Server detected an infinite loop while processing the request.",
      },
      { status: 509, desc: "Bandwidth Limit Exceeded: Server has exceeded the bandwidth limit." },
      {
        status: 510,
        desc: "Not Extended: Further extensions to the request are required for the server to fulfill it.",
      },
      {
        status: 511,
        desc: "Network Authentication Required: Client needs to authenticate to gain network access.",
      },
      {
        status: 521,
        desc: "Web Server Is Down: The origin server has refused the connection from Cloudflare.",
      },
      {
        status: 522,
        desc: "Connection Timed Out: Cloudflare could not negotiate a TCP handshake with the origin server.",
      },
      { status: 523, desc: "Origin Is Unreachable: Cloudflare could not reach the origin server." },
      {
        status: 525,
        desc: "SSL Handshake Failed: Cloudflare could not negotiate a SSL/TLS handshake with the origin server.",
      },
      {
        status: 599,
        desc: "Network Connect Timeout Error: This status code is not specified in any RFCs, but is used by some HTTP proxies to signal a network connect timeout error.",
      },
    ],
  },
};
