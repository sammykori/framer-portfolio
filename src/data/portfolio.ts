import dayjs from "dayjs"
import portfolio from "./portfolio.json"

export type GovernanceWork = (typeof portfolio.governance)[number]
export type FullstackProject = (typeof portfolio.fullstack)[number]

const byNewest = <T extends { date: string }>(items: T[]) =>
    [...items].sort((a, b) => dayjs(b.date).diff(dayjs(a.date)))

const governanceWork = byNewest(portfolio.governance)
const fullstackProjects = byNewest(portfolio.fullstack)

const getGovernanceWork = (slug: string) =>
    governanceWork.find((item) => item.slug === slug)

const getFullstackProject = (slug: string) =>
    fullstackProjects.find((item) => item.slug === slug)

const formatDate = (date: string) => dayjs(date).format("MMM YYYY")

export {
    governanceWork,
    fullstackProjects,
    getGovernanceWork,
    getFullstackProject,
    formatDate,
}
