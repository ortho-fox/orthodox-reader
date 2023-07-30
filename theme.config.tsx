import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>☦️ Orthodox NKJV Reader</span>,
  project: {
    link: 'https://github.com/ortho-fox/orthodox-nkjv-reader',
  },
  docsRepositoryBase: 'https://github.com/ortho-fox/orthodox-nkjv-reader',
  footer: {
    text: '☦️ Orthodox NKJV Reader',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1, // Specify the folder level at which the menu on the left is collapsed by default
    autoCollapse: true, // Automatically collapse inactive folders above defaultMenuCollapseLevel
    toggleButton: true, // Show sidebar toggle button
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return (
          <div style={{ background: 'cyan', textAlign: 'center' }}>{title}</div>
        )
      }
      if (title === 'Genesis') {
        return <>{title}</>
      }
      return <>{title}</>
    }
  },
}

export default config
