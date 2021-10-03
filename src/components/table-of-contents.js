import React from "react";
import Link from "next/link";
import * as cheerio from "cheerio";

function getToC(content) {
  const $ = cheerio.load(content);
  const toc = $("h2")
    .map((idx, element) => {
      const el = $(element);
      return {
        text: el.text(),
        link: el.attr("id"),
      };
    })
    .toArray();
  return toc;
}

export default function TableOfContents({ content }) {
  const headings = getToC(content);
  return (
    <div className="w-full mt-8 bg-white shadow-sm rounded-sm p-4 ">
      <h3 className="text-xl font-semibold text-gray-700 mb-3 font-roboto">
        Índice
      </h3>
      <ol className="list-decimal font-bold pl-5 text-gray-700">
        {headings?.map((heading) => (
          <li key={heading.text} className="mb-2">
            <Link href={`#${heading.link}`}>
              <a>
                <h5 className="text-md leading-5 block font-roboto font-semibold  transition group-hover:text-blue-500">
                  {heading.text}
                </h5>
              </a>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
