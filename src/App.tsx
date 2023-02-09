import "./App.css";
import { ProfileComponent } from "./components/profileComponent/ProfileComponent";
import { Navbar } from "./components/navbar/Navbar";
import Calendar from "./components/calenderComp/Calendar";

function App() {
  return (
    <>
      <Calendar />
      <Navbar />
      <ProfileComponent />
    </>
  );
}

export default App;
