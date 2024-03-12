import { CldImage } from "next-cloudinary";
import UploadButton from "./upload-button";
import cloudinary from "cloudinary";
import { CloudinaryImage } from "./cloudinary-image";

type SearchResult = {
  public_id: string;
  tags: string[];
};

const GalleryPage = async () => {
  const results = (
    await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(3)
    .execute()) as { resources: SearchResult[] };

    console.log(results);

  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
        <h1 className="text-4xl font-bold">GalleryPage</h1>
        <UploadButton />
</div>
        <div className="grid grid-cols-4 gap-4">
          {results.resources.map((result: any) => (
            <CloudinaryImage
            key={result.public_id}
            src={result.public_id}
            publicId={result.public}
            width="400"
            height="300"
             alt="an image of nothing"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
