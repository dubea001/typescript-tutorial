'use client';

import { UserType } from '@/types/types';
import { useState } from 'react';

const Child = () => {
    const [username, setUsername] = useState('');
    const [user, setUser] = useState<UserType | null>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handleLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setUser({
            name: username,
            sessionId: Math.random(),
        });
    };

    return (
        <div>
            {user ? (
                `${user.name} logged in`
            ) : (
                <form action='' className=''>
                    <input
                        type='text'
                        onChange={handleChange}
                        placeholder='username'
                        className='border border-black py-2 px-4'
                    />
                    <br />
                    <button
                        onClick={handleLogin}
                        className='py-2 px-4 bg-black rounded text-white'
                    >
                        Login
                    </button>
                </form>
            )}
        </div>
    );
};

export default Child;
