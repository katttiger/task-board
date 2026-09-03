import { type ReactNode } from "react";

type ColumnProps = {
  title: string;
  children: ReactNode;
};

const Column = (props: ColumnProps) => {
  return (
    <section className="bg-amber-100 m-5 border-4 p-4 border-slate-500">
      <h2 className="uppercase text-lg text-weght-500 text-blue-500">
        {props.title}
      </h2>
      {props.children}
    </section>
  );
};

export default Column;
