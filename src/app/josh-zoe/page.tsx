import React from 'react'
import { Button } from '@/components/ui/button';
import Link from 'next/link';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
 

const page = () => {
  return (
    <div className="flex flex-col" >


      <section className="h-screen bg-center bg-cover bg-no-repeat "   style={{ backgroundImage: "url('/images/giver.png')" }} >


      </section>



<section className="w-full h-[80vh] relative flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"   style={{ backgroundImage: "url('/images/paper.png')" }}
        
        ></div>
        {/* Overlay for Readability */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h2 className="text-5xl font-playfair font-bold text-wedding-cream">
            Zoe & Joshua’s Journey
          </h2>
          <p className="text-3xl font-greatVibes mt-4 text-wedding-gold">
            #JZ Love Story’25
          </p>
          <p className="text-lg font-lora mt-6 text-wedding-cream max-w-2xl mx-auto">
            From a serendipitous meeting to a love that grows stronger each day, Zoe and Joshua invite you to
            celebrate their union filled with joy, faith, and forever promises.
          </p>
          <Link href="/our-story">
            <Button
              variant="outline"
              size="lg"
              className="mt-8 border-wedding-gold text-wedding-gold bg-transparent hover:bg-wedding-gold hover:text-wedding-charcoal font-lora"
            >
              Discover Our Story
            </Button>
          </Link>
        </div>
      </section>


      <section className="relative  h-[70vh]  py-24 text-center text-wedding-cream">
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/images/bulbs.png')" }}
  ></div>
  <div className="absolute inset-0 bg-black opacity-50"></div>
  <div className="relative max-w-4xl mx-auto">




  <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>

    <Button variant="destructive" className="font-allura" >Edit Profile</Button>

    <h2 className="text-4xl font-playfair font-bold">Our Love</h2>
    <p className="text-2xl font-greatVibes mt-2 text-wedding-gold">#JZ Love Story’25</p>
    <p className="mt-6 text-lg font-lora max-w-2xl mx-auto">
      Zoe and Joshua’s love began with a spark at a charity event, blossomed through shared dreams, and
      culminated in a promise to forever. Their journey is one of joy, faith, and unwavering devotion.
    </p>
    <p className="mt-4 italic text-xl font-greatVibes">
      “You are my today and all my tomorrows.” – Joshua to Zoe
    </p>
    <Link href="/our-story">
      <Button
        variant="outline"
        size="lg"
        className="mt-6 border-wedding-gold text-wedding-gold bg-transparent hover:bg-wedding-gold hover:text-wedding-charcoal font-lora"
      >
        Read Our Story
      </Button>
    </Link>
  </div>
</section>

      
    </div>
  )
}

export default page
