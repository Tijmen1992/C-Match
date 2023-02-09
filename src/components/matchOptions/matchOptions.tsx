import data from "../../assets/data.json";
export const MatchOptions = () => {
  const title = "Your Matches:";
  const final = [];
  for (let item of data) {
    final.push(
      <div key={item.toString()}>
        <div className="card" style={{ width: "18rem", margin: "0 auto" }}>
          <img
            src="https://media.licdn.com/dms/image/C4D03AQGp-NfEz7oqXw/profile-displayphoto-shrink_800_800/0/1600867990626?e=1681344000&v=beta&t=1ppziA_ZtZ2riCnFd_3lZZyaU6LL2LiQnt88jQmvD1o"
            className="card-img-top"
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title">Ryan Kool</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Ophaal locatie: Nijpelsplantsoen 12
            </li>
            <li className="list-group-item">Auto: Nissan Juke (geel)</li>
            <li className="list-group-item">
              Spots total: 4
            </li>
            <li className="list-group-item">
              Spots left: 4
            </li>
          </ul>
          <div className="card-body">
            <a href="/confirmation" className="btn btn-primary">
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
    <div className="">
      <h1 style={{ margin: "25px 0", textAlign: "center" }}>{title}</h1>
        <div style={{ textAlign: "center" }}>{final}</div>
    </div>
  );
};
