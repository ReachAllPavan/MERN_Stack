import { useState } from 'react'
import Posts from './components/Posts/Posts'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="text-2xl text-center font-bold my-2">Work Report</div>
      <hr />
      <Posts />
    </>
  )
}

export default App
