import { QueryClient, QueryClientProvider } from "react-query";
import "../styles/globals.css";
import {useEffect, useState} from "react";
import { adjustBodyToViewport } from "../src/utils";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        window.addEventListener("resize", adjustBodyToViewport);
        adjustBodyToViewport();
        return () => window.removeEventListener("resize", adjustBodyToViewport);
    });

    return (
        <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
        </QueryClientProvider>
    );
}

export default MyApp;
