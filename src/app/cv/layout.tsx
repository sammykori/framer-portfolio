import NavigationMenu from "@/components/sections/NavigationMenu"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "CV | Sammy Kori",
    description: "Portfolio and CV of Sammy Kori",
}

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <div className="sticky top-0 flex overflow-hidden flex-col w-full ">
                <NavigationMenu />
            </div>
            {children}
        </div>
    )
}
