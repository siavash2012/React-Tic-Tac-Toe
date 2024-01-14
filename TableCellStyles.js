 const tdStyle = {
        fontSize: "2em",
        border: "0.1em solid teal",
        width: "2em",
        height: "2em"
    }

const tdTopLeftStyle = {
        fontSize: "2em",
       border: "0.1em solid teal",
        borderTop:"0px",
        borderLeft:"0px",
        width: "2em",
        height: "2em"
    }

const tdTopRightStyle = {
        fontSize: "2em",
        border: "0.1em solid teal",
        borderTop:"0px",
        borderRight:"0px",
        width: "2em",
        height: "2em"
    }

const tdBottomLeftStyle = {
        fontSize: "2em",
        border: "0.1em solid teal",
        borderBottom:"0px",
        borderLeft:"0px",
        width: "2em",
        height: "2em"
    }

    const tdBottomRightStyle = {
        fontSize: "2em",
        border: "0.1em solid teal",
        borderBottom:"0px",
        borderRight:"0px",
        width: "2em",
        height: "2em"
    }

    const tdTopStyle = {
        fontSize: "2em",
        border: "0.1em solid teal",
        borderTop:"0px",
        width: "2em",
        height: "2em"
    }

    const tdBottomStyle = {
        fontSize: "2em",
        border: "0.1em solid teal",
        borderBottom:"0px",
        width: "2em",
        height: "2em"
    }

    const tdLeftStyle = {
        fontSize: "2em",
        border: "0.1em solid teal",
        borderLeft:"0px",
        width: "2em",
        height: "2em"
    }

    const tdRightStyle = {
        fontSize: "2em",
        border: "0.1em solid teal",
        borderRight:"0px",
        width: "2em",
        height: "2em"
    }

    const tdContentStyle = {
        height: "2em",
        width: "2em",
        display: "grid",
        gridTemplateRows: "repeat(21,1fr)",
        gridTemplateColumns: "repeat(21,1fr)"
    }

   const tdContentLetterStyle = {
        gridArea: "1/1/span 21/span 21",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }

    const tdWinnerColumnStyle = {
        gridArea: "1/11/span 21/span 1",
        backgroundColor: "teal",
        visibility:"hidden"
    }

    const tdWinnerRowStyle = {
        gridArea: "11/1/span 1/span 21",
        backgroundColor: "teal",
        visibility:"hidden"
    }

    const tdLeftDiagonalWinnerLineStyle = {
        gridArea: "1/1/span 21/span 21",
        backgroundColor: "teal",
        clipPath: "polygon(0 0,3.36% 0,100% 96.64%,100% 100%,96.64% 100%,0 3.36%)",
        visibility:"hidden"
    }
    const tdRightDiagonalWinnerLineStyle = {
        gridArea: "1/1/span 21/span 21",
        backgroundColor: "teal",
        clipPath: "polygon(100% 0,100% 3.36%,3.36% 100%,0 100%,0 96.64%,96.64% 0)",
        visibility:"hidden"
    }


    export{tdStyle,tdContentStyle,tdContentLetterStyle,tdWinnerRowStyle,tdWinnerColumnStyle,
    tdLeftDiagonalWinnerLineStyle,tdRightDiagonalWinnerLineStyle,tdTopLeftStyle,
    tdTopRightStyle,tdBottomLeftStyle,tdBottomRightStyle,tdTopStyle,tdBottomStyle,tdLeftStyle,tdRightStyle}

    