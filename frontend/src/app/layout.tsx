"use client"
import {ReactNode} from "react";
import {Footer, Header} from "../widget";
import {Theme} from "@radix-ui/themes";
import '@radix-ui/themes/styles.css';
import "../App/index.css";

export default function RootLayout({
                                       children,
                                   }: {
    children: ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <Theme>
            <Header theme={"light"}/>
            {children}
            <Footer />
        </Theme>
        </body>
        </html>
    )
}