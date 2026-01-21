import { Icon } from "@iconify/react"
import { experienceData } from "@/data/experience"

type JobProps = {
    job: (typeof experienceData)[0] // Adjust the type according to the structure of your
}

function Job({ job }: JobProps) {
    return (
        <div className="w-full border-b p-10 grid grid-cols-12 ">
            <div className="h-full col-span-1 flex flex-col gap-2 items-center mr-10">
                <div className="rounded-full size-10 md:size-20 bg-gray-200 flex items-center justify-center">
                    <Icon icon="mdi:briefcase" className="size-4 md:size-10 " />
                </div>
                <hr className="h-full w-0.5 bg-gray-200"></hr>
            </div>
            <div className="flex flex-col col-span-11">
                <div className="flex flex-col gap-6">
                    <h1 className="text-2xl md:text-3xl underline">
                        {job.role}
                    </h1>
                    <h2 className="text-xl md:text-2xl">
                        <span className="font-bold">{job.company}</span> -{" "}
                        {job.duration}
                    </h2>
                    <ul className="list-disc ml-5 text-xl md:text-2xl flex flex-col gap-4">
                        {job.responsibilities.map((element, index) => (
                            <li key={index}>{element}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Job
