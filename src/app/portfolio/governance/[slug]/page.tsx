import type { Metadata } from "next"
import { notFound } from "next/navigation"
import DetailView from "@/components/portfolio/DetailView"
import { formatDate, getGovernanceWork, governanceWork } from "@/data/portfolio"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
    return governanceWork.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const item = getGovernanceWork((await params).slug)
    return { title: item ? `${item.title} | Sammy Kori` : "Not found" }
}

export default async function GovernanceDetailPage({ params }: Props) {
    const item = getGovernanceWork((await params).slug)
    if (!item) notFound()

    return (
        <main className="flex-1 w-full bg-orange-100 font-nixie px-4 md:px-20 pb-20">
            <DetailView
                eyebrow="AI GOVERNANCE"
                title={item.title}
                summary={item.description}
                meta={[
                    { label: "ORGANISATION", value: item.organisation },
                    { label: "ROLE", value: item.role },
                    { label: "DATE", value: formatDate(item.date) },
                ]}
                tags={[
                    ...item.categories.map((label) => ({ label, solid: true })),
                    ...item.frameworks.map((label) => ({ label })),
                ]}
                overview={item.overview}
                listTitle="Outcomes"
                list={item.outcomes}
            />
        </main>
    )
}
