import { PostProps } from '@/types/types';

const PostCard = ({ title, body }: PostProps) => {
    return (
        <div className='my-4 border border-black'>
            <h1 className='font-semibold text-lg'>{title}</h1>
            <p>{body}</p>
        </div>
    );
};

export default PostCard;
