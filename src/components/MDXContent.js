"use client";

import { MDXProvider } from "@mdx-js/react";
import { useMDXComponents } from "../app/mdx-components";
import HomeContent from "../app/mdx/HomeContent.mdx";

export default function MDXContent() {
  const components = useMDXComponents({});
  return (
    <MDXProvider components={components}>
      <HomeContent />
    </MDXProvider>
  );
}
