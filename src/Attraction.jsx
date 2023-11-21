import { AttractionList } from "./AttractionList";
import { useState, useEffect } from "react";
import { API } from "./global";
import axios from "axios";
export function Attraction() {
  const [data, setData] = useState([]);
  const API = "https://www.melivecode.com/api/attractions";

  const getdata = async () => {
    const res = await axios.get(API);
    setData(res.data);
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div>
      <div>
        <h2 className="text">Around the world</h2>
      </div>
      <div className="attrac-list">
        {data.map((mv) => (
          <AttractionList key={mv.id} attrac={mv} id={mv.id} />
        ))}
      </div>
    </div>
  );
}
