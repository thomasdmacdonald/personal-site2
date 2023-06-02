import React from 'react';
import { type AppType } from 'next/app';

import { api } from '~/utils/api';

import '~/styles/globals.css';
import Appbar from '~/components/appbar/Appbar';

const MyApp: AppType = ({ Component, pageProps }) => (
  <>
    <Appbar />
    <Component {...pageProps} />
  </>
);

export default api.withTRPC(MyApp);
