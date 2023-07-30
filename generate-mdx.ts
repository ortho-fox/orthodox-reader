import fs from 'fs-extra'
import path from 'path'
import { compile } from '@mdx-js/mdx'
import { getAllBooksData } from 'orthodox-nkjv' // Make sure to import the correct function from your package

// Function to convert verse text to MDX
async function convertToMDX(verseText: string) {
  const compiledMDX = await compile(verseText, { jsx: true })
  return compiledMDX.toString()
}

// Function to create book folders and chapter MDX files
async function generateOrthodoxNKJV() {
  const pagesDirectory = path.join(process.cwd(), 'pages')

  const booksData = await getAllBooksData() // Get all books data

  for (const book of booksData) {
    const bookSlug = book.name.toLowerCase().replace(/\s/g, '-')
    const bookDirectory = path.join(pagesDirectory, bookSlug)

    // Create book folder if it doesn't exist
    await fs.ensureDir(bookDirectory)

    // Loop through chapters
    for (const chapter of book.chapters) {
      const chapterNumber = chapter.num ? chapter.num.toString() : 'intro'
      const chapterFile = path.join(bookDirectory, `${chapterNumber}.mdx`)

      // Convert verses to MDX
      const verseMDX = await Promise.all(
        chapter.verses.map(async (verse) => {
          const verseTextMDX = await convertToMDX(verse.text)
          return verseTextMDX
        })
      )

      // Combine verses into chapter MDX content
      const chapterMDXContent = verseMDX.join('\n\n')

      // Write chapter MDX file
      await fs.writeFile(chapterFile, chapterMDXContent, 'utf8')
    }
  }

  console.log('Orthodox NKJV data has been generated into MDX files.')
}

// Call the generate function
generateOrthodoxNKJV().catch((err) => {
  console.error('Error:', err)
})
