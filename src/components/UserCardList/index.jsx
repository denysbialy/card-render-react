import "./style/style.css";
import { CARD_CONSTANTS } from "../constants";
import Image from "../Img";

function UserCardList(props) {
  const {data: { firstName, lastName }} = props;
  return (
    <li className="userCardWrapper">
      <article className="cardContainer">
        <Image data={props.data} />
        <h2 className="cardName">
          {`${firstName} ${lastName}`.trim()? `${firstName} ${lastName}`: CARD_CONSTANTS.userName}
        </h2>
        <p className="cardDescription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          efficitur, ligula nec molestie viverra, lectus lacus scelerisque justo
        </p>
      </article>
      ;
    </li>
  );
}

export default UserCardList;
