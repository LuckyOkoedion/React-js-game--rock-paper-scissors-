import React, { FunctionComponent } from "react";
import { IProp } from "../interfaces/IGameState";
import Footer from "./Footer";
import Header from "./Header";
import bgTriangle from "../assets/bg-triangle.svg";
import paper from "../assets/icon-paper.svg";
import scissors from "../assets/icon-scissors.svg";
import rocks from "../assets/icon-rock.svg";

const Step1: FunctionComponent<IProp> = (props: IProp) => {
  const handleChoice = (choice: string) => {
    props.setOnechoice(choice);
    props.setTurn(0);

    let options = [
      "paper",
      "paper",
      "paper",
      "paper",
      "scissors",
      "rock",
      "paper",
      "scissors",
      "rock",
      "rock",
      "rock",
      "paper",
      "scissors",
      "rock",
      "paper",
      "scissors",
      "rock",
      "rock",
      "paper",
      "scissors",
      "scissors",
      "scissors",
    ];
    let comPick = options[(Math.random() * options.length) | 0];
    props.setZerochoice(comPick);

    if (choice === comPick) {
      let newScore = props.score + 1;
      props.setScore(newScore);
      props.setOneWin(true);
      props.setZerowin(false);
    } else {
      let newScoreNeg = props.score - 1;
      props.setScore(newScoreNeg);
      props.setOneWin(false);
      props.setZerowin(true);
    }

    props.setStage("step2");
  };
  return (
    <div className="container">
      <Header score={props.score} />
      <div className="board1">
        <img src={bgTriangle} alt="" className="board1bg" />
      </div>
      <div className="paper playbtn" onClick={() => handleChoice("paper")}>
        <img src={paper} alt="" />
      </div>
      <div
        className="scissors playbtn"
        onClick={() => handleChoice("scissors")}
      >
        <img src={scissors} alt="" />
      </div>
      <div className="rock playbtn" onClick={() => handleChoice("rock")}>
        <img src={rocks} alt="" />
      </div>
      <Footer openShowRulesHandler={props.openShowRulesHandler} />
    </div>
  );
};

export default Step1;
