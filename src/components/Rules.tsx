import React, { FunctionComponent } from "react";

const Rules: FunctionComponent<{ closeShowRulesHandler: any }> = (props: {
  closeShowRulesHandler: any;
}) => {
  return (
    <div className="rulesoverlay" onClick={props.closeShowRulesHandler}>
      <div className="rulesmodal">
        <div className="close">x</div>
        <div className="therules">
            <h3>RULES</h3>
          <p>
            It is all guess work for fun. Nothing else. The system picks from
            the different hand signs (paper, scissors and rock) at random.
          </p>
          <p>
            Your goal is to attempt to guess what the system will pick and
            thereby score more points.
          </p>
          <p>
            You lose one point for every wrong guess, while you gain one for
            correct guess.
          </p>
          <p>
            You can send your friends link to the app to play and see who is
            more lucky at the moment, just for fun.
          </p>
          <p>To restart the game, simply refresh the browser.</p>
        </div>
      </div>
    </div>
  );
};

export default Rules;
