import { educationData } from "@/data/experience"
import School from "./School"

function Education() {
    return (
        <section className="w-full flex flex-col mt-20">
            <h2 className="text-right text-4xl float-right font-bold">
                Education
            </h2>

            <div className="flex flex-col gap-6">
                {educationData.map((education, index) => (
                    <School key={index} education={education} />
                ))}
            </div>
        </section>
    )
}

export default Education
