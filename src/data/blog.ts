const postTypes = ["tech", "life", "travel", "research"] as const

const blogPosts = [
    {
        id: 1,
        title: "Re-Connect Conference",
        subtitle:
            "Lessons From Re:Connect — Taking Our Podcast Beyond the Living Room",
        date: "August 20, 2023",
        type: "life",
        readTime: "10",
        imageUrl: "/img/blog/post1.jpg",
    },
    {
        id: 2,
        title: "Compile, Build & Run",
        subtitle:
            "What I could have done better while I was studying at Bournemouth University",
        date: "August 20, 2023",
        type: "life",
        readTime: "8",
        imageUrl: "/img/blog/post4.png",
    },
    {
        id: 3,
        title: "Navigating the UK Job Market",
        subtitle:
            "As a Frontend Developer I try to navigate some of the challenges in the Job Market",
        date: "August 20, 2023",
        type: "tech",
        readTime: "12",
        imageUrl: "/img/blog/post3.jpg",
    },
]

export { postTypes, blogPosts }
