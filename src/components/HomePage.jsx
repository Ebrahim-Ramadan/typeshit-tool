import {DialogBasicOne} from '@/components/Dialog'
import {  CloudFog, PenBoxIcon, SearchCheckIcon, SpellCheck2Icon } from 'lucide-react'
export default function Component() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header className="w-full bg-primary py-6 px-4 md:px-6">
        <div className="container mx-auto flex max-w-7xl items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <PenBoxIcon className="h-6 w-6 text-primary-foreground" />
            <span className="text-lg font-bold text-primary-foreground">WeType</span>
          </a>
          <nav className="hidden space-x-4 md:flex">
            <a href="#" className="text-sm font-medium text-primary-foreground hover:underline" >
              Features
            </a>
            <a href="#" className="text-sm font-medium text-primary-foreground hover:underline" >
              Pricing
            </a>
            <a href="#" className="text-sm font-medium text-primary-foreground hover:underline" >
              About
            </a>
            <a href="#" className="text-sm font-medium text-primary-foreground hover:underline" >
              Contact
            </a>
          </nav>
          <button className='bg-white rounded-3xl text-black font-bold px-2 py-1 md:px-4 md:py-2'>Get Started</button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full bg-primary py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-6 flex flex-col items-start">
                <h1 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl lg:text-6xl">
                  Elevate Your Writing with Our Powerful Tool
                </h1>
                <p className="text-lg text-primary-foreground md:text-xl">
                  Our writing improvement tool helps you enhance your grammar, word choice, and overall clarity, making
                  your writing more effective and impactful.
                </p>
                <button className='bg-white rounded-3xl text-black font-bold px-2 py-1 md:px-4 md:py-2'>Try It Now</button>
              </div>
             
              <DialogBasicOne className="mx-auto aspect-[3/2] overflow-hidden rounded-xl object-cover object-center"/>
            </div>
          </div>
        </section>
        <section className="w-full bg-background py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="space-y-6 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl">
                  Unlock Your Writing Potential
                </h2>
                <p className="text-lg text-muted-foreground md:text-xl">
                  Our writing improvement tool offers a range of features to help you become a better writer.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                <div className="space-y-2">
                  <SpellCheck2Icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">Improved Grammar</h3>
                  <p className="text-muted-foreground">
                    Our advanced grammar checker identifies and corrects grammatical errors, helping you write with
                    confidence.
                  </p>
                </div>
                <div className="space-y-2">
                  <SearchCheckIcon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">Better Word Choice</h3>
                  <p className="text-muted-foreground">
                    Enhance your vocabulary and word selection with our intelligent thesaurus, ensuring your writing is
                    more precise and engaging.
                  </p>
                </div>
                <div className="space-y-2">
                  <CloudFog className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">Increased Clarity</h3>
                  <p className="text-muted-foreground">
                    Our writing analysis tools provide feedback on sentence structure, tone, and overall clarity,
                    helping you communicate your ideas more effectively.
                  </p>
                </div>
              </div>
              <button>Start Improving Your Writing</button>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full bg-muted py-6 px-4 md:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">&copy; 2024 Write Better. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="text-sm font-medium text-muted-foreground hover:underline" >
                Privacy Policy
              </a>
              <a href="#" className="text-sm font-medium text-muted-foreground hover:underline" >
                Terms of Service
              </a>
              <a href="#" className="text-sm font-medium text-muted-foreground hover:underline" >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
