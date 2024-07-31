import Child from '@/components/children/Child';
import Parent from '@/components/children/Parent';
import SecondChild from '@/components/children/SecondChild';
import ThirdChild from '@/components/children/ThirdChild';
import ItemList from '@/components/item/ItemList';
import PostList from '@/components/PostList';

export default function Home() {
    return (
        <main className='px-20'>
            {/* <PostList /> */}
            {/* <Parent> */}
            {/* <Child /> */}
            {/* <SecondChild /> */}
            {/* <ThirdChild /> */}
            {/* </Parent> */}
            <ItemList />
        </main>
    );
}
