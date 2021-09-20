import "../styles/globals.css";
import "../styles/misc.css";
import { ThemeProvider } from "next-themes";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import type { AppProps } from "next/app";


function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  ); 
}
export default MyApp;
