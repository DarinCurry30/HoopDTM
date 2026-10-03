const playoffData = {
    "2025-26": {
        west: {
            firstRound: [
                { team1: "OKC", team2: "PHX" },
                { team1: "LAL", team2: "HOU" },
                { team1: "DEN", team2: "MIN" },
                { team1: "SA", team2: "POR" }
            ],

            semifinals: [
                { team1: "OKC", team2: "LAL" },
                { team1: "MIN", team2: "SA" }
            ],

            conferenceFinals: [
                { team1: "OKC", team2: "SA" }
            ],

            champion: "SA"
        },

        east: {
            firstRound: [
                { team1: "DET", team2: "ORL" },
                { team1: "CLE", team2: "TOR" },
                { team1: "NY", team2: "ATL" },
                { team1: "BOS", team2: "PHI" }
            ],

            semifinals: [
                { team1: "DET", team2: "CLE" },
                { team1: "NY", team2: "PHI" }
            ],

            conferenceFinals: [
                { team1: "CLE", team2: "NY" }
            ],

            champion: "NY"
        },

        finals: {
            team1: "SA",
            team2: "NY",
            champion: "NY KNICKS"
        }
    },

    "2024-25": {
        west: {
            firstRound: [
                { team1: "OKC", team2: "MEM" },
                { team1: "DEN", team2: "LAC" },
                { team1: "LAL", team2: "MIN" },
                { team1: "HOU", team2: "GSW" }
            ],

            semifinals: [
                { team1: "OKC", team2: "DEN" },
                { team1: "MIN", team2: "GSW" }
            ],

            conferenceFinals: [
                { team1: "OKC", team2: "MIN" }
            ],

            champion: "OKC"
        },

        east: {
            firstRound: [
                { team1: "CLE", team2: "MIA" },
                { team1: "IND", team2: "MIL" },
                { team1: "NY", team2: "DET" },
                { team1: "BOS", team2: "ORL" }
            ],

            semifinals: [
                { team1: "CLE", team2: "IND" },
                { team1: "NY", team2: "BOS" }
            ],

            conferenceFinals: [
                { team1: "IND", team2: "NY" }
            ],

            champion: "IND"
        },

        finals: {
            team1: "OKC",
            team2: "IND",
            champion: "OKC THUNDER"
        }
    },

"2023-24": {
        west: {
            firstRound: [
                { team1: "OKC", team2: "NO" },
                { team1: "LAC.", team2: "DAL" },
                { team1: "MIN", team2: "PHX" },
                { team1: "DEN", team2: "LAL" }
            ],

            semifinals: [
                { team1: "OKC", team2: "DAL" },
                { team1: "MIN", team2: "DEN" }
            ],

            conferenceFinals: [
                { team1: "DAL", team2: "MIN" }
            ],

            champion: "DAL"
        },

        east: {
            firstRound: [
                { team1: "BOS", team2: "MIA" },
                { team1: "CLE", team2: "ORL" },
                { team1: "MIL", team2: "IND" },
                { team1: "NY", team2: "PHI" }
            ],

            semifinals: [
                { team1: "BOS", team2: "CLE" },
                { team1: "IND", team2: "NY" }
            ],

            conferenceFinals: [
                { team1: "BOS", team2: "IND" }
            ],

            champion: "BOS"
        },

        finals: {
            team1: "DAL",
            team2: "BOS",
            champion: "BOS CELTICS"
        }
    },

    "2022-23": {
        west: {
            firstRound: [
                { team1: "DEN", team2: "MIN" },
                { team1: "PHX", team2: "LAC" },
                { team1: "SAC", team2: "GS" },
                { team1: "MEM", team2: "LAL" }
            ],

            semifinals: [
                { team1: "DEN", team2: "PHX" },
                { team1: "GS", team2: "LAL" }
            ],

            conferenceFinals: [
                { team1: "OKC", team2: "MIN" }
            ],

            champion: "OKC"
        },

        east: {
            firstRound: [
                { team1: "CLE", team2: "MIA" },
                { team1: "IND", team2: "MIL" },
                { team1: "NY", team2: "DET" },
                { team1: "BOS", team2: "ORL" }
            ],

            semifinals: [
                { team1: "CLE", team2: "IND" },
                { team1: "NY", team2: "BOS" }
            ],

            conferenceFinals: [
                { team1: "IND", team2: "NY" }
            ],

            champion: "IND"
        },

        finals: {
            team1: "OKC",
            team2: "IND",
            champion: "OKC THUNDER"
        }
    }
};



function setSeries(series, data) {
    if (!series || !data) return;

    const boxes = series.querySelectorAll(".team-box");

    if (boxes[0]) {
        boxes[0].textContent = data.team1;
    }

    if (boxes[1]) {
        boxes[1].textContent = data.team2;
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

    yearSelect.addEventListener("change", function() {
        loadPlayoffSeason(this.value);
    });

});