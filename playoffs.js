const teamColors = {
    BOS: "#007A33",
    MIA: "#980000",
    NYK: "#db4c0a",
    CLE: "#580303",
    OKC: "#007AC1",
    DEN: "#0E2240",
    LAL: "#47206b",
    MEM: "#5D76A9",
    SAS: "#000000",
    MIN: "#1f5537",
    HOU: "#CE1141",
    LAC: "#da4848",
    MIL: "#00471B",
    PHI: "#c93030",
    IND: "#002D62",
    ORL: "#0077C0",
    GS: "#1D428A",
    SAC: "#3a1663",
    NO: "#65418f"
};
const playoffData = {
    "2025-26": {
        west: {
            firstRound: [
                { team1: "OKC 1", team2: "PHX 8", winner: "OKC 1" },
                { team1: "LAL 4", team2: "HOU 5", winner: "LAL 4" },
                { team1: "DEN 3", team2: "MIN 6", winner: "MIN 6" },
                { team1: "SA 2", team2: "POR 7", winner: "SA 2" }
            ],

            semifinals: [
                { team1: "OKC 1", team2: "LAL 4", winner: "OKC 1" },
                { team1: "MIN 6", team2: "SA 2", winner: "SA 2" }
            ],

            conferenceFinals: [
                { team1: "OKC 1", team2: "SA 2", winner: "SA 2" }
            ],

            champion: "SA 2"
        },

        east: {
            firstRound: [
                { team1: "DET 1", team2: "ORL 8", winner: "DET 1" },
                { team1: "CLE 4", team2: "TOR 5", winner: "CLE 4" },
                { team1: "NY 3", team2: "ATL 6", winner: "NY 3" },
                { team1: "BOS 2", team2: "PHI 7", winner: "PHI 7" }
            ],

            semifinals: [
                { team1: "DET 1", team2: "CLE 4", winner: "CLE 4" },
                { team1: "NY 3", team2: "PHI 7", winner: "NY 3" }
            ],

            conferenceFinals: [
                { team1: "CLE 4", team2: "NY 3", winner: "NY 3" }
            ],

            champion: "NY 3"
        },

        finals: {
            team1: "SA 2",
            team2: "NY 3",
            champion: "NY KNICKS"
        }
    },

    "2024-25": {
        west: {
            firstRound: [
                { team1: "OKC 1", team2: "MEM 8", winner: "OKC 1" },
                { team1: "DEN 4", team2: "LAC 5", winner: "DEN 4" },
                { team1: "LAL 3", team2: "MIN 6", winner: "MIN 6" },
                { team1: "HOU 2", team2: "GSW 7", winner: "GSW 7" }
            ],

            semifinals: [
                { team1: "OKC 1", team2: "DEN 4", winner: "OKC 1" },
                { team1: "MIN 6", team2: "GSW 7", winner: "MIN 6" }
            ],

            conferenceFinals: [
                { team1: "OKC 1", team2: "MIN 6", winner: "OKC 1" }
            ],

            champion: "OKC 1"
        },

        east: {
            firstRound: [
                { team1: "CLE 1", team2: "MIA 8", winner: "CLE 1" },
                { team1: "IND 4", team2: "MIL 5", winner: "IND 4" },
                { team1: "NY 3", team2: "DET 6", winner: "NY 3" },
                { team1: "BOS 2", team2: "ORL 8", winner: "BOS 2" }
            ],

            semifinals: [
                { team1: "CLE 1", team2: "IND 4", winner: "IND 4" },
                { team1: "NY 3", team2: "BOS 2", winner: "NY 3" }
            ],

            conferenceFinals: [
                { team1: "IND 4", team2: "NY 3", winner: "IND 4" }
            ],

            champion: "IND 4"
        },

        finals: {
            team1: "OKC 1",
            team2: "IND 4",
            champion: "OKC THUNDER"
        }
    },

"2023-24": {
        west: {
            firstRound: [
                { team1: "OKC 1", team2: "NO 8", winner: "OKC 1" },
                { team1: "LAC 4", team2: "DAL 5", winner: "DAL 5" },
                { team1: "MIN 3", team2: "PHX 6", winner: "MIN 3" },
                { team1: "DEN 2", team2: "LAL 7", winner: "DEN 2" }
            ],

            semifinals: [
                { team1: "OKC 1", team2: "DAL 5", winner: "DAL 5" },
                { team1: "MIN 3", team2: "DEN 2", winner: "MIN 3" }
            ],

            conferenceFinals: [
                { team1: "DAL 5", team2: "MIN 3", winner: "DAL 5" }
            ],

            champion: "DAL 5"
        },

        east: {
            firstRound: [
                { team1: "BOS 1", team2: "MIA 8", winner: "BOS 1" },
                { team1: "CLE 2", team2: "ORL 7", winner: "CLE 2" },
                { team1: "MIL 3", team2: "IND 6", winner: "IND 6" },
                { team1: "NY 4", team2: "PHI 5", winner: "NY 4" }
            ],

            semifinals: [
                { team1: "BOS 1", team2: "CLE 2", winner: "BOS 1" },
                { team1: "IND 6", team2: "NY 4", winner: "IND 6" }
            ],

            conferenceFinals: [
                { team1: "BOS 1", team2: "IND 6", winner: "BOS 1" }
            ],

            champion: "BOS 1"
        },

        finals: {
            team1: "DAL 5",
            team2: "BOS 1",
            champion: "BOS CELTICS"
        }
    },

    "2022-23": {
        west: {
            firstRound: [
                { team1: "DEN 1", team2: "MIN 8", winner: "DEN 1" },
                { team1: "PHX 4", team2: "LAC 5", winner: "PHX 4" },
                { team1: "SAC 3", team2: "GS 6", winner: "GS 6" },
                { team1: "MEM 2", team2: "LAL 7", winner: "LAL 7" }
            ],

            semifinals: [
                { team1: "DEN 1", team2: "PHX 4", winner: "DEN 1" },
                { team1: "GS 6", team2: "LAL 7", winner: "LAL 7" }
            ],

            conferenceFinals: [
                { team1: "DEN 1", team2: "LAL 7", winner: "DEN 1" }
            ],

            champion: "DEN 1"
        },

        east: {
            firstRound: [
                { team1: "MIL 1", team2: "MIA 8", winner: "MIA 8" },
                { team1: "CLE 4", team2: "NY 5", winner: "NY 5" },
                { team1: "PHI 3", team2: "BKN 6", winner: "PHI 3" },
                { team1: "BOS 2", team2: "ATL 7", winner: "BOS 2" }
            ],

            semifinals: [
                { team1: "MIA 8", team2: "NY 5", winner: "MIA 8" },
                { team1: "PHI 3", team2: "BOS 2", winner: "BOS 2" }
            ],

            conferenceFinals: [
                { team1: "MIA 8", team2: "BOS 2", winner: "MIA 8" }
            ],

            champion: "MIA 8"
        },

        finals: {
            team1: "DEN 1",
            team2: "MIA 8",
            champion: "DEN NUGGETS"
        }
    },
    "2021-22": {
        west: {
            firstRound: [
                { team1: "PHX 1", team2: "NO 8", winner: "PHX 1" },
                { team1: "DAL 4", team2: "UTA 5", winner: "DAL 4" },
                { team1: "GS 3", team2: "DEN 6", winner: "GS 3" },
                { team1: "MEM 2", team2: "MIN 7", winner: "MEM 2" }
            ],

            semifinals: [
                { team1: "PHX 1", team2: "DAL 4", winner: "DAL 4" },
                { team1: "GS 3", team2: "MEM 2", winner: "GS 3" }
            ],

            conferenceFinals: [
                { team1: "DAL 4", team2: "GS 3", winner: "GS 3" }
            ],

            champion: "GS 3"
        },

        east: {
            firstRound: [
                { team1: "MIA 1", team2: "ATL 8", winner: "MIA 1" },
                { team1: "PHI 4", team2: "TOR 5", winner: "PHI 4" },
                { team1: "MIL 3", team2: "CHI 6", winner: "MIL 3" },
                { team1: "BOS 2", team2: "BKN 7", winner: "BOS 2" }
            ],

            semifinals: [
                { team1: "MIA 1", team2: "PHI 4", winner: "MIA 1" },
                { team1: "MIL 3", team2: "BOS 2", winner: "BOS 2" }
            ],

            conferenceFinals: [
                { team1: "MIA 1", team2: "BOS 2", winner: "BOS 2" }
            ],

            champion: "BOS 2"
        },

        finals: {
            team1: "GS 3",
            team2: "BOS 2",
            champion: "GS WARRIORS"
        }
    }
};



function setSeries(series, data) {
    if (!series || !data) return;

    const boxes = series.querySelectorAll(".team-box");

    boxes.forEach(box => {
        box.classList.remove("series-winner");
        box.style.color = "";
    });

    if (boxes[0]) {
        boxes[0].textContent = data.team1;

        const teamCode = data.team1.split(" ")[0];

        if (teamColors[teamCode]) {
            boxes[0].style.color = teamColors[teamCode];
        }

        if (data.winner === data.team1) {
            boxes[0].classList.add("series-winner");
        }
    }

    if (boxes[1]) {
        boxes[1].textContent = data.team2;

        const teamCode = data.team2.split(" ")[0];

        if (teamColors[teamCode]) {
            boxes[1].style.color = teamColors[teamCode];
        }

        if (data.winner === data.team2) {
            boxes[1].classList.add("series-winner");
        }
    }
}


function loadPlayoffSeason(season) {
    const data = playoffData[season];

    if (!data) return;

    /* WEST FIRST ROUND */
    const westFirst = document.querySelectorAll(
        ".west-first-round .series"
    );

    data.west.firstRound.forEach((series, index) => {
        setSeries(westFirst[index], series);
    });


    /* WEST SEMIFINALS */
    const westSemis = document.querySelectorAll(
        ".west-semifinals .series"
    );

    data.west.semifinals.forEach((series, index) => {
        setSeries(westSemis[index], series);
    });


    /* WEST CONFERENCE FINALS */
    const westFinals = document.querySelector(
        ".west-conference-finals .series"
    );

    setSeries(westFinals, data.west.conferenceFinals[0]);


    /* EAST FIRST ROUND */
    const eastFirst = document.querySelectorAll(
        ".east-first-round .series"
    );

    data.east.firstRound.forEach((series, index) => {
        setSeries(eastFirst[index], series);
    });


    /* EAST SEMIFINALS */
    const eastSemis = document.querySelectorAll(
        ".east-semifinals .series"
    );

    data.east.semifinals.forEach((series, index) => {
        setSeries(eastSemis[index], series);
    });


    /* EAST CONFERENCE FINALS */
    const eastFinals = document.querySelector(
        ".east-conference-finals .series"
    );

    setSeries(eastFinals, data.east.conferenceFinals[0]);


    /* CONFERENCE CHAMPIONS */
    const westChampion = document.querySelector(
        ".west-winner .winner-box"
    );

    const eastChampion = document.querySelector(
        ".east-winner .winner-box"
    );

    westChampion.textContent = data.west.champion;
    eastChampion.textContent = data.east.champion;


    /* NBA FINALS */
    const finalsTeams = document.querySelectorAll(
        ".finals-series .final-team"
    );

    finalsTeams[0].textContent = data.finals.team1;
    finalsTeams[1].textContent = data.finals.team2;


    /* NBA CHAMPION */
    const nbaChampion = document.querySelector(
        ".champion-box strong"
    );

    nbaChampion.textContent = data.finals.champion;


    /* SEASON TITLE */
    document.getElementById("playoff-season").textContent =
        season + " NBA Playoffs";
}


document.addEventListener("DOMContentLoaded", function() {

    const yearSelect = document.getElementById("playoff-year");

    loadPlayoffSeason(yearSelect.value);
    colorPlayoffTeams();

    yearSelect.addEventListener("change", function() {
        loadPlayoffSeason(this.value);
        colorPlayoffTeams();
    });

});
function colorPlayoffTeams() {
    document.querySelectorAll(".team-box").forEach(box => {

        const text = box.textContent.trim();

        if (!text || text === "TBD") return;

        const teamCode = text.split(" ")[0];

        if (teamColors[teamCode]) {
            box.style.color = teamColors[teamCode];
        }
    });
}