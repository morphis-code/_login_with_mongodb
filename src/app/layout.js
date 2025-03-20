import "./globals.css";

export const metadata = {
  title: "_login",
  description: "A login and register",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
