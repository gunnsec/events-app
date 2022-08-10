import Document, {Html, Head, Main, NextScript} from 'next/document';


class SECDocument extends Document {
    render() {
        return (
            <Html className="h-full scroll-smooth">
                <Head>
                    <meta charSet="utf-8" />
                    <link rel="icon" href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/favicon.ico`} />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Limelight:300,400,500" />
                </Head>
                <body className="h-full">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default SECDocument;
