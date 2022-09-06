import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx: any) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta charSet='utf-8' />
                    <title>Kakao Talk Chat Room</title>
                    <meta
                        name='viewport'
                        content='width=device-width, initial-scale=1.0, user-scalable=no'
                    />
                    <meta http-equiv='X-UA-Compatible' content='IE-edge' />
                    <meta name='description' content='Kakao Talk Clone Chat Page' />
                    <link rel='preconnect' href='https://fonts.gstatic.com' />
                    <link
                        rel='stylesheet'
                        href='https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap'
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
