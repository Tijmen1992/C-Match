import "./App.css";
import { ProfileComponent } from "./components/profileComponent/ProfileComponent";
import { TestComponent } from "./components/testComponent/TestComponent";
import { Navbar } from "./components/navbar/Navbar";

function App() {
  return <>
    <Navbar />
    <TestComponent />
    <ProfileComponent />
  </>;
}

export default App;
