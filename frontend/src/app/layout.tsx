import { ReactNode } from "react";
import { Footer, Header } from "../widget";
import { Flex, Theme } from "@radix-ui/themes";
import '@radix-ui/themes/styles.css';
import "../App/index.css";
import { cookies } from "next/headers";

export default function RootLayout({
    children,
}: {
    children: ReactNode
}) {
    const cookieStore = cookies().get("auth")
    console.log({cookieStore});
    return (
        <html lang="en">
            <body>
                <Theme>
                    <Flex direction="column" height="100vh">
                        <Header theme={"light"} />
                        {children}
                        <Footer />
                    </Flex>
                </Theme>
            </body>
        </html>
    )
}