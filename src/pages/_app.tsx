import React from 'react';
import { type AppType } from 'next/app';
import { AnimatePresence } from 'framer-motion';

import Appbar from '~/components/appbar/Appbar';
import { api } from '~/utils/api';

import '~/styles/globals.css';

const MyApp: AppType = ({ Component, pageProps }) => ( // eslint-disable-line
  <>
    <Appbar />
    <AnimatePresence>
      <Component {...pageProps} />
    </AnimatePresence>
  </>
);

export default api.withTRPC(MyApp);
