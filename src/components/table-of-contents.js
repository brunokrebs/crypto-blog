import React from "react";
import Link from "next/link";

function getHeadings(content) {
  const regex = /<h2>(.*?)<\/h2>/g;

  if (content.match(regex)) {
    return content.match(regex).map((heading) => {
      const headingText = heading.replace("<h2>", "").replace("</h2>", "");

      const link = "#" + headingText.replace(/ /g, "-").toLowerCase()
      .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      return {
        text: headingText,
        link,
      };
    });
  }

  return [];
}


export default function TOC({ content }) {
  const headings = getHeadings(content);
  return (
    <div className="w-full mt-8 bg-white shadow-sm rounded-sm p-4 ">
      <h3 className="text-xl font-semibold text-gray-700 mb-3 font-roboto">
        Índice
      </h3>
      {headings.length > 0 ? (
        <ol>
          {headings.map((heading) => (
            <li key={heading.text}>
              <Link href={`${heading.link}`}>
                <a className="flex group">
                  <div className="flex-grow pl-3">
                    <h5 className="text-md leading-5 block font-roboto font-semibold  transition group-hover:text-blue-500">
                      {heading.text}
                    </h5>
                  </div>
                </a>
              </Link>
            </li>
          ))}
        </ol>
      ) : null}
    </div>
  );
}
