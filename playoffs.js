const teamColors = {
    BOS: "#007A33",
    MIA: "#980000",
    NY: "#db4c0a",
    CLE: "#580303",
    OKC: "#007AC1",
    DEN: "#0E2240",
    LAL: "#47206b",
    MEM: "#5D76A9",
    SA: "#000000",
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



function setSeries(series, data) {
    if (!series || !data) return;

    const boxes = series.querySelectorAll(".team-box, .winner-box, .final-team");

    boxes.forEach(box => {
        box.classList.remove("series-winner");
        box.style.removeProperty("color");
    });

    if (boxes[0]) {
        boxes[0].textContent = data.team1;

        const teamCode = data.team1.split(" ")[0];

        if (teamColors[teamCode]) {
            boxes[0].style.setProperty(
                "color",
                teamColors[teamCode],
                "important"
            );
        }

        if (data.winner === data.team1) {
            boxes[0].classList.add("series-winner");
        }
    }

    if (boxes[1]) {
        boxes[1].textContent = data.team2;

        const teamCode = data.team2.split(" ")[0];

        if (teamColors[teamCode]) {
            boxes[1].style.setProperty(
                "color",
                teamColors[teamCode],
                "important"
            );
        }

        if (data.winner === data.team2) {
            boxes[1].classList.add("series-winner");
        }
    }
}

function makeSeriesClickable(series, season, round, conference, index) {
    if (!series) return;

    const boxes = series.querySelectorAll(".team-box");

    boxes.forEach(box => {
        box.onclick = function() {
            window.location.href =
                `series.html?season=${encodeURIComponent(season)}` +
                `&round=${encodeURIComponent(round)}` +
                `&conference=${encodeURIComponent(conference)}` +
                `&series=${index}`;
        };
    });
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

    makeSeriesClickable(
        westFirst[index],
        season,
        "firstRound",
        "west",
        index
    );
    });


    /* WEST SEMIFINALS */

    const westSemis = document.querySelectorAll(
        ".west-semifinals .series"
    );

    data.west.semifinals.forEach((series, index) => {
        setSeries(westSemis[index], series);

    makeSeriesClickable(
        westSemis[index],
        season,
        "semifinals",
        "west",
        index
    );
    });


    /* WEST CONFERENCE FINALS */
const westFinals = document.querySelector(
    ".west-conference-finals .series"
);
setSeries(westFinals, data.west.conferenceFinals[0]);

makeSeriesClickable(
    westFinals,
    season,
    "conferenceFinals",
    "west",
    0
);


    /* EAST FIRST ROUND */

    const eastFirst = document.querySelectorAll(
        ".east-first-round .series"
    );

    data.east.firstRound.forEach((series, index) => {
    setSeries(eastFirst[index], series);

    makeSeriesClickable(
        eastFirst[index],
        season,
        "firstRound",
        "east",
        index
    );
});


    /* EAST SEMIFINALS */

    const eastSemis = document.querySelectorAll(
        ".east-semifinals .series"
    );

    data.east.semifinals.forEach((series, index) => {
    setSeries(eastSemis[index], series);

    makeSeriesClickable(
        eastSemis[index],
        season,
        "semifinals",
        "east",
        index
    );
});


    /* EAST CONFERENCE FINALS */
const eastFinals = document.querySelector(
    ".east-conference-finals .series"
);
setSeries(eastFinals, data.east.conferenceFinals[0]);

makeSeriesClickable(
    eastFinals,
    season,
    "conferenceFinals",
    "east",
    0
);

    /* CONFERENCE CHAMPIONS */

    /* CONFERENCE CHAMPIONS */
const westChampion = document.querySelector(
    ".west-winner .winner-box"
);
const eastChampion = document.querySelector(
    ".east-winner .winner-box"
);

setSeries(westChampion.parentElement, {
    team1: data.west.champion,
    team2: "",
    winner: data.west.champion
});

setSeries(eastChampion.parentElement, {
    team1: data.east.champion,
    team2: "",
    winner: data.east.champion
});

    /* NBA FINALS */
const finalsSeries = document.querySelector(".finals-series");

setSeries(finalsSeries, {
    team1: data.finals.team1,
    team2: data.finals.team2,
    winner: data.finals.champion === data.finals.team1
        ? data.finals.team1
        : data.finals.team2
});

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