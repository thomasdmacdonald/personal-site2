import React, { type PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

const PageAnimationWrapper : React.FC<PropsWithChildren> = ({ children }) => (
  <motion.main
    exit={{ opacity: 0 }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ ease: 'easeOut', duration: 0.5 }}
  >
    {children}
  </motion.main>
);

export default PageAnimationWrapper;
