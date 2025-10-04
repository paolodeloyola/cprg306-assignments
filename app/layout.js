import "./globals.css";
export const metadata = { title: "CPRG 306 Assignments" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
