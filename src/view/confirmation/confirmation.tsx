import { Contact } from "../../components/contactComponent/contact";
import { ProfileAnim } from "../../components/profileAnim/ProfileAnim"

export const Confirmation = () => {
  return (
    <>
      <h1 style={{textAlign: "center", marginTop: "25px"}}>Naar Kantoor</h1>
      <ProfileAnim />
      <Contact firstName="Ryan Kool" phoneNumber="31652159345" />
    </>
  );
};
