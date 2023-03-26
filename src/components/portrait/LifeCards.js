import Figure from "react-bootstrap/Figure";

export default function LifeCard({ number, position }) {
  let cardPic;
  let cardNumber;
  switch (number) {
    case 1:
      cardPic =
        "https://gfx.tarot.com/images/site/decks/universal-waite/mid_size/1.jpg";
      cardNumber = "I The Magician";
      break;
    case 2:
      cardPic =
        "https://gfx.tarot.com/images/site/decks/universal-waite/mid_size/2.jpg";
      cardNumber = "II The High Priestess";
      break;
    case 3:
      cardPic =
        "https://gfx.tarot.com/images/site/decks/universal-waite/mid_size/3.jpg";
      cardNumber = "III The Empress";
      break;
    case 4:
      cardPic =
        "https://gfx.tarot.com/images/site/decks/universal-waite/mid_size/4.jpg";
      cardNumber = "IV The Emperor";
      break;
    case 5:
      cardPic =
        "https://gfx.tarot.com/images/site/decks/universal-waite/mid_size/5.jpg";
      cardNumber = "V The Hierophant";
      break;
    case 6:
      cardPic =
        "https://gfx.tarot.com/images/site/decks/universal-waite/mid_size/6.jpg";
      cardNumber = "VI The Lovers";
      break;
    case 7:
      cardPic =
        "https://gfx.tarot.com/images/site/decks/universal-waite/mid_size/7.jpg";
      cardNumber = "VII The Chariot";
      break;
    case 8:
      cardPic =
        "https://gfx.tarot.com/images/site/decks/universal-waite/mid_size/11.jpg";
      cardNumber = "VIII Justice";
      break;
    case 9:
      cardPic =
        "https://gfx.tarot.com/images/site/decks/universal-waite/mid_size/9.jpg";
      cardNumber = "IX The Hermit";
      break;
    case 10:
      cardPic =
        "https://gfx.tarot.com/images/site/decks/universal-waite/mid_size/10.jpg";
      cardNumber = "X Wheel of Fortune";
      break;
    case 11:
      cardPic =
        "https://gfx.tarot.com/images/site/decks/universal-waite/mid_size/8.jpg";
      cardNumber = "XI Strength";
      break;
    case 12:
      cardPic =
        "https://gfx.tarot.com/images/site/decks/universal-waite/mid_size/12.jpg";
      cardNumber = "XII The Hanged Man";
      break;
    case 13:
      cardPic =
        "https://gfx.tarot.com/images/site/decks/universal-waite/mid_size/13.jpg";
      cardNumber = "XIII Death";
      break;
    case 14:
      cardPic =
        "https://gfx.tarot.com/images/site/decks/universal-waite/mid_size/14.jpg";
      cardNumber = "XIV Temperance";
      break;
    case 15:
      cardPic =
        "https://gfx.tarot.com/images/site/decks/universal-waite/mid_size/15.jpg";
      cardNumber = "XV The Devil";
      break;
    case 16:
      cardPic =
        "https://gfx.tarot.com/images/site/decks/universal-waite/mid_size/16.jpg";
      cardNumber = "XVI The Tower";
      break;
    case 17:
      cardPic =
        "https://gfx.tarot.com/images/site/decks/universal-waite/mid_size/17.jpg";
      cardNumber = "XVII The Star";
      break;
    case 18:
      cardPic =
        "https://gfx.tarot.com/images/site/decks/universal-waite/mid_size/18.jpg";
      cardNumber = "XVIII The Moon";
      break;
    case 19:
      cardPic =
        "https://gfx.tarot.com/images/site/decks/universal-waite/mid_size/19.jpg";
      cardNumber = "XIX The Sun";
      break;
    case 20:
      cardPic =
        "https://gfx.tarot.com/images/site/decks/universal-waite/mid_size/20.jpg";
      cardNumber = "XX Judgement";
      break;
    case 21:
      cardPic =
        "https://gfx.tarot.com/images/site/decks/universal-waite/mid_size/21.jpg";
      cardNumber = "XXI The World";
      break;
    case 22:
      cardPic =
        "https://gfx.tarot.com/images/site/decks/universal-waite/mid_size/0.jpg";
      cardNumber = "XXII The Fool";
      break;
    default:
      cardPic =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhQ3DQrdc_mhlpfmsELO0QXiS4JfZo84Uttg&usqp=CAU";
      cardNumber = "submit birthdate to see the coresponding card";
      break;
  }

  return (
    <>
    <div id="lifeCardDiv">
      <Figure className="lifeCard">
        <h5 className="lifeCardTitle">{position}</h5>
        <Figure.Image
          className="lifeCardPic"
          src={cardPic}
          alt="card depiction"
        />
        <Figure.Caption className="lifeCardNumber">
          <strong>{cardNumber}</strong>
        </Figure.Caption>
      </Figure>
      </div>
    </>
  );
}
