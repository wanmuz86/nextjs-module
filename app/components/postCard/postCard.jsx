import Image from "next/image"
import Link from "next/link"

const PostCard = ({post}) => {
  return (
    <div>
        <Image src={post.img} width={300} height={400}/>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <Link href={`/blog/${post.slug}`}>READ MORE</Link>
    </div>
  )
}

export default PostCard