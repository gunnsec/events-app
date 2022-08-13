import Document, {Html, Head, Main, NextScript} from 'next/document';


class SECDocument extends Document {
    render() {
        return (
            <Html className="h-full scroll-smooth">
                <Head>
                    <meta charSet="utf-8" />
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Limelight:300,400,500" />
                </Head>
                <body className="h-full dark:bg-zinc-900 dark:text-white">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default SECDocument;
