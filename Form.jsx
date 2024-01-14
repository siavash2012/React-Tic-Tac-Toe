import React, { useRef, useContext } from "react";

import { GameContext } from "./TicTacToe.jsx"

function Form(props) {
    const gameContext = useContext(GameContext);

    const rowRef = useRef(null);
    const colRef = useRef(null);

    const divStyle = {
        fontSize:"14px",
        display: "inline-grid",
        boxShadow: "2px 2px 2px 1px teal",
        background: "lightgreen",
        gridTemplate: `"label1 rows label2 columns start reset" 4em/2em 3em 3.5em 3em 4em 4em`,
        columnGap: "0.75em",
        width: "25em",
        borderRadius: "0.5em",
        justifyContent: "center",
        alignContent: "center"
    }

    const startButtonStyle = { gridArea: "start", fontSize: "1em", padding: "0.25em", alignSelf: "center" };
    const resetButtonStyle = { gridArea: "reset", fontSize: "1em", padding: "0.25em", alignSelf: "center" };
    const rowInputStyle = { gridArea: "rows", fontSize: "1em", alignSelf: "center", padding: "0.15em", marginTop: "1.25em" };
    const colInputStyle = { gridArea: "columns", fontSize: "1em", alignSelf: "center", padding: "0.15em", marginTop: "1.25em" };



    function createTableArray(tableArray, rows, columns) {
        for (let i = 0; i < rows; ++i) {
            tableArray.push(Array(columns));
        }
    }

    function startClick() {
        const tableArray = [];
        createTableArray(tableArray, rowRef.current.value, colRef.current.value);
        props.setGameContext({
            ...gameContext, rows: rowRef.current.value, columns: colRef.current.value, round: Number(gameContext.round) + 1,
            gameOver: false, winnerArray: [], tableArray: tableArray
        });
    }

    function resetClick() {
        rowRef.current.value = "";
        colRef.current.value = "";
        props.setGameContext({
            ...gameContext,
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
    }

    return (
        <div style={divStyle}>
            <label htmlFor="rows" style={{ gridArea: "label1", alignSelf: "center" }}>Rows</label>
            <input id="rows" autoComplete="off" style={rowInputStyle} ref={rowRef} onChange={() => this.value = rowRef.current.value} />
            <label htmlFor="columns" style={{ gridArea: "label2", alignSelf: "center" }}>Columns</label>
            <input id="columns" autoComplete="off" style={colInputStyle} ref={colRef} onChange={() => this.value = colRef.current.value} />
            <button style={startButtonStyle} onClick={startClick}>Start</button>
            <button style={resetButtonStyle} onClick={resetClick}>Reset</button>
        </div>
    );
}

export default Form;
