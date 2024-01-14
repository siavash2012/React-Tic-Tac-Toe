import React, { useState, createContext } from "react";
import Form from "./Form.jsx";
import Table from "./Table.jsx";
import ScoreCard from "./ScoreCard.jsx"


const GameContext = createContext();



function TicTacToe() {

    const [gameContext, setGameContext] = useState({
        rows: 0,
        columns: 0,
        round: 0,
        gameOver: false,
        winnerArray: [],
        cellContent: "X",
        tableArray: [],
        xWins: 0,
        oWins: 0,
        ties: 0
    });


    function addToTableArray(id) {
        let row = id.split(",")[0];
        let column = id.split(",")[1];
        gameContext.tableArray[row][column] = gameContext.cellContent;
        if (checkWinningRow()) {
            return;
        }
        else if (checkWinningColumn()) {
            return;
        }
        else if (checkWinningLeftDiagonal()) {
            return;
        }
        else if (checkWinningRightDiagonal()) {
            return;
        }

        else if (checkTie()) {
            setGameContext({
                ...gameContext,
                cellContent: gameContext.cellContent === "X" ? "O" : "X",
                ties: gameContext.ties + 1,
                gameOver: true
            }
            );
            retun;
        }
        else {
            setGameContext({ ...gameContext, cellContent: gameContext.cellContent === "X" ? "O" : "X" });
        }
    }


function setWinningCells(winnerArray) {
    setGameContext({
        ...gameContext,
        gameOver: true,
        winnerArray: winnerArray,
        xWins: gameContext.cellContent == "X" ? gameContext.xWins + 1 : gameContext.xWins,
        oWins: gameContext.cellContent == "O" ? gameContext.oWins + 1 : gameContext.oWins
    });
    //winnerArray.forEach(id => document.getElementById(id).style.visibility = "visible");
}


function checkTie() {
    let count = 0;
    for (let i = 0; i < gameContext.rows; ++i) {

        for (let j = 0; j < gameContext.columns; ++j) {
            if (gameContext.tableArray[i][j] == 'X' || gameContext.tableArray[i][j] == 'O') { count += 1; }
        }
    }
    if (count == gameContext.rows * gameContext.columns) { return true }
}



function checkWinningRow() {
    var xArray = [];
    var oArray = [];

    for (let i = 0; i < gameContext.rows; ++i) {

        for (let j = 0; j < gameContext.columns; ++j) {

            if (gameContext.tableArray[i][j] == 'X') { xArray.push(`${i},${j},WR`); }
            else if (gameContext.tableArray[i][j] == 'O') { oArray.push(`${i},${j},WR`) }
        }

        if (xArray.length == gameContext.columns) { setWinningCells(xArray); return true }
        else if (oArray.length == gameContext.columns) { setWinningCells(oArray); return true }
        else { xArray = []; oArray = [] }
    }
}

function checkWinningColumn() {
    var xArray = [];
    var oArray = [];

    for (let i = 0; i < gameContext.columns; ++i) {

        for (let j = 0; j < gameContext.rows; ++j) {

            if (gameContext.tableArray[j][i] == 'X') { xArray.push(`${j},${i},WC`) }
            else if (gameContext.tableArray[j][i] == 'O') { oArray.push(`${j},${i},WC`) }
        }

        if (xArray.length == gameContext.rows) { setWinningCells(xArray); return true }
        else if (oArray.length == gameContext.rows) { setWinningCells(oArray); return true }
        else { xArray = []; oArray = [] }
    }
}

function checkWinningLeftDiagonal() {
    let max = gameContext.rows < gameContext.columns ? gameContext.rows : gameContext.rows > gameContext.columns ? gameContext.columns : gameContext.rows;

    for (let i = 0; i < gameContext.rows; ++i) {
        for (let j = 0; j < gameContext.columns; ++j) {
            let xArray = [];
            let oArray = [];
            let step = 0;
            while (true) {
                if (i + step == gameContext.rows || j + step == gameContext.columns) { break; }
                if (gameContext.tableArray[i + step][j + step] == "X") { xArray.push(`${i + step},${j + step},WLD`) }
                else if (gameContext.tableArray[i + step][j + step] == "O") { oArray.push(`${i + step},${j + step},WLD`) }
                step += 1;
            }

            if (xArray.length == max) { setWinningCells(xArray); return true }
            else if (oArray.length == max) { setWinningCells(oArray); return true }
        }

    }
}


function checkWinningRightDiagonal() {
    let max = gameContext.rows < gameContext.columns ? gameContext.rows : gameContext.rows > gameContext.columns ? gameContext.columns : gameContext.rows;

    for (let i = 0; i < gameContext.rows; ++i) {
        for (let j = gameContext.columns; j >= 0; --j) {
            let xArray = [];
            let oArray = [];
            let step = 0;
            while (true) {
                if (i + step == gameContext.rows || j - step < 0) { break; }
                if (gameContext.tableArray[i + step][j - step] == "X") { xArray.push(`${i + step},${j - step},WRD`) }
                else if (gameContext.tableArray[i + step][j - step] == "O") { oArray.push(`${i + step},${j - step},WRD`) }
                step += 1;
            }

            if (xArray.length == max) { setWinningCells(xArray); return true }
            else if (oArray.length == max) { setWinningCells(oArray); return true }
        }

    }
}



return (

    <GameContext.Provider value={gameContext}>

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", rowGap: "1em" }}>
            <ScoreCard />
            <Form setGameContext={setGameContext} />
            <Table addToTableArray={addToTableArray} />
        </div>
    </GameContext.Provider>
);
}

export { TicTacToe, GameContext };