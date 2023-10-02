import React, { useState } from 'react'
import './App.css'
import { initialMarkdown } from './utils/constants/initialMarkdown'
import { marked } from 'marked'

const App = () => {
  const [markdown, setMarkdown] = useState(initialMarkdown)

  const parsedMarkdown = marked(markdown, { breaks: true })

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
      <div id="preview" dangerouslySetInnerHTML={{ __html: parsedMarkdown }} />
    </div>
  )
}

export default App
