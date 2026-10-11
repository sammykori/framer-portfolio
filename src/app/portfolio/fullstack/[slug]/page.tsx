import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import DetailView from "@/components/portfolio/DetailView"
import {
    formatDate,
    fullstackProjects,
    getFullstackProject,
} from "@/data/portfolio"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
    return fullstackProjects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const project = getFullstackProject((await params).slug)
    return { title: project ? `${project.name} | Sammy Kori` : "Not found" }
}

export default async function FullstackDetailPage({ params }: Props) {
    const project = getFullstackProject((await params).slug)
    if (!project) notFound()

    return (
        <main className="flex-1 w-full bg-orange-100 font-nixie px-4 md:px-20 pb-20">
            <DetailView
                eyebrow="FULL STACK PROJECT"
                title={project.name}
                summary={project.summary}
                meta={[
                    { label: "COMPANY", value: project.company },
                    { label: "ROLE", value: project.role },
                    { label: "DATE", value: formatDate(project.date) },
                ]}
                media={
                    <div className="w-full aspect-[3/2] border border-orange-600 p-2">
                        <div className="w-full h-full bg-orange-200 relative">
                            <Image
                                src={project.image}
                                alt={project.name}
                                fill
                                priority
                                sizes="(min-width: 896px) 896px, 100vw"
                                className="object-cover"
                            />
                        </div>
                    </div>
                }
                tags={project.tools.map((label) => ({ label }))}
                overview={project.overview}
                listTitle="Highlights"
                list={project.highlights}
                link={project.link}
            />
        </main>
    )
}
