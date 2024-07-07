import Link from "next/link";
import ChangeTheme from "./ChangeTheme";

export default function Navbar() {
  return (
    <nav className="bg-gray-200 dark:bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-1">
          <Link
            href="/"
            className="text-gray-800 self-center dark:text-white text-sm px-1 py-1 rounded-md lg:text-3xl font-bold  hover:bg-gray-400 dark:hover:bg-gray-400">
            HTTP Cats Viewer
          </Link>
          <ChangeTheme />
        </div>
        <div className="space-x-2 md:space-x-3 lg:space-x-4 text-sm">
          <Link
            href="/"
            className="text-gray-800 dark:text-white hover:bg-gray-400 dark:hover:bg-gray-400 px-1 py-1 rounded-md ">
            Home
          </Link>
          <Link
            href="/1xx"
            className="text-gray-800 dark:text-white hover:bg-gray-400 dark:hover:bg-gray-400 px-1 py-1 rounded-md ">
            1xx
          </Link>
          <Link
            href="/2xx"
            className="text-gray-800 dark:text-white hover:bg-gray-400 dark:hover:bg-gray-400 px-1 py-1 rounded-md ">
            2xx
          </Link>
          <Link
            href="/3xx"
            className="text-gray-800 dark:text-white hover:bg-gray-400 dark:hover:bg-gray-400 px-1 py-1 rounded-md ">
            3xx
          </Link>
          <Link
            href="/4xx"
            className="text-gray-800 dark:text-white hover:bg-gray-400 dark:hover:bg-gray-400 px-1 py-1 rounded-md ">
            4xx
          </Link>
          <Link
            href="/5xx"
            className="text-gray-800 dark:text-white hover:bg-gray-400 dark:hover:bg-gray-400 px-1 py-1 rounded-md ">
            5xx
          </Link>
        </div>
      </div>
    </nav>
  );
}
