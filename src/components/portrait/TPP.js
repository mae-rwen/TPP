import DateForm from "./DateForm";
import Grid from "./Grid";
import { useRef, useState } from "react";
import { Button } from "react-bootstrap";

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

  return (
    <>
      <div id="tppHeader">
        <h3>✨ Tarot ✨</h3>
        <h5>Psychological Portrait</h5>
        <p>
          It's used to examine and analyze the innate potentials of a given
          individual, their talents and predispositions, the influences they
          were subjected to in childhood and to which they are susceptible in
          adult life. The best ways to realize emerging opportunities,
          significant and turning moments in life, as well as those hidden in
          the subconscious fears, complexes or, as it is called in esoteric
          language - things to work through. Using the archetypes written in the
          Major Arcana of the Tarot, substituting the appropriate cards for the
          numbers resulting from the date of birth allows one to see something
          like a genetic code with which a person comes into the world.
        </p>
        <Button variant="danger" onClick={handleGoToDateForm}>
          START
        </Button>
      </div>

      <div id="dateFormSpan" ref={goToDateForm}>
        <DateForm
          birthDate={birthDate}
          setBirthDate={setBirthDate}
          dateSubmitted={dateSubmitted}
          setDateSubmitted={setDateSubmitted}
          handleGoToPortrait={handleGoToPortrait}
        />
      </div>

      <Grid
        birthDate={birthDate}
        dateSubmitted={dateSubmitted}
        goToPortrait={goToPortrait}
        handleGoToDateForm={handleGoToDateForm}
      />
    </>
  );
}
