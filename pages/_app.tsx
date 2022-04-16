import { MantineProvider } from "@mantine/core";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <MantineProvider>
      <div>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </MantineProvider>
  );
}

export default MyApp;
