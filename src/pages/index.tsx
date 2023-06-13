import { type NextPage } from "next";
import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from 'next/image'
import type { StaticImageData } from "next/image"
import { api } from "~/utils/api";

import LOGO from '@/images/Soundscape_Logo.svg'
import Adidas_Logo from '@/images/Adidas_Logo.png'
import HERO_BG from '@/images/HERO.jpg'
import IPHONE_1 from '@/images/iPhone14_First.png'
import GROUP_INTRO from '@/images/Group_Intro.jpg'
import FEATURES_1 from '@/images/Features_1.png'
import FEATURES_2 from '@/images/Features_2.png'
import FEATURES_3 from '@/images/Features_3.png'
import ReactPlayer from 'react-player'
import React from 'react'

import { HiMenu } from "react-icons/hi";


//const logoSrc: StaticImageData = (LOGO as string) ;
const adidasSrc: StaticImageData = Adidas_Logo ;
const HERO_BG_SRC: StaticImageData = HERO_BG;
const IPHONE_1_SRC: StaticImageData = IPHONE_1;
const GROUP_INTRO_SRC: StaticImageData = GROUP_INTRO;
const FEATURES_1_SRC: StaticImageData = FEATURES_1;
const FEATURES_2_SRC: StaticImageData = FEATURES_2;
const FEATURES_3_SRC: StaticImageData = FEATURES_3;


import toast, { Toaster } from 'react-hot-toast';

const notifyPageMissing = () => toast('This page is coming soon!');
const notifyFuncMissing = () => toast('This functionaility is coming soon!');



//HERO IS GOOD UNTIL 1024px

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  const HeaderLinks = [ 'Home', 'Features', 'About', 'Support', 'People', 'News & Features'];

  const [initialRenderComplete, setInitialRenderComplete] = useState(false);

  useEffect(() => {
   setInitialRenderComplete(true);
  }, []);
  

  return (
    <>
      <Head>
        <title>Soundscape for Everyone</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen w-full flex-col bg-soundscape-white-bg mt-header-gap font-poppins">
      {/* ------------------------------------------------------------------------------------------------------------------------------------------------ */}
        <header className="flex h-header w-full fixed top-0 left-0 z-50 py-4 items-center justify-between bg-soundscape-blue-bg 
                           2xl:px-16 xl:px-16 lg:px-16 md:px-16 sm:px-8 xs:px-8"> 
          <div className="flex h-full w-auto">
            <Image className="h-full w-auto" src={LOGO as string} height={0} width={0} alt=''/>
            <div className="flex-col w-auto px-4
                            2xl:flex xl:flex lg:flex md:flex sm:flex xs:hidden">
              <h1 className="w-full text-center text-soundscape-white text-2xl">Soundscape</h1>
              <h5 className="w-full text-center text-soundscape-white text-sm">for Everyone</h5>
            </div>
          </div>
          <div className="2xl:flex xl:flex lg:hidden m:hidden sm:hidden xs:hidden"> 
            { HeaderLinks.map((link, index) => {
              return (
                <Link className="flex h-10 w-auto text-soundscape-white text-center items-center text-base px-4 mx-3 cursor-pointer rounded-header-btn hover:bg-soundscape-dark-blue " href="/" onClick={notifyPageMissing} key={index}>
                  {link}
                </Link>
              )
            })}
          </div>
          <HiMenu className="2xl:hidden xl:hidden lg:flex md:flex sm:flex xs:flex" style={{ 'cursor': 'pointer'}} color="white" size={"2.5rem"} />
        </header>
      {/* ------------------------------------------------------------------------------------------------------------------------------------------------ */}
        <div className='flex flex-col h-main-hero w-full relative justify-between'>
          <Image className="absolute h-full object-cover z-10
                            2xl:object-hero-big-screen xl:object-hero-big-screen  lg:object-hero-big-screen  md:object-left-top sm:object-left-top  xs:object-left-top" src={HERO_BG_SRC} height={0} width={0} alt=''/>
          <div className="flex flex-col z-30 gap-6 mx-20
                          2xl:items-start  xl:items-start lg:items-start   md:items-center  sm:items:center  xs:items-center
                          2xl:mt-36 xl:mt-36  lg:mt-24  md:mt-24  sm:mt-24  xs:mt-24
                          2xl:w-[45vw]  xl:w-[45vw]  lg:w-[35vw]  md:w-fill-available  sm:w-fill-available  xs:w-fill-available ">
              <h2 className="w-full  text-soundscape-white text-hero-title font-bold leading-none
                            2xl:text-left xl:text-left lg:text-center md:text-center sm:text-center xs:text-center">
                Soundscape&nbsp; 
                <br className="2xl:hidden xl:hidden lg:flex md:flex sm:flex xs:flex"/>
                <span  className="2xl:text-hero-title xl:text-hero-title lg:text-hero-title-sub md:text-hero-title-sub sm:text-hero-title-sub xs:text-hero-title-sub">for Everyone</span> 
              
              </h2>
              <p className="font-work-sans font-normal w-full text-left text-soundscape-white 
                            2xl:text-3xl xl:text-3xl lg:text-2xl  md:text-2xl  sm:text-2xl  xs:text-2xl">
                Explore, discover, and have fun with your own 3D sound map of the word!
              </p>
              <button className="h-auto w-fit bg-soundscape-orange rounded-primary-btn px-16 py-4 text-soundscape-white text-lg font-semibold" onClick={notifyFuncMissing} >Donate</button>
          </div>

          <div className="flex flex-row z-30 w-auto h-auto py-8 ml-20 gap-16">
            <Image className="h-20 w-auto" src={adidasSrc} height={0} width={0} alt=''/>
            <Image className="h-20 w-auto" src={adidasSrc} height={0} width={0} alt=''/>
            <Image className="h-20 w-auto" src={adidasSrc} height={0} width={0} alt=''/>
            <Image className="h-20 w-auto" src={adidasSrc} height={0} width={0} alt=''/>
          </div>

        </div>
      {/* ------------------------------------------------------------------------------------------------------------------------------------------------ */}
        <div className="flex flex-col w-full h-auto bg-soundscape-grey-bg py-28 
                        2xl:px-20 xl:px-20 lg:px-20 md:px-20 sm:px-10 xs:px-10">
          <h2 className="section-title-blue w-fit bg-transparent py-2 font-bold text-soundscape-blue text-3xl ">What is Soundscape</h2>
          <div className="flex flex-row flex-wrap w-full h-auto
                          2xl:px-20 xl:px-20 lg:px-20 md:px-20 sm:px-10 xs:px-10">
            <div className="flex h-auto py-12
                            2xl:items-start xl:items-start lg:items-start md:items-center sm:items-center xs:items-center
                            2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col xs:flex-col
                            2xl:basis-1/2 xl:basis-1/2 lg:basis-full md:basis-full sm-basis:full xs:basis-full ">
              <Image className="h-phone w-fit" src={IPHONE_1_SRC} height={0} width={0} alt=''/>
              <div className="flex flex-col pl-8 pr-2 py-8 gap-6">
                <h4 className="w-fit bg-transparent py-2 font-semibold text-soundscape-orange text-xl" >Spatial Audio Technology</h4>
                {/** mr-8 seemed to flow better */}
                <p className="mr-6 font-work-sans text-soundscape-blue font-medium">Soundscape uses 3D or spatial audio technology to enable people to build a richer awareness of their surroundings, thus becoming more confident and empowered to get around. </p>
              </div>
            </div>
            <div className="flex h-auto py-12
                            2xl:items-start xl:items-start lg:items-start md:items-center sm:items-center xs:items-center
                            2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col xs:flex-col
                            2xl:basis-1/2 xl:basis-1/2 lg:basis-full md:basis-full sm-basis:full xs:basis-full ">
            <Image className="h-phone w-auto" src={IPHONE_1_SRC} height={0} width={0} alt=''/>
              <div className="flex flex-col pl-8 pr-2 py-8 gap-6">
                <h4 className="w-fit bg-transparent py-2 font-semibold text-soundscape-orange text-xl" >Intuitive way to works</h4>
                {/** mr-8 seemed to flow better */}
                <p className="mr-6 font-work-sans text-soundscape-blue font-medium">Hence, Soundscape makes familiar places richer with the information it provides; and it makes unfamiliar places become familiar because of the intuitive way it works. </p>
              </div>
            </div>
          </div>
        </div>
      {/* ------------------------------------------------------------------------------------------------------------------------------------------------ */}
        <div className="flex flex-col w-full h-auto bg-soundscape-white py-28
                        2xl:px-20 xl:px-20 lg:px-20 md:px-20 sm:px-10 xs:px-10">
          <div className="flex flex-row flex-wrap w-full h-auto">
            <div className="flex justify-center xl:basis-1/2 lg:basis-full md:basis-full sm-basis:full  lg:pb-6 md:pb-6 sm:pb-6 xs:pb-6">
              <Image className="h-section-img w-auto rounded-section-image" src={GROUP_INTRO_SRC} height={0} width={0} alt=''/>
            </div>
            <div className="flex flex-col xl:basis-1/2 lg:basis-full md:basis-full sm-basis:full xl:pl-10 py-4 gap-6">
              <h2 className="section-title-orange w-fit bg-transparent py-2 font-bold text-soundscape-orange text-3xl ">Intro to Consortium</h2>
              <p className="font-work-sans text-soundscape-blue font-medium  mr-16">Following Microsoft’s decision to close down Soundscape, we are delighted to announce that a group of organizations and people, including the co-founders of Soundscape, have come together to not only make it available to existing users, but eventually make it available for everyone! </p>
              <button className="h-auto w-fit bg-soundscape-blue rounded-primary-btn px-16 py-3 text-soundscape-white text-lg font-semibold" onClick={notifyPageMissing}>Learn More</button> 
            </div>
          </div>
        </div>
      {/* ------------------------------------------------------------------------------------------------------------------------------------------------ */}
        <div className="flex flex-col w-full h-auto bg-soundscape-blue py-28 
                         2xl:px-20 xl:px-20 lg:px-20 md:px-20 sm:px-10 xs:px-10">
          <div className="flex flex-row-reverse flex-wrap  w-full h-auto"> {/* Just Have To Reverse here */}
            <div className="xl:basis-7/12 lg:basis-full lg:w-full md:basis-full md:w-full sm:basis-full sm:w-full  xl:pl-10 ">
              <div className='player-wrapper lg:flex lg:justify-center'>
                { !initialRenderComplete ? <></> : <ReactPlayer url='https://youtu.be/QR_2eF0YjM0' height='100%' width='100%' className='react-player' /> }
              </div>
              {/*<Image className="h-section-img w-auto rounded-section-image" src={GROUP_INTRO as ( HTMLElement & SVGElement )} height={0} width={0} alt=''/>*/}
            </div>
            <div className="flex flex-col xl:basis-5/12 lg:basis-full md:basis-full sm-basis:full   py-4 gap-6">
              <h2 className="section-title-white w-fit bg-transparent py-2 font-bold text-soundscape-white text-3xl ">How Soundscape works</h2>
              <p className="font-work-sans text-soundscape-white font-medium mr-16">
                Soundscape provides information about your surroundings with synthesized binaural audio, creating the effect of 3D sound. It runs in the background in conjunction with navigation or other applications to provide you with additional context about the environment.
                <br/><br/>
                Your phone, in hand or in pocket, is used to track movement using location and activity sensors, and let you move toward a self-set audio beacon.
              </p>
            </div>
          </div>
        </div>
      {/* ------------------------------------------------------------------------------------------------------------------------------------------------ */}
        <div className="flex flex-col w-full h-auto bg-soundscape-white py-28 
                        2xl:px-20 xl:px-20 lg:px-20 md:px-20 sm:px-10 xs:px-10">
          <div className="flex flex-row  flex-wrap justify-around w-full h-auto">
            <div className="flex flex-col basis-96 h-auto pb-4"> 
              {/* <Image className="" src={} alt="" /> */}
              <Image className="w-10/12" src={FEATURES_1_SRC} alt="" />
              <h4 className="w-fit bg-transparent py-2 font-semibold text-soundscape-orange text-xl" >Getting started with Soundscape</h4>
              <p className="mr-2 font-work-sans text-soundscape-blue font-medium pr-8">After you install Soundscape, connect a stereo headset or earbuds. Follow the introductions and when prompted, allow the app to access your location. Then, explore a familiar route to get used to how Soundscape delivers spatial information.</p>
            </div>
            <div className="flex flex-col basis-96 h-auto pb-4"> 
              {/* <Image className="" src={} alt="" /> */}
              <Image className="w-10/12" src={FEATURES_2_SRC} alt="" />
              <h4 className="w-fit bg-transparent py-2 font-semibold text-soundscape-orange text-xl" >Device compatibility</h4>
              <p className="mr-2 font-work-sans text-soundscape-blue font-medium pr-8">Soundscape is an application designed to operate on iPhone SE, iPhone 6S, and newer models. It is engineered to be compatible with both wired and Bluetooth stereo headsets, providing users with a seamless audio experience.</p>
            </div>
            <div className="flex flex-col basis-96 h-auto pb-4"> 
              {/* <Image className="" src={} alt="" /> */}
              <Image className="w-10/12" src={FEATURES_3_SRC} alt="" />
              <h4 className="w-fit bg-transparent py-2 font-semibold text-soundscape-orange text-xl" >Explore, discover, and have fun!</h4>
              <p className="mr-2 font-work-sans text-soundscape-blue font-medium pr-8">You can use Soundscape in a number of different ways, whether on a well-known route, out about with a friend or using it to discover new places.​</p>
            </div>
          </div>
        </div>
      {/* ------------------------------------------------------------------------------------------------------------------------------------------------ */}
        <div className="flex flex-col w-full h-auto bg-soundscape-blue py-28
                        2xl:px-20 xl:px-20 lg:px-20 md:px-20 sm:px-10 xs:px-10">
          <div className="flex flex-row flex-wrap w-full h-auto gap-8">
            <div className="flex flex-col w-1/2 h-auto basis-eList-1">
              <h3 className="w-fit bg-transparent py-2 font-semibold text-soundscape-white text-2xl ">Stay up to date on <span className="text-soundscape-bright-blue">Soundscape for everyone.</span></h3>
              <p className="font-work-sans text-soundscape-white font-medium">Sign up to get the latest updates and news about Soundscape for Everyone.</p>
            </div>
            <div className="flex gap-8 basis-eList-2  
                            2xl:basis-eList-2  xl:basis-eList-2  lg:basis-eList-2  md:basis-eList-2  sm:basis-full xs:basis-full
                            2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col" >
              <div className="flex flex-col gap-2">
                <input type="text" placeholder="Email Address" style={{'borderColor': 'lightgrey', 'color': 'lightgrey'}} 
                        className="flex px-4 py-3 w-96 text-lg rounded-primary-input bg-soundscape-input-bg border-2 border-gray-200 outline-0 text-gray-300
                                   2xl:w-96 xl:w-96 lg:w-96 md:w-96 sm:w-full xs:w-full" /> 
                <p className="font-work-sans text-soundscape-white font-small text-sm" >We will only sporadically send you availability updates.</p>
              </div>
              <div>
                <button className="h-auto w-fit bg-soundscape-orange rounded-primary-btn px-10 py-3 text-soundscape-white text-lg font-semibold" onClick={notifyFuncMissing} >Get Updates</button>
              </div>
            </div>
          </div>
        </div>
      {/* ------------------------------------------------------------------------------------------------------------------------------------------------ */}
        <div className="flex flex-col w-full h-auto bg-soundscape-white py-28
                        2xl:px-20 xl:px-20 lg:px-20 md:px-20 sm:px-10 xs:px-10">
          <h3 className="w-fit bg-transparent py-2 mb- font-semibold text-soundscape-dark-grey text-2xl">Disclaimer</h3>
          <div className="flex w-full gap-16
                          2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col">  
            <div className="flex 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full xs:w-full ">
              <p>Microsoft Soundscape is not designed, intended or made available for diagnosis, treatment, or prevention of diseases and for use as a mobility aid or medical device; and is not designed or intended to be a substitute for professional medical advice, diagnosis, treatment, or judgement and should not be used to replace or as a substitute for professional </p>
            </div>
            <div className="flex 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full xs:w-full ">
              <p>medical advice, diagnosis, treatment, or judgement. The mapping data incorporated into the Microsoft Soundscape program is captured from a third-party program, and therefore, there may be limitations with the accuracy of the information presented and the user is responsible for their actions and their own safety and well-being.</p>
            </div>
          </div>

        </div>
      {/* ------------------------------------------------------------------------------------------------------------------------------------------------ */}
        <footer className="flex flex-row justify-between py-8 bg-soundscape-dark-grey text-soundscape-white
                          2xl:px-16 xl:px-16 lg:px-16 md:px-16 sm:px-8 xs:px-8">
          <div className="flex flex-row">©{new Date().getFullYear()} Soundscape for Everyone</div>
          <div className="2xl:flex xl:flex lg:hidden m:hidden sm:hidden"> 
            { HeaderLinks.map((link, index) => {
              return (
                <Link className="flex h-10 w-auto text-soundscape-white text-center items-center text-base px-4 mx-3 cursor-pointer rounded-header-btn hover:bg-soundscape-dark-blue " href="/" key={index} onClick={notifyPageMissing}>
                  {link}
                </Link>
              )
            })}
          </div>
        </footer>
      </main>
    </>
  );
};

export default Home;
