import { type ReactNode } from "react";

type ColumnProps = {
  title: string;
  children: ReactNode;
};

const Column = (props: ColumnProps) => {
  return (
    <section className="bg-slate-100 rounded-lg p-4 w-full md:w-80 flex-shrink-0 border border-slate-200">
      <h2 className="uppercase text-sm font-bold text-slate-600 mb-4 tracking-wide">
        {props.title}
      </h2>
      <div className="flex flex-col gap-3">{props.children}</div>
    </section>
  );
};

export default Column;
