import "./App.css";
import { ProfileComponent } from "./components/profileComponent/ProfileComponent";
import { Navbar } from "./components/navbar/Navbar";
import Calendar from "./components/calenderComp/Calendar";
import { ProfileAnim } from "./components/profileAnim/ProfileAnim";

function App() {
  return (
    <>
      <Calendar />
      <Navbar />
      <ProfileComponent />
      <ProfileAnim />
    </>
  );
}

export default App;
