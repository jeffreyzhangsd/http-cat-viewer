import { ThemeProvider } from "next-themes";
import { StatusCodesProvider } from "./context/StatusCodesContext";
import Navbar from "../components/Navbar";
import { Metadata } from "next";
import "./globals.css";

// Layout of entire app, anything that needs to be passed down has to come from here
// This includes the theme and status code descriptions that we fetch and save, then pass down

// fetch function with regeneration
const fetchStatusDescription = async (code) => {
  try {
    const res = await fetch(`https://http.dev/${code}`, {
      next: { revalidate: 60 },
    });

    const text = await res.text();
    const descriptionMatch = text.match(/<p>(.*?)<\/p>/);
    const description = descriptionMatch ? descriptionMatch[1] : "No description available";
    return { code, description };
  } catch (err) {
    console.error("An error occurred while fetching descriptions: ", err);
  }
};

export const metadata = {
  title: "HTTP Cat Viewer",
  icons: {
    icon: "../../public/next.svg",
  },
};

// Main layout function, the rest of the app is passed in as a child
const RootLayout = async ({ children }) => {
  const statusCodesOnly = [
    100, 101, 102, 103, 200, 201, 202, 203, 204, 205, 206, 207, 208, 226, 300, 301, 302, 303, 304,
    305, 307, 308, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415,
    416, 417, 418, 420, 421, 422, 423, 424, 425, 426, 428, 429, 431, 444, 450, 451, 497, 498, 499,
    500, 501, 502, 503, 504, 506, 507, 508, 509, 510, 511, 521, 522, 523, 525, 530, 599,
  ];

  const statusCodesWithDescriptions = await Promise.all(
    statusCodesOnly.map(fetchStatusDescription)
  );

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-900">
        <StatusCodesProvider statusCodes={statusCodesWithDescriptions}>
          <ThemeProvider attribute="class">
            <Navbar />
            {children}
          </ThemeProvider>
        </StatusCodesProvider>
      </body>
    </html>
  );
};

export default RootLayout;
