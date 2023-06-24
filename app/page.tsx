import { TfiLineDotted, TfiLayoutColumn4 } from "react-icons/tfi";
import { CiMenuBurger } from "react-icons/ci";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <main className="min-h-screen bg-white relative flex flex-col">
      <Navbar />
      <div className="flex flex-col md:flex-row pl-1">
        <div className="w-56 h-56 mx-auto md:mx-0 md:w-3/5 md:min-h-[75vh] md:rounded-tr-lg md:rounded-br-lg rounded-full relative bg-[linear-gradient(to_right_top,rgba(30,73,107,0.6),rgba(255,255,255,1)),url('/pool.jpg')] bg-cover bg-center opacity-60 shadow-xl">
          <div className="h-full w-full flex-1 flex flex-col items-center justify-between">
            <div className="w-full pl-40 flex flex-row items-start justify-start mt-12 pr-8" />
            <p className=" nt-12 tracking-widest -rotate-90 opacity-100 font-semibold text-5xl text-primary [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] mr-56 hidden md:inline-block">
              Togther
            </p>
            <div className="w-full pl-4 flex flex-row items-end justify-end mb-12 pr-8">
              <TfiLayoutColumn4 className="text-6xl text-white opacity-60 hidden md:inline-block" />
            </div>
          </div>
        </div>
        <div className="mt-8 lg:mt-0 w-full lg:w-2/5 flex flex-col items-center justify-center lg:items-ends lg:justify-end relative">
          <TfiLineDotted className="text-6xl text-primary  opacity-60 absolute top-10 left-4 -ml-12 -mt-12 hidden md:inline-block" />
          <TfiLineDotted className="text-6xl text-primary  opacity-60 absolute top-12 left-4 -ml-12 -mt-12 hidden md:inline-block" />
          <TfiLineDotted className="text-6xl text-primary  opacity-60 absolute top-14 left-4 -ml-12 -mt-12 hidden md:inline-block" />
          <p className="text-4xl text-primary font-thin absolute top-1/2 -left-0 transform -translate-x-1/2 -translate-y-1/2 hidden lg:inline-block">
            Building a stronger community to raise awareness of youth mental
            health issues
          </p>
          <p className="px-4 text-slate-500 text-lg lg:text-justify pb-12">
            <span className="font-semibold mb-2 block lg:hidden">
              Building a stronger community to raise awareness of youth mental
              health issues
            </span>
            This platform is a digital town hall where we are looking to
            collect, inform and communicate the critical need of our community
            to deal with the growing youth mental health issues leading to an
            unacceptable level of suicide in our northern beaches community .
          </p>
          {/* <TfiArrowTopLeft className="text-6xl text-primary opacity-60 absolute bottom-10 right-4 ml-12 -mt-12 lg:hidden inline-block" /> hover:text-primary */}
        </div>
      </div>
      {/* 
      <div className="w-full flex flex-row items-center justify-center z-10  absolute inset-0">
        <p className="text-4xl text-primary font-light">
          Building A Stronger Community
        </p>
      </div> */}
      <div className="w-full flex flex-col md:flex-row mt-16 px-4">
        <div className="flex-1">
          <p className="text-xl">Who we are</p>
          <p>
            We are a concerned group of local northern beaches residents with a
            broad range of backgrounds and skills that wish to address this dire
            need to work towards zero death through this devastating growing
            number of suicides. We strive to be a resource for information and
            support for those in need.
          </p>
        </div>
        <div className="flex-1">
          <p>Title</p>
          <p>
            Labore irure cupidatat est sint. Voluptate anim non duis
            reprehenderit officia esse amet ad et adipisicing. Quis ea laborum
            eu est consequat excepteur est cupidatat nulla in fugiat fugiat
            reprehenderit. Sunt qui enim consequat fugiat est cillum velit minim
            aliquip ex aliquip cupidatat minim sunt. Tempor et duis elit duis
            consequat. Commodo qui fugiat quis proident Lorem anim cupidatat est
            ad proident. Commodo amet reprehenderit fugiat laborum officia irure
            proident et nisi sit.
          </p>
        </div>
      </div>
    </main>
  );
}

//  bg-[linear-gradient(to_right_top,rgba(30,73,107,0.6),rgba(255,255,255,1)),url('/pool.jpg')] bg-cover bg-center
