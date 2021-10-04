import React, { FC } from 'react'
import * as cheerio from 'cheerio'

function getToC(content): { text: string; link: string }[] {
  const $ = cheerio.load(content)
  const toc = $('h2')
    .map((idx, element) => {
      const el = $(element)
      return {
        text: el.text(),
        link: el.attr('id'),
      }
    })
    .toArray()
  return toc
}

export const TableOfContents: FC<{ content: string }> = ({ content }) => {
  const headings = getToC(content)
  return (
    <div className="w-full mt-8 bg-white shadow-sm rounded-sm p-4 ">
      <h3 className="text-xl font-semibold text-gray-700 mb-3 font-roboto">
        Conteúdo do Artigo
      </h3>
      <ol className="list-decimal font-bold pl-5 text-gray-700">
        {headings?.map((heading) => (
          <li key={heading.text} className="mb-2">
            <a href={`#${heading.link}`}>
              <h5 className="text-md leading-5 block font-roboto font-semibold  transition group-hover:text-blue-500">
                {heading.text}
              </h5>
            </a>
          </li>
        ))}
      </ol>
    </div>
  )
}
