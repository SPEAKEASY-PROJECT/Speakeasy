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
    <div className='d-flex'>
      <p className='count'>{count}</p>
      <div className='d-grid'>
        <button className='btn-btn-primary btn-sm btn-plus' onClick={handleCountUp}>+</button>
        <button className='btn-btn-primary btn-sm btn-plus' onClick={handleCountDown} >-</button>
      </div>
    </div>
    
  )
}

export default Counter;