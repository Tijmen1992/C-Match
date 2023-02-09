import data from "../../assets/data.json";
export const MatchOptions = () => {
  const title = "Your Matches:";
  const final = [];
  for (let item of data) {
    final.push(
      <div key={item.toString()}>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={item.Arnhem[2][12].profile}
            className="card-img-top"
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title">{item.Arnhem[2][12].name}</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Ophaal locatie: {item.Arnhem[2][12].location}
            </li>
            <li className="list-group-item">Auto: {item.Arnhem[2][12].car}</li>
            <li className="list-group-item">
              Spots total: {item.Arnhem[2][12].spots.total}
            </li>
            <li className="list-group-item">
              Spots left: {item.Arnhem[2][12].spots.taken}
            </li>
          </ul>
          <div className="card-body">
            <a href="#" className="btn btn-primary">
              Vroom Vroom!
            </a>
          </div>
        </div>
      </div>
    );
  }
  // data.map((item) => {
  //   console.log(item.Arnhem[2][14][0].name);
  // });
  // const users = ["user1", "user2", "user3"];
  // const final = [];
  // for (let user of users) {
  //   final.push(<li key={user}>{user}</li>);
  // }
  return (
    <div className="container">
      <h1> {title}</h1>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div>{final}</div>
      </div>
    </div>
  );
};
