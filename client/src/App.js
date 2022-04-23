import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import { auth } from "./firebase.init";
import AllPages from "./Pages/AllPages/AllPages";

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <AllPages />
      <Footer />
    </div>
  );
}

export default App;
