import { Icon } from '@iconify/react'

type SkillRateProps = {
    skillName: string
    proficiency: number // value between 0 and 1
    icon: string
    color?: string
}
function SkillRate({ skillName, color, proficiency, icon }: SkillRateProps) {
    return (
        <div className="w-full flex flex-row justify-between mb-4">
            <div className="w-4/5 flex flex-col gap-2">
                <h1 className="text-xl md:text-2xl">{skillName}</h1>
                <div className="w-full h-2 bg-gray-300">
                    <div
                        className="h-2 "
                        style={{
                            width: `${proficiency}%`,
                            backgroundColor: `${color ? color : 'black'}`,
                        }}
                    ></div>
                </div>
            </div>
            <Icon icon={icon} className="size-10" />
        </div>
    )
}

export default SkillRate
