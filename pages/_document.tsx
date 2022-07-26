import Document, {Html, Head, Main, NextScript} from 'next/document';


class SECDocument extends Document {
    render() {
        return (
            <Html className="dark h-full scroll-smooth">
                <Head>
                    <meta charSet="utf-8" />
                    <link rel="icon" href="https://www.gunnsec.org/uploads/1/2/3/2/123265564/graphiconly.png" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Limelight:300,400,500" />
                </Head>
                <body className="min-h-full dark:bg-midnight dark:text-white flex flex-col">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default SECDocument;
