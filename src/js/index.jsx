import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { MdContent, MdDemos } from '../../documents/test.md'

const App = () => {
  const [test, setTest] = useState("233")
  console.log(getFile())
  return <div>
    主人最近被 BUG 缠身，所以这里还啥都没有 _(:з」∠)_
  </div>
}

ReactDOM.createRoot(document.getElementById('container')).render(<App />)
