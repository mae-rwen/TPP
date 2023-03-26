import Figure from "react-bootstrap/Figure";

export default function SingleCard({ number, position }) {
  let cardPic;
  let cardNumber;
  switch (number) {
    case 1:
      cardPic =
        "https://gfx.tarot.com/images/site/decks/universal-waite/mid_size/1.jpg";
      cardNumber = "I";
      break;
    case 2:
      cardPic =
        "https://gfx.tarot.com/images/site/decks/universal-waite/mid_size/2.jpg";
      cardNumber = "II";
      break;
    case 3:
      cardPic =
        "https://gfx.tarot.com/images/site/decks/universal-waite/mid_size/3.jpg";
      cardNumber = "III";
      break;
    case 4:
      cardPic =
        "https://gfx.tarot.com/images/site/decks/universal-waite/mid_size/4.jpg";
      cardNumber = "IV";
      break;
    case 5:
      cardPic =
        "https://gfx.tarot.com/images/site/decks/universal-waite/mid_size/5.jpg";
      cardNumber = "V";
      break;
    case 6:
      cardPic =
        "https://gfx.tarot.com/images/site/decks/universal-waite/mid_size/6.jpg";
      cardNumber = "VI";
      break;
    case 7:
      cardPic =
        "https://gfx.tarot.com/images/site/decks/universal-waite/mid_size/7.jpg";
      cardNumber = "VII";
      break;
    case 8:
      cardPic =
        "https://gfx.tarot.com/images/site/decks/universal-waite/mid_size/8.jpg";
      cardNumber = "VIII";
      break;
    case 9:
      cardPic =
        "https://gfx.tarot.com/images/site/decks/universal-waite/mid_size/9.jpg";
      cardNumber = "IX";
      break;
    case 10:
      cardPic =
        "https://gfx.tarot.com/images/site/decks/universal-waite/mid_size/10.jpg";
      cardNumber = "X";
      break;
    case 11:
      cardPic =
        "https://gfx.tarot.com/images/site/decks/universal-waite/mid_size/11.jpg";
      cardNumber = "XI";
      break;
    case 12:
      cardPic =
        "https://gfx.tarot.com/images/site/decks/universal-waite/mid_size/12.jpg";
      cardNumber = "XII";
      break;
    case 13:
      cardPic =
        "https://gfx.tarot.com/images/site/decks/universal-waite/mid_size/13.jpg";
      cardNumber = "XIII";
      break;
    case 14:
      cardPic =
        "https://gfx.tarot.com/images/site/decks/universal-waite/mid_size/14.jpg";
      cardNumber = "XIV";
      break;
    case 15:
      cardPic =
        "https://gfx.tarot.com/images/site/decks/universal-waite/mid_size/15.jpg";
      cardNumber = "XV";
      break;
    case 16:
      cardPic =
        "https://gfx.tarot.com/images/site/decks/universal-waite/mid_size/16.jpg";
      cardNumber = "XVI";
      break;
    case 17:
      cardPic =
        "https://gfx.tarot.com/images/site/decks/universal-waite/mid_size/17.jpg";
      cardNumber = "XVII";
      break;
    case 18:
      cardPic =
        "https://gfx.tarot.com/images/site/decks/universal-waite/mid_size/18.jpg";
      cardNumber = "XVIII";
      break;
    case 19:
      cardPic =
        "https://gfx.tarot.com/images/site/decks/universal-waite/mid_size/19.jpg";
      cardNumber = "XIX";
      break;
    case 20:
      cardPic =
        "https://gfx.tarot.com/images/site/decks/universal-waite/mid_size/20.jpg";
      cardNumber = "XX";
      break;
    case 21:
      cardPic =
        "https://gfx.tarot.com/images/site/decks/universal-waite/mid_size/21.jpg";
      cardNumber = "XXI";
      break;
    case 22:
      cardPic =
        "https://gfx.tarot.com/images/site/decks/universal-waite/mid_size/0.jpg";
      cardNumber = "XXII";
      break;
    default:
      cardPic =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhQ3DQrdc_mhlpfmsELO0QXiS4JfZo84Uttg&usqp=CAU";
      cardNumber = "0";
      break;
  }

  return (
    <>
    <div id="singleCardDiv">
      <Figure className="singleCard">
        <Figure.Caption className="cardPosition">{position}</Figure.Caption>
        <Figure.Image className="cardPic" src={cardPic} alt="card depiction" />
        <Figure.Caption className="text-center cardNumber">
          <strong>{cardNumber}</strong>
        </Figure.Caption>
      </Figure>
      </div>
    </>
  );
}
