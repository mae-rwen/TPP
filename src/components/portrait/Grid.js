import { Card } from "react-bootstrap";
import LifeCard from "./LifeCards";
import SingleCard from "./SingleCard";

export default function Grid({ birthDate }) {
  const [year, month, day] = birthDate.split("-");

  // get sum of cards between 1-22
  function getCard(...args) {
    let sum = 0;

    for (let arg of args) sum += arg;

    while (sum > 22) {
      sum -= 22;
    }
    return sum;
  }

  // get life card
  const getLifeCard = () => {
    let num = birthDate
      .split("")
      .filter((val) => val !== "-")
      .reduce((acc, curr) => {
        return acc + Number(curr);
      }, 0);
    while (num > 22) {
      num -= 22;
    }
    return num;
  };
  getLifeCard();

  const theLifeCard = getLifeCard(parseInt());

  //  get 1st and 2nd position (from day and month)
  function positionFirstAndSecond(number) {
    if (number <= 22) {
      return number;
    } else {
      return number - 22;
    }
  }
  // get 3rd position (from a year)
  function thirdPosition(number) {
    let getSum = (number) => {
      return String(number)
        .split("")
        .reduce((acc, curr) => {
          return acc + Number(curr);
        }, 0);
    };

    let getFinal = getSum(number);
    if (getFinal <= 22) {
      return getFinal;
    } else {
      return getFinal - 22;
    }
  }

  // >>>>>>> 1,2,3 positions <<<<<<<
  const first = positionFirstAndSecond(parseInt(day));
  const second = positionFirstAndSecond(parseInt(month));
  const third = thirdPosition(parseInt(year));

  // >>>>>>> 4,5,6 positions <<<<<<<
  const fourth = getCard(first, second);
  const fifth = getCard(second, third);
  const sixth = getCard(fourth, fifth);

  // >>>>>>> 7,8,12,13,14 positions <<<<<<<
  const seventh = getCard(first, fifth);
  const eighth = getCard(second, sixth);
  const twelve = getCard(seventh, eighth);
  const thirteenth = getCard(first, fourth, sixth);
  const fourteenth = getCard(third, fifth, sixth);

  return (
    <>
      <div id="lifeCard">
        <LifeCard number={theLifeCard} position={"Life card"} />
      </div>

      <div id="gridOne" className="p-3">
        <div id="doniczka">
          <div className="doniczkasRows">
            <SingleCard number={thirteenth} position={"p.13"} />
            <SingleCard number={fourteenth} position={"p.14"} />
          </div>
          <div className="doniczkasRows">
            <SingleCard number={first} position={"p.1"} />
            <SingleCard number={second} position={"p.2"} />
            <SingleCard number={third} position={"p.3"} />
          </div>
          <div className="doniczkasRows">
            <SingleCard number={fourth} position={"p.4"} />
            <SingleCard number={fifth} position={"p.5"} />
          </div>
          <div className="doniczkasRows">
            <SingleCard number={sixth} position={"p.6"} />
          </div>
          <div className="doniczkasRows" id="position8">
            <SingleCard number={eighth} position={"p.8"} />
          </div>
        </div>

        <div id="doniczkasSide">
          <SingleCard number={seventh} position={"p.7"} />
          <span id="position12">
            <SingleCard number={twelve} position={"p.12"} />
          </span>
        </div>
      </div>
    </>
  );
}
