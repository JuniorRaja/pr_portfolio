import ImageMouse from "@/components/ui/ImageMouse";
import { LayoutGrid } from "@/components/ui/layout-grid";

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
      className: "md:col-span-3",
      thumbnail: `https://cdn.jsdelivr.net/gh/JuniorRaja/static/assets/${params.route}/${params.route}_1.webp`,
    },
    {
      id: 2,
      content: <InnerSkeleton />,
      className: "col-span-1",
      thumbnail: `https://cdn.jsdelivr.net/gh/JuniorRaja/static/assets/${params.route}/${params.route}_2.webp`,
    },
    {
      id: 3,
      content: <InnerSkeleton />,
      className: "col-span-1",
      thumbnail: `https://cdn.jsdelivr.net/gh/JuniorRaja/static/assets/${params.route}/${params.route}_3.webp`,
    },
    {
      id: 4,
      content: <InnerSkeleton />,
      className: "md:col-span-1",
      thumbnail: `https://cdn.jsdelivr.net/gh/JuniorRaja/static/assets/${params.route}/${params.route}_4.webp`,
    },
    {
      id: 5,
      content: <InnerSkeleton />,
      className: "md:col-span-2",
      thumbnail: `https://cdn.jsdelivr.net/gh/JuniorRaja/static/assets/${params.route}/${params.route}_5.webp`,
    },
    {
      id: 6,
      content: <InnerSkeleton />,
      className: "col-span-1",
      thumbnail: `https://cdn.jsdelivr.net/gh/JuniorRaja/static/assets/${params.route}/${params.route}_6.webp`,
    },
    {
      id: 7,
      content: <InnerSkeleton />,
      className: "col-span-2",
      thumbnail: `https://cdn.jsdelivr.net/gh/JuniorRaja/static/assets/${params.route}/${params.route}_7.webp`,
    },
    {
      id: 8,
      content: <InnerSkeleton />,
      className: "md:col-span-1",
      thumbnail: `https://cdn.jsdelivr.net/gh/JuniorRaja/static/assets/${params.route}/${params.route}_8.webp`,
    },
    {
      id: 9,
      content: <InnerSkeleton />,
      className: "col-span-1",
      thumbnail: `https://cdn.jsdelivr.net/gh/JuniorRaja/static/assets/${params.route}/${params.route}_9.webp`,
    },
    {
      id: 10,
      content: <InnerSkeleton />,
      className: "md:col-span-3",
      thumbnail: `https://cdn.jsdelivr.net/gh/JuniorRaja/static/assets/${params.route}/${params.route}_10.webp`,
    },
  ];

  return (
    <div className="max-w-7xl w-full">
      <section className="w-full py-20 min-h-screen pt-36">
        <div className="my-4">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-[80] mb-5">
            see the beauty of
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
