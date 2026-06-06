
// import NavbarCompounent from "../../components/NavbarCompounent";

import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body>
          {/* < NavbarCompounent /> */}
        {children}
      </body>
    </html>
  );
}
