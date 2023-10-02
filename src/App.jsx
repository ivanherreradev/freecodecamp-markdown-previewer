import React, { useState } from 'react'
import './App.css'
import { initialMarkdown } from './utils/constants/initialMarkdown'

const App = () => {
  const [markdown, setMarkdown] = useState(initialMarkdown)

  const handleInputChange = (event) => {
    const newMarkdown = event.target.value
    setMarkdown(newMarkdown)
  }

  return (
    <div>
      <h1>Hello world 👋</h1>
      <textarea
        id="editor"
        value={markdown}
        onChange={handleInputChange}
        placeholder="Enter your markdown here..."
      ></textarea>
    </div>
  )
}

export default App
