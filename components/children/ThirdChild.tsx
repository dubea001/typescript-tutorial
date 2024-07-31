'use client';

import { useEffect, useRef } from 'react';

const ThirdChild = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const userInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const handleClick = () => {
        console.log(`the user name is ${userInputRef.current?.value}`);
    };

    return (
        <div>
            <input
                ref={inputRef}
                type='text'
                placeholder='focus here'
                className='border border-black py-2 block my-2 px-4'
            />
            <input
                ref={userInputRef}
                type='text'
                placeholder='username'
                className='border border-black py-2 block my-2 px-4'
            />
            <button
                onClick={handleClick}
                className='text-white bg-black px-8 py-2'
            >
                Send
            </button>
        </div>
    );
};

export default ThirdChild;
