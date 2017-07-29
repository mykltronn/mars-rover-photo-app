export const pageLayoutStyles =
{
    jumbotron: {
        width: "100%",
        height: "130px",
        marginBottom: "20",
        position: "absolute",
        top: "0",
        backgroundColor: "orangered",
        borderRadius: "0px 0px 5px 5px",
        jumboTitle: {
            padding: "10",
            fontFamily: "sans serif",
            fontSize: "36",
            textAlign: "center",
            color: "white",
            textTransform: "uppercase"
        },
        jumboSubTitle: {
            fontFamily: "sans serif",
            fontSize: "24",
            textAlign: "center",
            color: "white"
        }
    },
    footer: {
        width: "100%",
        height: "50px",
        position: "fixed",
        bottom: "0",
        backgroundColor: "orangered",
        borderRadius: "5px 5px 0px 0px",
        footerText: {
            fontFamily: "sans serif",
            fontSize: "24",
            textTransform: "uppercase",
            textAlign: "center",
            verticalAlign: "middle",
            color: "white",
            marginTop: "5px"
        }
    }
}

export const getImageFormSyles =
{
    div: {
        width: "100%",
        position: "absolute",
        top: "130px",
        margin: "50px 20px",
    },
    formsDiv: {
        display: "flex",
        flexDirection: "row"
    },
    form: {
        width: "50%",
        display: "flex",
        flexDirection: "column",
        padding: "20px 80px 20px 20px"
    },
    formDiv: {
        display: "flex",
        justifyContent: "space-between",
        margin: "5px"
    },
    input: {
        width: "100px",
        padding: "5px 0px 5px 15px"
    },
    imageDisplay: {
        ul: {
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
        },
        li: {
            width: "30vw",
            margin: "50px 20px",
            listStyle: "none"
        },
        img: {
            width: "inherit",
        }
    }
}

export const RoverMissionStyles =
{
    main: {
        width: "50%",
        padding: "20px"
    },
    formDiv: {
        width: "60%",
        display: "flex",
        justifyContent: "space-between",
        margin: "5px"
    },
    mission: {
        margin: "20px 20px"
    },
    li: {
        margin: "5px 0px 5px 20px"
    }
}
