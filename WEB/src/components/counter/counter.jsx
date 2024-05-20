import './counter.css';
import { useState } from 'react';


function Counter() {

  const [count, setCount] = useState(0);


  const handleCountUp = () => {
    setCount(count + 1);
  }

  const handleCountDown = () => {
    setCount(count - 1);
  }

  return (
    <div className='counter d-flex'>
      <div className='buyers'>
        <button className='btn-btn-primary btn-sm btn-plus' onClick={handleCountDown} >-</button>
        <p className='count'>{count}</p>
        <button className='btn-btn-primary btn-sm btn-plus' onClick={handleCountUp}>+</button>
      </div>
    </div>
    
  )
}

export default Counter;