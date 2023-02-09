import "./App.css";
import { TestComponent } from "./components/testComponent/TestComponent";
import { Navbar } from "./components/navbar/Navbar";
import { ProfileAnim } from "./components/profileAnim/ProfileAnim";

function App() {
  return <>
  <Navbar />
  <TestComponent />
  <ProfileAnim />
  </>; 
}

export default App;
