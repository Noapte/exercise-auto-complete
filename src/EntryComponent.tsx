interface Props {
  text: string;
  value: string;
  selectEntry: Function;
}

const EntryComponent = ({ text, value, selectEntry }: Props) => {
  const elements = text.split(new RegExp(`(${value})`, "gi"));
  return (
    <span className="App-entry" onClick={() => selectEntry(text)}>
      {elements.map((elem: string, i: number) => (
        <span
          key={i}
          className={
            elem.toLowerCase() === value.toLowerCase() ? "App-entry-found" : ""
          }
        >
          {elem}
        </span>
      ))}
    </span>
  );
};

export default EntryComponent;
