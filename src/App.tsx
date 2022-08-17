import { useEffect, useRef, useState } from "react";
import "./App.css";
import EntryComponent from "./EntryComponent";
import { fetchData } from "./apiUtils";

const App = () => {
  const ref = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [entries, setEntries] = useState([]);
  const [value, setValue] = useState<string | undefined>(undefined);
  const [selected, setSelected] = useState("");
  const [matchedValues, setMatchedValues] = useState<any>([]);

  const selectEntry = (text: string) => {
    setSelected(text);
    setValue("");
    formRef?.current?.reset();
  };

  const handleOnChange = () => {
    setValue(ref?.current?.value);
    setSelected("");
  };

  useEffect(() => {
    (async () => {
      const data: any = await fetchData();
      setEntries(data);
    })();
  }, []);

  useEffect(() => {
    if (!value) {
      setMatchedValues([]);
    } else {
      const elements: any = entries
        .filter((elem: string) => elem.indexOf(value) > -1)
        .map((e: string) => (
          <EntryComponent
            text={e}
            value={value}
            selectEntry={selectEntry}
          ></EntryComponent>
        ));

      setMatchedValues(elements);
    }
  }, [value, entries]);
  return (
    <div className="App">
      <div className="App-header">
        <header>Autocomplete application</header>
      </div>

      <div>
        <div>
          <form ref={formRef}>
            <input
              placeholder="type text ... "
              ref={ref}
              type="text"
              id="message"
              name="message"
              onChange={handleOnChange}
              maxLength={1000}
            />
            <span className="App-selected-value">
              {" "}
              {selected && <>selected: {selected}</>}
            </span>
          </form>
        </div>

        {matchedValues.length > 0 &&
          matchedValues.map((entry: string, index: number) => {
            return <div key={index}> {entry} </div>;
          })}
      </div>
    </div>
  );
};

export default App;
