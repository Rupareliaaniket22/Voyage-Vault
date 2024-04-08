import { useContext, createContext, useEffect, useState } from "react";

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [data, setdata] = useState([]);
  const [dataexist, setdataexists] = useState();
  console.log(data.length);
  useEffect(() => {
    const storedData = localStorage.getItem("data");
    if (storedData) {
      setdata(JSON.parse(storedData));
      setdataexists(true);
    } else if (!storedData) {
      localStorage.setItem("data", JSON.stringify([]));
      setdataexists(false);
    }
  }, []);

  useEffect(() => {
    if (dataexist) localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  return (
    <CitiesContext.Provider value={{ data, setdata }}>
      {children}
    </CitiesContext.Provider>
  );
}

function useCity() {
  const value = useContext(CitiesContext);
  if (value === undefined) {
    throw new Error("useCity must be used within a CitiesProvider");
  }
  return value;
}

export { CitiesProvider, useCity };
