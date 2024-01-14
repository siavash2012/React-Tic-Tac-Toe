import React, { useContext } from "react";


import TableCell from "./TableCell.jsx";
import { GameContext } from "./TicTacToe.jsx"

function Table(props) {

    const gameContext = useContext(GameContext);


    const table = [];
    const style = { borderCollapse: "collapse",fontSize:"18px",background:"lightgreen",boxShadow:"2px 2px 2px 1px teal",borderRadius:"0.5em" }
    for (let i = 0; i < gameContext.rows; ++i) {
        const tr = []
        for (let j = 0; j < gameContext.columns; ++j) {
            tr.push(<TableCell
                row={i} column={j}
                topLeft={i === 0 && j === 0 ? true : false}
                topRight={i === 0 && j === gameContext.columns - 1 ? true : false}
                bottomLeft={i === gameContext.rows - 1 && j === 0 ? true : false}
                bottomRight={i === gameContext.rows - 1 && j === gameContext.columns - 1 ? true : false}
                top={i === 0 ? true : false}
                bottom={i === gameContext.rows - 1 ? true : false}
                left={j === 0 ? true : false}
                right={j === gameContext.columns - 1 ? true : false}
                addToTableArray={props.addToTableArray} />)
        }
        table.push(<tr>{tr}</tr>)
    }
    return <table style={style}>{table}</table>
}


export default Table;