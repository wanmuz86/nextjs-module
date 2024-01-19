import PostCard from "../components/postCard/postCard";
import { Suspense } from "react";
const getData = async () => {
    const res = await fetch("http://localhost:3000/api/blog",{cache: "no-store"} );
    if (!res.ok) {
        throw new Error("Something went wrong");
    }

    return res.json();
};

const PostPage = async () => {

    const posts = await getData();

    return (
        <div>
            {
                posts.map((post) => (
                    <div key={post.id}>
                         <Suspense fallback={<div>Loading...</div>}>
                                <PostCard post={post} />
                        </Suspense>
                    </div>
                ))
            }
        </div>
    );
};

export default PostPage;