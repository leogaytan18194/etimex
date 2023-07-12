
import PageRoutes from "./routes/PageRoutes";
import ReactGA from "react-ga";

const TRACKING_ID = "G-NX6XZSVRVX";
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <PageRoutes />
  );
}

export default App;
