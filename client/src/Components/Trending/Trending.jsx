import useTrending from "../../Hooks/useTrending";
import SingleTour from "../SingleTour/SingleTour";
import "./Trending.css";

const Trending = () => {
  const [trending] = useTrending();
  return (
    <div className="trending-container">
      <div className="allTours">
        <h1 className="header">Trending Tours</h1>
        <p className="allTour">Explore All</p>
      </div>

      <div className="tours">
        {trending.slice(0, 6).map((trend) => {
          return <SingleTour key={trend.id} trend={trend} />;
        })}
      </div>
    </div>
  );
};

export default Trending;
<h1>Trending</h1>;
