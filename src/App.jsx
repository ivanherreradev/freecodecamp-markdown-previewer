import React, { useState } from 'react'
import { marked } from 'marked'
import Editor from './components/Editor/Editor'
import { initialMarkdown } from './utils/constants/initialMarkdown'
import './App.css'

const App = () => {
  const [markdown, setMarkdown] = useState(initialMarkdown)

  const parsedMarkdown = marked(markdown, { breaks: true })

  const handleInputChange = (event) => {
    const newMarkdown = event.target.value
    setMarkdown(newMarkdown)
  }

  return (
    <main>
      <Editor markdown={markdown} handleInputChange={handleInputChange} />
      <div id="preview" dangerouslySetInnerHTML={{ __html: parsedMarkdown }} />
    </main>
  )
}

export default App
