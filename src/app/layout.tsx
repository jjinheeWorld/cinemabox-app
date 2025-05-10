import Link from "next/link";
import "./globals.css";
import style from "./layout.module.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={style.container}>
          <header>
            <Link href={"/"}>ᑕIᑎEᗰᗩᗷO᙭</Link>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
