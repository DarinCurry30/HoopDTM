const playerSearchInput = document.getElementById("playerSearch");
const playerSearchResults = document.getElementById("playerSearchResults");

function searchPlayerDatabase() {
    if (!playerSearchInput || !playerSearchResults) return;

    const query = playerSearchInput.value.trim().toLowerCase();

    playerSearchResults.innerHTML = "";

    if (!query) {
        playerSearchResults.style.display = "none";
        return;
    }

    const matches = Object.entries(players)
        .filter(([slug, player]) =>
            player.name.toLowerCase().includes(query)
        )
        .slice(0, 8);

    if (matches.length === 0) {
        playerSearchResults.innerHTML = `
            <div class="search-no-results">
                No players found
            </div>
        `;
        playerSearchResults.style.display = "block";
        return;
    }

    matches.forEach(([slug, player]) => {
        const result = document.createElement("div");

        result.className = "player-search-result";

        const teamData = Object.values(teams).find(team =>
            team.name === player.team
        );

        const abbreviation = teamData ? teamData.abbreviation : "";

        result.innerHTML = `
            <strong>${player.name}</strong>
            <span>${abbreviation}</span>
        `;

        result.onclick = function () {
            window.location.href =
                `player.html?player=${encodeURIComponent(slug)}`;
        };

        playerSearchResults.appendChild(result);
    });

    playerSearchResults.style.display = "block";
}

function searchPlayer() {
    if (!playerSearchInput) return;

    const query = playerSearchInput.value.trim().toLowerCase();

    if (!query) return;

    const matches = Object.entries(players).filter(([slug, player]) =>
        player.name.toLowerCase().includes(query)
    );

    if (matches.length > 0) {
        const slug = matches[0][0];

        window.location.href =
            `player.html?player=${encodeURIComponent(slug)}`;
    } else if (playerSearchResults) {
        playerSearchResults.innerHTML = `
            <div class="search-no-results">
                No players found
            </div>
        `;

        playerSearchResults.style.display = "block";
    }
}

if (playerSearchInput && playerSearchResults) {

    playerSearchInput.addEventListener(
        "input",
        searchPlayerDatabase
    );

    playerSearchInput.addEventListener(
        "keydown",
        function(event) {
            if (event.key === "Enter") {
                searchPlayer();
            }
        }
    );

    document.addEventListener("click", function(event) {
        if (!event.target.closest(".hero-search-container")) {
            playerSearchResults.style.display = "none";
        }
    });
}


function filterPlayers() {
    const input = document.getElementById("playersSearch");

    if (!input) return;

    const search = input.value.trim().toLowerCase();
    const tbody = document.getElementById("playersList");

    if (!tbody) return;

    // Rebuild the full player list so rookies are available to search
    loadPlayersPage();

    const rows = Array.from(tbody.querySelectorAll("tr"));

    rows.forEach(row => {
        const playerName = row.cells[0]
            ?.textContent
            .trim()
            .toLowerCase() || "";

        row.style.display = playerName.includes(search) ? "" : "none";
    });
}


function filterTeams() {

    const input = document.getElementById("teamSearch");

    if (!input) return;

    const search = input.value.toLowerCase();

    const teams = document.querySelectorAll("#teamsList .team-card");

    teams.forEach(team => {

        const name = team
            .querySelector("strong")
            .textContent
            .toLowerCase();

        team.style.display =
            name.includes(search) ? "" : "none";
    });
}


function sortTeamsAlphabetically() {

    const teamsList = document.getElementById("teamsList");

    if (!teamsList) return;

    const cards = Array.from(
        teamsList.querySelectorAll(".team-card")
    );

    cards.sort((a, b) => {

        const nameA = a.querySelector("strong").textContent.trim();
        const nameB = b.querySelector("strong").textContent.trim();

        return nameA.localeCompare(nameB);
    });

    cards.forEach(card => {
        teamsList.appendChild(card);
    });
}


sortTeamsAlphabetically();


/* PLAYER DATABASE */


const players = {



    
    "chris-cenac-jr": {
    name: "Chris Cenac Jr.",
    team: "Boston Celtics",
    "2526team": "Houston Cougars",
    position: "Forward",
    initials: "CC",
    height: "6'11\"",
    weight: "240 lbs",
    rookie: true,

    "2526": {   
        gp: 37,
        ppg: "9.5",
            tpts: "357",
        rpg: "7.9",
            trbs: "293",
        apg: "0.7",
            tasts: "26",
        spg: "0.8",
            tst: "30",
        bpg: "0.5",
            tbks: "19",
        fg: "48.5%",
        fg3: "33.3%",
        ft: "62.1%",
        to: "0.9",
       
    },

    career: {
        gp: 37,
        ppg: "9.5",
            tpts: "357",
        rpg: "7.9",
            trbs: "293",
        apg: "0.7",
            tasts: "26",
        spg: "0.8",
            tst: "30",
        bpg: "0.5",
            tbks: "19",
        fg: "48.5%",
        fg3: "33.3%",
        ft: "62.1%",
        to: "0.9",
    },
},

"mike-conley": {
    name: "Mike Conley",
    team: "Boston Celtics",
    "2526team": "Minnesota Timberwolves",
    position: "Guard",
    initials: "MC",
    height: "6'1\"",
    weight: "175 lbs",

    "2526": {   
        gp: 54,
        ppg: "4.5",
            tpts: "243",
        rpg: "1.7",
            trbs: "92",
        apg: "2.9",
            tasts: "157",
        spg: "0.6",
            tst: "33",
        bpg: "0.3",
            tbks: "17",
        fg: "33.5%",
        fg3: "33.7%",
        ft: "90.0%",
        to: "0.6",
       
    },

    career: {
        gp: 1226,
        ppg: "13.6",
            tpts: "16674",
        rpg: "2.9",
            trbs: "3556",
        apg: "5.5",
            tasts: "6743",
        spg: "1.3",
            tst: "1594",
        bpg: "0.2",
            tbks: "246",
        fg: "43.6%",
        fg3: "38.7%",
        ft: "82.6%",
        to: "1.8",
    },
},


"tucker-devries": {
    name: "Tucker DeVries",
    team: "Boston Celtics",
    "2526team": "Indiana Hoosiers",
    position: "Shooting Guard / Small Forward",
    initials: "TD",
    height: "6'7\"",
    weight: "210 lbs",
    rookie: true,

    "2526": {   
        gp: 32,
        ppg: "13.7",
            tpts: "439",
        rpg: "5.3",
            trbs: "170",
        apg: "3.3",
            tasts: "106",
        spg: "1.1",
            tst: "36",
        bpg: "0.6",
            tbks: "20",
        fg: "40.0%",
        fg3: "33.3%",
        ft: "85.9%",
        to: "1.5",
       
    },

    career: {
        gp: 144,
        ppg: "16.8",
            tpts: "2420",
        rpg: "5.5",
            trbs: "792",
        apg: "2.7",
            tasts: "389",
        spg: "1.2",
            tst: "173",
        bpg: "0.5",
            tbks: "72",
        fg: "42.8%",
        fg3: "35.9%",
        ft: "82.0%",
        to: "1.7",
    },
},

"luka-garza": {
    name: "Luka Garza",
    team: "Boston Celtics",
    "2526team": "Boston Celtics",
    position: "Center",
    initials: "LG",
    height: "6'10\"",
    weight: "243 lbs",

    "2526": {   
        gp: 69,
        ppg: "8.1",
            tpts: "557",
        rpg: "4.1",
            trbs: "281",
        apg: "1.0",
            tasts: "66",
        spg: "0.4",
            tst: "27",
        bpg: "0.4",
            tbks: "28",
        fg: "57.7%",
        fg3: "43.3%",
        ft: "76.9%",
        to: "0.7",
       
    },

    career: {
        gp: 193,
        ppg: "6.0",
            tpts: "1161",
        rpg: "2.7",
            trbs: "529",
        apg: "0.6",
            tasts: "119",
        spg: "0.3",
            tst: "49",
        bpg: "0.2",
            tbks: "40",
        fg: "52.9%",
        fg3: "36.7%",
        ft: "72.8%",
        to: "0.5",
    },
},

"paul-george": {
    name: "Paul George",
    team: "Boston Celtics",
    "2526team": "Philadelphia 76ers",
    position: "Small Forward / Shooting Guard",
    initials: "PG",
    height: "6'8\"",
    weight: "220 lbs",

    "2526": {   
        gp: 37,
        ppg: "17.3",
            tpts: "641",
        rpg: "5.3",
            trbs: "196",
        apg: "3.6",
            tasts: "133",
        spg: "1.7",
            tst: "62",
        bpg: "0.4",
            tbks: "16",
        fg: "43.9%",
        fg3: "39.2%",
        ft: "82.0%",
        to: "1.7",
       
    },

    career: {
        gp: 945,
        ppg: "20.5",
            tpts: "19338",
        rpg: "6.2",
            trbs: "5880",
        apg: "3.7",
            tasts: "3502",
        spg: "1.7",
            tst: "1601",
        bpg: "0.4",
            tbks: "417",
        fg: "44.0%",
        fg3: "38.4%",
        ft: "85.2%",
        to: "2.6"
    },
},

"hugo-gonzalez": {
    name: "Hugo Gonzalez",
    team: "Boston Celtics",
    "2526team": "Boston Celtics",
    position: "Small Forward / Shooting Guard",
    initials: "HG",
    height: "6'6\"",
    weight: "205 lbs",


    "2526": {   
        gp:74,
        ppg: "3.9",
            tpts: "289",
        rpg: "3.3",
            trbs: "246",
        apg: "0.5",
            tasts: "40",
        spg: "0.6",
            tst: "42",
        bpg: "0.3",
            tbks: "21",
        fg: "47.6%",
        fg3: "36.2%",
        ft: "50.0%",
        to: "0.5",
       
    },

    career: {
        gp:74,
        ppg: "3.9",
            tpts: "289",
        rpg: "3.3",
            trbs: "246",
        apg: "0.5",
            tasts: "40",
        spg: "0.6",
            tst: "42",
        bpg: "0.3",
            tbks: "21",
        fg: "47.6%",
        fg3: "36.2%",
        ft: "50.0%",
        to: "0.5",
    },
},

"ron-harper-jr": {
    name: "Ron Harper Jr.",
    team: "Boston Celtics",
    "2526team": "Boston Celtics",
    position: "Point Guard / Shooting Guard",
    initials: "RH",
    height: "6'5\"",
    weight: "233 lbs",

    "2526": {   
        gp: 29,
        ppg: "4.2",
            tpts: "123",
        rpg: "1.7",
            trbs: "48",
        apg: "0.8",
            tasts: "22",
        spg: "0.3",
            tst: "10",
        bpg: "0.3",
            tbks: "10",
        fg: "41.8%",
        fg3: "35.0%",
        ft: "75.0%",
        to: "0.3",
       
    },

    career: {
        gp:40,
        ppg: "3.7",
            tpts: "147",
        rpg: "1.6",
            trbs: "62",
        apg: "0.7",
            tasts: "29",
        spg: "0.3",
            tst: "10",
        bpg: "0.3",
            tbks: "10",
        fg: "41.0%",
        fg3: "32.6%",
        ft: "85.7%",
        to: "0.2",
    },
},

"sam-hauser": {
    name: "Sam Hauser",
    team: "Boston Celtics",
    "2526team": "Boston Celtics",
    position: "Small Forward",
    initials: "SH",
    height: "6'7\"",
    weight: "217 lbs",

    "2526": {   
        gp:78,
        ppg: "9.2",
            tpts: "719",
        rpg: "3.8",
            trbs: "300",
        apg: "1.5",
            tasts: "114",
        spg: "0.5",
            tst: "38",
        bpg: "0.3",
            tbks: "23",
        fg: "41.9%",
        fg3: "39.3%",
        ft: "85.0%",
        to: "0.4",
       
    },

    career: {
        gp: 334,
        ppg: "7.8",
            tpts: "2613",
        rpg: "3.1",
            trbs: "1033",
        apg: "1.0",
            tasts: "341",
        spg: "0.4",
            tst: "149",
        bpg: "0.3",
            tbks: "84",
        fg: "44.2%",
        fg3: "41.2%",
        ft: "85.1%",
        to: "0.4",
    },
},

"dillon-mitchell": {
    name: "Dillon Mitchell",
    team: "Boston Celtics",
    "2526team": "St. John's Red Storm",
    position: "Small Forward ",
    initials: "DM",
    height: "6'8\"",
    weight: "210 lbs",
    rookie: true,

    "2526": {   
        gp:37,
        ppg: "8.3",
            tpts: "308",
        rpg: "7.0",
            trbs: "259",
        apg: "3.0",
            tasts: "111",
        spg: "1.3",
            tst: "47",
        bpg: "0.7",
            tbks: "27",
        fg: "55.9%",
        fg3: "6.7%",
        ft: "49.4%",
        to: "1.0",
       
    },

    career: {
        gp:144,
        ppg: "8.0",
            tpts: "1149",
        rpg: "6.3",
            trbs: "903",
        apg: "1.6",
            tasts: "235",
        spg: "1.1",
            tst: "152",
        bpg: "0.6",
            tbks: "91",
        fg: "59.3%",
        fg3: "19.3%",
        ft: "48.8%",
        to: "1.0",
    },
},

"payton-pritchard": {
    name: "Payton Pritchard",
    team: "Boston Celtics",
    "2526team": "Boston Celtics",
    position: "Point Guard",
    initials: "PP",
    height: "6'1\"",
    weight: "195 lbs",

    "2526": {   
        gp:79,
        ppg: "17.0",
            tpts: "1345",
        rpg: "3.9",
            trbs: "312",
        apg: "5.2",
            tasts: "408",
        spg: "0.7",
            tst: "58",
        bpg: "0.1",
            tbks: "10",
        fg: "46.4%",
        fg3: "37.7%",
        ft: "89.0%",
        to: "1.4",
       
    },

    career: {
        gp:426,
        ppg: "10.6",
            tpts: "4498",
        rpg: "3.0",
            trbs: "1264",
        apg: "3.0",
            tasts: "1291",
        spg: "0.6",
            tst: "243",
        bpg: "0.1",
            tbks: "46",
        fg: "45.7%",
        fg3: "39.4%",
        ft: "86.9%",
        to: "0.9",
    },
},

"neemias-queta": {
    name: "Neemias Queta",
    team: "Boston Celtics",
    "2526team": "Boston Celtics",
    position: "Center",
    initials: "NQ",
    height: "7'0\"",
    weight: "248 lbs",

    "2526": {   
        gp:76,
        ppg: "10.2",
            tpts: "776",
        rpg: "8.4",
            trbs: "636",
        apg: "1.7",
            tasts: "126",
        spg: "0.8",
            tst: "60",
        bpg: "1.3",
            tbks: "100",
        fg: "65.3%",
        fg3: "12.5%",
        ft: "70.3%",
        to: "1.0",
       
    },

    career: {
        gp:186,
        ppg: "7.0",
            tpts: "1297",
        rpg: "5.6",
            trbs: "1036",
        apg: "1.1",
            tasts: "198",
        spg: "0.5",
            tst: "92",
        bpg: "0.9",
            tbks: "173",
        fg: "64.2%",
        fg3: "9.1%",
        ft: "70.7%",
        to: "0.7",
    },
},

"mitchell-robinson": {
    name: "Mitchell Robinson",
    team: "Boston Celtics",
    "2526team": "New York Knicks",
    position: "Center",
    initials: "MR",
    height: "7'0\"",
    weight: "240 lbs",

    "2526": {   
        gp:60,
        ppg: "5.7",
            tpts: "340",
        rpg: "8.8",
            trbs: "525",
        apg: "0.9",
            tasts: "52",
        spg: "0.9",
            tst: "56",
        bpg: "1.2",
            tbks: "70",
        fg: "72.3%",
        fg3: "0%",
        ft: "40.8%",
        to: "0.7",
       
    },

    career: {
        gp: 397,
        ppg: "7.5",
            tpts: "2976",
        rpg: "8.0",
            trbs: "3164",
        apg: "0.7",
            tasts: "264",
        spg: "0.9",
            tst: "362",
        bpg: "1.7",
            tbks: "690",
        fg: "70.2%",
        fg3: "0%",
        ft: "50.8%",
        to: "0.7",
    },
},

"baylor-scheierman": {
    name: "Baylor Scheierman",
    team: "Boston Celtics",
    "2526team": "Boston Celtics",
    position: "Shooting Guard",
    initials: "BS",
    height: "6'6\"",
    weight: "205 lbs",

    "2526": {   
        gp:77,
        ppg: "5.5",
            tpts: "427",
        rpg: "3.5",
            trbs: "269",
        apg: "1.5",
            tasts: "116",
        spg: "0.5",
            tst: "42",
        bpg: "0.1",
            tbks: "6",
        fg: "45.3%",
        fg3: "39.9%",
        ft: "90.3%",
        to: "0.6",
       
    },

    career: {
        gp:108,
        ppg: "5.0",
            tpts: "540",
        rpg: "3.1",
            trbs: "334",
        apg: "1.4",
            tasts: "149",
        spg: "0.5",
            tst: "59",
        bpg: "0.1",
            tbks: "8",
        fg: "42.9%",
        fg3: "37.8%",
        ft: "86.0%",
        to: "0.5",
    },
},

"max-shulga": {
    name: "Max Shulga",
    team: "Boston Celtics",
    "2526team": "Boston Celtics",
    position: "Shooting Guard",
    initials: "MS",
    height: "6'4\"",
    weight: "210 lbs",

    "2526": {   
        gp:11,
        ppg: "0.6",
            tpts: "7",
        rpg: "0.5",
            trbs: "6",
        apg: "0.2",
            tasts: "2",
        spg: "0.1",
            tst: "1",
        bpg: "0.0",
            tbks: "0",
        fg: "25.0%",
        fg3: "25.0%",
        ft: "100%",
        to: "0.3",
       
    },

    career: {
        gp:11,
        ppg: "0.6",
            tpts: "7",
        rpg: "0.5",
            trbs: "6",
        apg: "0.2",
            tasts: "2",
        spg: "0.1",
            tst: "1",
        bpg: "0.0",
            tbks: "0",
        fg: "25.0%",
        fg3: "25.0%",
        ft: "100%",
        to: "0.3",
    },
},

"jayson-tatum": {
    name: "Jayson Tatum",
    team: "Boston Celtics",
    "2526team": "Boston Celtics",
    position: "Small Forward",
    initials: "JT",
    height: "6'8\"",
    weight: "210 lbs",

    "2526": {   
        gp:16,
        ppg: "21.8",
            tpts: "348",
        rpg: "10.0",
            trbs: "160",
        apg: "5.3",
            tasts: "85",
        spg: "1.4",
            tst: "22",
        bpg: "0.2",
            tbks: "3",
        fg: "41.1%",
        fg3: "32.9%",
        ft: "82.3%",
        to: "2.4",
       
    },

    career: {
        gp:601,
        ppg: "23.5",
            tpts: "14132",
        rpg: "7.4",
            trbs: "4453",
        apg: "3.9",
            tasts: "2328",
        spg: "1.1",
            tst: "661",
        bpg: "0.6",
            tbks: "387",
        fg: "45.8%",
        fg3: "36.8%",
        ft: "83.9%",
        to: "2.4",
    },
},

"milos-uzan": {
    name: "Milos Uzan",
    team: "Boston Celtics",
    "2526team": "Houston Cougars",
    position: "Point Guard ",
    initials: "MU",
    height: "6'4\"",
    weight: "190 lbs",
    rookie: true,

    "2526": {   
        gp: 37,
        ppg: "11.1",
            tpts: "411",
        rpg: "2.7",
            trbs: "99",
        apg: "4.0",
            tasts: "148",
        spg: "1.0",
            tst: "36",
        bpg: "0.1",
            tbks: "5",
        fg: "38%",
        fg3: "34.3%",
        ft: "74.1%",
        to: "1.3",
       
    },

    career: {
        gp:141,
        ppg: "9.9",
            tpts: "1396",
        rpg: "3.0",
            trbs: "417",
        apg: "3.9",
            tasts: "555",
        spg: "1.0",
            tst: "134",
        bpg: "0.2",
            tbks: "23",
        fg: "41.9%",
        fg3: "36.4%",
        ft: "74.6%",
        to: "1.7",
    },
},

"jordan-walsh": {
    name: "Jordan Walsh",
    team: "Boston Celtics",
    "2526team": "Boston Celtics",
    position: "Shooting Guard / Small Forward",
    initials: "JW",
    height: "6'6\"",
    weight: "205 lbs",
    

    "2526": {
        gp:68,
        ppg: "5.4",
            tpts: "364",
        rpg: "4.0",
            trbs: "272",
        apg: "0.8",
            tasts: "54",
        spg: "0.7",
            tst: "49",
        bpg: "0.5",
            tbks: "31",
        fg: "50.9%",
        fg3: "38.4%",
        ft: "77.2%",
        to: "0.5",
    },
    
    career: {   
        gp:129,
        ppg: "3.6",
            tpts: "461",
        rpg: "2.8",
            trbs: "361",
        apg: "0.6",
            tasts: "78",
        spg: "0.5",
            tst: "66",
        bpg: "0.3",
            tbks: "43",
        fg: "47.1%",
        fg3: "34.4%",
        ft: "73.2%",
        to: "0.4",
       
    },
},

"derrick-white": {
    name: "Derrick White",
    team: "Boston Celtics",
    "2526team": "Boston Celtics",
    position: "Point Guard",
    initials: "DW",
    height: "6'4\"",
    weight: "190 lbs",

    "2526": {   
        gp:77,
        ppg: "16.5",
            tpts: "1267",
        rpg: "4.4",
            trbs: "339",
        apg: "5.4",
            tasts: "414",
        spg: "1.1",
            tst: "88",
        bpg: "1.3",
            tbks: "98",
        fg: "39.4%",
        fg3: "32.7%",
        ft: "90.2%",
        to: "1.7",
       
    },

    career: {
        gp:571,
        ppg: "13.4",
            tpts: "7666",
        rpg: "3.8",
            trbs: "2147",
        apg: "4.3",
            tasts: "2479",
        spg: "0.9",
            tst: "493",
        bpg: "1.0",
            tbks: "544",
        fg: "43.8%",
        fg3: "36.0%",
        ft: "85.9%",
        to: "1.5",
    },
},

"amari-williams": {
    name: "Amari Williams",
    team: "Boston Celtics",
    "2526team": "Boston Celtics",
    position: "Power Forward / Center",
    initials: "AW",
    height: "7'0\"",
    weight: "262 lbs",

    "2526": {   
        gp:22,
        ppg: "1.4",
            tpts: "30",
        rpg: "1.8",
            trbs: "40",
        apg: "0.5",
            tasts: "10",
        spg: "0.1",
            tst: "3",
        bpg: "0.5",
            tbks: "10",
        fg: "50.0%",
        fg3: "0%",
        ft: "71.4%",
        to: "0.5",
       
    },

    career: {
        gp:22,
        ppg: "1.4",
            tpts: "30",
        rpg: "1.8",
            trbs: "40",
        apg: "0.5",
            tasts: "10",
        spg: "0.1",
            tst: "3",
        bpg: "0.5",
            tbks: "10",
        fg: "50.0%",
        fg3: "0%",
        ft: "71.4%",
        to: "0.5",
    },
},

"charles-bassey": {
    name: "Charles Bassey",
    team: "Golden State Warriors",
    "2526team": "GS, BOS, PHI, MEM",
    position: "Center",
    initials: "CB",
    height: "6'10\"",
    weight: "240 lbs",

    "2526": {   
        gp:13,
        ppg: "5.8",
            tpts: "76",
        rpg: "4.4",
            trbs: "57",
        apg: "0.5",
            tasts: "7",
        spg: "0.3",
            tst: "4",
        bpg: "0.8",
            tbks: "11",
        fg: "66.0%",
        fg3: "0.0%",
        ft: "70.0%",
        to: "0.5",
       
    },

    career: {
        gp:126,
        ppg: "4.5",
            tpts: "564",
        rpg: "4.3",
            trbs: "540",
        apg: "0.8",
            tasts: "100",
        spg: "0.4",
            tst: "47",
        bpg: "0.9",
            tbks: "108",
        fg: "63.5%",
        fg3: "23.1%",
        ft: "65.7%",
        to: "0.7",
    },
},

"jimmy-butler-iii": {
name: "Jimmy Butler III",
team: "Golden State Warriors",
"2526team": "Golden State Warriors",
position: "Forward",
initials: "JB",
height: "6'6\"",
weight: "230 lbs",

"2526": {   
    gp: 38,
    ppg: "20.0",
        tpts: "760",
    rpg: "5.6",
        trbs: "211",
    apg: "4.9",
        tasts: "185",
    spg: "1.4",
        tst: "55",
    bpg: "0.2",
        tbks: "8",
    fg: "51.9%",
    fg3: "37.6%",
    ft: "86.4%",
    to: "1.6",
   
},

career: {
    gp: 907,
    ppg: "18.4",
        tpts: "16658",
    rpg: "5.4",
        trbs: "4858",
    apg: "4.4",
        tasts: "3957",
    spg: "1.6",
        tst: "1455",
    bpg: "0.4",
        tbks: "387",
    fg: "47.4%",
    fg3: "33.0%",
    ft: "84.4%",
    to: "1.6",
},

},

"lj-cryer": {
name: "LJ Cryer",
team: "Golden State Warriors",
"2526team": "Golden State Warriors",
position: "Guard",
initials: "LC",
height: "6'0\"",
weight: "200 lbs",


"2526": {   
    gp: 18,
    ppg: "8.2",
        tpts: "148",
    rpg: "1.6",
        trbs: "28",
    apg: "1.0",
        tasts: "18",
    spg: "0.2",
        tst: "3",
    bpg: "0.0",
        tbks: "0",
    fg: "40.2%",
    fg3: "39.4%",
    ft: "89.5%",
    to: "0.8",
   
},

career: {
    gp: 18,
    ppg: "8.2",
        tpts: "148",
    rpg: "1.6",
        trbs: "28",
    apg: "1.0",
        tasts: "18",
    spg: "0.2",
        tst: "3",
    bpg: "0.0",
        tbks: "0",
    fg: "40.2%",
    fg3: "39.4%",
    ft: "89.5%",
    to: "0.8",
},


},
"stephen-curry": {
name: "Stephen Curry",
team: "Golden State Warriors",
"2526team": "Golden State Warriors",
position: "Guard",
initials: "SC",
height: "6'2\"",
weight: "185 lbs",

"2526": {   
    gp: 43,
    ppg: "26.6",
        tpts: "1142",
    rpg: "3.6",
        trbs: "154",
    apg: "4.7",
        tasts: "203",
    spg: "1.1",
        tst: "49",
    bpg: "0.4",
        tbks: "17",
    fg: "46.8%",
    fg3: "39.3%",
    ft: "92.3%",
    to: "2.8",
   
},

career: {
    gp: 1069,
    ppg: "24.8",
        tpts: "26528",
    rpg: "4.7",
        trbs: "4973",
    apg: "6.3",
        tasts: "6743",
    spg: "1.5",
        tst: "1601",
    bpg: "0.3",
        tbks: "282",
    fg: "47.1%",
    fg3: "42.2%",
    ft: "91.2%",
    to: "3.1",
},

},

"draymond-green": {
name: "Draymond Green",
team: "Golden State Warriors",
"2526team": "Golden State Warriors",
position: "Forward",
initials: "DG",
height: "6'6\"",
weight: "230 lbs",

"2526": {   
    gp: 68,
    ppg: "8.4",
        tpts: "570",
    rpg: "5.5",
        trbs: "375",
    apg: "5.5",
        tasts: "376",
    spg: "0.9",
        tst: "61",
    bpg: "0.6",
        tbks: "42",
    fg: "41.8%",
    fg3: "32.6%",
    ft: "70.2%",
    to: "2.7",
   
},

career: {
    gp: 949,
    ppg: "8.7",
        tpts: "8235",
    rpg: "6.8",
        trbs: "6462",
    apg: "5.6",
        tasts: "5324",
    spg: "1.3",
        tst: "1244",
    bpg: "1.0",
        tbks: "931",
    fg: "44.7%",
    fg3: "32.1%",
    ft: "71.0%",
    to: "2.3",
},

},

"al-horford": {
name: "Al Horford",
team: "Golden State Warriors",
"2526team": "Golden State Warriors",
position: "Center-Forward",
initials: "AH",
height: "6'8\"",
weight: "240 lbs",

"2526": {   
    gp: 45,
    ppg: "8.3",
        tpts: "372",
    rpg: "4.9",
        trbs: "219",
    apg: "2.6",
        tasts: "116",
    spg: "0.7",
        tst: "30",
    bpg: "1.1",
        tbks: "51",
    fg: "42.6%",
    fg3: "36.1%",
    ft: "84.6%",
    to: "0.9",
   
},

career: {
    gp: 1183,
    ppg: "12.7",
        tpts: "15077",
    rpg: "7.7",
        trbs: "9162",
    apg: "3.2",
        tasts: "3745",
    spg: "0.8",
        tst: "896",
    bpg: "1.1",
        tbks: "1351",
    fg: "50.7%",
    fg3: "37.6%",
    ft: "76.4%",
    to: "1.4",
},

},

"lajae-jones": {
name: "Lajae Jones",
team: "Golden State Warriors",
"2526team": "Florida State",
position: "Guard",
initials: "LJ",
height: "6'7\"",
weight: "220 lbs",
rookie: true,

"2526": {   
    gp: 33,
    ppg: "12.7",
        tpts: "419",
    rpg: "5.7",
        trbs: "189",
    apg: "1.1",
        tasts: "37",
    spg: "1.2",
        tst: "41",
    bpg: "1.0",
        tbks: "33",
    fg: "42.7%",
    fg3: "32.5%",
    ft: "76.3%",
    to: "1.0",
   
},

career: {
    gp: 77,
    ppg: "10.7",
        tpts: "822",
    rpg: "5.2",
        trbs: "399",
    apg: "0.8",
        tasts: "61",
    spg: "1.2",
        tst: "96",
    bpg: "0.8",
        tbks: "65",
    fg: "44.6%",
    fg3: "34.6%",
    ft: "77.1%",
    to: "0.9",
},

},

"yaxel-lendeborg": {
name: "Yaxel Lendeborg",
team: "Golden State Warriors",
"2526team": "Michigan",
position: "Forward",
initials: "YL",
height: "6'9\"",
weight: "250 lbs",
rookie: true,

"2526": {   
    gp: 40,
    ppg: "15.1",
        tpts: "603",
    rpg: "6.8",
        trbs: "271",
    apg: "3.2",
        tasts: "129",
    spg: "1.1",
        tst: "45",
    bpg: "1.2",
        tbks: "49",
    fg: "51.5%",
    fg3: "37.2%",
    ft: "82.4%",
    to: "1.1",
   
},

career: {
    gp: 112,
    ppg: "15.5",
        tpts: "1739",
    rpg: "9.5",
        trbs: "1061",
    apg: "3.2",
        tasts: "358",
    spg: "1.2",
        tst: "133",
    bpg: "1.7",
        tbks: "187",
    fg: "51.7%",
    fg3: "36.4%",
    ft: "79.2%",
    to: "1.7",
},

},
"malevy-leons": {
name: "Malevy Leons",
team: "Golden State Warriors",
"2526team": "Golden State Warriors",
position: "Forward",
initials: "ML",
height: "6'9\"",
weight: "210 lbs",

"2526": {   
    gp: 25,
    ppg: "3.3",
        tpts: "83",
    rpg: "2.1",
        trbs: "53",
    apg: "0.9",
        tasts: "23",
    spg: "0.6",
        tst: "14",
    bpg: "0.4",
        tbks: "9",
    fg: "44.4%",
    fg3: "25.0%",
    ft: "78.9%",
    to: "0.5",
   
},

career: {
    gp: 31,
    ppg: "2.7",
        tpts: "85",
    rpg: "1.8",
        trbs: "56",
    apg: "0.8",
        tasts: "24",
    spg: "0.5",
        tst: "14",
    bpg: "0.3",
        tbks: "9",
    fg: "43.2%",
    fg3: "23.5%",
    ft: "73.9%",
    to: "0.5",
},

},

"deanthony-melton": {
name: "De'Anthony Melton",
team: "Golden State Warriors",
"2526team": "Golden State Warriors",
position: "Guard",
initials: "DM",
height: "6'2\"",
weight: "200 lbs",

"2526": {   
    gp: 49,
    ppg: "12.3",
        tpts: "602",
    rpg: "3.2",
        trbs: "158",
    apg: "2.6",
        tasts: "125",
    spg: "1.6",
        tst: "77",
    bpg: "0.4",
        tbks: "20",
    fg: "40.7%",
    fg3: "29.4%",
    ft: "82.6%",
    to: "1.9",
   
},

career: {
    gp: 405,
    ppg: "9.5",
        tpts: "3833",
    rpg: "3.6",
        trbs: "1474",
    apg: "2.7",
        tasts: "1113",
    spg: "1.4",
        tst: "579",
    bpg: "0.5",
        tbks: "192",
    fg: "41.0%",
    fg3: "35.8%",
    ft: "78.9%",
    to: "2.0",
},

},

"moses-moody": {
name: "Moses Moody",
team: "Golden State Warriors",
"2526team": "Golden State Warriors",
position: "Guard",
initials: "MM",
height: "6'5\"",
weight: "211 lbs",

"2526": {   
    gp: 60,
    ppg: "12.1",
        tpts: "728",
    rpg: "3.3",
        trbs: "200",
    apg: "1.6",
        tasts: "98",
    spg: "1.0",
        tst: "58",
    bpg: "0.6",
        tbks: "34",
    fg: "44.0%",
    fg3: "40.1%",
    ft: "77.0%",
    to: "1.0",
   
},

career: {
    gp: 315,
    ppg: "8.0",
        tpts: "2515",
    rpg: "2.4",
        trbs: "770",
    apg: "1.0",
        tasts: "325",
    spg: "0.6",
        tst: "184",
    bpg: "0.3",
        tbks: "106",
    fg: "44.7%",
    fg3: "37.8%",
    ft: "77.3%",
    to: "0.6",
},

},

"georges-niang": {
name: "Georges Niang",
team: "Golden State Warriors",
"2526team": "Utah Jazz",
position: "Forward",
initials: "GN",
height: "6'6\"",
weight: "230 lbs",

"2526": {   
    gp: 0,
    ppg: "0.0",
        tpts: "0",
    rpg: "0.0",
        trbs: "0",
    apg: "0.0",
        tasts: "0",
    spg: "0.0",
        tst: "0",
    bpg: "0.0",
        tbks: "0",
    fg: "0.0%",
    fg3: "0.0%",
    ft: "0.0%",
    to: "0.0",
   
},

career: {
    gp: 544,
    ppg: "7.4",
        tpts: "4046",
    rpg: "2.5",
        trbs: "1354",
    apg: "1.0",
        tasts: "534",
    spg: "0.3",
        tst: "176",
    bpg: "0.1",
        tbks: "78",
    fg: "44.5%",
    fg3: "39.9%",
    ft: "85.2%",
    to: "0.7",
},

},

"gary-payton-ii": {
name: "Gary Payton II",
team: "Golden State Warriors",
"2526team": "Golden State Warriors",
position: "Guard",
initials: "GP",
height: "6'2\"",
weight: "195 lbs",

"2526": {   
    gp: 73,
    ppg: "7.5",
        tpts: "547",
    rpg: "3.6",
        trbs: "265",
    apg: "1.7",
        tasts: "123",
    spg: "0.9",
        tst: "67",
    bpg: "0.3",
        tbks: "21",
    fg: "58.3%",
    fg3: "29.1%",
    ft: "65.0%",
    to: "0.8",
   
},

career: {
    gp: 343,
    ppg: "5.9",
        tpts: "2028",
    rpg: "3.0",
        trbs: "1028",
    apg: "1.3",
        tasts: "435",
    spg: "1.0",
        tst: "328",
    bpg: "0.3",
        tbks: "99",
    fg: "56.4%",
    fg3: "32.8%",
    ft: "63.0%",
    to: "0.7",
},

},

"brandin-podziemski": {
name: "Brandin Podziemski",
team: "Golden State Warriors",
"2526team": "Golden State Warriors",
position: "Guard",
initials: "BP",
height: "6'4\"",
weight: "205 lbs",

"2526": {   
    gp: 82,
    ppg: "13.8",
        tpts: "1133",
    rpg: "5.1",
        trbs: "419",
    apg: "3.7",
        tasts: "304",
    spg: "1.1",
        tst: "88",
    bpg: "0.2",
        tbks: "15",
    fg: "45.5%",
    fg3: "37.1%",
    ft: "79.7%",
    to: "1.6",
   
},

career: {
    gp: 220,
    ppg: "11.6",
        tpts: "2562",
    rpg: "5.3",
        trbs: "1174",
    apg: "3.6",
        tasts: "796",
    spg: "1.0",
        tst: "217",
    bpg: "0.2",
        tbks: "43",
    fg: "45.2%",
    fg3: "37.5%",
    ft: "75.7%",
    to: "1.3",
},

},

"kristaps-porzingis": {
name: "Kristaps Porzingis",
team: "Golden State Warriors",
"2526team": "ATL / GSW",
position: "Center-Forward",
initials: "KP",
height: "7'2\"",
weight: "240 lbs",

"2526": {   
    gp: 32,
    ppg: "16.7",
        tpts: "533",
    rpg: "5.2",
        trbs: "167",
    apg: "2.5",
        tasts: "81",
    spg: "0.6",
        tst: "18",
    bpg: "1.2",
        tbks: "38",
    fg: "44.6%",
    fg3: "33.8%",
    ft: "84.2%",
    to: "1.3",
   
},

career: {
    gp: 533,
    ppg: "19.5",
        tpts: "16175",
    rpg: "7.6",
        trbs: "4055",
    apg: "1.9",
        tasts: "994",
    spg: "0.7",
        tst: "383",
    bpg: "1.8",
        tbks: "947",
    fg: "46.1%",
    fg3: "36.4%",
    ft: "83.0%",
    to: "1.6",
},

},

"will-richard": {
name: "Will Richard",
team: "Golden State Warriors",
"2526team": "Golden State Warriors",
position: "Guard",
initials: "WR",
height: "6'3\"",
weight: "206 lbs",

"2526": {   
    gp: 69,
    ppg: "6.4",
        tpts: "441",
    rpg: "2.5",
        trbs: "172",
    apg: "1.3",
        tasts: "93",
    spg: "1.2",
        tst: "80",
    bpg: "0.1",
        tbks: "9",
    fg: "46.8%",
    fg3: "33.5%",
    ft: "85.2%",
    to: "0.8",
   
},

career: {
    gp: 69,
    ppg: "6.4",
        tpts: "441",
    rpg: "2.5",
        trbs: "172",
    apg: "1.3",
        tasts: "93",
    spg: "1.2",
        tst: "80",
    bpg: "0.1",
        tbks: "9",
    fg: "46.8%",
    fg3: "33.5%",
    ft: "85.2%",
    to: "0.8",
},

},

"gui-santos": {
name: "Gui Santos",
team: "Golden State Warriors",
"2526team": "Golden State Warriors",
position: "Forward",
initials: "GS",
height: "6'7\"",
weight: "185 lbs",

"2526": {   
    gp: 68,
    ppg: "9.2",
        tpts: "625",
    rpg: "3.9",
        trbs: "266",
    apg: "2.3",
        tasts: "159",
    spg: "0.9",
        tst: "61",
    bpg: "0.3",
        tbks: "22",
    fg: "50.0%",
    fg3: "35.1%",
    ft: "72.5%",
    to: "1.5",
   
},

career: {
    gp: 147,
    ppg: "6.4",
        tpts: "934",
    rpg: "3.3",
        trbs: "487",
    apg: "1.7",
        tasts: "253",
    spg: "0.6",
        tst: "90",
    bpg: "0.2",
        tbks: "34",
    fg: "49.0%",
    fg3: "34.7%",
    ft: "73.7%",
    to: "1.0",
},

},

"brandon-williams": {
name: "Brandon Williams",
team: "Golden State Warriors",
"2526team": "Dallas Mavericks",
position: "Guard",
initials: "BW",
height: "6'1\"",
weight: "190 lbs",

"2526": {
    gp: 66,
    ppg: "13.0",
    tpts: "859",
    rpg: "2.9",
    trbs: "191",
    apg: "3.9",
    tasts: "256",
    spg: "0.9",
    tst: "62",
    bpg: "0.3",
    tbks: "20",
    fg: "47.2%",
    fg3: "23.2%",
    ft: "79.3%",
    to: "1.9",
},

career: {
    gp: 140,
    ppg: "10.7",
    tpts: "1497",
    rpg: "2.4",
    trbs: "336",
    apg: "3.2",
    tasts: "443",
    spg: "0.8",
    tst: "111",
    bpg: "0.3",
    tbks: "36",
    fg: "45.0%",
    fg3: "28.0%",
    ft: "77.5%",
    to: "1.6",
},

},

"nate-williams": {
name: "Nate Williams",
team: "Golden State Warriors",
"2526team": "Golden State Warriors",
position: "Guard",
initials: "NW",
height: "6'5\"",
weight: "205 lbs",

"2526": {
    gp: 14,
    ppg: "8.0",
    tpts: "112",
    rpg: "2.1",
    trbs: "30",
    apg: "1.0",
    tasts: "14",
    spg: "0.4",
    tst: "5",
    bpg: "0.0",
    tbks: "0",
    fg: "48.9%",
    fg3: "43.3%",
    ft: "86.7%",
    to: "1.1",
},

career: {
    gp: 61,
    ppg: "4.8",
    tpts: "293",
    rpg: "1.3",
    trbs: "81",
    apg: "0.7",
    tasts: "40",
    spg: "0.3",
    tst: "20",
    bpg: "0.1",
    tbks: "7",
    fg: "50.6%",
    fg3: "34.8%",
    ft: "69.2%",
    to: "0.6",
},

},

    "nickeil-alexander-walker": {
    name: "Nickeil Alexander-Walker",
    team: "Atlanta Hawks",
    "2526team": "Atlanta Hawks",
    position: "G",
    initials: "NAW",
    height: "6'5\"",
    weight: "205 lbs",

    "2526": {
        gp: 78,
        ppg: 20.8,
        tpts: 1624,
        rpg: 3.4,
        trbs: 268,
        apg: 3.7,
        tasts: 286,
        spg: 1.3,
        tst: 102,
        bpg: 0.5,
        tbks: 42,
        fg: "45.9%",
        fg3: "39.9%",
        ft: "90.2%",
        to: 162
    },

    career: {
        gp: 459,
        ppg: 10.6,
        tpts: 4882,
        rpg: 2.6,
        trbs: 1216,
        apg: 2.5,
        tasts: 1168,
        spg: 0.8,
        tst: 358,
        bpg: 0.4,
        tbks: 192,
        fg: "42.7%",
        fg3: "37.2%",
        ft: "80.7%",
        to: 608
    }
},

"dyson-daniels": {
    name: "Dyson Daniels",
    team: "Atlanta Hawks",
    "2526team": "Atlanta Hawks",
    position: "G",
    initials: "DD",
    height: "6'7\"",
    weight: "199 lbs",
    "2526": {
        gp: 76,
        ppg: 11.9,
        tpts: 901,
        rpg: 6.8,
        trbs: 520,
        apg: 5.9,
        tasts: 449,
        spg: "2.0",
        tst: 149,
        bpg: 0.4,
        tbks: 31,
        fg: "51.7%",
        fg3: "18.8%",
        ft: "61.5%",
        to: 135
    },
    career: {
        gp: 272,
        ppg: 9.4,
        tpts: 2555,
        rpg: 5.1,
        trbs: 1393,
        apg: "4.0",
        tasts: 1080,
        spg: 1.9,
        tst: 506,
        bpg: 0.4,
        tbks: 122,
        fg: "48.8%",
        fg3: "29.8%",
        ft: "61.4%",
        to: 406
    }
},
"rayj-dennis": {
    name: "RayJ Dennis",
    team: "Atlanta Hawks",
    "2526team": "IND / LAC / ATL",
    position: "G",
    initials: "RD",
    height: "6'2\"",
    weight: "180 lbs",
    "2526": {
        gp: 17,
        ppg: 4.4,
        tpts: 74,
        rpg: 1.5,
        trbs: 26,
        apg: 1.9,
        tasts: 33,
        spg: 0.2,
        tst: 4,
        bpg: 0.2,
        tbks: 4,
        fg: "31.3%",
        fg3: "31.1%",
        ft: "88.9%",
        to: 17
    },
    career: {
        gp: 28,
        ppg: 3.7,
        tpts: 104,
        rpg: 1.4,
        trbs: 39,
        apg: 1.7,
        tasts: 47,
        spg: 0.4,
        tst: 11,
        bpg: 0.2,
        tbks: 5,
        fg: "31.9%",
        fg3: "30.3%",
        ft: "90.9%",
        to: 26
    }
},
"luguentz-dort": {
    name: "Luguentz Dort",
    team: "Atlanta Hawks",
    "2526team": "Oklahoma City Thunder",
    position: "G",
    initials: "LD",
    height: "6'4\"",
    weight: "220 lbs",
    "2526": {
        gp: 69,
        ppg: 8.3,
        tpts: 576,
        rpg: 3.6,
        trbs: 245,
        apg: 1.2,
        tasts: 85,
        spg: 0.9,
        tst: 62,
        bpg: 0.4,
        tbks: 27,
        fg: "38.5%",
        fg3: "34.4%",
        ft: "75.9%", 
        to: 54
    },
    career: {
        gp: 432,
        ppg: 11.6,
        tpts: 5018,
        rpg: 3.8,
        trbs: 1648,
        apg: 1.6,
        tasts: 670,
        spg: 0.9,
        tst: 409,
        bpg: 0.4,
        tbks: 177,
        fg: "40.5%",
        fg3: "35.8%",
        ft: "78.8%",
        to: 460
    }
},
"zuby-ejiofor": {
    name: "Zuby Ejiofor",
    team: "Atlanta Hawks",
    "2526team": "St. John's",
    position: "F",
    initials: "ZE",
    height: "6'9\"",
    weight: "245 lbs",
    rookie: true,
    "2526": {
        gp: 37,
        ppg: 16.3,
        tpts: 604,
        rpg: 7.3,
        trbs: 271,
        apg: 3.5,
        tasts: 131,
        spg: 1.2,
        tst: 43,
        bpg: 2.1,
        tbks: 79,
        fg: "53.6%",
        fg3: "30.5%",
        ft: "71.8%",
        to: 78
    },
    career: {
        gp: 131,
        ppg: "10.0",
        tpts: 1305,
        rpg: 5.4,
        trbs: 707,
        apg: 1.7,
        tasts: 218,
        spg: 0.7,
        tst: 92,
        bpg: 1.4,
        tbks: 180,
        fg: "55.0%",
        fg3: "27.7%",
        ft: "70.9%",
        to: 172
    }
},
"dorian-finney-smith": {
    name: "Dorian Finney-Smith",
    team: "Atlanta Hawks",
    "2526team": "Houston Rockets",
    position: "F",
    initials: "DFS",
    height: "6'7\"",
    weight: "220 lbs",
    "2526": {
        gp: 37,
        ppg: 3.3,
        tpts: 123,
        rpg: 2.5,
        trbs: 93,
        apg: "1.0",
        tasts: 36,
        spg: 0.4,
        tst: 16,
        bpg: 0.2,
        tbks: 6,
        fg: "33.3%",
        fg3: "27.0%",
        ft: "88.9%",
        to: 22
    },
    career: {
        gp: 628,
        ppg: "8.0",
        tpts: 5032,
        rpg: 4.4,
        trbs: 2765,
        apg: 1.4,
        tasts: 887,
        spg: 0.8,
        tst: 501,
        bpg: 0.4,
        tbks: 271,
        fg: "43.3%",
        fg3: "35.9%",
        ft: "72.1%",
        to: 536
    }
},
"kingston-flemings": {
    name: "Kingston Flemings",
    team: "Atlanta Hawks",
    "2526team": "Houston",
    position: "G",
    initials: "KF",
    height: "6'4\"",
    weight: "190 lbs",
    rookie: true,
    "2526": {
        gp: 37,
        ppg: 16.1,
        tpts: 594,
        rpg: 4.1,
        trbs: 150,
        apg: 5.2,
        tasts: 192,
        spg: 1.5,
        tst: 56,
        bpg: 0.3,
        tbks: 12,
        fg: "47.6%",
        fg3: "38.7%",
        ft: "84.5%",
        to: 66
    },
    career: {
        gp: 37,
        ppg: 16.1,
        tpts: 594,
        rpg: 4.1,
        trbs: 150,
        apg: 5.2,
        tasts: 192,
        spg: 1.5,
        tst: 56,
        bpg: 0.3,
        tbks: 12,
        fg: "47.6%",
        fg3: "38.7%",
        ft: "84.5%",
        to: 66
    }
},
"keshon-gilbert": {
    name: "Keshon Gilbert",
    team: "Atlanta Hawks",
    "2526team": "Washington Wizards / Atlanta Hawks",
    position: "G",
    initials: "KG",
    height: "6'4\"",
    weight: "200 lbs",
    "2526": {
        gp: 4,
        ppg: 4.3,
        tpts: 17,
        rpg: 1.3,
        trbs: 5,
        apg: "3.0",
        tasts: 12,
        spg: 0.8,
        tst: "3",
        bpg: "1.0",
        tbks: "4",
        fg: "41.7%",
        fg3: "0.0%",
        ft: "100%",
        to: 8
    },
    career: {
        gp: 4,
        ppg: 4.3,
        tpts: 17,
        rpg: 1.3,
        trbs: 5,
        apg: "3.0",
        tasts: 12,
        spg: 0.8,
        tst: 3,
        bpg: "1.0",
        tbks: 4,
        fg: "41.7%",
        fg3: "0.0%",
        ft: "100%",
        to: 8
    }
},
"mouhamed-gueye": {
    name: "Mouhamed Gueye",
    team: "Atlanta Hawks",
    "2526team": "Atlanta Hawks",
    position: "F",
    initials: "MG",
    height: "6'11\"",
    weight: "210 lbs",
    "2526": {
        gp: 77,
        ppg: 4.4,
        tpts: 342,
        rpg: 3.6,
        trbs: 275,
        apg: 0.9,
        tasts: 69,
        spg: 0.8,
        tst: 61,
        bpg: 0.5,
        tbks: 39,
        fg: "45.2%",
        fg3: "30.8%",
        ft: "64.5%",
        to: 33
    },
    career: {
        gp: 116,
        ppg: 4.9,
        tpts: 563,
        rpg: 3.8,
        trbs: 436,
        apg: 0.9,
        tasts: 100,
        spg: 0.8,
        tst: 94,
        bpg: 0.7,
        tbks: 76,
        fg: "43.6%",
        fg3: "29.1%",
        ft: "70.0%",
        to: 49
    }
},
"jalen-johnson": {
    name: "Jalen Johnson",
    team: "Atlanta Hawks",
    "2526team": "Atlanta Hawks",
    position: "F",
    initials: "JJ",
    height: "6'8\"",
    weight: "219 lbs",
    "2526": {
        gp: 72,
        ppg: 22.5,
        tpts: 1621,
        rpg: 10.3,
        trbs: 740,
        apg: 7.9,
        tasts: 566,
        spg: 1.2,
        tst: 89,
        bpg: 0.4,
        tbks: 31,
        fg: "48.9%",
        fg3: "35.2%",
        ft: "78.8%",
        to: 244
    },
    career: {
        gp: 256,
        ppg: 14.2,
        tpts: 3592,
        rpg: 7.4,
        trbs: 1895,
        apg: "4.0",
        tasts: 1036,
        spg: "1.0",
        tst: 253,
        bpg: 0.6,
        tbks: 150,
        fg: "49.7%",
        fg3: "33.5%",
        ft: "75.1%",
        to: 501
    }
},
"keon-johnson": {
    name: "Keon Johnson",
    team: "Atlanta Hawks",
    "2526team": "Maine Celtics",
    position: "G",
    initials: "KJ",
    height: "6'5\"",
    weight: "185 lbs",
    "2526": {
        gp: 15,
        ppg: 16.4,
        tpts: 246,
        rpg: 5.3,
        trbs: 80,
        apg: 3.8,
        tasts: 57,
        spg: 1.1,
        tst: 17,
        bpg: 0.7,
        tbks: 11,
        fg: "45.0%",
        fg3: "34.0%",
        ft: "77.0%",
        to: 30
    },
    career: {
        gp: 161,
        ppg: 8.2,
        tpts: 1326,
        rpg: 2.7,
        trbs: 429,
        apg: 1.9,
        tasts: 313,
        spg: 0.8,
        tst: 132,
        bpg: 0.3,
        tbks: 49,
        fg: "37.9%",
        fg3: "32.4%",
        ft: "76.5%",
        to: 210
    }
},
"corey-kispert": {
    name: "Corey Kispert",
    team: "Atlanta Hawks",
    "2526team": "Washington Wizards / Atlanta Hawks",
    position: "F",
    initials: "CK",
    height: "6'6\"",
    weight: "224 lbs",
    "2526": {
        gp: 58,
        ppg: 9.2,
        tpts: 532,
        rpg: 2.3,
        trbs: 132,
        apg: 1.6,
        tasts: 92,
        spg: 0.3,
        tst: 16,
        bpg: 0.2,
        tbks: 9,
        fg: "46.7%",
        fg3: "36.7%",
        ft: "79.4%",
        to: 45
    },
    career: {
        gp: 350,
        ppg: 10.7,
        tpts: 3761,
        rpg: 2.7,
        trbs: 954,
        apg: 1.5,
        tasts: 524,
        spg: 0.4,
        tst: 151,
        bpg: 0.2,
        tbks: 70,
        fg: "47.3%",
        fg3: "38.0%",
        ft: "80.3%",
        to: 312
    }
},
"jock-landale": {
    name: "Jock Landale",
    team: "Atlanta Hawks",
    "2526team": "Memphis Grizzlies / Atlanta Hawks",
    position: "C",
    initials: "JL",
    height: "6'11\"",
    weight: "255 lbs",
    "2526": {
        gp: 68,
        ppg: 10.6,
        tpts: 718,
        rpg: 5.7,
        trbs: 387,
        apg: 1.7,
        tasts: 115,
        spg: 0.5,
        tst: 35,
        bpg: 0.5,
        tbks: 36,
        fg: "51.5%",
        fg3: "38.3%",
        ft: "63.5%",
        to: 60
    },
    career: {
        gp: 289,
        ppg: 6.6,
        tpts: 1913,
        rpg: 3.9,
        trbs: 1114,
        apg: 1.1,
        tasts: 330,
        spg: 0.3,
        tst: 94,
        bpg: 0.4,
        tbks: 123,
        fg: "51.7%",
        fg3: "33.6%",
        ft: "72.1%",
        to: 202
    }
},
"cj-mccollum": {
    name: "CJ McCollum",
    team: "Atlanta Hawks",
    "2526team": "Washington Wizards / Atlanta Hawks",
    position: "G",
    initials: "CM",
    height: "6'3\"",
    weight: "190 lbs",
    "2526": {
        gp: 76,
        ppg: 18.7,
        tpts: 1424,
        rpg: 3.3,
        trbs: 252,
        apg: 3.9,
        tasts: 293,
        spg: 0.8,
        tst: 64,
        bpg: 0.5,
        tbks: 35,
        fg: "45.5%",
        fg3: "37.5%",
        ft: "77.2%",
        to: 135
    },
    career: {
        gp: 863,
        ppg: 19.5,
        tpts: 16838,
        rpg: 3.6,
        trbs: 3119,
        apg: 3.8,
        tasts: 3298,
        spg: 0.9,
        tst: 768,
        bpg: 0.4,
        tbks: 361,
        fg: "45.3%",
        fg3: "39.5%",
        ft: "79.6%",
        to: 1561
    }
},
"asa-newell": {
    name: "Asa Newell",
    team: "Atlanta Hawks",
    "2526team": "Atlanta Hawks",
    position: "F",
    initials: "AN",
    height: "6'10\"",
    weight: "220 lbs",
    "2526": {
        gp: 44,
        ppg: 5.2,
        tpts: 227,
        rpg: 2.2,
        trbs: 96,
        apg: 0.6,
        tasts: 26,
        spg: 0.4,
        tst: 16,
        bpg: 0.3,
        tbks: 15,
        fg: "53.8%",
        fg3: "38.7%",
        ft: "55.2%",
        to: 23
    },
    career: {
        gp: 44,
        ppg: 5.2,
        tpts: 227,
        rpg: 2.2,
        trbs: 96,
        apg: 0.6,
        tasts: 26,
        spg: 0.4,
        tst: 16,
        bpg: 0.3,
        tbks: 15,
        fg: "53.8%",
        fg3: "38.7%",
        ft: "55.2%",
        to: 23
    }
},
"onyeka-okongwu": {
    name: "Onyeka Okongwu",
    team: "Atlanta Hawks",
    "2526team": "Atlanta Hawks",
    position: "F",
    initials: "OO",
    height: "6'10\"",
    weight: "240 lbs",
    "2526": {
        gp: 74,
        ppg: 15.2,
        tpts: 1123,
        rpg: 7.6,
        trbs: 562,
        apg: 3.1,
        tasts: 231,
        spg: 1.1,
        tst: 82,
        bpg: 1.1,
        tbks: 79,
        fg: "48.0%",
        fg3: "37.6%",
        ft: "75.7%",
        to: 127
    },
    career: {
        gp: 381,
        ppg: 10.7,
        tpts: 4077,
        rpg: 6.9,
        trbs: 2629,
        apg: 1.6,
        tasts: 610,
        spg: 0.8,
        tst: 304,
        bpg: 1.1,
        tbks: 419,
        fg: "57.3%",
        fg3: "35.6%",
        ft: "75.6%",
        to: 425
    }
},
"henri-veesaar": {
    name: "Henri Veesaar",
    team: "Atlanta Hawks",
    "2526team": "North Carolina",
    position: "C",
    initials: "HV",
    height: "7'0\"",
    weight: "225 lbs",
    rookie: true,
    "2526": {
        gp: 31,
        ppg: "17.0",
        tpts: 528,
        rpg: 8.7,
        trbs: 270,
        apg: 2.1,
        tasts: 64,
        spg: 0.6,
        tst: 18,
        bpg: 1.2,
        tbks: 37,
        fg: "60.8%",
        fg3: "42.6%",
        ft: "61.5%",
        to: 52
    },
    career: {
        gp: 97,
        ppg: 9.7,
        tpts: 944,
        rpg: 5.1,
        trbs: 498,
        apg: 1.3,
        tasts: 126,
        spg: 0.5,
        tst: 47,
        bpg: 0.9,
        tbks: 91,
        fg: "60.3%",
        fg3: "38.3%",
        ft: "65.4%",
        to: 106
    }
},
"aaron-wiggins": {
    name: "Aaron Wiggins",
    team: "Atlanta Hawks",
    "2526team": "Oklahoma City Thunder",
    position: "G",
    initials: "AW",
    height: "6'5\"",
    weight: "190 lbs",
    "2526": {
        gp: 65,
        ppg: 9.4,
        tpts: 611,
        rpg: 3.1,
        trbs: 199,
        apg: 1.7,
        tasts: 109,
        spg: 0.9,
        tst: 60,
        bpg: 0.4,
        tbks: 28,
        fg: "43.1%",
        fg3: "35.6%",
        ft: "73.6%",
        to: 81
    },
    career: {
        gp: 339,
        ppg: 8.7,
        tpts: 2962,
        rpg: 3.2,
        trbs: 1069,
        apg: 1.4,
        tasts: 477,
        spg: 0.7,
        tst: 245,
        bpg: 0.3,
        tbks: 90,
        fg: "48.7%",
        fg3: "38.0%",
        ft: "78.4%",
        to: 316
    }
},
"jalen-wilson": {
    name: "Jalen Wilson",
    team: "Atlanta Hawks",
    "2526team": "Brooklyn Nets",
    position: "F",
    initials: "JW",
    height: "6'6\"",
    weight: "220 lbs",
    "2526": {
        gp: 54,
        ppg: 6.4,
        tpts: 343,
        rpg: 2.1,
        trbs: 114,
        apg: 0.9,
        tasts: 50,
        spg: 0.4,
        tst: 22,
        bpg: "0.0",
        tbks: 2,
        fg: "39.6%",
        fg3: "35.5%",
        ft: "71.9%",
        to: 38
    },
    career: {
        gp: 176,
        ppg: 7.4,
        tpts: 1306,
        rpg: 2.9,
        trbs: 515,
        apg: 1.4,
        tasts: 240,
        spg: 0.4,
        tst: 73,
        bpg: 0.1,
        tbks: 11,
        fg: "40.1%",
        fg3: "34.0%",
        ft: "78.8%",
        to: 136
    }
},
"tyler-bilodeau": {
    name: "Tyler Bilodeau",
    team: "Brooklyn Nets",
    "2526team": "UCLA",
    position: "F",
    initials: "TB",
    height: "6'8\"",
    weight: "228 lbs",
    rookie: true,
    "2526": {
        gp: 31,
        ppg: 17.6,
        tpts: 547,
        rpg: 5.6,
        trbs: 174,
        apg: 1.1,
        tasts: 33,
        spg: 0.5,
        tst: 15,
        bpg: 0.4,
        tbks: 11,
        fg: "51.8%",
        fg3: "46.4%",
        ft: "87.3%",
        to: 40
    },
    career: {
        gp: 128,
        ppg: 13.1,
        tpts: 1676,
        rpg: 4.9,
        trbs: 631,
        apg: 1.1,
        tasts: 138,
        spg: 0.6,
        tst: 74,
        bpg: 0.4,
        tbks: 46,
        fg: "50.6%",
        fg3: "40.0%",
        ft: "80.7%",
        to: 164
    }
},
"mikel-brown-jr": {
    name: "Mikel Brown Jr.",
    team: "Brooklyn Nets",
    "2526team": "Louisville",
    position: "G",
    initials: "MB",
    height: "6'5\"",
    weight: "190 lbs",
    rookie: true,
    "2526": {
        gp: 21,
        ppg: 18.2,
        tpts: 382,
        rpg: 3.3,
        trbs: 70,
        apg: 4.7,
        tasts: 99,
        spg: 1.2,
        tst: 26,
        bpg: 0.1,
        tbks: 3,
        fg: "41.0%",
        fg3: "34.4%",
        ft: "84.4%", 
        to: 65
    },
    career: {
        gp: 21,
        ppg: 18.2,
        tpts: 382,
        rpg: 3.3,
        trbs: 70,
        apg: 4.7,
        tasts: 99,
        spg: 1.2,
        tst: 26,
        bpg: 0.1,
        tbks: 3,
        fg: "41.0%",
        fg3: "34.4%",
        ft: "84.4%", 
        to: 65
    }
},
"noah-clowney": {
    name: "Noah Clowney",
    team: "Brooklyn Nets",
    "2526team": "Brooklyn Nets",
    position: "F",
    initials: "NC",
    height: "6'10\"",
    weight: "210 lbs",
    "2526": {
        gp: 66,
        ppg: 12.3,
        tpts: 809,
        rpg: 4.1,
        trbs: 273,
        apg: 1.6,
        tasts: 108,
        spg: 0.8,
        tst: 50,
        bpg: 0.7,
        tbks: 45,
        fg: "39.6%",
        fg3: "32.9%",
        ft: "80.4%",
        to: 102
    },
    career: {
        gp: 135,
        ppg: 10.1,
        tpts: 1362,
        rpg: "4.0",
        trbs: 535,
        apg: 1.2,
        tasts: 166,
        spg: 0.6,
        tst: 82,
        bpg: 0.6,
        tbks: 82,
        fg: "39.5%",
        fg3: "33.2%",
        ft: "80.2%",
        to: 163
    }
},
"egor-demin": {
    name: "Egor Demin",
    team: "Brooklyn Nets",
    "2526team": "Brooklyn Nets",
    position: "G",
    initials: "ED",
    height: "6'8\"",
    weight: "200 lbs",
    "2526": {
        gp: 52,
        ppg: 10.3,
        tpts: 536,
        rpg: 3.2,
        trbs: 165,
        apg: 3.3,
        tasts: 173,
        spg: 0.8,
        tst: 42,
        bpg: 0.3,
        tbks: 17,
        fg: "39.9%",
        fg3: "38.5%",
        ft: "83.1%", 
        to: 86
    },
    career: {
        gp: 52,
        ppg: 10.3,
        tpts: 536,
        rpg: 3.2,
        trbs: 165,
        apg: 3.3,
        tasts: 173,
        spg: 0.8,
        tst: 42,
        bpg: 0.3,
        tbks: 17,
        fg: "39.9%",
        fg3: "38.5%",
        ft: "87.0%", 
        to: 86
    }
},
"keon-ellis": {
    name: "Keon Ellis",
    team: "Brooklyn Nets",
    "2526team": "Sacramento Kings / Cleveland Cavaliers",
    position: "G",
    initials: "KE",
    height: "6'4\"",
    weight: "175 lbs",
    "2526": {
        gp: 72,
        ppg: 6.7,
        tpts: 480,
        rpg: 1.9,
        trbs: 135,
        apg: "1.0",
        tasts: 72,
        spg: 1.2,
        tst: 83,
        bpg: 0.6,
        tbks: 46,
        fg: "44.0%",
        fg3: "36.3%",
        ft: "72.9%",
        to: 41
    },
    career: {
        gp: 225,
        ppg: 6.6,
        tpts: 1485,
        rpg: 2.1,
        trbs: 473,
        apg: 1.3,
        tasts: 287,
        spg: 1.2,
        tst: 275,
        bpg: 0.6,
        tbks: 132,
        fg: "46.5%",
        fg3: "40.7%",
        ft: "77.8%",
        to: 158
    }
},
"tyson-etienne": {
    name: "Tyson Etienne",
    team: "Brooklyn Nets",
    "2526team": "Brooklyn Nets",
    position: "G",
    initials: "TE",
    height: "6'0\"",
    weight: "200 lbs",
    "2526": {
        gp: 24,
        ppg: 7.9,
        tpts: 189,
        rpg: 1.1,
        trbs: 27,
        apg: 1.7,
        tasts: 40,
        spg: 0.5,
        tst: 11,
        bpg: "0.0",
        tbks: 0,
        fg: "40.0%",
        fg3: "39.8%",
        ft: "83.3%",
        to: 16
    },
    career: {
        gp: 31,
        ppg: 7.9,
        tpts: 244,
        rpg: 1.2,
        trbs: 36,
        apg: 1.7,
        tasts: 52,
        spg: 0.5,
        tst: 14,
        bpg: "0.0",
        tbks: 1,
        fg: "38.1%",
        fg3: "36.8%",
        ft: "82.6%",
        to: 24
    }
},
"joshua-jefferson": {
    name: "Joshua Jefferson",
    team: "Brooklyn Nets",
    "2526team": "Iowa State",
    position: "F",
    initials: "JJ",
    height: "6'8\"",
    weight: "246 lbs",
    rookie: true,
    "2526": {
        gp: 35,
        ppg: 16.4,
        tpts: 575,
        rpg: 7.4,
        trbs: 260,
        apg: 4.8,
        tasts: 167,
        spg: 1.6,
        tst: 57,
        bpg: 0.8,
        tbks: 29,
        fg: "47.1%",
        fg3: "34.5%",
        ft: "70.0%",
        to: 89
    },
    career: {
        gp: 130,
        ppg: 10.5,
        tpts: 1367,
        rpg: 5.7,
        trbs: 737,
        apg: 2.7,
        tasts: 352,
        spg: 1.4,
        tst: 179,
        bpg: 0.5,
        tbks: 70,
        fg: "48.3%",
        fg3: "31.5%",
        ft: "72.2%",
        to: 229
    }
},
"chaney-johnson": {
    name: "Chaney Johnson",
    team: "Brooklyn Nets",
    "2526team": "Brooklyn Nets",
    position: "F",
    initials: "CJ",
    height: "6'7\"",
    weight: "220 lbs",
    "2526": {
        gp: 17,
        ppg: 8.2,
        tpts: 139,
        rpg: 4.6,
        trbs: 79,
        apg: 2.1,
        tasts: 36,
        spg: 0.9,
        tst: 15,
        bpg: 0.5,
        tbks: 9,
        fg: "54.3%",
        fg3: "30.0%",
        ft: "80.0%",
        to: 20
    },
    career: {
        gp: 17,
        ppg: 8.2,
        tpts: 139,
        rpg: 4.6,
        trbs: 79,
        apg: 2.1,
        tasts: 36,
        spg: 0.9,
        tst: 15,
        bpg: 0.5,
        tbks: 9,
        fg: "54.3%",
        fg3: "30.0%",
        ft: "80.0%",
        to: 20
    }
},
"ej-liddell": {
    name: "E.J. Liddell",
    team: "Brooklyn Nets",
    "2526team": "Brooklyn Nets",
    position: "F",
    initials: "EL",
    height: "6'6\"",
    weight: "240 lbs",
    "2526": {
        gp: 26,
        ppg: 5.7,
        tpts: 147,
        rpg: 2.7,
        trbs: 69,
        apg: 0.9,
        tasts: 24,
        spg: 0.2,
        tst: 6,
        bpg: 0.4,
        tbks: 10,
        fg: "48.6%",
        fg3: "34.6%",
        ft: "80.8%",
        to: 15
    },
    career: {
        gp: 46,
        ppg: 3.7,
        tpts: 172,
        rpg: 1.8,
        trbs: 83,
        apg: 0.6,
        tasts: 28,
        spg: 0.2,
        tst: 9,
        bpg: 0.3,
        tbks: 13,
        fg: "47.7%",
        fg3: "31.3%",
        ft: "83.3%",
        to: 19
    }
},
"terance-mann": {
    name: "Terance Mann",
    team: "Brooklyn Nets",
    "2526team": "Brooklyn Nets",
    position: "G",
    initials: "TM",
    height: "6'6\"",
    weight: "215 lbs",
    "2526": {
        gp: 63,
        ppg: 7.2,
        tpts: 455,
        rpg: 3.2,
        trbs: 200,
        apg: "3.0",
        tasts: 190,
        spg: 0.7,
        tst: 41,
        bpg: 0.2,
        tbks: 15,
        fg: "45.7%",
        fg3: "36.4%",
        ft: "78.8%",
        to: 71
    },
    career: {
        gp: 411,
        ppg: 8.2,
        tpts: 3364,
        rpg: 3.9,
        trbs: 1613,
        apg: 1.9,
        tasts: 790,
        spg: 0.7,
        tst: 274,
        bpg: 0.3,
        tbks: 111,
        fg: "49.5%",
        fg3: "38.0%",
        ft: "79.0%",
        to: 407
    }
},
"josh-minott": {
    name: "Josh Minott",
    team: "Brooklyn Nets",
    "2526team": "Boston Celtics / Brooklyn Nets",
    position: "F",
    initials: "JM",
    height: "6'8\"",
    weight: "205 lbs",
    "2526": {
        gp: 49,
        ppg: 7.4,
        tpts: 364,
        rpg: 3.2,
        trbs: 158,
        apg: 0.9,
        tasts: 46,
        spg: 0.9,
        tst: 44,
        bpg: 0.5,
        tbks: 24,
        fg: "50.0%",
        fg3: "41.8%",
        ft: "78.7%",
        to: 43
    },
    career: {
        gp: 142,
        ppg: 4.1,
        tpts: 579,
        rpg: 1.7,
        trbs: 247,
        apg: 0.5,
        tasts: 77,
        spg: 0.5,
        tst: 68,
        bpg: 0.3,
        tbks: 47,
        fg: "49.5%",
        fg3: "39.6%",
        ft: "83.3%",
        to: 59
    }
},
"michael-porter-jr": {
    name: "Michael Porter Jr.",
    team: "Brooklyn Nets",
    "2526team": "Brooklyn Nets",
    position: "F",
    initials: "MPJ",
    height: "6'10\"",
    weight: "218 lbs",
    "2526": {
        gp: 52,
        ppg: 24.2,
        tpts: 1259,
        rpg: 7.8,
        trbs: 406,
        apg: 3.4,
        tasts: 177,
        spg: 1.2,
        tst: 62,
        bpg: 0.3,
        tbks: 16,
        fg: "46.3%",
        fg3: "36.3%",
        ft: "85.9%",
        to: 137
    },
    career: {
        gp: 397,
        ppg: 17.3,
        tpts: 8390,
        rpg: 6.5,
        trbs: 2578,
        apg: 1.6,
        tasts: 628,
        spg: 0.8,
        tst: 317,
        bpg: 0.7,
        tbks: 278,
        fg: "49.3%",
        fg3: "39.8%",
        ft: "81.2%",
        to: 633
    }
},
"drake-powell": {
    name: "Drake Powell",
    team: "Brooklyn Nets",
    "2526team": "Brooklyn Nets",
    position: "G",
    initials: "DP",
    height: "6'5\"",
    weight: "195 lbs",
    rookie: true,
    "2526": {
        gp: 63,
        ppg: 6.5,
        tpts: 408,
        rpg: 1.8,
        trbs: 111,
        apg: 1.4,
        tasts: 91,
        spg: 0.6,
        tst: 36,
        bpg: 0.2,
        tbks: 14,
        fg: "40.2%",
        fg3: "28.0%",
        ft: "89.6%",
        to: 60
    },
    career: {
        gp: 63,
        ppg: 6.5,
        tpts: 408,
        rpg: 1.8,
        trbs: 111,
        apg: 1.4,
        tasts: 91,
        spg: 0.6,
        tst: 36,
        bpg: 0.2,
        tbks: 14,
        fg: "40.2%",
        fg3: "28.0%",
        ft: "89.6%",
        to: 60
    }
},
"julius-randle": {
    name: "Julius Randle",
    team: "Brooklyn Nets",
    "2526team": "Minnesota Timberwolves",
    position: "F",
    initials: "JR",
    height: "6'9\"",
    weight: "250 lbs",
    "2526": {
        gp: 78,
        ppg: 21.1,
        tpts: 1648,
        rpg: 6.8,
        trbs: 530,
        apg: 5.1,
        tasts: 394,
        spg: 1.1,
        tst: 86,
        bpg: 0.2,
        tbks: 18,
        fg: "48.2%",
        fg3: "31.3%",
        ft: "80.0%",
        to: 216
    },
    career: {
        gp: 788,
        ppg: 19.2,
        tpts: 15100,
        rpg: 8.9,
        trbs: 7000,
        apg: 3.9,
        tasts: 3070,
        spg: 0.7,
        tst: 550,
        bpg: 0.4,
        tbks: 315,
        fg: "47.2%",
        fg3: "33.2%",
        ft: "75.9%",
        to: 2200
    }
},
"ben-saraf": {
    name: "Ben Saraf",
    team: "Brooklyn Nets",
    "2526team": "Brooklyn Nets",
    position: "G",
    initials: "BS",
    height: "6'6\"",
    weight: "200 lbs",
    rookie: true,
    "2526": {
        gp: 44,
        ppg: 7.5,
        tpts: 332,
        rpg: 2.1,
        trbs: 92,
        apg: 3.3,
        tasts: 145,
        spg: 0.9,
        tst: 38,
        bpg: 0.2,
        tbks: 8,
        fg: "39.6%",
        fg3: "21.1%",
        ft: "83.0%",
        to: 99
    },
    career: {
        gp: 44,
        ppg: 7.5,
        tpts: 332,
        rpg: 2.1,
        trbs: 92,
        apg: 3.3,
        tasts: 145,
        spg: 0.9,
        tst: 38,
        bpg: 0.2,
        tbks: 8,
        fg: "39.6%",
        fg3: "21.1%",
        ft: "83.0%",
        to: 99
    }
},
"dayron-sharpe": {
    name: "Day'Ron Sharpe",
    team: "Brooklyn Nets",
    "2526team": "Brooklyn Nets",
    position: "C",
    initials: "DS",
    height: "6'10\"",
    weight: "265 lbs",
    "2526": {
        gp: 62,
        ppg: 8.7,
        tpts: 540,
        rpg: 6.7,
        trbs: 413,
        apg: 2.3,
        tasts: 145,
        spg: 1.1,
        tst: 67,
        bpg: 0.4,
        tbks: 26,
        fg: "60.1%",
        fg3: "23.1%",
        ft: "67.8%",
        to: 106
    },
    career: {
        gp: 253,
        ppg: "7.0",
        tpts: 1777,
        rpg: 5.9,
        trbs: 1492,
        apg: 1.5,
        tasts: 375,
        spg: 0.6,
        tst: 157,
        bpg: 0.6,
        tbks: 159,
        fg: "56.4%",
        fg3: "27.4%",
        ft: "65.8%",
        to: 311
    }
},
"nolan-traore": {
    name: "Nolan Traore",
    team: "Brooklyn Nets",
    "2526team": "Brooklyn Nets",
    position: "G",
    initials: "NT",
    height: "6'3\"",
    weight: "185 lbs",
    rookie: true,
    "2526": {
        gp: 56,
        ppg: 8.9,
        tpts: 499,
        rpg: 1.8,
        trbs: 99,
        apg: 3.8,
        tasts: 213,
        spg: 0.8,
        tst: 45,
        bpg: 0.4,
        tbks: 23,
        fg: "38.0%",
        fg3: "31.8%",
        ft: "78.7%",
        to: 129
    },
    career: {
        gp: 56,
        ppg: 8.9,
        tpts: 499,
        rpg: 1.8,
        trbs: 99,
        apg: 3.8,
        tasts: 213,
        spg: 0.8,
        tst: 45,
        bpg: 0.4,
        tbks: 23,
        fg: "38.0%",
        fg3: "31.8%",
        ft: "78.7%",
        to: 129
    }
},
"moritz-wagner": {
    name: "Moritz Wagner",
    team: "Brooklyn Nets",
    "2526team": "Orlando Magic",
    position: "F-C",
    initials: "MW",
    height: "6'11\"",
    weight: "245 lbs",
    "2526": {
        gp: 36,
        ppg: 6.9,
        tpts: 247,
        rpg: 3.2,
        trbs: 115,
        apg: 0.8,
        tasts: 27,
        spg: 0.4,
        tst: 15,
        bpg: 0.1,
        tbks: 2,
        fg: "42.6%",
        fg3: "31.4%",
        ft: "81.9%",
        to: 19
    },
    career: {
        gp: 399,
        ppg: "9.0",
        tpts: 3575,
        rpg: 3.9,
        trbs: 1551,
        apg: 1.2,
        tasts: 466,
        spg: 0.5,
        tst: 200,
        bpg: 0.3,
        tbks: 111,
        fg: "51.8%",
        fg3: "32.3%",
        ft: "80.8%",
        to: 437
    }
},
"danny-wolf": {
    name: "Danny Wolf",
    team: "Brooklyn Nets",
    "2526team": "Brooklyn Nets",
    position: "F",
    initials: "DW",
    height: "6'11\"",
    weight: "250 lbs",
    rookie: true,
    "2526": {
        gp: 57,
        ppg: 8.9,
        tpts: 508,
        rpg: 4.9,
        trbs: 281,
        apg: 2.2,
        tasts: 127,
        spg: 0.5,
        tst: 30,
        bpg: 0.6,
        tbks: 32,
        fg: "40.5%",
        fg3: "32.2%",
        ft: "77.1%",
        to: 73
    },
    career: {
        gp: 57,
        ppg: 8.9,
        tpts: 508,
        rpg: 4.9,
        trbs: 281,
        apg: 2.2,
        tasts: 127,
        spg: 0.5,
        tst: 30,
        bpg: 0.6,
        tbks: 32,
        fg: "40.5%",
        fg3: "32.2%",
        ft: "77.1%",
        to: 73
    }
},
"grayson-allen": {
    name: "Grayson Allen",
    team: "Charlotte Hornets",
    "2526team": "Phoenix Suns",
    position: "G",
    initials: "GA",
    height: "6'3\"",
    weight: "198 lbs",
    "2526": {
        gp: "51",
        ppg: "16.5",
        tpts: "841",
        rpg: "3.0",
        trbs: "155",
        apg: "3.8",
        tasts: "195",
        spg: "1.4",
        tst: "69",
        bpg: "0.3",
        tbks: "13",
        fg: "40.3%",
        fg3: "34.9%",
        ft: "85.7%",
        to: "83"
    },
    career: {
        gp: "454",
        ppg: "11.2",
        tpts: "5091",
        rpg: "3.0",
        trbs: "1371",
        apg: "2.2",
        tasts: "1007",
        spg: "0.8",
        tst: "362",
        bpg: "0.3",
        tbks: "125",
        fg: "44.3%",
        fg3: "40.3%",
        ft: "85.7%",
        to: "482"
    }
},

"christian-anderson": {
    name: "Christian Anderson",
    team: "Charlotte Hornets",
    "2526team": "Texas Tech",
    position: "G",
    initials: "CA",
    height: "6'1\"",
    weight: "180 lbs",
    rookie: true,
    "2526": {
        gp: "33",
        ppg: "18.5",
        tpts: "611",
        rpg: "3.6",
        trbs: "118",
        apg: "7.4",
        tasts: "244",
        spg: "1.5",
        tst: "48",
        bpg: "0.2",
        tbks: "8",
        fg: "47.2%",
        fg3: "41.5%",
        ft: "80.5%",
        to: "109"
    },
    career: {
        gp: "68",
        ppg: "14.5",
        tpts: "983",
        rpg: "3.3",
        trbs: "223",
        apg: "4.7",
        tasts: "321",
        spg: "1.3",
        tst: "89",
        bpg: "0.2",
        tbks: "11",
        fg: "45.5%",
        fg3: "40.0%",
        ft: "80.4%",
        to: "145"
    }
},

"pat-connaughton": {
    name: "Pat Connaughton",
    team: "Charlotte Hornets",
    "2526team": "Charlotte Hornets",
    position: "G",
    initials: "PC",
    height: "6'5\"",
    weight: "209 lbs",
    "2526": {
        gp: "42",
        ppg: "2.6",
        tpts: "110",
        rpg: "1.5",
        trbs: "61",
        apg: "0.4",
        tasts: "18",
        spg: "0.3",
        tst: "11",
        bpg: "0.0",
        tbks: "1",
        fg: "44.7%",
        fg3: "40.4%",
        ft: "65.0%",
        to: "11"
    },
    career: {
        gp: "637",
        ppg: "5.8",
        tpts: "3689",
        rpg: "3.3",
        trbs: "2084",
        apg: "1.3",
        tasts: "847",
        spg: "0.5",
        tst: "294",
        bpg: "0.3",
        tbks: "160",
        fg: "43.8%",
        fg3: "35.7%",
        ft: "76.7%",
        to: "340"
    }
},

"moussa-diabate": {
    name: "Moussa Diabate",
    team: "Charlotte Hornets",
    "2526team": "Charlotte Hornets",
    position: "F",
    initials: "MD",
    height: "6'10\"",
    weight: "210 lbs",
    "2526": {
        gp: "73",
        ppg: "7.9",
        tpts: "575",
        rpg: "8.7",
        trbs: "635",
        apg: "1.9",
        tasts: "141",
        spg: "0.8",
        tst: "56",
        bpg: "1.0",
        tbks: "72",
        fg: "63.1%",
        fg3: "50.0%",
        ft: "65.9%",
        to: "73"
    },
    career: {
        gp: "177",
        ppg: "6.0",
        tpts: "1066",
        rpg: "6.5",
        trbs: "1147",
        apg: "1.2",
        tasts: "205",
        spg: "0.6",
        tst: "114",
        bpg: "0.7",
        tbks: "121",
        fg: "60.6%",
        fg3: "20.0%",
        ft: "63.4%",
        to: "145"
    }
},

"rob-dillingham": {
    name: "Rob Dillingham",
    team: "Free Agent",
    "2526team": "Minnesota Timberwolves / Chicago Bulls",
    position: "G",
    initials: "RD",
    height: "6'2\"",
    weight: "175 lbs",
    "2526": {
        gp: "65",
        ppg: "6.3",
        tpts: "409",
        rpg: "2.0",
        trbs: "131",
        apg: "2.2",
        tasts: "143",
        spg: "0.7",
        tst: "47",
        bpg: "0.1",
        tbks: "6",
        fg: "39.6%",
        fg3: "31.6%",
        ft: "74.5%",
        to: "100"
    },
    career: {
        gp: "114",
        ppg: "5.5",
        tpts: "636",
        rpg: "1.6",
        trbs: "183",
        apg: "2.1",
        tasts: "241",
        spg: "0.6",
        tst: "67",
        bpg: "0.1",
        tbks: "7",
        fg: "41.1%",
        fg3: "32.4%",
        ft: "70.0%",
        to: "153"
    }
},

"pj-hall": {
    name: "PJ Hall",
    team: "Charlotte Hornets",
    "2526team": "Memphis Grizzlies / Charlotte Hornets",
    position: "C",
    initials: "PH",
    height: "6'8\"",
    weight: "245 lbs",
    "2526": {
        gp: "19",
        ppg: "4.5",
        tpts: "86",
        rpg: "3.9",
        trbs: "75",
        apg: "0.5",
        tasts: "10",
        spg: "0.2",
        tst: "3",
        bpg: "0.5",
        tbks: "10",
        fg: "50.8%",
        fg3: "60.0%",
        ft: "79.3%",
        to: "16"
    },
    career: {
        gp: "38",
        ppg: "3.1",
        tpts: "119",
        rpg: "2.6",
        trbs: "97",
        apg: "0.4",
        tasts: "14",
        spg: "0.1",
        tst: "3",
        bpg: "0.4",
        tbks: "14",
        fg: "53.0%",
        fg3: "38.5%",
        ft: "78.8%",
        to: "18"
    }
},

"sion-james": {
    name: "Sion James",
    team: "Charlotte Hornets",
    "2526team": "Charlotte Hornets",
    position: "G",
    initials: "SJ",
    height: "6'5\"",
    weight: "220 lbs",
    "2526": {
        gp: "82",
        ppg: "5.4",
        tpts: "441",
        rpg: "3.5",
        trbs: "287",
        apg: "2.0",
        tasts: "163",
        spg: "0.6",
        tst: "52",
        bpg: "0.2",
        tbks: "20",
        fg: "37.1%",
        fg3: "35.2%",
        ft: "83.7%",
        to: "65"
    },
    career: {
        gp: "82",
        ppg: "5.4",
        tpts: "441",
        rpg: "3.5",
        trbs: "287",
        apg: "2.0",
        tasts: "163",
        spg: "0.6",
        tst: "52",
        bpg: "0.2",
        tbks: "20",
        fg: "37.1%",
        fg3: "35.2%",
        ft: "83.7%",
        to: "65"
    }
},

"ryan-kalkbrenner": {
    name: "Ryan Kalkbrenner",
    team: "Charlotte Hornets",
    "2526team": "Charlotte Hornets",
    position: "C",
    initials: "RK",
    height: "7'1\"",
    weight: "256 lbs",
    "2526": {
        gp: "69",
        ppg: "7.6",
        tpts: "521",
        rpg: "5.5",
        trbs: "377",
        apg: "0.8",
        tasts: "54",
        spg: "0.5",
        tst: "32",
        bpg: "1.5",
        tbks: "101",
        fg: "75.3%",
        fg3: "0.0%",
        ft: "71.6%",
        to: "62"
    },
    career: {
        gp: "69",
        ppg: "7.6",
        tpts: "521",
        rpg: "5.5",
        trbs: "377",
        apg: "0.8",
        tasts: "54",
        spg: "0.5",
        tst: "32",
        bpg: "1.5",
        tbks: "101",
        fg: "75.3%",
        fg3: "0.0%",
        ft: "71.6%",
        to: "62"
    }
},

"kon-knueppel": {
    name: "Kon Knueppel",
    team: "Charlotte Hornets",
    "2526team": "Charlotte Hornets",
    position: "G",
    initials: "KK",
    height: "6'6\"",
    weight: "215 lbs",
    "2526": {
        gp: "81",
        ppg: "18.5",
        tpts: "1498",
        rpg: "5.3",
        trbs: "432",
        apg: "3.4",
        tasts: "274",
        spg: "0.7",
        tst: "57",
        bpg: "0.2",
        tbks: "19",
        fg: "47.5%",
        fg3: "42.5%",
        ft: "86.3%",
        to: "161"
    },
    career: {
        gp: "81",
        ppg: "18.5",
        tpts: "1498",
        rpg: "5.3",
        trbs: "432",
        apg: "3.4",
        tasts: "274",
        spg: "0.7",
        tst: "57",
        bpg: "0.2",
        tbks: "19",
        fg: "47.5%",
        fg3: "42.5%",
        ft: "86.3%",
        to: "161"
    }
},

"liam-mcneeley": {
    name: "Liam McNeely",
    team: "Charlotte Hornets",
    "2526team": "Charlotte Hornets",
    position: "G",
    initials: "LM",
    height: "6'7\"",
    weight: "210 lbs",
    "2526": {
        gp: "31",
        ppg: "4.3",
        tpts: "132",
        rpg: "2.4",
        trbs: "73",
        apg: "0.8",
        tasts: "24",
        spg: "0.2",
        tst: "5",
        bpg: "0.1",
        tbks: "3",
        fg: "40.0%",
        fg3: "40.0%",
        ft: "82.1%",
        to: "13"
    },
    career: {
        gp: "31",
        ppg: "4.3",
        tpts: "132",
        rpg: "2.4",
        trbs: "73",
        apg: "0.8",
        tasts: "24",
        spg: "0.2",
        tst: "5",
        bpg: "0.1",
        tbks: "3",
        fg: "40.0%",
        fg3: "40.0%",
        ft: "82.1%",
        to: "13"
    }
},
"brandon-miller": {
    name: "Brandon Miller",
    team: "Charlotte Hornets",
    "2526team": "Charlotte Hornets",
    position: "F",
    initials: "BM",
    height: "6'7\"",
    weight: "200 lbs",
    "2526": {
        gp: "65",
        ppg: "20.2",
        tpts: "1311",
        rpg: "4.9",
        trbs: "319",
        apg: "3.3",
        tasts: "217",
        spg: "1.0",
        tst: "66",
        bpg: "0.7",
        tbks: "44",
        fg: "43.5%",
        fg3: "38.3%",
        ft: "89.2%",
        to: "163"
    },
    career: {
        gp: "166",
        ppg: "19.0",
        tpts: "3158",
        rpg: "4.6",
        trbs: "765",
        apg: "3.0",
        tasts: "490",
        spg: "1.0",
        tst: "161",
        bpg: "0.6",
        tbks: "106",
        fg: "43.1%",
        fg3: "37.3%",
        ft: "86.3%",
        to: "371"
    }
},

"ryan-nembhard": {
    name: "Ryan Nembhard",
    team: "Charlotte Hornets",
    "2526team": "Dallas Mavericks",
    position: "G",
    initials: "RN",
    height: "5'11\"",
    weight: "180 lbs",
    "2526": {
        gp: "60",
        ppg: "6.6",
        tpts: "397",
        rpg: "2.2",
        trbs: "133",
        apg: "5.3",
        tasts: "316",
        spg: "0.4",
        tst: "25",
        bpg: "0.0",
        tbks: "2",
        fg: "41.5%",
        fg3: "35.6%",
        ft: "80.6%",
        to: "85"
    },
    career: {
        gp: "60",
        ppg: "6.6",
        tpts: "397",
        rpg: "2.2",
        trbs: "133",
        apg: "5.3",
        tasts: "316",
        spg: "0.4",
        tst: "25",
        bpg: "0.0",
        tbks: "2",
        fg: "41.5%",
        fg3: "35.6%",
        ft: "80.6%",
        to: "85"
    }
},

"royce-oneale": {
    name: "Royce O'Neale",
    team: "Charlotte Hornets",
    "2526team": "Phoenix Suns",
    position: "F",
    initials: "RO",
    height: "6'6\"",
    weight: "226 lbs",
    "2526": {
        gp: "78",
        ppg: "9.8",
        tpts: "764",
        rpg: "4.8",
        trbs: "374",
        apg: "2.7",
        tasts: "211",
        spg: "1.1",
        tst: "86",
        bpg: "0.4",
        tbks: "32",
        fg: "42.1%",
        fg3: "40.8%",
        ft: "71.1%",
        to: "101"
    },
    career: {
        gp: "678",
        ppg: "7.4",
        tpts: "5009",
        rpg: "4.8",
        trbs: "3245",
        apg: "2.4",
        tasts: "1644",
        spg: "0.8",
        tst: "567",
        bpg: "0.4",
        tbks: "295",
        fg: "42.5%",
        fg3: "38.9%",
        ft: "76.5%",
        to: "691"
    }
},

"naz-reid": {
    name: "Naz Reid",
    team: "Charlotte Hornets",
    "2526team": "Minnesota Timberwolves",
    position: "C",
    initials: "NR",
    height: "6'9\"",
    weight: "264 lbs",
    "2526": {
        gp: "77",
        ppg: "13.6",
        tpts: "1047",
        rpg: "6.2",
        trbs: "477",
        apg: "2.2",
        tasts: "169",
        spg: "1.0",
        tst: "77",
        bpg: "1.0",
        tbks: "77",
        fg: "45.6%",
        fg3: "36.2%",
        ft: "73.2%",
        to: "123"
    },
    career: {
        gp: "483",
        ppg: "11.9",
        tpts: "5742",
        rpg: "5.1",
        trbs: "2463",
        apg: "1.5",
        tasts: "725",
        spg: "0.7",
        tst: "338",
        bpg: "0.9",
        tbks: "434",
        fg: "48.1%",
        fg3: "37.1%",
        ft: "72.8%",
        to: "627"
    }
},

"tidjane-salaun": {
    name: "Tidjane Salaun",
    team: "Charlotte Hornets",
    "2526team": "Charlotte Hornets",
    position: "F",
    initials: "TS",
    height: "6'10\"",
    weight: "207 lbs",
    "2526": {
        gp: "37",
        ppg: "6.0",
        tpts: "222",
        rpg: "4.0",
        trbs: "149",
        apg: "0.7",
        tasts: "27",
        spg: "0.4",
        tst: "16",
        bpg: "0.2",
        tbks: "7",
        fg: "50.3%",
        fg3: "43.4%",
        ft: "65.0%",
        to: "26"
    },
    career: {
        gp: "97",
        ppg: "5.9",
        tpts: "575",
        rpg: "4.4",
        trbs: "426",
        apg: "1.0",
        tasts: "97",
        spg: "0.5",
        tst: "50",
        bpg: "0.2",
        tbks: "19",
        fg: "38.5%",
        fg3: "32.6%",
        ft: "69.4%",
        to: "87"
    }
},

"dennis-schroder": {
    name: "Dennis Schroder",
    team: "Charlotte Hornets",
    "2526team": "Sacramento Kings / Cleveland Cavaliers",
    position: "G",
    initials: "DS",
    height: "6'1\"",
    weight: "175 lbs",
    "2526": {
        gp: "70",
        ppg: "10.8",
        tpts: "756",
        rpg: "2.7",
        trbs: "190",
        apg: "4.9",
        tasts: "341",
        spg: "0.8",
        tst: "55",
        bpg: "0.2",
        tbks: "11",
        fg: "40.5%",
        fg3: "32.9%",
        ft: "83.4%",
        to: "124"
    },
    career: {
        gp: "912",
        ppg: "13.7",
        tpts: "12494",
        rpg: "2.9",
        trbs: "2624",
        apg: "4.9",
        tasts: "4438",
        spg: "0.8",
        tst: "748",
        bpg: "0.1",
        tbks: "125",
        fg: "43.0%",
        fg3: "34.1%",
        ft: "83.6%",
        to: "1617"
    }
},

"hannes-steinbach": {
    name: "Hannes Steinbach",
    team: "Charlotte Hornets",
    "2526team": "Washington Huskies",
    position: "F",
    initials: "HS",
    height: "6'11\"",
    weight: "220 lbs",
    rookie: true,
    "2526": {
        gp: "30",
        ppg: "18.5",
        tpts: "556",
        rpg: "11.8",
        trbs: "353",
        apg: "1.6",
        tasts: "47",
        spg: "1.1",
        tst: "32",
        bpg: "1.2",
        tbks: "37",
        fg: "57.7%",
        fg3: "34.0%",
        ft: "75.9%",
        to: "59"
    },
    career: {
        gp: "30",
        ppg: "18.5",
        tpts: "556",
        rpg: "11.8",
        trbs: "353",
        apg: "1.6",
        tasts: "47",
        spg: "1.1",
        tst: "32",
        bpg: "1.2",
        tbks: "37",
        fg: "57.7%",
        fg3: "34.0%",
        ft: "75.9%",
        to: "59"
    }
},

"coby-white": {
    name: "Coby White",
    team: "Charlotte Hornets",
    "2526team": "Chicago Bulls / Charlotte Hornets",
    position: "G",
    initials: "CW",
    height: "6'4\"",
    weight: "195 lbs",
    "2526": {
        gp: "50",
        ppg: "17.4",
        tpts: "868",
        rpg: "3.4",
        trbs: "170",
        apg: "4.0",
        tasts: "200",
        spg: "0.7",
        tst: "35",
        bpg: "0.2",
        tbks: "9",
        fg: "44.6%",
        fg3: "36.2%",
        ft: "81.7%",
        to: "185"
    },
    career: {
        gp: "472",
        ppg: "15.4",
        tpts: "7273",
        rpg: "3.6",
        trbs: "1709",
        apg: "3.9",
        tasts: "1818",
        spg: "0.7",
        tst: "77",
        bpg: "0.2",
        tbks: "77",
        fg: "43.4%",
        fg3: "36.9%",
        ft: "85.6%",
        to: "880"
    }
},

"grant-williams": {
    name: "Grant Williams",
    team: "Charlotte Hornets",
    "2526team": "Charlotte Hornets",
    position: "F",
    initials: "GW",
    height: "6'7\"",
    weight: "236 lbs",
    "2526": {
        gp: "36",
        ppg: "7.0",
        tpts: "252",
        rpg: "3.9",
        trbs: "142",
        apg: "1.6",
        tasts: "56",
        spg: "0.5",
        tst: "17",
        bpg: "0.5",
        tbks: "18",
        fg: "42.6%",
        fg3: "38.8%",
        ft: "81.5%",
        to: "31"
    },
    career: {
        gp: "416",
        ppg: "7.2",
        tpts: "2995",
        rpg: "3.7",
        trbs: "1539",
        apg: "1.5",
        tasts: "624",
        spg: "0.5",
        tst: "210",
        bpg: "0.5",
        tbks: "208",
        fg: "45.0%",
        fg3: "37.8%",
        ft: "77.8%",
        to: "416"
    }
},
"tobe-awaka": {
    name: "Tobe Awaka",
    team: "Chicago Bulls",
    "2526team": "Arizona",
    position: "F",
    initials: "TA",
    height: "6'8\"",
    weight: "261 lbs",
    rookie: true,
    "2526": {
        gp: "39",
        ppg: "9.3",
        tpts: "363",
        rpg: "9.1",
        trbs: "355",
        apg: "0.8",
        tasts: "31",
        spg: "0.4",
        tst: "16",
        bpg: "0.6",
        tbks: "23",
        fg: "58.7%",
        fg3: "41.7%",
        ft: "64.2%",
        to: "39"
    },
    career: {
        gp: "145",
        ppg: "6.5",
        tpts: "943",
        rpg: "6.4",
        trbs: "928",
        apg: "0.5",
        tasts: "73",
        spg: "0.3",
        tst: "47",
        bpg: "0.5",
        tbks: "72",
        fg: "60.7%",
        fg3: "41.2%",
        ft: "64.7%",
        to: "101"
    }
},
"brandon-boston-jr": {
    name: "Brandon Boston Jr.",
    team: "Chicago Bulls",
    "2526team": "Fenerbahce",
    position: "G/F",
    initials: "BB",
    height: "6'6\"",
    weight: "188 lbs",
    "2526": {
        gp: "0",
        ppg: "0.0",
        tpts: "0",
        rpg: "0.0",
        trbs: "0",
        apg: "0.0",
        tasts: "0",
        spg: "0.0",
        tst: "0",
        bpg: "0.0",
        tbks: "0",
        fg: "0.0%",
        fg3: "0.0%",
        ft: "0.0%",
        to: "0"
    },
    career: {
        gp: "147",
        ppg: "7.5",
        tpts: "1101",
        rpg: "2.2",
        trbs: "327",
        apg: "1.2",
        tasts: "176",
        spg: "0.7",
        tst: "99",
        bpg: "0.2",
        tbks: "30",
        fg: "41.2%",
        fg3: "32.8%",
        ft: "78.1%",
        to: "119"
    }
},
"matas-buzelis": {
    name: "Matas Buzelis",
    team: "Chicago Bulls",
    "2526team": "Chicago Bulls",
    position: "F",
    initials: "MB",
    height: "6'8\"",
    weight: "209 lbs",
    "2526": {
        gp: "77",
        ppg: "16.3",
        tpts: "1252",
        rpg: "5.8",
        trbs: "448",
        apg: "2.1",
        tasts: "158",
        spg: "0.7",
        tst: "55",
        bpg: "1.5",
        tbks: "116",
        fg: "46.3%",
        fg3: "34.9%",
        ft: "78.6%",
        to: "159"
    },
    career: {
        gp: "157",
        ppg: "12.4",
        tpts: "1940",
        rpg: "4.6",
        trbs: "726",
        apg: "1.5",
        tasts: "237",
        spg: "0.5",
        tst: "84",
        bpg: "1.2",
        tbks: "191",
        fg: "46.0%",
        fg3: "35.3%",
        ft: "79.5%",
        to: "233"
    }
},
"nic-claxton": {
    name: "Nic Claxton",
    team: "Chicago Bulls",
    "2526team": "Brooklyn Nets",
    position: "C",
    initials: "NC",
    height: "6'11\"",
    weight: "215 lbs",
    "2526": {
        gp: "69",
        ppg: "11.7",
        tpts: "807",
        rpg: "6.9",
        trbs: "476",
        apg: "3.7",
        tasts: "255",
        spg: "0.8",
        tst: "55",
        bpg: "1.1",
        tbks: "76",
        fg: "57.1%",
        fg3: "15.8%",
        ft: "61.6%",
        to: "118"
    },
    career: {
        gp: "380",
        ppg: "10.6",
        tpts: "4028",
        rpg: "7.6",
        trbs: "2888",
        apg: "2.1",
        tasts: "798",
        spg: "0.6",
        tst: "223",
        bpg: "1.9",
        tbks: "722",
        fg: "62.2%",
        fg3: "18.6%",
        ft: "55.5%",
        to: "563"
    }
},
"zach-collins": {
    name: "Zach Collins",
    team: "Chicago Bulls",
    "2526team": "Chicago Bulls",
    position: "F/C",
    initials: "ZC",
    height: "6'9\"",
    weight: "250 lbs",
    "2526": {
        gp: "10",
        ppg: "9.7",
        tpts: "97",
        rpg: "5.6",
        trbs: "56",
        apg: "1.5",
        tasts: "15",
        spg: "0.4",
        tst: "4",
        bpg: "0.8",
        tbks: "8",
        fg: "57.8%",
        fg3: "42.9%",
        ft: "70.0%",
        to: "20"
    },
    career: {
        gp: "388",
        ppg: "8.0",
        tpts: "3104",
        rpg: "4.9",
        trbs: "1901",
        apg: "1.8",
        tasts: "698",
        spg: "0.6",
        tst: "228",
        bpg: "0.8",
        tbks: "310",
        fg: "48.5%",
        fg3: "33.4%",
        ft: "76.5%",
        to: "550"
    }
},
"noa-essengue": {
    name: "Noa Essengue",
    team: "Chicago Bulls",
    "2526team": "Chicago Bulls",
    position: "F",
    initials: "NE",
    height: "6'8\"",
    weight: "200 lbs",
    "2526": {
        gp: "2",
        ppg: "0.0",
        tpts: "0",
        rpg: "0.0",
        trbs: "0",
        apg: "0.0",
        tasts: "0",
        spg: "0.5",
        tst: "1",
        bpg: "0.0",
        tbks: "0",
        fg: "0.0%",
        fg3: "0.0%",
        ft: "0.0%",
        to: "0"
    },
    career: {
        gp: "2",
        ppg: "0.0",
        tpts: "0",
        rpg: "0.0",
        trbs: "0",
        apg: "0.0",
        tasts: "0",
        spg: "0.5",
        tst: "1",
        bpg: "0.0",
        tbks: "0",
        fg: "0.0%",
        fg3: "0.0%",
        ft: "0.0%",
        to: "0"
    }
},
"josh-giddey": {
    name: "Josh Giddey",
    team: "Chicago Bulls",
    "2526team": "Chicago Bulls",
    position: "G",
    initials: "JG",
    height: "6'7\"",
    weight: "216 lbs",
    "2526": {
        gp: "54",
        ppg: "17.0",
        tpts: "918",
        rpg: "8.3",
        trbs: "448",
        apg: "9.1",
        tasts: "491",
        spg: "1.2",
        tst: "65",
        bpg: "0.6",
        tbks: "32",
        fg: "44.8%",
        fg3: "36.4%",
        ft: "76.3%",
        to: "196"
    },
    career: {
        gp: "334",
        ppg: "14.6",
        tpts: "4876",
        rpg: "7.6",
        trbs: "2538",
        apg: "6.6",
        tasts: "2204",
        spg: "1.0",
        tst: "334",
        bpg: "0.5",
        tbks: "167",
        fg: "46.1%",
        fg3: "33.7%",
        ft: "76.4%",
        to: "1123"
    }
},
"buddy-hield": {
    name: "Buddy Hield",
    team: "Chicago Bulls",
    "2526team": "Golden State Warriors / Atlanta Hawks",
    position: "G/F",
    initials: "BH",
    height: "6'4\"",
    weight: "220 lbs",
    "2526": {
        gp: "51",
        ppg: "7.6",
        tpts: "390",
        rpg: "2.3",
        trbs: "116",
        apg: "1.4",
        tasts: "71",
        spg: "0.8",
        tst: "39",
        bpg: "0.2",
        tbks: "9",
        fg: "43.7%",
        fg3: "34.9%",
        ft: "81.1%",
        to: "48"
    },
    career: {
        gp: "765",
        ppg: "14.5",
        tpts: "11122",
        rpg: "4.0",
        trbs: "3052",
        apg: "2.4",
        tasts: "1846",
        spg: "0.9",
        tst: "653",
        bpg: "0.3",
        tbks: "236",
        fg: "43.3%",
        fg3: "39.5%",
        ft: "85.6%",
        to: "1203"
    }
},
"tre-jones": {
    name: "Tre Jones",
    team: "Chicago Bulls",
    "2526team": "Chicago Bulls",
    position: "G",
    initials: "TJ",
    height: "6'1\"",
    weight: "185 lbs",
    "2526": {
        gp: "65",
        ppg: "14.1",
        tpts: "914",
        rpg: "3.1",
        trbs: "204",
        apg: "5.4",
        tasts: "350",
        spg: "1.6",
        tst: "76",
        bpg: "0.2",
        tbks: "11",
        fg: "55.3%",
        fg3: "31.5%",
        ft: "84.1%",
        to: "92"
    },
    career: {
        gp: "362",
        ppg: "9.4",
        tpts: "3397",
        rpg: "2.8",
        trbs: "1030",
        apg: "4.8",
        tasts: "1740",
        spg: "0.9",
        tst: "330",
        bpg: "0.1",
        tbks: "46",
        fg: "50.3%",
        fg3: "31.2%",
        ft: "84.0%",
        to: "412"
    }
},
"leonard-miller": {
    name: "Leonard Miller",
    team: "Chicago Bulls",
    "2526team": "Minnesota Timberwolves",
    position: "F",
    initials: "LM",
    height: "6'10\"",
    weight: "220 lbs",
    "2526": {
        gp: "46",
        ppg: "7.8",
        tpts: "359",
        rpg: "3.9",
        trbs: "179",
        apg: "0.9",
        tasts: "41",
        spg: "0.4",
        tst: "18",
        bpg: "0.3",
        tbks: "14",
        fg: "55.3%",
        fg3: "32.3%",
        ft: "73.6%",
        to: "37"
    },
    career: {
        gp: "76",
        ppg: "5.4",
        tpts: "410",
        rpg: "2.8",
        trbs: "213",
        apg: "0.6",
        tasts: "46",
        spg: "0.3",
        tst: "23",
        bpg: "0.2",
        tbks: "15",
        fg: "55.2%",
        fg3: "31.2%",
        ft: "76.2%",
        to: "54"
    }
},
"isaac-okoro": {
    name: "Isaac Okoro",
    team: "Chicago Bulls",
    "2526team": "Chicago Bulls",
    position: "G/F",
    initials: "IO",
    height: "6'4\"",
    weight: "225 lbs",
    "2526": {
        gp: "63",
        ppg: "9.3",
        tpts: "586",
        rpg: "2.7",
        trbs: "170",
        apg: "1.6",
        tasts: "101",
        spg: "0.7",
        tst: "44",
        bpg: "0.5",
        tbks: "32",
        fg: "46.0%",
        fg3: "33.0%",
        ft: "79.5%",
        to: "44"
    },
    career: {
        gp: "397",
        ppg: "8.3",
        tpts: "3288",
        rpg: "2.8",
        trbs: "1110",
        apg: "1.6",
        tasts: "634",
        spg: "0.8",
        tst: "315",
        bpg: "0.5",
        tbks: "192",
        fg: "46.5%",
        fg3: "34.7%",
        ft: "74.1%",
        to: "444"
    }
},
"drew-peterson": {
    name: "Drew Peterson",
    team: "Chicago Bulls",
    "2526team": "Charlotte Hornets",
    position: "F",
    initials: "DP",
    height: "6'8\"",
    weight: "205 lbs",
    "2526": {
        gp: "6",
        ppg: "0.8",
        tpts: "5",
        rpg: "1.5",
        trbs: "9",
        apg: "0.3",
        tasts: "2",
        spg: "0.5",
        tst: "3",
        bpg: "0.2",
        tbks: "1",
        fg: "12.5%",
        fg3: "0.0%",
        ft: "50.0%",
        to: "0"
    },
    career: {
        gp: "34",
        ppg: "2.1",
        tpts: "70",
        rpg: "1.5",
        trbs: "50",
        apg: "0.5",
        tasts: "16",
        spg: "0.3",
        tst: "10",
        bpg: "0.1",
        tbks: "3",
        fg: "36.5%",
        fg3: "32.0%",
        ft: "72.7%",
        to: "9"
    }
},
"norman-powell": {
    name: "Norman Powell",
    team: "Chicago Bulls",
    "2526team": "Miami Heat",
    position: "G",
    initials: "NP",
    height: "6'3\"",
    weight: "215 lbs",
    "2526": {
        gp: "58",
        ppg: "21.7",
        tpts: "1259",
        rpg: "3.5",
        trbs: "203",
        apg: "2.5",
        tasts: "145",
        spg: "1.1",
        tst: "64",
        bpg: "0.3",
        tbks: "17",
        fg: "47.0%",
        fg3: "38.0%",
        ft: "82.7%",
        to: "111"
    },
    career: {
        gp: "675",
        ppg: "14.0",
        tpts: "9431",
        rpg: "2.7",
        trbs: "1807",
        apg: "1.6",
        tasts: "1080",
        spg: "0.9",
        tst: "605",
        bpg: "0.3",
        tbks: "179",
        fg: "47.1%",
        fg3: "39.6%",
        ft: "82.4%",
        to: "1058"
    }
},
"orlando-robinson": {
    name: "Orlando Robinson",
    team: "Chicago Bulls",
    "2526team": "Chicago Bulls",
    position: "C",
    initials: "OR",
    height: "6'10\"",
    weight: "235 lbs",
    "2526": {
        gp: "4",
        ppg: "1.8",
        tpts: "7",
        rpg: "1.0",
        trbs: "4",
        apg: "0.8",
        tasts: "3",
        spg: "0.0",
        tst: "0",
        bpg: "0.3",
        tbks: "1",
        fg: "60.0%",
        fg3: "50.0%",
        ft: "0.0%",
        to: "1"
    },
    career: {
        gp: "115",
        ppg: "4.6",
        tpts: "529",
        rpg: "3.8",
        trbs: "437",
        apg: "1.2",
        tasts: "138",
        spg: "0.5",
        tst: "61",
        bpg: "0.6",
        tbks: "69",
        fg: "47.3%",
        fg3: "34.7%",
        ft: "75.4%",
        to: "99"
    }
},
"jalen-smith": {
    name: "Jalen Smith",
    team: "Chicago Bulls",
    "2526team": "Chicago Bulls",
    position: "C/F",
    initials: "JS",
    height: "6'8\"",
    weight: "215 lbs",
    "2526": {
        gp: "53",
        ppg: "10.2",
        tpts: "541",
        rpg: "6.7",
        trbs: "355",
        apg: "1.2",
        tasts: "65",
        spg: "0.5",
        tst: "24",
        bpg: "0.8",
        tbks: "42",
        fg: "48.3%",
        fg3: "37.3%",
        ft: "74.2%",
        to: "53"
    },
    career: {
        gp: "324",
        ppg: "8.7",
        tpts: "2831",
        rpg: "5.5",
        trbs: "1787",
        apg: "0.9",
        tasts: "287",
        spg: "0.3",
        tst: "95",
        bpg: "0.7",
        tbks: "230",
        fg: "50.1%",
        fg3: "34.2%",
        ft: "75.2%",
        to: "255"
    }
},
"peter-suder": {
    name: "Peter Suder",
    team: "Chicago Bulls",
    "2526team": "Miami (OH)",
    position: "G",
    initials: "PS",
    height: "6'5\"",
    weight: "215 lbs",
    rookie: true,
    "2526": {
        gp: "33",
        ppg: "14.8",
        tpts: "487",
        rpg: "4.6",
        trbs: "153",
        apg: "4.0",
        tasts: "133",
        spg: "1.3",
        tst: "43",
        bpg: "0.4",
        tbks: "13",
        fg: "54.6%",
        fg3: "42.1%",
        ft: "73.4%",
        to: "62"
    },
    career: {
        gp: "130",
        ppg: "12.3",
        tpts: "1596",
        rpg: "4.5",
        trbs: "585",
        apg: "3.4",
        tasts: "442",
        spg: "1.2",
        tst: "156",
        bpg: "0.3",
        tbks: "39",
        fg: "47.9%",
        fg3: "33.1%",
        ft: "75.4%",
        to: "273"
    }
},
"marquel-sutton": {
    name: "Marquel Sutton",
    team: "Chicago Bulls",
    "2526team": "LSU",
    position: "F",
    initials: "MS",
    height: "6'7\"",
    weight: "205 lbs",
    "2526": {
        gp: "32",
        ppg: "13.1",
        tpts: "419",
        rpg: "7.3",
        trbs: "233",
        apg: "0.7",
        tasts: "21",
        spg: "0.6",
        tst: "19",
        bpg: "0.3",
        tbks: "9",
        fg: "45.7%",
        fg3: "30.3%",
        ft: "82.4%",
        to: "31"
    },
    career: {
        gp: "131",
        ppg: "13.8",
        tpts: "1807",
        rpg: "6.6",
        trbs: "871",
        apg: "0.8",
        tasts: "106",
        spg: "0.7",
        tst: "94",
        bpg: "0.3",
        tbks: "34",
        fg: "47.0%",
        fg3: "28.9%",
        ft: "72.1%",
        to: "206"
    }
},
"dailyn-swain": {
    name: "Dailyn Swain",
    team: "Chicago Bulls",
    "2526team": "Texas",
    position: "F",
    initials: "DS",
    height: "6'7\"",
    weight: "220 lbs",
    rookie: true,
    "2526": {
        gp: "36",
        ppg: "17.3",
        tpts: "623",
        rpg: "7.5",
        trbs: "270",
        apg: "3.6",
        tasts: "129",
        spg: "1.6",
        tst: "59",
        bpg: "0.3",
        tbks: "11",
        fg: "54.2%",
        fg3: "34.4%",
        ft: "81.5%",
        to: "97"
    },
    career: {
        gp: "99",
        ppg: "11.4",
        tpts: "1128",
        rpg: "5.5",
        trbs: "545",
        apg: "2.6",
        tasts: "254",
        spg: "1.4",
        tst: "142",
        bpg: "0.5",
        tbks: "47",
        fg: "52.6%",
        fg3: "29.3%",
        ft: "81.5%",
        to: "159"
    }
},
"patrick-williams": {
    name: "Patrick Williams",
    team: "Chicago Bulls",
    "2526team": "Chicago Bulls",
    position: "F",
    initials: "PW",
    height: "6'6\"",
    weight: "215 lbs",
    "2526": {
        gp: "72",
        ppg: "7.0",
        tpts: "504",
        rpg: "3.0",
        trbs: "216",
        apg: "1.5",
        tasts: "108",
        spg: "0.7",
        tst: "50",
        bpg: "0.6",
        tbks: "43",
        fg: "37.2%",
        fg3: "34.7%",
        ft: "72.0%",
        to: "135"
    },
    career: {
        gp: "348",
        ppg: "9.0",
        tpts: "3132",
        rpg: "3.9",
        trbs: "1357",
        apg: "1.5",
        tasts: "522",
        spg: "0.8",
        tst: "274",
        bpg: "0.6",
        tbks: "209",
        fg: "43.8%",
        fg3: "38.1%",
        ft: "76.2%",
        to: "351"
    }
},
"caleb-wilson": {
    name: "Caleb Wilson",
    team: "Chicago Bulls",
    "2526team": "North Carolina",
    position: "F",
    initials: "CW",
    height: "6'10\"",
    weight: "215 lbs",
    rookie: true,
    "2526": {
        gp: "24",
        ppg: "19.8",
        tpts: "476",
        rpg: "9.4",
        trbs: "226",
        apg: "2.7",
        tasts: "64",
        spg: "1.5",
        tst: "36",
        bpg: "1.4",
        tbks: "33",
        fg: "57.8%",
        fg3: "25.9%",
        ft: "71.3%",
        to: "47"
    },
    career: {
        gp: "24",
        ppg: "19.8",
        tpts: "476",
        rpg: "9.4",
        trbs: "226",
        apg: "2.7",
        tasts: "64",
        spg: "1.5",
        tst: "36",
        bpg: "1.4",
        tbks: "33",
        fg: "57.8%",
        fg3: "25.9%",
        ft: "71.3%",
        to: "47"
    }
},


};


function loadPlayer() {

    const params = new URLSearchParams(window.location.search);

    const playerID = params.get("player");

    const player = players[playerID];

    if (!player) {
        console.log("Player not found:", playerID);
        return;
    }

    // Player information
    document.getElementById("playerName").textContent =
        player.name;

    document.getElementById("playerTeam").textContent =
        player.team + " · " + player.position + " · " + (player.height ?? "—") + " · " + (player.weight ?? "—") + (player.rookie === true ? " · Rookie" : "");


    document.getElementById("season-team").textContent = 
        player["2526team"] || "—";

    document.getElementById("playerInitials").textContent =
        player.initials;


    // Current season stats
    if (player["2526"]) {

    document.getElementById("season-gp").textContent =
        player["2526"].gp;

    document.getElementById("season-ppg").textContent =
        player["2526"].ppg;
    
    document.getElementById("season-tpts").textContent =
        player["2526"].tpts;

    document.getElementById("season-rpg").textContent =
        player["2526"].rpg;
        
    document.getElementById("season-trbs").textContent =
        player["2526"].trbs;

    document.getElementById("season-apg").textContent =
        player["2526"].apg;
        
    document.getElementById("season-tasts").textContent =
        player["2526"].tasts;
        
    document.getElementById("season-spg").textContent =
        player["2526"].spg;
        
    document.getElementById("season-tst").textContent =
        player["2526"].tst;

    document.getElementById("season-bpg").textContent =
        player["2526"].bpg;
        
    document.getElementById("season-tbks").textContent =
        player["2526"].tbks;

    document.getElementById("season-fg").textContent =
        player["2526"].fg;

    document.getElementById("season-fg3").textContent =
        player["2526"].fg3;

    document.getElementById("season-ft").textContent =
        player["2526"].ft;

    document.getElementById("season-to").textContent =
        player["2526"].to;

    

    // Top stats
    document.getElementById("ppg").textContent =
        player["2526"].ppg;

    document.getElementById("rpg").textContent =
        player["2526"].rpg;

    document.getElementById("apg").textContent =
        player["2526"].apg;

    document.getElementById("fg").textContent =
        player["2526"].fg;

    document.getElementById("three").textContent =
        player["2526"].fg3;
}


    // Career stats
    if (player.career) {

        document.getElementById("career-gp").textContent =
            player.career.gp;

        document.getElementById("career-ppg").textContent =
            player.career.ppg;
            
        document.getElementById("career-tpts").textContent =
            player.career.tpts;

        document.getElementById("career-rpg").textContent =
            player.career.rpg;
            
        document.getElementById("career-trbs").textContent =
            player.career.trbs;

        document.getElementById("career-apg").textContent =
            player.career.apg;
            
        document.getElementById("career-tasts").textContent =
            player.career.tasts;

        document.getElementById("career-spg").textContent =
            player.career.spg;
            
        document.getElementById("career-tst").textContent =
            player.career.tst;
            
        document.getElementById("career-bpg").textContent =
            player.career.bpg;
        
        document.getElementById("career-tbks").textContent =
            player.career.tbks;

        document.getElementById("career-fg").textContent =
            player.career.fg;

        document.getElementById("career-fg3").textContent =
            player.career.fg3;

        document.getElementById("career-ft").textContent =
            player.career.ft;

        document.getElementById("career-to").textContent =
            player.career.to;
    }
}


if (window.location.pathname.includes("player.html")) {
    loadPlayer();
}
let playerSortDirections = {};

let playerSortColumn = null;
let playerSortAscending = false;

function sortPlayers(columnIndex) {
    const tbody = document.getElementById("playersList");

    if (!tbody) return;

    let rows = Array.from(tbody.querySelectorAll("tr"));

    // If clicking the same column, reverse the direction
    if (playerSortColumn === columnIndex) {
        playerSortAscending = !playerSortAscending;
    } else {
        playerSortColumn = columnIndex;
        playerSortAscending = false;
    }

    // Player / Team
    if (columnIndex === 0 || columnIndex === 1) {
    loadPlayersPage();

    const newRows = Array.from(tbody.querySelectorAll("tr"));

    newRows.sort((a, b) => {
        const aValue = a.cells[columnIndex]?.textContent.trim() || "";
        const bValue = b.cells[columnIndex]?.textContent.trim() || "";

        const result = aValue.localeCompare(bValue);

        return playerSortAscending ? result : -result;
    });

    newRows.forEach(row => tbody.appendChild(row));

    return;
}

    // Stats: remove rookies
    rows = rows.filter(row => row.dataset.rookie !== "true");

    rows.sort((a, b) => {
        const aValue = parseFloat(
            a.cells[columnIndex]?.textContent.replace("%", "") || "0"
        );

        const bValue = parseFloat(
            b.cells[columnIndex]?.textContent.replace("%", "") || "0"
        );

        return playerSortAscending
            ? aValue - bValue
            : bValue - aValue;
    });

    // Rebuild table with only non-rookies
    tbody.innerHTML = "";

    rows.forEach(row => {
        row.style.display = "";
        tbody.appendChild(row);
    });
}
let homeSortDirections = {};

// ===============================
// LEAGUE LEADERS
// ===============================

// ===============================
// LEAGUE LEADERS
// ===============================

function loadLeaders() {

    const leaderType = document.getElementById("leaderType");

    if (!leaderType) return;

    leaderType.value = "season";

    const categories = [
        ["ppg-leaders", "ppg"],
        ["tpts-leaders", "tpts"],
        ["apg-leaders", "apg"],
        ["tasts-leaders", "tasts"],
        ["rpg-leaders", "rpg"],
        ["trbs-leaders", "trbs"],
        ["bpg-leaders", "bpg"],
        ["tbks-leaders", "tbks"],
        ["spg-leaders", "spg"],
        ["tst-leaders", "tst"],
        ["fg-leaders", "fg"],
        ["fg3-leaders", "fg3"],
        ["ft-leaders", "ft"]
    ];


    function displayLeaders() {

        const selectedType = leaderType.value;

        

        categories.forEach(([containerID, stat]) => {

            const container = document.getElementById(containerID);

            if (!container) return;

            const topFive = Object.entries(players)
                .filter(([id, player]) => player.rookie !== true)
                .map(([id, player]) => {

                    const stats = selectedType === "career"
                        ? player.career
                         : player["2526"];

                    if (!stats) return null;

                    const originalValue = stats[stat];

                    if (originalValue === undefined || originalValue === null) {
                        return null;
                    }

                    const numericValue = parseFloat(
                        String(originalValue)
                            .replace(/,/g, "")
                            .replace("%", "")
                    );

                    if (isNaN(numericValue)) {
                        return null;
                    }

                    return {
                        id: id,
                        player: player,
                        value: numericValue,
                        displayValue: originalValue
                    };

                })
                .filter(item => item !== null)
                .sort((a, b) => b.value - a.value)
                .slice(0, 5);

            container.innerHTML = "";

            topFive.forEach((item, index) => {

                const row = document.createElement("div");

                row.className = "leader-row";

                row.innerHTML = `
                    <span>${index + 1}. ${item.player.name}</span>
                    <strong>${item.displayValue}</strong>
                `;

                row.style.cursor = "pointer";

                row.addEventListener("click", function(event) {
    event.stopPropagation();

    window.location.href =
        "player.html?player=" + item.id;
});

                container.appendChild(row);
            });
        });
    }

    leaderType.addEventListener("change", displayLeaders);

    displayLeaders();
}
document.querySelectorAll(".leader-card").forEach(card => {

    card.style.cursor = "pointer";

    card.addEventListener("click", function() {

        const stat = card.dataset.stat;

        window.location.href = "leader-" + stat + ".html";

    });

});

loadLeaders();

loadLeaders();

// Load leaders page
loadLeaders();
// ===============================
function loadLeaderTop30(stat) {

    const leaderType = document.getElementById("leaderType");
    const container = document.getElementById("leaderTop30");

    if (!leaderType || !container) return;

    function displayTop30() {

    const selectedType = leaderType.value;

    const top30 = Object.entries(players)
        .filter(([id, player]) => player.rookie !== true)
        .map(([id, player]) => {

            const stats = selectedType === "career"
                ? player.career
                : player["2526"];

            if (!stats) return null;

            return {
                id: id,
                player: player,
                stats: stats,
                value: parseFloat(
                    String(stats[stat]).replace("%", "")
                )
            };
        })
        .filter(item => item && !isNaN(item.value))
        .sort((a, b) => b.value - a.value)
        .slice(0, 30);

    container.innerHTML = "";

    top30.forEach((item, index) => {

        const row = document.createElement("div");

        row.className = "leader-row";

        row.innerHTML = `
            <span>${index + 1}. ${item.player.name}</span>
            <strong>${item.stats[stat]}</strong>
        `;

        row.style.cursor = "pointer";

        row.addEventListener("click", function() {
            window.location.href =
                "player.html?player=" + item.id;
        });

        container.appendChild(row);
    });
}

    leaderType.addEventListener("change", displayTop30);

    displayTop30();
}

loadLeaderTop30();
// STATS PAGE
// ===============================

function loadStats() {

    const tableBody = document.getElementById("statsTableBody");
    const searchInput = document.getElementById("statsSearch");
    const statFilter = document.getElementById("statFilter");

    // Stop if we're not on stats.html
    if (!tableBody) return;

    function displayStats() {

        const search = searchInput.value.toLowerCase();
        const selectedStat = statFilter.value;

     let playerList = Object.entries(players)
    .filter(([id, player]) => player.rookie !== true)
    .map(([id, player]) => player)
    .sort((a, b) => a.name.localeCompare(b.name));

// Remove rookies from Stats page
playerList = playerList.filter(player =>
    !player.rookie
);

// Search players
playerList = playerList.filter(player =>
    player.name.toLowerCase().includes(search)
);

        // Sort by selected statistic
       if (selectedStat !== "all") {
    playerList.sort((a, b) => {

        const getStat = (player) => {

            if (selectedStat === "three") {
                return parseFloat(
                    player["2526"]?.fg3 ?? player.three
                );
            }

            return parseFloat(
                player["2526"]?.[selectedStat] ??
                player[selectedStat]
            );
        };

        const aValue = getStat(a);
        const bValue = getStat(b);

        return bValue - aValue;
    });
}

       tableBody.innerHTML = "";

playerList.forEach(player => {

    const row = document.createElement("tr");

    const gp = player["2526"]?.gp ?? player.gp ?? "—";
    const ppg = player["2526"]?.ppg ?? player.ppg ?? "—";
    const rpg = player["2526"]?.rpg ?? player.rpg ?? "—";
    const apg = player["2526"]?.apg ?? player.apg ?? "—";
    const spg = player["2526"]?.spg ?? player.spg ?? "—";
    const bpg = player["2526"]?.bpg ?? player.bpg ?? "—";
    const fg = player["2526"]?.fg ?? player.fg ?? "—";
    const three = player["2526"]?.fg3 ?? player.three ?? "—";
    const ft = player["2526"]?.ft ?? player.ft ?? "—";

row.innerHTML = `
    <td><span class="stats-player-name">${player.name}</span></td>
    <td>${player.team}</td>
    <td>${gp}</td>
    <td>${ppg}</td>
    <td>${rpg}</td>
    <td>${apg}</td>
    <td>${spg}</td>
    <td>${bpg}</td>
    <td>${fg}</td>
    <td>${three}</td>
    <td>${ft}</td>
`;

           

            row.addEventListener("click", function() {

                const playerID = Object.keys(players).find(
                    key => players[key] === player
                );

                window.location.href =
                    "player.html?player=" + playerID;
            });

            tableBody.appendChild(row);
        });
    }

    // Search
    searchInput.addEventListener("input", displayStats);

    // Statistic dropdown
    statFilter.addEventListener("change", displayStats);

    // Initial load
    displayStats();
}


// Load stats page
loadStats();



function loadTeamPage() {
    if (!window.location.pathname.includes("team.html")) {
        return;
    }

    const params = new URLSearchParams(window.location.search);
    const teamSlug = params.get("team");

    console.log("TEAM SLUG:", teamSlug);
    console.log("TEAMS DATABASE:", teams);

    if (!teamSlug) {
        console.error("No team found in URL.");
        return;
    }

    const team = teams[teamSlug];

    if (!team) {
        console.error("Team not found:", teamSlug);
        return;
    }

    console.log("TEAM LOADED:", team);

    const teamName = document.getElementById("teamName");
    const teamAbbreviation = document.getElementById("teamAbbreviation");
    const wins = document.getElementById("wins");
    const losses = document.getElementById("losses");
    const winPercent = document.getElementById("winPercent");
    const teamConference = document.getElementById("teamConference");
    const teamStatsBody = document.getElementById("teamStatsBody");
    const roster = document.getElementById("roster");

    if (teamName) {
        teamName.textContent = team.name;
    }

    if (teamAbbreviation) {
        teamAbbreviation.textContent = team.abbreviation;
    }

    if (teamConference) {
        teamConference.textContent =
            `${team.conference} · ${team.division} Division`;
    }

    /*
     * CURRENT SEASON RECORD
     * Keeps the boxes at the top showing 2025-26.
     */
    const currentSeasonKey = "2526";
    const currentSeason = team[currentSeasonKey];

    if (wins) {
        wins.textContent = currentSeason?.wins ?? "0";
    }

    if (losses) {
        losses.textContent = currentSeason?.losses ?? "0";
    }

    if (winPercent) {
        winPercent.textContent = currentSeason?.winPercent ?? "0%";
    }

    /*
     * TEAM STATS TABLE
     * Automatically finds every season such as:
     * 2526 = 2025-26
     * 2425 = 2024-25
     * 2324 = 2023-24
     */
    if (teamStatsBody) {

        teamStatsBody.innerHTML = "";

        const seasons = Object.keys(team)
            .filter(key => /^\d{4}$/.test(key))
            .sort((a, b) => b.localeCompare(a));

        seasons.forEach(seasonKey => {

            const season = team[seasonKey];

            const seasonLabel =
                `20${seasonKey.slice(0, 2)}-${seasonKey.slice(2)}`;

            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${seasonLabel}</td>
                <td>${season.wins ?? "—"}</td>
                <td>${season.losses ?? "—"}</td>
                <td>${season.winPercent ?? "—"}</td>
                <td>${season.gamesBack ?? "—"}</td>
                <td>${season.teamPPG ?? "—"}</td>
                <td>${season.teamRPG ?? "—"}</td>
                <td>${season.teamAPG ?? "—"}</td>
                <td>${season.teamSPG ?? "—"}</td>
                <td>${season.teamBPG ?? "—"}</td>
                <td>${season.teamFG ?? "—"}</td>
                <td>${season.teamThree ?? "—"}</td>
            `;

            teamStatsBody.appendChild(row);
        });
    }

    /*
     * ROSTER
     */
    if (roster) {

        roster.innerHTML = "";

        if (!team.roster || team.roster.length === 0) {
            roster.innerHTML = `
                <p class="no-roster">
                    Roster information not available.
                </p>
            `;
            return;
        }

        team.roster.forEach(player => {

            const slug = player.name
                .toLowerCase()
                .replace(/\./g, "")
                .replace(/'/g, "")
                .replace(/\s+/g, "-");

            const playerCard = document.createElement("a");

            playerCard.href = `player.html?player=${slug}`;

            playerCard.className = "roster-player";

            playerCard.innerHTML = `
                <span>${player.name}</span>
                <span class="player-position">
                    ${player.position}
                </span>
            `;

            roster.appendChild(playerCard);
        });
    }
}

loadTeamPage();

function loadPlayersPage() {
    const playersList = document.getElementById("playersList");

    if (!playersList) {
        return;
    }

    playersList.innerHTML = "";

    Object.entries(players)
    .sort((a, b) => a[1].name.localeCompare(b[1].name))
    .forEach(([playerID, player]) => {
        const row = document.createElement("tr");
        row.dataset.rookie = player.rookie === true ? "true" : "false";

        const isRookie = player.rookie === true;

        const ppg = isRookie ? "N/A" : (player["2526"]?.ppg ?? "N/A");
        const rpg = isRookie ? "N/A" : (player["2526"]?.rpg ?? "N/A");
        const apg = isRookie ? "N/A" : (player["2526"]?.apg ?? "N/A");
        const fg = isRookie ? "N/A" : (player["2526"]?.fg ?? "N/A");

        row.innerHTML = `
            <td>
                <a href="player.html?player=${playerID}" class="player-link">
                    ${player.name}
                </a>
            </td>
            <td>${player.team ?? "N/A"}</td>
            <td>${ppg}</td>
            <td>${rpg}</td>
            <td>${apg}</td>
            <td>${fg}</td>
        `;

        row.addEventListener("click", function () {
            window.location.href =
                `player.html?player=${encodeURIComponent(playerID)}`;
        });

        playersList.appendChild(row);
    });

    window.currentPlayersRows = Array.from(playersList.querySelectorAll("tr"));
}

if (window.location.pathname.includes("players.html")) {
    loadPlayersPage();
}
   


const searchInput = document.getElementById("player-search");
const searchResults = document.getElementById("search-results");

if (searchInput && searchResults) {

    searchInput.addEventListener("input", function () {

        const search = this.value.toLowerCase().trim();

        searchResults.innerHTML = "";

        if (!search) {
            searchResults.style.display = "none";
            return;
        }

        const playerMatches = Object.entries(players).filter(([id, player]) =>
            player.name.toLowerCase().includes(search)
        );

        const teamMatches = Object.entries(teams).filter(([id, team]) =>
            team.name.toLowerCase().includes(search)
        );

        if (playerMatches.length === 0 && teamMatches.length === 0) {

            searchResults.innerHTML = `
                <div class="search-result">
                    No players or teams found
                </div>
            `;

        } else {

            playerMatches.forEach(([id, player]) => {

                const result = document.createElement("a");

                result.className = "search-result";
                result.href = `player.html?player=${id}`;
                result.textContent = player.name;

                searchResults.appendChild(result);
            });

            teamMatches.forEach(([id, team]) => {

                const result = document.createElement("a");

                result.className = "search-result";
                result.href = `team.html?team=${id}`;
                result.textContent = team.name;

                searchResults.appendChild(result);
            });
        }

        searchResults.style.display = "block";
    });
}
function loadLeagueLeaders() {

    const ppgNumber = document.getElementById("leaderPPG");
    const ppgPlayer = document.getElementById("leaderPPGPlayer");

    const rpgNumber = document.getElementById("leaderRPG");
    const rpgPlayer = document.getElementById("leaderRPGPlayer");

    const apgNumber = document.getElementById("leaderAPG");
    const apgPlayer = document.getElementById("leaderAPGPlayer");

    if (!ppgNumber || !ppgPlayer ||
        !rpgNumber || !rpgPlayer ||
        !apgNumber || !apgPlayer) {
        return;
    }

    const playerList = Object.entries(players)
    .filter(([id, player]) => player.rookie !== true);

function getStat(player, stat) {
    return parseFloat(
        player["2526"]?.[stat] ??
        player[stat] ??
        0
    );
}

    const ppgLeader = playerList.reduce((leader, current) => {
        return getStat(current[1], "ppg") > getStat(leader[1], "ppg")
            ? current
            : leader;
    });

    const rpgLeader = playerList.reduce((leader, current) => {
        return getStat(current[1], "rpg") > getStat(leader[1], "rpg")
            ? current
            : leader;
    });

    const apgLeader = playerList.reduce((leader, current) => {
        return getStat(current[1], "apg") > getStat(leader[1], "apg")
            ? current
            : leader;
    });

    ppgNumber.textContent = getStat(ppgLeader[1], "ppg").toFixed(1);
    ppgPlayer.textContent = ppgLeader[1].name;

    rpgNumber.textContent = getStat(rpgLeader[1], "rpg").toFixed(1);
    rpgPlayer.textContent = rpgLeader[1].name;

    apgNumber.textContent = getStat(apgLeader[1], "apg").toFixed(1);
    apgPlayer.textContent = apgLeader[1].name;
}

loadLeagueLeaders();
function loadStandings() {

    const seasonSelect = document.getElementById("standingsSeason");
    const conferenceSelect = document.getElementById("standingsConference");
    const tableBody = document.getElementById("standingsTableBody");

    if (!seasonSelect || !conferenceSelect || !tableBody) return;

    function displayStandings() {

        const selectedSeason = seasonSelect.value;
        const selectedConference = conferenceSelect.value;

        const teamsList = Object.entries(teams)
            .filter(([slug, team]) =>
                team.conference === selectedConference &&
                team[selectedSeason]
            )
            .sort((a, b) =>
                parseFloat(b[1][selectedSeason].winPercent) -
                parseFloat(a[1][selectedSeason].winPercent)
            );

        tableBody.innerHTML = "";

        teamsList.forEach(([slug, team], index) => {

            const season = team[selectedSeason];

            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${index + 1}</td>

                <td class="standings-team">
                    <span class="team-abbreviation">${team.abbreviation}</span>
                    <span class="team-name">${team.name}</span>
                </td>

                <td>${season.wins}</td>
                <td>${season.losses}</td>
                <td>${season.winPercent}</td>
                <td>${season.gamesBack}</td>
            `;

            row.style.cursor = "pointer";

            row.addEventListener("click", function() {
                window.location.href = "team.html?team=" + slug;
            });

            tableBody.appendChild(row);
        });
    }

    seasonSelect.addEventListener("change", displayStandings);
    conferenceSelect.addEventListener("change", displayStandings);

    displayStandings();
}
window.addEventListener("pageshow", function() {

    const conferenceSelect = document.getElementById("standingsConference");

    if (!conferenceSelect) return;

    conferenceSelect.value = "Eastern Conference";

    if (typeof loadStandings === "function") {
        loadStandings();
    }

});
let currentTeamStats = [];

function changeTeamView() {
    const view = document.getElementById("teamViewSelect");
    const directory = document.getElementById("teamDirectoryView");
    const stats = document.getElementById("teamStatsView");
    const title = document.getElementById("teamsPageTitle");
    const subtitle = document.getElementById("teamsPageSubtitle");

    if (view.value === "stats") {
        directory.style.display = "none";
        stats.style.display = "block";

        title.textContent = "Team Stats";
        subtitle.textContent = "NBA team statistics";

        loadTeamStats();
    } else {
        directory.style.display = "block";
        stats.style.display = "none";

        title.textContent = "NBA Teams";
        subtitle.textContent = "Explore every NBA team.";
    }
}

function loadTeamStats() {
    const season = document.getElementById("teamSeasonSelect").value;
    const tbody = document.getElementById("teamStatsTableBody");

    currentTeamStats = Object.entries(teams).map(([slug, team]) => {
        const stats = team[season];

        return {
            slug: slug,
            name: team.name,
            abbreviation: team.abbreviation,
            teamPPG: stats?.teamPPG ?? "—",
            teamRPG: stats?.teamRPG ?? "—",
            teamAPG: stats?.teamAPG ?? "—",
            teamSPG: stats?.teamSPG ?? "—",
            teamBPG: stats?.teamBPG ?? "—",
            teamFG: stats?.teamFG ?? "—",
            teamThree: stats?.teamThree ?? "—"
        };
    });

    sortTeamStats();
}

function sortTeamStats() {
    const sortBy = document.getElementById("teamStatFilter").value;
    const select = document.getElementById("teamStatFilter");
    const tbody = document.getElementById("teamStatsTableBody");

    const labels = {
        name: "Sort by",
        teamPPG: "Sort by PPG",
        teamRPG: "Sort by RPG",
        teamAPG: "Sort by APG",
        teamSPG: "Sort by SPG",
        teamBPG: "Sort by BPG",
        teamFG: "Sort by FG%",
        teamThree: "Sort by 3PT%"
    };

    select.options[select.selectedIndex].textContent = labels[sortBy];

    let sortedTeams = [...currentTeamStats];

    if (sortBy === "name") {
        sortedTeams.sort((a, b) => a.name.localeCompare(b.name));
    } else {
        sortedTeams.sort((a, b) => {
            const aValue = parseFloat(a[sortBy]);
            const bValue = parseFloat(b[sortBy]);

            if (isNaN(aValue)) return 1;
            if (isNaN(bValue)) return -1;

            return bValue - aValue;
        });
    }

    tbody.innerHTML = "";

    sortedTeams.forEach(team => {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>
            <a href="team.html?team=${team.slug}" class="team-stats-link">
                <strong>${team.name}</strong>
                <span>${team.abbreviation}</span>
            </a>
        </td>
        <td>${formatTeamStat(team.teamPPG)}</td>
        <td>${formatTeamStat(team.teamRPG)}</td>
        <td>${formatTeamStat(team.teamAPG)}</td>
        <td>${formatTeamStat(team.teamSPG)}</td>
        <td>${formatTeamStat(team.teamBPG)}</td>
        <td>${formatTeamStat(team.teamFG)}</td>
        <td>${formatTeamStat(team.teamThree)}</td>
    `;

    row.addEventListener("click", function () {
        window.location.href = `team.html?team=${team.slug}`;
    });

    tbody.appendChild(row);
});

    filterTeamStats();
}

function filterTeamStats() {
    const search = document
        .getElementById("teamStatsSearch")
        .value
        .toLowerCase()
        .trim();

    const rows = document.querySelectorAll("#teamStatsTableBody tr");

    rows.forEach(row => {
        const teamName = row
            .querySelector(".team-stats-link")
            ?.textContent
            .toLowerCase() || "";

        row.style.display = teamName.includes(search) ? "" : "none";
    });
}

function formatTeamStat(value) {
    if (value === "—") return "—";

    const number = parseFloat(value);

    if (isNaN(number)) return value;

    if (value.includes("%")) {
        return number.toFixed(1) + "%";
    }

    return number.toFixed(1);
}
window.addEventListener("pageshow", function () {
    const viewSelect = document.getElementById("teamViewSelect");
    const seasonSelect = document.getElementById("teamSeasonSelect");
    const statFilter = document.getElementById("teamStatFilter");

    if (viewSelect) {
        viewSelect.value = "directory";
    }

    if (seasonSelect) {
        seasonSelect.value = "2526";
    }

    if (statFilter) {
        statFilter.value = "name";
    }

    if (viewSelect) {
        changeTeamView();
    }
});
