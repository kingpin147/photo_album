"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { CldUploadButton } from "next-cloudinary";
import { CldImage } from "next-cloudinary";


type uploadResult = {
  info: {
    public_id: string;
  };
  event: "success";
};

export default function Home() {
  const [imageId, setImageId] = useState("");

  return (
    <main className="flex min-h-screen items-center gap-10 p-10">
      <CldUploadButton
        onUpload={(result: uploadResult) => {
          setImageId(result.info.public_id);
        }}
        uploadPreset="<ye26uyqh>"
      />

      {imageId && (
      <CldImage
        width="960"
        height="600"
        src={imageId}
        sizes="100vw"
        alt="Description of my image"
      />
      )}
    </main>
  );
}
