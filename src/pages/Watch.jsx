import React from "react";
import Player from "../components/Player";
import useFetch from "../hooks/use-fetch";

export default function Watch() {
  const [loading, error, data] = useFetch({ url: "/data/detail.json" });

  if (loading) {
    return <>TODO: 로딩중...</>;
  }

  if (error) {
    return <>TODO: 에러 발생</>;
  }

  const { id, snippet } = data?.items?.length > 0 && data.items[0];

  return (
    <main className="flex">
      {/* TODO: 스타일링 */}
      <section className="w-[500px]">
        <Player id={id} />
        {snippet.title}
        {<br />}
        {<br />}
        {<br />}
        {snippet.description}
      </section>
      <section>TODO: 관련 영상</section>
    </main>
  );
}
