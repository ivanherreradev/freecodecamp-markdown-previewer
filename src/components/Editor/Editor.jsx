import React from 'react'
import Window from '../Window/Window'
import styles from './Editor.module.css'

const Editor = ({ markdown, handleInputChange }) => {
  return (
    <Window>
      <textarea
        id="editor"
        value={markdown}
        onChange={handleInputChange}
        className={styles.editor}
        placeholder="Enter your markdown here..."
      ></textarea>
    </Window>
  )
}

export default Editor
