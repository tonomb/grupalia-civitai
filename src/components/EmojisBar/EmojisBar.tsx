import React from "react";

interface EmojisBarProps {
  stats: EmojiBarStats;
}

export interface EmojiBarStats {
  cryCount: number;
  laughCount: number;
  likeCount: number;
  dislikeCount: number;
  heartCount: number;
  commentCount: number;
}

export default function EmojisBar({ stats }: EmojisBarProps) {
  return (
    <div className="flex flex-row absolute bottom-2 left-2 text-white gap-2 bg-[#25262b99] p-1 rounded-sm ">
      <div className="flex flex-row gap-1 items-center hover:cursor-pointer">
        <p>👍</p>
        <p className="text-xs font-bold">{stats.likeCount}</p>
      </div>
      <div className="flex flex-row gap-1 items-center hover:cursor-pointer">
        <p>❤️</p>
        <p className="text-xs font-bold">{stats.heartCount}</p>
      </div>
      <div className="flex flex-row gap-1 items-center hover:cursor-pointer">
        <p>😂</p>
        <p className="text-xs font-bold">{stats.laughCount}</p>
      </div>
      <div className="flex flex-row gap-1 items-center hover:cursor-pointer">
        <p>😢</p>
        <p className="text-xs font-bold">{stats.cryCount}</p>
      </div>
      <div className="flex flex-row gap-1 items-center hover:cursor-pointer bg-[#f08c0033] px-1 rounded-sm">
        <p>⚡️</p>
        <p className="text-xs font-bold text-[#f59f00]">
          {stats.likeCount - stats.heartCount > 1000
            ? (stats.likeCount - stats.heartCount + "")
                .replace(/(\d)(?=(\d{3})+$)/g, "$1.")
                .replace(/(\.\d).*$/, "$1") + "k"
            : stats.likeCount - stats.heartCount}
        </p>
      </div>
    </div>
  );
}
