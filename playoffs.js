const teamColors = {
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
    const screen = document.getElementById("series-loading-screen");
    const bar = document.querySelector(".loading-bar-fill");

    if (!yearSelect) return;

    let loadToken = 0;

    function showBracket(season) {
        const token = ++loadToken;

        if (!screen || !bar) {
            loadPlayoffSeason(season);
            return;
        }

        screen.classList.remove("hidden");
        bar.style.width = "0%";

        const message = document.getElementById("loading-message");

if (message) {
    const displayYear = season.split("-")[0] === "2025"
        ? "2026"
        : season.split("-")[0] === "2024"
        ? "2025"
        : season.split("-")[0] === "2023"
        ? "2024"
        : season.split("-")[0] === "2022"
        ? "2023"
        : "2022";

    message.textContent = `LOADING ${displayYear} BRACKET...`;
}

        const duration = 1500 + Math.random() * 1500;
        const startTime = performance.now();

        function update(now) {
            if (token !== loadToken) return;

            const progress = Math.min(
                ((now - startTime) / duration) * 100,
                100
            );

            bar.style.width = progress + "%";

            if (progress < 100) {
                requestAnimationFrame(update);
            } else {
                loadPlayoffSeason(season);
                screen.classList.add("hidden");
            }
        }

        requestAnimationFrame(update);
    }

    showBracket(yearSelect.value);

    yearSelect.addEventListener("change", function() {
        showBracket(this.value);
    });
});