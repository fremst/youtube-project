import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Player from "../components/Player";
import RelatedCard from "../components/RelatedCard";
import useFetch from "../hooks/use-fetch";

export default function Watch() {
  const { id } = useParams();
  const [videoLoading, videoError, videoData] = useFetch({
    url: "/data/detail.json", //
  });
  const [channelLoading, channelError, channelData] = useFetch({
    url: "/data/channel.json",
  });
  const [relatedVideosLoading, relatedVideosError, relatedVideos] = useFetch({
    url: "/data/related.json",
  });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  if (videoLoading) {
    return <>TODO: 영상 정보 로딩중...</>;
  }

  if (videoError) {
    return <>TODO: 영상 정보 로딩 실패</>;
  }

  const videoSnippet =
    videoData?.items?.length > 0 && videoData.items[0].snippet;
  const channelSnippet =
    channelData?.items?.length > 0 && channelData.items[0].snippet;
  const relatedItems = relatedVideos?.items?.length > 0 && relatedVideos.items;

  return (
    <main className="flex">
      <section className="h-full flex-1">
        <div className="h-[400px]">
          <Player id={id} />
        </div>
        <div>
          <div className="font-bold m-3">{videoSnippet?.title}</div>
          <div className="flex items-center ml-3">
            {channelLoading ? (
              <>채널 로딩중...</>
            ) : channelError ? (
              <>채널 로딩 실패</>
            ) : (
              <img
                className="rounded-full w-7 mx-2"
                src={channelSnippet?.thumbnails?.default?.url}
                alt={"TODO"}
              />
            )}
            {videoSnippet?.channelTitle}
          </div>
          <div className="m-3 mt-7">{videoSnippet?.description}</div>
        </div>
      </section>
      {windowWidth > 800 && (
        <section className="w-80">
          {relatedVideosLoading ? (
            <>관련 영상 로딩중...</>
          ) : relatedVideosError ? (
            <>관련 영상 로딩 실패</>
          ) : (
            relatedItems.map(({ id, snippet }) => (
              <RelatedCard
                key={id.videoId}
                id={id.videoId}
                snippet={snippet}
                windowWidth={windowWidth}
              />
            ))
          )}
        </section>
      )}
    </main>
  );
}
