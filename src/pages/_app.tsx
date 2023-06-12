import React from 'react';
import { type AppType } from 'next/app';

import Appbar from 'src/components/appbar/Appbar';
import { api } from 'src/utils/api';

import 'src/styles/globals.css';

const MyApp: AppType = ({ Component, pageProps }) => ( // eslint-disable-line
  <>
    <Appbar />
    <Component {...pageProps} />
  </>
);

export default api.withTRPC(MyApp);
