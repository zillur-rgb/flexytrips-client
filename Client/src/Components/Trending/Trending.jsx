import React, { useEffect, useState } from "react";
import { db } from "../../firebase.init.js";

const Trending = () => {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <div>
      <h1>Trending</h1>
    </div>
  );
};

export default Trending;
<h1>Trending</h1>;
