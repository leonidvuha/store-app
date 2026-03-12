type BookProps = {
  title: string;
  author: string;
  year: number;
};

export default function Book({ title, author, year }: BookProps) {
  return (
    <div>
      <p>{title}</p>
      <p>{author}</p>
      <p>{year}</p>
    </div>
  );
}
