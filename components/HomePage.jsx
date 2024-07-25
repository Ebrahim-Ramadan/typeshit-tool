/**
 * v0 by Vercel.
 * @see https://v0.dev/t/VbrL01ZJFfV
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Component() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <PenIcon className="h-6 w-6" />
          <span className="sr-only">Write Better</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Features
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Pricing
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Write Better with Our AI-Powered Tool
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Improve your writing with our advanced grammar checking, tone analysis, and personalized writing
                    suggestions.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Try it Now
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Elevate Your Writing with Our Advanced Tools
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our AI-powered writing assistant helps you write better by providing real-time feedback on grammar,
                  tone, and structure.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Grammar Checking</h3>
                      <p className="text-muted-foreground">
                        Our advanced grammar engine identifies and corrects errors in your writing, helping you
                        communicate more effectively.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Tone Analysis</h3>
                      <p className="text-muted-foreground">
                        Understand the emotional impact of your writing and adjust your tone to achieve your desired
                        effect.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Writing Suggestions</h3>
                      <p className="text-muted-foreground">
                        Get personalized writing suggestions to improve clarity, conciseness, and overall quality.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Features"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Users Say</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from real people who have used our writing tool to improve their skills.
              </p>
            </div>
            <div className="divide-y rounded-lg border">
              <div className="grid w-full grid-cols-1 items-stretch justify-center divide-y md:grid-cols-2 md:divide-y-0 md:divide-x">
                <div className="mx-auto flex w-full flex-col items-start justify-center p-4 sm:p-8 space-y-4">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium leading-none">John Doe</p>
                      <p className="text-sm text-muted-foreground">Marketing Manager</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "This writing tool has been a game-changer for my team.\n The grammar and tone suggestions have
                    helped us\n communicate more effectively with our clients."
                  </p>
                </div>
                <div className="mx-auto flex w-full flex-col items-start justify-center p-4 sm:p-8 space-y-4">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>SA</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium leading-none">Sarah Anderson</p>
                      <p className="text-sm text-muted-foreground">Content Writer</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "I've been using this writing tool for months, and it's\n helped me improve my writing skills
                    tremendously. The\n suggestions are spot-on and have saved me a lot of time."
                  </p>
                </div>
              </div>
              <div className="grid w-full grid-cols-1 items-stretch justify-center divide-y md:grid-cols-2 md:divide-y-0 md:divide-x">
                <div className="mx-auto flex w-full flex-col items-start justify-center p-4 sm:p-8 space-y-4">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>EM</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium leading-none">Emily Martinez</p>
                      <p className="text-sm text-muted-foreground">Student</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "As a student, this writing tool has been invaluable. It\n has helped me improve my essays and
                    assignments, and I\n feel more confident in my writing abilities."
                  </p>
                </div>
                <div className="mx-auto flex w-full flex-col items-start justify-center p-4 sm:p-8 space-y-4">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JK</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium leading-none">Jessica Kim</p>
                      <p className="text-sm text-muted-foreground">Freelance Writer</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "I've been using this writing tool for my freelance work,\n and it's been a game-changer. The tone
                    analysis and\n writing suggestions have helped me deliver better\n content to my clients."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Write Better. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Follow us on Twitter
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Follow us on LinkedIn
          </Link>
        </nav>
      </footer>
    </div>
  )
}
