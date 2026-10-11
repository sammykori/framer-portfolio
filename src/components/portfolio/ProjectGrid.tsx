"use client"
import { motion } from "motion/react"
import { staggerParent } from "@/motion"
import type { FullstackProject } from "@/data/portfolio"
import ProjectCard from "./ProjectCard"

type ProjectGridProps = {
    projects: FullstackProject[]
}

function ProjectGrid({ projects }: ProjectGridProps) {
    return (
        <motion.ul
            variants={staggerParent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14"
        >
            {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
            ))}
        </motion.ul>
    )
}

export default ProjectGrid
