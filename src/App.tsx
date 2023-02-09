import "./App.css";
import { MatchOptions } from "./components/matchOptions/matchOptions";
import { ProfileComponent } from "./components/profileComponent/ProfileComponent";
import { Navbar } from "./components/navbar/Navbar";
import Calendar from "./components/calenderComp/Calendar";

function App() {
  return (
    <>
      <MatchOptions />
      <Calendar />
      <Navbar />
      <ProfileComponent />
    </>
  );
}
export default App;
