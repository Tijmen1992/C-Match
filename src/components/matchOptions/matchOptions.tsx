export const MatchOptions = () => {
  //JS functies hier
  const title = "Your Matches:";

  // const matchOptions = [];
  // const users = ["user1", "user2", "user3"];
  // const final = [];
  // for (let user of users) {
  //   final.push(<li key={user}>{user}</li>);
  // }
  return (
    <div className="container">
      <h1> {title}</h1>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card">
            <img src="..." className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">Voornaam Achternaam</h5>
              <p className="card-text">Ophaal locatie: Amsterdam</p>
              <p className="card-text">Co2 uitstoot: </p>
            </div>
          </div>
        </div>
        {/* <div className="col">
          <div className="card">
            <img src="..." className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">Voornaam Achternaam</h5>
              <p className="card-text">Ophaal locatie: Amsterdam</p>
              <p className="card-text">Co2 uitstoot: </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};
