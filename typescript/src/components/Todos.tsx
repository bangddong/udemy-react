const Todos: React.FC<{ itmes: string[] }> = (props) => {
  return (
    <ul>
      {props.itmes.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default Todos;
