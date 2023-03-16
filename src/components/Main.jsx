import React from "react";
import Card from "./Card";
import useFetch from "../hooks/use-fetch";
import { useParams } from "react-router-dom";

export default function Main() {
  const { keyword } = useParams();

  const [loading, error, data] = useFetch({ url: "/data/data.json" });
  // const [loading, error, data] = useFetch({
  // url: `https://youtube.googleapis.com/youtube/v3/videos?key=${process.env.REACT_APP_API_KEY}&chart=mostPopular&maxResults=5&part=snippet&regionCode=KR`,
  // url: `https://youtube.googleapis.com/youtube/v3/videos?key=${process.env.REACT_APP_API_KEY}&order=viewCount&maxResults=5&part=snippet&regionCode=KR&q=bts`,
  // url: `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&part=snippet&maxResults=25&q=${keyword}`,
  // });
  // https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyDnOryewK4LgWFMDbKWQ0pcEdypCiPkI8M&part=snippet&relatedToVideoId=PDGts5jFczs&type=video&maxResults=11

  if (loading) {
    return <>TODO: 로딩중...</>;
  }

  if (error) {
    return <>TODO: 에러 발생</>;
  }

  const { items } = data;

  return (
    <main className="mt-5 flex flex-wrap">
      {items?.map(({ id, snippet }) => (
        <Card key={id} id={id} snippet={snippet} />
      ))}
    </main>
  );
}
