import React, { FunctionComponent} from "react";
import { IProp } from "../interfaces/IGameState";
import Footer from "./Footer";
import Header from "./Header";
import paper from "../assets/icon-paper.svg";
import scissors from "../assets/icon-scissors.svg";
import rock from "../assets/icon-rock.svg";

const Step2: FunctionComponent<IProp> = (props: IProp) => {
  let dynamicHousepickClassName = "housepicked" + props.zerochoice + "img";

  let dynamicHouseImage;
  let dynamicClassName;
  let dynamicImage;

  if (props.onechoice === "paper") {
    dynamicClassName = "youpickedpaperimg";
    dynamicImage = paper;
  }

  if (props.onechoice === "scissors") {
    dynamicClassName = "youpickedscissorsimg";
    dynamicImage = scissors;
  }

  if (props.onechoice === "rock") {
    dynamicClassName = "youpickedrockimg";
    dynamicImage = rock;
  }

  if (props.zerochoice === "paper") {
    dynamicHouseImage = paper;
  }

  if (props.zerochoice === "scissors") {
    dynamicHouseImage = scissors;
  }

  if (props.zerochoice === "rock") {
    dynamicHouseImage = rock;
  }

  const playAgain = () => {
    props.setStage("step1");
  };

  return (
    <div className="container">
      <Header score={props.score} />
      <div className="pickedCallLeft">You picked</div>
      <div className="pickedCallRight">The house picked</div>
      <div className="board2">
        <div className="boardleft">
          <div className={dynamicClassName}>
            <img src={dynamicImage} alt="" />
          </div>
        </div>
        {props.onewin ? (
          <div className="boardmiddle">
            <div className="scorecall">You win</div>
            <div className="playagain1" onClick={playAgain}>
              Play Again
            </div>
          </div>
        ) : (
          <div className="boardmiddle">
            <div className="scorecall">You lose</div>
            <div className="playagain2" onClick={playAgain}>
              Play Again
            </div>
          </div>
        )}
        <div className="boardright">
          <div className={dynamicHousepickClassName}>
            <img src={dynamicHouseImage} alt="" />
          </div>
        </div>
      </div>
      <Footer openShowRulesHandler={props.openShowRulesHandler} />
    </div>
  );
};

export default Step2;
