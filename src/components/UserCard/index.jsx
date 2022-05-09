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

  createDataUser({ data } = this.state) {
    return data.map((user) => <UserCardList data={user} key={user.id} />);
  }
  render() {
    return <ul className="userCardsContainer">{this.createDataUser()}</ul>;
  }
}

export default UserCard;
