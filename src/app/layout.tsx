"use client";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Poppins } from "next/font/google";
import { store, persistor } from "./store.js";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: "400",
  subsets: ["latin"]
});


const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <Provider store={store}>
    <PersistGate
      persistor={persistor}
    >
      <main>{children}</main>
    </PersistGate>
  </Provider>
);


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
