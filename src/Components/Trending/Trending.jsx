import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase.init.js";

const Trending = () => {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const docRef = doc(db, "destinations", "destinations.uid");
        const docSnap = await getDoc(docRef);

        console.log(docSnap);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDestinations();
  }, []);
  return (
    <div>
      <h1>Trending</h1>
    </div>
  );
};

export default Trending;
<h1>Trending</h1>;
