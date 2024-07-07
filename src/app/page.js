import Image from "next/image";

export default function Home() {
  // main landing page
  return (
    <main className="flex flex-col items-center justify-center min-h-full max-h-screen p-6">
      <h1 className="text-4xl text-center font-bold mb-8 text-gray-800 dark:text-white">
        Welcome!
      </h1>
      <h1 className="text-2xl text-center font-bold mb-8 text-gray-800 dark:text-white max-w-[700px]">
        By visiting this page, you sent a HTTP GET request and the server responded with a 200 OK!
      </h1>
      <Image
        src="https://http.cat/200"
        alt="200 OK"
        width={500}
        height={500}
        className="rounded-lg shadow-lg"
      />
    </main>
  );
}
