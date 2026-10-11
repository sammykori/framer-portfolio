import NavigationMenu from "@/components/sections/NavigationMenu"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Portfolio | Sammy Kori",
    description: "Full stack development and AI governance work by Sammy Kori",
}

export default function PortfolioLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex flex-col min-h-screen bg-orange-100">
            <header className="sticky top-0 left-0 z-50 w-full">
                <NavigationMenu />
            </header>
            {children}
        </div>
    )
}
