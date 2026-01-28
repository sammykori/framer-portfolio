import PostOneContent from "./PostOneContent"
import PostTwoContent from "./PostTwoContent"

function Content({ postId }: { postId: number }) {
    const renderContent = () => {
        switch (postId) {
            case 1:
                return <PostOneContent />
            case 2:
                return <PostTwoContent />
            default:
                return <div>Content not found</div>
        }
    }
    return renderContent()
}

export default Content
