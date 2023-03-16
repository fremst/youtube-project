import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

export default function Header() {
  return (
    <header className="flex items-center pb-5 my-5 border-b-zinc-500 border-b">
      <div className="min-w-fit">
        <Link to="/">
          <img src="/asset/logo.png" alt="logo" className="h-6" />
        </Link>
      </div>
      <div className="flex w-full">
        <Search />
      </div>
    </header>
  );
}
