import axios from "axios";
import { useEffect, useState } from "react";

const useTrending = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/tours")
      .then((res) => setTrending(res.data));
  }, []);

  return [trending, setTrending];
};

export default useTrending;
