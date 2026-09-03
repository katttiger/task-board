import { type ReactNode } from "react";

type ColumnProps = {
  title: string;
  children: ReactNode;
};

const Column = (props: ColumnProps) => {
  return (
    <section className="task-column">
      <h2>{props.title}</h2>
      {props.children}
    </section>
  );
};

export default Column;
