import "./App.css";
import { useEffect, useState } from "react";
import { getData } from "./api/GetData";
import { Main } from "./pages/Main";
import { DataContext } from "./createContext/context";
import {arrImg} from './arrrImg/arrImg'

function App() {
  const [data, setData] = useState(false);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const data = await getData(limit, page);
      if (data) {
        const newData = data.map((e, index) => {
          const newObg = {...e, thumbnailUrl: arrImg[index].url, url: arrImg[index].url}
          return newObg
        })
        console.log(newData)
        setData(newData);
      }
    }

    fetchData();
  }, [limit, page]);

  return (
    <DataContext.Provider value={{ data, setData }}>
     <Main setPage={setPage} page={page}/>
    </DataContext.Provider>
  );
}

export default App;
