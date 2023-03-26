import { Button } from "react-bootstrap";
import LifeGrid from "./LifeGrid";

export default function Grid({
  birthDate,
  dateSubmitted,
  goToPortrait,
  handleGoToDateForm,
}) {
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
      {dateSubmitted ? (
        <div id="gridSpan" ref={goToPortrait}>
          <h4>
            TPP
            <br />
            for {birthDate}
          </h4>

          <Button variant="light" onClick={handleGoToDateForm}>
            Back do date
          </Button>

          <LifeGrid
            first={first}
            second={second}
            third={third}
            fourth={fourth}
            fifth={fifth}
            sixth={sixth}
            seventh={seventh}
            eighth={eighth}
            twelve={twelve}
            thirteenth={thirteenth}
            fourteenth={fourteenth}
          />

          <Button variant="light" onClick={handleGoToDateForm}>
            Back do date
          </Button>
        </div>
      ) : null}
    </>
  );
}
