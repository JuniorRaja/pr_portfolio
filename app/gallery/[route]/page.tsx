const Page = ({ params }: { params: { route: string } }) => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      {params.route ? `Page name is: ${params.route}` : "Loading..."}
    </div>
  );
};

export default Page;
