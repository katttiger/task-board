type ColumnProps = {
  title: string;
};

const Column = (props: ColumnProps) => {
  return (
    <section>
      <h2>{props.title}</h2>
    </section>
  );
};

export default Column;
