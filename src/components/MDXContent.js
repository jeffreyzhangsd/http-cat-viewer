"use client";

import { MDXProvider } from "@mdx-js/react";
import { useMDXComponents } from "../app/mdx-components";
import HomeContent from "../app/mdx/HomeContent.mdx";

// using MDXProvider as area to use HomeContent from .mdx file
export default function MDXContent() {
  const components = useMDXComponents({});
  return (
    <MDXProvider components={components}>
      <HomeContent />
    </MDXProvider>
  );
}
