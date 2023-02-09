import "./App.css";
import { MatchOptions } from "./components/matchOptions/matchOptions";
import { ProfileComponent } from "./components/profileComponent/ProfileComponent";
import { Navbar } from "./components/navbar/Navbar";
import Calendar from "./components/calenderComp/Calendar";
import { ProfileAnim } from "./components/profileAnim/ProfileAnim";

function App() {
  return (
    <>
      <MatchOptions />
      <Calendar />
      <Navbar />
      <ProfileComponent />
      <ProfileAnim />
    </>
  );
}
export default App;
