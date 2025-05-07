import React from 'react';
import Image from 'next/image';

const Home = () => {
  return (
    <div className="relative h-screen  bg-[#556B2F]  items-center justify-center flex flex-col  w-full">
      {/* Top Left */}
      <div className="absolute top-0 left-0 h-[12rem] w-[12rem]  md:h-[20rem] md:w-[20rem] xl:h-[40vh] xl:w-[30vw] 2xl:h-[30rem] 2xl:w-[30rem]">
        <Image
          src="/images/flower.png"
          alt="Floral decoration"
          layout="fill"
          objectFit="cover"
          quality={85}
          priority
          className="rotate-90"
        />
      </div>
      {/* Top Right */}
      <div className="absolute top-0 right-0 h-[12rem] w-[12rem] xl:h-[40vh] xl:w-[30vw]   md:h-[20rem] md:w-[20rem] 2xl:h-[30rem] 2xl:w-[30rem] ">
        <Image
          src="/images/flower.png"
          alt="Floral decoration"
          layout="fill"
          objectFit="cover"
          quality={85}
          priority
          className="rotate-180"
        />
      </div>
      {/* Bottom Left */}
      <div className="absolute bottom-0 left-0  h-[12rem] w-[12rem]  md:h-[20rem] md:w-[20rem]  xl:h-[40vh] xl:w-[30vw]  2xl:h-[30rem] 2xl:w-[30rem]">
        <Image
          src="/images/flower.png"
          alt="Floral decoration"
          layout="fill"
          objectFit="cover"
          quality={85}
          priority
          className=""
        />
      </div>
      {/* Bottom Right */}
      <div className="absolute bottom-0 right-0 h-[12rem] w-[12rem]  md:h-[20rem] md:w-[20rem] xl:h-[40vh] xl:w-[30vw]  2xl:h-[30rem] 2xl:w-[30rem]">
        <Image
          src="/images/flower.png"
          alt="Floral decoration"
          layout="fill"
          objectFit="cover"
          quality={85}
          priority
          className="rotate-270  h-full "
        />
      </div>


      <div className="flex relative w-full h-full max-w-5xl ">

        <Image src="/images/love.png" alt="wedding Guys" objectFit="cover" width={100} height={100} className="h-20 w-20 absolute bottom-80 right-20 " />

        <Image src="/images/love.png" alt="wedding Guys" objectFit="cover" width={100} height={100} className="h-20 w-20 absolute bottom-60 right-80 " />


        <Image src="/images/love.png" alt="wedding Guys" objectFit="cover" width={100} height={100} className="h-20 w-20 absolute top-40 left-20 " />

        <Image src="/images/love.png" alt="wedding Guys" objectFit="cover" width={100} height={100} className="h-20 w-20 absolute top-10 left-100 " />


        <Image src="/images/love.png" alt="wedding Guys" objectFit="cover" width={100} height={100} className="h-20 w-20 absolute bottom-10 right-70 " />

        <Image src="/images/love.png" alt="wedding Guys" objectFit="cover" width={100} height={100} className="h-20 w-20 absolute bottom-10 left-70 " />

        <div className="w-full flex flex-col items-center  justify-center text-center text-[2rem] font-medium ">



          <div className="font-bold text-[#D4A017]  font-parisienne 2xl:text-[6rem] text-[4rem]  " >

            <h1>
              Zoe Abidemi
            </h1>

            &
            <h1>
              Joshua Iyanu
            </h1>


          </div>

          <p className="text-md text-wedding-wine ">

            #JZ Love Story&apos;25
          </p>


        </div>



      </div>

      <section className="flex flex-col w-full">




      </section>

    </div>
  );
};

export default Home;