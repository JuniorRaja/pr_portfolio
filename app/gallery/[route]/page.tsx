import ImageMouse from "@/components/ui/ImageMouse";

const Page = ({ params }: { params: { route: string } }) => {
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
        <ImageMouse />
      </section>
    </div>
  );
};

export default Page;
