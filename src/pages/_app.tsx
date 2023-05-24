import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import Appbar from "~/components/Appbar/Appbar";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
  <>
    <Appbar />
    <Component {...pageProps} />
  </>);
};

export default api.withTRPC(MyApp);
