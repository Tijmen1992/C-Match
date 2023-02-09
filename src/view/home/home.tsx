import Calendar from "react-calendar";
import { Navbar } from "../../components/navbar/Navbar";
import { ProfileComponent } from "../../components/profileComponent/ProfileComponent";

export const Home = () => {
  return (
    <>
      <Navbar />
      <ProfileComponent />
      <Calendar />
    </>
  );
};
