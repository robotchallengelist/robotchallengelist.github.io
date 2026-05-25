function Level(name, points, tier, id, routes, creator, verifier, videolink, records) {
    this.name = name;
    this.points = points;
    this.tier = tier;
    this.id = id;
    this.routes = routes;
    this.creator = creator;
    this.verifier = verifier;
    this.videolink = videolink;
    this.records = records;
}

function Record(name, attempts, enjoyment, opinion, proof) {
    this.name = name;
    this.attempts = attempts;
    this.enjoyment = enjoyment;
    this.opinion = opinion;
    this.proof = proof;
}

let levels = [
    /*
    ....###....##.....##.########.########.##.....##.##....##..######..########
    ...##.##...###...###.##..........##....##.....##..##..##..##....##....##...
    ..##...##..####.####.##..........##....##.....##...####...##..........##...
    .##.....##.##.###.##.######......##....#########....##.....######.....##...
    .#########.##.....##.##..........##....##.....##....##..........##....##...
    .##.....##.##.....##.##..........##....##.....##....##....##....##....##...
    .##.....##.##.....##.########....##....##.....##....##.....######.....##...
    */

    new Level("Mad Prophets", 103, "Amethyst", "140134987", "Any Route", "Farlayy", "EndGamer7896", "https://medal.tv/games/geometry-dash/clip/mGyEUN2HMTp9yPEph?invite=cr-MSxscmEsNTk1MDYwNDc2", [
        new Record("EndGamer7896", "13,574", "8/10", "Low Amethyst, 100-105 points", "https://medal.tv/games/geometry-dash/clips/mGyEUN2HMTp9yPEph?invite=cr-MSxscmEsNTk1MDYwNDc2"),
        new Record("Beefyikes", "4,500", "6/10", "Probably top 1", "https://youtu.be/LzfdYC6YebQ"),
    ]),

    /*
    .########..##..........###....########.####.##....##.##.....##.##.....##
    .##.....##.##.........##.##......##.....##..###...##.##.....##.###...###
    .##.....##.##........##...##.....##.....##..####..##.##.....##.####.####
    .########..##.......##.....##....##.....##..##.##.##.##.....##.##.###.##
    .##........##.......#########....##.....##..##..####.##.....##.##.....##
    .##........##.......##.....##....##.....##..##...###.##.....##.##.....##
    .##........########.##.....##....##....####.##....##..#######..##.....##
    */

    new Level("robopolis       ", 91, "Platinum", "137347848", "Any Route", "placek3", "placek3", "https://www.youtube.com/embed/55zSeUXG3VY", [
        new Record("placek3", "17,246", "N/A", "N/A", "https://www.youtube.com/watch?v=55zSeUXG3VY"),
    ]),
    new Level("Shardiopolis", 85, "Platinum", "139167165", "Verification Route", "probro675", "probro675", "https://youtube.com/embed/S2B2JVEOxbQ?si=0hlf-vQHAkxh612i", [
        new Record("probro675", "1,800", "8/10", "N/A", "https://youtu.be/S2B2JVEOxbQ?si=0hlf-vQHAkxh612i"),
    ]),
    new Level("Double Double PLUS", 78, "Platinum", "138089168", "Any Route", "zis08", "zis08", "https://medal.tv/games/geometry-dash/clip/muXjHLShWGsp-QFck?invite=cr-MSw1bHUsMTY4ODkwOTU4", [
        new Record("zis08", "7,441", "10/10", "Harder than SUGAR TRIP", "https://medal.tv/games/geometry-dash/clips/muXjHLShWGsp-QFck?invite=cr-MSw1bHUsMTY4ODkwOTU4"),
    ]),

    /*
    ..######....#######..##.......########.
    .##....##..##.....##.##.......##.....##
    .##........##.....##.##.......##.....##
    .##...####.##.....##.##.......##.....##
    .##....##..##.....##.##.......##.....##
    .##....##..##.....##.##.......##.....##
    ..######....#######..########.########.
    */

    new Level("SUGAR TRIP", 74, "Gold", "137410249", "Any Route", "XanderGMDD", "XanderGMDD", "https://medal.tv/games/geometry-dash/clip/mrFHRKVURma6Jkca6?invite=cr-MSxJbkQsNTkwMDQ5Mzc3", [
        new Record("XanderGMDD", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mrFHRKVURma6Jkca6?invite=cr-MSxJbkQsNTkwMDQ5Mzc3"),
        new Record("placek3", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mrOKUSX4fdNvnBjYb?invite=cr-MSxJSHMsNTk0ODYzMTcx&v=22"),
        new Record("Farlayy", "N/A", "N/A", "N/A", ""),
        new Record("EndGamer7896", "N/A", "N/A", "N/A", "https://youtu.be/lXRG1Xt0irs"),
    ]),
    new Level("Redemption rebirth", 72, "Gold", "137617507", "Any Route", "Komically & sourceerrortxt", "zeroskills", "https://www.youtube.com/embed/Loe1H_IsImQ", [
        new Record("zeroskills", "N/A", "N/A", "N/A", "https://youtu.be/Loe1H_IsImQ"),
        new Record("EndGamer7896", "2,867", "7/10", "High Gold", "https://medal.tv/games/geometry-dash/clips/mud8uQC9RJAAsVtzq?invite=cr-MSw0N2EsNTk1MDYwNDc2"),
    ]),
    new Level("Jade Runner", 70, "Gold", "136732810", "Any Route", "EndGamer7896", "XanderGMDD", "https://medal.tv/games/geometry-dash/clip/moPx7tKLuNQoSzZAB?invite=cr-MSwycVQsMzM2NzY3Njgx", [
        new Record("XanderGMDD", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/moPx7tKLuNQoSzZAB?invite=cr-MSwycVQsMzM2NzY3Njgx"),
        new Record("Farlayy", "N/A", "N/A", "N/A", ""),
        new Record("EndGamer7896", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mrBkjC2JyixC2UlVh?invite=cr-MSw5MWwsNTk1MDYwNDc2"),
        new Record("placek3", "N/A", "N/A", "N/A", "https://www.youtube.com/watch?v=8CEpN01ZWPc"),
    ]),
    new Level("SLOWDOWN", 65, "Gold", "136717712", "Any Route", "snowwgmdd", "Zannoz", "https://medal.tv/games/geometry-dash/clip/moqvde4LlCgunP6bZ?invite=cr-MSxBeGosNTM1NDU2MDU0", [
        new Record("Zannoz", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/moqvde4LlCgunP6bZ?invite=cr-MSxBeGosNTM1NDU2MDU0"),
        new Record("Farlayy", "N/A", "N/A", "N/A", ""),
        new Record("XanderGMDD", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mosGH6H1Osmfz2Ysy?invite=cr-MSx4Z2gsMzM2NzY3Njgx"),
        new Record("EndGamer7896", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mrcAu7vfrTqQhVkOz?invite=cr-MSx0ZTYsNTk1MDYwNDc2"),
        new Record("placek3", "N/A", "N/A", "N/A", "https://www.youtube.com/watch?v=8CEpN01ZWPc"),
    ]),
    new Level("robotnics", 61, "Gold", "136706958", "Any Route", "XanderGMDD", "XanderGMDD", "https://medal.tv/games/geometry-dash/clip/monG1ZCyALH5FzBu-?invite=cr-MSxETUMsMzM2NzY3Njgx", [
        new Record("XanderGMDD", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/monG1ZCyALH5FzBu-?invite=cr-MSxETUMsMzM2NzY3Njgx"),
        new Record("Farlayy", "N/A", "N/A", "N/A", ""),
        new Record("4096Tristan", "N/A", "N/A", "N/A", "https://youtu.be/VcmM388hsMA?si=TZIcbz6_-3SvMPvN"),
        new Record("EndGamer7896", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mrdpiSYThwzw7WhvO?invite=cr-MSxnZGosNTk1MDYwNDc2"),
        new Record("placek3", "N/A", "N/A", "N/A", "https://www.youtube.com/watch?v=8CEpN01ZWPc"),
    ]),
    new Level("Gold Temple", 55, "Gold", "136720720", "Any Route", "XanderGMDD", "XanderGMDD", "https://medal.tv/games/geometry-dash/clip/morBvhE7In0RYdbUN?invite=cr-MSx3WGQsNTkwMDQ5Mzc3", [
        new Record("XanderGMDD", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/morBvhE7In0RYdbUN?invite=cr-MSx3WGQsNTkwMDQ5Mzc3"),
        new Record("Farlayy", "N/A", "N/A", "N/A", ""),
        new Record("EndGamer7896", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mrdpiSYThwzw7WhvO?invite=cr-MSxnZGosNTk1MDYwNDc2"),
        new Record("placek3", "N/A", "N/A", "N/A", "https://www.youtube.com/watch?v=8CEpN01ZWPc"),
    ]),

    /*
    ..######..####.##.......##.....##.########.########.
    .##....##..##..##.......##.....##.##.......##.....##
    .##........##..##.......##.....##.##.......##.....##
    ..######...##..##.......##.....##.######...########.
    .......##..##..##........##...##..##.......##...##..
    .##....##..##..##.........##.##...##.......##....##.
    ..######..####.########....###....########.##.....##
    */
    new Level("Shakester", 47, "Silver", "85678633", "Any Route", "Farlayy", "Farlayy", "https://youtube.com/embed/RAVFhEVV6hE", [
        new Record("Farlayy", "N/A", "N/A", "N/A", "https://youtube.com/watch?v=RAVFhEVV6hE"),
        new Record("placek3", "N/A", "N/A", "N/A", "https://www.youtube.com/watch?v=8CEpN01ZWPc"),
        new Record("zeroskills", "N/A", "N/A", "N/A", ""),
        new Record("EndGamer7896", "1,783", "3/10", "High Silver", "https://medal.tv/games/geometry-dash/clips/mIxu2N3FC7IYQZa8_?invite=cr-MSx2MGcsNTk1MDYwNDc2")
    ]),
    new Level("SMH RCL 55xH", 40, "Silver", "141128210", "Verification Route", "SqueegGD", "SqueegGD", "https://www.youtube.com/embed/Z6yDecBauoM", [
        new Record("SqueegGD", "77", "0/10", "Top 1", "https://www.youtube.com/watch?v=Z6yDecBauoM"),
        new Record("EndGamer7896", "194", "8/10", "High Silver, 39-45 points", "https://medal.tv/games/geometry-dash/clips/mM3vrwfhrTuH20otN?invite=cr-MSxzNm4sNTk1MDYwNDc2"),
    ]),
    new Level("Robopolis V2", 38, "Silver", "138091805", "Any Route", "rumble1978", "EndGamer7896", "https://medal.tv/games/geometry-dash/clip/muYoylZMtRMFjDQcF?invite=cr-MSx4amcsNTk1MDYwNDc2", [
        new Record("EndGamer7896", "218", "9/10", "High Silver / Low Gold", "https://medal.tv/games/geometry-dash/clips/muYoylZMtRMFjDQcF?invite=cr-MSx4amcsNTk1MDYwNDc2"),
    ]),
    new Level("Unnamed 41", 33, "Silver", "136714964", "Any Route", "XanderGMDD", "XanderGMDD", "https://medal.tv/games/geometry-dash/clip/mopJfH506wMrq0VC-?invite=cr-MSxQdkMsMzM2NzY3Njgx", [
        new Record("XanderGMDD", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mopJfH506wMrq0VC-?invite=cr-MSxQdkMsMzM2NzY3Njgx"),
        new Record("Farlayy", "N/A", "N/A", "N/A", ""),
        new Record("sourceerrortxt", "N/A", "N/A", "N/A", "https://youtu.be/6GoeHlz11YU"),
        new Record("Zannoz", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/moJTHJ2C2fLHhyJif/spok?invite=cr-MSxEcTksNTM1NDU2MDU0LA"),
        new Record("EndGamer7896", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mqPPqqjXh_tZBolRT?invite=cr-MSxpZGssNTk1MDYwNDc2"),
        new Record("placek3", "N/A", "N/A", "N/A", "https://www.youtube.com/watch?v=8CEpN01ZWPc"),
        new Record("zeroskills", "N/A", "N/A", "N/A", ""),
        new Record("zis08", "N/A", "N/A", "Mid Bronze", "https://medal.tv/games/geometry-dash/clips/msqwGj3fd9pNrqyWe?invite=cr-MSwxZDYsMTY4ODkwOTU4"),
    ]),
    new Level("Glass Castle", 29, "Silver", "136826420", "Any Route", "XanderGMDD", "XanderGMDD", "https://medal.tv/games/geometry-dash/clip/moSGRT8hdQ483IsCG?invite=cr-MSw0Uk0sMzM2NzY3Njgx", [
        new Record("XanderGMDD", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/moSGRT8hdQ483IsCG?invite=cr-MSw0Uk0sMzM2NzY3Njgx"),
        new Record("Farlayy", "N/A", "N/A", "N/A", ""),
        new Record("sourceerrortxt", "N/A", "N/A", "N/A", "https://youtu.be/RNJCFuXXAdE"),
        new Record("EndGamer7896", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mqPK8i1fwkDWSVFrq?invite=cr-MSx2bmMsNTk1MDYwNDc2"),
        new Record("placek3", "N/A", "N/A", "N/A", "https://www.youtube.com/watch?v=8CEpN01ZWPc"),
        new Record("zeroskills", "N/A", "N/A", "N/A", ""),
        new Record("zis08", "N/A", "N/A", "Good as is", "https://medal.tv/games/geometry-dash/clips/msoN3uL91Va4O-Idl?invite=cr-MSxpcmksMTY4ODkwOTU4"),
    ]),
    new Level("frostworks", 27, "Silver", "136124065", "Any Route", "sourceerrortxt", "sourceerrortxt", "https://www.youtube.com/embed/DOt_YqK4I7g", [
        new Record("sourceerrortxt", "N/A", "N/A", "N/A", "https://www.youtube.com/watch?v=DOt_YqK4I7g"),
        new Record("XanderGMDD", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/monjUpS2bBHYjzFaH?invite=cr-MSwydWIsMzM2NzY3Njgx"),
        new Record("Farlayy", "N/A", "N/A", "N/A", ""),
        new Record("Neveets", "N/A", "N/A", "N/A", "https://youtu.be/XZIpfUSpRS8"),
        new Record("EndGamer7896", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mqPHRuYGWfLAAHGbH?invite=cr-MSxqYWEsNTk1MDYwNDc2"),
        new Record("placek3", "N/A", "N/A", "N/A", "https://www.youtube.com/watch?v=8CEpN01ZWPc"),
        new Record("zeroskills", "N/A", "N/A", "N/A", ""),
        new Record("zis08", "N/A", "N/A", "Good as is", "https://medal.tv/games/geometry-dash/clips/msqmWgEyoQZqGCNrj?invite=cr-MSx6OXEsMTY4ODkwOTU4"),
    ]),
    new Level("Monochrome", 25, "Silver", "138015367", "Any Route", "EndGamer7896", "EndGamer7896", "https://medal.tv/games/geometry-dash/clip/muFDSeOPYnZ7XiKEH?invite=cr-MSxwNGEsNTk1MDYwNDc2", [
        new Record("EndGamer7896", "848", "5/10", "Entry Silver, 25 points", "https://medal.tv/games/geometry-dash/clips/muFDSeOPYnZ7XiKEH?invite=cr-MSxwNGEsNTk1MDYwNDc2"),
        new Record("placek3", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mvHzaA57FF0hF7mK5?invite=cr-MSx6RnAsNTk0ODYzMTcx&v=31"),
    ]),

    /*
    .########..########...#######..##....##.########.########
    .##.....##.##.....##.##.....##.###...##......##..##......
    .##.....##.##.....##.##.....##.####..##.....##...##......
    .########..########..##.....##.##.##.##....##....######..
    .##.....##.##...##...##.....##.##..####...##.....##......
    .##.....##.##....##..##.....##.##...###..##......##......
    .########..##.....##..#######..##....##.########.########
    */
    new Level("Robot Carnival", 22, "Bronze", "141050126", "Verification Route", "Vinecke123", "EndGamer7896", "https://medal.tv/games/geometry-dash/clip/mM5DQxD0WqP97w9pF?invite=cr-MSxtemUsNTk1MDYwNDc2", [
        new Record("EndGamer7896", "576", "6/10", "High Bronze, 22-23 points", "https://medal.tv/games/geometry-dash/clips/mM5DQxD0WqP97w9pF?invite=cr-MSxtemUsNTk1MDYwNDc2"),
    ]),
    new Level("Ape Rotation", 20, "Bronze", "136828286", "Any Route", "EndGamer7896", "XanderGMDD", "https://medal.tv/games/geometry-dash/clip/moTOrjARmqBTM0OkI?invite=cr-MSw0ZWcsMzM2NzY3Njgx", [
        new Record("XanderGMDD", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/moTOrjARmqBTM0OkI?invite=cr-MSw0ZWcsMzM2NzY3Njgx"),
        new Record("Farlayy", "N/A", "N/A", "N/A", ""),
        new Record("dcv4", "N/A", "N/A", "N/A", "https://youtu.be/yzFwKWOVcFs"),
        new Record("EndGamer7896", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mqPfByJWqXIQJXelE?invite=cr-MSwxbWYsNTk1MDYwNDc2"),
        new Record("placek3", "N/A", "N/A", "N/A", "https://www.youtube.com/watch?v=8CEpN01ZWPc"),
        new Record("zeroskills", "N/A", "N/A", "N/A", ""),
        new Record("zis08", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mrJuT1st9mrlYxaCj?invite=cr-MSxiY28sMTY4ODkwOTU4"),
        new Record("IceCubed88", "421", "N/A", "Easier than WfX2", "https://youtu.be/y2S_J-fK8fU?si=mVLdjKTB6mzObHe-"),
        new Record("Komically", "221", "6/10", "Swap with WfX2", "https://www.youtube.com/watch?v=NY7ZYnOnMIo"),
    ]),
    new Level("WfX2", 18, "Bronze", "137224701", "Any Route", "EndGamer7896", "EndGamer7896", "https://medal.tv/games/geometry-dash/clip/mqTuJ97zO3YjUbd3t?invite=cr-MSxMWUQsNTk1MDYwNDc2", [
        new Record("EndGamer7896", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mqTuJ97zO3YjUbd3t?invite=cr-MSxMWUQsNTk1MDYwNDc2"),
        new Record("XanderGMDD", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mqUHAYsR4IGtJ-WoK?invite=cr-MSw4YXYsMzM2NzY3Njgx"),
        new Record("placek3", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mr4XuwQAzd-g6Loyr?invite=cr-MSxEQUUsNTk0ODYzMTcx&v=30"),
        new Record("tFluffy", "N/A", "N/A", "N/A", ""),
        new Record("zis08", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/msqDaf3fjsClMC6fI?invite=cr-MSx6dmwsMTY4ODkwOTU4"),
        new Record("Farlayy", "N/A", "N/A", "N/A", ""),
        new Record("zeroskills", "N/A", "N/A", "N/A", ""),
        new Record("ItzThiur", "102", "6/10", "High Bronze", "https://youtu.be/aOgIG0csZAY?si=HIg8jo933LF3zd1_"),
        new Record("IceCubed88", "887", "N/A", "Harder than Ape Rotation", "https://youtu.be/y2S_J-fK8fU?si=mVLdjKTB6mzObHe-"),
        new Record("Komically", "221", "4/10", "Swap with Ape Rotation", "https://www.youtube.com/watch?v=NY7ZYnOnMIo"),
    ]),
    new Level("Code Red", 17, "Bronze", "136724597", "Any Route", "XanderGMDD", "XanderGMDD", "https://medal.tv/games/geometry-dash/clip/moteytWTL6Ggwm_P1?invite=cr-MSw0QkQsMzM2NzY3Njgx", [
        new Record("XanderGMDD", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/moteytWTL6Ggwm_P1?invite=cr-MSw0QkQsMzM2NzY3Njgx"),
        new Record("Farlayy", "N/A", "N/A", "N/A", ""),
        new Record("Zannoz", "N/A", "N/A", "N/A", "https://medal.tv/games/imported-clips/clips/moJvwYZLEl_wQK5le/spok?invite=cr-MSxpU1AsNTM1NDU2MDU0LA"),
        new Record("dcv4", "N/A", "N/A", "N/A", "https://youtu.be/yzFwKWOVcFs"),
        new Record("sourceerrortxt", "N/A", "N/A", "N/A", "https://youtu.be/bG4zLkFzwWA"),
        new Record("EndGamer7896", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mqPhuvtATyccde6zp?invite=cr-MSx3ajYsNTk1MDYwNDc2"),
        new Record("placek3", "N/A", "N/A", "N/A", "https://www.youtube.com/watch?v=8CEpN01ZWPc"),
        new Record("zis08", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mrIXom6Zo3YF-Ec8_?invite=cr-MSxsM3ksMTY4ODkwOTU4"),
        new Record("zeroskills", "N/A", "N/A", "N/A", ""),
        new Record("ItzThiur", "48", "8/10", "Bronze Tier", "https://youtu.be/aOgIG0csZAY?si=HIg8jo933LF3zd1_"),
        new Record("IceCubed88", "142", "N/A", "Good as is", "https://youtu.be/y2S_J-fK8fU?si=mVLdjKTB6mzObHe-"),
        new Record("Komically", "144", "6/10", "Swap with Lowk ima milk", "https://www.youtube.com/watch?v=NY7ZYnOnMIo"),   
    ]),
    new Level("Copper Alloy", 16, "Bronze", "136109854", "Any Route", "sourceerrortxt", "sourceerrortxt", "https://www.youtube.com/embed/VmPu-EKcZdA", [
        new Record("sourceerrortxt", "N/A", "N/A", "N/A", "https://www.youtube.com/watch?v=VmPu-EKcZdA"),
        new Record("XanderGMDD", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mnZAoJaXVRQShSpCM?invite=cr-MSw4c28sMzM2NzY3Njgx"),
        new Record("Zannoz", "N/A", "N/A", "N/A", "https://medal.tv/games/imported-clips/clips/moJvwYZLEl_wQK5le/spok?invite=cr-MSxpU1AsNTM1NDU2MDU0LA"),
        new Record("Farlayy", "N/A", "N/A", "N/A", ""),
        new Record("mmasterdog", "N/A", "N/A", "N/A", "https://youtu.be/5DY0effLG40"),
        new Record("dcv4", "N/A", "N/A", "N/A", "https://youtu.be/yzFwKWOVcFs"),
        new Record("EndGamer7896", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mqPc3i12dOrLq0Ui9?invite=cr-MSx0Z3MsNTk1MDYwNDc2"),
        new Record("placek3", "N/A", "N/A", "N/A", "https://www.youtube.com/watch?v=8CEpN01ZWPc"),
        new Record("zis08", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mrMtKZUOEnfkSMPM-?invite=cr-MSw1d1gsMTY4ODkwOTU4&v=16"),
        new Record("zeroskills", "N/A", "N/A", "N/A", ""),
        new Record("tFluffy", "N/A", "N/A", "N/A", ""),
        new Record("ItzThiur", "16", "7/10", "Easier than Code Red & Lowk ima milk", "https://youtu.be/aOgIG0csZAY?si=HIg8jo933LF3zd1_"),
        new Record("IceCubed88", "217", "N/A", "Good as is", "https://youtu.be/y2S_J-fK8fU?si=mVLdjKTB6mzObHe-"),
        new Record("Komically", "146", "8/10", "Good as is", "https://www.youtube.com/watch?v=NY7ZYnOnMIo"),
    ]),
    new Level("lowk ima milk", 14, "Bronze", "137206383", "Any Route", "XanderGMDD", "XanderGMDD", "https://medal.tv/games/geometry-dash/clip/mqNYtIqiHqWQ7WwEe?invite=cr-MSxDRHosMzM2NzY3Njgx", [
        new Record("XanderGMDD", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mqNYtIqiHqWQ7WwEe?invite=cr-MSxDRHosMzM2NzY3Njgx"),
        new Record("EndGamer7896", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mqPeuiCgBLmQWJY6g?invite=cr-MSwwb2EsNTk1MDYwNDc2"),
        new Record("Farlayy", "N/A", "N/A", "N/A", ""),
        new Record("placek3", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mr57Q2iqNCWQfdUek?invite=cr-MSxZSWgsNTk0ODYzMTcx&v=14"),
        new Record("sourceerrortxt", "N/A", "N/A", "N/A", "https://youtu.be/F7HrO6RgNxs"),
        new Record("zis08", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mrM33zicIh8IZaYFI?invite=cr-MSxxMXMsMTY4ODkwOTU4"),
        new Record("zeroskills", "N/A", "N/A", "N/A", ""),
        new Record("ItzThiur", "188", "3/10", "High Bronze", "https://youtu.be/aOgIG0csZAY?si=HIg8jo933LF3zd1_"),
        new Record("Vinecke123", "533", "6.5/10", "Bronze Tier", "https://medal.tv/games/geometry-dash/clips/mvi2U0ON8erjREcrf?invite=cr-MSxyRXIsNDczMTIyMTcw&v=30"),
        new Record("IceCubed88", "172", "N/A", "Good as is", "https://youtu.be/y2S_J-fK8fU?si=mVLdjKTB6mzObHe-"),
        new Record("Komically", "249", "4/10", "Swap with Code Red", "https://www.youtube.com/watch?v=NY7ZYnOnMIo"),
    ]),
    new Level("Waiting for Xander", 11, "Bronze", "Any Route", "137223061", "EndGamer7896", "EndGamer7896", "https://medal.tv/games/geometry-dash/clip/mqSD6F83c19OvKQ2w?invite=cr-MSw1QnIsNTk1MDYwNDc2", [
        new Record("EndGamer7896", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mqSD6F83c19OvKQ2w?invite=cr-MSw1QnIsNTk1MDYwNDc2"),
        new Record("XanderGMDD", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mqUg8ZCTnSazSsD8O?invite=cr-MSx4bjcsMzM2NzY3Njgx"),
        new Record("Farlayy", "N/A", "N/A", "N/A", ""),
        new Record("placek3", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mr4Kuo3eolQCN2x-x?invite=cr-MSxxb0gsNTk0ODYzMTcx&v=13"),
        new Record("tFluffy", "N/A", "N/A", "N/A", ""),
        new Record("zis08", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mrN8RZMMKGrwxk4pg?invite=cr-MSw2cjQsMTY4ODkwOTU4"),
        new Record("zeroskills", "N/A", "N/A", "N/A", ""),
        new Record("ItzThiur", "18", "6/10", "Bronze Tier", "https://youtu.be/aOgIG0csZAY?si=HIg8jo933LF3zd1_"),
        new Record("IceCubed88", "96", "N/A", "Easier than Out of Time", "https://youtu.be/y2S_J-fK8fU?si=mVLdjKTB6mzObHe-"),
        new Record("Komically", "52", "5/10", "Good as is", "https://www.youtube.com/watch?v=NY7ZYnOnMIo"),
    ]),
    new Level("out of time", 8, "Bronze", "136136798", "Any Route", "sourceerrortxt", "sourceerrortxt", "https://www.youtube.com/embed/HRYVy3vU168", [
        new Record("sourceerrortxt", "N/A", "N/A", "N/A", "https://youtu.be/HRYVy3vU168"),
        new Record("XanderGMDD", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mnZusR2vMnSiIQfRI?invite=cr-MSx5YmcsMzM2NzY3Njgx"),
        new Record("Farlayy", "N/A", "N/A", "N/A", ""),
        new Record("Zannoz", "N/A", "N/A", "N/A", "https://medal.tv/games/imported-clips/clips/moJvwYZLEl_wQK5le/spok?invite=cr-MSxpU1AsNTM1NDU2MDU0LA"),
        new Record("mmasterdog", "N/A", "N/A", "N/A", "https://youtu.be/5DY0effLG40"),
        new Record("dcv4", "N/A", "N/A", "N/A", "https://youtu.be/yzFwKWOVcFs"),
        new Record("EndGamer7896", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mqP46wnCzBr43hfh4?invite=cr-MSx6OGgsNTk1MDYwNDc2"),
        new Record("placek3", "N/A", "N/A", "N/A", "https://www.youtube.com/watch?v=8CEpN01ZWPc"),
        new Record("tFluffy", "N/A", "N/A", "N/A", ""),
        new Record("zis08", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mrN5lZQU4s4a1FvlS?invite=cr-MSx5b2YsMTY4ODkwOTU4"),
        new Record("zeroskills", "N/A", "N/A", "N/A", ""),
        new Record("ItzThiur", "27", "6/10", "Bronze Tier", "https://youtu.be/aOgIG0csZAY?si=HIg8jo933LF3zd1_"),
        new Record("DexOnGD", "242", "2/10", "High Bronze", "https://youtu.be/vcjT4NF97Qo"),
        new Record("IceCubed88", "219", "N/A", "Harder than Waiting for Xander", "https://youtu.be/y2S_J-fK8fU?si=mVLdjKTB6mzObHe-"),
        new Record("Komically", "115", "7/10", "Good as is", "https://www.youtube.com/watch?v=NY7ZYnOnMIo"),
    ]),
    new Level("LeBronze", 1, "Bronze", "137909718", "Any Route", "EndGamer7896", "EndGamer7896", "https://medal.tv/games/geometry-dash/clip/mue07kBtQ_fmFBPPo?invite=cr-MSxyb2QsNTk1MDYwNDc2", [
        new Record("EndGamer7896", "5", "10/10", "Entry Bronze, 1 point", "https://medal.tv/games/geometry-dash/clips/mue07kBtQ_fmFBPPo?invite=cr-MSxyb2QsNTk1MDYwNDc2"),
        new Record("placek3", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mvHhHoMXdtr7LgbNS?invite=cr-MSxpQk8sNTk0ODYzMTcx&v=16"),
        new Record("ItzThiur", "16", "7/10", "Fair", "https://youtu.be/aOgIG0csZAY?si=HIg8jo933LF3zd1_"),
        new Record("DexOnGD", "16", "6/10", "Low Bronze", "https://www.youtube.com/watch?v=Knwkm9FtgMM"),
        new Record("IceCubed88", "10", "N/A", "Entry Bronze", "https://youtu.be/y2S_J-fK8fU?si=mVLdjKTB6mzObHe-"),
        new Record("Sp4c3m0nk3y", "29", "10/10", "Bottom List", "https://www.youtube.com/watch?v=EVYbzeptQC4s"),
        new Record("Komically", "27", "9/10", "Good as is", "https://www.youtube.com/watch?v=NY7ZYnOnMIo"),
    ]),
];

let displacement = [
    /*
    .##.....##.########.##.......##......
    .##.....##.##.......##.......##......
    .##.....##.##.......##.......##......
    .#########.######...##.......##......
    .##.....##.##.......##.......##......
    .##.....##.##.......##.......##......
    .##.....##.########.########.########
    */
    new Level("Double Double", 0, "Hell", "137564688", "Any Route", "zis08", "zis08", "https://medal.tv/games/geometry-dash/clip/msohBZHNKc1I8piec?invite=cr-MSxhZ3MsMTY4ODkwOTU4", []),
    new Level("Tiptoe Temple", 0, "Hell", "96953991", "Any Route", "iMintyGreen", "Farlayy", "https://www.youtube.com/embed/xN16fwLFoAs", []),
    new Level("WHY", 0, "Hell", "136548356", "Any Route", "XanderGMDD", "XanderGMDD", "https://medal.tv/games/geometry-dash/clip/mnwqZkqOoSOGO8Iio?invite=cr-MSxVVXosMzM2NzY3Njgx&v=12", []),

    /*
    .########..##.....##.########...######......###....########..#######..########..##....##
    .##.....##.##.....##.##.....##.##....##....##.##......##....##.....##.##.....##..##..##.
    .##.....##.##.....##.##.....##.##.........##...##.....##....##.....##.##.....##...####..
    .########..##.....##.########..##...####.##.....##....##....##.....##.########.....##...
    .##........##.....##.##...##...##....##..#########....##....##.....##.##...##......##...
    .##........##.....##.##....##..##....##..##.....##....##....##.....##.##....##.....##...
    .##.........#######..##.....##..######...##.....##....##.....#######..##.....##....##...
    */
    new Level("Cave A Neer", 0, "Purgatory", "131713130", "Any Route", "zis08", "zis08", "https://youtube.com/embed/7vp7MYNVkGk?si=aGBPL_JaAgaHCfRl", []),
    new Level("Cliff Hanger", 0, "Purgatory", "128936112", "Any Route", "zis08", "zis08", "https://youtube.com/embed/hYwzf29Jkpw?si=5b7hAozp3A9KJAwW", []),
    new Level("ball fondling challenge", 0, "Purgatory", "108970071", "Any Route", "bunibus", "tFluffy", "https://www.youtube.com/embed/shqywNEj1zk", []),
    new Level("On The Cliff Edge", 0, "Purgatory", "1129285315", "Any Route", "zis08", "zis08", "https://youtube.com/embed/MQdkvdPwKE0?si=7BYt0Cek1wM8hbJd", []),
    new Level("Crayons", 0, "Purgatory", "138110878 (Broken)", "Any Route", "rumble1978", "rumble1978", "https://medal.tv/games/geometry-dash/clip/mv7znSDTOA4H9Wrm5?invite=cr-MSx6anIsNDc0ODUyOTUy&v=19", []),
    new Level("gar", 0, "Purgatory", "137741707 (Broken)", "Any Route", "BungusGD", "BungusGD", "https://youtube.com/embed/whD2Q-jQOHE?si=Qqod5Mz8NiaBkiWh", []),

    /*
    .##.......####.##.....##.########...#######.
    .##........##..###...###.##.....##.##.....##
    .##........##..####.####.##.....##.##.....##
    .##........##..##.###.##.########..##.....##
    .##........##..##.....##.##.....##.##.....##
    .##........##..##.....##.##.....##.##.....##
    .########.####.##.....##.########...#######.
    */
    new Level("Tristan Never Clear", 0, "Limbo", "GDSHARE", "Any Route", "???", "-", "https://www.youtube.com/embed/dQw4w9WgXcQ", []),
    new Level("Dopamine Rush", 0, "Limbo", "136993028", "Any Route", "EndGamer7896", "-", "https://www.youtube.com/embed/nOcsSgJBJZI", []),
    new Level("Heliorobo", 0, "Limbo", "138007569", "Showcased Route", "XanderGMDD", "-", "https://www.youtube.com/embed/dQw4w9WgXcQ", []),
    new Level("Expiration Date", 0, "Limbo", "137150681", "Any Route", "EndGamer7896", "-", "https://www.youtube.com/embed/vK5TPmBbFeE", []),
    new Level("RENOVATION", 0, "Limbo", "138079978", "Any Route", "EndGamer7896", "-", "https://www.youtube.com/embed/BVGFRk3T9js", []),
    new Level("Robowamba", 0, "Limbo", "137515738", "Showcased Route", "XanderGMDD", "-", "https://www.youtube.com/embed/pSCu9R6Sq4", []),
    new Level("The Third Robot", 0, "Limbo", "136718958", "Any Route", "Zannoz", "-", "https://youtube.com/embed/dQw4w9WgXcQ", []),
];

function listDisplay() {
    var actualList = document.getElementById("actualList");
    var displacementZone = document.getElementById("displacementZone");

    for (let level of levels) {
        let levelLi = document.createElement("li");
        levelLi.className = level.tier.toLowerCase();
        levelLi.innerHTML = level.name;
        levelLi.onclick = function () {
            displayLevel(level.name);
        };

        actualList.appendChild(levelLi);
    }

    for (let level of displacement) {
        let levelLi = document.createElement("li");
        levelLi.className = level.tier.toLowerCase();
        levelLi.innerHTML = level.name;
        levelLi.onclick = function () {
            displayLevel(level.name);
        };

        displacementZone.appendChild(levelLi);
    }

    displayLevel(levels[0].name);
}

function lbDisplay() {
    var leaderboard = document.getElementById("leaderboard");

    let players = {};

    for (let level of levels) {
        for (let record of level.records) {
            if (!players[record.name]) {
                players[record.name] = 0;
            }

            players[record.name] += level.points;
        }
    };

    let sortedPlayers = Object.entries(players).sort((a, b) => b[1] - a[1]);

    for (let [player, points] of sortedPlayers) {
        let playerLi = document.createElement("li");
        playerLi.innerHTML = `${player}: ${points} points`;
        playerLi.className = getRank(player);
        leaderboard.appendChild(playerLi);
    };
};

let bronzeNumber = 0; for (let level of levels) { if (level.tier === "Bronze") { bronzeNumber++; } }
let silverNumber = 0; for (let level of levels) { if (level.tier === "Silver") { silverNumber++; } }
let goldNumber = 0; for (let level of levels) { if (level.tier === "Gold") { goldNumber++; } }
let platinumNumber = 0; for (let level of levels) { if (level.tier === "Platinum") { platinumNumber++; } }
let amethystNumber = 0; for (let level of levels) { if (level.tier === "Amethyst") { amethystNumber++; } }
let sapphireNumber = 0; for (let level of levels) { if (level.tier === "Sapphire") { sapphireNumber++; } }
let emeraldNumber = 0; for (let level of levels) { if (level.tier === "Emerald") { emeraldNumber++; } }
let rubyNumber = 0; for (let level of levels) { if (level.tier === "Ruby") { rubyNumber++; } }
let diamondNumber = 0; for (let level of levels) { if (level.tier === "Diamond") { diamondNumber++; } }
let lonsdaleiteNumber = 0; for (let level of levels) { if (level.tier === "Lonsdaleite") { lonsdaleiteNumber++; } }
let obsidianNumber = 0; for (let level of levels) { if (level.tier === "Obsidian") { obsidianNumber++; } }

function bronzeReq() { (bronzeNumber > 1) ? bronzeReturn = Math.floor((bronzeNumber / 2)) : bronzeReturn = 1; return bronzeReturn; };
function silverReq() { (silverNumber > 1) ? silverReturn = Math.floor((silverNumber / 2)) : silverReturn = 1; return silverReturn; };
function goldReq() { (goldNumber > 1) ? goldReturn = Math.floor((goldNumber / 2)) : goldReturn = 1; return goldReturn; };
function platinumReq() { (platinumNumber > 1) ? platinumReturn = Math.floor((platinumNumber / 2)) : platinumReturn = 1; return platinumReturn; };
function amethystReq() { (amethystNumber > 1) ? amethystReturn = Math.floor((amethystNumber / 2)) : amethystReturn = 1; return amethystReturn; };
function sapphireReq() { (sapphireNumber > 1) ? sapphireReturn = Math.floor((sapphireNumber / 2)) : sapphireReturn = 1; return sapphireReturn; };
function rubyReq() { (rubyNumber > 1) ? rubyReturn = Math.floor((rubyNumber / 2)) : rubyReturn = 1; return rubyReturn; };
function emeraldReq() { (emeraldNumber > 1) ? emeraldReturn = Math.floor((emeraldNumber / 2)) : emeraldReturn = 1; return emeraldReturn; };
function diamondReq() { (diamondNumber > 1) ? diamondReturn = Math.floor((diamondNumber / 2)) : diamondReturn = 1; return diamondReturn; };
function lonsdaleiteReq() { (lonsdaleiteNumber > 1) ? lonsdaleiteReturn = Math.floor((lonsdaleiteNumber / 2)) : lonsdaleiteReturn = 1; return lonsdaleiteReturn; };
function obsidianReq() { (obsidianNumber > 1) ? obsidianReturn = Math.floor((obsidianNumber / 2)) : obsidianReturn = 1; return obsidianReturn; };

let bronzeReqNumber = bronzeReq();
let silverReqNumber = silverReq();
let goldReqNumber = goldReq();
let platinumReqNumber = platinumReq();
let amethystReqNumber = amethystReq();
let sapphireReqNumber = sapphireReq();
let rubyReqNumber = rubyReq();
let emeraldReqNumber = emeraldReq();
let diamondReqNumber = diamondReq();
let lonsdaleiteReqNumber = lonsdaleiteReq();
let obsidianReqNumber = obsidianReq();


function getRank(player) {
    let bronzeCompleted = 0;
    let silverCompleted = 0;
    let goldCompleted = 0;
    let platinumCompleted = 0;
    let amethystCompleted = 0;
    let sapphireCompleted = 0;
    let rubyCompleted = 0;
    let emeraldCompleted = 0;
    let diamondCompleted = 0;
    let lonsdaleiteCompleted = 0;
    let obsidianCompleted = 0;



    for (let level of levels) {
        for (let record of level.records) {
            if (record.name === player) {
                switch (level.tier) {
                    case "Bronze":
                        bronzeCompleted++;
                        break;
                    case "Silver":
                        silverCompleted++;
                        break;
                    case "Gold":
                        goldCompleted++;
                        break;
                    case "Platinum":
                        platinumCompleted++;
                        break;
                    case "Amethyst":
                        amethystCompleted++;
                        break;
                    case "Sapphire":
                        sapphireCompleted++;
                        break;
                    case "Ruby":
                        rubyCompleted++;
                        break;
                    case "Emerald":
                        emeraldCompleted++;
                        break;
                    case "Diamond":
                        diamondCompleted++;
                        break;
                    case "Lonsdaleite":
                        lonsdaleiteCompleted++;
                        break;
                    case "Obsidian":
                        obsidianCompleted++;
                        break;
                }
            }
        }
    };


    let returnValue = "";

    if (bronzeCompleted > 0) {
        if (bronzeCompleted >= bronzeReqNumber) {
            if (bronzeCompleted === bronzeNumber) {
                returnValue = "bronzeElite";
            } else {
                returnValue = "bronzeDX";
            }
        } else {
            returnValue = "bronze";
        }
    }

    if (silverCompleted > 0 && bronzeCompleted > 0) {
        if (silverCompleted >= silverReqNumber && (returnValue === "bronzeDX" || returnValue === "bronzeElite")) {
            if (silverCompleted === silverNumber && returnValue === "bronzeElite") {
                returnValue = "silverElite";
            } else {
                returnValue = "silverDX";
            }
        } else {
            returnValue = "silver";
        }
    }

    if (goldCompleted > 0 && silverCompleted > 0 && bronzeCompleted > 0) {
        if (goldCompleted >= goldReqNumber && (returnValue === "silverDX" || returnValue === "silverElite")) {
            if (goldCompleted === goldNumber && returnValue === "silverElite") {
                returnValue = "goldElite";
            } else {
                returnValue = "goldDX";
            }
        } else {
            returnValue = "gold";
        }
    }

    if (platinumCompleted > 0 && goldCompleted > 0 && silverCompleted > 0 && bronzeCompleted > 0) {
        if (platinumCompleted >= platinumReqNumber && (returnValue === "goldDX" || returnValue === "goldElite")) {
            if (platinumCompleted === platinumNumber && returnValue === "goldElite") {
                returnValue = "platinumElite";
            } else {
                returnValue = "platinumDX";
            }
        } else {
            returnValue = "platinum";
        }
    }


    if (amethystCompleted > 0 && platinumCompleted > 0 && goldCompleted > 0 && silverCompleted > 0 && bronzeCompleted > 0) {
        if (amethystCompleted >= amethystReqNumber && (returnValue === "platinumDX" || returnValue === "platinumElite")) {
            if (amethystCompleted === amethystNumber && returnValue === "platinumElite") {
                returnValue = "amethystElite";
            } else {
                returnValue = "amethystDX";
            }
        } else {
            returnValue = "amethyst";
        }
    }

    if (sapphireCompleted > 0 && amethystCompleted > 0 && platinumCompleted > 0 && goldCompleted > 0 && silverCompleted > 0 && bronzeCompleted > 0) {
        if (sapphireCompleted >= sapphireReqNumber && (returnValue === "amethystDX" || returnValue === "amethystElite")) {
            if (sapphireCompleted === sapphireNumber && returnValue === "amethystElite") {
                returnValue = "sapphireElite";
            } else {
                returnValue = "sapphireDX";
            }
        } else {
            returnValue = "sapphire";
        }
    }

    if (rubyCompleted > 0 && sapphireCompleted > 0 && amethystCompleted > 0 && platinumCompleted > 0 && goldCompleted > 0 && silverCompleted > 0 && bronzeCompleted > 0) {
        if (rubyCompleted >= rubyReqNumber && (returnValue === "sapphireDX" || returnValue === "sapphireElite")) {
            if (rubyCompleted === rubyNumber && returnValue === "sapphireElite") {
                returnValue = "rubyElite";
            } else {
                returnValue = "rubyDX";
            }
        } else {
            returnValue = "ruby";
        }
    }

    if (emeraldCompleted > 0 && rubyCompleted > 0 && sapphireCompleted > 0 && amethystCompleted > 0 && platinumCompleted > 0 && goldCompleted > 0 && silverCompleted > 0 && bronzeCompleted > 0) {
        if (emeraldCompleted >= emeraldReqNumber && (returnValue === "rubyDX" || returnValue === "rubyElite")) {
            if (emeraldCompleted === emeraldNumber && returnValue === "rubyElite") {
                returnValue = "emeraldElite";
            } else {
                returnValue = "emeraldDX";
            }
        } else {
            returnValue = "emerald";
        }
    }

    if (diamondCompleted > 0 && emeraldCompleted > 0 && rubyCompleted > 0 && sapphireCompleted > 0 && amethystCompleted > 0 && platinumCompleted > 0 && goldCompleted > 0 && silverCompleted > 0 && bronzeCompleted > 0) {
        if (diamondCompleted >= diamondReqNumber && (returnValue === "emeraldDX" || returnValue === "emeraldElite")) {
            if (diamondCompleted === diamondNumber && returnValue === "emeraldElite") {
                returnValue = "diamondElite";
            } else {
                returnValue = "diamondDX";
            }
        } else {
            returnValue = "diamond";
        }
    }

    if (lonsdaleiteCompleted > 0 && diamondCompleted > 0 && emeraldCompleted > 0 && rubyCompleted > 0 && sapphireCompleted > 0 && amethystCompleted > 0 && platinumCompleted > 0 && goldCompleted > 0 && silverCompleted > 0 && bronzeCompleted > 0) {
        if (lonsdaleiteCompleted >= lonsdaleiteReqNumber && (returnValue === "diamondDX" || returnValue === "diamondElite")) {
            if (lonsdaleiteCompleted === lonsdaleiteNumber && returnValue === "diamondElite") {
                returnValue = "lonsdaleiteElite";
            } else {
                returnValue = "lonsdaleiteDX";
            }
        } else {
            returnValue = "lonsdaleite";
        }
    }

    if (obsidianCompleted > 0 && lonsdaleiteCompleted > 0 && diamondCompleted > 0 && emeraldCompleted > 0 && rubyCompleted > 0 && sapphireCompleted > 0 && amethystCompleted > 0 && platinumCompleted > 0 && goldCompleted > 0 && silverCompleted > 0 && bronzeCompleted > 0) {
        if (obsidianCompleted >= obsidianReqNumber && (returnValue === "lonsdaleiteDX" || returnValue === "lonsdaleiteElite")) {
            if (obsidianCompleted === obsidianNumber && returnValue === "lonsdaleiteElite") {
                returnValue = "obsidianElite";
            } else {
                returnValue = "obsidianDX";
            }
        } else {
            returnValue = "obsidian";
        }
    }

    return returnValue;
}

function displayLevel(newLevel) {
    let levelName = document.getElementById("levelName");
    let levelVerified = document.getElementById("levelVerified");
    let points = document.getElementById("points");
    let tier = document.getElementById("tier");
    let id = document.getElementById("levelId");
    let routes = document.getElementById("routes");
    let ytEmbed = document.getElementById("ytEmbed");

    let recordsSection = document.getElementById("recordsSection");

    let allLevels = levels.concat(displacement);

    for (let level of allLevels) {
        if (level.name === newLevel) {
            levelName.textContent = level.name + " by " + level.creator;
            levelVerified.textContent = "verified by " + level.verifier;
            points.textContent = level.points;
            tier.textContent = level.tier;
            id.textContent = level.id;
            routes.textContent = level.routes;
            ytEmbed.src = level.videolink;

            if (displacement.some(lvl => lvl.name === newLevel)) {
                recordsSection.innerHTML = "<strong><p>Records for levels in the Displacement Zone are not tracked, as they are not officially part of the list.</p></strong>";
            } else {
                recordsSection.innerHTML = `<details>
                        <summary id="summary">Records</summary>
                        <table id="records">
    
                        </table>
                    </details>`
                let records = document.getElementById("records");
                records.innerHTML = `
            <tr>
                        <th>Player</th>
                        <th>Attempts</th>
                        <th>Enjoyment</th>
                        <th>Placement/Points Opinion</th>
            </tr>
        `;

                for (let completion of level.records) {
                    records.innerHTML += `
                <tr>
                    <td><a style="color: black; text-decoration: underlined;" href=${completion.proof} ${completion.proof == "" ? "" : "target='_blank'"}>${completion.name}</a></td>
                    <td>${completion.attempts}</td>
                    <td>${completion.enjoyment}</td>
                    <td>${completion.opinion}</td>
                </tr>
            `;
                }
            }
        }
    }
}
