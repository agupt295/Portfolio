import Image from "next/image";
import Linkedin from "./images/linkedin.png"
import GitHub from "./images/github.png"
import Java from './images/Java.png'
import Swift from './images/swift.png'

import Python from './images/python.jpeg'
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div> */}

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
      <div
        className="group relative rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        rel="noopener noreferrer"
      >
        <h2 className="mb-3 text-2xl font-semibold relative">
          Skills{" "}
          <div className="absolute left-0 top-24 mt-2 hidden w-96 p-4 bg-white border border-gray-300 rounded-lg shadow-lg group-hover:block dark:bg-neutral-800 dark:border-neutral-700">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3>Languages</h3>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Image src={Java} alt="Java" className="m-0 max-w-[30ch] text-sm opacity-50" width={30}/>
                  <h6 style={{ marginLeft: '10px', fontWeight: '300' }}>Java</h6>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Image src={Python} alt="Python" className="m-0 max-w-[30ch] text-sm opacity-50" width={30}/>
                  <h6 style={{ marginLeft: '10px', fontWeight: '300' }}>Python</h6>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Image src={Swift} alt="Swift" className="m-0 max-w-[30ch] text-sm opacity-50" width={30}/>
                  <h6 style={{ marginLeft: '10px', fontWeight: '300' }}>Swift</h6>
                </div>
              </div>
              <div>
                <h3>Frameworks</h3>
                <Image src="/framework1_url" alt="React" className="m-0 max-w-[30ch] text-sm opacity-50" width={1} height={1}/>
                <Image src="/framework2_url" alt="Vue" className="m-0 max-w-[30ch] text-sm opacity-50" width={1} height={1}/>
                <Image src="/framework3_url" alt="Angular" className="m-0 max-w-[30ch] text-sm opacity-50" width={1} height={1}/>
              </div>
            </div>
          </div>
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">
          Tech stacks I am familiar with.
        </p>
      </div>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Experience{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            View my past work-experiences.
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Projects{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Get to know some of the Projects I have worked on.
          </p>
        </a>

        {/* <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Contact{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Get in touch with me?
          </p>
        </a> */}

        <div
          className="group relative rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold relative">
            Contact{" "}
            <div className="absolute left-0 top-24 mt-2 hidden w-96 p-4 bg-white border border-gray-300 rounded-lg shadow-lg group-hover:block dark:bg-neutral-800 dark:border-neutral-700">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="m-0 max-w-[30ch] text-sm">Contact:</h3>
                  <p className="m-0 max-w-[30ch] text-sm opacity-50">
                    +1 (602)326-7916
                  </p>
                </div>
                <div>
                  <h3 className="m-0 max-w-[30ch] text-sm">Email:</h3>
                  <p className="m-0 max-w-[30ch] text-sm opacity-50">
                    aryang10@illinois.edu
                  </p>
                </div>
                <div className="flex items-center">
                  <h3 className="m-0 text-sm">LinkedIn:</h3>
                  <a href="https://www.linkedin.com/in/agupt295/" target="_blank" rel="noopener noreferrer" className="ml-2">
                    <Image src={Linkedin} alt="LinkedIn" className="w-6 h-6" width={1} height={1}/>
                  </a>
                </div>
                <div className="flex items-center">
                  <h3 className="m-0 text-sm">GitHub:</h3>
                  <a href="https://github.com/agupt295" target="_blank" rel="noopener noreferrer" className="ml-2">
                    <Image src={GitHub} alt="GitHub" className="w-6 h-6" width={1} height={1}/>
                  </a>
                </div>
              </div>
            </div>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Tech stacks I am familiar with.
          </p>
        </div>
      </div>

      {/* <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]"> */}
      {/* <div>
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          // src="/next.svg"
          src={Linkedin}
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div> */}

    </main>
  );
}
