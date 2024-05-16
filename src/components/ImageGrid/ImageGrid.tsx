import React, { useState, useEffect } from "react";
import axios from "axios";
import { HttpsProxyAgent } from "https-proxy-agent";
import ImageCard from "../ImageCard/ImageCard";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";

interface ImagesData {
  id: number;
  url: string;
  stats: {
    cryCount: number;
    laughCount: number;
    likeCount: number;
    dislikeCount: number;
    heartCount: number;
    commentCount: number;
  };
  [key: string]: any;
}

export default function ImageGrid() {
  const { ref, inView } = useInView();

  const {
    status,
    data,
    error,
    isFetching,
    isFetchingNextPage,
    isFetchingPreviousPage,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
  } = useInfiniteQuery({
    queryKey: ["images"],
    queryFn: fetchImages,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView, hasNextPage]);

  async function fetchImages({
    pageParam,
  }: {
    pageParam: number | string;
  }): Promise<{
    data: ImagesData[];
    nextPage: number | null;
  }> {
    try {
      let url: any;

      if (pageParam === 0) {
        url = `http://localhost:4000/proxy`;
        // url = `https://civitai.com/api/trpc/image.getInfinite?input=%7B%22json%22%3A%7B%22include%22%3A%5B%22cosmetics%22%5D%2C%22period%22%3A%22Week%22%2C%22sort%22%3A%22Most%20Reactions%22%2C%22types%22%3A%5B%22image%22%5D%2C%22browsingLevel%22%3A1%2C%22cursor%22%3Anull%7D%2C%22meta%22%3A%7B%22values%22%3A%7B%22cursor%22%3A%5B%22undefined%22%5D%7D%7D%7D`;
      } else {
        url = pageParam;
      }

      const response = await axios.get(url);

      console.log(response);

      return {
        data: response.data.items,
        nextPage: response.data.metadata.nextPage,
      };
    } catch (error) {
      console.error("Error getting images", error);
      return {
        data: [],
        nextPage: null,
      };
    }
  }

  if (status === "pending") {
    return <p className="text-white">Loading...</p>;
  }

  if (status === "error") {
    return <p className="text-red">Error...{error.message}</p>;
  }

  return (
    <>
      <div
        data-testid="imageGrid"
        className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 2xl:columns-5 gap-4 p-6 "
      >
        {data.pages.map((page, index) => {
          return (
            <div key={index}>
              {page.data.map((image) => {
                return <ImageCard key={image.id} imageData={image} />;
              })}
            </div>
          );
        })}

        <div ref={ref} className="text-white"></div>
      </div>
      <div className="text-white text-lg text-center pb-32">
        {isFetchingNextPage && "Loading More Images..."}
      </div>
    </>
  );
}
