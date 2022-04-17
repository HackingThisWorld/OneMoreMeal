import { MantineProvider } from "@mantine/core";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

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
