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
    <div className='w-full h-full bg-white rounded-lg shadow-lg flex items-center space-y-10 justify-center flex-col text-black'>

      <div>
        <p className='text-2xl'>안녕하세요</p>
        <p className='text-3xl italic font-bold'>THXX</p>
        <p>입니다</p>
      </div>
      <div>
        <p>화살표 키로 움직여 보세요</p>
        <button className='bg-blue-500 text-white p-2 rounded' onClick={handleClick}>
          count is {count}
        </button>
      </div>
      <div>
        <p>이 페이지는 10분만에 만들어 졌습니다.</p>
        <p>React + Vite + Tailwind CSS</p>
      </div>
    </div>
    </>
  )
}

export default App
