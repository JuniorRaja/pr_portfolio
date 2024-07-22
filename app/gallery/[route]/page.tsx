import ImageMouse from "@/components/ui/ImageMouse";
import { LayoutGrid } from "@/components/ui/layout-grid";
import * as images from "../../../public/gallery/macro";

const Page = ({ params }: { params: { route: string } }) => {
  const InnerSkeleton = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">Image Title</p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Scene description
        </p>
      </div>
    );
  };

  const cards = [
    {
      id: 1,
      content: <InnerSkeleton />,
      className: "md:col-span-1",
      thumbnail: images.macro_1.src,
    },
    {
      id: 2,
      content: <InnerSkeleton />,
      className: "col-span-1",
      thumbnail: images.macro_2.src,
    },
    {
      id: 3,
      content: <InnerSkeleton />,
      className: "col-span-1",
      thumbnail: images.macro_3.src,
    },
    {
      id: 4,
      content: <InnerSkeleton />,
      className: "md:col-span-1",
      thumbnail: images.macro_4.src,
    },
    {
      id: 5,
      content: <InnerSkeleton />,
      className: "md:col-span-1",
      thumbnail: images.macro_5.src,
    },
    {
      id: 6,
      content: <InnerSkeleton />,
      className: "col-span-1",
      thumbnail: images.macro_6.src,
    },
    {
      id: 7,
      content: <InnerSkeleton />,
      className: "col-span-1",
      thumbnail: images.macro_7.src,
    },
    {
      id: 8,
      content: <InnerSkeleton />,
      className: "md:col-span-1",
      thumbnail: images.macro_8.src,
    },
    {
      id: 9,
      content: <InnerSkeleton />,
      className: "col-span-1",
      thumbnail: images.macro_9.src,
    },
    {
      id: 10,
      content: <InnerSkeleton />,
      className: "md:col-span-1",
      thumbnail: images.macro_10.src,
    },
  ];

  return (
    <div className="max-w-7xl w-full">
      <section className="w-full py-20 min-h-screen pt-36">
        <div className="my-4">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-[80] mb-5">
            hover to see the flow of
          </p>
          <h1 className="heading">
            <span className="text-purple">{params.route.toUpperCase()}</span>{" "}
            Gallery
          </h1>
        </div>
        {/* <ImageMouse /> */}
        <LayoutGrid cards={cards} />
      </section>
    </div>
  );
};

export default Page;
