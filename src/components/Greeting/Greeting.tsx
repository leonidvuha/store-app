interface Props {
  name: string;
  age?: number;
}

export default function Greeting(props: Props) {
  const { name, age } = props;

  return (
    <div>
      Hello, {name}! Age: {age}
    </div>
  );
}
