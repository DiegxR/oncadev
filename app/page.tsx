import { Suspense, lazy } from "react"
import { Navbar } from "./components/navbar"
import { Footer } from "./components/footer"

// Code splitting - carga diferida de componentes pesados
const Hero = lazy(() => import("./components/hero").then(m => ({ default: m.Hero })))
const Services = lazy(() => import("./components/services").then(m => ({ default: m.Services })))
const TechStack = lazy(() => import("./components/tech-stack").then(m => ({ default: m.TechStack })))
const Process = lazy(() => import("./components/process").then(m => ({ default: m.Process })))
const Projects = lazy(() => import("./components/Projects").then(m => ({ default: m.Projects })))
const Contact = lazy(() => import("./components/contact").then(m => ({ default: m.Contact })))

// Componente de carga skeleton
function SectionSkeleton() {
  return (
    <div className="min-h-[200px] flex items-center justify-center">
      <div className="animate-pulse bg-stone-800 rounded-lg h-32 w-full max-w-4xl mx-4" />
    </div>
  )
}

export default function Home() {
  return (
    <main className="bg-stone-950 transition-all  overflow-x-hidden min-h-screen">
      <Navbar />
      <Suspense fallback={<SectionSkeleton />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Services />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Process />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <TechStack />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Contact />
      </Suspense>
      <Footer />
    </main>
  )
}
