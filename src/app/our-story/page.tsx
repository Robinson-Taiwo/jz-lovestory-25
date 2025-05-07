// src/app/our-story/page.tsx
import Image from 'next/image';
import React from 'react';
// import { Card, CardContent } from '@/components/ui/card';

export default function OurStory() {
  return (
    <div className="min-h-screen bg-wedding-cream text-wedding-charcoal font-lora py-16">


      <section className="h-[50vh] relative bg-center flex items-center justify-center w-full bg-cover bg-no-repeat " style={{ backgroundImage: "url('/images/secondedited.png')" }} >
        <div className="absolute inset-0 bg-black opacity-70"></div>



        <section className="text-center max-w-4xl h-full items-center justify-center flex flex-col z-10 mx-auto">
          <p className="text-[8rem] font-dancing-script font-extrabold text-wedding-cream ">Our Story</p>
          <p className="text-2xl font-lora text-wedding-olive font-medium mt-2">#JZ Love Story’25</p>
          <p className="mt-6 text-wedding-cream text-lg">
            Zoe and Joshua’s journey is a testament to love’s serendipity. From a chance encounter to a
            lifelong promise, here’s how their love blossomed.
          </p>
        </section>

      </section>


      <section className="h-[50vh] relative bg-center flex items-center justify-center w-full bg-cover bg-no-repeat flex-row gap-[4rem] " style={{ backgroundImage: "url('/images/wedding1.png')" }}>


        <p className="text-wedding-gold  text-7xl ">
          Joshua
        </p>

        <p className="text-wedding-gold  text-7xl   font-allura ">
          Et
        </p>

        <p className="text-wedding-gold  text-7xl ">
          Zoe
        </p>


      </section>


      <section className="flex flex-col h-[80vh] w-full p-[2rem]  justify-center gap-[2rem] text-center">

        <div className="flex gap-[2rem] text-xl mt-[0rem] flex-col">
          <span>June 8 2020
          </span>

          <span>University of Ilorin</span>
        </div>

        <div className="w-full flex justify-center items-center">

          <Image src="/images/bull.png" alt="cheers image" width={300} height={300} className="  h-[20rem]  w-[20rem] mt-[5rem] " />

        </div>


        <div className="flex w-full items-center max-w-5xl px-8  justify-center text-center flex-col">

          <h3 className="text-2xl font-playfair font-bold">April 2019: The Meeting</h3>
          <p className="mt-2">
            Zoe and Joshua met at a university charity event in Lagos. Joshua’s warm smile caught
            Zoe’s eye, and a shared love for music sparked their first conversation.
          </p>
        </div>




      </section>




    </div>
  );
}