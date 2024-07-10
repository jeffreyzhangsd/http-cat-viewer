import Image from "next/image";
import Link from "next/link";
import MDXContent from "../components/MDXContent";
import next_icon from "../../public/next.svg";

// Home page that website first directs to
// Able to edit with markdown at app/mdx/HomeContent.mdx
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-full max-h-screen p-6">
      <link rel="icon" href={next_icon} type="image/svg+xml" sizes="any" />
      <MDXContent />
    </main>
  );
}
