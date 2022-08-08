import "../styles/globals.css";
import type { AppProps } from "next/app";
import CommandContext from "../contexts/CommandContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CommandContext>
      <Component {...pageProps} />
    </CommandContext>
  );
}

export default MyApp;
