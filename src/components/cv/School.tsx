import { Icon } from "@iconify/react"
import { educationData } from "@/data/experience"

type EducationProps = {
    education: (typeof educationData)[0] // Adjust the type according to the structure of your
}

function School({ education }: EducationProps) {
    return (
        <div className="w-full border-b p-10 grid grid-cols-12 ">
            <div className="h-full col-span-1 flex flex-col gap-2 items-center mr-10">
                <div className="rounded-full size-10 bg-gray-200 flex items-center justify-center">
                    <Icon icon="mdi:briefcase" className="size-4 " />
                </div>
                <hr className="h-full w-0.5 bg-gray-200"></hr>
            </div>
            <div className="flex flex-col col-span-11">
                <div className="flex flex-col gap-6">
                    <h1 className="text-3xl underline">
                        {education.institution}
                    </h1>

                    <h2 className="text-xl">
                        {education.degree}{" "}
                        <span className="italic text-lg">
                            {education.duration}
                        </span>
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default School
