export interface IGameState {
    stage: "step1" | "step2" | "step3" | "step4win" | "step4lose",
    turn: 0 | 1;
    zerowin: boolean;
    onewin: boolean;
    zerochoice: string;
    onechoice: string;
}


export interface IProp {
    stage: "step1" | "step2" | "step3" | "step4win" | "step4lose";
    setStage: React.Dispatch<React.SetStateAction<"step1" | "step2" | "step3" | "step4win" | "step4lose">>;
    turn: 0 | 1;
    setTurn: React.Dispatch<React.SetStateAction<0 | 1>>;
    zerowin: boolean;
    setZerowin: React.Dispatch<React.SetStateAction<boolean>>;
    onewin: boolean;
    setOneWin: React.Dispatch<React.SetStateAction<boolean>>;
    zerochoice: string;
    nextStep: any;
    setNextStep:React.Dispatch<React.SetStateAction<any>>;
    setZerochoice: React.Dispatch<React.SetStateAction<string>>;
    onechoice: string;
    setOnechoice: React.Dispatch<React.SetStateAction<string>>;
    score: number;
    setScore: React.Dispatch<React.SetStateAction<number>>;
    openShowRulesHandler: any
}


