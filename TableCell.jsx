import React, { useState, useEffect, useContext } from "react";

import { GameContext } from "./TicTacToe.jsx"

import {
    tdStyle, tdContentStyle, tdContentLetterStyle,
    tdWinnerRowStyle, tdWinnerColumnStyle, tdLeftDiagonalWinnerLineStyle,
    tdRightDiagonalWinnerLineStyle, tdTopLeftStyle,
    tdTopRightStyle, tdBottomLeftStyle, tdBottomRightStyle, tdTopStyle, tdBottomStyle,
    tdLeftStyle, tdRightStyle
} from "./TableCellStyles.js"

function TableCell(props) {

    const gameContext = useContext(GameContext);

    const [content, setContent] = useState("");
    const id = (`${props.row},${props.column}`)

    useEffect(
        () => {
            setContent("");
        }, [gameContext.round]
    );

    const handleClick = (e) => {
        if (content === "") {
            setContent(gameContext.cellContent);
            props.addToTableArray(e.target.id);
        };
    }

    return <td
        style={props.topLeft ? tdTopLeftStyle : props.topRight ? tdTopRightStyle :
            props.bottomLeft ? tdBottomLeftStyle : props.bottomRight ? tdBottomRightStyle :
                props.top ? tdTopStyle : props.bottom ? tdBottomStyle : props.left ? tdLeftStyle :
                    props.right ? tdRightStyle : tdStyle} >
        <div style={tdContentStyle}>
            <div id={id} style={tdContentLetterStyle} onClick={!gameContext.gameOver ? handleClick : () => { }}>{content}</div>
            <div id={`${id},WR`} style={{ ...tdWinnerRowStyle, visibility: gameContext.winnerArray.includes(`${id},WR`) ? "visible" : "hidden" }}></div>
            <div id={`${id},WC`} style={{ ...tdWinnerColumnStyle, visibility: gameContext.winnerArray.includes(`${id},WC`) ? "visible" : "hidden" }}></div>
            <div id={`${id},WLD`} style={{...tdLeftDiagonalWinnerLineStyle, visibility: gameContext.winnerArray.includes(`${id},WLD`) ? "visible" : "hidden" }}></div>
            <div id={`${id},WRD`} style={{...tdRightDiagonalWinnerLineStyle,visibility: gameContext.winnerArray.includes(`${id},WRD`) ? "visible" : "hidden"}}></div>
        </div>
    </td>


}

export default TableCell;
