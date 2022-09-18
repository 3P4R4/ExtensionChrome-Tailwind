import {useState} from 'react';

export default function Counter(){
    const [counter, setCounter] = useState(0);
    const increment = () => setCounter((count)=> count + 1);
    const decrement = () => setCounter((count)=> count - 1);
    
    return (
        <div>
            <button onClick={decrement}>-</button>
            <span className='px-4'>{counter}</span>
            <button onClick={increment}>+</button>
        </div>
    )
}