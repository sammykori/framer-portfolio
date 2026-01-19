import NavigationMenu from "@/components/sections/NavigationMenu"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Liga",
    description: "A Player Rating App",
}

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen h-[1000vh] bg-white">
            <div className="flex fixed top-0 left-0 flex-col w-full mx-auto min-h-screen h-screen">
                <NavigationMenu />
                {children}
            </div>
        </div>
    )
}
