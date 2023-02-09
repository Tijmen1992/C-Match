import style from "./ProfileComponent.module.css";

export const ProfileComponent = () => {
  //JS functies hier
  const img = "https://media.licdn.com/dms/image/C5603AQHqyVMziFXKFw/profile-displayphoto-shrink_800_800/0/1605965604602?e=1681344000&v=beta&t=yTSIWVlZs_CfAoYJJQOFki20V-_me8ISZTLIJr0Nxpw";

  return (
    <div className={style.profileContainer}>
      <img className={style.profilePicture} src={img} />

    <div className="container-xl d-flex justify-content-center mt-3">
      <div className="d-flex flex-column align-items-start">
        <div className="form-item mb-3 d-flex flex-column align-items-start">
          <label className="form-label fw-semibold">Vertrekpunt</label>
          <input type="text" value="Nieuwegein" className="form-control form-control-lg w-100 shadow"></input>
        </div>

        <div className="form-item mb-3 d-flex flex-column align-items-start">
          <label className="form-label fw-semibold">Eindbestemming</label>
          <select className="form-select form-select-lg w-100 shadow">
            <option value="Cap-LR">Capgemini Leidsche Rijn</option>
            <option value="Cap-Eindhoven">Capgemini Engineering Leidsche Rijn</option>
          </select>
        </div>
      </div>
    </div>
  </div>
  );
};
