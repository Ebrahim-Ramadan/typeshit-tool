import {  CloudFog,  GithubIcon, PenBoxIcon, SearchCheckIcon, SpellCheck2Icon, Twitter } from 'lucide-react'
import { CopyComponent } from './CopyComponent'
import VideoComponent from './VideoComponent'
export default function MainComponent() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header className="w-full  py-6 px-4 md:px-6">
        <div className="container mx-auto flex max-w-7xl items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <img src='/logo.svg' className="h-8 w-8 text-primary-foreground" />
            {/* <span className="text-lg font-bold text-primary-foreground">TypeShit</span> */}
          </a>
          <nav className="hidden gap-1 md:flex items-center text-[#DB2777] bg-[#4f0724] px-2 py-1 rounded-xl">
           <svg fill="none" viewBox="0 0 16 16" width="16" height="16">
            <path stroke="currentColor" d="M6.833 2C6.368 4.356 6.365 4.356 4 4.833M6.833 2c.47 2.363.473 2.366 2.834 2.833M6.833 2v5.667m2.834-2.834c-2.36.468-2.36.472-2.834 2.834m2.834-2.834H4m2.833 2.834C6.365 5.3 6.358 5.3 4 4.833m0 4.834c-.328 1.663-.33 1.663-2 2m2-2c.332 1.668.334 1.67 2 2m-2-2v4m2-2c-1.666.33-1.666.332-2 2m2-2H2m2 2c-.33-1.67-.336-1.67-2-2m9.667-4.334c-.383 1.94-.386 1.94-2.334 2.334m2.334-2.334c.386 1.946.39 1.949 2.333 2.334m-2.333-2.334V12M14 9.667c-1.944.385-1.944.388-2.333 2.333M14 9.667H9.333M11.667 12c-.386-1.948-.392-1.948-2.334-2.333" stroke-linecap="round" stroke-linejoin="round"></path>
           </svg>
           <span className='text-sm font-medium'>Welcome</span>
          </nav>
          <a href='https://github.com/Ebrahim-Ramadan/TypeShit' target='_blank' className='bg-white rounded-full p-2 flex flex-row items-center gap-2'>
            <GithubIcon size='20' color='black' />
            </a>
        </div>
      </header>
      <section className='w-full min-h-screen md:block hidden -z-20 opacity-20 '>
        <div class="bg-gradient-to-t from-black to-black/20 h-96 w-full absolute bottom-[-63px] left-0 z-10">


        </div>
      <div class="absolute -bottom-16 -left-40 w-[85vw] h-[85vw] rounded-full transform -rotate-12">
     <img 
    src='/big-sphere.svg'
    alt='Top left sphere'
  />
  </div>
  <div class="absolute bottom-0 right-0 w-[40vw] h-[40vw] rounded-full -z-10">
     <img 
    src='/big-sphere.svg'
    alt='Top left sphere'
  />
  </div>


</section>
      <main className="flex-1 md:-mt-96">
<div className=' flex-col items-center justify-center py-4 hidden md:flex'>
<CopyComponent />

</div>
        
        <VideoComponent/>
      

<section className=" py-12">
          <div className=" px-4 md:px-6">
            <div className="flex flex-col md:grid grid-cols-2 items-center gap-6  lg:gap-16 ">
              <div className="space-y-2 md:space-y-6 flex flex-col items-start ">
                <h1 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl lg:text-6xl">
                  Elevate Your Writing with <span className=' text-[#DB2777]'>TypeShit</span>
                </h1>
                <p className="text-lg font-medium md:text-xl">
                  Wrong Keyboard? Long Text Written Already? Missed it All? We got you  
                </p>
                <CopyComponent blurred={true}/>
                {/* <button className='primaryButton'>Try It Now</button> */}
              </div>
             
             <img
             className='rounded-xl'
             src='/landing.png'
             />
            </div>
          </div>
        </section>
       
        <section className="w-full  py-12 md:py-24 lg:py-32">
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
              <div className="py-6 grid gap-8 sm:grid-cols-2 md:grid-cols-3 [&>*]:space-y-2 [&>*]:text-center [&>*]:flex [&>*]:flex-col [&>*]:justify-center [&>*]:items-center md:px-20">
                <div className="">
                  <SpellCheck2Icon className="h-8 w-8 text-[#DB2777]" />
                  <h3 className="text-xl font-bold text-foreground">Improved Grammar</h3>
                  <p className="text-muted-foreground">
                    Our advanced grammar checker identifies and corrects grammatical errors, helping you write with
                    confidence.
                  </p>
                </div>
                <div className="">
                  <SearchCheckIcon className="h-8 w-8 text-[#DB2777]" />
                  <h3 className="text-xl font-bold text-foreground">Better Word Choice</h3>
                  <p className="text-muted-foreground">
                    Enhance your vocabulary and word selection with our intelligent thesaurus, ensuring your writing is
                    more precise and engaging.
                  </p>
                </div>
                <div className="">
                  <CloudFog className="h-8 w-8 text-[#DB2777]" />
                  <h3 className="text-xl font-bold text-foreground">Increased Clarity</h3>
                  <p className="text-muted-foreground">
                    Our writing analysis tools provide feedback on sentence structure, tone, and overall clarity,
                    helping you communicate your ideas more effectively.
                  </p>
                </div>
              </div>
              <div className='w-full flex flex-row justify-center'>
              <a href='https://github.com/Ebrahim-Ramadan/TypeShit' target='_blank' className='primaryButton  flex flex-row items-center gap-2'>
            <GithubIcon size='20' />
            Contribute</a>
              </div>
            </div>
          </div>
        </section>

      </main>
      < div className="py-4 flex flex-row justify-center w-full  text-center" >
      <div className="bg-gradient-to-r from-transparent via-[#DB2777] to-transparent w-full  h-[2px] opacity-80"></div>
    </div >
      <footer className="w-full py-6 px-4 md:px-6">
        <div className="flex flex-row justify-between mx-auto max-w-6xl">
        <p className="text-sm font-medium">&copy;2024 <span><a href='https://ebrahim-ramadan.vercel.app/' target='_blank' className='underline'>sharmojj</a></span></p>
          

             
          
          <div className="flex flex-row items-center  gap-2 ">
            
          <a href='https://x.com/scoopsahoykid' target='_blank'>
          <Twitter/>
          </a>
          <a href='https://github.com/Ebrahim-Ramadan' target='_blank'>
          <GithubIcon />
          </a>
          <a href='https://pypi.org/project/typeshit/' target='_blank'>
          <img src='/python-logo-only.svg' className="w-6" />
          </a>
        </div>
        </div>
      </footer>
    </div>
  )
}
