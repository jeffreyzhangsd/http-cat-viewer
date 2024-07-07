"use client";

import Image from "next/image";
import Link from "next/link";

export function useMDXComponents(components) {
  return {
    wrapper: ({ children }) => <div className="text-gray-800 dark:text-white">{children}</div>,
    h1: ({ children }) => <h1 className="text-4xl text-center font-bold mb-4">{children}</h1>,
    h2: ({ children }) => (
      <h2 className="text-2xl text-center font-bold mb-4 max-w-[700px] mx-auto">{children}</h2>
    ),
    p: ({ children }) => <p className="mb-4  text-center ">{children}</p>,
    ul: ({ children }) => <ul className="list-disc pl-5 mb-4 ml-4 text-center ">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal pl-5 mb-4 ml-4 text-center ">{children}</ol>,
    li: ({ children }) => <li className="mb-2 text-center ">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 dark:border-gray-700 pl-4 py-2 mb-4 italic">
        {children}
      </blockquote>
    ),
    a: (props) => (
      <Link
        {...props}
        className="underline text-blue-500 hover:text-blue-700"
        target="_blank"
        rel="noopener noreferrer"
      />
    ),
    code: ({ children }) => (
      <code className="bg-gray-100 dark:bg-gray-800 rounded px-1 py-0.5">{children}</code>
    ),
    pre: ({ children }) => (
      <pre className="bg-gray-100 dark:bg-gray-800 rounded p-4 overflow-x-auto mb-4">
        {children}
      </pre>
    ),
    ...components,
  };
}
