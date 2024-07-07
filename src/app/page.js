import Image from "next/image";
import Link from "next/link";
import MDXContent from "../components/MDXContent";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-full max-h-screen p-6">
      <MDXContent />
    </main>
  );
}
