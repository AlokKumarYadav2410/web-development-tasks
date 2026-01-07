import React, { useState } from 'react'
import Child from './Child';
import Sender from './Sender';
import Receiver from './Receiver';

const Parent = ({ changeModal }) => {

    const [value, setValue] = useState(0);

    const [msg, setMsg] = useState('');

    const changeValue = (newValue) => {
        if(newValue < 0) {
            changeModal(true, "Value cannot be negative!");
            return;
        } else if (newValue > 10) {
            changeModal(true, "Value cannot be greater than 10!");
            return;
        }
        setValue(newValue);
    }

  return (
    <div className='border p-4 mt-2'>
      <h1 className='text-2xl border-b pb-2 mb-4'>I am parent and my child is below</h1>
      <h2 className='text-xl text-center mb-4'>Value from Child: {value}</h2>
      <Child value={value} changeValue={changeValue} />
      <Sender setMsg={setMsg} />
      <Receiver msg={msg} />
    </div>
  )
}

export default Parent
