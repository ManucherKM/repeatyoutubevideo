"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { isValidHttpUrl } from "@/lib/isValidURL";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [link, setLink] = useState("");

  useEffect(() => {
    document.querySelector("video")?.setAttribute("loop", "true");
  }, [link]);
  return (
    <div className="px-5">
      <div>
        <div className="flex justify-center mt-10">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="logo"
            width={200}
            height={50}
            priority
          />
        </div>
        <div className="flex gap-5 justify-center mt-10">
          <Label className="w-full max-w-3xl">
            Paste YouTube URL
            <Input
              id="url"
              type="text"
              placeholder="https://www.youtube.com/watch?v=2bSCkWvBVRU"
              className="mt-2"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </Label>
        </div>

        <div className="mt-20 flex justify-center">
          {isValidHttpUrl(link) ? (
            <iframe
              className="w-full max-w-3xl"
              height="468"
              src={link.replace("watch?v=", "embed/")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          ) : (
            <p>Incorrect link</p>
          )}
        </div>
      </div>
    </div>
  );
}
