import React from "react";
import "./style/style.css";
import UserCardList from "../UserCardList/index";
import data from "../../data.json";

class UserCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: data.map((data) => ({
        ...data,
      })),
    };
  }
  render() {
    const { data } = this.state;
    const dataUser = data.map((user) => <UserCardList data={user} key={user.id} />);
    return <ul className="userCardsContainer">{dataUser}</ul>;
    // <ul className="userCardsContainer">
    //     <UserCardList data={data} />
    //   </ul>
  }
}

export default UserCard;
