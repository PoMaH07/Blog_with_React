import React, {useState} from 'react';

const Counter = () => {
    const [count = 0, setCount] = useState();

    function inc() {
        setCount(count + 1);
      }
    
      function dec() {
        setCount(count - 1);
      }

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={inc}>Inc</button>
            <button onClick={dec}>Dec</button>
        </div>
    )
}

export default Counter;