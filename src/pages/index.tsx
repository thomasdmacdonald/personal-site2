import { type NextPage } from "next";
import React, {useState} from "react";
import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";
import Toggle from "~/components/buttons/Toggle";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const [colorOn, setColorOn] = useState(false)

  return (
    <>
      <Head>
        <title>tomi.dev</title>
        <meta name="Home page" content="Home page for portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen flex-col relative">
        <div className="h-2/5 w-full bg-neu z-0 absolute top-0 left-0"/>
        <div style={{top: '40%'}} className="h-3/5 w-full bg-gradient-to-r from-red-500 to-orange-500 z-0 absolute left-0"/>
        <div 
          style={{top: 'calc(40% - 7.5rem)', right: '20%'}} 
          className="absolute h-60 w-60 bg-neu rounded-full z-20 neuShadowIn"
        />

        <div className="flex flex-col-reverse px-20 h-2/5 bg-gradient-to-r from-red-500 to-orange-500 rounded-bl-3xl z-10">
          <p className="text-8xl text-neu font-bolder">Thomas</p>
          <p className="text-lg text-neu font-bold">Hi, my name is</p>
        </div>
        <div className="px-20 h-3/5 bg-neu rounded-tr-3xl z-10">
          <p className={`${colorOn ? "text-primary" : "text-neu"} text-8xl font-bolder textShadowOut transitionSlow`}>MacDonald</p>
          <div className="h-20" />
          <Toggle active={colorOn} setActive={setColorOn}/>
        </div>
      </main>
    </>
  );
};

export default Home;
