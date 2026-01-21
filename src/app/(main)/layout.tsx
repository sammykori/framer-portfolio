import NavigationMenu from "@/components/sections/NavigationMenu"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Sammy Kori",
    description: "Portfolio of Sammy Kori",
}

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen h-[1000vh] bg-white">
            <div className="flex sticky z-50 top-0 left-0 overflow-hidden flex-col w-full mx-auto min-h-screen h-screen">
                <NavigationMenu />
                {children}
            </div>
        </div>
    )
}
