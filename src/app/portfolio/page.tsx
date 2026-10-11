import PortfolioHero from "@/components/portfolio/PortfolioHero"
import SectionHeading from "@/components/portfolio/SectionHeading"
import GovernanceTable from "@/components/portfolio/GovernanceTable"
import ProjectGrid from "@/components/portfolio/ProjectGrid"
import { governanceWork, fullstackProjects } from "@/data/portfolio"

export default function PortfolioPage() {
    return (
        <main className="flex-1 w-full bg-orange-100 font-nixie px-4 md:px-20 pb-20">
            <PortfolioHero />

            <section id="governance" className="scroll-mt-24 py-16 md:py-24">
                <SectionHeading
                    eyebrow="01 · AI GOVERNANCE"
                    title="Governing AI, responsibly"
                    description="Policies, risk frameworks, audits and training that help organisations use AI in a way that is fair, transparent and accountable."
                />
                <GovernanceTable items={governanceWork} />
            </section>

            <section id="fullstack" className="scroll-mt-24 py-16 md:py-24">
                <SectionHeading
                    eyebrow="02 · FULL STACK"
                    title="Building products end to end"
                    description="The engineering foundation behind my governance work: products I've designed, built and shipped across startups and agencies."
                />
                <ProjectGrid projects={fullstackProjects} />
            </section>
        </main>
    )
}
