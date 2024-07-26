"use client";

const ShimmerButton = ({
  title,
  customCSS,
  buttonType,
  onClickFn,
}: {
  title: string;
  customCSS?: string;
  buttonType?: "button" | "submit";
  onClickFn?: () => void;
}) => {
  return (
    <button
      className={`inline-flex h-12 animate-shimmer items-center justify-center rounded-md border backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200
            border-slate-800 bg-[length:200%_100%] px-6 min-w-28
            font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
            hover:bg-[linear-gradient(45deg,#040e44,45%,#120d57,55%,#160c5c)] hover:text-white  
            ${customCSS ? customCSS : ""}`}
      type={buttonType ? buttonType : "button"}
      onClick={onClickFn}
    >
      {title}
    </button>
  );
};

export default ShimmerButton;
