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
        <div className="flex flex-col min-h-screen bg-white">
            <header className="sticky top-0 left-0 z-50 w-full bg-white">
                <NavigationMenu />
            </header>

            <main className="flex-1 w-full">{children}</main>
        </div>
    )
}
