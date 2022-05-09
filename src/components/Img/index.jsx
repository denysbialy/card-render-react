import "../UserCardList/style/style.css";
import React, { Component } from "react";
import { GET_INITIAL } from "../constants";

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoad: true,
    };
  }
  errorHandler = () => {
    this.setState({
      isLoad: !this.state.isLoad,
    });
  };
  getInitial = () => {
    const {
      data: { firstName, lastName },
    } = this.props;
    const fullName = `${firstName} ${lastName}`;

    return GET_INITIAL(fullName);
  };

  render() {
    const {
      data: { firstName, lastName, profilePicture },
    } = this.props;
    const { isLoad } = this.state;
    return (
      <div>
        <div className="cardImgWrapper" id="imgWrapper1">
          {isLoad ? (
            <img
              className="cardImg"
              src={profilePicture}
              alt={`${firstName} ${lastName}`}
              onError={this.errorHandler}
            />
          ) : (
            <div className="initials">{this.getInitial()}</div>
          )}
        </div>
      </div>
    );
  }
}

export default Image;
