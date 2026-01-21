const postTypes = ["tech", "life", "travel"] as const

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
        title: "Exploring the Mountains",
        subtitle: "Join us for an unforgettable experience!",
        date: "August 20, 2023",
        type: "travel",
        readTime: "8",
        imageUrl: "/img/blog/post1.jpg",
    },
    {
        id: 3,
        title: "JavaScript Best Practices",
        subtitle: "Join us for an unforgettable experience!",
        date: "August 20, 2023",
        type: "tech",
        readTime: "12",
        imageUrl: "/img/blog/post1.jpg",
    },
]

export { postTypes, blogPosts }
