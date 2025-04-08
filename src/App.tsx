import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount((count) => count + 1)
  }

  useEffect(()=>{
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowUp') {
        setCount(count => count + 1)
      }
      if (event.key === 'ArrowDown') {
        setCount(count => count - 1)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  },[])

  return (
    <>
    <div className='w-full h-full flex items-center justify-center flex-col'>

      <div className='w-48 h-48 bg-red-500'>
        <p className='text-2xl italic'>hello</p>
      </div>
      <button className='bg-blue-500 text-white p-2 rounded' onClick={handleClick}>
        count is {count}
      </button>
    </div>
    </>
  )
}

export default App
