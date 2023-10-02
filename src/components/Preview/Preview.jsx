import React from 'react'
import { marked } from 'marked'
import Window from '../Window/Window'
import styles from './Preview.module.css'

const Preview = ({ markdown }) => {
  const parsedMarkdown = marked(markdown, { breaks: true })

  return (
    <Window>
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: parsedMarkdown }}
        className={styles.preview}
      />
    </Window>
  )
}

export default Preview
