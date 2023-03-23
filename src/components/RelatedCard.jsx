import React from "react";
import wrapTitle from "../utils/wrapTitle";
import getRelativeTime from "../utils/getRelativeTime";
import { Link } from "react-router-dom";

export default function RelatedCard({ id, snippet, windowWidth }) {
  return (
    <div className="h-24 mb-2">
      <Link to={`/videos/watch/${id}`}>
        <div className="flex items-center h-full">
          {/* TODO: 스타일링 */}
          <img
            className="h-full mx-1"
            src={snippet.thumbnails.medium.url}
            alt={snippet.title}
          />
          <div>
            <p className="text-sm font-bold mt-1 mb-1.5">
              {wrapTitle(snippet.title, windowWidth > 1000 ? 35 : 10)}
            </p>
            <p className="text-[0.8rem] font-semibold text-zinc-400">
              {snippet.channelTitle}
            </p>
            <p className="text-[0.75rem] font-medium text-zinc-400">
              {getRelativeTime(snippet.publishedAt)}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
