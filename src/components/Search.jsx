import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

export default function Search() {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${keyword}`);
  };

  return (
    <form className="flex w-full justify-center" onSubmit={onSubmit}>
      <input
        className="bg-zinc-800 text-white py-2 px-3 w-3/5"
        type="text"
        name="keyword"
        id="keyword"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search..."
      />
      <button className="bg-zinc-500 text-white px-3 py-1">
        <AiOutlineSearch size="1.5em" />
      </button>
    </form>
  );
}
