import { type ReactNode } from "react";

type ColumnProps = {
  title: string;
  children: ReactNode;
};

const Column = (props: ColumnProps) => {
  return (
    <section className="bg-slate-200 rounded-lg p-4 w-full md:w-80 flex-shrink-0 border border-slate-200 flex flex-col max-h-[95vh]">
      <h2 className="uppercase text-2xl text-center font-bold text-slate-600 mb-4 tracking-wide">
        {props.title}
      </h2>
      <div className="flex flex-col gap-3 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
        {props.children}
      </div>
    </section>
  );
};

export default Column;
