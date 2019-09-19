import React, {useState} from 'react';

const CounterButton = () => {
    const [count, setCount] = useState(0);

    const onIncrease = e => {
        setCount( (state) => state + 1);
    };

    return (
        <div>
            <div>Count: {count}</div>
            <button onClick={onIncrease}>Increase count</button>
        </div>
    );
};

export default CounterButton;
