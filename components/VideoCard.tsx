"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const VideoCard = ({
  id,
  title,
  thumbnail,
  createdAt,
  userImg,
  username,
  views,
  visibility,
  duration,
}: VideoCardProps) => {
  return (
    <Link href={`/video/${id}`} className="video-card">
      <Image
        src={thumbnail}
        alt={title}
        width={290}
        height={163}
        className="thumbnail"
      />
      <article>
        <div>
          <figure>
            <Image
              src={userImg || "/assets/images/dummy.jpg"}
              alt={username}
              width={40}
              height={40}
              className="rounded-full aspect-square"
            />
            <figcaption>
              <h3>{username}</h3>
              <p>{visibility}</p>
            </figcaption>
          </figure>
          <aside>
            <Image
              src="/assets/icons/eye.svg"
              alt="created at"
              width={18}
              height={18}
            />
            <span>{views}</span>
          </aside>
        </div>
        <h2>
          {title} -{" "}
          {createdAt.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </h2>
      </article>
      <button onClick={() => {}} className="copy-btn">
        <Image
          src="/assets/icons/link.svg"
          alt="copy link"
          width={18}
          height={18}
        />
      </button>
      {duration && (
        <span className="duration">{Math.ceil(duration / 60)}min</span>
      )}
    </Link>
  );
};

export default VideoCard;
