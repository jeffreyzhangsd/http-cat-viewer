import Image from "next/image";
import Link from "next/link";

export default function StatusCode({ params }) {
  // url path /group/code
  const { code } = params;
  const { group } = params;

  return (
    <main className="flex flex-col items-center justify-center min-h-full max-h-screen p-6">
      <Link
        href={`/${group}`}
        className="text-gray-800 dark:text-white font-semibold bg-gray-200 dark:bg-gray-500 hover:bg-gray-400 dark:hover:bg-gray-400 px-1 py-1 rounded-md ">
        {"< "}Back
      </Link>
      <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Status Code: {code}</h1>
      <Image
        src={`https://http.cat/${code}`}
        alt={`${code} Status Code`}
        width={500}
        height={500}
      />
    </main>
  );
}
