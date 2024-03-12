"use client";

import { CldImage } from "next-cloudinary";
import { Heart } from "@/components/icons/heart"
import { setAsFavoriteAction } from "./actions";
import { useTransition } from "react";

export function CloudinaryImage(props: any & { publicId: string }) {
    const [transition, startTransition] = useTransition();
    return(
        <div className="relative">
            <CldImage
        {...props }
        />
        <Heart 
        onClick={()=>{
            startTransition(()=>{
                setAsFavoriteAction(props.publicId);
            });
                      
        }}
        className="absolute top-2 right-2 hover:text-red-500 cursor-pointer" />
        </div>
        

    )
}