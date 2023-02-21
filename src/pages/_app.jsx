import "../styles/globals.css";
import "@aws-amplify/ui-react/styles.css";
import ThemeProvider from "../providers/Theme";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
