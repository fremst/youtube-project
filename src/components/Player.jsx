import React from "react";

export default function Player({ id }) {
  return (
    <iframe
      title={id}
      className="w-full h-full"
      src={`//www.youtube.com/embed/${id}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  );
}
