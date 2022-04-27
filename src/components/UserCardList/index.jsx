import "./style/style.css";

function UserCardList({ data: { firstName, lastName, profilePicture, id } }) {

  return (
    <li className="userCardWrapper">
      <article className="cardContainer">
        <div className="cardImgWrapper" id="imgWrapper1">
          <img
            className="cardImg"
            src={profilePicture}
            alt={`${firstName} ${lastName}`}
          />
        </div>
        <h2 className="cardName">{`${firstName} ${lastName}`}</h2>
        <p className="cardDescription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          efficitur, ligula nec molestie viverra, lectus lacus scelerisque
          justo, ac placerat sem est id sapien. Aliquam erat volutpat. Nunc quis
          dolor neque. Phasellus sed purus vitae metus sagittis commodo eget sit
          amet urna. Aliquam erat volutpat. Pellentesque a mauris orci. Morbi
          dictum urna vel elit euismod, eu pellentesque erat venenatis. Praesent
          aliquet diam libero, eget egestas enim sagittis vitae
        </p>
      </article>
      ;
    </li>
  );
}

export default UserCardList;
