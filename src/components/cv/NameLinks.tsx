import Link from "next/link"
import { Icon } from "@iconify/react"

function NameLinks() {
    return (
        <section>
            <h1 className="text-7xl font-bold">SAMUEL KORI</h1>
            <div className="mt-4 flex flex-row items-center">
                <Icon icon="mdi:github" className="mr-4 size-6" />
                <Link href="https://github.com/sammykori" className="text-2xl ">
                    Github
                </Link>
                <Icon icon="solar:link-bold-duotone" className="ml-2" />
            </div>
            <div className="mt-4 flex flex-row items-center">
                <Icon icon="mdi:linkedin" className="mr-4 size-6" />
                <Link href="https://github.com/sammykori" className="text-2xl ">
                    LinkedIn
                </Link>
                <Icon icon="solar:link-bold-duotone" className="ml-2" />
            </div>
            <div className="mt-4 flex flex-row items-center">
                <Icon icon="mdi:youtube" className="mr-4 size-6" />
                <Link href="https://github.com/sammykori" className="text-2xl ">
                    YouTube
                </Link>
                <Icon icon="solar:link-bold-duotone" className="ml-2" />
            </div>
        </section>
    )
}

export default NameLinks
