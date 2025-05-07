"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Home = () => {
  const [name, setName] = useState('');
  const router = useRouter();

  const handleSubmit = () => {
    if (name.trim()) {
      localStorage.setItem('visitorName', name); // Optional: Store name
      router.push('/josh-zoe'); // Redirect to /josh-zoe
    }
  };

  return (
    <>
      <div className="relative h-screen bg-wedding-olive items-center justify-center flex flex-col w-full">
        <div
          className="absolute inset-0 bg-black opacity-70 bg-opacity-30 bg-center"
        ></div>
        {/* Top Left */}
        <div className="absolute top-0 left-0 h-[12rem] w-[12rem] md:h-[20rem] md:w-[20rem] xl:h-[40vh] xl:w-[30vw] 2xl:h-[30rem] 2xl:w-[30rem]">
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
        <div className="absolute top-0 right-0 h-[12rem] w-[12rem] xl:h-[40vh] xl:w-[30vw] md:h-[20rem] md:w-[20rem] 2xl:h-[30rem] 2xl:w-[30rem]">
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
        <div className="absolute bottom-0 left-0 h-[12rem] w-[12rem] md:h-[20rem] md:w-[20rem] xl:h-[40vh] xl:w-[30vw] 2xl:h-[30rem] 2xl:w-[30rem]">
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
        <div className="absolute bottom-0 right-0 h-[12rem] w-[12rem] md:h-[20rem] md:w-[20rem] xl:h-[40vh] xl:w-[30vw] 2xl:h-[30rem] 2xl:w-[30rem]">
          <Image
            src="/images/flower.png"
            alt="Floral decoration"
            layout="fill"
            objectFit="cover"
            quality={85}
            priority
            className="rotate-270 h-full"
          />
        </div>

        <Dialog>
              <DialogTrigger asChild>
                <Button
                  className="mt-8 rounded-full bg-wedding-gold text-wedding-wine font-lora py-3 px-8 text-lg hover:bg-wedding-wine hover:text-wedding-cream transition-colors duration-300 shadow-md"
                >
                  Continue
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-wedding-cream text-wedding-charcoal rounded-xl shadow-2xl p-6 max-w-[90vw] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-[30rem] w-full transform transition-all duration-300 scale-100 sm:scale-105 border border-wedding-gold/20">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-playfair font-bold text-wedding-charcoal">
                    Welcome, Guest
                  </DialogTitle>
                  <DialogDescription className="text-sm font-lora text-wedding-charcoal/80">
                    Please enter your name to join Zoe & Joshua’s celebration.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label
                      htmlFor="name"
                      className="text-right font-lora text-wedding-charcoal"
                    >
                      Name
                    </Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      className="col-span-3 border-wedding-gold/50 focus:ring-wedding-gold focus:border-wedding-gold bg-wedding-cream/90 text-wedding-charcoal font-lora rounded-md"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button
                    type="submit"
                    onClick={handleSubmit}
                    disabled={!name.trim()}
                    className="w-full bg-wedding-gold text-wedding-charcoal font-lora py-2 px-6 rounded-md hover:bg-wedding-wine hover:text-wedding-cream focus:ring-2 focus:ring-wedding-gold focus:ring-offset-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                  >
                    Continue
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

    
      </div>
    </>
  );
};

export default Home;