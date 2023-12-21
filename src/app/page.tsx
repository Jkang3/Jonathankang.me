'use client';

import 'animate.css';
import React, { useRef, useState } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement, //@ts-ignore
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@mui/icons-material/Work';

import dynamic from 'next/dynamic';
const Animator = dynamic(
  import('react-scroll-motion').then((it) => it.Animator),
  { ssr: false }
);




import {
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from 'react-scroll-motion';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Logo from '~/svg/Logo.svg';
import Head from 'next/head';
import { useWindowScroll } from '@uidotdev/usehooks';
import { Scroll } from 'lucide-react';
import Link from 'next/link';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  const viewRef = useRef<any>();

  const [{ x, y }, scrollTo] = useWindowScroll();
  const [val, setVal] = useState(false);
  console.log(y, viewRef.current?.offsetHeight);
  return (
    <main>
      <Head>
        <title>Jonathan Kang</title>
        <meta property="og:title" content="Jonathan Kang" key="title" />
        <meta name="image" property="og:image" content="[/ogcopy.jpg]"/>
      </Head>
      <section>
        <div className='App'>
          <div className='App-header h-screen' ref={viewRef}>
            <div className='self-center'>
              <p className='typing'>Hi my name is...</p>
              <div className='text-gradient'>
                <div className='animate__animated animate__fadeInDown animate__delay-1s text-5xl font-bold text-blue-300 drop-shadow'>
                  Jonathan Kang
                </div>
              </div>
              <button
                className='animate__animated animate__fadeInDown animate__delay-1s mt-4 h-10 w-24 rounded-xl border-white bg-white p-0 
            text-lg text-blue-300'
                onClick={() => window.open('/Resume.pdf')}
              >
                Resume
              </button>
            </div>
            <div className='graphic-intro'>
              <div>
                <img
                  src='me.png'
                  alt='Myself'
                  className=' animate__animated animate__fadeInDown animate__delay-1s mb-3 ml-5 h-52 w-52'
                />
              </div>
              <div className='socials justify-center filter'>
                <Link
                  className='socials-linkedin'
                  href='https://www.linkedin.com/in/jonathankang3/'
                  target='_blank'
                >
                  <img
                    src='linkedin.png'
                    alt='Myself'
                    className='animate__animated animate__fadeInDown animate__delay-1s ml-4 h-8 w-8'
                  />
                </Link>
                <Link
                  className='socials-email'
                  href='mailto:jkangg3@gmail.com'
                  target='_blank'
                >
                  <img
                    src='email.png'
                    alt='Myself'
                    className='animate__animated animate__fadeInDown animate__delay-1s ml-4 h-8 w-8'
                  />
                </Link>
                <Link
                  className='socials-github'
                  href='https://github.com/Jkang3'
                  target='_blank'
                >
                  <img
                    src='github.png'
                    alt='Myself'
                    className='animate__animated animate__fadeInDown animate__delay-1s ml-4 h-8 w-8'
                  />
                </Link>
              </div>
            </div>
          </div>
          <div
            className='arrow-container -mt-20'
            style={{
              opacity:
                (viewRef.current?.offsetHeight - y!) /
                viewRef.current?.offsetHeight,
            }}
          >
            <a href='#About' className='arrow'>
              <img
                src='arrow.png'
                alt='Myself'
                className={
                  'animate__animated animate__fadeInDown animate__delay-2s ml-4 mt-5 h-8 w-8'
                }
              />
            </a>
          </div>
          {/* <div className="h-screen" style={{ opacity:y/viewRef.current?.offsetHeight}}> */}
          <div className='h-screen'>
            <div
              className={`animate__animated ${
                y! > viewRef.current?.offsetHeight / 2
                  ? `animate__fadeInDown`
                  : 'animate__fadeOut'
              }`}
            >
              <div className='about mt-48 text-4xl'>
                <div className='font-bold text-white'>
                  <section className='pt-4 text-blue-300' id='About'>
                    About Me
                  </section>
                </div>
              </div>
              <div className='mt-10 flex justify-center self-center'>
                <img
                  src='buzz.jpg'
                  alt='Myself'
                  className='ml-4 mt-5 h-2/5 w-1/4 rounded-lg'
                />
                <div className='ml-10 max-w-2xl self-center'>
                  <div className='self-center text-white'>
                    Hey there! My name is Jonathan Kang, a junior BS Computer
                    Science Student at the Georgia Institute of Technology. My
                    passion lies in creating high-quality designs that come to
                    life through code. Currently, I'm on the lookout for a
                    Software Engineer internship, with a strong focus on
                    front-end development.
                  </div>
                  <div className='mt-8 self-center text-white'>
                    Aside from school, my all-time favorite hobby is to play
                    sports! From basketball to tennis to spike ball, I am always
                    down to play any sport at any time! Another thing I am
                    concerningly passionate about is food! I am always on the
                    hunt for new and delicious food and I hope that is something
                    we can relate to and talk about.
                  </div>
                  <div className='mt-8 self-center text-white'>
                    Feel free to connect with me using the buttons below. Let's
                    chat!
                  </div>
                  <div className='socials mt-10'>
                    <Link
                      className='socials-linkedin'
                      href='https://www.linkedin.com/in/jonathankang3/'
                      target='_blank'
                    >
                      <img
                        src='linkedin.png'
                        alt='Myself'
                        className='h-8 w-8'
                      />
                    </Link>
                    <Link
                      className='socials-email'
                      href='mailto:jkangg3@gmail.com'
                      target='_blank'
                    >
                      <img
                        src='email.png'
                        alt='Myself'
                        className='ml-4 h-8 w-8'
                      />
                    </Link>
                    <Link
                      className='socials-github'
                      href='https://github.com/Jkang3'
                      target='_blank'
                    >
                      <img
                        src='github.png'
                        alt='Myself'
                        className='ml-4 h-8 w-8'
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='h-screen'>
            <div
              className={`animate__animated ${
                y! > (viewRef.current?.offsetHeight * 3) / 2
                  ? `animate__fadeInDown`
                  : 'animate__fadeOut'
              }`}
            >
              <div
                className='flex justify-center text-4xl font-bold text-blue-300'
                id='Experience'
              >
                Experience
              </div>
              <div className='mt-4 flex justify-center'>
                <VerticalTimeline lineColor='#93c5fd'>
                  <VerticalTimelineElement
                    visible
                    className='vertical-timeline-element--education text-white'
                    date='May 2023 - August 2023'
                    iconStyle={{ background: '#93c5fd', color: '#ffffff' }}
                    icon={<WorkIcon />}
                  >
                    <div className='vertical-timeline-element-title text-lg font-bold text-black'>
                      Multimedia
                    </div>
                    <div className='vertical-timeline-element-subtitle text-black'>
                      Software Engineer Intern
                    </div>
                    <p className='!font-normal text-black'>
                      Developed a responsive frontend using React, Tailwind, and
                      NextJS, integrating a markdown editor npm package for
                      content management. Implemented a backend with MongoDB
                      connections on AWS Lambda. Created a user-friendly
                      blogging system for registered users to effortlessly
                      create and engage with content. Designed custom front-end
                      graphic elements using Photoshop and Premier Pro.
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    visible
                    className='vertical-timeline-element--education text-white'
                    date='May 2022 - August 2022'
                    iconStyle={{ background: '#93c5fd', color: '#ffffff' }}
                    icon={<WorkIcon />}
                  >
                    <div className='vertical-timeline-element-title text-lg font-bold text-black'>
                      Sevens Foundation
                    </div>
                    <div className='vertical-timeline-element-subtitle text-black'>
                      Frontend Developer Intern
                    </div>
                    <p className='!font-normal text-black'>
                      Redesigned a portfolio web application with React,
                      resulting in a substantial boost in target audience
                      engagement. Integrated a weather REST API to improve the
                      user experience and create a more intuitive interface.
                      Developed comprehensive system sequence diagrams to ensure
                      cohesive and optimized front-end development for various
                      use cases and scenarios, covering both functionality and
                      UI aspects.
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    visible
                    className='vertical-timeline-element--education text-white'
                    date='January 2020 - August 2021'
                    iconStyle={{ background: '#93c5fd', color: '#ffffff' }}
                    icon={<WorkIcon />}
                  >
                    <div className='vertical-timeline-element-title text-lg font-bold text-black'>
                      Christian Mission
                    </div>
                    <div className='vertical-timeline-element-subtitle text-black'>
                      UI Intern
                    </div>
                    <p className='!font-normal text-black'>
                      Produced engaging videos for a non-profit soup kitchen,
                      leading to a 35% rise in audience engagement across their
                      social media channels. Designed and generated multimedia
                      content such as flyers, cinematics, and animations to
                      effectively convey the soup kitchen's mission and
                      activities to a broader audience. Utilized Adobe Creative
                      Suite to craft high-quality visuals and videos that
                      encapsulated the non-profit's mission and encouraged
                      community participation.
                    </p>
                  </VerticalTimelineElement>
                </VerticalTimeline>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
