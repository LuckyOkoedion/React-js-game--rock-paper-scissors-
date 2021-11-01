import React, {FunctionComponent} from 'react';
import { useState } from 'react';

import './App.css';
import Rules from './components/Rules';
import Step1 from './components/Step1';
import Step2 from './components/Step2';


const App: FunctionComponent = () => {
 

  const [stage, setStage] = useState<"step1" | "step2" | "step3" | "step4win" | "step4lose">("step1");
  const [turn, setTurn] = useState<0 | 1>(0);
  const [zerowin, setZerowin] = useState<boolean>(false);
  const [onewin, setOnewin] = useState<boolean>(false);
  const [zerochoice, setZerochoice] = useState<string>("");
  const [onechoice, setOnechoice] = useState<string>("");
  const [nextStep, setNextStep] = useState<string>("");
  const [score, setScore] = useState<number>(0);
  const [showRules, setShowRules] = useState<boolean>(false);

  const openShowRulesHandler = () => {
    setShowRules(true);
  }

  const closeShowRulesHandler = () => {
    setShowRules(false);
  }

  const renderSwitch = 
  (input:"step1" | "step2" | "step3" | "step4win" | "step4lose") => {

    switch (input) {
        case "step1":
        return <Step1 
          stage = {stage} 
          setStage = {setStage}
          nextStep = {nextStep}
          setNextStep = {setNextStep}
          turn={turn} 
          setTurn={setTurn}
          zerowin={zerowin}
          setZerowin={setZerowin}
          onewin={onewin}
          setOneWin={setOnewin}
          zerochoice={zerochoice}
          setZerochoice={setZerochoice}
          onechoice={onechoice}
          setOnechoice={setOnechoice}
          score={score}
          setScore={setScore}
          openShowRulesHandler={openShowRulesHandler}
          />

        case "step2":
        return <Step2 
        stage = {stage} 
        setStage = {setStage}
        nextStep = {nextStep}
        setNextStep = {setNextStep} 
        turn={turn} 
        setTurn={setTurn}
        zerowin={zerowin}
        setZerowin={setZerowin}
        onewin={onewin}
        setOneWin={setOnewin}
        zerochoice={zerochoice}
        setZerochoice={setZerochoice}
        onechoice={onechoice}
        setOnechoice={setOnechoice}
        score={score}
        setScore={setScore}
        openShowRulesHandler={openShowRulesHandler}
        />

      default:
        return <Step1
        stage = {stage} 
        setStage = {setStage}
        nextStep = {nextStep}
        setNextStep = {setNextStep}
        turn={turn} 
        setTurn={setTurn}
        zerowin={zerowin}
        setZerowin={setZerowin}
        onewin={onewin}
        setOneWin={setOnewin}
        zerochoice={zerochoice}
        setZerochoice={setZerochoice}
        onechoice={onechoice}
        setOnechoice={setOnechoice}
        score={score}
        setScore={setScore}
        openShowRulesHandler={openShowRulesHandler}
         />

    }

  }



  const renderRules = (input: boolean) => {
    if (input) {
      return <Rules closeShowRulesHandler={closeShowRulesHandler} />
    }
  }



  return (
    <div className="App">
     {
     renderRules(showRules)
     }
      {
        renderSwitch(stage)
      }
    </div>
  );
}

export default App;
