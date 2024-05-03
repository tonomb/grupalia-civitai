import React, { useState } from "react";

import ImageOption from "../ImageOption/ImageOption";
import MoreVertical from "../../ui/MoreVertical";
import { imageOptions } from "./imageOptionsConfig";

export default function ImageOptions({ imageData }: any) {
  const [moreOptionsVisible, setMoreOptionsVisible] = useState<boolean>(false);

  return (
    <div className="absolute top-4 right-4  ">
      <div className="relative">
        <MoreVertical
          setMoreOptionsVisible={setMoreOptionsVisible}
          moreOptionsVisible={moreOptionsVisible}
        />
        {moreOptionsVisible && (
          <div className="text-white absolute top-center bg-[#1A1C1E] p-4 z-10 left-1/2 transform -translate-x-1/2 mt-2 w-[300px] border rounded-md border-solid border-[#373a40]">
            <ul className="gap-1 flex flex-col">
              {imageOptions.map((imageOption) => {
                return (
                  <ImageOption
                    imageOption={imageOption}
                    imageData={imageData}
                    key={imageOption.action}
                  />
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
