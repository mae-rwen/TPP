import SingleCard from "./SingleCard";
export default function LifeGrid({
  first,
  second,
  third,
  fourth,
  fifth,
  sixth,
  seventh,
  eighth,
  twelve,
  thirteenth,
  fourteenth,
}) {
  return (
    <>
      <div id="lifeGrid">
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
