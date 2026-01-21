import SkillRate from '@/components/cv/SkillRate'
function Skills() {
    return (
        <section className="w-full flex flex-col mt-20">
            <h2 className="text-right text-2xl md:text-4xl float-right font-bold">
                SKILLS & EXPERTISE
            </h2>
            <div className="flex flex-col gap-10">
                <div className="flex-col flex gap-4">
                    <div className="mt-10 w-full">
                        <h1 className="text-2xl lg:text-3xl font-bold mb-2">
                            Frontend Development
                        </h1>
                        <SkillRate
                            skillName="JavaScript & TypeScript"
                            proficiency={80}
                            color="purple"
                            icon="teenyicons:typescript-outline"
                        />
                        <SkillRate
                            skillName="React"
                            proficiency={85}
                            color="purple"
                            icon="uil:react"
                        />
                        <SkillRate
                            skillName="Next.js"
                            proficiency={85}
                            color="purple"
                            icon="logos:nextjs-icon"
                        />
                        <SkillRate
                            skillName="Figma & Design Tools"
                            proficiency={100}
                            color="purple"
                            icon="solar:figma-bold-duotone"
                        />
                        <SkillRate
                            skillName="HTML & CSS & TailwindCSS"
                            proficiency={95}
                            color="purple"
                            icon="teenyicons:tailwind-outline"
                        />
                    </div>
                    <div className="text-xl md:text-2xl">
                        <h1>
                            API Integration (REST & GraphQL), State Management
                            (Redux, Zustand), Performance and Optimization, Unit
                            & Component Testing (Jest, React Testing Library),
                            E2E Testing (Cypress), Accessibility and SEO Best
                            Practices, Version Control (Git), Agile
                            Methodologies (Scrum, Kanban)
                        </h1>
                    </div>
                </div>
                <div className="flex-col flex gap-4">
                    <div className="mt-10 w-full">
                        <h1 className="text-3xl font-bold mb-2">
                            FullStack & DevOps
                        </h1>
                        <SkillRate
                            skillName="Supabase"
                            proficiency={80}
                            color="olive"
                            icon="tabler:brand-supabase"
                        />
                        <SkillRate
                            skillName="SQL & NoSQL Databases"
                            proficiency={85}
                            color="olive"
                            icon="simple-icons:mysql"
                        />
                        <SkillRate
                            skillName="AWS & Azure Services"
                            proficiency={85}
                            color="olive"
                            icon="fontisto:aws"
                        />
                        <SkillRate
                            skillName="Git & Version Control"
                            proficiency={100}
                            color="olive"
                            icon="simple-icons:git"
                        />
                        <SkillRate
                            skillName="Vercel & Netlify Deployment"
                            proficiency={95}
                            color="olive"
                            icon="ri:vercel-fill"
                        />
                    </div>
                    <div className="text-xl md:text-2xl">
                        <h1>
                            MongoDB, CI/CD Pipelines, PostgresQL, Docker,
                            Kubernetes, Sanity, Contentful, Laravel PHP, Github
                            Actions, Bitbucket
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
