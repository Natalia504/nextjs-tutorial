import mapsImg from "@/images/maps.jpg";
import Image from "next/image";
const url = "https://www.course-api.com/images/tours/tour-1.jpeg";

const page = ({ params }: { params: { id: string } }) => {
  console.log(params);

  //Dynamic Route: type in url: /tours/123
  return (
    <div>
      <h1 className="text-4xl">ID : {params.id}</h1>
      <section className="flex gap-x-4 mt-4">
        <div>
          {/* Local Image */}
          <Image
            src={mapsImg}
            alt="maps"
            priority={true}
            width={192}
            height={192}
            className="w-48 h-48 object-cover rounded"
          />
          <h2>local image</h2>
        </div>
      </section>
    </div>
  );
};
export default page;
