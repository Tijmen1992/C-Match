import style from "./ProfileComponent.module.css";

export const ProfileComponent = () => {
  //JS functies hier
  const img = "https://media.licdn.com/dms/image/C5603AQHqyVMziFXKFw/profile-displayphoto-shrink_800_800/0/1605965604602?e=1681344000&v=beta&t=yTSIWVlZs_CfAoYJJQOFki20V-_me8ISZTLIJr0Nxpw";

  return (
    <div className={style.profileContainer}>
      <img className={style.profilePicture} src={img} />

      <input type="text" value="Nieuwegein"></input>
      <select>
        <option value="Cap-LR">Capgemini Leidsche Rijn</option>
        <option value="Cap-Eindhoven">Capgemini Engineering Leidsche Rijn</option>
      </select>
    </div>
  );
};
