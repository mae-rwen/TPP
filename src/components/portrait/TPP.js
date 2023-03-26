import DateForm from "./DateForm";
import Grid from "./Grid";
import { useRef, useState } from "react";
import TppHeader from "./TppHeader";
import LifeCard from "./LifeCards";

export default function TPP() {
  const [birthDate, setBirthDate] = useState("");
  const [dateSubmitted, setDateSubmitted] = useState(false);
  const goToDateForm = useRef(null);
  const goToPortrait = useRef(null);
  const handleGoToDateForm = () => {
    goToDateForm.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleGoToPortrait = () => {
    goToPortrait.current?.scrollIntoView({ behavior: "smooth" });
  };
 
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

  return (
    <>
      <TppHeader handleGoToDateForm={handleGoToDateForm} />

      <DateForm
        birthDate={birthDate}
        setBirthDate={setBirthDate}
        dateSubmitted={dateSubmitted}
        setDateSubmitted={setDateSubmitted}
        handleGoToPortrait={handleGoToPortrait}
        goToDateForm={goToDateForm}
      />

      <LifeCard
        number={dateSubmitted ? theLifeCard : null}
        position={"Life card"}
      />

      <Grid
        birthDate={birthDate}
        dateSubmitted={dateSubmitted}
        goToPortrait={goToPortrait}
        handleGoToDateForm={handleGoToDateForm}
      />
    </>
  );
}
