import React from "react";
import Link from "next/link";
import marked from "marked";

function generateTopics(content) {
  const points = content.split("</p>");
  return points
    .map((point) => {
      const startPos = point.indexOf('<h2 id="');
      const endPos = point.indexOf("</h2>");
      return point.substring(startPos, endPos).trim();
    })
    .filter((i) => {
      if (i) return i;
    })
    .map((i) => {
      const idStart = i.indexOf('<h2 id="') + 8;
      const idEnd = i.indexOf(">") - 1;
      const link = i
        .substring(idStart, idEnd)
        .trim()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      const titleInit = i.indexOf(">") + 1;
      const titleEnd = i.length;
      const title = i.substring(titleInit, titleEnd).trim();

      return {
        link,
        title,
      };
    });
}

function renderTopics(topics) {
  return topics.map((topic, idx) => {
    return (
      <li key={idx}>
        <Link href={`#${topic.link}`} >
          <a className="flex group">
            <div className="flex-grow pl-3">
              <h5 className="text-md leading-5 block font-roboto font-semibold  transition group-hover:text-blue-500">
                {topic.title}
              </h5>
            </div>
          </a>
        </Link>
      </li>
    );
  });
}

export default function TOC({ content }) {
  const topics = generateTopics(marked(content));

  return (
    <div className="w-full mt-8 bg-white shadow-sm rounded-sm p-4 ">
      <h3 className="text-xl font-semibold text-gray-700 mb-3 font-roboto">
        Índice
      </h3>
      <ul>{renderTopics(topics)}</ul>
    </div>
  );
}
