import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

//react-query
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

// recoil
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }: AppProps) {
    const [queryClient] = React.useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                <RecoilRoot>
                    <Component {...pageProps} />
                </RecoilRoot>
            </Hydrate>
            <ReactQueryDevtools />
        </QueryClientProvider>
    );
}

export default MyApp;
