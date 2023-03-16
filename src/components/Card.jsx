import React from "react";
import wrapTitle from "../utils/wrapTitle";
import getRelativeTime from "../utils/getRelativeTime";
import { Link } from "react-router-dom";

export default function Card({ id, snippet }) {
  return (
    <div className="w-1/5 p-1 mb-2">
      <Link to={`/videos/watch/${id}`}>
        <img src={snippet.thumbnails.medium.url} alt={snippet.title} />
        <p className="text-sm font-bold mt-1 mb-1.5">
          {wrapTitle(snippet.title, 55)}
        </p>
        <p className="text-[0.8rem] font-semibold text-zinc-400">
          {snippet.channelTitle}
        </p>
        <p className="text-[0.75rem] font-medium text-zinc-400">
          {getRelativeTime(snippet.publishedAt)}
        </p>
      </Link>
    </div>
  );
}
