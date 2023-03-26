import SingleCard from "./SingleCard";
export default function ShadowGrid({ A, B, C, D, E, F, G1, G2, H }) {
  return (
    <>
      <div id="shadowGrid">
        <div id="shadow">
          <div className="shadowRows">
            <SingleCard number={A} position={"p.A"} />
          </div>
          <div className="shadowRows">
            <SingleCard number={B} position={"p.B"} />
            <SingleCard number={C} position={"p.C"} />
          </div>
          <div className="shadowRows">
            <SingleCard number={D} position={"p.D"} />
            <SingleCard number={E} position={"p.E"} />
            <SingleCard number={F} position={"p.F"} />
          </div>
          <div className="shadowRows" id="positionH">
            <SingleCard number={H} position={"p.H"} />
          </div>
        </div>

        <div id="shadowSide">
          <SingleCard number={G1} position={"p.G1"} />
          <span id="positionG2">
            <SingleCard number={G2} position={"p.G2"} />
          </span>
        </div>
      </div>
    </>
  );
}
