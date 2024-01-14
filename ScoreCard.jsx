import React, { useContext } from "react";

import { GameContext } from "./TicTacToe.jsx"


const scoreCardStyle = {
    //fontSize: "18px",
    display: "inline-grid",
    boxShadow: "2px 2px 2px 1px teal",
    gridTemplate: ` "round round round round round" 1em
                    "hor1 hor1 hor1 hor1 hor1" 0.25em
                    "xScore vr1 oScore vr2 tie" 1.15em
                    "hor2 hor2 hor2 hor2 hor2" 0.25em
                    "turn turn turn turn turn" 1em / 5em 0.25em 5em 0.25em 5em`,

    alignItems: "center",
    justifyItems: "center",
    rowGap: "0.5em",
    columnGap: "1em",
    backgroundColor: "lightgreen",
    padding: "0.75em",
    borderRadius: "0.5em"
}





function ScoreCard() {
    const gameContext = useContext(GameContext);
    return (
        <div style={scoreCardStyle}>
            <div style={{ gridArea: "round" }}>{gameContext.round == 0 ? "Input Rows and Columns" : "Round " + gameContext.round}</div>
            <div style={{ gridArea: "hor1", background: "teal", width: "19em", height: "100%" }}></div>
            <div style={{ gridArea: "xScore" }}>X Wins: {gameContext.xWins}</div>
            <div style={{ gridArea: "vr1", background: "teal", height: "200%", width: "0.25em" }}></div>
            <div style={{ gridArea: "oScore" }}>O Wins: {gameContext.oWins}</div>
            <div style={{ gridArea: "vr2", background: "teal", height: "200%", width: "0.25em" }}></div>
            <div style={{ gridArea: "tie" }}>Ties: {gameContext.ties}</div>
            <div style={{ gridArea: "hor2", background: "teal", width: "19em", height: "100%" }}></div>
            <div style={{ gridArea: "turn" }}>{gameContext.round == 0 || gameContext.gameOver? "Start New Game" : gameContext.cellContent + " Plays Now"} </div>
        </div>
    )
}

export default ScoreCard;



