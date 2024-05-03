import React, { useState } from "react";

import ImageOption from "../ImageOption/ImageOption";
import MoreVertical from "../../ui/MoreVertical";
import Bookmark from "../../ui/bookmark.svg";
import Eye from "../../ui/eye.svg";
import Flag from "../../ui/flag.svg";
import EyeOff from "../../ui/eye-off.svg";
import Send from "../../ui/send.svg";

const imageOptions = [
  {
    action: "Save image to collection",
    icon: Bookmark,
  },
  {
    action: "View Post",
    icon: Eye,
  },
  {
    action: "Report Image",
    icon: Flag,
  },
  {
    action: "Hide this Image",
    icon: EyeOff,
  },
  {
    action: "Hide content from this user",
    icon: Send,
  },
];

export default function ImageOptions() {
  const [moreOptionsVisible, setMoreOptionsVisible] = useState<boolean>(false);

  return (
    <div className="absolute top-4 right-4  ">
      <div className="relative">
        <MoreVertical
          setMoreOptionsVisible={setMoreOptionsVisible}
          moreOptionsVisible={moreOptionsVisible}
        />
        {moreOptionsVisible && (
          <div className="text-white absolute top-center bg-[#1A1C1E] rounded-sm p-4 z-10 left-1/2 transform -translate-x-1/2 mt-2 w-[300px] border rounded-sm border-solid border-[#373a40]">
            <ul className="gap-1 flex flex-col">
              {imageOptions.map((imageOption) => {
                return (
                  <ImageOption
                    imageOption={imageOption}
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
