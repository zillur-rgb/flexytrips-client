import axios from "axios";
import { useEffect, useState } from "react";

const useTrending = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    axios
      .get("https://afternoon-bayou-62411.herokuapp.com/api/tours")
      .then((res) => setTrending(res.data));
  }, []);

  return [trending, setTrending];
};

export default useTrending;
