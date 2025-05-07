// src/app/our-story/page.tsx
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export default function OurStory() {
  return (
    <div className="min-h-screen bg-wedding-cream text-wedding-charcoal font-lora py-16">
      <section className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-playfair font-bold">Our Story</h1>
        <p className="text-2xl font-greatVibes mt-2">#JZ Love Story’25</p>
        <p className="mt-6 text-lg">
          Zoe and Joshua’s journey is a testament to love’s serendipity. From a chance encounter to a
          lifelong promise, here’s how their love blossomed.
        </p>
      </section>

      {/* Timeline */}
      <section className="mt-12 max-w-4xl mx-auto">
        <div className="space-y-12">
          <Card className="bg-wedding-cream border-wedding-charcoal">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-playfair font-bold">April 2019: The Meeting</h3>
              <p className="mt-2">
                Zoe and Joshua met at a university charity event in Lagos. Joshua’s warm smile caught
                Zoe’s eye, and a shared love for music sparked their first conversation.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-wedding-cream border-wedding-charcoal">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-playfair font-bold">June 2020: First Date</h3>
              <p className="mt-2">
                Their first date was a sunset picnic by the Lagos Lagoon, where they laughed over jollof
                rice and dreamed about the future.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-wedding-cream border-wedding-charcoal">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-playfair font-bold">December 2024: The Proposal</h3>
              <p className="mt-2">
                Joshua proposed under a canopy of fairy lights at Zoe’s favorite garden, with a ring
                that sparkled as brightly as their love.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quote */}
      <section className="mt-12 text-center bg-wedding-wine text-wedding-cream py-16">
        <p className="text-2xl font-greatVibes italic max-w-2xl mx-auto">
          “With you, I found my home, my joy, and my forever.” – Zoe & Joshua
        </p>
      </section>
    </div>
  );
}