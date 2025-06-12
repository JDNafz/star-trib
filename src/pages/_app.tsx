
import type { AppProps } from "next/app";
import "@/styles/myStyles.css"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
