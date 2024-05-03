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
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 p-6"
    >
      {images.map((image) => {
        return <ImageCard key={image.id} imageData={image} />;
      })}
    </div>
  );
}
