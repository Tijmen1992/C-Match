import "./App.css";
import { MatchOptions } from "./components/matchOptions/matchOptions";
import { ProfileComponent } from "./components/profileComponent/ProfileComponent";
import { Navbar } from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <MatchOptions />
      <Navbar />
      <ProfileComponent />
    </>
  );
}
export default App;
