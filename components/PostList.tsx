import { PostProps } from '@/types/types';
import PostCard from './PostCard';

async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!res.ok) {
        throw new Error('failed to fetch data');
    }
    return res.json();
}

const PostList = async () => {
    const data: PostProps[] = await getData();
    return (
        <div>
            {/* <PostCard title='post title' body='post description' /> */}
            {data.map((post: PostProps) => (
                <PostCard key={post.id} {...post} />
            ))}
        </div>
    );
};

export default PostList;
