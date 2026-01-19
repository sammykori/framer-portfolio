import { experienceData } from '@/data/experience'
import Job from './Job'

function Experience() {
    return (
        <section className="w-full flex flex-col mt-20">
            <h2 className="text-right text-4xl float-right font-bold">
                PROFESSSIONAL EXPERIENCE
            </h2>

            <div className="flex flex-col gap-6">
                {experienceData.map((job, index) => (
                    <Job key={index} job={job} />
                ))}
            </div>
        </section>
    )
}

export default Experience
