import "./globals.css";
import Header from "./Components/Header";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
       <Header/>
        {children}
      </body>
    </html>
  );
}
