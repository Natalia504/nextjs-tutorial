import mapsImg from "@/images/maps.jpg";
import Image from "next/image";
const url = "https://www.course-api.com/images/tours/tour-1.jpeg"; // for remote image

const page = ({ params }: { params: { id: string } }) => {
  console.log(params);

  //Dynamic Route: type in url: /tours/123
  return (
    <div>
      <h1 className="text-4xl">ID : {params.id}</h1>
      <section className="flex gap-x-4 mt-4">
        <div>
          <Image
            src={mapsImg}
            alt="maps"
            priority={true}
            width={192} // optional for local
            height={192}
            className="w-48 h-48 object-cover rounded"
          />
          <h2>local image</h2>
        </div>
        <div>
          {/* this image throws error: must add url to the list of supported patterns. SEE next.config.mjs file! */}
          <Image
            src={url}
            alt="remote-img"
            priority={true}
            width={192} //required for remove image
            height={192}
            className="w-48 h-48 object-cover rounded"
          />
          <h2>remote image</h2>
        </div>
      </section>
    </div>
  );
};
export default page;
