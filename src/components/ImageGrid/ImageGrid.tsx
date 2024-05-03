import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageCard from "../ImageCard/ImageCard";

interface ImagesData {
  id: number;
  url: string;
  [key: string]: any;
}

export default function ImageGrid() {
  const [images, setImages] = useState<ImagesData[]>([]);

  useEffect(() => {
    fetchImages();
  }, []);

  // TODO: Handle Infinite Scroll Using React-query
  function fetchImages(): void {
    axios
      .get("https://civitai.com/api/v1/images")
      .then((response) => {
        const imagesData = response.data.items;

        setImages(imagesData);
      })
      .catch((error) => {
        console.log("Error getting images", error);
      });
  }

  return (
    <div
      data-testid="imageGrid"
      className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 2xl:columns-5 gap-4 p-6 "
    >
      {images.map((image) => {
        return <ImageCard key={image.id} imageData={image} />;
      })}
    </div>
  );
}
