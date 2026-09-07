function Level(name, points, quality, tier, id, routes, creator, verifier, videolink, records, nong, discredited) {
    this.name = name;
    this.points = points;
    this.quality = quality;
    this.tier = tier;
    this.id = id;
    this.routes = routes;
    this.creator = creator;
    this.verifier = verifier;
    this.videolink = videolink;
    this.records = records;
    this.totalRecords = records.length;
    this.nong = nong;
    if (discredited) {
        this.discredited = discredited;
    };
}

function Record(name, attempts, enjoyment, opinion, proof) {
    this.name = name;
    this.attempts = attempts;
    this.enjoyment = enjoyment;
    this.opinion = opinion;
    this.proof = proof;
}

// EMBED FORMATS ↓↓↓
// YOUTUBE: https://youtube.com/embed/VIDEO_CODE
// MEDAL: https://medal.tv/games/geometry-dash/clip/VIDEO CODE
// STREAMABLE: https://www.streamable.com/e/VIDEO_CODE
// TWITCH: https://clips.twitch.tv/embed?clip=VIDEO_CODE&parent=robotchallengelist.github.io
// DAILYMOTION: https://geo.dailymotion.com/player.html?video=VIDEO_CODE
// RUMBLE: https://rumble.com/embed/VIDEO_CODE
// ODYSEE: https://odysee.com/$/VIDEO_CODE

let levels = [
    /*
    .########..##.....##.########..##....##
    .##.....##.##.....##.##.....##..##..##.
    .##.....##.##.....##.##.....##...####..
    .########..##.....##.########.....##...
    .##...##...##.....##.##.....##....##...
    .##....##..##.....##.##.....##....##...
    .##.....##..#######..########.....##...
    */
    new Level("Hateoul Loves Robot", 173.05, 13, "Ruby", "109877691", "Any Route", ["EatingBabies"], "EatingBabies", "https://www.youtube.com/embed/2QAIXRhKV5s", [
        new Record("EatingBabies", "24,000", "9/10", "No clue because I havent played anything else but like top 3?", "https://www.youtube.com/watch?v=2QAIXRhKV5s"),
        new Record("zis08", "51,220", "8/10", "High Ruby", "https://youtu.be/KdU6LBGNwIY?si=t5onbLjDdIPcMZT0"),
    ], false),
    new Level("Cave A Neer (zis08)", 151.7, 10, "Ruby", "131713130", "Small Skips", ["zis08"], "MMB9595", "https://youtube.com/embed/wa4zLyBFaho", [
        new Record("MMB9595", "21,086", "7.1/10", "Top 1 RCL. I Estimated (and others) it to be around low ruby tier", "https://www.youtube.com/watch?v=wa4zLyBFaho"),
        new Record("zis08", "45,381", "7/10", "156 Low Ruby", "https://youtu.be/7vp7MYNVkGk?is=xIJ1vBqrp0KjT_hn"),
        new Record("tFluffy", "9,771", "1/10", "model ruby", "https://www.youtube.com/watch?v=pHpT20btl7U"),
    ], "/nongs/Cave A Neer.mp3"),
    /*
    ..######.....###....########..########..##.....##.####.########..########
    .##....##...##.##...##.....##.##.....##.##.....##..##..##.....##.##......
    .##........##...##..##.....##.##.....##.##.....##..##..##.....##.##......
    ..######..##.....##.########..########..#########..##..########..######..
    .......##.#########.##........##........##.....##..##..##...##...##......
    .##....##.##.....##.##........##........##.....##..##..##....##..##......
    ..######..##.....##.##........##........##.....##.####.##.....##.########
    */
    new Level("Under The Door", 128.36, 29, "Sapphire", "144756481", "Small Skips", ["zis08", "D3adSpac3"], "zis08", "https://youtube.com/embed/jUTj67VonMI?si=va-6ChikFVlQryw0", [
        new Record("zis08", "34,634", "2/10", "138 Sapphire", "https://www.youtube.com/watch?v=jUTj67VonMI"),
        new Record("MMB9595", "6,149", "N/A", "High Amethyst-Baseline Sapphire", "https://www.youtube.com/watch?v=VJgeav_IPz4"),
    ], "/nongs/Under The Door, Under The Door world.mp3"),
    /*
    ....###....##.....##.########.########.##.....##.##....##..######..########
    ...##.##...###...###.##..........##....##.....##..##..##..##....##....##...
    ..##...##..####.####.##..........##....##.....##...####...##..........##...
    .##.....##.##.###.##.######......##....#########....##.....######.....##...
    .#########.##.....##.##..........##....##.....##....##..........##....##...
    .##.....##.##.....##.##..........##....##.....##....##....##....##....##...
    .##.....##.##.....##.########....##....##.....##....##.....######.....##...
    */
    new Level("Heliorobo", 121.8, 16, "Amethyst", "138007569", "Small Skips", ["XanderGMDD"], "gabimoth", "https://youtube.com/embed/tBylVjJdLeE", [
        new Record("gabimoth", "12,868", "3/10", "115 Points (Top 1)", "https://www.youtube.com/watch?v=tBylVjJdLeE"),
        new Record("ariopc", "24,603", "7.5/10", "At LEAST harder than mad prophets and oxidized", "https://medal.tv/games/geometry-dash/clips/n55LNg0PlNgEdqb9F?invite=cr-MSxrMjYsMjE3MzQ4MzIz&v=51"),
    ], false),
    new Level("ROBOTTOM", 120.25, 14, "Amethyst", "144720711", "Small Skips", ["Seedskyy73"], "Tomatokatsup", "https://youtube.com/embed/4AbpdyVfTkE", [
        new Record("Tomatokatsup", "19,015", "4/10", "top 3 probs since from what little played of the archive it felt harder than that", "https://www.youtube.com/watch?v=4AbpdyVfTkE"),
    ], false),
    new Level("Supercharged", 116.5, 21, "Amethyst", "145983576", "Any Route", ["Taublix"], "Taublix", "https://youtube.com/embed/y5zUWuNylco", [
        new Record("Taublix", "6,430", "8/10", "at least harder than Memristor in my opinion, I did get kinda unlucky tho so idk by how much", "https://www.youtube.com/watch?v=y5zUWuNylco"),
    ], false),
    new Level("The Archive", 114.63, 35, "Amethyst", "144025418", "Any Route", ["Seedskyy73"], "zis08", "https://youtube.com/embed/WMzqMTlys94", [
        new Record("zis08", "14,000", "N/A", "Top 1 (126 points)", "https://medal.tv/games/geometry-dash/clips/n2hFzXOcpzs_9raE2?invite=cr-MSx1a1gsMTY4ODkwOTU4&v=27"),
        new Record("gabimoth", "1,963", "10/10", "110 points", "https://youtu.be/_tn06sN-2MI"),
        new Record("MMB9595", "2,000", "8.8/10", "108 points", "https://www.youtube.com/watch?v=eEt_cDjWVe4"),
    ], false),
    new Level("ROBOPOLIS       ", 109.54, 12, "Amethyst", "137347848", "Any Route", ["placek3"], "placek3", "https://www.youtube.com/embed/55zSeUXG3VY", [
        new Record("placek3", "17,246", "N/A", "N/A", "https://www.youtube.com/watch?v=55zSeUXG3VY"),
        new Record("EeryTunic", "1,376", "N/A", "Top 1", ""),
        new Record("gabimoth", "9,360", "1/10", "110 points", "https://youtu.be/lxlyI8UVcHk"),
    ], false),
    new Level("Oxidized", 106.67, 29, "Amethyst", "143289102", "Verification Route", ["XanderGMDD"], "zis08", "https://medal.tv/games/geometry-dash/clip/mY6abhPwQL6w1DYyC?invite=cr-MSxxVVosMTY4ODkwOTU4&v=35", [
        new Record("zis08", "16,711", "9/10", "109 (TOP 1 🙂)", "https://medal.tv/games/geometry-dash/clips/mY6abhPwQL6w1DYyC?invite=cr-MSxxVVosMTY4ODkwOTU4&v=35"),
        new Record("gabimoth", "1,979", "9/10", "easier than Cliff Hanger", "https://youtu.be/EdvD0Q-u98o"),
        new Record("probro675", "5,184", "7/10", "Entry Amethyst 102 points (below Mad Prophets)", "https://youtu.be/q5v1FTMbo_8?is=BXihrMidR_7XhNax"),
    ], false),
    new Level("ROBOWAMBA", 104.93, 25, "Amethyst", "137515738", "Small Skips", ["XanderGMDD"], "Monkeyboy21", "https://medal.tv/games/geometry-dash/clip/mZpmBcvWAVfXTs28w?invite=cr-MSxFUkQsMTk0NjAyNjk3&v=46", [
        new Record("Monkeyboy21", "11,839", "2/10", "Top 1-2, 110 points", "https://medal.tv/games/geometry-dash/clips/mZpmBcvWAVfXTs28w?invite=cr-MSxFUkQsMTk0NjAyNjk3&v=46"),
        new Record("gabimoth", "2,900", "8/10", "Still 103 Points", "https://youtu.be/DjeUBFhtNSo"),
    ], false),
    new Level("Mad Prophets", 103.2, 15, "Amethyst", "140134987", "Any Route", ["iMintyGreen"], "EndGamer7896", "https://medal.tv/games/geometry-dash/clip/mGyEUN2HMTp9yPEph?invite=cr-MSxscmEsNTk1MDYwNDc2", [
        new Record("EndGamer7896", "13,574", "8/10", "Low Amethyst, 100-105 points", "https://medal.tv/games/geometry-dash/clips/mGyEUN2HMTp9yPEph?invite=cr-MSxscmEsNTk1MDYwNDc2"),
        new Record("Beefyikes", "4,500", "6/10", "Probably top 1", "https://youtu.be/LzfdYC6YebQ"),
        new Record("gabimoth", "4,570", "6.5/10", "104 points", "https://youtu.be/L0I2_sBApE4"),
        new Record("probro675", "15,646", "0/10", "Entry Amethyst 102 points", "https://youtu.be/wUjgn5mrFvE?is=0kGtk_ZjnAwhmXZ6"),
    ], "/nongs/Mad Prophets.mp3"),
    new Level("Cliff Hanger", 100, 22, "Amethyst", "128936112", "Verification Route", ["zis08"], "zis08", "https://medal.tv/games/geometry-dash/clip/mXrWb3qEK5HXHrUv6?invite=cr-MSxjdFIsMTY4ODkwOTU4&v=17", [
        new Record("zis08", "24,337", "8/10", "Low Amethyst Top 1 - 3", "https://medal.tv/games/geometry-dash/clips/mXrWb3qEK5HXHrUv6?invite=cr-MSxjdFIsMTY4ODkwOTU4&v=17"),
        new Record("probro675", "30,584", "3/10", "Top Platinum 97.5", "https://youtu.be/vt_udtW29sc?is=--5NaGLIWd_hMAuz"),
        new Record("RustyGD25", "10,732", "7/10", "high platinum (89 points)", "https://youtu.be/l2hqliZHM-w?si=07aLH7Jk2zRS29QH"),
        new Record("tFluffy", "4,000", "N/A", "fucking uhh flamewall idk what tiers there are", "https://www.youtube.com/watch?v=SO4rqFoSaWEGD"),
        new Record("Tomatokatsup", "10,200", "5/10", "N/A", "https://youtu.be/XZV4lCW1Dik?si=T4gfBdXsTxwAjdQF&t=13"),
        new Record("gabimoth", "5,700", "N/A", "N/A", "https://youtu.be/EdvD0Q-u98o"),
        new Record("Nuridint3b", "21,003", "N/A", "N/A", "https://youtu.be/Dn8ygPuZ1TA?is=6O_tsywkVD2sp4Ia"),
    ], "/nongs/Cliff Hanger.mp3"),

    /*
    .########..##..........###....########.####.##....##.##.....##.##.....##
    .##.....##.##.........##.##......##.....##..###...##.##.....##.###...###
    .##.....##.##........##...##.....##.....##..####..##.##.....##.####.####
    .########..##.......##.....##....##.....##..##.##.##.##.....##.##.###.##
    .##........##.......#########....##.....##..##..####.##.....##.##.....##
    .##........##.......##.....##....##.....##..##...###.##.....##.##.....##
    .##........########.##.....##....##....####.##....##..#######..##.....##
    */
    new Level("Memristor", 94.05, 3, "Platinum", "143820046", "Verification Route", ["Taublix"], "Taublix", "https://www.youtube.com/embed/W9Chybc791A", [
        new Record("Taublix", "3,251", "8.5/10", "Platinum, probably my hardest robot challenge considering everyone else has to learn the gameplay", "https://www.youtube.com/watch?v=W9Chybc791A"),
        new Record("gabimoth", "1,417", "10/10", "90 Points", "https://youtu.be/YYGUJ0vGpzc"),
    ], false),
    new Level("ImSoHungryICouldEatA", 89.08, 15, "Platinum", "143601756", "Small Skips", ["Tomatokatsup"], "Tomatokatsup", "https://www.youtube.com/embed/X8CRNrelBxQ", [
        new Record("Tomatokatsup", "10,001", "4/10", "gold-plat probs", "https://www.youtube.com/watch?v=X8CRNrelBxQ"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/9yOn65G8MAM"),
        new Record("zis08", "6,867", "3/10", "89", "https://medal.tv/games/geometry-dash/clips/n2Rp3JdLLKDrZFElU?invite=cr-MSxxa2ksMTY4ODkwOTU4&v=29"),
        new Record("ariopc", "5,212", "2/10", "N/A", "https://medal.tv/games/geometry-dash/clips/n3sXkXpFGxF627tDQ?invite=cr-MSw1QXgsMjE3MzQ4MzIz&v=38"),
        new Record("EndGamer7896", "4,230", "9/10", "81 points", "https://medal.tv/games/geometry-dash/clips/n5j8qcHTFIIj6lKek?invite=cr-MSxsZmssNTk1MDYwNDc2"),
        new Record("probro675", "4,129", "N/A", "N/A", "https://youtu.be/j6SxRgDpfkE?is=cP8JYTSVn3vIJE7y"),
    ], false),
    new Level("Headrush", 88.92, 9, "Platinum", "143152704", "Verification Route", ["ariopc"], "ariopc", "https://medal.tv/games/geometry-dash/clip/mXlMOAl0ry0Cb6cK4?invite=cr-MSxNeGQsMjE3MzQ4MzIz&v=47", [
        new Record("ariopc", "12,781", "N/A", "top 3", "https://medal.tv/games/geometry-dash/clips/mXlMOAl0ry0Cb6cK4?invite=cr-MSxNeGQsMjE3MzQ4Mz323&v=47"),
        new Record("gabimoth", "3,149", "3/10", "85 Points", "https://youtu.be/YYGUJ0vGpzc"),
    ], false),
    new Level("Power On", 87.69, 10, "Platinum", "143963818", "Small Skips", ["DaDemonator"], "DaDemonator", "https://youtube.com/embed/vJlIov5Wb8M", [
        new Record("DaDemonator", "1,000", "8/10", "Haven't beaten much but the hardest thing I can confidently say its harder than is Rubrub (high platinum tier)", "https://www.youtube.com/watch?v=vJlIov5Wb8M"),
        new Record("gabimoth", "909", "9/10", "81 Points", "https://youtu.be/fqSzmNDQiGE?si=p7wr3f2JrkerIjWJ"),
    ], false),
    new Level("Desolate Wasteland", 87.02, 14, "Platinum", "143823336", "Any Route", ["Taublix"], "Taublix", "https://www.youtube.com/embed/9YOr3MsmlAs", [
        new Record("Taublix", "3,008", "9.5/10", "Platinum, at least harder than Shardiopolis", "https://www.youtube.com/watch?v=9YOr3MsmlAs"),
        new Record("gabimoth", "2,041", "1/10", "90 Points", "https://youtu.be/QFfGLAIuU4M?si=WhrFEYNJ0bMORMUL"),
    ], false),
    new Level("Tomato Town", 87, 5, "Platinum", "129176312", "Small Skips", ["Tomatokatsup"], "Tomatokatsup", "https://www.youtube.com/embed/g11C1RL4TNM", [
        new Record("Tomatokatsup", "5,347", "4/10", "I was told plat", "https://www.youtube.com/watch?v=g11C1RL4TNM"),
        new Record("zis08", "5,000", "3/10", "90", "https://youtu.be/E7hupEM9Cn0?si=aDei_7W5gtBS0GNo"),
        new Record("probro675", "7,500", "1/10", "Mid/High Platinum 86-91 points (either 1 or 2 spots below cliff hanger)", "https://youtu.be/Pg6QI9SugJI?is=gtmT7Z_7HTcXiEcA"),
        new Record("gabimoth", "958", "N/A", "N/A", "https://youtu.be/EdvD0Q-u98o"),
    ], false),
    new Level("Double Double PLUS", 85.64, 2, "Platinum", "138089168", "Any Route", ["zis08"], "zis08", "https://medal.tv/games/geometry-dash/clip/muXjHLShWGsp-QFck?invite=cr-MSw1bHUsMTY4ODkwOTU4", [
        new Record("zis08", "7,441", "10/10", "Mid Platinum", "https://medal.tv/games/geometry-dash/clips/muXjHLShWGsp-QFck?invite=cr-MSw1bHUsMTY4ODkwOTU4"),
        new Record("XanderGMDD", "3,886", "0/10", "Really fucking hard, 80-88 points", "https://medal.tv/games/geometry-dash/clips/mOiQbAFGnTDxF9ArR?invite=cr-MSxobUssMzM2NzY3Njgx&v=23"),
        new Record("gabimoth", "1,687", "7/10", "85 Points", "https://youtu.be/6Afd5TV7HNM"),
    ], false),
    new Level("Nubily Challenge", 84.75, 9, "Platinum", "143259834", "Verification Route", ["probro675"], "probro675", "https://youtube.com/embed/qNzNxepH3AY?is=wAaO_k_RI24K0K_p", [
        new Record("probro675", "8,974", "4/10", "Mid Platinum, harder than red scapes", "https://www.youtube.com/watch?v=qNzNxepH3AY"),
        new Record("gabimoth", "9,105", "1/10", "93 Points", "https://youtu.be/QFfGLAIuU4M?si=WhrFEYNJ0bMORMUL"),
    ], false),
    new Level("Fallen Kingdom", 83, 5, "Platinum", "145655000", "Verification Route", ["RustyGD25"], "RustyGD25", "https://www.youtube.com/embed/h_-eoMCVwhE", [
        new Record("RustyGD25", "1,804", "4/10", "mid platnium", "https://www.youtube.com/watch?v=h_-eoMCVwhE"),
    ], "/nongs/Fallen Kingdom.mp3"),
    new Level("rubrub", 82.77, 22, "Platinum", "142653512", "Verification Route", ["Seedskyy73"], "sparked18", "https://youtube.com/embed/Giw-WEDddSM", [
        new Record("sparked18", "5,522", "5/10", "Top 3", "https://www.youtube.com/watch?v=Giw-WEDddSM"),
        new Record("zis08", "3,817", "5/10", "Little Harder than Shardiopolis", "https://medal.tv/games/geometry-dash/clips/mVKTeUig5nQ9Zprgh?invite=cr-MSxPeGosMTY4ODkwOTU4&v=28"),
        new Record("ariopc", "2,819", "6/10", "i forgor", "https://medal.tv/games/geometry-dash/clips/mXMh77mn3pIITD1O4?invite=cr-MSxZZXksMjE3MzQ4MzIz&v=22"),
        new Record("gabimoth", "782", "4/10", "80 Points", "https://youtu.be/YYGUJ0vGpzc"),
        new Record("Tomatokatsup", "N/A", "N/A", "N/A", "https://youtu.be/-GAuym5AMBk"),
        new Record("Taublix", "1,630", "6.5/10", "placed fine probably", "https://www.youtube.com/watch?v=tJM5IbokCJQ"),
    ], false),
    new Level("a moths demise", 82.69, 4, "Platinum", "129763851", "Small Skips", ["zis08"], "zis08", "https://www.youtube.com/embed/zH_X4Qia1nU?is=UZIbXi3r2PCuBV86", [
        new Record("zis08", "N/A", "N/A", "high plat", "https://www.youtube.com/watch?v=zH_X4Qia1nU"),
        new Record("RustyGD25", "1,764", "2.5/10", "79 points", "https://www.youtube.com/watch?v=PfHm2yE6Y5k"),
        new Record("Tomatokatsup", "N/A", "N/A", "N/A", "https://www.youtube.com/watch?v=XZV4lCW1Dik&t=715s"),
        new Record("probro675", "3,602", "N/A", "N/A", "https://youtu.be/j6SxRgDpfkE?is=cP8JYTSVn3vIJE7y"),
        new Record("EndGamer7896", "3,568", "7.5/10", "80.77 points", "https://medal.tv/games/geometry-dash/clips/nq3iB1pTIOzFI6wEb?invite=cr-MSx3clgsNTk1MDYwNDc2"),
    ], false),
    new Level("Robots in the Skies", 82.01, 32, "Platinum", "146195715", "Verification Route", ["LightShadow5"], "LightShadow5", "https://www.youtube.com/embed/9Y6Tflsh5M0?is=fqQ0dXRTwQoGAVt3", [
        new Record("LightShadow5", "1,387", "8.75/10", "Platinum, within 4 spots easier than Bot to the Bone", "https://www.youtube.com/watch?v=9Y6Tflsh5M0"),
        new Record("Taublix", "1,211", "9.5/10", "80 points", "https://www.youtube.com/watch?v=P8_4NO38Uo4"),
        new Record("Nuridint3b", "1,401", "10/10", "N/A", "https://youtu.be/QEHY17LUkk8?is=MFILhSsi4ooy8MQN"),
        new Record("probro675", "1,391", "N/A", "N/A", "https://youtu.be/j6SxRgDpfkE?is=cP8JYTSVn3vIJE7y"),
    ], false),
    new Level("Gibberlink", 81.99, 6, "Platinum", "144891574", "Verification Route", ["ariopc"], "RustyGD25", "https://www.youtube.com/embed/M26oro2_fMk", [
        new Record("RustyGD25", "3,891", "2/10", "Top 6-10", "https://www.youtube.com/watch?v=M26oro2_fMk"),
    ], false),
    new Level("Bad ChristmasPresead", 81.5, 10, "Platinum", "145305927", "Verification Route", ["Tomatokatsup"], "RustyGD25", "https://www.youtube.com/embed/cJ8no-s_bk4", [
        new Record("RustyGD25", "1,744", "4/10", "81 points", "https://www.youtube.com/watch?v=cJ8no-s_bk4"),
        new Record("zis08", "N/A", "2/10", "80", "https://medal.tv/games/geometry-dash/clips/m6OL9TrFIUrCrN38P?invite=cr-MSxYUUwsMTY4ODkwOTU4&v=60"),
        new Record("Tomatokatsup", "N/A", "N/A", "N/A", "https://www.youtube.com/watch?v=OrOzKE4jgP4"),
        new Record("probro675", "6,296", "N/A", "N/A", "https://youtu.be/j6SxRgDpfkE?is=cP8JYTSVn3vIJE7y"),
    ], false),
    new Level("guts", 80.46, 33, "Platinum", "145722333", "Verification Route", ["windboss07"], "RustyGD25", "https://www.youtube.com/embed/wjs654NVHNo", [
        new Record("RustyGD25", "1,306", "0/10", "Top 20-25", "https://www.youtube.com/watch?v=wjs654NVHNo"),
    ], false),
    new Level("gief", 80.19, 14, "Platinum", "144180308", "Verification Route", ["ariopc"], "ariopc", "https://medal.tv/games/geometry-dash/clip/n3bVSFP2cZgPfL14a?invite=cr-MSxPcEQsMjE3MzQ4MzIz&v=58", [
        new Record("ariopc", "4,194", "N/A", "This is NO DOUBT my new second hardest, 85 list points maybe", "https://medal.tv/games/geometry-dash/clips/n3bVSFP2cZgPfL14a?invite=cr-MSxPcEQsMjE3MzQ4MzIz&v=58"),
        new Record("gabimoth", "448", "4/10", "65 Points", "https://youtu.be/9gaiNP4aZnw"),
        new Record("Taublix", "930", "8.5/10", "fine i guess idk", "https://www.youtube.com/watch?v=3mjx3TlQCnU"),
        new Record("probro675", "3,176", "N/A", "N/A", "https://youtu.be/j6SxRgDpfkE?is=cP8JYTSVn3vIJE7y"),
    ], false),
    new Level("WELL AGAIN", 80.04, 36, "Platinum", "143964878", "Small Skips", ["gabimoth"], "gabimoth", "https://youtube.com/embed/FGKiEcS9gBo", [
        new Record("gabimoth", "405", "9/10", "Low Platinum (80 points)", "https://www.youtube.com/watch?v=FGKiEcS9gBo"),
        new Record("probro675", "664", "10/10", "Low Platinum 80 points", "https://youtu.be/APXYa0_LM6Q?is=Q4fH4uwVX1dS1O8N"),
        new Record("zis08", "2,984", "10/10", "85", "https://medal.tv/games/geometry-dash/clips/n2fPs57MFb5Zjp2Cl?invite=cr-MSxlUk8sMTY4ODkwOTU4&v=19"),
        new Record("ariopc", "1,240", "9.5/10", "N/A", "https://medal.tv/games/geometry-dash/clips/n2lAWUpB1fcB3Sm_z?invite=cr-MSxEQ2ssMjE3MzQ4MzIz&v=24"),
        new Record("Tomatokatsup", "N/A", "N/A", "N/A", "https://youtu.be/-GAuym5AMBk"),
        new Record("Taublix", "1,223", "9/10", "Placed fine aka harder than Shardiopolis easier than rubrub", "https://www.youtube.com/watch?v=OMSDSr_4ouI"),
        new Record("RustyGD25", "1,606", "1.5/10", "mid plat", "https://youtu.be/RAefoEnAQoc"),
        new Record("tFluffy", "338", "5.5/10", "N/A", "https://youtu.be/ndS9kSZUOlg"),
        new Record("Nuridint3b", "1,920", "3/10", "N/A", "https://youtu.be/s3_nS3lkHRg?is=n9VDiyZ-_rfzZFE7"),
    ], false),
    new Level("Robotic Exurtion", 77.7, 6, "Platinum", "144036114", "Verification Route", ["XanderGMDD"], "ariopc", "https://medal.tv/games/geometry-dash/clip/n2nMbV60hbspRHfKP?invite=cr-MSwyRUEsMjE3MzQ4MzIz&v=55", [
        new Record("ariopc", "2,918", "0/10", "80 list points, i consider this my current 2nd hardest but i feel like im overrating it", "https://medal.tv/games/geometry-dash/clips/n2nMbV60hbspRHfKP?invite=cr-MSwyRUEsMjE3MzQ4MzIz&v=55"),
        new Record("zis08", "1,647", "7/10", "78.", "https://medal.tv/games/geometry-dash/clips/n3w23NtcIIWDcBqn7?invite=cr-MSxBdnAsMTY4ODkwOTU4"),
        new Record("gabimoth", "1,449", "5/10", "82 Points", "https://youtu.be/6Afd5TV7HNM"),
        new Record("EndGamer7896", "4,127", "5/10", "78 points", "https://medal.tv/games/geometry-dash/clips/n6wnYlKqHkl3aLbD8?invite=cr-MSxsb3ksNTk1MDYwNDc2"),
        new Record("probro675", "3,740", "N/A", "N/A", "https://youtu.be/j6SxRgDpfkE?is=cP8JYTSVn3vIJE7y"),
    ], "/nongs/Robotic Exurtion, Staticism.mp3"),
    new Level("Jane 2 and Surge III", 77.33, 2, "Platinum", "144297733", "Verification Route", ["zis08", "Tomatokatsup", "XanderGMDD"], "zis08", "https://medal.tv/games/geometry-dash/clip/n3RjtTCSnRpcFSSKd?invite=cr-MSxIRVMsMTY4ODkwOTU4", [
        new Record("zis08", "6,745", "10/10", "90", "https://medal.tv/games/geometry-dash/clips/n3RjtTCSnRpcFSSKd?invite=cr-MSxIRVMsMTY4ODkwOTU4"),
        new Record("gabimoth", "722", "5/10", "65 Points", "https://youtu.be/6Afd5TV7HNM"),
        new Record("EndGamer7896", "3,685", "5/10", "77.5 points", "https://medal.tv/games/geometry-dash/clips/n4P90eMaxr3AMoAMM?invite=cr-MSxneWwsNTk1MDYwNDc2"),
    ], "/nongs/Jane, Jane 2 and Surge III.mp3"),
    new Level("Ts Might Be Slop", 77.23, 8, "Platinum", "146645299", "Verification Route", ["RustyGD25"], "RustyGD25", "https://www.youtube.com/embed/N0Vvq-Rxsx8", [
        new Record("RustyGD25", "1,609", "7.5/10", "65-75 points", "https://www.youtube.com/watch?v=N0Vvq-Rxsx8"),
    ], "/nongs/Ts Might Be Slop.mp3"),
    new Level("the golden shart", 77.19, 12, "Platinum", "145246413", "Small Skips", ["windboss07"], "zis08", "https://medal.tv/games/geometry-dash/clip/n9qaCXYHfEnXi4nJE?invite=cr-MSxBMUksMTY4ODkwOTU4", [
        new Record("zis08", "1,001", "10/10", "idk", "https://medal.tv/games/geometry-dash/clips/n9qaCXYHfEnXi4nJE?invite=cr-MSxBMUksMTY4ODkwOTU4"),
        new Record("probro675", "5,213", "N/A", "N/A", "https://youtu.be/j6SxRgDpfkE?is=cP8JYTSVn3vIJE7y"),
    ], false),
    new Level("shark bait hoo haha", 77.14, 4, "Platinum", "130701238", "Small Skips", ["Tomatokatsup"], "Tomatokatsup", "https://www.youtube.com/embed/HC6nlj_bUQo", [
        new Record("Tomatokatsup", "N/A", "5/10", "defo plat", "https://www.youtube.com/watch?v=HC6nlj_bUQo"),
    ], false),
    new Level("Bot to the Bone", 76.84, 15, "Platinum", "145287208", "Verification Route", ["LightShadow5"], "LightShadow5", "https://youtube.com/embed/ufmfXTWXiPc?is=M09RPu6Q5_fLQUQb", [
        new Record("LightShadow5", "1,736", "8/10", "Definitely Platinum, I was very wrong about it being Gold", "https://www.youtube.com/watch?v=ufmfXTWXiPc"),
        new Record("Taublix", "677", "10/10", "N/A", "https://www.youtube.com/watch?v=AWI8zEUSZ5A"),
        new Record("Nuridint3b", "1,242", "9/10", "N/A", "https://youtu.be/8ynlaNhuRzY?is=pkb-IcXIrt5o55FV"),
        new Record("probro675", "1,177", "N/A", "N/A", "https://youtu.be/j6SxRgDpfkE?is=cP8JYTSVn3vIJE7y"),
    ], false),
    new Level("Shardiopolis", 76.7, 22, "Platinum", "139167165", "Small Skips", ["probro675"], "probro675", "https://youtube.com/embed/S2B2JVEOxbQ?si=0hlf-vQHAkxh612i", [
        new Record("probro675", "1,800", "8/10", "76.5", "https://youtu.be/S2B2JVEOxbQ?si=0hlf-vQHAkxh612i"),
        new Record("XanderGMDD", "2,846", "7/10", "70-79 points", "https://medal.tv/games/geometry-dash/clips/mOprL3M5LuNCEpfwV?invite=cr-MSwxdzksMzM2NzY3Njgx"),
        new Record("zis08", "1,500", "9/10", "High Gold", "https://medal.tv/games/geometry-dash/clips/mPuMMCtSDT99NBHgY?invite=cr-MSxEY0UsMTY4ODkwOTU4&v=16"),
        new Record("ariopc", "5,750", "7.5/10", "Exactly right", "https://medal.tv/games/geometry-dash/clips/mSINX6pz870cHYqAf?invite=cr-MSxUZHUsMjE3MzQ4MzIz"),
        new Record("Taublix", "2,091", "7.5/10", "It's my hardest on the list for sure", "https://www.youtube.com/watch?v=ya2wq8Z4LPc"),
        new Record("gabimoth", "780", "7/10", "N/A", "https://youtu.be/9gaiNP4aZnw"),
    ], false),
    new Level("Clownparty", 75.13, 19, "Platinum", "146575586", "Small Skips", ["probro675"], "probro675", "https://www.youtube.com/embed/eFO4fpLLO9E?is=mtcfMEjlX61-kzV3", [
        new Record("probro675", "1,194", "9/10", "High Gold - Entry Platinum (very hard to say cause i verified in 10 attempts as a fluke from 29% LMAO)", "https://www.youtube.com/watch?v=eFO4fpLLO9E?is=mtcfMEjlX61-kzV3"),
        new Record("Taublix", "944", "9.5/10", "73 points", "https://www.youtube.com/watch?v=CQ2FO2qBxa8"),
        new Record("RustyGD25", "1,462", "2/10", "77 points", "https://www.youtube.com/watch?v=bdCigmwnPd0"),
        new Record("Nuridint3b", "3,194", "10/10", "N/A", "https://youtu.be/2xg-5P6kG3s?is=rU08VK3VAui-OnP1"),
        new Record("EndGamer7896", "2,042", "10/10", "76.64 points", "https://medal.tv/games/geometry-dash/clips/nsE5B5ybxB34vSuqe?invite=cr-MSxDTXYsNTk1MDYwNDc2"),
    ], false),
    new Level("The Platinum Pit RCL", 75, 23, "Platinum", "143539238", "Verification Route", ["probro675"], "probro675", "https://www.youtube.com/embed/wqFJSQUThVM?is=Z1DFmMp4TIm-_f6n", [
        new Record("probro675", "1,272", "8.5/10", "Entry Platinum, 75.3 points", "https://www.youtube.com/watch?v=wqFJSQUThVM?is=Z1DFmMp4TIm-_f6n"),
        new Record("Taublix", "720", "9/10", "Still not platinum imo, easier than Heartbot, harder than Cherry Blossoms", "https://www.youtube.com/watch?v=KZFADPmvCQk"),
        new Record("gabimoth", "161", "9/10", "N/A", "https://youtu.be/EdvD0Q-u98o"),
        new Record("Tomatokatsup", "N/A", "N/A", "N/A", "https://youtu.be/-GAuym5AMBk"),
        new Record("TheUnoKing9", "4,008", "5/10", "Definitely Platinum", "https://youtu.be/PQk0du_fRas"),
        new Record("ariopc", "1,113", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/n4JzTyah5Xlvf7TMX?invite=cr-MSxPNUwsMjE3MzQ4MzIz"),
        new Record("EndGamer7896", "3,670", "7/10", "Model Platinum, 75 points", "https://medal.tv/games/geometry-dash/clips/n6vmlVOXwYJKlSR1_?invite=cr-MSx6eWEsNTk1MDYwNDc2"),
        new Record("Nuridint3b", "1,969", "N/A", "N/A", "https://youtu.be/aeTaSExWXm4?is=SSXwL_UZlSh_SeV5"),
        new Record("LightShadow5", "1,516", "8.7/10", "N/A", "https://youtu.be/hPYeHfrNjzw?is=Mte1rinLicsZrIjg"),
        new Record("RustyGD25", "616", "4.5/10", "high gold", "https://youtu.be/RAefoEnAQoc"),
    ], false),

    /*
    ..######....#######..##.......########.
    .##....##..##.....##.##.......##.....##
    .##........##.....##.##.......##.....##
    .##...####.##.....##.##.......##.....##
    .##....##..##.....##.##.......##.....##
    .##....##..##.....##.##.......##.....##
    ..######....#######..########.########.
    */
    new Level("The Garden", 74.6, 29, "Gold", "144013653", "Small Skips", ["windboss07"], "gabimoth", "https://youtube.com/embed/7uGwJAl5-Hw", [
        new Record("gabimoth", "584", "8.5/10", "65 Points", "https://www.youtube.com/watch?v=7uGwJAl5-Hw"),
        new Record("Tomatokatsup", "N/A", "N/A", "N/A", "https://youtu.be/-GAuym5AMBk"),
        new Record("zis08", "2,372", "2/10", "i said", "https://medal.tv/games/geometry-dash/clips/n4QyF7opH4ZKKAfqw?invite=cr-MSxwaFUsMTY4ODkwOTU4"),
        new Record("Taublix", "1,061", "9/10", "76 points", "https://www.youtube.com/watch?v=bNoHVUg8qZs"),
        new Record("probro675", "2,141", "N/A", "N/A", "https://youtu.be/j6SxRgDpfkE?is=cP8JYTSVn3vIJE7y"),
    ], false),
    new Level("red scapes", 74.51, 25, "Gold", "142592451", "Small Skips", ["VerdantXD"], "RhiliXZ27", "https://youtube.com/embed/Lwg1J_PJ1wg?si=3bISZIBTNfDJLef0", [
        new Record("RhiliXZ27", "449", "N/A", "#4", "https://www.youtube.com/watch?v=Lwg1J_PJ1wg"),
        new Record("Komically", "1,024", "6/10", "4-5, definitely platinum", "https://youtu.be/GzcOzl152z4"),
        new Record("ariopc", "2,437", "3/10", "Tied with Shardiopolis for me", "https://medal.tv/games/geometry-dash/clips/mVdMCOV17tJ7HaIGP?invite=cr-MSx2V3YsMjE3MzQ4MzIz&v=17"),
        new Record("sparked18", "687", "9/10", "7-9", "https://youtu.be/3MQC8_gumYc"),
        new Record("probro675", "1,292", "0/10", "Entry Platinum (78 points)", "https://youtu.be/R59zp66u740?is=p3HHzywcgUmgE4Tf"),
        new Record("zis08", "2,733", "1/10", "Same diff as RubRub", "https://medal.tv/games/geometry-dash/clips/mVN7u7PRKHZHLZXIK?invite=cr-MSw1S2ssMTY4ODkwOTU4"),
        new Record("EndGamer7896", "3,715", "7/10", "Harder than Shardiopolis", "https://medal.tv/games/geometry-dash/clips/mUML4fjP1mUdbbISx?invite=cr-MSxldXUsNTk1MDYwNDc2"),
        new Record("NatanGMDD", "1500", "8/10", "80 list points", "https://youtu.be/Ia_IgcYkvxc"),
        new Record("Monkeyboy21", "1,467", "7/10", "low plat/79 points", "https://medal.tv/games/geometry-dash/clips/mZIsfmwzmDa88Kqzr?invite=cr-MSxlU1gsMTk0NjAyNjk3&v=21"),
        new Record("gabimoth", "399", "6/10", "75 Points", "https://youtu.be/YYGUJ0vGpzc"),
        new Record("Tomatokatsup", "N/A", "N/A", "N/A", "https://youtu.be/-GAuym5AMBk"),
        new Record("Taublix", "990", "4/10", "placed fine i think", "https://www.youtube.com/watch?v=5wdztXrpNfE"),
    ], false),
    new Level("Canyon", 74.44, 12, "Gold", "147756782", "Small Skips", ["Taublix"], "Taublix", "https://youtube.com/embed/kciWtmhKo78", [
        new Record("Taublix", "1,056", "7/10", "very high gold (like 74 points)", "https://www.youtube.com/watch?v=kciWtmhKo78"),
    ], false),
    new Level("frozen night", 73.72, 31, "Gold", "145640569", "Small Skips", ["windboss07"], "RustyGD25", "https://www.youtube.com/embed/Ag_qHeDMKN8", [
        new Record("RustyGD25", "756", "4/10", "Top 25-28", "https://www.youtube.com/watch?v=Ag_qHeDMKN8"),
        new Record("Taublix", "597", "9.5/10", "68 points", "https://www.youtube.com/watch?v=CZllVxaVtLc"),
        new Record("probro675", "2,085", "N/A", "N/A", "https://youtu.be/j6SxRgDpfkE?is=cP8JYTSVn3vIJE7y"),
    ], false),
    new Level("On The Cliffs edge", 73.41, 25, "Gold", "143825635", "Any Route", ["zis08", "windboss07"], "Tomatokatsup", "https://youtube.com/embed/usj8jDF53Qc", [
        new Record("Tomatokatsup", "2,725", "4/10", "somewhere idk, probs plat", "https://www.youtube.com/watch?v=usj8jDF53Qc"),
        new Record("zis08", "1,000", "8/10", "67 points", "https://youtu.be/MQdkvdPwKE0?si=a9qYx73c9Zc2CO70"),
        new Record("probro675", "N/A", "2/10", "High/Top Gold", "https://medal.tv/games/geometry-dash/clips/mlL8JMSAb8QAxnAD_?invite=cr-MSx1eUgsNjczMTM1ODY3"),
        new Record("gabimoth", "1,288", "N/A", "76 points", "https://youtu.be/tDR99yeCOPU"),
        new Record("EndGamer7896", "4,438", "0/10", "75 list points", "https://medal.tv/games/geometry-dash/clips/n1SgvRdyswkwLcsuG?invite=cr-MSw3cGUsNTk1MDYwNDc2"),
        new Record("Taublix", "1,210", "6.5/10", "Harder than WELL AGAIN, easier than rubrub", "https://www.youtube.com/watch?v=o7NpHsPXLx0"),
        new Record("Nuridint3b", "7,602", "N/A", "N/A", "https://www.youtube.com/watch?v=3-zYqGXuAyM"),
    ], "/nongs/On The Cliffs edge.mp3"),
    new Level("SUGAR TRIP", 72.05, 14, "Gold", "137410249", "Any Route", ["XanderGMDD"], "XanderGMDD", "https://medal.tv/games/geometry-dash/clip/mrFHRKVURma6Jkca6?invite=cr-MSxJbkQsNTkwMDQ5Mzc3", [
        new Record("XanderGMDD", "1,590", "N/A", "66-72 points", "https://medal.tv/games/geometry-dash/clips/mrFHRKVURma6Jkca6?invite=cr-MSxJbkQsNTkwMDQ5Mzc3"),
        new Record("placek3", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mrOKUSX4fdNvnBjYb?invite=cr-MSxJSHMsNTk0ODYzMTcx&v=22"),
        new Record("Farlayy", "N/A", "N/A", "N/A", ""),
        new Record("EndGamer7896", "N/A", "N/A", "74 points", "https://youtu.be/lXRG1Xt0irs"),
        new Record("Taublix", "1,127", "7/10", "Prolly accurate", "https://www.youtube.com/watch?v=ca4v2M-Apk0"),
        new Record("probro675", "1,451", "8/10", "High/Top Gold", "https://youtu.be/M0dNkeqW3aE?is=Zd__uxpKoRl0YDEK"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/hg-Bo5igsL4"),
    ], false),
    new Level("Heartbot", 71.54, 21, "Gold", "142716543", "Any Route", ["Taublix"], "Taublix", "https://www.youtube.com/embed/PUgQFNbDMUI", [
        new Record("Taublix", "1,702", "6.5/10", "Harder than anything else I've beaten", "https://www.youtube.com/watch?v=PUgQFNbDMUI"),
        new Record("probro675", "2,131", "4/10", "Top Gold, maybe even entry platinum", "https://youtu.be/gwMMNQEKUa4?is=xqQEwY_A0NjQDfb5"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/hg-Bo5igsL4"),
    ], false),
    new Level("LULL", 71.14, 14, "Gold", "145244417", "Small Skips", ["zis08"], "zis08", "https://medal.tv/games/geometry-dash/clip/n9oXJ8qMja9xjS7XS?invite=cr-MSxsQlYsMTY4ODkwOTU4", [
        new Record("zis08", "1,000", "10/10", "idk", "https://medal.tv/games/geometry-dash/clips/n9oXJ8qMja9xjS7XS?invite=cr-MSxsQlYsMTY4ODkwOTU4"),
        new Record("Taublix", "703", "4/10", "fine where it is (69 points)", "https://www.youtube.com/watch?v=9D0N35mIpMM"),
        new Record("RustyGD25", "797", "6.5/10", "65 points", "https://www.youtube.com/watch?v=PfHm2yE6Y5k"),
        new Record("probro675", "1,716", "N/A", "N/A", "https://youtu.be/j6SxRgDpfkE?is=cP8JYTSVn3vIJE7y"),
    ], false),
    new Level("Window", 70.64, 10, "Gold", "141886598", "Small Skips", ["Sp4c3m0nk3y"], "EndGamer7896", "https://medal.tv/games/geometry-dash/clip/mY4s0vno1TRa_Td68?invite=cr-MSx0Mm0sNTk1MDYwNDc22", [
        new Record("EndGamer7896", "2,200", "7/10", "71 points", "https://medal.tv/games/geometry-dash/clips/mQtF9s3Ac_Dp5_bqL?invite=cr-MSw5MmUsNTk1MDYwNDc2"),
        new Record("ariopc", "1,500", "4.5/10", "68 points", "https://medal.tv/games/geometry-dash/clips/mTHCKch8GXJeiZCct?invite=cr-MSx3ZmQsMjE3MzQ4MzIz&v=33"),
        new Record("Taublix", "1,035", "8/10", "harder than Cherry Blossoms, easier than Heartbot", "https://www.youtube.com/watch?v=xX6-8C07hAk"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/hg-Bo5igsL4"),
        new Record("probro675", "1,517", "N/A", "N/A", "https://youtu.be/j6SxRgDpfkE?is=cP8JYTSVn3vIJE7y"),
    ], false),
    new Level("the golden pism", 69.95, 4, "Gold", "145304833", "Small Skips", ["RustyGD25"], "zis08", "https://medal.tv/games/geometry-dash/clip/n9KKsMSBxi6Y8isjI?invite=cr-MSw0Zm0sMTY4ODkwOTU4", [
        new Record("zis08", "1,100", "10/10", "idk", "https://medal.tv/games/geometry-dash/clips/n9KKsMSBxi6Y8isjI?invite=cr-MSw0Zm0sMTY4ODkwOTU4"),
        new Record("probro675", "1,699", "N/A", "N/A", "https://youtu.be/j6SxRgDpfkE?is=cP8JYTSVn3vIJE7y"),
    ], "/nongs/the golden pism.mp3"),
    new Level("Redemption rebirth", 69.43, 14, "Gold", "137617507", "Any Route", ["Komically", "sourceerrortxt"], "zeroskills", "https://www.youtube.com/embed/Loe1H_IsImQ", [
        new Record("zeroskills", "N/A", "N/A", "Easier than SLOWDOWN", "https://youtu.be/Loe1H_IsImQ"),
        new Record("EndGamer7896", "2,867", "7/10", "72 points", "https://medal.tv/games/geometry-dash/clips/mud8uQC9RJAAsVtzq?invite=cr-MSw0N2EsNTk1MDYwNDc2"),
        new Record("probro675", "1,886", "3/10", "Fine", "https://youtu.be/IklVAguvsGg?is=KRd05L7XY1VqOAmP"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/hg-Bo5igsL4"),
    ], false),
    new Level("Startide", 68.96, 18, "Gold", "143002445", "Any Route", ["Taublix"], "Taublix", "https://www.youtube.com/embed/2hS4noiyM3I", [
        new Record("Taublix", "1,347", "9/10", "Harder than crystal castle, easier than Cherry Blossoms", "https://www.youtube.com/watch?v=2hS4noiyM3I"),
        new Record("probro675", "3,409", "0/10", "Entry Platinum 77 points", "https://youtu.be/Yhqv5IJy0XU?is=_ZeRnBpERAm9sCSU"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/9gaiNP4aZnw"),
    ], false),
    new Level("Thinking straight", 66.95, 8, "Gold", "143491148", "Verification Route", ["Filevory0"], "Aimbotish", "https://youtube.com/embed/zHsZp-JO1jw", [
        new Record("Aimbotish", "1,327", "3/10", "somewhere in gold probably", "https://www.youtube.com/watch?v=zHsZp-JO1jw"),
        new Record("Taublix", "771", "2/10", "harder than Window, easier than SUGAR TRIP", "https://www.youtube.com/watch?v=xS2y9GUvGYE"),
        new Record("gabimoth", "1,284", "N/A", "80 Points", "https://youtu.be/9gaiNP4aZnw"),
        new Record("Tomatokatsup", "N/A", "N/A", "N/A", "https://youtu.be/-GAuym5AMBk"),
    ], false),
    new Level("stolas", 66.3, 7, "Gold", "145322820", "Verification Route", ["RustyGD25"], "RustyGD25", "https://www.youtube.com/embed/gpXVlKdPxI0", [
        new Record("RustyGD25", "499", "7/10", "55 points", "https://www.youtube.com/watch?v=gpXVlKdPxI0"),
        new Record("Taublix", "749", "7/10", "70 points", "https://www.youtube.com/watch?v=Vbk5rGHOG6g"),
        new Record("EndGamer7896", "2,283", "7.5/10", "74.5 points", "https://medal.tv/games/geometry-dash/clips/ndvTzrfzyird120-b?invite=cr-MSxnckUsNTk1MDYwNDc2"),
        new Record("probro675", "962", "N/A", "N/A", "https://youtu.be/j6SxRgDpfkE?is=cP8JYTSVn3vIJE7y"),
    ], "/nongs/stolas.mp3"),
    new Level("Cherry Blossoms", 65.94, 15, "Gold", "142557887", "Any Route", ["Taublix"], "Taublix", "https://www.youtube.com/embed/Ivr3wYNAHXE", [
        new Record("Taublix", "620", "7/10", "Low gold, around crystal castle difficulty", "https://www.youtube.com/watch?v=Ivr3wYNAHXE"),
        new Record("ariopc", "961", "7.5/10", "Mid-High Gold", "https://medal.tv/games/geometry-dash/clips/mUvKZfL9QaCDDI2ro?invite=cr-MSxnTEosMjE3MzQ4MzIz&v=31"),
        new Record("sparked18", "1,829", "8/10", "idt i've played enough levels to give an opinion", "https://youtu.be/-mrARiGd2HM"),
        new Record("EndGamer7896", "2,241", "7/10", "Genuinely perfect placement lowk", "https://medal.tv/games/geometry-dash/clips/mYk0XAsAN8J9228RP?invite=cr-MSwzeW8sNTk1MDYwNDc2"),
        new Record("probro675", "1,223", "6/10", "Fine where it is", "https://youtu.be/9anaiHohlcw?is=YYIL-vNZSm-YEV85"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/hg-Bo5igsL4"),
    ], false),
    new Level("Surge II", 65.7, 15, "Gold", "143248824", "Verification Route", ["Seedskyy73"], "Komically", "https://youtube.com/embed/wRxhzL555BY", [
        new Record("Komically", "1,826", "2/10", "Mid-High Gold", "https://www.youtube.com/watch?v=wRxhzL555BY"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/hg-Bo5igsL4"),
        new Record("ariopc", "999", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/n52sNsUzgWk98YRT1?invite=cr-MSxtWjgsMjE3MzQ4MzIz"),
        new Record("probro675", "1,614", "N/A", "N/A", "https://youtu.be/j6SxRgDpfkE?is=cP8JYTSVn3vIJE7y"),
    ], "/nongs/Surge II.mp3"),
    new Level("Over the Mountains", 65.51, 11, "Gold", "147772310", "Small Skips", ["Taublix"], "Taublix", "https://youtube.com/embed/3B7-lCHv6Xk", [
        new Record("Taublix", "712", "8.5/10", "66 points", "https://www.youtube.com/watch?v=3B7-lCHv6Xk"),
    ], false),
    new Level("komicaly never clear", 64.8, 1, "Gold", "141205747", "Small Skips", ["xpfinker812"], "Komically", "https://youtube.com/embed/15xmE_RUPaI", [
        new Record("Komically", "2,204", "0/10", "71 points", "https://www.youtube.com/watch?v=15xmE_RUPaI"),
        new Record("ariopc", "452", "2/10", "Low-Mid Gold", "https://medal.tv/games/geometry-dash/clips/mTWewLxLfZ-kg-EGF?invite=cr-MSxJbnEsMjE3MzQ4MzIz&v=30"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/9gaiNP4aZnw"),
    ], false),
    new Level("dark something", 63.11, 4, "Gold", "142129059", "Small Skips", ["ariopc"], "ariopc", "https://medal.tv/games/geometry-dash/clip/mRFwHQfU8bTIjs4VS?invite=cr-MSxTcmIsMjE3MzQ4MzIz&v=63", [
        new Record("ariopc", "2,002", "5.5/10", "Gold tier maybe", "https://medal.tv/games/geometry-dash/clips/mRFwHQfU8bTIjs4VS?invite=cr-MSxTcmIsMjE3MzQ4MzIz&v=63"),
        new Record("EndGamer7896", "3,021", "4/10", "64 points", "https://medal.tv/games/geometry-dash/clips/mQJy48e0skT2ct10A?invite=cr-MSxueGcsNTk1MDYwNDc2"),
        new Record("Taublix", "469", "8.5/10", "it's good where it is rn", "https://www.youtube.com/watch?v=T12vckAjHO4"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/hg-Bo5igsL4"),
        new Record("probro675", "1,672", "N/A", "N/A", "https://youtu.be/heXSEx_DIAM?is=1HYeEdCsIDWlkrR7"),
        new Record("Nuridint3b", "114", "N/A", "N/A", "https://youtu.be/9pSLvEGbn7Y?is=RjVy1MaMnM-hBvzh"),
    ], false),
    new Level("Matrix", 62.83, 14, "Gold", "142843519", "Verification Route", ["Seedskyy73"], "zis08", "https://medal.tv/games/geometry-dash/clip/mWWehO7YIJefuBhu8?invite=cr-MSxlWmgsMTY4ODkwOTU4", [
        new Record("zis08", "1,359", "8/10", "Low gold like VSR Diff", "https://medal.tv/games/geometry-dash/clips/mWWehO7YIJefuBhu8?invite=cr-MSxlWmgsMTY4ODkwOTU4"),
        new Record("EndGamer7896", "3,065", "5/10", "60 points", "https://medal.tv/games/geometry-dash/clips/mYYG5mA3jGriGNZJ8?invite=cr-MSxpNzcsNTk1MDYwNDc2"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/hg-Bo5igsL4"),
        new Record("probro675", "779", "N/A", "N/A", "https://youtu.be/j6SxRgDpfkE?is=cP8JYTSVn3vIJE7y"),
    ], "/nongs/Matrix.mp3"),
    new Level("Necrobot", 62.42, 16, "Gold", "143088384", "Verification Route", ["Seedskyy73"], "Seedskyy73", "https://medal.tv/games/geometry-dash/clip/mX2dREVUfIZYaAVxj?invite=cr-MSxkMnUsNTI1NzU2MjU4", [
        new Record("Seedskyy73", "637", "N/A", "idk high gold-platinum or sum", "https://medal.tv/games/geometry-dash/clips/mX2dREVUfIZYaAVxj?invite=cr-MSxkMnUsNTI1NzU2MjU8"),
        new Record("EndGamer7896", "1,221", "9.5/10", "61-64 points", "https://medal.tv/games/geometry-dash/clips/mX3z1x5SRkK1r6KPs?invite=cr-MSxtZTUsNTk1MDYwNDc2"),
        new Record("Taublix", "253", "9.5/10", "easier than SLOWDOWN harder than is life worth living", "https://www.youtube.com/watch?v=ykZOYhxY0zE"),
        new Record("ariopc", "771", "9/10", "N/A", "https://medal.tv/games/geometry-dash/clips/n1P7TYJ2jTTx7oyIQ?invite=cr-MSxXV0EsMjE3MzQ4MzIz&v=21"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/hg-Bo5igsL4"),
        new Record("RustyGD25", "492", "4/10", "60 points", "https://www.youtube.com/watch?v=bdCigmwnPd0"),
        new Record("probro675", "936", "N/A", "N/A", "https://youtu.be/j6SxRgDpfkE?is=cP8JYTSVn3vIJE7y"),
    ], false),
    new Level("crystal castle", 62.15, 12, "Gold", "142272601", "Verification Route", ["ariopc"], "ariopc", "https://medal.tv/games/geometry-dash/clip/mSoPKyf6csJswSZL8?invite=cr-MSxUMVksMjE3MzQ4MzIz&v=51", [
        new Record("ariopc", "2,376", "8/10", "Mid Gold", "https://medal.tv/games/geometry-dash/clips/mSoPKyf6csJswSZL8?invite=cr-MSxUMVksMjE3MzQ4Mz323&v=51"),
        new Record("EndGamer7896", "1,664", "5/10", "63 points", "https://medal.tv/games/geometry-dash/clips/mSNpxHGBD1nJw8v8R?invite=cr-MSxjcWEsNTk1MDYwNDc2"),
        new Record("Taublix", "976", "8/10", "Probably accurate", "https://www.youtube.com/watch?v=j2Rke-E7MtE"),
        new Record("probro675", "983", "5.5/10", "Mid Gold 61 points", "https://youtu.be/Ge0j9wapw-c?is=sXZDGQHuX8-_HjVb"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/hg-Bo5igsL4"),
    ], false),
    new Level("folded tickling", 62.13, 8, "Gold", "136729287", "Verification Route", ["RustyGD25"], "RustyGD25", "https://www.youtube.com/embed/edmD8_ahlnQ", [
        new Record("RustyGD25", "1,332", "6.9/10", "like mid silver", "https://www.youtube.com/watch?v=edmD8_ahlnQ"),
        new Record("Taublix", "415", "7/10", "harder than VSR, easier than SLOWDOWN", "https://www.youtube.com/watch?v=QOmGqfnoMlc"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/9gaiNP4aZnw"),
        new Record("probro675", "1,461", "N/A", "N/A", "https://youtu.be/heXSEx_DIAM?is=1HYeEdCsIDWlkrR7"),
    ], "/nongs/folded tickling.mp3"),
    new Level("SLOWDOWN", 62.08, 16, "Gold", "136717712", "Any Route", ["snowwgmdd"], "Zannoz", "https://medal.tv/games/geometry-dash/clip/moqvde4LlCgunP6bZ?invite=cr-MSxBeGosNTM1NDU2MDU0", [
        new Record("Zannoz", "2,665", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/moqvde4LlCgunP6bZ?invite=cr-MSxBeGosNTM1NDU2MDU0"),
        new Record("Farlayy", "N/A", "N/A", "N/A", ""),
        new Record("XanderGMDD", "N/A", "N/A", "55-57 points", "https://medal.tv/games/geometry-dash/clips/mosGH6H1Osmfz2Ysy?invite=cr-MSx4Z2gsMzM2NzY3Njgx"),
        new Record("EndGamer7896", "N/A", "N/A", "65 points", "https://medal.tv/games/geometry-dash/clips/mrcAu7vfrTqQhVkOz?invite=cr-MSx0ZTYsNTk1MDYwNDc2"),
        new Record("placek3", "N/A", "N/A", "N/A", "https://www.youtube.com/watch?v=8CEpN01ZWPc"),
        new Record("Taublix", "803", "7.5/10", "Probably well placed", "https://www.youtube.com/watch?v=V6Lgc03sGw0"),
        new Record("Monkeyboy21", "4,865", "8/10", "Probably good where its at (Low-Mid Gold)", "https://medal.tv/games/geometry-dash/clips/mVkOCxsuK4d4SDV1H?invite=cr-MSxIM0EsMTk0NjAyNjk3&v=30"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/hg-Bo5igsL4"),
        new Record("Tomatokatsup", "N/A", "N/A", "N/A", "https://youtu.be/-GAuym5AMBk"),
        new Record("probro675", "794", "N/A", "N/A", "https://youtu.be/9-TbuBtE9zw?is=gZNPiVWiHCL3ECyl"),
        new Record("ariopc", "1,714", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/n3S6tAwgKDWzhWWXY?invite=cr-MSw2Y2csMjE3MzQ4MzIz"),
        new Record("sourceerrortxt", "3,623", "6/10", "Mid Gold (basically where it is, i might change based on whenever i beat more gold levels around this)", "https://www.youtube.com/watch?v=Wg6C-gHxHSY"),
    ], false),
    new Level("Circulate", 60.94, 10, "Gold", "144315438", "Any Route", ["Taublix"], "Taublix", "https://www.youtube.com/embed/kcPWbDglYuA", [
        new Record("Taublix", "N/A", "9/10", "Harder than VSR easier than Thinking straight", "https://www.youtube.com/watch?v=kcPWbDglYuA"),
        new Record("gabimoth", "N/A", "N/A", "50 Points", "https://youtu.be/9gaiNP4aZnw"),
        new Record("zis08", "2,013", "1/10", "harder than the garden", "https://medal.tv/games/geometry-dash/clips/n4RunVYdbtkMLXDpl?invite=cr-MSxFUk8sMTY4ODkwOTU4&v=24"),
        new Record("probro675", "587", "N/A", "N/A", "https://youtu.be/9-TbuBtE9zw?is=gZNPiVWiHCL3ECyl"),
        new Record("ariopc", "604", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/n5bVQcGXjKoudW2dR?invite=cr-MSxyS2IsMjE3MzQ4MzIz"),
    ], false),
    new Level("Cave A Neer (Tomatokatsup)", 60.56, 11, "Gold", "132572699", "Small Skips", ["Tomatokatsup"], "zis08", "https://youtube.com/embed/GhqUst1R7uw", [
        new Record("zis08", "561", "10/10", "Mid Gold", "https://youtu.be/GhqUst1R7uw"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://www.youtube.com/watch?v=hA-xVFXsids"),
        new Record("Taublix", "365", "7/10", "fine i guess idk", "https://www.youtube.com/watch?v=3mjx3TlQCnU"),
        new Record("RustyGD25", "387", "5/10", "56.2 points", "https://youtu.be/qZSjgSqJihY?si=ucDCwQtiloPMvGoh"),
        new Record("EndGamer7896", "1,010", "8.5/10", "57.46 list points", "https://medal.tv/games/geometry-dash/clips/n6mhOncSNz4FzoMAB?invite=cr-MSxmYXcsNTk1MDYwNDc2"),
        new Record("Nuridint3b", "N/A", "N/A", "N/A", "https://youtu.be/7KvWHv5Du9Q?is=AdIpM_FY89mZTI9k"),
        new Record("probro675", "706", "N/A", "N/A", "https://youtu.be/heXSEx_DIAM?is=1HYeEdCsIDWlkrR7"),
        new Record("Tomatokatsup", "N/A", "N/A", "N/A", "https://www.youtube.com/watch?v=iiaHRO-YwS0"),
        new Record("tFluffy", "199", "6/10", "mid-low gold maybe idk", "https://www.youtube.com/watch?v=M5nXgP_PT8w"),
    ], false),
    new Level("poison Iv", 60.25, 5, "Gold", "145309414", "Verification Route", ["RustyGD25"], "RustyGD25", "https://www.youtube.com/embed/D4mp29kBe00", [
        new Record("RustyGD25", "179", "8/10", "46 points", "https://www.youtube.com/watch?v=D4mp29kBe00"),
        new Record("Taublix", "374", "9/10", "60 points", "https://www.youtube.com/watch?v=mgXmzrZ1kbs"),
        new Record("probro675", "854", "N/A", "N/A", "https://youtu.be/j6SxRgDpfkE?is=cP8JYTSVn3vIJE7y"),
    ], "/nongs/poison Iv.mp3"),
    new Level("Brick A Neer", 60, 10, "Gold", "144534838", "Small Skips", ["ariopc"], "ariopc", "https://medal.tv/games/geometry-dash/clip/n5d9MKMH6xnE2beAJ?invite=cr-MSxpeEksMjE3MzQ4MzIz&v=33", [
        new Record("ariopc", "973", "9/10", "i genuinely have zero clue anymore gold tier i guess ", "https://medal.tv/games/geometry-dash/clips/n5d9MKMH6xnE2beAJ?invite=cr-MSxpeEksMjE3MzQ4MzIz&v=33"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/QFfGLAIuU4M?si=WhrFEYNJ0bMORMUL"),
        new Record("EndGamer7896", "1,094", "7/10", "52.5 points", "https://medal.tv/games/geometry-dash/clips/n5zyBVtLlfjq9PtaK?invite=cr-MSxnY3EsNTk1MDYwNDc2"),
        new Record("Taublix", "406", "7/10", "fine i guess idk", "https://www.youtube.com/watch?v=3mjx3TlQCnU"),
        new Record("zis08", "930", "9/10", "idk", "https://medal.tv/games/geometry-dash/clips/n69aFw8knpJauRBoH?invite=cr-MSxzVlUsMTY4ODkwOTU4"),
        new Record("probro675", "533", "N/A", "N/A", "https://youtu.be/j6SxRgDpfkE?is=cP8JYTSVn3vIJE7y"),
    ], false),
    new Level("komically depression", 59.92, 3, "Gold", "144397649", "Small Skips", ["ariopc", "zis08", "XanderGMDD"], "ariopc", "https://medal.tv/games/geometry-dash/clip/n4HEdDEaAHbZ_0fmZ?invite=cr-MSxObGYsMjE3MzQ4MzIz&v=37", [
        new Record("ariopc", "949", "0/10", "low gold", "https://medal.tv/games/geometry-dash/clips/n4HEdDEaAHbZ_0fmZ?invite=cr-MSxObGYsMjE3MzQ4MzIz&v=37"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/QFfGLAIuU4M?si=WhrFEYNJ0bMORMUL"),
        new Record("EndGamer7896", "2,500", "4/10", "57 points", "https://medal.tv/games/geometry-dash/clips/n5g7xkKkdG0Bjdlao?invite=cr-MSxncHIsNTk1MDYwNDc2"),
    ], false),
    new Level("robotnics", 59.3, 7, "Gold", "136706958", "Any Route", ["XanderGMDD"], "XanderGMDD", "https://medal.tv/games/geometry-dash/clip/monG1ZCyALH5FzBu-?invite=cr-MSxETUMsMzM2NzY3Njgx", [
        new Record("XanderGMDD", "1,829", "N/A", "57-60 points", "https://medal.tv/games/geometry-dash/clips/monG1ZCyALH5FzBu-?invite=cr-MSxETUMsMzM2NzY3Njgx"),
        new Record("Farlayy", "N/A", "N/A", "N/A", ""),
        new Record("4096Tristan", "N/A", "N/A", "N/A", "https://youtu.be/VcmM388hsMA?si=TZIcbz6_-3SvMPvN"),
        new Record("EndGamer7896", "N/A", "N/A", "61 points", "https://medal.tv/games/geometry-dash/clips/mrdpiSYThwzw7WhvO?invite=cr-MSxnZGosNTk1MDYwNDc2"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/hg-Bo5igsL4"),
        new Record("placek3", "N/A", "N/A", "N/A", "https://www.youtube.com/watch?v=8CEpN01ZWPc"),
        new Record("ariopc", "1,186", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/n4KI12uoWrJb_GANt?invite=cr-MSxiZHAsMjE3MzQ4MzIz"),
    ], "/nongs/robotnics, Meemaws Brisket.mp3"),
    new Level("Jade Runner", 59, 8, "Gold", "136732810", "Any Route", ["EndGamer7896"], "XanderGMDD", "https://medal.tv/games/geometry-dash/clip/moPx7tKLuNQoSzZAB?invite=cr-MSwycVQsMzM2NzY3Njgx", [
        new Record("XanderGMDD", "N/A", "N/A", "40-44 points", "https://medal.tv/games/geometry-dash/clips/moPx7tKLuNQoSzZAB?invite=cr-MSwycVQsMzM2NzY3Njgx"),
        new Record("Farlayy", "N/A", "N/A", "N/A", ""),
        new Record("EndGamer7896", "N/A", "N/A", "70 points", "https://medal.tv/games/geometry-dash/clips/mrBkjC2JyixC2UlVh?invite=cr-MSw5MWwsNTk1MDYwNDc2"),
        new Record("placek3", "N/A", "N/A", "N/A", "https://www.youtube.com/watch?v=8CEpN01ZWPc"),
        new Record("ariopc", "1,672", "0/10", "Harder than where it is now", "https://medal.tv/games/geometry-dash/clips/mWzscZKGc6b-0bK20?invite=cr-MSxqTG4sMjE3MzQ4MzIz"),
        new Record("gabimoth", "624", "N/A", "N/A", "https://youtu.be/EdvD0Q-u98o"),
    ], false),
    new Level("Water Cave", 58.87, 22, "Gold", "146400711", "Any Route", ["Taublix"], "Taublix", "https://www.youtube.com/embed/hdCWbMXDqFs", [
        new Record("Taublix", "N/A", "8.5/10", "not very sure, low gold maybe?", "https://www.youtube.com/watch?v=hdCWbMXDqFs"),
        new Record("probro675", "631", "N/A", "N/A", "https://youtu.be/j6SxRgDpfkE?is=cP8JYTSVn3vIJE7y"),
    ], false),
    new Level("robot but uwu ig idk", 58.25, 4, "Gold", "141419232", "Verification Route", ["xpfinker812"], "zeroskills", "https://www.youtube.com/embed/u6VuhNvsnjA", [
        new Record("zeroskills", "1,451", "5/10", "low gold (50-55 points)", "https://www.youtube.com/watch?v=u6VuhNvsnjA"),
    ], false),
    new Level("PHASEphasePHASEphase", 57.93, 24, "Gold", "144256512", "Verification Route", ["zis08", "ariopc", "XanderGMDD"], "zis08", "https://medal.tv/games/geometry-dash/clip/n3BUJePpw6UzuA2E8?invite=cr-MSxNaEMsMTY4ODkwOTU4&v=20", [
        new Record("zis08", "911", "1/10", "idk", "https://medal.tv/games/geometry-dash/clips/n3BUJePpw6UzuA2E8?invite=cr-MSxNaEMsMTY4ODkwOTU4&v=20"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/hg-Bo5igsL4"),
        new Record("Tomatokatsup", "N/A", "N/A", "N/A", "https://youtu.be/-GAuym5AMBk"),
        new Record("probro675", "212", "N/A", "Top Silver 45.5 points (HEAVILY overrated)", "https://youtu.be/9-TbuBtE9zw?is=gZNPiVWiHCL3ECyl"),
        new Record("ariopc", "1,247", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/n41fS1WsSm2spdw82?invite=cr-MSxuY0wsMjE3MzQ4MzIz"),
        new Record("Taublix", "457", "6/10", "fine i guess idk", "https://www.youtube.com/watch?v=3mjx3TlQCnU"),
        new Record("EndGamer7896", "766", "9/10", "Low gold, 55 points", "https://medal.tv/games/geometry-dash/clips/n6wtqHBtJMWtWzsdO?invite=cr-MSx0a2UsNTk1MDYwNDc2"),
    ], false),
    new Level("message me", 57.2, 4, "Gold", "145316404", "Verification Route", ["RustyGD25", "Tomatokatsup"], "RustyGD25", "https://www.youtube.com/embed/DUL2rzvI1O0", [
        new Record("RustyGD25", "683", "5.5/10", "47 points", "https://www.youtube.com/watch?v=DUL2rzvI1O0"),
        new Record("Taublix", "547", "2.5/10", "65 points", "https://www.youtube.com/watch?v=_x5yyuRCZ_Q"),
    ], false),
    new Level("RCOLDL", 56.74, 8, "Gold", "145301560", "Verification Route", ["RustyGD25"], "RustyGD25", "https://www.youtube.com/embed/osL8nDWUnuk", [
        new Record("RustyGD25", "369", "7.5/10", "43 points", "https://www.youtube.com/watch?v=osL8nDWUnuk"),
        new Record("Taublix", "635", "8/10", "63 points", "https://www.youtube.com/watch?v=G5Syj4no0lk"),
    ], "/nongs/RCOLDL.mp3"),
    new Level("VSR", 56.53, 14, "Gold", "141297381", "Small Skips", ["Vinecke123"], "XanderGMDD", "https://medal.tv/games/geometry-dash/clip/mNp9mDGlV-CqIJwRL?invite=cr-MSxGYWcsMzM2NzY3Njgx&v=32", [
        new Record("XanderGMDD", "901", "8/10", "50-53 points", "https://medal.tv/games/geometry-dash/clips/mNp9mDGlV-CqIJwRL?invite=cr-MSxGYWcsMzM2NzY3Njgx&v=32"),
        new Record("EndGamer7896", "672", "8/10", "58 points", "https://medal.tv/games/geometry-dash/clips/mNpaTKjrZKalpN5Sg?invite=cr-MSw1ZjksNTk1MDYwNDc2"),
        new Record("Komically", "611", "9/10", "57 points", "https://youtu.be/WEHU8OcA0Q4"),
        new Record("Monkeyboy21", "953", "8/10", "Good where its at", "https://medal.tv/games/geometry-dash/clips/mOXcxhXqCbrRhBvC3?invite=cr-MSxaVTYsMTk0NjAyNjk3&v=30"),
        new Record("ariopc", "703", "8.5/10", "56 points", "https://medal.tv/games/geometry-dash/clips/mTVGL4gi6hMuP0IB4?invite=cr-MSxHMTMsMjE3MzQ4MzIz&v=27"),
        new Record("zis08", "1,649", "6/10", "N/A", "https://medal.tv/games/geometry-dash/clips/mW0sEnghs1uZ2WjNa?invite=cr-MSxZRE8sMTY4ODkwOTU4"),
        new Record("Taublix", "300", "9.5/10", "fine where it is", "https://www.youtube.com/watch?v=pqRKXqUlf3Q"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/9gaiNP4aZnw"),
        new Record("Tomatokatsup", "N/A", "N/A", "N/A", "https://youtu.be/-GAuym5AMBk"),
        new Record("probro675", "834", "N/A", "N/A", "https://youtu.be/9-TbuBtE9zw?is=gZNPiVWiHCL3ECyl"),
    ], false),
    new Level("ROBATH", 55.91, 8, "Gold", "145152916", "Small Skips", ["Seedskyy73"], "ariopc", "https://medal.tv/games/geometry-dash/clip/n9jUA4xay6mZaVHzh?invite=cr-MSxBZDQsMjE3MzQ4MzIz", [
        new Record("ariopc", "723", "7/10", "like high silver or entry gold", "https://medal.tv/games/geometry-dash/clips/n9jUA4xay6mZaVHzh?invite=cr-MSxBZDQsMjE3MzQ4MzIz"),
        new Record("EndGamer7896", "1,947", "6/10", "58.62 points", "https://medal.tv/games/geometry-dash/clips/n9HzmGP5cbEka5Ccw?invite=cr-MSxHc1QsNTk1MDYwNDc2"),
        new Record("RustyGD25", "352", "7/10", "low gold", "https://youtu.be/RAefoEnAQoc"),
        new Record("Taublix", "598", "5.5/10", "60 points", "https://www.youtube.com/watch?v=wYw288zyWw4"),
        new Record("probro675", "427", "N/A", "N/A", "https://youtu.be/j6SxRgDpfkE?is=cP8JYTSVn3vIJE7y"),
    ], false),
    new Level("HenryDenry Chall 3", 55.88, 9, "Gold", "145245296", "Small Skips", ["zis08"], "zis08", "https://medal.tv/games/geometry-dash/clip/n9pzCiH8T0wV_vq8R?invite=cr-MSxFZFksMTY4ODkwOTU4", [
        new Record("zis08", "700", "10/10", "idk", "https://medal.tv/games/geometry-dash/clips/n9pzCiH8T0wV_vq8R?invite=cr-MSxFZFksMTY4ODkwOTU4"),
    ], false),
    new Level("denouebot", 55.49, 6, "Gold", "145165142", "Small Skips", ["ariopc"], "ariopc", "https://medal.tv/games/geometry-dash/clip/n8V5DNEzTQ7cEJ8-A?invite=cr-MSxKcTUsMjE3MzQ4MzIz", [
        new Record("ariopc", "2,061", "8/10", "low gold?", "https://medal.tv/games/geometry-dash/clips/n8V5DNEzTQ7cEJ8-A?invite=cr-MSxKcTUsMjE3MzQ4MzIz"),
        new Record("Taublix", "314", "6.5/10", "fine I guess", "https://www.youtube.com/watch?v=i0QqwMV7Ddo"),
        new Record("probro675", "1,522", "N/A", "N/A", "https://youtu.be/j6SxRgDpfkE?is=cP8JYTSVn3vIJE7y"),
    ], false),
    new Level("is life worth living", 55.37, 27, "Gold", "142923554", "Verification Route", ["Komically"], "Komically", "https://youtube.com/embed/BcOpJuh1Be8", [
        new Record("Komically", "999", "9.5/10", "Low Gold", "https://www.youtube.com/watch?v=BcOpJuh1Be8"),
        new Record("Taublix", "309", "10/10", "Low Gold", "https://www.youtube.com/watch?v=DzPUBBskk34"),
        new Record("4096Tristan", "365", "Harder than Gold Temple, easier than robotnics", "https://youtu.be/jvAKH7tAAV0"),
        new Record("EndGamer7896", "669", "62.5 points", "https://medal.tv/games/geometry-dash/clips/mWeD4YfDrhBPiwp9b?invite=cr-MSx5ZjYsNTk1MDYwNDc2"),
        new Record("sparked18", "796", "7/10", "good where it's at", "https://youtu.be/W4diAeLIb1k"),
        new Record("probro675", "259", "10/10", "Low Gold 55.25 points (Just below VSR)", "https://youtu.be/ibY2v43tg3c?is=USwhdF2u9cIOocu2"),
        new Record("TheUnoKing9", "2,012", "9/10", "low gold?", "https://youtu.be/iqWk3YuCTlE"),
        new Record("ariopc", "387", "9/10", "like mid silver idk", "https://medal.tv/games/geometry-dash/clips/mXqI89Vkle16Xcq7o?invite=cr-MSxxeG0sMjE3MzQ4MzIz&v=37"),
        new Record("zis08", "910", "10/10", "high Silver", "https://medal.tv/games/geometry-dash/clips/mXsS8D9nybq-jZPNA?invite=cr-MSwyWjYsMTY4ODkwOTU4"),
        new Record("NatanGMDD", "309", "9/10", "very low gold tier, 51 list points", "https://youtu.be/xSifqna5j30?si=cB3bRUjoZ_8teZWP"),
        new Record("Monkeyboy21", "965", "2/10", "good where it is at", "https://medal.tv/games/geometry-dash/clips/mZOKkKPkDL_P6Mzja?invite=cr-MSxaOGksMTk0NjAyNjk3&v=32"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/9gaiNP4aZnw"),
        new Record("Tomatokatsup", "N/A", "N/A", "N/A", "https://youtu.be/-GAuym5AMBk"),
        new Record("RustyGD25", "288", "8/10", "low gold", "https://youtu.be/RAefoEnAQoc"),
    ], false),
    new Level("level shart", 54.75, 1, "Gold", "145514439", "Small Skips", ["Tomatokatsup", "RustyGD25"], "Tomatokatsup", "https://www.youtube.com/embed/TM8YyIVGeWE", [
        new Record("Tomatokatsup", "1,174", "2/10", "somewhere", "https://www.youtube.com/watch?v=TM8YyIVGeWE"),
        new Record("RustyGD25", "191", "3/10", "very low gold", "https://youtu.be/RAefoEnAQoc"),
        new Record("Taublix", "270", "7/10", "51 points", "https://www.youtube.com/watch?v=aX6xWQKJ2sc"),
    ], false),
    new Level("grain robot 43", 54.26, 13, "Gold", "142865365", "Small Skips", ["itsGalaxie"], "EndGamer7896", "https://medal.tv/games/geometry-dash/clip/mVMXDBEoY89lr2-ev?invite=cr-MSxzbWgsNTk1MDYwNDc2", [
        new Record("EndGamer7896", "1,250", "1/10", "Easier than SLOWDOWN", "https://medal.tv/games/geometry-dash/clips/mVMXDBEoY89lr2-ev?invite=cr-MSxzbWgsNTk1MDYwNDc2"),
        new Record("zis08", "380", "5/10", "mid Silver", "https://medal.tv/games/geometry-dash/clips/mXtcsW8SZvEGrgLEc?invite=cr-MSxjQ0csMTY4ODkwOTU4&v=17"),
        new Record("Taublix", "242", "6/10", "slightly harder than Gold Temple", "https://www.youtube.com/watch?v=Em4nhBPiglc"),
        new Record("ariopc", "576", "2/10", "N/A", "https://medal.tv/games/geometry-dash/clips/n3a6db1zTsSilPJzk?invite=cr-MSxSM0gsMjE3MzQ4MzIz&v=19"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/hg-Bo5igsL4"),
        new Record("Tomatokatsup", "N/A", "N/A", "N/A", "https://youtu.be/-GAuym5AMBk"),
        new Record("RustyGD25", "188", "5/10", "45 points", "https://medal.tv/games/geometry-dash/clips/n43kcAcXR762GhSK3?invite=cr-MSw3djgsNTUyMTA4ODM0&v=21"),
        new Record("probro675", "338", "N/A", "N/A", "https://youtu.be/9-TbuBtE9zw?is=gZNPiVWiHCL3ECyl"),
    ], false),
    new Level("Meemaws Brisket", 53.88, 12, "Gold", "143832562", "Small Skips", ["Tomatokatsup"], "Tomatokatsup", "https://www.youtube.com/embed/5BELjbW5xDY", [
        new Record("Tomatokatsup", "479", "5/10", "somewhere in silver idc", "https://www.youtube.com/watch?v=5BELjbW5xDY"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/9gaiNP4aZnw"),
    ], "/nongs/robotnics, Meemaws Brisket.mp3"),
    new Level("shard", 53.12, 4, "Gold", "145245525", "Verification Route", ["RustyGD25"], "RustyGD25", "https://www.youtube.com/embed/qOFxuSwM9l4", [
        new Record("RustyGD25", "308", "5/10", "33 points", "https://www.youtube.com/watch?v=qOFxuSwM9l4"),
        new Record("Taublix", "787", "2.5/10", "68 points", "https://www.youtube.com/watch?v=boXS80MVUZ4"),
        new Record("Nuridint3b", "4,463", "0/10", "N/A", "https://youtu.be/7y-qiDuswuw?is=LXI9UJ1cOzYoFnbm"),
        new Record("EndGamer7896", "599", "6/10", "58.47 points", "https://medal.tv/games/geometry-dash/clips/neaKWNX3OJJNa9gdL?invite=cr-MSxDTUIsNTk1MDYwNDc2"),
        new Record("probro675", "307", "N/A", "N/A", "https://youtu.be/j6SxRgDpfkE?is=cP8JYTSVn3vIJE7y"),
    ], false),
    new Level("Gold Temple", 51.47, 3, "Gold", "136720720", "Any Route", ["XanderGMDD"], "XanderGMDD", "https://medal.tv/games/geometry-dash/clip/morBvhE7In0RYdbUN?invite=cr-MSx3WGQsNTkwMDQ5Mzc3", [
        new Record("XanderGMDD", "N/A", "N/A", "45-49 points", "https://medal.tv/games/geometry-dash/clips/morBvhE7In0RYdbUN?invite=cr-MSx3WGQsNTkwMDQ5Mzc3"),
        new Record("Farlayy", "N/A", "N/A", "N/A", ""),
        new Record("EndGamer7896", "N/A", "N/A", "55 points", "https://medal.tv/games/geometry-dash/clips/mrdpiSYThwzw7WhvO?invite=cr-MSxnZGosNTk1MDYwNDc2"),
        new Record("placek3", "N/A", "N/A", "N/A", "https://www.youtube.com/watch?v=8CEpN01ZWPc"),
        new Record("probro675", "1,316", "0/10", "No clue, but definitely not silver", "https://youtu.be/wgLnZWXC4hc?si=E9ovoTDTNuVSHd38"),
        new Record("ariopc", "1,925", "0/10", "Probably fine where its at", "https://medal.tv/games/geometry-dash/clips/mRRwdx5r3apMcFaw4?invite=cr-MSx4RFYsMjE3MzQ4MzIz&v=24"),
        new Record("Taublix", "204", "5.5/10", "fine probably", "https://www.youtube.com/watch?v=M_cA4RAVVNE"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/9gaiNP4aZnw"),
        new Record("Tomatokatsup", "N/A", "N/A", "N/A", "https://youtu.be/-GAuym5AMBk"),
    ], false),
    new Level("Sloppy Toppy", 51.36, 3, "Gold", "144364251", "Any Route", ["probro675"], "probro675", "https://youtube.com/embed/u0ZRwWzpcf0?is=pcXIaiPrYd4ym8IJ", [
        new Record("probro675", "842", "0/10", "idk exactly but AT LEAST harder than Joy and Rainbows", "https://youtu.be/u0ZRwWzpcf0?is=pcXIaiPrYd4ym8IJ"),
        new Record("ariopc", "498", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/n4JVl7hz2STk0EAvZ?invite=cr-MSxvZjEsMjE3MzQ4MzIz"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/QFfGLAIuU4M?si=WhrFEYNJ0bMORMUL"),
        new Record("EndGamer7896", "993", "6.5/10", "50 points", "https://medal.tv/games/geometry-dash/clips/n5aZrf6WZTm-TKcEP?invite=cr-MSx2c3osNTk1MDYwNDc2"),
        new Record("Taublix", "599", "4.5/10", "harder than Necrobot easier than dark something", "https://www.youtube.com/watch?v=J_E4oJuPuxI"),
    ], false),
    new Level("Skylight", 51.29, 12, "Gold", "142869386", "Any Route", ["Taublix"], "Taublix", "https://www.youtube.com/embed/hkXnbqdOCyA", [
        new Record("Taublix", "153", "10/10", "Mid Silver tier", "https://www.youtube.com/watch?v=hkXnbqdOCyA"),
        new Record("sourceerrortxt", "2,757", "6/10", "Low Gold (50-57 points)", "https://youtu.be/m3O7ZFltKK0"),
        new Record("probro675", "995", "3/10", "Entry Gold (above gold temple)", "https://youtu.be/xPnIrch5B6A?is=pk1X07_42ugKMM7N"),
        new Record("Tomatokatsup", "739", "2/10", "N/A", "https://youtu.be/syOCH1GX9bk"),
        new Record("EndGamer7896", "1,951", "3/10", "64 list points", "https://medal.tv/games/geometry-dash/clips/n0sU12LEf9uHz4fdx?invite=cr-MSxoeXYsNTk1MDYwNDc2"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/6Afd5TV7HNM"),
        new Record("ariopc", "717", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/n4G7t1o22zxpxXRi6?invite=cr-MSw4dW8sMjE3MzQ4MzIz"),
    ], false),
    new Level("Obsidian Tier", 51.22, 10, "Gold", "145900523", "Small Skips", ["probro675"], "probro675", "https://www.youtube.com/embed/zyzJ5VoNbjg?is=U4uXH0qmWOM1BG6a", [
        new Record("probro675", "133", "0/10", "High/Top Silver", "https://youtu.be/zyzJ5VoNbjg?is=U4uXH0qmWOM1BG6a"),
        new Record("Taublix", "299", "6/10", "55 points", "https://www.youtube.com/watch?v=aX6xWQKJ2sc"),
        new Record("Nuridint3b", "308", "N/A", "N/A", "https://youtu.be/YaI91UzIUtM?is=i11yxitSZaQ9EAIq"),
        new Record("EndGamer7896", "176", "6.5/10", "53.66 points", "https://medal.tv/games/geometry-dash/clips/neE5FT71pDWfZupFW?invite=cr-MSw4TTIsNTk1MDYwNDc2"),
    ], false),
    new Level("has been placed at", 50.71, 5, "Gold", "145535297", "Verification Route", ["probro675"], "probro675", "https://www.youtube.com/embed/ixAfIgDCweY?is=xMj0wU7WOeVuajnn", [
        new Record("probro675", "483", "1/10", "Low/Mid Silver", "https://youtu.be/ixAfIgDCweY?is=xMj0wU7WOeVuajnn"),
        new Record("Taublix", "322", "6.5/10", "55 points", "https://www.youtube.com/watch?v=aX6xWQKJ2sc"),
        new Record("Nuridint3b", "284", "N/A", "N/A", "https://youtu.be/mrFvyPBv6mQ?is=jy-a-aPdG_jH8-rF"),
        new Record("EndGamer7896", "1,136", "N/A", "62.12 points", "https://medal.tv/games/geometry-dash/clips/ncGdsvnUlEJONh2tP?invite=cr-MSwxR3IsNTk1MDYwNDc2"),
    ], false),
    new Level("Gold Digger", 50, 35, "Gold", "144669700", "Verification Route", ["barts0gd"], "Taublix", "https://www.youtube.com/embed/HpW06xZ48lE", [
        new Record("Taublix", "350", "10/10", "its good difficulty for low gold", "https://www.youtube.com/watch?v=HpW06xZ48lE"),
        new Record("probro675", "838", "N/A", "N/A", "https://youtu.be/j6SxRgDpfkE?is=cP8JYTSVn3vIJE7y"),
    ], "/nongs/Gold Digger.mp3"),

    /*
    ..######..####.##.......##.....##.########.########.
    .##....##..##..##.......##.....##.##.......##.....##
    .##........##..##.......##.....##.##.......##.....##
    ..######...##..##.......##.....##.######...########.
    .......##..##..##........##...##..##.......##...##..
    .##....##..##..##.........##.##...##.......##....##.
    ..######..####.########....###....########.##.....##
    */
    new Level("dusk till dawn", 49.82, 6, "Silver", "145306238", "Verification Route", ["RustyGD25"], "RustyGD25", "https://www.youtube.com/embed/iEoLcS0J7lI", [
        new Record("RustyGD25", "845", "6/10", "39 points", "https://www.youtube.com/watch?v=iEoLcS0J7lI"),
        new Record("Taublix", "583", "9/10", "57 points", "https://www.youtube.com/watch?v=cKF_8MNTgrI"),
        new Record("Nuridint3b", "930", "N/A", "N/A", "https://youtu.be/JVJOFnHOLqY?is=Vnzx_k2clxhFu7W_"),
    ], false),
    new Level("Leaper", 49.42, 5, "Silver", "141401606", "Any Route", ["EndGamer7896"], "EndGamer7896", "https://medal.tv/games/geometry-dash/clip/mNPdClIZVXD_8kwsC?invite=cr-MSwyaGMsNTk1MDYwNDc2", [
        new Record("EndGamer7896", "427", "0/10", "Mid Silver, 36 points", "https://medal.tv/games/geometry-dash/clips/mNPdClIZVXD_8kwsC?invite=cr-MSwyaGMsNTk1MDYwNDc2"),
        new Record("ariopc", "1,821", "0/10", "High Gold, ENDGAMER WHAT CRACK WERE YOU SMOKINGGGGGG THIS IS NOT MID SILVER YOU BITCHCHCHCHCHCHHCHC", "https://medal.tv/games/geometry-dash/clips/n10BFx9FDIEshivJj?invite=cr-MSxEUFYsMjE3MzQ4MzIz&v=36"),
        new Record("Taublix", "912", "1/10", "harder than Window easier than Heartbot", "https://www.youtube.com/watch?v=I_oTfNYL_AA"),
        new Record("Tomatokatsup", "N/A", "N/A", "N/A", "https://youtu.be/-GAuym5AMBk"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/6Afd5TV7HNM"),
        new Record("Nuridint3b", "1,087", "N/A", "N/A", "https://youtu.be/8t_y4-C8c5g?is=kY5I8moqzxp_q-cF"),
    ], false),
    new Level("Shakester", 48.8, 4, "Silver", "85678633", "Any Route", ["Farlayy"], "Farlayy", "https://youtube.com/embed/RAVFhEVV6hE", [
        new Record("Farlayy", "N/A", "N/A", "N/A", "https://youtube.com/watch?v=RAVFhEVV6hE"),
        new Record("placek3", "N/A", "N/A", "N/A", "https://www.youtube.com/watch?v=8CEpN01ZWPc"),
        new Record("zeroskills", "N/A", "N/A", "Good as is", ""),
        new Record("EndGamer7896", "1,783", "3/10", "45 points", "https://medal.tv/games/geometry-dash/clips/mIxu2N3FC7IYQZa8_?invite=cr-MSx2MGcsNTk1MDYwNDc2"),
        new Record("XanderGMDD", "1,046", "4/10", "53-55 points", "https://medal.tv/games/geometry-dash/clips/mOgcaQG4NTLzBKXtK?invite=cr-MSxQNGIsMzM2NzY3Njgx&v=31"),
        new Record("Taublix", "305", "5.5/10", "I think its okay where its at right now", "https://www.youtube.com/watch?v=mfiFefSQfQc"),
        new Record("Tomatokatsup", "N/A", "N/A", "N/A", "https://youtu.be/-GAuym5AMBk"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/6Afd5TV7HNM"),
        new Record("probro675", "900", "N/A", "Entry Gold 54 points (underrated)", "https://youtu.be/9-TbuBtE9zw?is=gZNPiVWiHCL3ECyl"),
        new Record("Nuridint3b", "1,789", "N/A", "N/A", "https://youtu.be/8t_y4-C8c5g?is=kY5I8moqzxp_q-cF"),
        new Record("RustyGD25", "480", "1/10", "47 points", "https://www.youtube.com/watch?v=PfHm2yE6Y5k"),
    ], false),
    new Level("mister crine", 48.52, 6, "Silver", "147377402", "Verification Route", ["probro675"], "probro675", "https://www.youtube.com/embed/k8-ocMqVqpQ?is=FuSWIUK-TBn6IYRr", [
        new Record("probro675", "438", "1/10", "High/Top Silver", "https://youtu.be/k8-ocMqVqpQ?is=FuSWIUK-TBn6IYRr"),
        new Record("Taublix", "193", "5/10", "idk I fluked", "https://www.youtube.com/watch?v=O4bH43bw_XQ"),
        new Record("Nuridint3b", "559", "7/10", "N/A", "https://youtu.be/6lZUnQB6OrQ?is=GyQI73JorPyKM-M0"),
        new Record("EndGamer7896", "642", "5/10", "54.07 points", "https://medal.tv/games/geometry-dash/clips/nszZnjnH9fRAP7bNd?invite=cr-MSxCSnUsNTk1MDYwNDc2"),
    ], false),
    new Level("MISUNDERSTOOD", 45.92, 15, "Silver", "147215832", "Small Skips", ["Taublix"], "Taublix", "https://www.youtube.com/embed/DkZZvWioiCw", [
        new Record("Taublix", "N/A", "9.5/10", "N/A", "https://www.youtube.com/watch?v=DkZZvWioiCw"),
        new Record("Nuridint3b", "446", "8/10", "N/A", "https://youtu.be/fJZR7AGkxKg?is=FxO5bbqjo2DwL5zE"),
    ], false),
    new Level("dote", 45.73, 7, "Silver", "143433221", "Small Skips", ["zis08"], "Taublix", "https://www.youtube.com/embed/E2WRUJ1K5cY", [
        new Record("Taublix", "190", "9.5/10", "harder than robopolis copyable 2 easier than Torch", "https://www.youtube.com/watch?v=E2WRUJ1K5cY"),
        new Record("zis08", "765", "10/10", "good", "https://medal.tv/games/geometry-dash/clips/n33VIvTw15jMtF2xi?invite=cr-MSxoaDksMTY4ODkwOTU4&v=21"),
        new Record("Tomatokatsup", "N/A", "N/A", "N/A", "https://youtu.be/-GAuym5AMBk"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/QFfGLAIuU4M?si=WhrFEYNJ0bMORMUL"),
        new Record("Nuridint3b", "535", "N/A", "N/A", "https://youtu.be/8t_y4-C8c5g?is=kY5I8moqzxp_q-cF"),
        new Record("RustyGD25", "116", "9.5/10", "have no valid opinion since i fluked the level from 27", "https://www.youtube.com/watch?v=bdCigmwnPd0"),
        new Record("probro675", "545", "N/A", "N/A", "https://youtu.be/j6SxRgDpfkE?is=cP8JYTSVn3vIJE7y"),
    ], "/nongs/dote.mp3"),
    new Level("Cant Let Gobot", 45.22, 4, "Silver", "141400994", "Any Route", ["EndGamer7896"], "EndGamer7896", "https://medal.tv/games/geometry-dash/clip/mMFgqfWoYIx8qvrAm?invite=cr-MSwwZmgsNTk1MDYwNDc2", [
        new Record("EndGamer7896", "547", "8/10", "Low/Mid Silver, 34 points", "https://medal.tv/games/geometry-dash/clips/mMFgqfWoYIx8qvrAm?invite=cr-MSwwZmgsNTk1MDYwNDc2"),
        new Record("Monkeyboy21", "539", "3/10", "Good where its at", "https://medal.tv/games/geometry-dash/clips/mPMdWcEqD951CcZMI?invite=cr-MSw4aGQsMTk0NjAyNjk3&v=30"),
        new Record("probro675", "814", "1/10 (utter dogshit)", "Mid Silver, 36 points", "https://youtu.be/CVTk3cYGFx8?si=rfeAWtP_j06Em_Db"),
        new Record("Taublix", "892", "4.5/10", "harder than Cherry Blossoms easier than Window", "https://www.youtube.com/watch?v=eFq3Wep--_4"),
        new Record("Tomatokatsup", "N/A", "N/A", "N/A", "https://youtu.be/-GAuym5AMBk"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/QFfGLAIuU4M?si=WhrFEYNJ0bMORMUL"),
        new Record("Nuridint3b", "1,196", "N/A", "N/A", "https://youtu.be/8t_y4-C8c5g?is=kY5I8moqzxp_q-cF"),
        new Record("RustyGD25", "559", "0/10", "65 points", "https://www.youtube.com/watch?v=PfHm2yE6Y5k"),
    ], false),
    new Level("with a bagfullofgold", 43.93, 17, "Silver", "143689393", "Small Skips", ["windboss07"], "EndGamer7896", "https://medal.tv/games/geometry-dash/clip/n9HpJsNwPWOFsQzJW?invite=cr-MSxyVmksNTk1MDYwNDc2", [
        new Record("EndGamer7896", "593", "10/10", "50 points 🙏", "https://medal.tv/games/geometry-dash/clips/n9HpJsNwPWOFsQzJW?invite=cr-MSxyVmksNTk1MDYwNDc2"),
        new Record("Tomatokatsup", "419", "2/10", "N/A", "https://youtu.be/syOCH1GX9bk"),
        new Record("Taublix", "247", "8/10", "46 points", "https://www.youtube.com/watch?v=1OOTrhikL4k"),
        new Record("Nuridint3b", "64", "N/A", "with a bagfullofgold should be at 19.45 points in the bronze tier and not in silver tier", "https://youtu.be/mrFvyPBv6mQ?is=jy-a-aPdG_jH8-rF"),
        new Record("RustyGD25", "367", "0/10", "49 points", "https://www.youtube.com/watch?v=PfHm2yE6Y5k"),
        new Record("probro675", "453", "N/A", "N/A", "https://youtu.be/j6SxRgDpfkE?is=cP8JYTSVn3vIJE7y"),
    ], false),
    new Level("Sixty Seven", 42.95, 3, "Silver", "146737244", "Small Skips", ["probro675"], "probro675", "https://youtube.com/embed/rmYGjMDh0Ag?is=eDciUqlqZeo09hHn", [
        new Record("probro675", "414", "0/10", "Low/Mid Silver", "https://youtu.be/rmYGjMDh0Ag?is=eDciUqlqZeo09hHn"),
        new Record("Nuridint3b", "111", "N/A", "N/A", "https://youtu.be/HmDnAicL5WE?is=dAQAazdl64H-uE7L"),
        new Record("Taublix", "765", "5/10", "65 points", "https://www.youtube.com/watch?v=ibbkaAi_jCg"),
        new Record("EndGamer7896", "378", "5/10", "52.39 points", "https://medal.tv/games/geometry-dash/clips/nng0p0fzjVnFR0pd6?invite=cr-MSxMTmEsNTk1MDYwNDc2"),
        new Record("RustyGD25", "105", "1/10", "46 points", "https://www.youtube.com/watch?v=PfHm2yE6Y5k"),
    ], false),
    new Level("Torch", 42.59, 15, "Silver", "143162026", "Any Route", ["Taublix"], "Taublix", "https://www.youtube.com/embed/eEztV-Uya7k", [
        new Record("Taublix", "270", "9.5/10", "Middle to low Silver probably", "https://www.youtube.com/watch?v=eEztV-Uya7k"),
        new Record("EndGamer7896", "1,317", "1/10", "Harder than crystal castle", "https://medal.tv/games/geometry-dash/clips/mYjGfra76FNBkPW4R?invite=cr-MSwwcDksNTk1MDYwNDc2"),
        new Record("probro675", "495", "9/10", "Fine where it is", "https://youtu.be/X33HSSSL1D8?is=3ZdDhXo94-BCSRAN"),
        new Record("ariopc", "388", "6.5/10", "N/A", "https://medal.tv/games/geometry-dash/clips/n2m0F1GeH9ESV5ZJl?invite=cr-MSw0ZlEsMjE3MzQ4MzIz&v=29"),
        new Record("Tomatokatsup", "N/A", "N/A", "N/A", "https://youtu.be/-GAuym5AMBk"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/QFfGLAIuU4M?si=WhrFEYNJ0bMORMUL"),
        new Record("probro675", "352", "N/A", "N/A", "https://youtu.be/heXSEx_DIAM?is=1HYeEdCsIDWlkrR7"),
        new Record("Nuridint3b", "647", "N/A", "N/A", "https://youtu.be/8t_y4-C8c5g?is=kY5I8moqzxp_q-cF"),
        new Record("RustyGD25", "265", "6/10", "45 points", "https://www.youtube.com/watch?v=PfHm2yE6Y5k"),
    ], false),
    new Level("jack poop", 42.45, 2, "Silver", "145312743", "Verification Route", ["RustyGD25"], "RustyGD25", "https://youtube.com/embed/4ByHszi6Qu0", [
        new Record("RustyGD25", "263", "2/10", "36 points", "https://www.youtube.com/watch?v=4ByHszi6Qu0"),
        new Record("Taublix", "308", "5/10", "high silver or low gold idk the second click is so luck based", "https://www.youtube.com/watch?v=BkKdIP6V_Lc"),
        new Record("Nuridint3b", "588", "N/A", "N/A", "https://youtu.be/9pSLvEGbn7Y?is=RjVy1MaMnM-hBvzh"),
        new Record("probro675", "N/A", "N/A", "N/A", "https://youtu.be/j6SxRgDpfkE?is=cP8JYTSVn3vIJE7y"),
    ], false),
    new Level("Avalanche", 42.26, 7, "Silver", "143512706", "Any Route", ["Taublix"], "Taublix", "https://www.youtube.com/embed/_HdpJeVQu9A", [
        new Record("Taublix", "302", "9/10", "harder than im crine easier than Stereo Madness sp 2", "https://www.youtube.com/watch?v=_HdpJeVQu9A"),
        new Record("Tomatokatsup", "N/A", "N/A", "N/A", "https://youtu.be/-GAuym5AMBk"),
        new Record("ariopc", "622", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/n4FtKjzC8r5bgSZmK?invite=cr-MSxyQjUsMjE3MzQ4MzIz"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/QFfGLAIuU4M?si=WhrFEYNJ0bMORMUL"),
        new Record("probro675", "875", "N/A", "Top Silver 48 points", "https://youtu.be/heXSEx_DIAM?is=1HYeEdCsIDWlkrR7"),
        new Record("Nuridint3b", "877", "N/A", "N/A", "https://youtu.be/8t_y4-C8c5g?is=kY5I8moqzxp_q-cF"),
        new Record("RustyGD25", "190", "8.5/10", "40.5 points", "https://www.youtube.com/watch?v=PfHm2yE6Y5k"),
    ], false),
    new Level("Disco Life", 41.13, 11, "Silver", "136150591", "Any Route", ["Taublix"], "Taublix", "https://www.youtube.com/embed/ood9b2It3dY", [
        new Record("Taublix", "N/A", "9.5/10", "Somewhere in silver", "https://www.youtube.com/watch?v=ood9b2It3dY"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://www.youtube.com/watch?v=hA-xVFXsids"),
        new Record("EndGamer7896", "750", "5/10", "Low gold, 55.5 points", "https://medal.tv/games/geometry-dash/clips/n6rd18pYiaKwo5ySZ?invite=cr-MSxxb3QsNTk1MDYwNDc2"),
        new Record("JaggerC12", "99", "8/10", "silver", "https://youtu.be/WQ12r5iTcSs"),
        new Record("probro675", "352", "N/A", "Mid Silver", "https://youtu.be/heXSEx_DIAM?is=1HYeEdCsIDWlkrR7"),
        new Record("Nuridint3b", "213", "N/A", "N/A", "https://youtu.be/8t_y4-C8c5g?is=kY5I8moqzxp_q-cF"),
        new Record("RustyGD25", "165", "8/10", "34 points", "https://www.youtube.com/watch?v=PfHm2yE6Y5k"),
    ], false),
    new Level("How I Like It", 40.95, 16, "Silver", "144609838", "Any Route", ["Taublix"], "Taublix", "https://www.youtube.com/embed/uFYQ-o_99Kk", [
        new Record("Taublix", "N/A", "9.5/10", "High bronze or low silver probably", "https://www.youtube.com/watch?v=uFYQ-o_99Kk"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://www.youtube.com/watch?v=hA-xVFXsids"),
        new Record("Nuridint3b", "239", "N/A", "N/A", "https://youtu.be/8t_y4-C8c5g?is=kY5I8moqzxp_q-cF"),
        new Record("RustyGD25", "177", "7/10", "40 points", "https://www.youtube.com/watch?v=PfHm2yE6Y5k"),
    ], false),
    new Level("Joy and rainbows", 40.9, 4, "Silver", "141413356", "Small Skips", ["Sp4c3m0nk3y"], "Komically", "https://youtube.com/embed/338pvY8as70", [
        new Record("Komically", "100", "5/10", "Top of silver", "https://www.youtube.com/watch?v=338pvY8as70"),
        new Record("XanderGMDD", "184", "6/10", "35-39 points", "https://medal.tv/games/geometry-dash/clips/mOglTKGkrz_fz3OFk?invite=cr-MSxpMkwsMzM2NzY3Njgx&v=23"),
        new Record("probro675", "649", "0/10", "High Silver", "https://youtu.be/VJGwtuCZlkw?is=HisePaktie0jAJHb"),
        new Record("Tomatokatsup", "N/A", "N/A", "N/A", "https://youtu.be/-GAuym5AMBk"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/QFfGLAIuU4M?si=WhrFEYNJ0bMORMUL"),
        new Record("Nuridint3b", "4,144", "N/A", "N/A", "https://youtu.be/8t_y4-C8c5g?is=kY5I8moqzxp_q-cF"),
    ], false),
    new Level("Dark City", 39.27, 14, "Silver", "143513881", "Any Route", ["Taublix"], "Taublix", "https://www.youtube.com/embed/e5IoxyJf-9Q", [
        new Record("Taublix", "330", "9.5/10", "harder than Stereo Madness sp 2 easier than dote", "https://www.youtube.com/watch?v=e5IoxyJf-9Q"),
        new Record("Tomatokatsup", "N/A", "N/A", "N/A", "https://youtu.be/-GAuym5AMBk"),
        new Record("probro675", "436", "N/A", "N/A", "https://youtu.be/9-TbuBtE9zw?is=gZNPiVWiHCL3ECyl"),
        new Record("ariopc", "238", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/n4FLbe4UxFoAD8uzt?invite=cr-MSxmTHQsMjE3MzQ4MzIz"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/QFfGLAIuU4M?si=WhrFEYNJ0bMORMUL"),
        new Record("Nuridint3b", "516", "N/A", "N/A", "https://youtu.be/8t_y4-C8c5g?is=kY5I8moqzxp_q-cF"),
        new Record("RustyGD25", "262", "6.5/10", "mid silver", "https://youtu.be/RAefoEnAQoc"),
    ], false),
    new Level("robopolis copyable 2", 38.12, 12, "Silver", "142803392", "Verification Route", ["ariopc"], "ariopc", "https://medal.tv/games/geometry-dash/clip/mVn9dTu2m39TAgTJ_?invite=cr-MSxqZGgsMjE3MzQ4MzIz&v=42", [
        new Record("ariopc", "809", "9/10", "High Silver / Low Gold", "https://medal.tv/games/geometry-dash/clips/mVn9dTu2m39TAgTJ_?invite=cr-MSxqZGgsMjE3MzQ4Mz23&v=42"),
        new Record("EndGamer7896", "791", "8/10", "69.5 points", "https://medal.tv/games/geometry-dash/clips/mVBBFgG5wF2rHQ0gp?invite=cr-MSx3c3QsNTk1MDYwNDc2"),
        new Record("Taublix", "184", "9.5/10", "Easier than Skylight, harder than im crine", "https://www.youtube.com/watch?v=-UxXKaPL8a4"),
        new Record("sparked18", "667", "N/A", "mid-high silver", "https://youtu.be/W4diAeLIb1k"),
        new Record("Tomatokatsup", "N/A", "N/A", "N/A", "https://youtu.be/-GAuym5AMBk"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/QFfGLAIuU4M?si=WhrFEYNJ0bMORMUL"),
        new Record("probro675", "456", "N/A", "N/A", "https://youtu.be/heXSEx_DIAM?is=1HYeEdCsIDWlkrR7"),
        new Record("Nuridint3b", "366", "N/A", "N/A", "https://youtu.be/8t_y4-C8c5g?is=kY5I8moqzxp_q-cF"),
        new Record("RustyGD25", "205", "7.5/10", "41 points", "https://www.youtube.com/watch?v=PfHm2yE6Y5k"),
    ], false),
    new Level("Shattered Glass", 36.85, 19, "Silver", "110429397", "Small Skips", ["Taublix"], "Taublix", "https://www.youtube.com/embed/lvyGMfKDvTc", [
        new Record("Taublix", "N/A", "9/10", "N/A", "https://www.youtube.com/watch?v=lvyGMfKDvTc"),
        new Record("Nuridint3b", "376", "7/10", "N/A", "https://youtu.be/DVrgMB44ukA?is=jiRM9E-XLQWpx2NB"),
    ], false),
    new Level("JEALOUSY", 35.78, 7, "Silver", "143439385", "Verification Route", ["barts0gd"], "Taublix", "https://www.youtube.com/embed/PYz1pJ0dSg0", [
        new Record("Taublix", "173", "7.5/10", "harder than Stereo Madness sp 2 easier than dote", "https://www.youtube.com/watch?v=PYz1pJ0dSg0"),
        new Record("probro675", "694", "5/10", "Fine where it is", "https://youtu.be/6WQqCxmhw3w?is=N76rhUCfpg3fwX9J"),
        new Record("Tomatokatsup", "N/A", "N/A", "N/A", "https://youtu.be/-GAuym5AMBk"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/QFfGLAIuU4M?si=WhrFEYNJ0bMORMUL"),
        new Record("Nuridint3b", "1,720", "N/A", "N/A", "https://youtu.be/8t_y4-C8c5g?is=kY5I8moqzxp_q-cF"),
        new Record("RustyGD25", "175", "7/10", "35 points", "https://www.youtube.com/watch?v=PfHm2yE6Y5k"),
    ], "/nongs/JEALOUSY.mp3", true),
    new Level("Robot carnival", 33.33, 21, "Silver", "141050126", "Small Skips", ["Vinecke123"], "EndGamer7896", "https://medal.tv/games/geometry-dash/clip/mM5DQxD0WqP97w9pF?invite=cr-MSxtemUsNTk1MDYwNDc2", [
        new Record("EndGamer7896", "576", "6/10", "32 points", "https://medal.tv/games/geometry-dash/clips/mM5DQxD0WqP97w9pF?invite=cr-MSxtemUsNTk1MDYwNDc2"),
        new Record("Tomatokatsup", "N/A", "N/A", "N/A", "https://youtu.be/-GAuym5AMBk"),
        new Record("RustyGD25", "N/A", "6.5/10", "26 points", "https://medal.tv/games/geometry-dash/clips/n43aZth9NlsSNxD6Z?invite=cr-MSxqMzIsNTUyMTA4ODM0&v=300"),
        new Record("ariopc", "216", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/n3Skub4u8OgNYpLMt?invite=cr-MSxvb0wsMjE3MzQ4MzIz"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/QFfGLAIuU4M?si=WhrFEYNJ0bMORMUL"),
        new Record("probro675", "296", "N/A", "N/A", "https://youtu.be/heXSEx_DIAM?is=1HYeEdCsIDWlkrR7"),
        new Record("Nuridint3b", "234", "N/A", "N/A", "https://youtu.be/8t_y4-C8c5g?is=kY5I8moqzxp_q-cF"),
    ], "/nongs/Robot carnival.mp3"),
    new Level("im crine", 33.29, 13, "Silver", "141834640", "Small Skips", ["probro675"], "probro675", "https://youtube.com/embed/Ikz5KSCTc9Q?si=E_rfGiVsj8ibZMcG", [
        new Record("probro675", "304", "6.7/10", "Entry/Low Silver", "https://youtu.be/Ikz5KSCTc9Q?si=E_rfGiVsj8ibZMcG"),
        new Record("EndGamer7896", "396", "10/10", "33.5 points", "https://medal.tv/games/geometry-dash/clips/mQi1epv0UKNns_Gg_?invite=cr-MSxkMWMsNTk1MDYwNDc2"),
        new Record("ariopc", "589", "9/10", "I don't know", "https://medal.tv/games/geometry-dash/clips/mRWGApLoPpkcBUE2u?invite=cr-MSw2T2osMjE3MzQ4MzIz&v=20"),
        new Record("Taublix", "158", "6/10", "Placed fine", "https://www.youtube.com/watch?v=ZUVZ8Pda8CQ"),
        new Record("placek3", "221", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mYsbZwnmo7SVd_GKF?invite=cr-MSxidHksNTk0ODYzMTcx"),
        new Record("Tomatokatsup", "N/A", "N/A", "N/A", "https://youtu.be/-GAuym5AMBk"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/QFfGLAIuU4M?si=WhrFEYNJ0bMORMUL"),
        new Record("Nuridint3b", "959", "N/A", "N/A", "https://youtu.be/8t_y4-C8c5g?is=kY5I8moqzxp_q-cF"),
        new Record("RustyGD25", "367", "7.5/10", "high silver", "https://youtu.be/RAefoEnAQoc"),
    ], false),
    new Level("Xander Takes Dihh", 32.53, 4, "Silver", "143410813", "Verification Route", ["probro675"], "probro675", "https://youtube.com/embed/l5aU8sBxmss?is=PT-8ToEm6s560QTh", [
        new Record("probro675", "569", "0/10", "Entry Silver 25.5 points", "https://youtu.be/l5aU8sBxmss?is=PT-8ToEm6s560QTh"),
        new Record("Taublix", "162", "7/10", "harder than Stereo Madness sp 2 easier than JEALOUSY", "https://www.youtube.com/watch?v=EMnEsFoLlbU"),
        new Record("ariopc", "N/A", "2/10", "N/A", "https://medal.tv/games/geometry-dash/clips/mYYMqlN5IOYRwdjp9?invite=cr-MSxYc2gsMjE3MzQ4MzIz&v=24"),
        new Record("Tomatokatsup", "N/A", "N/A", "N/A", "https://youtu.be/-GAuym5AMBk"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/QFfGLAIuU4M?si=WhrFEYNJ0bMORMUL"),
        new Record("EndGamer7896", "1,040", "7/10", "33.74 list points", "https://medal.tv/games/geometry-dash/clips/n6zmZpmYyGHLcR0LK?invite=cr-MSxhNjQsNTk1MDYwNDc2"),
        new Record("Nuridint3b", "427", "N/A", "N/A", "https://youtu.be/8t_y4-C8c5g?is=kY5I8moqzxp_q-cF"),
        new Record("RustyGD25", "335", "6.5/10", "38 points", "https://www.youtube.com/watch?v=PfHm2yE6Y5k"),
    ], false),
    new Level("Barts0 MIGHT clear", 32.04, 11, "Silver", "145471800", "Small Skips", ["Taublix"], "barts0gd", "https://medal.tv/games/geometry-dash/clip/naK3Vp7IKUnQGfk7F?invite=cr-MSxCSTMsNDExMTQ3ODI3", [
        new Record("barts0gd", "100", "9.5/10", "like high bronze to mid silver prob bronze tho", "https://medal.tv/games/geometry-dash/clips/naK3Vp7IKUnQGfk7F?invite=cr-MSxCSTMsNDExMTQ3ODI3"),
        new Record("LightShadow5", "168", "7.5/10", "Prolly mid-high bronze, maybe even low silver", "https://youtu.be/V-Z7lChSIAg?is=jOmfpB8imLwBVAUb"),
        new Record("Taublix", "N/A", "9/10", "high bronze low silver maybe idk", "https://www.youtube.com/watch?v=6Uu66IYkeoM"),
        new Record("Nuridint3b", "405", "N/A", "N/A", "https://youtu.be/-6NI_d4GTx8?si=EvH2f4eTlhU8_hZ0"),
        new Record("EndGamer7896", "263", "8.5/10", "38.61 points", "https://medal.tv/games/geometry-dash/clips/ncyrigzbibhi4hvwC?invite=cr-MSxNZmksNTk1MDYwNDc2"),
        new Record("RustyGD25", "48", "7.5/10", "low silver", "https://youtu.be/RAefoEnAQoc"),
        new Record("probro675", "208", "N/A", "N/A", "https://youtu.be/j6SxRgDpfkE?is=cP8JYTSVn3vIJE7y"),
    ], false),
    new Level("endgame is a chud", 31.97, 1, "Silver", "141575973", "Small Skips", ["xpfinker812"], "ariopc", "https://medal.tv/games/geometry-dash/clip/n0Fbtzyq9Kn8T58pi?invite=cr-MSxKTXUsMjE3MzQ4MzIz&v=16", [
        new Record("ariopc", "352", "1/10", "honestly idk, probably top bronze or entry silver", "https://medal.tv/games/geometry-dash/clips/n0Fbtzyq9Kn8T58pi?invite=cr-MSxKTXUsMjE3MzQ4Mz23&v=16"),
        new Record("Tomatokatsup", "N/A", "N/A", "N/A", "https://youtu.be/-GAuym5AMBk"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/QFfGLAIuU4M?si=WhrFEYNJ0bMORMUL"),
        new Record("Taublix", "297", "4/10", "Harder than Xander Takes Dihh easier than First time", "https://www.youtube.com/watch?v=3mjx3TlQCnU"),
        new Record("EndGamer7896", "1,326", "0/10", "Everyone who gave an opinion is wrong. This is 99% harder than Gold Temple... 52 list points.", "https://medal.tv/games/geometry-dash/clips/n6yoILOEQAyQuvnpk?invite=cr-MSw1cmQsNTk1MDYwNDc2"),
        new Record("Nuridint3b", "1,154", "N/A", "N/A", "https://youtu.be/8t_y4-C8c5g?is=kY5I8moqzxp_q-cF"),
    ], false),
    new Level("larpmaxxer", 31.95, 5, "Silver", "146395644", "Verification Route", ["probro675"], "probro675", "https://youtube.com/embed/eM_S_ryFwhU?is=NJlYoxYSU_AkJoTF", [
        new Record("probro675", "206", "0/10", "Low Silvee", "https://youtu.be/eM_S_ryFwhU?is=NJlYoxYSU_AkJoTF"),
        new Record("Nuridint3b", "1,687", "N/A", "N/A", "https://youtu.be/bYfGJhMnaZE?is=jw-LIHZlVGCQFyDI"),
        new Record("EndGamer7896", "526", "7.5/10", "31 points", "https://medal.tv/games/geometry-dash/clips/nisCE1bU7SxlHEM_g?invite=cr-MSw4SkUsNTk1MDYwNDc2"),
        new Record("RustyGD25", "308", "3/10", "33 points", "https://www.youtube.com/watch?v=PfHm2yE6Y5k"),
        new Record("Taublix", "60", "5/10", "24 points", "https://www.youtube.com/watch?v=k_REaXGrLHk"),
    ], false),
    new Level("First time", 31.94, 21, "Silver", "143484615", "Any Route", ["barts0gd"], "Taublix", "https://www.youtube.com/embed/8QfxcGoaG4E", [
        new Record("Taublix", "307", "7.5/10", "harder than robopolis copyable 2 easier than Torch", "https://www.youtube.com/watch?v=8QfxcGoaG4E"),
        new Record("EndGamer7896", "165", "9/10", "25.5 list points", "https://medal.tv/games/geometry-dash/clips/mZNK8UCBCvv0bWFSb?invite=cr-MSxmZ2osNTk1MDYwNDc2"),
        new Record("Tomatokatsup", "N/A", "N/A", "N/A", "https://youtu.be/-GAuym5AMBk"),
        new Record("probro675", "239", "N/A", "N/A", "https://youtu.be/9-TbuBtE9zw?is=gZNPiVWiHCL3ECyl"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/QFfGLAIuU4M?si=WhrFEYNJ0bMORMUL"),
        new Record("Nuridint3b", "172", "N/A", "N/A", "https://youtu.be/8t_y4-C8c5g?is=kY5I8moqzxp_q-cF"),
        new Record("barts0gd", "25", "10/10", "N/A", "https://medal.tv/games/geometry-dash/clips/naOB9UDUNvjRipPY1?invite=cr-MSxEQkssNDExMTQ3ODI3"),
        new Record("RustyGD25", "69", "8/10", "29 points", "https://www.youtube.com/watch?v=PfHm2yE6Y5k"),
    ], "/nongs/First time.mp3"),
    new Level("xander is bad at imp", 30.38, 7, "Silver", "143745701", "Verification Route", ["ariopc"], "ariopc", "https://medal.tv/games/geometry-dash/clip/n0EzBxGwBakiRg8Mt?invite=cr-MSxEZTIsMjE3MzQ4MzIz&v=32", [
        new Record("ariopc", "N/A", "N/A", "somewhere in silver", "https://medal.tv/games/geometry-dash/clips/n0EzBxGwBakiRg8Mt?invite=cr-MSxEZTIsMjE3MzQ4Mz23&v=32"),
        new Record("Taublix", "103", "8/10", "harder than Hydra Speed easier than Ape Rotation", "https://www.youtube.com/watch?v=v0yPYjgCBuI"),
        new Record("TheUnoKing9", "396", "3/10", "Mid silver", "https://youtu.be/cLE1gu7ZW5E"),
        new Record("Tomatokatsup", "N/A", "N/A", "N/A", "https://youtu.be/-GAuym5AMBk"),
        new Record("zis08", "456", "8/10", "idk", "https://medal.tv/games/geometry-dash/clips/n4TY5rjaV4IcWUxx7?invite=cr-MSx6RFIsMTY4ODkwOTU4&v=20"),
        new Record("probro675", "106", "N/A", "Entry Silver (overrated)", "https://youtu.be/9-TbuBtE9zw?is=gZNPiVWiHCL3ECyl"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/QFfGLAIuU4M?si=WhrFEYNJ0bMORMUL"),
        new Record("Nuridint3b", "120", "N/A", "N/A", "https://youtu.be/8t_y4-C8c5g?is=kY5I8moqzxp_q-cF"),
        new Record("RustyGD25", "103", "5/10", "27 points", "https://www.youtube.com/watch?v=PfHm2yE6Y5k"),
    ], false),
    new Level("Robopolis V2", 30, 9, "Silver", "138091805", "Any Route", ["rumble1978"], "EndGamer7896", "https://medal.tv/games/geometry-dash/clip/muYoylZMtRMFjDQcF?invite=cr-MSx4amcsNTk1MDYwNDc2", [
        new Record("EndGamer7896", "218", "9/10", "26 points", "https://medal.tv/games/geometry-dash/clips/muYoylZMtRMFjDQcF?invite=cr-MSx4amcsNTk1MDYwNDc2"),
        new Record("XanderGMDD", "372", "0/10", "35 points", "https://medal.tv/games/geometry-dash/clips/mNcubT6LmWeZdTZML?invite=cr-MSxsUVcsMzM2NzY3Njgx&v=15"),
        new Record("Monkeyboy21", "536", "8/10", "Silver ig 35-36 points", "https://medal.tv/games/geometry-dash/clips/mOKO424EO5p6X8-_G?invite=cr-MSxUd1osMTk0NjAyNjk3&v=34"),
        new Record("probro675", "375", "0/10", "Entry Silver, 26 points", "https://youtu.be/3vyQME4fKAM?si=FMDGhSXmv-iG0R0Z"),
        new Record("placek3", "452", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mYs4MayaUy6R1JxrP?invite=cr-MSxnV3UsNTk0ODYzMTcx&v=12"),
        new Record("Taublix", "142", "4/10", "fine probably", "https://www.youtube.com/watch?v=eoaDMgtPaZg"),
        new Record("Tomatokatsup", "N/A", "N/A", "N/A", "https://youtu.be/-GAuym5AMBk"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/QFfGLAIuU4M?si=WhrFEYNJ0bMORMUL"),
        new Record("Nuridint3b", "439", "N/A", "N/A", "https://youtu.be/8t_y4-C8c5g?is=kY5I8moqzxp_q-cF"),
        new Record("RustyGD25", "126", "4/10", "33 points", "https://www.youtube.com/watch?v=PfHm2yE6Y5k"),
    ], false),
    new Level("Gold Tier", 29.68, 2, "Silver", "145594622", "Verification Route", ["probro675"], "probro675", "https://www.youtube.com/embed/v52lWVjYaiY?is=rWmKr2WpsSCJzQnA", [
        new Record("probro675", "252", "0/10", "its low gold trustttttttttt me it totally is", "https://youtu.be/v52lWVjYaiY?is=rWmKr2WpsSCJzQnA"),
        new Record("Taublix", "45", "7/10", "idk I fluked it from 14 lol high bronze maybe", "https://www.youtube.com/watch?v=aX6xWQKJ2sc"),
        new Record("EndGamer7896", "288", "6/10", "31.54 points", "https://medal.tv/games/geometry-dash/clips/ndRiPuGr7Ns600dir?invite=cr-MSwyVTYsNTk1MDYwNDc2"),
        new Record("RustyGD25", "35", "5/10", "???", "https://www.youtube.com/watch?v=PfHm2yE6Y5k"),
    ], false),
    new Level("Stereo Madness sp 2", 28.64, 6, "Silver", "143162497", "Any Route", ["CyberCharger"], "CyberCharger", "https://www.youtube.com//embed/-JYsaSzX0S0", [
        new Record("CyberCharger", "1,290", "5/10", "silver i guess maybe like low", "https://www.youtube.com/watch?v=-JYsaSzX0S0"),
        new Record("EndGamer7896", "163", "7/10", "30.5 points", "https://medal.tv/games/geometry-dash/clips/mXKMfjt5S6SZ_ga0D?invite=cr-MSxkZ2EsNTk1MDYwNDc2"),
        new Record("probro675", "111", "4/10", "Low Silver 33 points", "https://youtu.be/con_HubyfyY?is=8uf0AKIacu4NLwov"),
        new Record("Taublix", "123", "5.5/10", "harder than Bot after Ro easier than frostworks", "https://www.youtube.com/watch?v=jAKG7fI8GNk"),
        new Record("ariopc", "255", "9.5/10", "low silver", "https://medal.tv/games/geometry-dash/clips/mXP41FyKd2gZrT1Fq?invite=cr-MSxMZG4sMjE3MzQ4MzIz&v=25"),
        new Record("Tomatokatsup", "N/A", "N/A", "N/A", "https://youtu.be/-GAuym5AMBk"),
        new Record("zis08", "154", "10/10", "easy", "https://medal.tv/games/geometry-dash/clips/n4UFmpQsXIXZAsLwz?invite=cr-MSxQNGQsMTY4ODkwOTU4&v=24"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/QFfGLAIuU4M?si=WhrFEYNJ0bMORMUL"),
        new Record("Nuridint3b", "156", "N/A", "N/A", "https://youtu.be/8t_y4-C8c5g?is=kY5I8moqzxp_q-cF"),
        new Record("RustyGD25", "77", "9/10", "25 points", "https://www.youtube.com/watch?v=PfHm2yE6Y5k"),
    ], false),
    new Level("Monochrome", 28.53, 6, "Silver", "138015367", "Any Route", ["EndGamer7896"], "EndGamer7896", "https://medal.tv/games/geometry-dash/clip/muFDSeOPYnZ7XiKEH?invite=cr-MSxwNGEsNTk1MDYwNDc2", [
        new Record("EndGamer7896", "848", "5/10", "Entry Silver, 25 points", "https://medal.tv/games/geometry-dash/clips/muFDSeOPYnZ7XiKEH?invite=cr-MSxwNGEsNTk1MDYwNDc2"),
        new Record("placek3", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mvHzaA57FF0hF7mK5?invite=cr-MSx6RnAsNTk0ODYzMTcx&v=31"),
        new Record("XanderGMDD", "500", "1/10", "30-33 points", "https://medal.tv/games/geometry-dash/clips/mNUJTrZval_1X5lGP?invite=cr-MSx4NGssMzM2NzY3Njgx"),
        new Record("Monkeyboy21", "364", "7/10", "Good where its at", "https://medal.tv/games/geometry-dash/clips/mP6jJtV3HiSl41t1q?invite=cr-MSxDS2gsMTk0NjAyNjk3&v=32"),
        new Record("ariopc", "193", "8/10", "Fine where its at", "https://medal.tv/games/geometry-dash/clips/mRVxSAMI6zRUNO4Oy?invite=cr-MSwzWFMsMjE3MzQ4MzIz&v=33"),
        new Record("Taublix", "75", "8/10", "High Bronze", "https://www.youtube.com/watch?v=IzA0RLh6FI0"),
        new Record("probro675", "242", "0/10", "Entry Silver", "https://youtu.be/SftW_dM3fPI?is=yLq9OwhaWDgt-wBP"),
        new Record("TheUnoKing9", "650", "7/10", "mid-low high silver", "https://youtu.be/6pv270THxI8"),
        new Record("Tomatokatsup", "N/A", "N/A", "N/A", "https://youtu.be/-GAuym5AMBk"),
        new Record("zis08", "662", "1/10", "idk", "https://medal.tv/games/geometry-dash/clips/n3ViyRyLoW6vfdNJd?invite=cr-MSxOTG4sMTY4ODkwOTU4"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/QFfGLAIuU4M?si=WhrFEYNJ0bMORMUL"),
        new Record("Nuridint3b", "221", "N/A", "N/A", "https://youtu.be/8t_y4-C8c5g?is=kY5I8moqzxp_q-cF"),
        new Record("RustyGD25", "163", "4.5/10", "29 points", "https://www.youtube.com/watch?v=PfHm2yE6Y5k"),
    ], false),
    new Level("Jane", 28.39, 1, "Silver", "143515146", "Verification Route", ["Seedskyy73"], "Seedskyy73", "https://medal.tv/games/geometry-dash/clip/mZqM9DYCFpjJC59_9?invite=cr-MSwyd28sNTI1NzU2MjU4", [
        new Record("Seedskyy73", "186", "N/A", "Low-mid bronze", "https://medal.tv/games/geometry-dash/clips/mZqM9DYCFpjJC59_9?invite=cr-MSwyd28sNTI1NzU2MjU4"),
        new Record("EndGamer7896", "637", "0/10", "Harder than Glass Castle", "https://medal.tv/games/geometry-dash/clips/mZxazRmydAxjXJYq4?invite=cr-MSx4amssNTk1MDYwNDc2"),
        new Record("Tomatokatsup", "405", "0/10", "N/A", "https://youtu.be/syOCH1GX9bk"),
        new Record("Taublix", "361", "1/10", "luck", "https://www.youtube.com/watch?v=4h19RWbt4tI"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/9yOn65G8MAM"),
        new Record("ariopc", "514", "0/10", "N/A", "https://medal.tv/games/geometry-dash/clips/n3MXrAI9X1NNTmSDl?invite=cr-MSxLR2MsMjE3MzQ4MzIz&v=19"),
        new Record("probro675", "299", "N/A", "Mid Silver 36 points", "https://youtu.be/heXSEx_DIAM?is=1HYeEdCsIDWlkrR7"),
        new Record("Nuridint3b", "485", "N/A", "N/A", "https://youtu.be/8t_y4-C8c5g?is=kY5I8moqzxp_q-cF"),
    ], "/nongs/Jane, Jane 2 and Surge III.mp3"),
    new Level("Time Leaper", 27.7, 7, "Silver", "143671048", "Verification Route", ["ariopc"], "ariopc", "https://medal.tv/games/geometry-dash/clip/n0fZf3BUoIFjelxPu?invite=cr-MSxrY1gsMjE3MzQ4MzIz&v=33", [
        new Record("ariopc", "169", "N/A", "bronze idk", "https://medal.tv/games/geometry-dash/clips/n0fZf3BUoIFjelxPu?invite=cr-MSxrY1gsMjE3MzQ4Mz323&v=33"),
        new Record("Taublix", "75", "6.5/10", "harder than Bot After Ro easier than Black Hole Sun", "https://www.youtube.com/watch?v=el-cli5fLEE"),
        new Record("EndGamer7896", "534", "0/10", "35 list points", "https://medal.tv/games/geometry-dash/clips/n0G3qmifApo0SZAzO?invite=cr-MSxyNHEsNTk1MDYwNDc2"),
        new Record("Tomatokatsup", "N/A", "N/A", "N/A", "https://youtu.be/-GAuym5AMBk"),
        new Record("zis08", "402", "9/10", "idk", " https://medal.tv/games/geometry-dash/clips/n4RK3QvBPuPKYNYfK?invite=cr-MSxvUTYsMTY4ODkwOTU4&v=25"),
        new Record("gabimoth", "48", "N/A", "N/A", "https://youtu.be/QFfGLAIuU4M?si=WhrFEYNJ0bMORMUL"),
        new Record("Nuridint3b", "215", "N/A", "N/A", "https://youtu.be/8t_y4-C8c5g?is=kY5I8moqzxp_q-cF"),
        new Record("RustyGD25", "89", "3/10", "20 points", "https://www.youtube.com/watch?v=PfHm2yE6Y5k"),
        new Record("probro675", "230", "N/A", "N/A", "https://youtu.be/j6SxRgDpfkE?is=cP8JYTSVn3vIJE7y"),
    ], false, true),
    new Level("robotomy", 27.07, 9, "Silver", "144965124", "Any Route", ["LightShadow5"], "ariopc", "https://medal.tv/games/geometry-dash/clip/n84UulqWpWSryl7Qg?invite=cr-MSw4bHcsMjE3MzQ4MzIz", [
        new Record("ariopc", "431", "9/10", "no clue, could range from 20-55 points", "https://medal.tv/games/geometry-dash/clips/n84UulqWpWSryl7Qg?invite=cr-MSw4bHcsMjE3MzQ4Mz23"),
        new Record("Nuridint3b", "461", "N/A", "N/A", "https://youtu.be/8t_y4-C8c5g?is=kY5I8moqzxp_q-cF"),
        new Record("EndGamer7896", "220", "8/10", "16.64 points", "https://medal.tv/games/geometry-dash/clips/n8VA4IAj8RaV6qqs-?invite=cr-MSw0dFMsNTk1MDYwNDc2"),
    ], false),
    new Level("Endgamer Takes Dihh", 26.51, 4, "Silver", "141856398", "Small Skips", ["probro675"], "probro675", "https://youtube.com/embed/3LaVMBaNJRA?si=QupH51tNppXLMhRE", [
        new Record("probro675", "211", "1/10", "High/Top Bronze (17 points)", "https://youtu.be/3LaVMBaNJRA?si=QupH51tNppXLMhRE"),
        new Record("EndGamer7896", "1,437", "2/10", "35 points", "https://medal.tv/games/geometry-dash/clips/mQJy48e0skT2ct10A?invite=cr-MSxueGcsNTk1MDYwNDc2"),
        new Record("Komically", "473", "3/10", "Harder than WfX2", "https://youtu.be/MfwG1sm_tX0"),
        new Record("Taublix", "212", "6.5/10", "Harder than Monochrome, easier than im crine", "https://www.youtube.com/watch?v=oP7yYWTt4UI"),
        new Record("placek3", "419", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mYrP8wNQF_hrUkxfq?invite=cr-MSxmMWQsNTk0ODYzMTcx&v=14"),
        new Record("Tomatokatsup", "N/A", "N/A", "N/A", "https://youtu.be/-GAuym5AMBk"),
        new Record("ariopc", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/n3QosH2tQ-Dt-t9U0?invite=cr-MSx2THYsMjE3MzQ4MzIz"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/QFfGLAIuU4M?si=WhrFEYNJ0bMORMUL"),
        new Record("RustyGD25", "167", "7/10", "27 points", "https://www.youtube.com/watch?v=VAiK7vUUe-g"),
        new Record("zis08", "938", "5/10", "idk", "https://medal.tv/games/geometry-dash/clips/n68y8C1pV9mp5lR7i?invite=cr-MSxpU1ksMTY4ODkwOTU4"),
        new Record("Nuridint3b", "312", "N/A", "N/A", "https://youtu.be/8t_y4-C8c5g?is=kY5I8moqzxp_q-cF"),
    ], false),
    new Level("frostworks", 26.07, 11, "Silver", "136124065", "Any Route", ["sourceerrortxt"], "sourceerrortxt", "https://www.youtube.com/embed/DOt_YqK4I7g", [
        new Record("sourceerrortxt", "N/A", "N/A", "N/A", "https://www.youtube.com/watch?v=DOt_YqK4I7g"),
        new Record("XanderGMDD", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/monjUpS2bBHYjzFaH?invite=cr-MSwydWIsMzM2NzY3Njgx"),
        new Record("Farlayy", "N/A", "N/A", "N/A", ""),
        new Record("Neveets", "N/A", "N/A", "N/A", "https://youtu.be/XZIpfUSpRS8"),
        new Record("EndGamer7896", "N/A", "N/A", "19 points", "https://medal.tv/games/geometry-dash/clips/mqPHRuYGWfLAAHGbH?invite=cr-MSxqYWEsNTk1MDYwNDc2"),
        new Record("placek3", "N/A", "N/A", "N/A", "https://www.youtube.com/watch?v=8CEpN01ZWPc"),
        new Record("zeroskills", "N/A", "N/A", "Harder than Ape Rotation", ""),
        new Record("zis08", "N/A", "N/A", "Top Bronze", "https://medal.tv/games/geometry-dash/clips/msqmWgEyoQZqGCNrj?invite=cr-MSx6OXEsMTY4ODkwOTU4"),
        new Record("Monkeyboy21", "561", "8/10", "~26 points", "https://medal.tv/games/geometry-dash/clips/mPLHTexVa-aQkwxgG?invite=cr-MSx6UmksMTk0NjAyNjk3&v=30"),
        new Record("Taublix", "437", "8/10", "mid silver tier", "https://www.youtube.com/watch?v=VOWaK0EWaQc"),
        new Record("Komically", "889", "0/10", "33 points", "https://youtu.be/WW04elgzkcM"),
        new Record("Tomatokatsup", "N/A", "N/A", "N/A", "https://youtu.be/-GAuym5AMBk"),
        new Record("ariopc", "537", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/n5aSQD6tVaorZKeA1?invite=cr-MSxZaUosMjE3MzQ4MzIz"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/QFfGLAIuU4M?si=WhrFEYNJ0bMORMUL"),
        new Record("probro675", "549", "N/A", "N/A", "https://youtu.be/heXSEx_DIAM?is=1HYeEdCsIDWlkrR7"),
        new Record("Nuridint3b", "386", "N/A", "N/A", "https://youtu.be/8t_y4-C8c5g?is=kY5I8moqzxp_q-cF"),
        new Record("RustyGD25", "364", "4/10", "31 points", "https://www.youtube.com/watch?v=PfHm2yE6Y5k"),
    ], false),
    new Level("Anything But Robot", 25.97, 5, "Silver", "143432990", "Small Skips", ["XanderGMDD"], "XanderGMDD", "https://medal.tv/games/screen-capture/clip/mYWBbtk1zm7BAliEY?invite=cr-MSw1RG4sMzM2NzY3Njgx&v=26", [
        new Record("XanderGMDD", "431", "10/10", "like low mid silver", "https://medal.tv/games/screen-capture/clips/mYWBbtk1zm7BAliEY?invite=cr-MSw1RG4sMzM2NzY3Njgx&v=26"),
        new Record("EndGamer7896", "473", "7/10", "32 points", "https://medal.tv/games/geometry-dash/clips/mZxhtUsG6waz-asGO?invite=cr-MSx1Mm0sNTk1MDYwNDc2"),
        new Record("probro675", "225", "3/10", "Low Silver (Swap with endgamer takes dihh)", "https://youtu.be/0PDZ5xUYKzo?is=QkqPEItml7C1Ys-e"),
        new Record("Taublix", "79", "7/10", "harder than i hate this gamemode easier than Glass Castle", "https://www.youtube.com/watch?v=V7xLVnFgETA"),
        new Record("ariopc", "163", "8/10", "N/A", "https://medal.tv/games/geometry-dash/clips/n3N2sH4FVnKLRs2H-?invite=cr-MSxZOFYsMjE3MzQ4MzIz&v=16"),
        new Record("Tomatokatsup", "N/A", "N/A", "N/A", "https://youtu.be/-GAuym5AMBk"),
        new Record("zis08", "552", "8/10", "idk", "https://medal.tv/games/geometry-dash/clips/n3UV2ZKHnbRsqhmT8?invite=cr-MSxjWWgsMTY4ODkwOTU4"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/QFfGLAIuU4M?si=WhrFEYNJ0bMORMUL"),
        new Record("Nuridint3b", "205", "N/A", "N/A", "https://youtu.be/8t_y4-C8c5g?is=kY5I8moqzxp_q-cF"),
        new Record("RustyGD25", "107", "6/10", "25 points", "https://www.youtube.com/watch?v=PfHm2yE6Y5k"),
    ], false),
    new Level("Nuclear Facility", 25.82, 13, "Silver", "144385753", "Small Skips", ["Taublix"], "Taublix", "https://youtube.com/embed/d4w3vBZwEkA", [
        new Record("Taublix", "N/A", "9/10", "idk, high bronze, maybe low silver, it's kinda short", "https://www.youtube.com/watch?v=d4w3vBZwEkA"),
        new Record("Tomatokatsup", "N/A", "N/A", "N/A", "https://youtu.be/-GAuym5AMBk"),
        new Record("ariopc", "160", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/n4DsbW6xUcC79RT_O?invite=cr-MSxXRGgsMjE3MzQ4MzIz"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/QFfGLAIuU4M?si=WhrFEYNJ0bMORMUL"),
        new Record("EndGamer7896", "329", "8/10", "14.95", "https://medal.tv/games/geometry-dash/clips/n5bM7ajLFdzoZ6Fn-?invite=cr-MSw0c2EsNTk1MDYwNDc2"),
        new Record("probro675", "179", "N/A", "N/A", "https://youtu.be/jr9rC3BDCFM?is=fNLbnURufy8LUbxj"),
        new Record("Nuridint3b", "135", "N/A", "N/A", "https://youtu.be/aeTaSExWXm4?is=SSXwL_UZlSh_SeV5"),
        new Record("JaggerC12", "41", "8/10", "bronze", "https://youtu.be/TyXVYfG9EEc"),
        new Record("RustyGD25", "205", "6.5/10", "mid silver", "https://youtu.be/RAefoEnAQoc"),
    ], false),
    new Level("Joyous Robot", 25.68, 8, "Silver", "143898096", "Small Skips", ["Tomatokatsup"], "Tomatokatsup", "https://www.youtube.com/embed/uaRDkixIVDY", [
        new Record("Tomatokatsup", "90", "8/10", "bronze", "https://youtu.be/uaRDkixIVDY"),
        new Record("Taublix", "125", "5/10", "harder than frostworks easier than Dry Bot", "https://www.youtube.com/watch?v=kqUd0KjJjWU"),
        new Record("IceCubed88", "253", "N/A", "easier than niche gimmick abuse", "https://youtu.be/tcpx4YQIcqw"),
        new Record("EndGamer7896", "237", "6/10", "25.1 list points", "https://medal.tv/games/geometry-dash/clips/n2kRp0sHV2FxZEzvy?invite=cr-MSxzMXEsNTk1MDYwNDc2"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/9yOn65G8MAM"),
        new Record("probro675", "162", "N/A", "N/A", "https://youtu.be/9-TbuBtE9zw?is=gZNPiVWiHCL3ECyl"),
        new Record("Nuridint3b", "60", "N/A", "N/A", "https://youtu.be/aeTaSExWXm4?is=SSXwL_UZlSh_SeV5"),
        new Record("zis08", "N/A", "N/A", "154 ruby", "https://medal.tv/games/geometry-dash/clips/n6wgIoxQTsUUnBZ06?invite=cr-MSxqNVcsMTY4ODkwOTU4"),
        new Record("RustyGD25", "182", "1/10", "mid silver", "https://youtu.be/RAefoEnAQoc"),
    ], "/nongs/Joyous Robot, looping the RCL.mp3"),
    new Level("Unnamed 41", 25.32, 3, "Silver", "136714964", "Any Route", ["XanderGMDD"], "XanderGMDD", "https://medal.tv/games/geometry-dash/clip/mopJfH506wMrq0VC-?invite=cr-MSxQdkMsMzM2NzY3Njgx", [
        new Record("XanderGMDD", "N/A", "N/A", "30-33 points", "https://medal.tv/games/geometry-dash/clips/mopJfH506wMrq0VC-?invite=cr-MSxQdkMsMzM2NzY3Njgx"),
        new Record("Farlayy", "N/A", "N/A", "N/A", ""),
        new Record("sourceerrortxt", "N/A", "N/A", "N/A", "https://youtu.be/6GoeHlz11YU"),
        new Record("Zannoz", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/moJTHJ2C2fLHhyJif/spok?invite=cr-MSxEcTksNTM1NDU2MDU0LA"),
        new Record("EndGamer7896", "N/A", "N/A", "Top Bronze", "https://medal.tv/games/geometry-dash/clips/mqPPqqjXh_tZBolRT?invite=cr-MSxpZGssNTk1MDYwNDc2"),
        new Record("placek3", "N/A", "N/A", "N/A", "https://www.youtube.com/watch?v=8CEpN01ZWPc"),
        new Record("zeroskills", "N/A", "N/A", "Good as is", ""),
        new Record("zis08", "N/A", "N/A", "Mid Bronze", "https://medal.tv/games/geometry-dash/clips/msqwGj3fd9pNrqyWe?invite=cr-MSwxZDYsMTY4ODkwOTU4"),
        new Record("ariopc", "477", "0/10", "Low-mid silver maybe", "https://medal.tv/games/geometry-dash/clips/mWPXk8UlJDPkCA8Dw?invite=cr-MSw4aUUsMjE3MzQ4MzIz&v=24"),
        new Record("NatanGMDD", "125", "4/10", "24 list points", "https://youtu.be/Yph48xGFKMU"),
        new Record("probro675", "353", "1/10", "Fine", "https://youtu.be/EDROykZm0_Q?is=SfGexVHiuv2YlUm0"),
        new Record("Tomatokatsup", "N/A", "N/A", "N/A", "https://youtu.be/-GAuym5AMBk"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/QFfGLAIuU4M?si=WhrFEYNJ0bMORMUL"),
        new Record("Nuridint3b", "649", "N/A", "N/A", "https://youtu.be/8t_y4-C8c5g?is=kY5I8moqzxp_q-cF"),
    ], false),

    /*
    .########..########...#######..##....##.########.########
    .##.....##.##.....##.##.....##.###...##......##..##......
    .##.....##.##.....##.##.....##.####..##.....##...##......
    .########..########..##.....##.##.##.##....##....######..
    .##.....##.##...##...##.....##.##..####...##.....##......
    .##.....##.##....##..##.....##.##...###..##......##......
    .########..##.....##..#######..##....##.########.########
    */
    new Level("Gun Wound", 24.64, 18, "Bronze", "143944715", "Verification Route", ["barts0gd"], "Taublix", "https://youtube.com/embed/tQwezEiBbNU", [
        new Record("Taublix", "71", "10/10", "Harder than Code Red easier than Glass Castle", "https://www.youtube.com/watch?v=tQwezEiBbNU"),
        new Record("IceCubed88", "858", "N/A", "Good where it is", "https://youtu.be/tcpx4YQIcqw"),
        new Record("EndGamer7896", "464", "9/10", "30.21 points", "https://medal.tv/games/geometry-dash/clips/n2euM2556HlTlAQEl?invite=cr-MSw5ZmwsNTk1MDYwNDc2"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/9yOn65G8MAM"),
        new Record("ariopc", "163", "8/10", "N/A", "https://medal.tv/games/geometry-dash/clips/n1PvwEUdty15L7h2w?invite=cr-MSxOVUgsMjE3MzQ4MzIz&v=16"),
        new Record("Tomatokatsup", "N/A", "N/A", "N/A", "https://youtu.be/-GAuym5AMBk"),
        new Record("zis08", "N/A", "4/10", "idk", "https://medal.tv/games/geometry-dash/clips/n4Teen0bWattJFRdL?invite=cr-MSxpanMsMTY4ODkwOTU4&v=32"),
        new Record("probro675", "190", "N/A", "Entry Silver (underrated)", "https://youtu.be/9-TbuBtE9zw?is=gZNPiVWiHCL3ECyl"),
        new Record("Nuridint3b", "161", "N/A", "N/A", "https://youtu.be/aeTaSExWXm4?is=SSXwL_UZlSh_SeV5"),
        new Record("RustyGD25", "48", "7.5/10", "high bronze", "https://youtu.be/RAefoEnAQoc"),
    ], "/nongs/BOY IS A GUN, Gun Wound.mp3"),
    new Level("Dry Bot", 24.6, 4, "Bronze", "141195861", "Any Route", ["EndGamer7896"], "EndGamer7896", "https://medal.tv/games/geometry-dash/clip/mLRLKP6QpVC65O2Jp?invite=cr-MSw3b3QsNTk1MDYwNDc2", [
        new Record("EndGamer7896", "460", "7/10", "Low Silver, 26 points", "https://medal.tv/games/geometry-dash/clips/mLRLKP6QpVC65O2Jp?invite=cr-MSw3b3QsNTk1MDYwNDc2"),
        new Record("Monkeyboy21", "279", "7/10", "Good where its at", "https://medal.tv/games/geometry-dash/clips/mPLSy2IGF0pfVp6KK?invite=cr-MSx6NDUsMTk0NjAyNjk3&v=30"),
        new Record("Taublix", "135", "7/10", "harder than City thing, easier than im crine", "https://www.youtube.com/watch?v=hn9YHNNvAJc"),
        new Record("zis08", "243", "2/10", "High Bronze", "https://medal.tv/games/geometry-dash/clips/mW4eQ0LJvmRNEle5Y?invite=cr-MSw3RTcsMTY4ODkwOTU4&v=21"),
        new Record("placek3", "287", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mYrmeQIQrtyb64SZF?invite=cr-MSxIdUksNTk0ODYzMTcx&v=20"),
        new Record("ariopc", "462", "3.5/10", "Harder than unnamed 41, easier than Robopolis V2", "https://medal.tv/games/geometry-dash/clips/mXOH3RCntfojKa-u1?invite=cr-MSxXQUksMjE3MzQ4MzIz&v=35"),
        new Record("probro675", "343", "3/10", "Fine", "https://youtu.be/QoemgbVtj4U?is=opik8y8MuClTfQEE"),
        new Record("Tomatokatsup", "N/A", "N/A", "N/A", "https://youtu.be/-GAuym5AMBk"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/QFfGLAIuU4M?si=WhrFEYNJ0bMORMUL"),
        new Record("RustyGD25", "294", "2/10", "17.9 points", "https://www.youtube.com/watch?v=VAiK7vUUe-g"),
        new Record("Nuridint3b", "347", "N/A", "N/A", "https://youtu.be/aeTaSExWXm4?is=SSXwL_UZlSh_SeV5"),
        new Record("LightShadow5", "N/A", "3.5/10", "N/A", "https://youtu.be/m5KSgM8XeCU?is=IgZu7vQ-Ys1dkgSm"),
    ], false),
    new Level("City thing", 24.56, 7, "Bronze", "141404949", "Any Route", ["TheUnoKing9"], "TheUnoKing9", "https://youtube.com/embed/KnF_EdaGUjA", [
        new Record("TheUnoKing9", "532", "N/A", "Low Silver/High Bronze", "https://youtu.be/KnF_EdaGUjA"),
        new Record("Komically", "149", "5/10", "Good as is", "https://youtu.be/sTdSRIej5Rw"),
        new Record("probro675", "204", "6.5/10", "35.5 points", "https://youtu.be/90TVOy8ZGUs?si=7wIPaAsjCiQccCC7"),
        new Record("XanderGMDD", "193", "4/10", "27 points", "https://medal.tv/games/geometry-dash/clips/mOgA7XYGlQ_hkS_0S?invite=cr-MSxpa1YsMzM2NzY3Njgx&v=19"),
        new Record("EndGamer7896", "201", "6/10", "20 points", "https://medal.tv/games/geometry-dash/clips/mOp4LQQUghG7Hmp_7?invite=cr-MSw1NmEsNTk1MDYwNDc2"),
        new Record("Taublix", "94", "9/10", "accurate probably", "https://www.youtube.com/watch?v=g0JAUOKs-Sc"),
        new Record("zis08", "124", "7/10", "Mid Bronze", "https://medal.tv/games/geometry-dash/clips/mW4nBSd2eU_XWdtKf?invite=cr-MSxGeVIsMTY4ODkwOTU4&v=18"),
        new Record("ariopc", "383", "5/10", "should not be placed below Monochrome", "https://medal.tv/games/geometry-dash/clips/mWx1si5B9Vnu27ccf?invite=cr-MSxJekssMjE3MzQ4MzIz&v=21"),
        new Record("placek3", "66", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mYraFgM08gZAXFnqZ?invite=cr-MSxBZTIsNTk0ODYzMTcx&v=16"),
        new Record("NatanGMDD", "N/A", "5.5/10", "27 points", "https://youtube.com/watch?v=OgW6bvTqzJk"),
        new Record("Tomatokatsup", "158", "7/10", "N/A", "https://youtu.be/syOCH1GX9bk"),
        new Record("IceCubed88", "503", "N/A", "good where it is", "https://youtu.be/tcpx4YQIcqw"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/9yOn65G8MAM"),
        new Record("RustyGD25", "136", "5/10", "25.2 points", "https://www.youtube.com/watch?v=VAiK7vUUe-g"),
        new Record("Nuridint3b", "236", "N/A", "N/A", "https://youtu.be/aeTaSExWXm4?is=SSXwL_UZlSh_SeV5")
    ], false),
    new Level("zis09 challeng", 24.34, 1, "Bronze", "143894384", "Verification Route", ["HenryDenry"], "HenryDenry", "https://youtube.com/embed/VUYPBTHyTeo?is=V8GdPicmfsMFv3ko", [
        new Record("HenryDenry", "N/A", "N/A", "Mid bronze?", "https://youtube.com/embed/VUYPBTHyTeo?is=V8GdPicmfsMFv3ko"),
        new Record("Taublix", "180", "3/10", "fine where it is i guess", "https://www.youtube.com/watch?v=kSogZtuTN8Y"),
        new Record("IceCubed88", "405", "N/A", "N/A", "https://youtu.be/3gtwxOLCQ74"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/9yOn65G8MAM"),
        new Record("Tomatokatsup", "N/A", "N/A", "N/A", "https://youtu.be/-GAuym5AMBk"),
        new Record("zis08", "634", "10/10", "idk", "https://medal.tv/games/geometry-dash/clips/n4SR7tTAiaB_S6TGF?invite=cr-MSxHazMsMTY4ODkwOTU4&v=14"),
        new Record("probro675", "262", "N/A", "N/A", "https://youtu.be/jr9rC3BDCFM?is=fNLbnURufy8LUbxj"),
        new Record("EndGamer7896", "99", "8/10", "20.17 points", "https://medal.tv/games/geometry-dash/clips/n6xx0BQJbuNrn4_X0?invite=cr-MSw1c2osNTk1MDYwNDc2"),
        new Record("Nuridint3b", "568", "N/A", "N/A", "https://youtu.be/aeTaSExWXm4?is=SSXwL_UZlSh_SeV5"),
        new Record("RustyGD25", "180", "1/10", "23 ponints", "https://www.youtube.com/watch?v=bdCigmwnPd0"),
    ], false),
    new Level("For The Taking", 24.14, 13, "Bronze", "145544415", "Any Route", ["probro675"], "probro675", "https://www.youtube.com/embed/28i5xPSddhw?is=mabhgPAfICQzMJdn", [
        new Record("probro675", "18", "7/10", "High Bronze", "https://www.youtube.com/watch?v=28i5xPSddhw?is=mabhgPAfICQzMJdn"),
        new Record("Taublix", "48", "9.5/10", "15 points", "https://www.youtube.com/watch?v=A3ASUbUptns"),
        new Record("Nuridint3b", "244", "N/A", "N/A", "https://youtu.be/-6NI_d4GTx8?si=EvH2f4eTlhU8_hZ0"),
        new Record("EndGamer7896", "205", "8/10", "31.54 points", "https://medal.tv/games/geometry-dash/clips/ncyXUqVV3RbSuGmLC?invite=cr-MSxXdmIsNTk1MDYwNDc2"),
        new Record("RustyGD25", "112", "6.5/10", "low silver", "https://youtu.be/RAefoEnAQoc"),
    ], false),
    new Level("looping the RCL", 23.68, 12, "Bronze", "147554644", "Verification Route", ["Nuridint3b"], "Nuridint3b", "https://youtube.com/embed/lKhRH1xjq2Q?is=Es0EVI37NI5w-o8W", [
        new Record("Nuridint3b", "498", "6/10", "like mid bronze", "https://youtube.com/embed/lKhRH1xjq2Q?is=Es0EVI37NI5w-o8W"),
        new Record("Taublix", "127", "9/10", "21 points", "https://www.youtube.com/watch?v=_VVA3-hoBa8")
    ], "/nongs/Joyous Robot, looping the RCL.mp3"),
    new Level("Hey", 23.2, 7, "Bronze", "143579023", "Any Route", ["Seedskyy73"], "Seedskyy73", "https://medal.tv/games/geometry-dash/clip/mZMx8islcbGhmWuTp?invite=cr-MSx4dGcsNTI1NzU2MjU4", [
        new Record("Seedskyy73", "156", "N/A", "low-mid bronze", "https://medal.tv/games/geometry-dash/clips/mZMx8islcbGhmWuTp?invite=cr-MSx4dGcsNTI1NzU2MjU4"),
        new Record("Tomatokatsup", "333", "7/10", "N/A", "https://youtu.be/syOCH1GX9bk"),
        new Record("EndGamer7896", "331", "2/10", "26.25 list points", "https://medal.tv/games/geometry-dash/clips/n0tfDXQ8tSObr4zPZ?invite=cr-MSxtZW8sNTk1MDYwNDc2"),
        new Record("IceCubed88", "705", "N/A", "good where it is", "https://youtu.be/3gtwxOLCQ74"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/9yOn65G8MAM"),
        new Record("ariopc", "279", "3/10", "https://medal.tv/games/geometry-dash/clips/n3MUMXmMEQOGKHkw8?invite=cr-MSxlNG4sMjE3MzQ4MzIz&v=22"),
        new Record("Taublix", "36", "7/10", "Harder than Copper Alloy easier than lowk ima milk", "https://www.youtube.com/watch?v=9LG8oOSpkD8"),
        new Record("probro675", "166", "N/A", "N/A", "https://youtu.be/jr9rC3BDCFM?is=fNLbnURufy8LUbxj"),
        new Record("Nuridint3b", "125", "N/A", "N/A", "https://youtu.be/aeTaSExWXm4?is=SSXwL_UZlSh_SeV5"),
        new Record("zis08", "N/A", "1/10", "new hard", "https://medal.tv/games/geometry-dash/clips/n6wCZ3sxEwTdu1Dsc?invite=cr-MSxtbkIsMTY4ODkwOTU4"),
        new Record("RustyGD25", "114", "7/10", "24", "https://www.youtube.com/watch?v=bdCigmwnPd0"),
    ], "/nongs/Hey.mp3"),
    new Level("WRATH", 22.88, 8, "Bronze", "141258321", "Any Route", ["XanderGMDD", "EndGamer7896"], "EndGamer7896", "https://medal.tv/games/geometry-dash/clip/mN0PjxoYRgjJ2K0yq?invite=cr-MSxyODksNTk1MDYwNDc2", [
        new Record("EndGamer7896", "63", "7/10", "Mid Bronze, 15 points", "https://medal.tv/games/geometry-dash/clips/mN0PjxoYRgjJ2K0yq?invite=cr-MSxyODksNTk1MDYwNDc2"),
        new Record("XanderGMDD", "221", "2/10", "Harder than Code Red", "https://medal.tv/games/geometry-dash/clips/mNbXvba2pC4yN9ufd?invite=cr-MSxHQVQsMzM2NzY3Njgx&v=15"),
        new Record("Taublix", "137", "7/10", "High Bronze", "https://www.youtube.com/watch?v=peBEgDVJA14"),
        new Record("Komically", "462", "4/10", "Could go up a spot or two, but its fine", "https://youtu.be/MfwG1sm_tX0"),
        new Record("placek3", "175", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mYr1s9QqVQqvp17bm?invite=cr-MSxxU1gsNTk0ODYzMTcx&v=13"),
        new Record("Tomatokatsup", "256", "6/10", "N/A", "https://youtu.be/syOCH1GX9bk"),
        new Record("IceCubed88", "561", "N/A", "good where it is", "https://youtu.be/tcpx4YQIcqw"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/9yOn65G8MAM"),
        new Record("ariopc", "350", "5/10", "N/A", "https://medal.tv/games/geometry-dash/clips/n3MWq0z0DhfnOAhh4?invite=cr-MSxhc2YsMjE3MzQ4MzIz&v=23"),
        new Record("RustyGD25", "73", "3/10", "16.4 points", "https://www.youtube.com/watch?v=VAiK7vUUe-g"),
        new Record("probro675", "198", "N/A", "N/A", "https://youtu.be/jr9rC3BDCFM?is=fNLbnURufy8LUbxj"),
        new Record("Nuridint3b", "187", "N/A", "N/A", "https://youtu.be/aeTaSExWXm4?is=SSXwL_UZlSh_SeV5")
    ], false),
    new Level("WTFB", 22.83, 20, "Bronze", "143944534", "Any Route", ["Seedskyy73"], "Seedskyy73", "https://medal.tv/games/geometry-dash/clip/n1PiosJdNBumLOUvp?invite=cr-MSwxdXIsNTI1NzU2MjU4", [
        new Record("Seedskyy73", "217", "8/10", "High bronze", "https://medal.tv/games/geometry-dash/clips/n1PiosJdNBumLOUvp?invite=cr-MSwxdXIsNTI1NzU2MjU4"),
        new Record("probro675", "172", "6/10", "Entry Silver", "https://youtu.be/_5jZM2diVU8?is=wGJ_600LKwY3qQTT"),
        new Record("IceCubed88", "268", "N/A", "good where it is", "https://youtu.be/tcpx4YQIcqw"),
        new Record("EndGamer7896", "325", "7/10", "22.24 list points", "https://medal.tv/games/geometry-dash/clips/n2gjLwfqQRpQodUUu?invite=c,r-MSx5dW4sNTk1MDYwNDc2"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/9yOn65G8MAM"),
        new Record("Taublix", "148", "7/10", "Harder than Gun Wound easier than City thing", "https://www.youtube.com/watch?v=0FYSMa6T4xk"),
        new Record("Tomatokatsup", "N/A", "N/A", "N/A", "https://youtu.be/-GAuym5AMBk"),
        new Record("zis08", "350", "8/10", "idk", "https://medal.tv/games/geometry-dash/clips/n4Tt9Jkh1jqhuB-b8?invite=cr-MSxGREssMTY4ODkwOTU4&v=15"),
        new Record("ariopc", "164", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/n3WO3BuhDsn6eA5s3?invite=cr-MSwwMWIsMjE3MzQ4MzIz"),
        new Record("Nuridint3b", "80", "N/A", "N/A", "https://youtu.be/aeTaSExWXm4?is=SSXwL_UZlSh_SeV5"),
        new Record("RustyGD25", "47", "8/10", "17 points", "https://www.youtube.com/watch?v=bdCigmwnPd0"),
    ], "/nongs/WTFB.mp3"),
    new Level("memory trials III", 22.2, 2, "Bronze", "130006849", "Verification Route", ["RustyGD25"], "RustyGD25", "https://www.youtube.com/embed/WgWp3szb6J0", [
        new Record("RustyGD25", "89", "6.5/10", "25 points", "https://www.youtube.com/watch?v=WgWp3szb6J0"),
        new Record("Taublix", "169", "9.5/10", "20 points", "https://www.youtube.com/watch?v=SDAM0h970bk"),
        new Record("Nuridint3b", "154", "N/A", "N/A", "https://youtu.be/DsH8ZohrTdk?si=ltXZMrBqTtcKdNsT"),
        new Record("EndGamer7896", "295", "0/10", "21.78 points", "https://medal.tv/games/geometry-dash/clips/ncTFBluxU03CE-vq9?invite=cr-MSxYZnQsNTk1MDYwNDc2"),
        new Record("Tomatokatsup", "N/A", "N/A", "N/A", "https://youtu.be/XZV4lCW1Dik?si=BL0TZ1zR06VfDEBL&t=662"),
        new Record("probro675", "179", "N/A", "N/A", "https://youtu.be/j6SxRgDpfkE?is=cP8JYTSVn3vIJE7y"),
    ], "/nongs/memory trials III.mp3"),
    new Level("WfX2", 22.1, 3, "Bronze", "137224701", "Any Route", ["EndGamer7896"], "EndGamer7896", "https://medal.tv/games/geometry-dash/clip/mqTuJ97zO3YjUbd3t?invite=cr-MSxMWUQsNTk1MDYwNDc2", [
        new Record("EndGamer7896", "N/A", "N/A", "22 points", "https://medal.tv/games/geometry-dash/clips/mqTuJ97zO3YjUbd3t?invite=cr-MSxMWUQsNTk1MDYwNDc2"),
        new Record("XanderGMDD", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mqUHAYsR4IGtJ-WoK?invite=cr-MSw4YXYsMzM2NzY3Njgx"),
        new Record("placek3", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mr4XuwQAzd-g6Loyr?invite=cr-MSxEQUUsNTk0ODYzMTcx&v=30"),
        new Record("tFluffy", "N/A", "N/A", "16-18 points", ""),
        new Record("zis08", "N/A", "N/A", "High Silver", "https://medal.tv/games/geometry-dash/clips/msqDaf3fjsClMC6fI?invite=cr-MSx6dmwsMTY4ODkwOTU4"),
        new Record("Farlayy", "N/A", "N/A", "N/A", ""),
        new Record("zeroskills", "N/A", "N/A", "Good as is", ""),
        new Record("ItzThiur", "102", "6/10", "High Bronze", "https://youtu.be/aOgIG0csZAY?si=HIg8jo933LF3zd1_"),
        new Record("IceCubed88", "887", "N/A", "Harder than Ape Rotation", "https://youtu.be/y2S_J-fK8fU?si=mVLdjKTB6mzObHe-"),
        new Record("Komically", "221", "4/10", "Swap with Ape Rotation", "https://www.youtube.com/watch?v=NY7ZYnOnMIo"),
        new Record("Tomatokatsup", "382", "0/10", "N/A", "https://youtu.be/syOCH1GX9bk"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/9yOn65G8MAM"),
        new Record("ariopc", "189", "2/10", "N/A", "https://medal.tv/games/geometry-dash/clips/n0ygeFHf0tPU0dn_r?invite=cr-MSxQcTUsMjE3MzQ4MzIz&v=18"),
        new Record("Taublix", "216", "4/10", "idk i kept avoiding this so my atts are inflated, but it's prolly placed fine", "https://www.youtube.com/watch?v=PWeRSEoVM2Y"),
        new Record("probro675", "210", "N/A", "N/A", "https://youtu.be/jr9rC3BDCFM?is=fNLbnURufy8LUbxj"),
        new Record("Nuridint3b", "793", "N/A", "N/A", "https://youtu.be/aeTaSExWXm4?is=SSXwL_UZlSh_SeV5")
    ], false),
    new Level("Hydra Speed", 21.93, 6, "Bronze", "143295001", "Verification Route", ["NatanGMDD"], "NatanGMDD", "https://youtube.com/embed/4sGhi-DhS1k", [
        new Record("NatanGMDD", "50", "8/10", "5.03 list points", "https://www.youtube.com/watch?v=4sGhi-DhS1k"),
        new Record("EndGamer7896", "609", "3/10", "Harder than frostworks", "https://medal.tv/games/geometry-dash/clips/mYaikC7vpSM5sVZoD?invite=cr-MSx2Z24sNTk1MDYwNDc2"),
        new Record("Taublix", "104", "8.5/10", "Harder than Glass Castle easier than Black Hole Sun", "https://www.youtube.com/watch?v=YwuailryZMg"),
        new Record("Tomatokatsup", "411", "5/10", "N/A", "https://youtu.be/syOCH1GX9bk"),
        new Record("IceCubed88", "631", "N/A", "good where it is", "https://youtu.be/3gtwxOLCQ74"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/9yOn65G8MAM"),
        new Record("ariopc", "250", "5/10", "N/A", "https://medal.tv/games/geometry-dash/clips/n0Bf8UWCyph6aVMd6?invite=cr-MSxLd3QsMjE3MzQ4MzIz&v=23"),
        new Record("RustyGD25", "69", "9.5/10", "14.7 Points", "https://www.youtube.com/watch?v=VAiK7vUUe-g"),
        new Record("probro675", "312", "N/A", "Entry silver", "https://youtu.be/jr9rC3BDCFM?is=fNLbnURufy8LUbxj"),
        new Record("Nuridint3b", "158", "N/A", "N/A", "https://youtu.be/aeTaSExWXm4?is=SSXwL_UZlSh_SeV5"),
        new Record("StumbonGD", "87", "10/10", "im new so idk gng", "https://youtu.be/w57YC--ZazU"),
    ], false),
    new Level("Endgamer never clear", 21.62, 1, "Bronze", "142351321", "Verification Route", ["ariopc"], "ariopc", "https://medal.tv/games/geometry-dash/clip/mSS6NpUo7LZQJt-hK?invite=cr-MSwzbW8sMjE3MzQ4MzIz&v=27", [
        new Record("ariopc", "166", "1/10", "High Bronze", "https://medal.tv/games/geometry-dash/clips/mSS6NpUo7LZQJt-hK?invite=cr-MSwzbW8sMjE3MzQ4MzIz&v=27"),
        new Record("EndGamer7896", "373", "0/10", "16 points", "https://medal.tv/games/geometry-dash/clips/mSSBc42WCETzhOePd?invite=cr-MSxhZnYsNTk1MDYwNDc2"),
        new Record("probro675", "143", "1/10", "18 points", "https://youtu.be/WrP3duEDWgE?si=7tjOl8FCXPDNgQro"),
        new Record("Komically", "468", "1/10", "24.99 points", "https://youtu.be/MfwG1sm_tX0"),
        new Record("placek3", "449", "0/10", "N/A", "https://medal.tv/games/geometry-dash/clips/mYqNKS1jaFbx7JISx?invite=cr-MSx3b3osNTk0ODYzMTcx"),
        new Record("Tomatokatsup", "506", "1/10", "N/A", "https://youtu.be/syOCH1GX9bk"),
        new Record("IceCubed88", "381", "N/A", "this should be at least a few spots lower on the list ngl", "https://youtu.be/3gtwxOLCQ74"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/9yOn65G8MAM"),
        new Record("Taublix", "160", "5/10", "fine probably", "https://www.youtube.com/watch?v=DZDhyxVgBdI"),
        new Record("Nuridint3b", "84", "N/A", "N/A", "https://youtu.be/aeTaSExWXm4?is=SSXwL_UZlSh_SeV5"),
    ], false),
    new Level("Black Hole Sun", 20.76, 2, "Bronze", "142647857", "Small Skips", ["xpfinker812"], "EndGamer7896", "https://medal.tv/games/geometry-dash/clip/mUcRtJAGaNgG1Lgx_?invite=cr-MSxqb3QsNTk1MDYwNDc2", [
        new Record("EndGamer7896", "460", "2/10", "Top Bronze, 21 points", "https://medal.tv/games/geometry-dash/clips/mUcRtJAGaNgG1Lgx_?invite=cr-MSxqb3QsNTk1MDYwNDc2"),
        new Record("ariopc", "221", "1/10", "fine", "https://medal.tv/games/geometry-dash/clips/mVKwFpC2fS8K1Nayd?invite=cr-MSx2NWYsMjE3MzQ4MzIz&v=35"),
        new Record("Komically", "149", "2/10", "Good where it is", "https://youtu.be/MfwG1sm_tX0"),
        new Record("Taublix", "122", "6/10", "harder than WRATH easier than Ape Rotation", "https://www.youtube.com/watch?v=c4f9A-63Jeo"),
        new Record("placek3", "84", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mYqVokW7Kgcv8BUsv?invite=cr-MSxEUDQsNTk0ODYzMTcx&v=25"),
        new Record("Tomatokatsup", "379", "0/10", "N/A", "https://youtu.be/syOCH1GX9bk"),
        new Record("IceCubed88", "505", "N/A", "harder than bot after ro but easier than glass castle and i hate this gamemode", "https://youtu.be/3gtwxOLCQ74"),
        new Record("XanderGMDD", "N/A", "N/A", "N/A", "https://youtu.be/zmuGAgykXQM"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/6Afd5TV7HNM"),
        new Record("probro675", "151", "N/A", "N/A", "https://youtu.be/jr9rC3BDCFM?is=fNLbnURufy8LUbxj"),
        new Record("Nuridint3b", "85", "N/A", "N/A", "https://youtu.be/aeTaSExWXm4?is=SSXwL_UZlSh_SeV5")
    ], "/nongs/Black Hole Sun.mp3"),
    new Level("vortrox no", 20.45, 5, "Bronze", "145600338", "Verification Route", ["StumbonGD"], "StumbonGD", "https://www.youtube.com/embed/s76TLJP8tcw", [
        new Record("StumbonGD", "21", "8/10", "bronze", "https://youtu.be/s76TLJP8tcw"),
        new Record("Taublix", "87", "7.5/10", "20 points", "https://www.youtube.com/watch?v=aX6xWQKJ2sc"),
        new Record("RustyGD25", "178", "2/10", "20 points", "https://www.youtube.com/watch?v=bdCigmwnPd0"),
        new Record("Nuridint3b", "200", "N/A", "N/A", "https://youtu.be/9pSLvEGbn7Y?is=RjVy1MaMnM-hBvzh"),
        new Record("EndGamer7896", "238", "5/10", "21.35 points", "https://medal.tv/games/geometry-dash/clips/neacYCkdyAstfDCii?invite=cr-MSx1ZGwsNTk1MDYwNDc2"),
        new Record("probro675", "285", "N/A", "N/A", "https://youtu.be/j6SxRgDpfkE?is=cP8JYTSVn3vIJE7y"),
    ], false),
    new Level("Ape Rotation", 20.36, 5, "Bronze", "136828286", "Any Route", ["EndGamer7896"], "XanderGMDD", "https://medal.tv/games/geometry-dash/clip/moTOrjARmqBTM0OkI?invite=cr-MSw0ZWcsMzM2NzY3Njgx", [
        new Record("XanderGMDD", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/moTOrjARmqBTM0OkI?invite=cr-MSw0ZWcsMzM2NzY3Njgx"),
        new Record("Farlayy", "N/A", "N/A", "N/A", ""),
        new Record("dcv4", "N/A", "N/A", "N/A", "https://youtu.be/yzFwKWOVcFs"),
        new Record("EndGamer7896", "N/A", "N/A", "20 points", "https://medal.tv/games/geometry-dash/clips/mqPfByJWqXIQJXelE?invite=cr-MSwxbWYsNTk1MDYwNDc2"),
        new Record("placek3", "N/A", "N/A", "N/A", "https://www.youtube.com/watch?v=8CEpN01ZWPc"),
        new Record("zeroskills", "N/A", "N/A", "Easier than frostworks", ""),
        new Record("zis08", "N/A", "N/A", "Top Bronze", "https://medal.tv/games/geometry-dash/clips/mrJuT1st9mrlYxaCj?invite=cr-MSxiY28sMTY4ODkwOTU4"),
        new Record("IceCubed88", "421", "N/A", "Easier than WfX2", "https://youtu.be/y2S_J-fK8fU?si=mVLdjKTB6mzObHe-"),
        new Record("Komically", "221", "6/10", "Swap with WfX2", "https://www.youtube.com/watch?v=NY7ZYnOnMIo"),
        new Record("Taublix", "134", "5/10", "Low Silver", "https://www.youtube.com/watch?v=QrOgqTfZJwE"),
        new Record("ariopc", "123", "8/10", "17 list points", "https://medal.tv/games/geometry-dash/clips/mXOgZ2rqJxgLJF9b5?invite=cr-MSxTTkosMjE3MzQ4MzIz&v=24"),
        new Record("Tomatokatsup", "170", "5/10", "N/A", "https://youtu.be/syOCH1GX9bk"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/9yOn65G8MAM"),
        new Record("RustyGD25", "162", "7/10", "14.5 points", "https://www.youtube.com/watch?v=VAiK7vUUe-g"),
        new Record("Nuridint3b", "522", "N/A", "N/A", "https://youtu.be/aeTaSExWXm4?is=SSXwL_UZlSh_SeV5"),
        new Record("probro675", "650", "N/A", "TOP OBSIDIAN 999 POINTS", "https://youtu.be/heXSEx_DIAM?is=1HYeEdCsIDWlkrR7"),
        new Record("K1nglert", "106", "7/10", "Idk my 1st level lol", "https://www.youtube.com/watch?v=YuQhWmwpC4U"),
    ], false),
    new Level("Forgotten Memories", 20.33, 15, "Bronze", "144169863", "Verification Route", ["ariopc"], "ariopc", "https://medal.tv/games/geometry-dash/clip/n37znw3ZkJ03Q423E?invite=cr-MSxicE4sMjE3MzQ4MzIz&v=36", [
        new Record("ariopc", "379", "9/10", "like high bronze maybe?", "https://medal.tv/games/geometry-dash/clips/n37znw3ZkJ03Q423E?invite=cr-MSxicE4sMjE3MzQ4MzIz&v=36"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/YYGUJ0vGpzc"),
        new Record("Taublix", "39", "8.5/10", "Harder than SLEEPLESS easier than Michishotgun", "https://www.youtube.com/watch?v=OdBRw94oebM"),
        new Record("Tomatokatsup", "N/A", "N/A", "N/A", "https://youtu.be/-GAuym5AMBk"),
        new Record("probro675", "131", "N/A", "N/A", "https://youtu.be/9-TbuBtE9zw?is=gZNPiVWiHCL3ECyl"),
        new Record("EndGamer7896", "259", "4/10", "22.7 points", "https://medal.tv/games/geometry-dash/clips/n3wks57NQTnl5UGBr?invite=cr-MSx6d2IsNTk1MDYwNDc2"),
        new Record("Nuridint3b", "131", "N/A", "N/A", "https://youtu.be/aeTaSExWXm4?is=SSXwL_UZlSh_SeV5"),
        new Record("RustyGD25", "68", "7/10", "low silver", "https://youtu.be/RAefoEnAQoc"),
    ], false),
    new Level("Bot After Ro", 20.21, 4, "Bronze", "141400992", "Any Route", ["EndGamer7896"], "EndGamer7896", "https://medal.tv/games/geometry-dash/clip/mME1SeNJ6wppTbBgY?invite=cr-MSxsZWYsNTk1MDYwNDc2", [
        new Record("EndGamer7896", "168", "6/10", "Low Silver, 28 points", "https://medal.tv/games/geometry-dash/clips/mME1SeNJ6wppTbBgY?invite=cr-MSxsZWYsNTk1MDYwNDc2"),
        new Record("Monkeyboy21", "111", "6/10", "Good where its at", "https://medal.tv/games/geometry-dash/clips/mPLWS03u0ztbnnkfB?invite=cr-MSxOWVQsMTk0NjAyNjk3&v=30"),
        new Record("probro675", "65", "8/10", "High Bronze / Entry Silver", "https://youtu.be/6_41MOYUcq0?si=g3xkTQY-zcH3_A9y"),
        new Record("Taublix", "41", "8/10", "High Bronze", "https://www.youtube.com/watch?v=bzjSDXh6BCY"),
        new Record("Komically", "61", "8/10", "Just under black hole sun", "https://youtu.be/MfwG1sm_tX0"),
        new Record("placek3", "113", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mYr7BEJ6dtO2qKlWw?invite=cr-MSw0M2QsNTk0ODYzMTcx&v=19"),
        new Record("Tomatokatsup", "120", "1/10", "N/A", "https://youtu.be/syOCH1GX9bk"),
        new Record("IceCubed88", "285", "N/A", "way easier than glass castle and i hate this gamemode", "https://youtu.be/3gtwxOLCQ74"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/9yOn65G8MAM"),
        new Record("ariopc", "171", "7/10", "N/A", "https://medal.tv/games/geometry-dash/clips/n0xVTejeA7TuIN5g6?invite=cr-MSwxMXEsMjE3MzQ4MzIz&v=28"),
        new Record("XanderGMDD", "N/A", "N/A", "N/A", "https://youtu.be/zmuGAgykXQM"),
        new Record("Nuridint3b", "262", "N/A", "N/A", "https://youtu.be/aeTaSExWXm4?is=SSXwL_UZlSh_SeV5"),
        new Record("RustyGD25", "74", "5/10", "high bronze", "https://youtu.be/RAefoEnAQoc"),
    ], false),
    new Level("Xanders Bday", 19.45, 15, "Bronze", "145426499", "Small Skips", ["barts0gd"], "Taublix", "https://youtube.com/embed/K8hekXC9vr4", [
        new Record("Taublix", "62", "9.5/10", "harder than Bot After Ro easier than Black Hole Sun", "https://www.youtube.com/watch?v=K8hekXC9vr4"),
        new Record("LightShadow5", "N/A", "6.5/10", "Bronze fs", "https://youtu.be/-VzVqHvZbbY?is=gioLMAvCM2X8CJni"),
        new Record("EndGamer7896", "354", "7.5/10", "20.17 points", "https://medal.tv/games/geometry-dash/clips/nbDtwyCi39TRhj-Bf?invite=cr-MSxpNFQsNTk1MDYwNDc2"),
        new Record("RustyGD25", "71", "7/10", "high bronze", "https://youtu.be/RAefoEnAQoc"),
        new Record("Nuridint3b", "257", "N/A", "N/A", "https://youtu.be/9pSLvEGbn7Y?is=RjVy1MaMnM-hBvzh"),
        new Record("probro675", "205", "N/A", "N/A", "https://youtu.be/j6SxRgDpfkE?is=cP8JYTSVn3vIJE7y"),
    ], false),
    new Level("i hate this gamemode", 18.72, 7, "Bronze", "142417158", "Verification Route", ["JaggerC12"], "JaggerC12", "https://youtube.com/embed/vFp0R1lZTwk", [
        new Record("JaggerC12", "111", "8/10", "harder than Robot On Track easier than Robogeist", "https://www.youtube.com/watch?v=vFp0R1lZTwk"),
        new Record("Taublix", "96", "7.5/10", "harder than Copper Alloy easier than Code Red", "https://www.youtube.com/watch?v=CUyPZ2k86SM"),
        new Record("EndGamer7896", "163", "6/10", "Harder than City thing", "https://medal.tv/games/geometry-dash/clips/mZtzvpUWnH9r1woB6?invite=cr-MSw5bGwsNTk1MDYwNDc2"),
        new Record("probro675", "196", "4/10", "N/A", "https://youtu.be/U3QErASdvQg?is=wOZafagE3MkKmlu6"),
        new Record("Tomatokatsup", "136", "0/10", "N/A", "https://youtu.be/syOCH1GX9bk"),
        new Record("IceCubed88", "677", "N/A", "good where it is", "https://youtu.be/vztzqKOKQ40"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/9yOn65G8MAM"),
        new Record("zis08", "299", "8/10", "8/10", "https://medal.tv/games/geometry-dash/clips/n33z2ShexjdqslZgp?invite=cr-MSxPa3MsMTY4ODkwOTU4"),
        new Record("ariopc", "120", "6/10", "N/A", "https://medal.tv/games/geometry-dash/clips/n0xNEil18JCu2jd30?invite=cr-MSxMT2MsMjE3MzQ4MzIz&v=17"),
        new Record("Nuridint3b", "217", "N/A", "N/A", "https://youtu.be/aeTaSExWXm4?is=SSXwL_UZlSh_SeV5"),
        new Record("RustyGD25", "153", "7.5/10", "Low silver", "https://youtu.be/RAefoEnAQoc"),
    ], false),
    new Level("Sigma balls", 18.59, 4, "Bronze", "145978250", "Verification Route", ["probro675"], "probro675", "https://www.youtube.com/embed/dBwF1pIwgb4?is=TpbdCR7zUCEn541T", [
        new Record("probro675", "96", "1/10", "Top Bronze", "https://www.youtube.com/watch?v=dBwF1pIwgb4?is=TpbdCR7zUCEn541T"),
        new Record("Taublix", "43", "7/10", "16 points", "https://www.youtube.com/watch?v=aX6xWQKJ2sc"),
        new Record("RustyGD25", "203", "6.5/10", "18 points", "https://www.youtube.com/watch?v=bdCigmwnPd0"),
        new Record("Nuridint3b", "159", "N/A", "N/A", "https://youtu.be/9pSLvEGbn7Y?is=RjVy1MaMnM-hBvzh"),
        new Record("EndGamer7896", "178", "3/10", "17.87 points", "https://medal.tv/games/geometry-dash/clips/ndQJrSAY3Osj_Suvv?invite=cr-MSxJSFUsNTk1MDYwNDc2"),
    ], false),
    new Level("Glass Castle", 18.58, 8, "Bronze", "136826420", "Any Route", ["XanderGMDD"], "XanderGMDD", "https://medal.tv/games/geometry-dash/clip/moSGRT8hdQ483IsCG?invite=cr-MSw0Uk0sMzM2NzY3Njgx", [
        new Record("XanderGMDD", "287", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/moSGRT8hdQ483IsCG?invite=cr-MSw0Uk0sMzM2NzY3Njgx"),
        new Record("Farlayy", "N/A", "N/A", "N/A", ""),
        new Record("sourceerrortxt", "N/A", "N/A", "N/A", "https://youtu.be/RNJCFuXXAdE"),
        new Record("EndGamer7896", "N/A", "N/A", "13.5 points", "https://medal.tv/games/geometry-dash/clips/mqPK8i1fwkDWSVFrq?invite=cr-MSx2bmMsNTk1MDYwNDc2"),
        new Record("placek3", "N/A", "N/A", "N/A", "https://www.youtube.com/watch?v=8CEpN01ZWPc"),
        new Record("zeroskills", "N/A", "N/A", "Easier than SHM RCL 55xH", ""),
        new Record("zis08", "N/A", "N/A", "Low Silver", "https://medal.tv/games/geometry-dash/clips/msoN3uL91Va4O-Idl?invite=cr-MSxpcmksMTY4ODkwOTU4"),
        new Record("probro675", "301", "3/10", "High Bronze, 18 points", "https://youtu.be/xJl2DmygFB0?si=hyWMaLRkyzpGI2Ay"),
        new Record("Taublix", "104", "9/10", "placed fine", "https://www.youtube.com/watch?v=7IZQVLbTWk4"),
        new Record("ariopc", "305", "7/10", "fine", "https://medal.tv/games/geometry-dash/clips/mWAp1W3TJD6t72OTx?invite=cr-MSwzdEgsMjE3MzQ4MzIz&v=20"),
        new Record("Komically", "258", "4/10", "Good where it is", "https://youtu.be/MfwG1sm_tX0"),
        new Record("Tomatokatsup", "124", "0/10", "N/A", "https://youtu.be/syOCH1GX9bk"),
        new Record("IceCubed88", "776", "N/A", "good where it is", "https://youtu.be/vztzqKOKQ40"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/9yOn65G8MAM"),
        new Record("RustyGD25", "73", "6/10", "17.4 points", "https://www.youtube.com/watch?v=VAiK7vUUe-g"),
        new Record("Nuridint3b", "134", "N/A", "N/A", "https://youtu.be/aeTaSExWXm4?is=SSXwL_UZlSh_SeV5"),
        new Record("Clockworkers", "1,703", "2/10", "mid - low tier bronze", "https://medal.tv/games/geometry-dash/clips/n7EQJ9kJpC6rN8WPI?invite=cr-MSxYUTEsNDE0ODI1MTMy"),
    ], false),
    new Level("Niche gimmick abuse", 16.94, 14, "Bronze", "143587352", "Small Skips", ["Seedskyy73"], "Seedskyy73", "https://medal.tv/games/geometry-dash/clip/mZOZ8d0GXhdJUh-QV?invite=cr-MSxscTUsNTI1NzU2MjU4", [
        new Record("Seedskyy73", "96", "N/A", "high bronze - mid gold", "https://medal.tv/games/geometry-dash/clips/mZOZ8d0GXhdJUh-QV?invite=cr-MSxscTUsNTI1NzU2MjU4"),
        new Record("Taublix", "24", "10/10", "Harder than Waiting for Xander, easier than out of time", "https://www.youtube.com/watch?v=OM_B_EUsDMI"),
        new Record("EndGamer7896", "126", "10/10", "18.94 list points", "https://medal.tv/games/geometry-dash/clips/mZUjuZRYyazjVkJrK?invite=cr-MSx0dG4sNTk1MDYwNDc2"),
        new Record("Tomatokatsup", "219", "6/10", "N/A", "https://youtu.be/syOCH1GX9bk"),
        new Record("IceCubed88", "212", "N/A", "good where it  is", "https://youtu.be/3gtwxOLCQ74"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/9yOn65G8MAM"),
        new Record("ariopc", "47", "9/10", "N/A", "https://medal.tv/games/geometry-dash/clips/n3MTwC4JOClpxa2_2?invite=cr-MSxubTUsMjE3MzQ4MzIz&v=22"),
        new Record("zis08", "133", "10/10", "easy", "https://medal.tv/games/geometry-dash/clips/n4U9swU7EzTuqZug2?invite=cr-MSxuTWssMTY4ODkwOTU4&v=17"),
        new Record("probro675", "67", "N/A", "N/A", "https://youtu.be/9-TbuBtE9zw?is=gZNPiVWiHCL3ECyl"),
        new Record("Nuridint3b", "98", "N/A", "N/A", "https://youtu.be/aeTaSExWXm4?is=SSXwL_UZlSh_SeV5"),
        new Record("Clockworkers", "477", "8/10", "first level beaten, deserves its current place", "https://medal.tv/games/geometry-dash/clips/n7hWAhZcCel6qAlFu?invite=cr-MSxwdHAsNDE0ODI1MTMy"),
        new Record("RustyGD25", "41", "8.5/10", "high bronze", "https://youtu.be/RAefoEnAQoc"),
    ], false),
    new Level("Answer", 15.21, 15, "Bronze", "144172404", "Any Route", ["Seedskyy73"], "Seedskyy73", "https://medal.tv/games/geometry-dash/clip/n38yuhbWJpqlwm4y-?invite=cr-MSx2bncsNTI1NzU2MjU4", [
        new Record("Seedskyy73", "116", "9/10", "high bronze", "https://medal.tv/games/geometry-dash/clips/n38yuhbWJpqlwm4y-?invite=cr-MSx2bncsNTI1NzU2MjU4"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/YYGUJ0vGpzc"),
        new Record("XanderGMDD", "N/A", "N/A", "N/A", "https://youtu.be/zmuGAgykXQM"),
        new Record("Tomatokatsup", "N/A", "N/A", "N/A", "https://youtu.be/-GAuym5AMBk"),
        new Record("Taublix", "64", "9.5/10", "placed fine", "https://www.youtube.com/watch?v=2OgcjKBd8xI"),
        new Record("ariopc", "109", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/n3SUFKym7WVbjhvu9?invite=cr-MSxMZmgsMjE3MzQ4MzIz"),
        new Record("EndGamer7896", "180", "9/10", "13.65 points", "https://medal.tv/games/geometry-dash/clips/n3vH65dLRH8uCBKEC?invite=cr-MSw3cWksNTk1MDYwNDc2"),
        new Record("probro675", "300", "N/A", "N/A", "https://youtu.be/jr9rC3BDCFM?is=fNLbnURufy8LUbxj"),
        new Record("Nuridint3b", "123", "N/A", "N/A", "https://youtu.be/aeTaSExWXm4?is=SSXwL_UZlSh_SeV5"),
        new Record("zis08", "183", "10/10", "idk", "https://medal.tv/games/geometry-dash/clips/n67VtL9iA-y_UDMdo?invite=cr-MSxqd3ksMTY4ODkwOTU4"),
        new Record("RustyGD25", "124", "6/10", "high bronze", "https://youtu.be/RAefoEnAQoc"),
    ], "nongs/Answer.mp3"),
    new Level("Gravity 3", 14.88, 2, "Bronze", "145243785", "Small Skips", ["zis08"], "zis08", "https://medal.tv/games/geometry-dash/clip/n9ouf7H6k9ojLSyi_?invite=cr-MSxubzksMTY4ODkwOTU4", [
        new Record("zis08", "330", "10/10", "idk", "https://medal.tv/games/geometry-dash/clips/n9ouf7H6k9ojLSyi_?invite=cr-MSxubzksMTY4ODkwOTU4"),
        new Record("Taublix", "52", "8.5/10", "15 points", "https://www.youtube.com/watch?v=58TXVUscxHM"),
        new Record("EndGamer7896", "177", "6.5/10", "8.53 points", "https://medal.tv/games/geometry-dash/clips/ndwfjaHaaiWWDMx1r?invite=cr-MSxLdVQsNTk1MDYwNDc2"),
        new Record("RustyGD25", "161", "2/10", "N/A", "https://youtu.be/RAefoEnAQoc"),
        new Record("Nuridint3b", "81", "N/A", "N/A", "https://youtu.be/9pSLvEGbn7Y?is=RjVy1MaMnM-hBvzh"),
        new Record("probro675", "65", "N/A", "N/A", "https://youtu.be/j6SxRgDpfkE?is=cP8JYTSVn3vIJE7y"),
    ], "/nongs/Gravity 3.mp3"),
    new Level("Code Red", 14.55, 6, "Bronze", "136724597", "Any Route", ["XanderGMDD"], "XanderGMDD", "https://medal.tv/games/geometry-dash/clip/moteytWTL6Ggwm_P1?invite=cr-MSw0QkQsMzM2NzY3Njgx", [
        new Record("XanderGMDD", "22", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/moteytWTL6Ggwm_P1?invite=cr-MSw0QkQsMzM2NzY3Njgx"),
        new Record("Farlayy", "N/A", "N/A", "N/A", ""),
        new Record("Zannoz", "N/A", "N/A", "N/A", "https://medal.tv/games/imported-clips/clips/moJvwYZLEl_wQK5le/spok?invite=cr-MSxpU1AsNTM1NDU2MDU0LA"),
        new Record("dcv4", "N/A", "N/A", "N/A", "https://youtu.be/yzFwKWOVcFs"),
        new Record("sourceerrortxt", "N/A", "N/A", "N/A", "https://youtu.be/bG4zLkFzwWA"),
        new Record("EndGamer7896", "N/A", "N/A", "17 points", "https://medal.tv/games/geometry-dash/clips/mqPhuvtATyccde6zp?invite=cr-MSx3ajYsNTk1MDYwNDc2"),
        new Record("placek3", "N/A", "N/A", "N/A", "https://www.youtube.com/watch?v=8CEpN01ZWPc"),
        new Record("zis08", "N/A", "N/A", "High Bronze", "https://medal.tv/games/geometry-dash/clips/mrIXom6Zo3YF-Ec8_?invite=cr-MSxsM3ksMTY4ODkwOTU4"),
        new Record("zeroskills", "N/A", "N/A", "Easier than Glass Castle", ""),
        new Record("ItzThiur", "48", "8/10", "Bronze Tier", "https://youtu.be/aOgIG0csZAY?si=HIg8jo933LF3zd1_"),
        new Record("IceCubed88", "142", "N/A", "Good as is", "https://youtu.be/y2S_J-fK8fU?si=mVLdjKTB6mzObHe-"),
        new Record("Komically", "144", "6/10", "Easier than Waiting for Xander", "https://www.youtube.com/watch?v=NY7ZYnOnMIo"),
        new Record("Monkeyboy21", "185", "5/10", "Good where its at", "https://medal.tv/games/geometry-dash/clips/mPLEGxkSUVNHmhBn3?invite=cr-MSxJcnUsMTk0NjAyNjk3&v=30"),
        new Record("probro675", "78", "7/10", "Mid Bronze, 13 points", "https://youtu.be/hYVeJ3_xdOg?si=ALikge9wtCzW4O6K"),
        new Record("ariopc", "182", "6/10", "N/A", "https://youtu.be/tAiTZhuYVqI?si=9wjo89N2pIzBv20A"),
        new Record("Taublix", "15", "9/10", "Mid-High Bronze", "https://www.youtube.com/watch?v=Ffjx22UWaNc"),
        new Record("sparked18", "236", "N/A", "good where it is", "https://youtu.be/W4diAeLIb1k"),
        new Record("NatanGMDD", "N/A", "8.5/10", "11.45 list points", "https://youtu.be/U8f61bbthFs"),
        new Record("Tomatokatsup", "142", "0/10", "N/A", "https://youtu.be/syOCH1GX9bk"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/9yOn65G8MAM"),
        new Record("RustyGD25", "87", "7/10", "8.1 points", "https://www.youtube.com/watch?v=VAiK7vUUe-g"),
        new Record("Nuridint3b", "61", "N/A", "N/A", "https://youtu.be/aeTaSExWXm4?is=SSXwL_UZlSh_SeV5"),
        new Record("LightShadow5", "N/A", "3.5/10", "N/A", "https://youtu.be/m5KSgM8XeCU?is=IgZu7vQ-Ys1dkgSm"),
    ], false),
    new Level("thinking like xander", 13.94, 8, "Bronze", "144680648", "Small Skips", ["ariopc"], "arioppc", "https://medal.tv/games/geometry-dash/clip/n62qx8TZPq7r3G8gF?invite=cr-MSxCbEosMjE3MzQ4MzIz", [
        new Record("ariopc", "192", "N/A", "mid bronze something something i dont know", "https://medal.tv/games/geometry-dash/clips/n62qx8TZPq7r3G8gF?invite=cr-MSxCbEosMjE3MzQ4MzIz"),
        new Record("Taublix", "70", "6/10", "Harder than Nuclear Facility easier than Ape Rotation", "https://www.youtube.com/watch?v=3mjx3TlQCnU"),
        new Record("EndGamer7896", "238", "6/10", "10.1 points", "https://medal.tv/games/geometry-dash/clips/n6xtWZNJJ-rHFXgun?invite=cr-MSx3d3ksNTk1MDYwNDc2"),
        new Record("Nuridint3b", "286", "N/A", "N/A", "https://youtu.be/aeTaSExWXm4?is=SSXwL_UZlSh_SeV5"),
        new Record("probro675", "167", "N/A", "N/A", "https://youtu.be/heXSEx_DIAM?is=1HYeEdCsIDWlkrR7"),
    ], false),
    new Level("LOOC", 13.44, 30, "Bronze", "143931953", "Any Route", ["barts0gd"], "Taublix", "https://youtube.com/embed/lVgMVBd8o94", [
        new Record("Taublix", "28", "9.5/10", "harder than Copper Alloy easier than lowk ima milk", "https://www.youtube.com/watch?v=lVgMVBd8o94"),
        new Record("probro675", "38", "8/10", "Low Bronze", "https://youtu.be/EvG1x6vBjoU?is=zz2gstwlE7gMNREL"),
        new Record("IceCubed88", "87", "N/A", "good where it is", "https://youtu.be/tcpx4YQIcqw"),
        new Record("EndGamer7896", "80", "9/10", "16.83 list points", "https://medal.tv/games/geometry-dash/clips/n2gmNZTKEC4z8otgz?invite=cr-MSx4ZHEsNTk1MDYwNDc2"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/9yOn65G8MAM"),
        new Record("zis08", "32", "9/10", "idk", "https://medal.tv/games/geometry-dash/clips/n33qH7VYyOuPsVlXe?invite=cr-MSx0ajksMTY4ODkwOTU4&v=12"),
        new Record("XanderGMDD", "N/A", "9/10", "N/A", "https://youtu.be/WvcBTEm-zQw"),
        new Record("Tomatokatsup", "N/A", "N/A", "N/A", "https://youtu.be/-GAuym5AMBk"),
        new Record("ariopc", "61", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/n3SKOTMq7GgIRhJtE?invite=cr-MSw3ZmYsMjE3MzQ4MzIz"),
        new Record("Nuridint3b", "23", "N/A", "N/A", "https://youtu.be/aeTaSExWXm4?is=SSXwL_UZlSh_SeV5"),
        new Record("LightShadow5", "N/A", "3.5/10", "N/A", "https://youtu.be/m5KSgM8XeCU?is=IgZu7vQ-Ys1dkgSm"),
        new Record("RustyGD25", "31", "6.5/10", "high bronze", "https://youtu.be/RAefoEnAQoc"),
    ], false),
    new Level("Glass Dihh", 13.25, 9, "Bronze", "145600721", "Any Route", ["probro675"], "probro675", "https://youtube.com/embed/d42Tv1WG190?is=fNEz_a7wBunPfP9j", [
        new Record("probro675", "75", "5/10", "Mid Bronze", "https://youtu.be/d42Tv1WG190?is=fNEz_a7wBunPfP9j"),
        new Record("LightShadow5", "N/A", "4.5/10", "Mid bronze", "https://youtu.be/AD6cXpeBBBA?is=yTHDwftSpM0mrI2-"),
        new Record("Taublix", "17", "8.5/10", "9 points", "https://www.youtube.com/watch?v=aX6xWQKJ2sc"),
        new Record("Nuridint3b", "132", "N/A", "N/A", "https://youtu.be/9pSLvEGbn7Y?is=RjVy1MaMnM-hBvzh"),
        new Record("EndGamer7896", "136", "8.5/10", "19 points", "https://medal.tv/games/geometry-dash/clips/ndRnZGd1xrLEsMtFP?invite=cr-MSwwNTUsNTk1MDYwNDc2"),
    ], false),
    new Level("BOY IS A GUN", 12.92, 8, "Bronze", "143823588", "Any Route", ["Seedskyy73"], "Seedskyy73", "https://medal.tv/games/geometry-dash/clip/n18aQEX8SqjqG7-uC?invite=cr-MSxpdnIsNTI1NzU2MjU4", [
        new Record("Seedskyy73", "32", "N/A", "low-mid bronze", "https://medal.tv/games/geometry-dash/clips/n18aQEX8SqjqG7-uC?invite=cr-MSxpdnIsNTI1NzU2MjU4"),
        new Record("Taublix", "18", "7.5/10", "Harder than Robogeist easier than Waiting for Xander", "https://www.youtube.com/watch?v=9LHOvyYxlzc"),
        new Record("barts0gd", "80", "5/10", "kinda underrated or SLEEPLESS is overrated", "https://medal.tv/games/geometry-dash/clips/n1NRRewQJSD8NPj3G?invite=cr-MSxYY20sNDExMTQ3ODI3&v=30"),
        new Record("EndGamer7896", "276", "3/10", "12.17 list points", "https://medal.tv/games/geometry-dash/clips/n1uiaub9mw4y8SWiT?invite=cr-MSxrZG8sNTk1MDYwNDc2"),
        new Record("IceCubed88", "92", "N/A", "good where it is, maybe slightly easier than sleepless", "https://youtu.be/vztzqKOKQ40"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/9yOn65G8MAM"),
        new Record("zis08", "154", "6/10", "idk", "https://medal.tv/games/geometry-dash/clips/n33lnRf65iT_zuyfD?invite=cr-MSxyTkksMTY4ODkwOTU4&v=25"),
        new Record("XanderGMDD", "N/A", "N/A", "N/A", "https://youtu.be/WvcBTEm-zQw"),
        new Record("Tomatokatsup", "N/A", "N/A", "N/A", "https://youtu.be/-GAuym5AMBk"),
        new Record("probro675", "62", "N/A", "N/A", "https://youtu.be/9-TbuBtE9zw?is=gZNPiVWiHCL3ECyl"),
        new Record("Nuridint3b", "33", "N/A", "N/A", "https://youtu.be/aeTaSExWXm4?is=SSXwL_UZlSh_SeV5"),
        new Record("LightShadow5", "N/A", "3.5/10", "N/A", "https://youtu.be/m5KSgM8XeCU?is=IgZu7vQ-Ys1dkgSm"),
    ], "/nongs/BOY IS A GUN, Gun Wound.mp3"),
    new Level("Copper Alloy", 12.54, 13, "Bronze", "136109854", "Any Route", ["sourceerrortxt"], "sourceerrortxt", "https://www.youtube.com/embed/VmPu-EKcZdA", [
        new Record("sourceerrortxt", "N/A", "N/A", "N/A", "https://www.youtube.com/watch?v=VmPu-EKcZdA"),
        new Record("XanderGMDD", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mnZAoJaXVRQShSpCM?invite=cr-MSw4c28sMzM2NzY3Njgx"),
        new Record("Zannoz", "N/A", "N/A", "N/A", "https://medal.tv/games/imported-clips/clips/moJvwYZLEl_wQK5le/spok?invite=cr-MSxpU1AsNTM1NDU2MDU0LA"),
        new Record("Farlayy", "N/A", "N/A", "N/A", ""),
        new Record("mmasterdog", "N/A", "N/A", "N/A", "https://youtu.be/5DY0effLG40"),
        new Record("dcv4", "N/A", "N/A", "N/A", "https://youtu.be/yzFwKWOVcFs"),
        new Record("EndGamer7896", "N/A", "N/A", "13 points", "https://medal.tv/games/geometry-dash/clips/mqPc3i12dOrLq0Ui9?invite=cr-MSx0Z3MsNTk1MDYwNDc2"),
        new Record("placek3", "N/A", "N/A", "N/A", "https://www.youtube.com/watch?v=8CEpN01ZWPc"),
        new Record("zis08", "N/A", "N/A", "Mid Bronze", "https://medal.tv/games/geometry-dash/clips/mrMtKZUOEnfkSMPM-?invite=cr-MSw1d1gsMTY4ODkwOTU4&v=16"),
        new Record("zeroskills", "N/A", "N/A", "Easier than SHM RCL 55xH", ""),
        new Record("tFluffy", "N/A", "N/A", "Good as is", ""),
        new Record("ItzThiur", "16", "7/10", "Easier than Code Red & Lowk ima milk", "https://youtu.be/aOgIG0csZAY?si=HIg8jo933LF3zd1_"),
        new Record("IceCubed88", "217", "N/A", "Good as is", "https://youtu.be/y2S_J-fK8fU?si=mVLdjKTB6mzObHe-"),
        new Record("Komically", "146", "8/10", "Good as is", "https://www.youtube.com/watch?v=NY7ZYnOnMIo"),
        new Record("probro675", "61", "8/10", "Mid Bronze", "https://youtu.be/zMJ_TWdBLLQ?si=QyY_KhWbRFAsfGlr"),
        new Record("Taublix", "34", "10/10", "Placed fine", "https://www.youtube.com/watch?v=GLu0Icesn0U"),
        new Record("sparked18", "112", "N/A", "good where it is at", "https://youtu.be/W4diAeLIb1k"),
        new Record("ariopc", "138", "7/10", "fine", " https://medal.tv/games/geometry-dash/clips/mTYLDsqXeQ6Z1hcW_?invite=cr-MSxMWWssMjE3MzQ4MzIz&v=20"),
        new Record("Tomatokatsup", "122", "2/10", "N/A", "https://youtu.be/syOCH1GX9bk"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/9yOn65G8MAM"),
        new Record("RustyGD25", "48", "6/10", "13.8", "https://www.youtube.com/watch?v=VAiK7vUUe-g"),
        new Record("Nuridint3b", "92", "N/A", "N/A", "https://youtu.be/aeTaSExWXm4?is=SSXwL_UZlSh_SeV5"),
        new Record("LightShadow5", "N/A", "3.5/10", "N/A", "https://youtu.be/m5KSgM8XeCU?is=IgZu7vQ-Ys1dkgSm"),
    ], false),
    new Level("lowk ima milk", 11.08, 8, "Bronze", "137206383", "Any Route", ["XanderGMDD"], "XanderGMDD", "https://medal.tv/games/geometry-dash/clip/mqNYtIqiHqWQ7WwEe?invite=cr-MSxDRHosMzM2NzY3Njgx", [
        new Record("XanderGMDD", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mqNYtIqiHqWQ7WwEe?invite=cr-MSxDRHosMzM2NzY3Njgx"),
        new Record("EndGamer7896", "N/A", "N/A", "14 points", "https://medal.tv/games/geometry-dash/clips/mqPeuiCgBLmQWJY6g?invite=cr-MSwwb2EsNTk1MDYwNDc2"),
        new Record("Farlayy", "N/A", "N/A", "N/A", ""),
        new Record("placek3", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mr57Q2iqNCWQfdUek?invite=cr-MSxZSWgsNTk0ODYzMTcx&v=14"),
        new Record("sourceerrortxt", "N/A", "N/A", "N/A", "https://youtu.be/F7HrO6RgNxs"),
        new Record("zis08", "N/A", "N/A", "Mid Bronze", "https://medal.tv/games/geometry-dash/clips/mrM33zicIh8IZaYFI?invite=cr-MSxxMXMsMTY4ODkwOTU4"),
        new Record("zeroskills", "N/A", "N/A", "Easier than SHM RCL 55xH", ""),
        new Record("ItzThiur", "188", "3/10", "High Bronze", "https://youtu.be/aOgIG0csZAY?si=HIg8jo933LF3zd1_"),
        new Record("Vinecke123", "533", "6.5/10", "Bronze Tier", "https://medal.tv/games/geometry-dash/clips/mvi2U0ON8erjREcrf?invite=cr-MSxyRXIsNDczMTIyMTcw&v=30"),
        new Record("IceCubed88", "172", "N/A", "Good as is", "https://youtu.be/y2S_J-fK8fU?si=mVLdjKTB6mzObHe-"),
        new Record("Komically", "249", "4/10", "Swap with Code Red", "https://www.youtube.com/watch?v=NY7ZYnOnMIo"),
        new Record("Taublix", "85", "7/10", "placed fine", "https://www.youtube.com/watch?v=pgaH10_xpSE"),
        new Record("probro675", "105", "3/10", "Low Bronze", "https://youtu.be/et9VqodpRps?is=Aq-kQddbukeh1iR5"),
        new Record("ariopc", "N/A", "8/10", "N/A", "https://medal.tv/games/geometry-dash/clips/mSTl6FUeQqVr8PsNA?invite=cr-MSxKUW4sMjE3MzQ4MzIz&v=21"),
        new Record("Tomatokatsup", "225", "1/10", "N/A", "https://youtu.be/syOCH1GX9bk"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/9yOn65G8MAM"),
        new Record("RustyGD25", "40", "6/10", "3.9 points", "https://www.youtube.com/watch?v=VAiK7vUUe-g"),
        new Record("Nuridint3b", "129", "N/A", "N/A", "https://youtu.be/aeTaSExWXm4?is=SSXwL_UZlSh_SeV5"),
        new Record("LightShadow5", "N/A", "3.5/10", "N/A", "https://youtu.be/m5KSgM8XeCU?is=IgZu7vQ-Ys1dkgSm"),
    ], false),
    new Level("L Upside Down L", 10.87, 4, "Bronze", "145517187", "Small Skips", ["pillow112"], "pillow112", "https://www.youtube.com/embed/xgQZndhOGN0", [
        new Record("pillow112", "18", "4/10", "idk bro like bronze probably", "https://www.youtube.com/embed/xgQZndhOGN0"),
        new Record("Taublix", "30", "7/10", "10 points", "https://www.youtube.com/watch?v=RkLRL7cCxa8"),
        new Record("Nuridint3b", "73", "N/A", "N/A", "https://youtu.be/-6NI_d4GTx8?si=EvH2f4eTlhU8_hZ0"),
        new Record("EndGamer7896", "116", "4/10", "10.1 points", "https://medal.tv/games/geometry-dash/clips/ncyzTUrxxmjXQ7xGQ?invite=cr-MSxHeUEsNTk1MDYwNDc2"),
        new Record("RustyGD25", "29", "5.5/10", "mid bronze", "https://youtu.be/RAefoEnAQoc"),
        new Record("probro675", "36", "N/A", "N/A", "https://youtu.be/j6SxRgDpfkE?is=cP8JYTSVn3vIJE7y"),
    ], false),
    new Level("Michishotgun", 10.76, 10, "Bronze", "143245745", "Small Skips", ["CyberCharger"], "EndGamer7896", "https://medal.tv/games/geometry-dash/clip/mXS7OW29aDBRzSwIY?invite=cr-MSxsMzQsNTk1MDYwNDc2", [
        new Record("EndGamer7896", "129", "2/10", "10.5 list points", "https://medal.tv/games/geometry-dash/clips/mXS7OW29aDBRzSwIY?invite=cr-MSxsMzQsNTk1MDYwNDc2"),
        new Record("probro675", "61", "3/10", "Low Bronze", "https://youtu.be/2lZYuZvI52o?is=MlSAcZRRm1kCufat"),
        new Record("placek3", "93", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mYqmMpsLPS-nA5X7n?invite=cr-MSxXckosNTk0ODYzMTcx&v=21"),
        new Record("Taublix", "61", "5/10", "harder than Copper Alloy easier than lowk ima milk", "https://www.youtube.com/watch?v=Sbh1QLmGqZQ"),
        new Record("ariopc", "N/A", "4/10", "N/A", "https://medal.tv/games/geometry-dash/clips/mYRCF4ji69R7TIE7P?invite=cr-MSxQQkEsMjE3MzQ4MzIz&v=28"),
        new Record("Tomatokatsup", "97", "0/10", "N/A", "https://youtu.be/syOCH1GX9bk"),
        new Record("IceCubed88", "74", "N/A", "easier than robogeist", "https://youtu.be/vztzqKOKQ40"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/9yOn65G8MAM"),
        new Record("zis08", "198", "0/10", "idk", "https://medal.tv/games/geometry-dash/clips/n32PhtWYh_WsJX98u?invite=cr-MSw2OXosMTY4ODkwOTU4"),
        new Record("XanderGMDD", "N/A", "N/A", "N/A", "https://youtu.be/WvcBTEm-zQw"),
        new Record("RustyGD25", "28", "7/10", "1.3 Points", "https://www.youtube.com/watch?v=VAiK7vUUe-g"),
        new Record("TheUnoKing9", "128", "7/10", "bronze easierthan Michiguns part in bloodbath", "https://youtu.be/mR8VVJaib7I"),
        new Record("Nuridint3b", "54", "N/A", "N/A", "https://youtu.be/aeTaSExWXm4?is=SSXwL_UZlSh_SeV5"),
        new Record("LightShadow5", "N/A", "3.5/10", "N/A", "https://youtu.be/m5KSgM8XeCU?is=IgZu7vQ-Ys1dkgSm"),
    ], false),
    new Level("Unknown Decoration", 10.74, 3, "Bronze", "144018453", "Any Route", ["xpfinker812"], "EndGamer7896", "https://medal.tv/games/geometry-dash/clip/n1TDVpLWYWUhKjeTx?invite=cr-MSw4ZnIsNTk1MDYwNDc2", [
        new Record("EndGamer7896", "159", "0/10", "11 points", "https://medal.tv/games/geometry-dash/clips/n1TDVpLWYWUhKjeTx?invite=cr-MSw4ZnIsNTk1MDYwNDc2"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/9yOn65G8MAM"),
        new Record("zis08", "205", "0/10", "idk", "https://medal.tv/games/geometry-dash/clips/n331KHhs6Egowkzig?invite=cr-MSxRdmQsMTY4ODkwOTU4&v=19"),
        new Record("XanderGMDD", "N/A", "N/A", "N/A", "https://youtu.be/WvcBTEm-zQw"),
        new Record("Taublix", "39", "4/10", "Harder than SLEEPLESS easier than Michishotgun", "https://youtu.be/QqN3ZtQ649I?si=QT04wUPYu-1VUgJU"),
        new Record("Tomatokatsup", "N/A", "N/A", "N/A", "https://youtu.be/-GAuym5AMBk"),
        new Record("probro675", "94", "N/A", "N/A", "https://youtu.be/9-TbuBtE9zw?is=gZNPiVWiHCL3ECyl"),
        new Record("Nuridint3b", "140", "N/A", "N/A", "https://youtu.be/aeTaSExWXm4?is=SSXwL_UZlSh_SeV5"),
        new Record("LightShadow5", "N/A", "3.5/10", "N/A", "https://youtu.be/m5KSgM8XeCU?is=IgZu7vQ-Ys1dkgSm"),
    ], false),
    new Level("random ahh level", 9.58, 1, "Bronze", "144209324", "Small Skips", ["Error2401"], "Error2401", "https://www.youtube.com/embed/ov2qQEV0lPo", [
        new Record("Error2401", "284", "6/10", "middle bronze prob", "https://www.youtube.com/embed/ov2qQEV0lPo"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/YYGUJ0vGpzc"),
        new Record("XanderGMDD", "N/A", "N/A", "N/A", "https://youtu.be/WvcBTEm-zQw"),
        new Record("Taublix", "10", "6/10", "harder than Robot On Track easier than greybot", "https://www.youtube.com/watch?v=n-6OZs1fBJs"),
        new Record("Tomatokatsup", "N/A", "N/A", "N/A", "https://youtu.be/-GAuym5AMBk"),
        new Record("probro675", "30", "N/A", "N/A", "https://youtu.be/9-TbuBtE9zw?is=gZNPiVWiHCL3ECyl"),
        new Record("EndGamer7896", "77", "1/10", "9.17 points", "https://medal.tv/games/geometry-dash/clips/n3vvyM3ZkbchHdvVD?invite=cr-MSx5aXIsNTk1MDYwNDc2"),
        new Record("Nuridint3b", "39", "N/A", "N/A", "https://youtu.be/aeTaSExWXm4?is=SSXwL_UZlSh_SeV5"),
        new Record("zis08", "64", "0/10", "idk", "https://medal.tv/games/geometry-dash/clips/n67NrjwG7G2cl56eb?invite=cr-MSx4MDUsMTY4ODkwOTU4 "),
        new Record("LightShadow5", "N/A", "3.5/10", "N/A", "https://youtu.be/m5KSgM8XeCU?is=IgZu7vQ-Ys1dkgSm"),
        new Record("RustyGD25", "9", "7/10", "mid bronze", "https://youtu.be/RAefoEnAQoc"),
    ], false),
    new Level("SLEEPLESS", 9.53, 27, "Bronze", "143448263", "Any Route", ["barts0gd"], "Taublix", "https://www.youtube.com/embed/FnhqYn7RZQs", [
        new Record("Taublix", "24", "9/10", "harder than Waiting For Xander easier than out of time", "https://www.youtube.com/watch?v=FnhqYn7RZQs"),
        new Record("EndGamer7896", "49", "7/10", "Easier than Copper Alloy", "https://medal.tv/games/geometry-dash/clips/mZteweGAWrBzExFc9?invite=cr-MSwwd3MsNTk1MDYwNDc2"),
        new Record("probro675", "39", "8/10", "Mid Bronze 13.5 point", "https://youtu.be/KgmAUCahxjk?is=vlU6tSDS9WRkGwXo"),
        new Record("Tomatokatsup", "25", "7/10", "N/A", "https://youtu.be/syOCH1GX9bk"),
        new Record("barts0gd", "7", "8/10", "idk seems good at current placement", "https://medal.tv/games/geometry-dash/clips/n1H9toiSiZoO31Me0?invite=cr-MSwyQnksNDExMTQ3ODI3&v=30"),
        new Record("IceCubed88", "105", "N/A", "good where it is", "https://youtu.be/vztzqKOKQ40"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/9yOn65G8MAM"),
        new Record("zis08", "43", "8/10", "idk", "https://medal.tv/games/geometry-dash/clips/n32F2MSnYdqt5mlRj?invite=cr-MSx2UmUsMTY4ODkwOTU4"),
        new Record("ariopc", "38", "3/10", "N/A", "https://medal.tv/games/geometry-dash/clips/n0xGmoVTU-wBxNM_V?invite=cr-MSxvQkQsMjE3MzQ4MzIz&v=21"),
        new Record("XanderGMDD", "N/A", "9/10", "N/A", "https://youtu.be/WvcBTEm-zQw"),
        new Record("Nuridint3b", "12", "N/A", "N/A", "https://youtu.be/aeTaSExWXm4?is=SSXwL_UZlSh_SeV5"),
        new Record("LightShadow5", "N/A", "3.5/10", "N/A", "https://youtu.be/m5KSgM8XeCU?is=IgZu7vQ-Ys1dkgSm"),
        new Record("RustyGD25", "10", "6.5/10", "mid bronze", "https://youtu.be/RAefoEnAQoc"),
    ], false),
    new Level("out of time", 9.46, 7, "Bronze", "136136798", "Any Route", ["sourceerrortxt"], "sourceerrortxt", "https://www.youtube.com/embed/HRYVy3vU168", [
        new Record("sourceerrortxt", "N/A", "N/A", "N/A", "https://youtu.be/HRYVy3vU168"),
        new Record("XanderGMDD", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mnZusR2vMnSiIQfRI?invite=cr-MSx5YmcsMzM2NzY3Njgx"),
        new Record("Farlayy", "N/A", "N/A", "N/A", ""),
        new Record("Zannoz", "N/A", "N/A", "N/A", "https://medal.tv/games/imported-clips/clips/moJvwYZLEl_wQK5le/spok?invite=cr-MSxpU1AsNTM1NDU2MDU0LA"),
        new Record("mmasterdog", "N/A", "N/A", "N/A", "https://youtu.be/5DY0effLG40"),
        new Record("dcv4", "N/A", "N/A", "N/A", "https://youtu.be/yzFwKWOVcFs"),
        new Record("EndGamer7896", "N/A", "N/A", "8 points", "https://medal.tv/games/geometry-dash/clips/mqP46wnCzBr43hfh4?invite=cr-MSx6OGgsNTk1MDYwNDc2"),
        new Record("placek3", "N/A", "N/A", "N/A", "https://www.youtube.com/watch?v=8CEpN01ZWPc"),
        new Record("tFluffy", "N/A", "N/A", "Good as is", ""),
        new Record("zis08", "N/A", "N/A", "Low Bronze", "https://medal.tv/games/geometry-dash/clips/mrN5lZQU4s4a1FvlS?invite=cr-MSx5b2YsMTY4ODkwOTU4"),
        new Record("zeroskills", "N/A", "N/A", "Fine where it is", ""),
        new Record("ItzThiur", "27", "6/10", "Bronze Tier", "https://youtu.be/aOgIG0csZAY?si=HIg8jo933LF3zd1_"),
        new Record("DexOnGD", "242", "2/10", "High Bronze", "https://youtu.be/vcjT4NF97Qo"),
        new Record("IceCubed88", "219", "N/A", "Harder than Waiting for Xander", "https://youtu.be/y2S_J-fK8fU?si=mVLdjKTB6mzObHe-"),
        new Record("Komically", "115", "7/10", "Good as is", "https://www.youtube.com/watch?v=NY7ZYnOnMIo"),
        new Record("TheUnoKing9", "95", "10/10", "Low Bronze", "https://www.youtube.com/watch?v=e-lLkfqDBFE"),
        new Record("Sp4c3m0nk3y", "273", "0/10", "Low Bronze", "https://youtu.be/zkjJqxyiflU"),
        new Record("TJEmpire", "N/A", "6/10", "High Bronze, 15-20 points", "https://youtu.be/mVgAX-XjKOY?si=6Elu5DbGmCB14TAU"),
        new Record("Error2401", "97", "5/10", "idk its pretty easy", "https://www.youtube.com/embed/U2oVcFmC3Y0"),
        new Record("Taublix", "79", "7.5/10", "harder than Code Red, easier than Glass Castle", "https://www.youtube.com/watch?v=BI06P9h0Opg"),
        new Record("ariopc", "82", "3/10", "fine", "https://medal.tv/games/geometry-dash/clips/mTZ7aHwMwSB6tI4V2?invite=cr-MSxHQWYsMjE3MzQ4MzIz&v=17"),
        new Record("sparked18", "143", "N/A", "good where its at", "https://youtu.be/W4diAeLIb1k"),
        new Record("probro675", "75", "4/10", "idk", "https://youtu.be/2_Q0r4T7zfY?is=986LGzOZWs4VNBeC"),
        new Record("Tomatokatsup", "73", "2/10", "N/A", "https://youtu.be/syOCH1GX9bk"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/9yOn65G8MAM"),
        new Record("RustyGD25", "83", "3/10", "12.4", "https://www.youtube.com/watch?v=VAiK7vUUe-g"),
        new Record("Nuridint3b", "105", "N/A", "N/A", "https://youtu.be/aeTaSExWXm4?is=SSXwL_UZlSh_SeV5"),
        new Record("LightShadow5", "N/A", "3.5/10", "N/A", "https://youtu.be/m5KSgM8XeCU?is=IgZu7vQ-Ys1dkgSm"),
    ], false),
    new Level("Pipe Up", 9.15, 13, "Bronze", "143768141", "Any Route", ["rumble1978"], "rumble1978", "https://medal.tv/games/geometry-dash/clip/n0P9uG7atu92S1LIJ?invite=cr-MSxETE8sNDc0ODUyOTUy&v=28", [
        new Record("rumble1978", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/n0P9uG7atu92S1LIJ?invite=cr-MSxETE8sNDc0ODUyOTUy&v=28"),
        new Record("Taublix", "4", "9/10", "like maybe barely harder than LeBronze just more sightreadable", "https://www.youtube.com/watch?v=4dlG_-b_NzY"),
        new Record("EndGamer7896", "64", "7/10", "9.4 list points", "https://medal.tv/games/geometry-dash/clips/n1ut6khsGp-qrHgW_?invite=cr-MSxpaWgsNTk1MDYwNDc2"),
        new Record("IceCubed88", "11", "N/A", "maybe should be moved lower, tbh it's just a consistency challenge", "https://youtu.be/vztzqKOKQ40"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/9yOn65G8MAM"),
        new Record("zis08", "139", "1/10", "Slop", "https://medal.tv/games/geometry-dash/clips/n32BdudsvogJ_Whp9?invite=cr-MSxvWnEsMTY4ODkwOTU4&v=22"),
        new Record("XanderGMDD", "N/A", "N/A", "N/A", "https://youtu.be/WvcBTEm-zQw"),
        new Record("Tomatokatsup", "N/A", "N/A", "N/A", "https://youtu.be/-GAuym5AMBk"),
        new Record("probro675", "18", "N/A", "N/A", "https://youtu.be/jr9rC3BDCFM?is=fNLbnURufy8LUbxj"),
        new Record("Nuridint3b", "6", "N/A", "N/A", "https://youtu.be/aeTaSExWXm4?is=SSXwL_UZlSh_SeV5"),
        new Record("LightShadow5", "N/A", "3.5/10", "N/A", "https://youtu.be/m5KSgM8XeCU?is=IgZu7vQ-Ys1dkgSm"),
        new Record("RustyGD25", "13", "2/10", "mid bronze", "https://youtu.be/RAefoEnAQoc"),
    ], false),
    new Level("Robogeist", 8.78, 5, "Bronze", "141195852", "Any Route", ["EndGamer7896"], "EndGamer7896", "https://medal.tv/games/geometry-dash/clip/mKd0hJ7OXL6e-JXeA?invite=cr-MSxobXIsNTk1MDYwNDc2", [
        new Record("EndGamer7896", "68", "8/10", "Low/Mid Bronze, 10 points", "https://medal.tv/games/geometry-dash/clips/mKd0hJ7OXL6e-JXeA?invite=cr-MSxobXIsNTk1MDYwNDc2"),
        new Record("Monkeyboy21", "35", "7/10", "Maybe a little lower", "https://medal.tv/games/geometry-dash/clips/mPpMUE86nnDvcfL11?invite=cr-MSxBMmEsMTk0NjAyNjk3&v=36"),
        new Record("Sp4c3m0nk3y", "168", "5/10", "Fine where it is", "https://medal.tv/games/geometry-dash/clips/mSqqqCxB4lBvqbdOt?invite=cr-MSw3NnQsNTU2MTU0Nzcw"),
        new Record("TheUnoKing9", "144", "7/10", "Easier than out of time", "https://youtu.be/pMTZ0V6BEjw"),
        new Record("Taublix", "26", "7/10", "Harder than greybot, easier than copper alloy", "https://www.youtube.com/watch?v=a89IEjGMWVc"),
        new Record("zis08", "98", "5/10", "N/A", "https://medal.tv/games/geometry-dash/clips/mW21s9OFSEz-uiWr5?invite=cr-MSxYZ0YsMTY4ODkwOTU4"),
        new Record("sparked18", "64", "N/A", "good where its at", "https://youtu.be/W4diAeLIb1k"),
        new Record("Komically", "13", "7/10", "Good where it is", "https://youtu.be/MfwG1sm_tX0"),
        new Record("placek3", "27", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mYqilDKVOJu0JpEqP?invite=cr-MSw4aDksNTk0ODYzMTcx&v=26"),
        new Record("ariopc", "N/A", "0/10", "N/A", "https://medal.tv/games/geometry-dash/clips/mSTD7V4fxuWxiNXSB?invite=cr-MSxKZnIsMjE3MzQ4MzIz&v=33"),
        new Record("Tomatokatsup", "32", "2/10", "N/A", "https://youtu.be/syOCH1GX9bk"),
        new Record("IceCubed88", "74", "N/A", "harder than michishotgun", "https://youtu.be/vztzqKOKQ40"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/9yOn65G8MAM"),
        new Record("XanderGMDD", "N/A", "N/A", "N/A", "https://youtu.be/WvcBTEm-zQw"),
        new Record("RustyGD25", "40", "6/10", "9.9 points", "https://www.youtube.com/watch?v=VAiK7vUUe-g"),
        new Record("probro675", "60", "N/A", "N/A", "https://youtu.be/jr9rC3BDCFM?is=fNLbnURufy8LUbxj"),
        new Record("Nuridint3b", "46", "N/A", "N/A", "https://youtu.be/aeTaSExWXm4?is=SSXwL_UZlSh_SeV5"),
        new Record("LightShadow5", "N/A", "3.5/10", "N/A", "https://youtu.be/m5KSgM8XeCU?is=IgZu7vQ-Ys1dkgSm"),
    ], false),
    new Level("Waiting for Xander", 8.58, 4, "Bronze", "Any Route", "137223061", ["EndGamer7896"], "EndGamer7896", "https://medal.tv/games/geometry-dash/clip/mqSD6F83c19OvKQ2w?invite=cr-MSw1QnIsNTk1MDYwNDc2", [
        new Record("EndGamer7896", "N/A", "N/A", "11 Points", "https://medal.tv/games/geometry-dash/clips/mqSD6F83c19OvKQ2w?invite=cr-MSw1QnIsNTk1MDYwNDc2"),
        new Record("XanderGMDD", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mqUg8ZCTnSazSsD8O?invite=cr-MSx4bjcsMzM2NzY3Njgx"),
        new Record("Farlayy", "N/A", "N/A", "N/A", ""),
        new Record("placek3", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mr4Kuo3eolQCN2x-x?invite=cr-MSxxb0gsNTk0ODYzMTcx&v=13"),
        new Record("tFluffy", "N/A", "N/A", "Good as is", ""),
        new Record("zis08", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mrN8RZMMKGrwxk4pg?invite=cr-MSw2cjQsMTY4ODkwOTU4"),
        new Record("zeroskills", "N/A", "N/A", "Easier than Robogeist, harder than out of time", ""),
        new Record("ItzThiur", "18", "6/10", "Bronze Tier", "https://youtu.be/aOgIG0csZAY?si=HIg8jo933LF3zd1_"),
        new Record("IceCubed88", "96", "N/A", "Easier than Out of Time", "https://youtu.be/y2S_J-fK8fU?si=mVLdjKTB6mzObHe-"),
        new Record("Komically", "52", "5/10", "Good as is", "https://www.youtube.com/watch?v=NY7ZYnOnMIo"),
        new Record("TJEmpire", "550", "1/10", "Easier than Out of Time", "https://youtu.be/chq4FN-Va00?si=4Vm_CidcnJHHbkEN"),
        new Record("Monkeyboy21", "68", "8/10", "Good where its at", "https://medal.tv/games/geometry-dash/clips/mPLL9kWD9slfkWgMQ?invite=cr-MSxLSzIsMTk0NjAyNjk3&v=30"),
        new Record("probro675", "35", "4/10", "Low Bronze, 10 points", "https://youtu.be/BTrGIpd8IxU?si=osObrVBoOTLGk9iR"),
        new Record("ariopc", "62", "N/A", "in between greybot and robogeist", "https://medal.tv/games/geometry-dash/clips/mWA99xaIzUH_g3j6q?invite=cr-MSxZWWssMjE3MzQ4MzIz&v=16"),
        new Record("sparked18", "72", "N/A", "good where it is", "https://youtu.be/W4diAeLIb1k"),
        new Record("Taublix", "39", "6/10", "fine probably", "https://www.youtube.com/watch?v=RvNM0nLV5mE"),
        new Record("Tomatokatsup", "49", "1/10", "N/A", "https://youtu.be/syOCH1GX9bk"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/9yOn65G8MAM"),
        new Record("RustyGD25", "5", "9/10", "2.4 points", "https://www.youtube.com/watch?v=VAiK7vUUe-g"),
        new Record("Nuridint3b", "24", "N/A", "N/A", "https://youtu.be/aeTaSExWXm4?is=SSXwL_UZlSh_SeV5"),
        new Record("LightShadow5", "N/A", "3.5/10", "N/A", "https://youtu.be/m5KSgM8XeCU?is=IgZu7vQ-Ys1dkgSm"),
    ], false),
    new Level("Rock Bottom", 7.43, 19, "Bronze", "146498292", "Small Skips", ["barts0gd"], "Taublix", "https://youtube.com/embed/0K8VgGAyGRM", [
        new Record("Taublix", "18", "9.5/10", "7 points", "https://www.youtube.com/watch?v=0K8VgGAyGRM"),
        new Record("Nuridint3b", "35", "N/A", "N/A", "https://youtu.be/HmDnAicL5WE?is=dAQAazdl64H-uE7L"),
        new Record("EndGamer7896", "47", "10/10", "5.5 points", "https://medal.tv/games/geometry-dash/clips/nkmfpnq120pTQUDpc?invite=cr-MSxUNXAsNTk1MDYwNDc2"),
        new Record("RustyGD25", "8", "6/10", "9 points", "https://www.youtube.com/watch?v=PfHm2yE6Y5k"),
        new Record("probro675", "40", "N/A", "N/A", "https://youtu.be/j6SxRgDpfkE?is=cP8JYTSVn3vIJE7y"),
    ], "/nongs/Rock Bottom.mp3"),
    new Level("greybot", 6.28, 6, "Bronze", "142492605", "Any Route", ["ariopc"], "ariopc", "https://medal.tv/games/geometry-dash/clip/mTJkd1Tz66MVCDduS?invite=cr-MSxXc0QsMjE3MzQ4MzIz&v=23", [
        new Record("ariopc", "68", "8/10", "Probably low bronze, pretty easy", "https://medal.tv/games/geometry-dash/clips/mTJkd1Tz66MVCDduS?invite=cr-MSxXc0QsMjE3MzQ4Mz23&v=23"),
        new Record("probro675", "105", "4/10", "Mid Bronze, 14.5 points", "https://youtu.be/lZyWGoo27hQ?is=miu0oMqqe92rkYpx"),
        new Record("Taublix", "11", "10/10", "easier than Robogeist", "https://www.youtube.com/watch?v=Yd0DZyzvC6k"),
        new Record("EndGamer7896", "88", "7.5/10", "Low Bronze, 9 points", "https://medal.tv/games/geometry-dash/clips/mTWahdpSSPrNmIyrw?invite=cr-MSxvc3csNTk1MDYwNDc2"),
        new Record("zis08", "24", "10/10", "Easiest level on the list", "https://medal.tv/games/geometry-dash/clips/mW1MbdYF1lQH_zgiP?invite=cr-MSxOV1IsMTY4ODkwOTU4"),
        new Record("sparked18", "11", "N/A", "good where its at", "https://youtu.be/W4diAeLIb1k"),
        new Record("Komically", "39", "8.5/10", "Good where it is", "https://youtu.be/MfwG1sm_tX0"),
        new Record("placek3", "12", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mYqfa4WgWd9fIY7Pr?invite=cr-MSxVeHksNTk0ODYzMTcx&v=12"),
        new Record("Tomatokatsup", "30", "4/10", "N/A", "https://youtu.be/syOCH1GX9bk"),
        new Record("IceCubed88", "57", "N/A", "good where it is", "https://youtu.be/vztzqKOKQ40"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/9yOn65G8MAM"),
        new Record("TheUnoKing9", "89", "4/10", "Low Bronze", "https://youtu.be/cLE1gu7ZW5E"),
        new Record("XanderGMDD", "N/A", "N/A", "N/A", "https://youtu.be/WvcBTEm-zQw"),
        new Record("RustyGD25", "6", "7/10", "1.7 points", "https://www.youtube.com/watch?v=VAiK7vUUe-g"),
        new Record("Nuridint3b", "9", "N/A", "N/A", "https://youtu.be/aeTaSExWXm4?is=SSXwL_UZlSh_SeV5"),
        new Record("LightShadow5", "N/A", "3.5/10", "N/A", "https://youtu.be/m5KSgM8XeCU?is=IgZu7vQ-Ys1dkgSm"),
    ], false),
    new Level("Robot On Track", 6.07, 4, "Bronze", "141189643", "Any Route", ["EndGamer7896"], "EndGamer7896", "https://medal.tv/games/geometry-dash/clip/mKaizDeV9Sfz6pA3p?invite=cr-MSw1bXEsNTk1MDYwNDc2", [
        new Record("EndGamer7896", "29", "8/10", "Low Bronze, 7 points", "https://medal.tv/games/geometry-dash/clips/mKaizDeV9Sfz6pA3p?invite=cr-MSw1bXEsNTk1MDYwNDc2"),
        new Record("Monkeyboy21", "54", "7/10", "Good where its at", "https://medal.tv/games/geometry-dash/clips/mPpDtUs7gSld5VdEa?invite=cr-MSwyN2QsMTk0NjAyNjk3&v=26"),
        new Record("XanderGMDD", "48", "4/10", "Good where it is", "https://medal.tv/games/geometry-dash/clips/mPvTrSllOWJ_2GHp1?invite=cr-MSxtWXAsMzM2NzY3Njgx&v=25"),
        new Record("Sp4c3m0nk3y", "285", "5/10", "Fine where it is", "https://medal.tv/games/geometry-dash/clips/mSp51XucL-29Qsii4?invite=cr-MSx4dW8sNTU2MTU0Nzcw"),
        new Record("TheUnoKing9", "151", "5/10", "Good where it is", "https://youtu.be/1qyM9cbH-JM"),
        new Record("Taublix", "6", "9/10", "accurate", "https://www.youtube.com/watch?v=JnOip6Jc4DA"),
        new Record("zis08", "86", "8/10", "N/A", "https://medal.tv/games/geometry-dash/clips/mW1Iv0u6hcczPM0cA?invite=cr-MSxpeHcsMTY4ODkwOTU4"),
        new Record("sparked18", "76", "N/A", "low bronze", "https://youtu.be/W4diAeLIb1k"),
        new Record("Komically", "21", "8/10", "Good where it is", "https://youtu.be/MfwG1sm_tX0"),
        new Record("probro675", "30", "2.67/10", "Low Bronze", "https://youtu.be/91DC7ciZwjk?is=-q8PshHrFLjNklqC"),
        new Record("placek3", "12", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mYqeaLAeJ2SQEKljU?invite=cr-MSxMWDgsNTk0ODYzMTcx&v=20"),
        new Record("ariopc", "11", "6/10", "N/A", "https://medal.tv/games/geometry-dash/clips/mSTofXVNGF5VebIzh?invite=cr-MSxHamosMjE3MzQ4MzIz&v=24"),
        new Record("Tomatokatsup", "63", "2/10", "N/A", "https://youtu.be/syOCH1GX9bk"),
        new Record("IceCubed88", "90", "N/A", "Good where it is", "https://youtu.be/vztzqKOKQ40"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/9yOn65G8MAM"),
        new Record("RustyGD25", "5", "8.5/10", "4.2 points", "https://www.youtube.com/watch?v=VAiK7vUUe-g"),
        new Record("Nuridint3b", "21", "N/A", "N/A", "https://youtu.be/aeTaSExWXm4?is=SSXwL_UZlSh_SeV5"),
        new Record("LightShadow5", "N/A", "3.5/10", "N/A", "https://youtu.be/m5KSgM8XeCU?is=IgZu7vQ-Ys1dkgSm"),
        new Record("crazyjordianaya", "N/A", "N/A", "N/A", " https://medal.tv/games/geometry-dash/clips/n8aktvlNaZ0miSDNe?invite=cr-MSxXWXEsNjI4NTAzOTgy"),
    ], false),
    new Level("The Bronze Pit", 5.58, 16, "Bronze", "144314314", "Any Route", ["zis08", "probro675", "ariopc"], "zis08", "https://medal.tv/games/geometry-dash/clip/n3WjNrblKJvqSlHZT?invite=cr-MSxHMWwsMTY4ODkwOTU4", [
        new Record("zis08", "4", "9/10", "Guess bitch", "https://medal.tv/games/geometry-dash/clips/n3WjNrblKJvqSlHZT?invite=cr-MSxHMWwsMTY4ODkwOTU4"),
        new Record("Tomatokatsup", "N/A", "N/A", "N/A", "https://youtu.be/-GAuym5AMBk"),
        new Record("Taublix", "3", "9/10", "placed fine", "https://www.youtube.com/watch?v=IArP_vmcuRo"),
        new Record("gabimoth", "N/A", "N/A", "0 Points", "https://youtu.be/6Afd5TV7HNM"),
        new Record("probro675", "50", "N/A", "N/A", "https://youtu.be/9-TbuBtE9zw?is=gZNPiVWiHCL3ECyl"),
        new Record("ariopc", "32", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/n3WAGKMpWVyttHdCy?invite=cr-MSx6WG0sMjE3MzQ4MzIz"),
        new Record("EndGamer7896", "55", "8.5/10", "2.5 points", "https://medal.tv/games/geometry-dash/clips/n42FlKOYDjstOrXW_?invite=cr-MSw0djgsNTk1MDYwNDc2"),
        new Record("Nuridint3b", "49", "N/A", "N/A", "https://youtu.be/aeTaSExWXm4?is=SSXwL_UZlSh_SeV5"),
        new Record("crazyjordianaya", "250", "8/10", "low bronze", "https://medal.tv/games/geometry-dash/clips/n7DU2We1Qd-hYG7uP?invite=cr-MSxKQVMsNjI4NTAzOTgy"),
        new Record("LightShadow5", "N/A", "3.5/10", "N/A", "https://youtu.be/m5KSgM8XeCU?is=IgZu7vQ-Ys1dkgSm"),
        new Record("RustyGD25", "21", "3.5/10", "low bronze", "https://youtu.be/RAefoEnAQoc"),
    ], false),
    new Level("Factory Reset", 5.42, 15, "Bronze", "144080309", "Any Route", ["barts0gd"], "Taublix", "https://www.youtube.com/embed/2wU8tWh2YGE", [
        new Record("Taublix", "15", "10/10", "harder than Robot Madness easier than xandeR is a chud", "https://www.youtube.com/watch?v=2wU8tWh2YGE"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/NoPZRvfkHO4"),
        new Record("zis08", "36", "3/10", "idk", "https://medal.tv/games/geometry-dash/clips/n32lmdIXaid6An-ts?invite=cr-MSxWWVgsMTY4ODkwOTU4"),
        new Record("XanderGMDD", "N/A", "9/10", "N/A", "https://youtu.be/WvcBTEm-zQw"),
        new Record("Tomatokatsup", "N/A", "N/A", "N/A", "https://youtu.be/-GAuym5AMBk"),
        new Record("probro675", "17", "N/A", "N/A", "https://youtu.be/9-TbuBtE9zw?is=gZNPiVWiHCL3ECyl"),
        new Record("ariopc", "14", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/n3SHYUtDcJwWUSKBV?invite=cr-MSxZcEMsMjE3MzQ4MzIz"),
        new Record("EndGamer7896", "59", "7/10", "4.9 points", "https://medal.tv/games/geometry-dash/clips/n2ZaXgHlWSfUnNiiv?invite=cr-MSxsdWksNTk1MDYwNDc2"),
        new Record("Nuridint3b", "9", "N/A", "N/A", "https://youtu.be/aeTaSExWXm4?is=SSXwL_UZlSh_SeV5"),
        new Record("LightShadow5", "N/A", "3.5/10", "N/A", "https://youtu.be/m5KSgM8XeCU?is=IgZu7vQ-Ys1dkgSm"),
        new Record("RustyGD25", "4", "6/10", "very low bronze", "https://youtu.be/RAefoEnAQoc"),
    ], false),
    new Level("TReasons Politics", 5.37, 1, "Bronze", "143564720", "Any Route", ["xpfinker812"], "Taublix", "https://www.youtube.com/embed/oZnGKNtZV_M", [
        new Record("Taublix", "6", "6/10", "harder than Snowscape easier than xandeR is a chud", "https://www.youtube.com/watch?v=oZnGKNtZV_M"),
        new Record("probro675", "40", "2/10", "Low Bronze 10.5 points (harder than out of time)", "https://youtu.be/x0iG8cmj2LY?is=j9STo7u97Lmme9ui"),
        new Record("Tomatokatsup", "41", "2/10", "N/A", "https://youtu.be/syOCH1GX9bk"),
        new Record("EndGamer7896", "89", "2/10", "5.04 list points", "https://medal.tv/games/geometry-dash/clips/mZKuyj5o471V8Y_j6?invite=cr-MSxjZm8sNTk1MDYwNDc2"),
        new Record("IceCubed88", "114", "N/A", "good where itis", "https://youtu.be/vztzqKOKQ40"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/9yOn65G8MAM"),
        new Record("Error2401", "72", "5/10", "idk", "https://www.youtube.com/watch?v=oCfr_-DBUwY"),
        new Record("ariopc", "19", "4/10", "N/A", "https://medal.tv/games/geometry-dash/clips/n0xCbwLnxFzZXLvr4?invite=cr-MSx0N1EsMjE3MzQ4MzIz&v=20"),
        new Record("XanderGMDD", "N/A", "N/A", "N/A", "https://youtu.be/WvcBTEm-zQw"),
        new Record("Nuridint3b", "42", "N/A", "N/A", "https://youtu.be/aeTaSExWXm4?is=SSXwL_UZlSh_SeV5"),
        new Record("LightShadow5", "N/A", "3.5/10", "N/A", "https://youtu.be/m5KSgM8XeCU?is=IgZu7vQ-Ys1dkgSm"),
        new Record("RustyGD25", "8", "5/10", "low bronze", "https://youtu.be/RAefoEnAQoc"),
    ], false),
    new Level("Bright Morning", 5.31, 10, "Bronze", "147756786", "Small Skips", ["Taublix"], "Taublix", "https://www.youtube.com/embed/uoUOAA_eyJo", [
        new Record("Taublix", "N/A", "10/10", "like 5 points or smth", "https://www.youtube.com/embed/uoUOAA_eyJo"),
        new Record("Nuridint3b", "31", "9/10", "N/A", "https://youtu.be/sGlTKCn1LTw?is=2cpdJjBhmU7-AvcH"),
        new Record("EndGamer7896", "31", "9/10", "4.75 points", "https://medal.tv/games/geometry-dash/clips/nsztY57e0wXhzvYsq?invite=cr-MSxRSTksNTk1MDYwNDc2"),
    ], false),
    new Level("Unmute Zis08", 5.27, 12, "Bronze", "144396877", "Small Skips", ["XanderGMDD"], "XanderGMDD", "https://medal.tv/games/screen-capture/clip/n4qIrsSgUvLvf1qGz?invite=cr-MSx5VEEsMzM2NzY3Njgx&v=22", [
        new Record("XanderGMDD", "44", "9/10", "idk prob rock or lowest bronze", "https://medal.tv/games/screen-capture/clips/n4qIrsSgUvLvf1qGz?invite=cr-MSx5VEEsMzM2NzY3Njgx&v=22"),
        new Record("ariopc", "17", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/n4MM2HlQ0bBJfYspq?invite=cr-MSxuSXAsMjE3MzQ4MzIz"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/QFfGLAIuU4M?si=WhrFEYNJ0bMORMUL"),
        new Record("EndGamer7896", "165", "7/10", "5.31 points", "https://medal.tv/games/geometry-dash/clips/n5bwtwzBqBeDafj3Y?invite=cr-MSw1cTUsNTk1MDYwNDc2"),
        new Record("probro675", "64", "N/A", "N/A", "https://youtu.be/jr9rC3BDCFM?is=fNLbnURufy8LUbxj"),
        new Record("Taublix", "3", "10/10", "fine i guess idk", "https://www.youtube.com/watch?v=3mjx3TlQCnU"),
        new Record("Nuridint3b", "18", "N/A", "N/A", "https://youtu.be/aeTaSExWXm4?is=SSXwL_UZlSh_SeV5"),
        new Record("zis08", "25", "10/10", "idk", "https://medal.tv/games/geometry-dash/clips/n67FTwArRj10-UbQu?invite=cr-MSwzMWgsMTY4ODkwOTU4"),
        new Record("LightShadow5", "N/A", "3.5/10", "N/A", "https://youtu.be/m5KSgM8XeCU?is=IgZu7vQ-Ys1dkgSm"),
        new Record("RustyGD25", "11", "7.5/10", "low bronze", "https://youtu.be/RAefoEnAQoc"),
    ], false),
    new Level("xandeR is a chud", 5.07, 1, "Bronze", "141346496", "Small Skips", ["xpfinker812"], "Komically", "https://youtube.com/embed/bkUKEgp6wQQ", [
        new Record("Komically", "102", "5/10", "Low Bronze", "https://youtu.be/bkUKEgp6wQQ"),
        new Record("EndGamer7896", "102", "6/10", "Low Bronze, 5 points", "https://medal.tv/games/geometry-dash/clips/mNxiMAbm2eDD8fGL-?invite=cr-MSxycW8sNTk1MDYwNDc2"),
        new Record("XanderGMDD", "65", "3/10", "Fine where it is", "https://medal.tv/games/geometry-dash/clips/mNU7wLru5NKx6I89R?invite=cr-MSx1U2osMzM2NzY3Njgx&v=20"),
        new Record("xpfinker812", "500", "2/10", "5 List Points", "https://youtu.be/hSGkwqignok"),
        new Record("Monkeyboy21", "51", "6/10", "Good where its at", "https://medal.tv/games/geometry-dash/clips/mPLPj4IEyt9w9fH6H?invite=cr-MSxqOXIsMTk0NjAyNjk3&v=30"),
        new Record("TJEmpire", "407", "suicide/10", "Lebronze harder", "https://youtu.be/MRtrewHGmWg?si=kWYw3CSJL9rqgJrQ"),
        new Record("Sp4c3m0nk3y", "366", "5/10", "Low Bronze", "https://medal.tv/games/geometry-dash/clips/mRZ6LgbaqplqhRGVZ?invite=cr-MSw0cGEsNTU2MTU0Nzcw"),
        new Record("TheUnoKing9", "290", "1/10", "Good where it is", "https://youtu.be/1qyM9cbH-JM"),
        new Record("zis08", "N/A", "8/10", "Very Easy", "https://medal.tv/games/geometry-dash/clips/mOHOUHYh4hOtve7Tf"),
        new Record("sparked18", "125", "N/A", "Good where its at, low bronze", "https://youtu.be/W4diAeLIb1k"),
        new Record("Taublix", "30", "5/10", "fine probably", "https://www.youtube.com/watch?v=zRwcZ1pe6U4"),
        new Record("placek3", "22", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mYqb4SKlUPlV9VtX_?invite=cr-MSxEYTQsNTk0ODYzMTcx&v=12"),
        new Record("probro675", "40", "1/10", "Entry Bronze", "https://youtu.be/5kWxP3JBBVc?is=ctnw85S7KpweUfWS"),
        new Record("ariopc", "N/A", "1/10", "N/A", "https://medal.tv/games/geometry-dash/clips/n0uOrSLl5ILF5QVwk?invite=cr-MSxaSGUsMjE3MzQ4MzIz&v=21"),
        new Record("Tomatokatsup", "107", "1/10", "N/A", "https://youtu.be/syOCH1GX9bk"),
        new Record("IceCubed88", "125", "N/A", "Good where it is", "https://youtu.be/vztzqKOKQ40"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/9yOn65G8MAM"),
        new Record("RustyGD25", "46", "5/10", "5.4 points", "https://www.youtube.com/watch?v=VAiK7vUUe-g"),
        new Record("Nuridint3b", "43", "N/A", "N/A", "https://youtu.be/aeTaSExWXm4?is=SSXwL_UZlSh_SeV5"),
        new Record("LightShadow5", "N/A", "3.5/10", "N/A", "https://youtu.be/m5KSgM8XeCU?is=IgZu7vQ-Ys1dkgSm"),
    ], false),
    new Level("Robot Madness", 4.43, 4, "Bronze", "141189636", "Any Route", ["EndGamer7896"], "EndGamer7896", "https://medal.tv/games/geometry-dash/clip/mKahUL0fholoxYzKu?invite=cr-MSwycWQsNTk1MDYwNDc2", [
        new Record("EndGamer7896", "22", "9/10", "Low Bronze, 6 points", "https://medal.tv/games/geometry-dash/clips/mKahUL0fholoxYzKu?invite=cr-MSwycWQsNTk1MDYwNDc2"),
        new Record("Monkeyboy21", "37", "7/10", "Good where its at", "https://medal.tv/games/geometry-dash/clips/mPpI0m8F5pfXovpp2?invite=cr-MSxYb1YsMTk0NjAyNjk3&v=25"),
        new Record("XanderGMDD", "23", "7/10", "Bottom 2", "https://medal.tv/games/geometry-dash/clips/mPvNBGbuX1qcGm28U?invite=cr-MSwxR1QsMzM2NzY3Njgx&v=20"),
        new Record("Sp4c3m0nk3y", "29", "8/10", "One place lower", "https://medal.tv/games/geometry-dash/clips/mSooTnsYDJ9aBp3TA?invite=cr-MSxsNzUsNTU2MTU0Nzcw"),
        new Record("TheUnoKing9", "28", "6/10", "Good where it is", "https://youtu.be/1qyM9cbH-JM"),
        new Record("Error2401", "138", "3/10", "Its where its supposed to be", "https://www.youtube.com/watch?v=OsV1_uOQ4I8"),
        new Record("Taublix", "4", "7/10", "accurate", "https://www.youtube.com/watch?v=eJEGmv6RCZ4"),
        new Record("zis08", "47", "9/10", "N/A", "https://medal.tv/games/geometry-dash/clips/mW1A1jnnneiaB7pQG?invite=cr-MSxCdkgsMTY4ODkwOTU4&v=19"),
        new Record("sparked18", "22", "N/A", "low bronze", "https://youtu.be/W4diAeLIb1k"),
        new Record("Komically", "14", "8/10", "Good where it is", "https://youtu.be/MfwG1sm_tX0"),
        new Record("placek3", "6", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mYqciXfawPtsdSnwV?invite=cr-MSxTcXgsNTk0ODYzMTcx&v=20"),
        new Record("probro675", "26", "2/10", "Low Bronze", "https://youtu.be/KSBYp5cGDoc?is=r73YbZU3-1b9mUC_"),
        new Record("NatanGMDD", "8", "8/10", "4.51 list points", "https://youtu.be/bosANauB44k"),
        new Record("ariopc", "1", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mSTmlSNA1xq4u7Y5A?invite=cr-MSxOSVksMjE3MzQ4MzIz&v=22"),
        new Record("Tomatokatsup", "37", "1/10", "N/A", "https://youtu.be/syOCH1GX9bk"),
        new Record("IceCubed88", "76", "N/A", "good where it is", "https://youtu.be/vztzqKOKQ40"),
        new Record("PurpleSpace000", "146", "N/A", "ig js keep", "https://youtu.be/R9QIZjzqXHg"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/9yOn65G8MAM"),
        new Record("RustyGD25", "3", "7/10", "1.3 point", "https://www.youtube.com/watch?v=VAiK7vUUe-g"),
        new Record("Nuridint3b", "11", "N/A", "N/A", "https://youtu.be/aeTaSExWXm4?is=SSXwL_UZlSh_SeV5"),
        new Record("crazyjordianaya", "54", "8/10", "low bronze 1.34", "https://medal.tv/games/geometry-dash/clips/n7aXBpu8zbJz4x9Yr?invite=cr-MSw4T1EsNjI4NTAzOTgy"),
        new Record("LightShadow5", "N/A", "3.5/10", "N/A", "https://youtu.be/m5KSgM8XeCU?is=IgZu7vQ-Ys1dkgSm"),
    ], false),
    new Level("WOW u did it", 3.8, 20, "Bronze", "144910300", "Small Skips", ["barts0gd"], "Taublix", "https://www.youtube.com/embed/u0_pMYTpco4", [
        new Record("Taublix", "3", "10/10", "very very low bronze, maybe around like 4-5 points", "https://www.youtube.com/watch?v=u0_pMYTpco4"),
        new Record("probro675", "9", "N/A", "N/A", "https://youtu.be/heXSEx_DIAM?is=1HYeEdCsIDWlkrR7"),
        new Record("Nuridint3b", "11", "N/A", "N/A", "https://youtu.be/Mx4mTRVHc3U?is=tKwv3IYVVlQxSxTh"),
        new Record("LightShadow5", "N/A", "3.5/10", "N/A", "https://youtu.be/m5KSgM8XeCU?is=IgZu7vQ-Ys1dkgSm"),
        new Record("barts0gd", "20", "8/10", "its good here", "https://medal.tv/games/geometry-dash/clips/naPATnPJea4nj5ek7?invite=cr-MSxmcXksNDExMTQ3ODI3"),
        new Record("RustyGD25", "5", "6/10", "low bronze", "https://youtu.be/RAefoEnAQoc"),
        new Record("EndGamer7896", "10", "N/A", "1.05 points", "https://medal.tv/games/geometry-dash/clips/n7Hw5EmT18RpZ7dJe?invite=cr-MSwxdlAsNTk1MDYwNDc2"),
    ], false),
    new Level("the bronze jade", 3.5, 9, "Bronze", "146949123", "Verification Route", ["LightShadow5"], "LightShadow5", "https://youtube.com/embed/QUCl3pq3uCY?is=48IJiyKUuE6WzXGy", [
        new Record("LightShadow5", "1", "7/10", "Top 5 easiest bronze RCL", "https://www.youtube.com/watch?v=QUCl3pq3uCY?is=48IJiyKUuE6WzXGy"),
        new Record("Taublix", "1", "10/10", "the bronze jade? more like the rock jade (hardest rock but still easier than LeBronze)", "https://www.youtube.com/watch?v=QHE5oxSswOU"),
        new Record("Nuridint3b", "18", "5/10", "N/A", "https://youtu.be/k5DSJ1fHY5g?is=nz-j0sVIMRIKNFoI"),
        new Record("EndGamer7896", "31", "7/10", "5.93 points", "https://medal.tv/games/geometry-dash/clips/nmRQD8qmKp6WU_fTO?invite=cr-MSxKaWQsNTk1MDYwNDc2"),
        new Record("probro675", "19", "N/A", "N/A", "https://youtu.be/j6SxRgDpfkE?is=cP8JYTSVn3vIJE7y"),
    ], false),
    new Level("Snowscape", 1.81, 14, "Bronze", "143220452", "Small Skips", ["CyberCharger"], "CyberCharger", "https://www.youtube.com/embed/h8S3V_XfD6M", [
        new Record("CyberCharger", "28", "10/10", "easiest bronze", "https://www.youtube.com/watch?v=h8S3V_XfD6M"),
        new Record("EndGamer7896", "4", "10/10", "Not sure if this is easier than LeBronze", "https://medal.tv/games/geometry-dash/clips/mXScCpEwNYJ7mbHys?invite=cr-MSx1dmUsNTk1MDYwNDc2"),
        new Record("placek3", "14", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mYq9oqmnKoPgjyLWR?invite=cr-MSx4UnosNTk0ODYzMTcx&v=18"),
        new Record("Taublix", "15", "9/10", "Harder than Robot Madness easier than Robot On Track", "https://www.youtube.com/watch?v=dRz6TF-MF54"),
        new Record("ariopc", "17", "7/10", "N/A", "https://medal.tv/games/geometry-dash/clips/mYRF64UukukPNECVa?invite=cr-MSxISzgsMjE3MzQ4MzIz&v=27"),
        new Record("Tomatokatsup", "28", "5/10", "N/A", "https://youtu.be/syOCH1GX9bk"),
        new Record("IceCubed88", "110", "N/A", "a bit harder than lebronze", "https://youtu.be/FnUvKtHAyz0"),
        new Record("PurpleSpace000", "199", "N/A", "honestly feels like an okay placement", "https://youtu.be/wjlRGAHcg0g"),
        new Record("Sp4c3m0nk3y", "124", "5/10", "maybe above xander is a chud because of the length", "https://medal.tv/games/geometry-dash/clips/n1WIqzq52BjsW_ofG?invite=cr-MSxnc24sNTU2MTU0Nzcw"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/9yOn65G8MAM"),
        new Record("zis08", "12", "10/10", "new easiest", "https://medal.tv/games/geometry-dash/clips/mXP8uf6ezBYVaFDT1?invite=cr-MSxCcVksMTY4ODkwOTU4"),
        new Record("XanderGMDD", "N/A", "N/A", "N/A", "https://youtu.be/WvcBTEm-zQw"),
        new Record("RustyGD25", "5", "8/10", "1.2 points", "https://www.youtube.com/watch?v=VAiK7vUUe-g"),
        new Record("probro675", "18", "N/A", "N/A", "https://youtu.be/jr9rC3BDCFM?is=fNLbnURufy8LUbxj"),
        new Record("Nuridint3b", "7", "N/A", "N/A", "https://youtu.be/aeTaSExWXm4?is=SSXwL_UZlSh_SeV5"),
        new Record("LightShadow5", "N/A", "3.5/10", "N/A", "https://youtu.be/m5KSgM8XeCU?is=IgZu7vQ-Ys1dkgSm"),
    ], false),
    new Level("LeBronze", 1, 4, "Bronze", "137909718", "Any Route", ["EndGamer7896"], "EndGamer7896", "https://medal.tv/games/geometry-dash/clip/mue07kBtQ_fmFBPPo?invite=cr-MSxyb2QsNTk1MDYwNDc2", [
        new Record("EndGamer7896", "5", "10/10", "Entry Bronze, 1 point", "https://medal.tv/games/geometry-dash/clips/mue07kBtQ_fmFBPPo?invite=cr-MSxyb2QsNTk1MDYwNDc2"),
        new Record("placek3", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mvHhHoMXdtr7LgbNS?invite=cr-MSxpQk8sNTk0ODYzMTcx&v=16"),
        new Record("ItzThiur", "16", "7/10", "Fair", "https://youtu.be/aOgIG0csZAY?si=HIg8jo933LF3zd1_"),
        new Record("DexOnGD", "16", "6/10", "Low Bronze", "https://www.youtube.com/watch?v=Knwkm9FtgMM"),
        new Record("IceCubed88", "10", "N/A", "Entry Bronze", "https://youtu.be/y2S_J-fK8fU?si=mVLdjKTB6mzObHe-"),
        new Record("Sp4c3m0nk3y", "29", "10/10", "Bottom List", "https://www.youtube.com/watch?v=EVYbzeptQC4s"),
        new Record("Komically", "27", "9/10", "Good as is", "https://www.youtube.com/watch?v=NY7ZYnOnMIo"),
        new Record("xpfinker812", "59", "8/10", "Bottom Bronze", "https://www.youtube.com/watch?v=fSK9OqN-Iuk"),
        new Record("TheUnoKing9", "20", "10/10", "N/A", "https://www.youtube.com/watch?v=e-lLkfqDBFE"),
        new Record("XanderGMDD", "4", "10/10", "Good as is", "https://medal.tv/games/geometry-dash/clips/mNbPivYXTrzzxbBR7?invite=cr-MSxPaEwsMzM2NzY3Njgx&v=22"),
        new Record("Dogsniffer106", "67", "0/10", "Bronze", "https://youtu.be/-FrwA635Hx4"),
        new Record("Monkeyboy21", "10", "8/10", "Good where its at", "https://medal.tv/games/geometry-dash/clips/mPpztfQkVIKMsT4H5?invite=cr-MSx1dG8sMTk0NjAyNjk3&v=20"),
        new Record("TJEmpire", "66", "0/10", "Good where it is", "https://youtu.be/c9vIjcFaU7U?si=Fjy5T3ysDD9A2Jfy"),
        new Record("ariopc", "60", "7.5/10", "Really Easy Bronze", "https://youtu.be/ikX_9HACj8U?si=kU0LFF3qON4wQa3-"),
        new Record("Error2401", "27", "5/10", "N/A", "https://www.youtube.com/watch?v=vEO-co_UZNg"),
        new Record("Taublix", "6", "9/10", "Easiest level on the list", "https://www.youtube.com/watch?v=UKuS4gxHEyY"),
        new Record("zis08", "N/A", "7/10", "Very Easy", "https://medal.tv/games/geometry-dash/clips/mOHT5A8Y3y50FzZ9k"),
        new Record("sparked18", "10", "N/A", "Good where it's at", "https://youtu.be/W4diAeLIb1k"),
        new Record("Tomatokatsup", "53", "3/10", "N/A", "https://youtu.be/syOCH1GX9bk"),
        new Record("PurpleSpace000", "N/A", "N/A", "idk keep it where it is", "https://youtu.be/G-SeUGekCV4"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/9yOn65G8MAM"),
        new Record("probro675", "18", "N/A", "Entry Bronze 1.5 points", "https://youtu.be/jr9rC3BDCFM?is=fNLbnURufy8LUbxj"),
        new Record("Nuridint3b", "7", "N/A", "N/A", "https://youtu.be/aeTaSExWXm4?is=SSXwL_UZlSh_SeV5"),
        new Record("crazyjordianaya", "19", "7/10", "low bronze", "https://medal.tv/games/geometry-dash/clips/n7alRknIOfIvzkA-V?invite=cr-MSxhSUMsNjI4NTAzOTgy"),
        new Record("LightShadow5", "N/A", "3.5/10", "N/A", "https://youtu.be/m5KSgM8XeCU?is=IgZu7vQ-Ys1dkgSm"),
    ], false),

    /*
    .########...#######...######..##....##
    .##.....##.##.....##.##....##.##...##.
    .##.....##.##.....##.##.......##..##..
    .########..##.....##.##.......#####...
    .##...##...##.....##.##.......##..##..
    .##....##..##.....##.##....##.##...##.
    .##.....##..#######...######..##....##
    */
    new Level("Fairytale", 0, 10, "Rock", "144092243", "Any Route", ["Taublix"], "Taublix", "https://www.youtube.com/embed/SnPNWlGJyZQ", [
        new Record("Taublix", "N/A", "10/10", "rock tier probably", "https://www.youtube.com/watch?v=SnPNWlGJyZQ"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/pLCUR5Zt-2Y"),
        new Record("Tomatokatsup", "N/A", "N/A", "N/A", "https://youtu.be/-GAuym5AMBk"),
        new Record("EndGamer7896", "7", "10/10", "1.02 points", " https://medal.tv/games/geometry-dash/clips/n2ZT14fbCMrEh0Awh?invite=cr-MSxqaGMsNTk1MDYwNDc2"),
        new Record("Nuridint3b", "3", "N/A", "N/A", "https://youtu.be/aeTaSExWXm4?is=SSXwL_UZlSh_SeV5"),
        new Record("JaggerC12", "3", "8/10", "bronze", "https://youtu.be/rUVYCLZJ1Yk"),
    ], false),
    new Level("HEAT", 0, 10, "Rock", "144092248", "Any Route", ["Taublix"], "Taublix", "https://www.youtube.com/embed/v-t9NI6ZuNQ", [
        new Record("Taublix", "N/A", "10/10", "rock tier probably", "https://www.youtube.com/watch?v=v-t9NI6ZuNQ"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/pLCUR5Zt-2Y"),
        new Record("XanderGMDD", "N/A", "N/A", "N/A", "https://youtu.be/WvcBTEm-zQw"),
        new Record("Tomatokatsup", "N/A", "N/A", "N/A", "https://youtu.be/-GAuym5AMBk"),
        new Record("EndGamer7896", "10", "8/10", "1.03 points", "https://medal.tv/games/geometry-dash/clips/n2ZUquHeCr_LZYdJn?invite=cr-MSx3aWssNTk1MDYwNDc2"),
        new Record("probro675", "8", "N/A", "Model Bronze 1 point (ts is easier than Lebronze LMAO)", "https://youtu.be/jr9rC3BDCFM?is=fNLbnURufy8LUbxj"),
        new Record("Nuridint3b", "4", "N/A", "N/A", "https://youtu.be/aeTaSExWXm4?is=SSXwL_UZlSh_SeV5"),
        new Record("JaggerC12", "3", "8/10", "bronze", "https://youtu.be/IjsATCzlA_8"),
    ], false),
    new Level("Pipe down", 0, 3, "Rock", "143742549", "Verification Route", ["Seedskyy73"], "Seedskyy73", "https://medal.tv/games/geometry-dash/clip/n0Dnb7NKLnL3HjJH7?invite=cr-MSxwdHIsNTI1NzU2MjU4", [
        new Record("Seedskyy73", "N/A", "N/A", "low bronze", "https://medal.tv/games/geometry-dash/clip/n0Dnb7NKLnL3HjJH7?invite=cr-MSxwdHIsNTI1NzU2MjU4"),
        new Record("Taublix", "1", "10/10", "I beat this in 1 attempt, what do you think?", "https://www.youtube.com/watch?v=h1sXqc_k__0"),
        new Record("Error2401", "2", "6/10", "definitely easiest level rn", "https://www.youtube.com/watch?v=tZafZKkQ81U"),
        new Record("EndGamer7896", "3", "5/10", "Rock tier, 0 points", "https://medal.tv/games/geometry-dash/clips/n1sCmYxPJZxj4tzge?invite=cr-MSx4ZGwsNTk1MDYwNDc2"),
        new Record("IceCubed88", "3", "M/A", "obviously easiest level on the list", "https://youtu.be/vztzqKOKQ40"),
        new Record("Sp4c3m0nk3y", "4", "0/10", "Rock", "https://medal.tv/games/geometry-dash/clips/n1WuRemMf-DqnXbMz?invite=cr-MSx2MnMsNTU2MTU0Nzcw"),
        new Record("tFluffy", "1", "N/A", "rock tier", "https://youtu.be/Pef0QixKODY"),
        new Record("Tomatokatsup", "N/A", "N/A", "N/A", "https://youtu.be/-GAuym5AMBk"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/QFfGLAIuU4M?si=WhrFEYNJ0bMORMUL"),
        new Record("Nuridint3b", "2", "N/A", "N/A", "https://youtu.be/aeTaSExWXm4?is=SSXwL_UZlSh_SeV5")
    ], false),
    new Level("Stone", 0, 3, "Rock", "143898245", "Verification Route", ["Sp4c3m0nk3y"], "Sp4c3m0nk3y", "https://medal.tv/games/geometry-dash/clip/n1z3h6R1OBcGiaGGy?invite=cr-MSx4bGksNTU2MTU0Nzcw", [
        new Record("Sp4c3m0nk3y", "6", "10/10", "rock", "https://medal.tv/games/geometry-dash/clip/n1z3h6R1OBcGiaGGy?invite=cr-MSx4bGksNTU2MTU0Nzcw"),
        new Record("IceCubed88", "2", "N/A", "good where it is", "https://youtu.be/3gtwxOLCQ74"),
        new Record("Taublix", "1", "10/10", "bottom of the list", "https://www.youtube.com/watch?v=ckWHrxw-EHg"),
        new Record("tFluffy", "1", "N/A", "harder than Pipe down", "https://youtu.be/Pef0QixKODY"),
        new Record("EndGamer7896", "1", "5/10", "easier than Pipe down", "https://medal.tv/games/geometry-dash/clips/n1U3XY9L8pdkB4jJg?invite=cr-MSxzcDQsNTk1MDYwNDc2"),
        new Record("Tomatokatsup", "N/A", "N/A", "N/A", "https://youtu.be/-GAuym5AMBk"),
        new Record("gabimoth", "N/A", "N/A", "N/A", "https://youtu.be/QFfGLAIuU4M?si=WhrFEYNJ0bMORMUL"),
        new Record("Nuridint3b", "3", "N/A", "N/A", "https://youtu.be/aeTaSExWXm4?is=SSXwL_UZlSh_SeV5")
    ], false)
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
    new Level("robo bot challenge", 0, 1, "Hell", "142787534", "Any Route", ["GMDastroo"], "-", "https://youtube.com/embed/dQw4w9WgXcQ", [], false),
    new Level("probro is a chud", 0, 1, "Hell", "143177018", "Showcase Route", ["xpfinker812"], "-", "https://medal.tv/games/geometry-dash/clip/mXvk0PhVdKcFrwf0X?invite=cr-MSw3VVQsNTMwODEwMjU3&v=20", [], false),
    new Level("silent botstep", 0, 1, "Hell", "142462074", "Showcase Route", ["xpfinker812"], "-", "https://medal.tv/games/geometry-dash/clip/mTyE9pAgN1GYH1RH-?invite=cr-MSxpQmIsNTMwODEwMjU3&v=26", [], false),
    new Level("xandeR is IDF agent", 0, 1, "Hell", "143527334", "Showcase Route", ["xpfinker812"], "-", "https://medal.tv/games/geometry-dash/clip/mZw60xws4LTO1WhL9?invite=cr-MSw3VE0sNTMwODEwMjU3&v=10", [], false),
    new Level("robopolis 9 infinity", 0, 2, "Hell", "142803486", "Small Skips", ["xpfinker812"], "-", "https://medal.tv/games/geometry-dash/clip/mVHhRotwGd2iA9hmn?invite=cr-MSxJejMsNTMwODEwMjU3&v=11", [], false),
    new Level("Crayons", 0, 17, "Hell", "-", "Any Route", ["rumble1978"], "rumble1978", "https://medal.tv/games/geometry-dash/clip/mv7xGhRttimy7uuS6?invite=cr-MSxqQlUsNDc0ODUyOTUy&v=300", [], false),
    new Level("Silent Isreal", 0, 2, "Hell", "143501945", "Showcase Route", ["xpfinker812"], "-", "https://medal.tv/games/geometry-dash/clip/mZm2pwlx3BwbFZ-os?invite=cr-MSxHVmUsNTMwODEwMjU3&v=8", [], false),
    new Level("Double Double", 0, 3, "Hell", "137564688", "Any Route", ["zis08"], "zis08", "https://medal.tv/games/geometry-dash/clip/msohBZHNKc1I8piec?invite=cr-MSxhZ3MsMTY4ODkwOTU4", [], false),
    new Level("Tiptoe Temple", 0, 0, "Hell", "96953991", "Any Route", ["iMintyGreen"], "Farlayy", "https://www.youtube.com/embed/xN16fwLFoAs", [], false),
    new Level("KNC unleashed", 0, 1, "Hell", "143595736", "Showcase Route", ["xpfinker812"], "-", "https://medal.tv/games/geometry-dash/clip/mZRUARUKaJeNemxvn?invite=cr-MSxiRXYsNTMwODEwMjU3&v=14", [], false),
    new Level("Microclick Hell", 0, 2, "Hell", "142803485", "Any Route", ["xpfinker812"], "zis08", "https://medal.tv/games/geometry-dash/clip/mWVJRTdAViu4LTT7p?invite=cr-MSxhWWksMTY4ODkwOTU4&v=15", [
        new Record("zis08", "708", "5/10", "Mid Silver", "https://medal.tv/games/geometry-dash/clips/mWVJRTdAViu4LTT7p?invite=cr-MSxhWWksMTY4ODkwOTU4&v=15"),
        new Record("EndGamer7896", "847", "2/10", "54 points", "https://medal.tv/games/geometry-dash/clips/mYYQJ2mtaQ6zRRHSU?invite=cr-MSx3ZGMsNTk1MDYwNDc2"),
        new Record("Tomatokatsup", "9", "5/10", "1 list point", "https://youtu.be/syOCH1GX9bk"),
    ], false),
    new Level("lord of cinder", 0, 1, "Hell", "141960393", "Verification Route", ["SqueegGD"], "zeroskills", "https://youtube.com/embed/LdSbgVkdokk", [
        new Record("zeroskills", "1,033", "6/10", "Easier than WfX2, 19-24 points", "https://youtu.be/LdSbgVkdokk"),
    ], false),
    new Level("SHM RCL 55xH", 0, 3, "Hell", "141128210", "Small Skips", ["SqueegGD"], "SqueegGD", "https://www.youtube.com/embed/Z6yDecBauoM", [
        new Record("SqueegGD", "77", "0/10", "Top 1", "https://www.youtube.com/watch?v=Z6yDecBauoM"),
        new Record("EndGamer7896", "194", "8/10", "12 points", "https://medal.tv/games/geometry-dash/clips/mM3vrwfhrTuH20otN?invite=cr-MSxzNm4sNTk1MDYwNDc2"),
        new Record("XanderGMDD", "88", "5/10", "Mid Bronze", "https://medal.tv/games/geometry-dash/clips/mNcerqYXIy5VHfqXF?invite=cr-MSx3MDUsMzM2NzY3Njgx&v=20"),
    ], false),
    new Level("WHY", 0, 1, "Hell", "136548356", "Any Route", ["XanderGMDD"], "XanderGMDD", "https://medal.tv/games/geometry-dash/clip/mnwqZkqOoSOGO8Iio?invite=cr-MSxVVXosMzM2NzY3Njgx&v=12", [], false),

    /*
    .########..##.....##.########...######......###....########..#######..########..##....##
    .##.....##.##.....##.##.....##.##....##....##.##......##....##.....##.##.....##..##..##.
    .##.....##.##.....##.##.....##.##.........##...##.....##....##.....##.##.....##...####..
    .########..##.....##.########..##...####.##.....##....##....##.....##.########.....##...
    .##........##.....##.##...##...##....##..#########....##....##.....##.##...##......##...
    .##........##.....##.##....##..##....##..##.....##....##....##.....##.##....##.....##...
    .##.........#######..##.....##..######...##.....##....##.....#######..##.....##....##...
    */
    new Level("Shardscapes", 0, 0, "Purgatory", "79997992", "Small Skips", ["ItzKiba"], "yyyoshigd", "https://www.youtube.com/embed/UV_Nh6qDj4I?is=LSKcgUIAde3bM5Ko", [], false),
    new Level("PLEASE PLEASE SPEED", 0, 0, "Purgatory", "143122348", "Any Route", ["MMB9595"], "MMB9595", "https://youtube.com/embed/vD0fXSHj56Q", [], false),
    new Level("Evil Death 1", 0, 4, "Purgatory", "143122349", "Any Route", ["4096Tristan"], "4096Tristan", "https://youtube.com/embed/5mKMGGpn_LY", [], false),
    new Level("Under The Door world", 0, 0, "Purgatory", "145247260", "Small Skips", ["Tomatokatsup", "zis08"], "Tomatokatsup", "https://www.youtube.com/embed/UOSgTdhz-vw", [], "/nongs/Under The Door, Under The Door world.mp3"),
    new Level("ball fondling challenge", 0, 0, "Purgatory", "108970071", "Any Route", ["bunibus"], "tFluffy", "https://www.youtube.com/embed/shqywNEj1zk", [], false),
    new Level("ImSoHungryICouldEat", 0, 0, "Purgatory", "126253662", "Any Route", ["Tomatokatsup"], "Tomatokatsup", "https://www.youtube.com/embed/mpMItup4nqc", [], false),
    new Level("DFT Loves Robot", 0, 5, "Purgatory", "145319527", "Small Skips", ["zis08"], "zis08", " https://medal.tv/games/geometry-dash/clip/n9SHtbPafsUlx3mM-", [], false),
    new Level("qplaskmzxncbrvgfhywe", 0, 3, "Purgatory", "143173113", "Any Route", ["FoldedZero"], "FoldedZero", "https://www.youtube.com/embed/brpsQqoDpUk", [], false),
    new Level("uhhh idk", 0, 1, "Purgatory", "145247261", "Small Skips", ["Tomatokatsup"], "Tomatokatsup", "https://www.youtube.com/embed/YkDmLvBOyy0", [], false),
    new Level("zis08", 0, 1, "Purgatory", "144120744", "Verification Route", ["Tomatokatsup"], "Tomatokatsup", "https://www.youtube.com/embed/JFz-qvzAkqk", [], false),
    new Level("Robot Level", 0, 1, "Purgatory", "143320227", "Any Route", ["xpfinker812"], "xpfinker812", "https://www.youtube.com/embed/dQw4w9WgXcQ", [], false),
    new Level("gar", 0, 0, "Purgatory", "137741707 (Broken)", "Any Route", ["BungusGD"], "BungusGD", "https://youtube.com/embed/whD2Q-jQOHE?si=Qqod5Mz8NiaBkiWh", [], false),
    new Level("TS Tusuegra Copyable", 0, 8, "Purgatory", "145024513", "Small Skips", ["MMB9595"], "MMB9595", "https://www.youtube.com/embed/PqhLueniUk4", [], false),

    /*
    .##.......####.##.....##.########...#######.
    .##........##..###...###.##.....##.##.....##
    .##........##..####.####.##.....##.##.....##
    .##........##..##.###.##.########..##.....##
    .##........##..##.....##.##.....##.##.....##
    .##........##..##.....##.##.....##.##.....##
    .########.####.##.....##.########...#######.
    */
    new Level("Public Transit", 0, 7, "Limbo", "144329482", "Small Skips", ["Seedskyy73"], "-", "https://medal.tv/games/geometry-dash/clip/n42XHsQVM2-uEEt62?invite=cr-MSxzbGQsNTI1NzU2MjU4", [], "/nongs/Public Transit.mp3"),
    new Level("Poison", 0, 6, "Limbo", "141674535", "Small Skips", ["Monkeyboy21"], "-", "https://medal.tv/games/geometry-dash/clip/mP7XWd8Npb6kjyZA0?invite=cr-MSw3eFMsMTk0NjAyNjk3&v=16", [], false),
    new Level("Dopamine Rush", 0, 2, "Limbo", "136993028", "Any Route", ["EndGamer7896"], "-", "https://www.youtube.com/embed/nOcsSgJBJZI", [], false),
    new Level("rociety", 0, 52, "Limbo", "144069912", "Small Skips", ["windboss07"], "-", "https://medal.tv/games/geometry-dash/clip/n2AZlwJJnctgVmlS8?invite=cr-MSxrTHYsMTY4ODkwOTU4&v=31", [], false),
    new Level("the demise of zis", 0, 25, "Limbo", "145660505", "Small Skips", ["windboss07"], "-", "https://www.youtube.com/embed/dQw4w9WgXcQ", [], false),
    new Level("Expiration Date", 0, 1, "Limbo", "137150681", "Any Route", ["EndGamer7896"], "-", "https://www.youtube.com/embed/vK5TPmBbFeE", [], false),
    new Level("LightMost", 0, 10, "Limbo", "142864406", "Small Skips", ["Seedskyy73"], "-", "https://www.youtube.com/embed/dQw4w9WgXcQ", [], "/nongs/LightMost.mp3"),
    new Level("endgamer y not gold", 0, 14, "Limbo", "143894590", "Small Skips", ["windboss07"], "-", "https://www.youtube.com/embed/dQw4w9WgXcQ", [], "/nongs/endgamer y not gold.mp3"),
    new Level("FINAL ROBOTISY", 0, 8, "Limbo", "141287742", "Small Skips", ["XanderGMDD"], "-", "https://medal.tv/games/geometry-dash/clip/mNcXr8HvQTellyDsU?invite=cr-MSxtenIsMzM2NzY3Njgx", [], false),
    new Level("Rorbit", 0, 6, "Limbo", "144184286", "Small Skips", ["Tomatokatsup", "Blocky2009"], "-", "https://medal.tv/games/geometry-dash/clip/n3dSob3FiPZClcZsL?invite=cr-MSx4UFQsNDQwNTc4MDI2&v=20", [], false),
    new Level("fishnet", 0, 11, "Limbo", "142489532", "Any Route", ["GMDastroo"], "-", "https://youtube.com/embed/dQw4w9WgXcQ", [], false),
    new Level("Speculation A", 0, 7, "Limbo", "143907175", "Small Skips", ["Vinecke123"], "-", "https://medal.tv/games/geometry-dash/clip/n1DFaqOmGsE_reeie?invite=cr-MSxwNGosNDczMTIyMTcw", [], false),
    new Level("Darker Something", 0, 3, "Limbo", "143504594", "Showcase Route", ["ariopc"], "-", "https://medal.tv/games/geometry-dash/clip/mZmQ4ZwrYQFhIBxNY?invite=cr-MSxjV0wsMjE3MzQ4MzIz&v=40", [], false),
    new Level("RENOVATION", 0, 4, "Limbo", "138079978", "Any Route", ["EndGamer7896"], "-", "https://www.youtube.com/embed/BVGFRk3T9js", [], "/nongs/RENOVATION.mp3"),
    new Level("The Third Robot", 0, 5, "Limbo", "136718958", "Any Route", ["Zannoz"], "-", "https://youtube.com/embed/dQw4w9WgXcQ", [], false),
    new Level("Wear House", 0, 21, "Limbo", "144301139", "Small Skips", ["zis08"], "-", "https://youtube.com/embed/dQw4w9WgXcQ", [], "/nongs/Wear House.mp3"),
    new Level("flaming cavern", 0, 11, "Limbo", "144036531", "Any Route", ["windboss07"], "-", "https://youtube.com/embed/dQw4w9WgXcQ", [], false),
    new Level("NOBOT", 0, 19, "Limbo", "146238375", "Showcase Route", ["wpeir"], "-", "https://youtube.com/embed/6orLfqP0pEk", [], "/nongs/NOBOT.mp3"),
    new Level("Radiant", 0, 13, "Limbo", "145002485", "Small Skips", ["probro675"], "-", "https://youtube.com/embed/D0fo1ge7bKc?is=rG4uLOJdjAKJAaty", [], false),
    new Level("Killbot", 0, 16, "Limbo", "146039806", "Showcase Route", ["XanderGMDD"], "-", "https://youtube.com/embed/W4mnR9ADnf8", [], false),
    new Level("Rcl is   fake", 0, 11, "Limbo", "143055646", "Any Route", ["Seedskyy73"], "-", "https://youtube.com/embed/4zXwWUXjG0U", [], false),
    new Level("Staticism", 0, 21, "Limbo", "145228805", "Showcase Route", ["Vinecke123"], "-", "https://medal.tv/games/geometry-dash/clip/n9hhjDKD1xcRjO3be?invite=cr-MSx3a2YsNDczMTIyMTcw", [], "/nongs/Robotic Exurtion, Staticism.mp3"),
    new Level("nostalgia", 0, 4, "Limbo", "144145760", "Any Route", ["TJEmpire"], "-", "https://youtube.com/embed/QjG1CrJNbYQ", [], false),
    new Level("Helix", 0, 3, "Limbo", "145507104", "Small Skips", ["itsGalaxie"], "-", "https://streamable.com/e/1efzch", [], false),
    new Level("Enlighten", 0, 8, "Limbo", "143639603", "Small Skips", ["NatanGMDD"], "-", "https://youtube.com/embed/dQw4w9WgXcQ", [], "/nongs/Enlighten.mp3"),
    new Level("I AM NOT FLAT", 0, 4, "Limbo", "141879903", "Any Route", ["xpfinker812"], "-", "https://medal.tv/games/geometry-dash/clip/mQlqNIl9sq916CIHE?invite=cr-MSwzYnIsNTMwODEwMjU3&v=17", [], "/nongs/I AM NOT FLAT.mp3"),
];

let allLevels = levels.concat(displacement);

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
    var completionLeaderboard = document.getElementById("completionLeaderboard");
    var qualityLeaderboard = document.getElementById("qualityLeaderboard");
    var creatorLeaderboard = document.getElementById("creatorLeaderboard");

    let players = {};

    for (let level of levels) {
        for (let record of level.records) {
            console.log(record)
            if (!players[record.name]) {
                players[record.name] = 0;
            }

            players[record.name] += Math.round((level.points * 100));
        }
    };

    let sortedPlayers = Object.entries(players).sort((a, b) => b[1] - a[1]);

    for (let [player, points] of sortedPlayers) {
        let actualPoints = points / 100;

        let playerLi = document.createElement("li");
        playerLi.innerHTML = `${player}: ${actualPoints} points`;
        playerLi.className = getRank(player);
        leaderboard.appendChild(playerLi);
    };

    let sortedCompletions = Object.entries(playerRecordNumbers).sort((a, b) => b[1] - a[1]);

    for (let [player, completions] of sortedCompletions) {
        let playerLi = document.createElement("li");
        playerLi.innerHTML = `${player}: ${completions} records`;
        playerLi.className = getRank(player);
        completionLeaderboard.appendChild(playerLi);
    }

    let qualityScores = {};
    for (let level of allLevels) {
        if (!level.discredited) {
            for (let creator of level.creator) {
                if (level.quality) {
                    if (!qualityScores[creator]) {
                        qualityScores[creator] = 0;
                    }

                    qualityScores[creator] += level.quality;
                }
            }
        }
    };

    let sortedQuality = Object.entries(qualityScores).sort((a, b) => b[1] - a[1]);

    for (let [player, quality] of sortedQuality) {
        let playerLi = document.createElement("li");
        playerLi.innerHTML = `${player}: ${quality} quality points`;
        playerLi.className = getRank(player);
        qualityLeaderboard.appendChild(playerLi);
    }

    let levelsCreated = {};
    for (let level of allLevels) {
        if (!level.discredited && level.quality) {
            for (let creator of level.creator) {
                if (!levelsCreated[creator]) {
                    levelsCreated[creator] = 0;
                }

                levelsCreated[creator]++;
            }
        }
    };

    let sortedCreators = Object.entries(levelsCreated).sort((a, b) => b[1] - a[1]);

    for (let [creator, created] of sortedCreators) {
        let creatorLi = document.createElement("li");
        creatorLi.innerHTML = `${creator}: ${created} levels created`;
        creatorLi.className = getRank(creator);
        creatorLeaderboard.appendChild(creatorLi);
    };

    // Sort levels by AVERAGE quality rating, quality/created into averageLeaderboard
    let averageScores = {};

    for (let level of allLevels) {
        if (!level.discredited) {
            for (let creator of level.creator) {
                if (level.quality) {
                    if (!averageScores[creator]) {
                        averageScores[creator] = { totalQuality: 0, totalLevels: 0 };
                    }

                    averageScores[creator].totalQuality += level.quality;
                    averageScores[creator].totalLevels++;
                }
            }
        }
    };

    console.log(averageScores);

    let averageScoresCalculated = {};
    for (let creator in averageScores) {
        let totalQuality = averageScores[creator].totalQuality;
        let totalLevels = averageScores[creator].totalLevels;
        if (totalLevels >= 3) {
            let averageQuality = totalQuality / totalLevels;
            averageScoresCalculated[creator] = averageQuality;
        }
    }

    let sortedAverage = Object.entries(averageScoresCalculated).sort((a, b) => b[1] - a[1]);
    for (let [creator, average] of sortedAverage) {
        let averageLi = document.createElement("li");
        averageLi.innerHTML = `${creator}: ${average.toFixed(2)} average quality points`;
        averageLi.className = getRank(creator);
        averageLeaderboard.appendChild(averageLi);
    }
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

let playerRecordNumbers = {};

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

    let totalCompleted = 0;

    for (let level of levels) {
        for (let record of level.records) {
            if (record.name === player) {
                totalCompleted++;
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

    playerRecordNumbers[player] = totalCompleted;

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
    let quality = document.getElementById("quality");
    let tier = document.getElementById("tier");
    let id = document.getElementById("levelId");
    let routes = document.getElementById("routes");
    let ytEmbed = document.getElementById("ytEmbed");
    let nong = document.getElementById("nong");
    let nongBox = document.getElementById("nongBox");

    let recordsSection = document.getElementById("recordsSection");

    for (let level of allLevels) {
        if (level.name === newLevel) {
            if (level.creator.length > 1) {
                var levelCreator = "";
                for (let i = 0; i < level.creator.length; i++) {
                    if (i === 0) {
                        levelCreator += level.creator[i];
                    } else if (i === level.creator.length - 1) {
                        if (level.creator.length > 2) {
                            levelCreator += ", and " + level.creator[i];
                        } else {
                            levelCreator += " and " + level.creator[i];
                        }
                    } else {
                        levelCreator += ", " + level.creator[i];
                    }
                }
            } else {
                var levelCreator = level.creator[0];
            }

            levelName.textContent = level.name + " by " + levelCreator;
            levelVerified.textContent = "verified by " + level.verifier;
            points.textContent = level.points;
            quality.textContent = level.quality;
            tier.textContent = level.tier;
            id.textContent = level.id;
            routes.textContent = level.routes;
            ytEmbed.src = level.videolink;
            nong.href = level.nong;

            if (level.nong) {
                nongBox.style.display = "block";
            } else {
                nongBox.style.display = "none";
            }

            if (displacement.some(lvl => lvl.name === newLevel)) {
                recordsSection.innerHTML = "<strong><p>Records for levels in the Displacement Zone are not tracked, as they are not officially part of the list.</p></strong>";
            } else {

                recordsSection.innerHTML = `<details>
                        <summary id="summary">Records (${level.totalRecords})</summary>
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