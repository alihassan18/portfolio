import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta
                    name="keywords"
                    content="Ali Hassan, MERN Stack developer, Web3 developer, Pakistan web developer, Full stack developer, JavaScript developer, React developer, Node.js developer, Blockchain developer, Web application development, dApp development, Smart contract development"
                />

                <meta
                    name="google-site-verification"
                    content="_lil5qgvKjMLv2n6GEzaAZ6yEIQ8a3yJtLK6JogQTTU"
                />
                <Script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-D2RW9RQ9RC"
                ></Script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-D2RW9RQ9RC');
              `,
                    }}
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
