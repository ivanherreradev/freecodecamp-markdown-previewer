import React, { useState } from 'react'
import Editor from './components/Editor/Editor'
import Preview from './components/Preview/Preview'
import { initialMarkdown } from './utils/constants/initialMarkdown'
import './App.css'

const App = () => {
  const [markdown, setMarkdown] = useState(initialMarkdown)

  const handleInputChange = (event) => {
    const newMarkdown = event.target.value
    setMarkdown(newMarkdown)
  }

  return (
    <main>
      <Editor markdown={markdown} handleInputChange={handleInputChange} />
      <Preview markdown={markdown} />
    </main>
  )
}

export default App
