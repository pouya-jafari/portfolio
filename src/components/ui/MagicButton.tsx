type MagicButton = {
  title: string;
  icon: React.ReactNode;
  position: string;
  otherClasses?: string;
};

const MagicButton = ({ title, icon, position, otherClasses }: MagicButton) => {
  return (
    <button className=" relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 md:w-60 md:mt-10 transition transform duration-300 hover:scale-105">
      <span className="absolute  -inset-[10px] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a2d2ff_0%,#0284c7_50%,#a2d2ff_100%)]" />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
