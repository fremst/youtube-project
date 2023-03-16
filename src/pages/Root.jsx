import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Root() {
  return (
    <div className="max-w-5xl m-auto">
      <Header />
      <Outlet />
    </div>
  );
}
