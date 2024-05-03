import React, { useState, useEffect } from "react";
import axios from "axios";
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
        url = `https://civitai.com/api/v1/images?page=0`;
      } else {
        url = pageParam;
      }

      const response = await axios.get(url);
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
