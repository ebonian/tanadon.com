import "../styles/globals.css";
import type { AppProps } from "next/app";
import CommandContext from "../contexts/CommandContext";
import LandingContext from "../contexts/LandingContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LandingContext>
      <CommandContext>
        <Component {...pageProps} />
      </CommandContext>
    </LandingContext>
  );
}

export default MyApp;
