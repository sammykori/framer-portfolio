"use client"
import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import { staggerChildFadeUp } from "@/motion"
import { formatDate, type FullstackProject } from "@/data/portfolio"
import Tag from "./Tag"

type ProjectCardProps = {
    project: FullstackProject
}

function ProjectCard({ project }: ProjectCardProps) {
    return (
        <motion.li variants={staggerChildFadeUp} className="w-full">
            <Link
                href={`/portfolio/fullstack/${project.slug}`}
                className="group w-full flex flex-col"
            >
                <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3 }}
                    className="w-full aspect-[3/2] border border-orange-600 p-2"
                >
                    <div className="w-full h-full bg-orange-200 relative overflow-hidden">
                        <Image
                            src={project.image}
                            alt={project.name}
                            fill
                            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </motion.div>
                <div className="flex justify-between items-baseline gap-4 pt-4">
                    <h3 className="text-2xl font-bold group-hover:text-orange-600 transition-colors">
                        {project.name}
                    </h3>
                    <span className="text-gray-700 whitespace-nowrap">
                        {formatDate(project.date)}
                    </span>
                </div>
                <p className="text-gray-700 pt-1">{project.company}</p>
                <div className="flex flex-wrap gap-2 pt-3">
                    {project.tools.map((tool) => (
                        <Tag key={tool}>{tool}</Tag>
                    ))}
                </div>
            </Link>
        </motion.li>
    )
}

export default ProjectCard
