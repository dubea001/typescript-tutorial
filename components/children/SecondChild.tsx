'use client';
import { ThemeContext } from '@/context/ThemeContext';
import { useContext } from 'react';

const SecondChild = () => {
    const { state, dispatch } = useContext(ThemeContext);

    // console.log(state);

    return (
        <div>
            <button
                onClick={() => dispatch({ type: 'CHANGE_THEME' })}
                className='px-8 py-2 text-white rounded-sm bg-gray-700 hover:bg-gray-500 transition-all duration-200'
            >
                Change Theme
            </button>
            <br />
            <button
                onClick={() =>
                    dispatch({ type: 'CHANGE_FONTSIZE', payload: 24 })
                }
                className='mt-8 px-8 py-2 text-white rounded-sm bg-teal-700 hover:bg-teal-500 transition-all duration-200'
            >
                Change Font Size
            </button>
        </div>
    );
};

export default SecondChild;
