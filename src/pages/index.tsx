import { type NextPage } from 'next';
import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

import Toggle from '~/components/buttons/Toggle';
import headshot from '~/assets/images/headshot2.png';

const Home: NextPage = () => {
  const [colorOn, setColorOn] = useState(false);

  return (
    <>
      <Head>
        <title>tomi.dev</title>
        <meta name="Home page" content="Home page for portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen flex-col relative">
        <div className="h-2/5 w-full bg-neu z-0 absolute top-0 left-0" />
        <div style={{ top: '40%' }} className="h-3/5 w-full bg-gradient-to-r from-red-500 to-orange-500 z-0 absolute left-0" />

        <div
          style={{ top: 'calc(40% - 10rem)', right: '15%' }}
          className="invisible lg:visible absolute h-80 w-80 bg-neu rounded-full z-20 neuShadowIn"
        >
          <Image src={headshot} alt="Personal headshot" className="rounded-full" />
        </div>

        <div className="flex flex-col-reverse px-10 md:px-20 h-2/5 bg-gradient-to-r from-red-500 to-orange-500 rounded-bl-3xl z-10">
          <p className="text-5xl md:text-8xl text-neu font-bold">Thomas</p>
          <p className="text-lg text-neu font-bold">Hi, my name is</p>
        </div>
        <div className="px-10 md:px-20 h-3/5 bg-neu rounded-tr-3xl z-10">
          <p className={`${colorOn ? 'text-primary' : 'text-neu'} text-5xl md:text-8xl font-bold textShadowOut transitionSlow`}>MacDonald</p>
          <div className="h-20" />
          <Toggle active={colorOn} setActive={setColorOn} />
        </div>
      </main>
    </>
  );
};

export default Home;
