import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    /* config options here */
    reactCompiler: true,
    // Posts used to live at numeric URLs; keep old shared links working
    async redirects() {
        return [
            ["1", "re-connect-conference"],
            ["2", "navigating-the-uk-job-market"],
            ["3", "is-ai-learning-enough-from-africa"],
        ].map(([id, slug]) => ({
            source: `/blog/${id}`,
            destination: `/blog/${slug}`,
            permanent: true,
        }))
    },
}

export default nextConfig
