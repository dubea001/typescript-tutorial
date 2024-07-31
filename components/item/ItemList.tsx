import Item from './Item';

const ItemList = () => {
    return (
        <div>
            <Item
                id={1}
                title='post title'
                extra={[
                    {
                        id: 1,
                        username: 'dubea',
                    },
                ]}
            />
        </div>
    );
};

export default ItemList;
