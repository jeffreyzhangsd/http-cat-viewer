import { ThemeProvider } from "next-themes";
import { StatusCodesProvider } from "./context/StatusCodesContext";
import Navbar from "../components/Navbar";
import "./globals.css";

const fetchStatusDescription = async (code) => {
  const res = await fetch(`https://http.dev/${code}`);
  const text = await res.text();
  const descriptionMatch = text.match(/<p>(.*?)<\/p>/);
  const description = descriptionMatch ? descriptionMatch[1] : "No description available";
  return { code, description };
};

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
