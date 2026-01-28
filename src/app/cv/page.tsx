"use client"
import Skills from "@/components/cv/Skills"
import NameLinks from "@/components/cv/NameLinks"
import Summary from "@/components/cv/Summary"
import Experience from "@/components/cv/Experience"
import Education from "@/components/cv/Education"
import Interests from "@/components/cv/Interests"
import Awards from "@/components/cv/Awards"

export default function Home() {
    return (
        <div className="flex-1 grow items-center justify-center bg-white font-nixie">
            <main className="h-full grid grid-col-1 md:grid-cols-5 gap-20 w-full bg-white px-4 lg:px-20">
                <div className="lg:col-span-2">
                    <NameLinks />
                    <Skills />
                    <Education />
                    <Awards />
                    <Interests />
                </div>
                <div className="lg:col-span-3">
                    <Summary />
                    <Experience />
                </div>
            </main>
        </div>
    )
}
