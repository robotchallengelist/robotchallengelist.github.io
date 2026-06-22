function Level(name, points, quality, tier, id, routes, creator, verifier, videolink, records, nong) {
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
    this.nong = nong;
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
    ....###....##.....##.########.########.##.....##.##....##..######..########
    ...##.##...###...###.##..........##....##.....##..##..##..##....##....##...
    ..##...##..####.####.##..........##....##.....##...####...##..........##...
    .##.....##.##.###.##.######......##....#########....##.....######.....##...
    .#########.##.....##.##..........##....##.....##....##..........##....##...
    .##.....##.##.....##.##..........##....##.....##....##....##....##....##...
    .##.....##.##.....##.########....##....##.....##....##.....######.....##...
    */
    // new Level("test", 110, 0, "Amethyst", "140134987", "Any Route", "Farlayy", "EndGamer7896", "https://clips.twitch.tv/embed?clip=RenownedAmericanFriseeDxAbomb-SlDXfPFhO1yBDc89&parent=robotchallengelist.github.io", [], false),
    new Level("Mad Prophets", 101.1, 13, "Amethyst", "140134987", "Any Route", ["Farlayy"], "EndGamer7896", "https://medal.tv/games/geometry-dash/clip/mGyEUN2HMTp9yPEph?invite=cr-MSxscmEsNTk1MDYwNDc2", [
        new Record("EndGamer7896", "13,574", "8/10", "Low Amethyst, 100-105 points", "https://medal.tv/games/geometry-dash/clips/mGyEUN2HMTp9yPEph?invite=cr-MSxscmEsNTk1MDYwNDc2"),
        new Record("Beefyikes", "4,500", "6/10", "Probably top 1", "https://youtu.be/LzfdYC6YebQ"),
    ], "/nongs/Mad Prophets.mp3"),

    /*
    .########..##..........###....########.####.##....##.##.....##.##.....##
    .##.....##.##.........##.##......##.....##..###...##.##.....##.###...###
    .##.....##.##........##...##.....##.....##..####..##.##.....##.####.####
    .########..##.......##.....##....##.....##..##.##.##.##.....##.##.###.##
    .##........##.......#########....##.....##..##..####.##.....##.##.....##
    .##........##.......##.....##....##.....##..##...###.##.....##.##.....##
    .##........########.##.....##....##....####.##....##..#######..##.....##
    */
    new Level("robopolis       ", 96.24, 10, "Platinum", "137347848", "Any Route", ["placek3"], "placek3", "https://www.youtube.com/embed/55zSeUXG3VY", [
        new Record("placek3", "17,246", "N/A", "N/A", "https://www.youtube.com/watch?v=55zSeUXG3VY"),
        new Record("EeryTunic", "1,376", "N/A", "Top 1", "")
    ], false),
    new Level("Cliff Hanger", 93.75, 19, "Platinum", "128936112", "Verification Route", ["zis08"], "zis08", "https://medal.tv/games/geometry-dash/clip/mXrWb3qEK5HXHrUv6?invite=cr-MSxjdFIsMTY4ODkwOTU4&v=17", [
        new Record("zis08", "24,337", "8/10", "Low Amethyst Top 1 - 3", "https://medal.tv/games/geometry-dash/clips/mXrWb3qEK5HXHrUv6?invite=cr-MSxjdFIsMTY4ODkwOTU4&v=17"),
        new Record("probro675", "30,584", "Top Platinum 97.5", "https://youtu.be/vt_udtW29sc?is=--5NaGLIWd_hMAuz"),
        new Record("RustyGD25", "10,732", "high platinum (89 points)", "https://youtu.be/l2hqliZHM-w?si=07aLH7Jk2zRS29QH"),
        new Record("tFluffy", "4,000", "N/A", "fucking uhh flamewall idk what tiers there are", "https://www.youtube.com/watch?v=SO4rqFoSaWEGD"),
    ], "/nongs/Cliff Hanger.mp3"),
    new Level("Headrush", 88.54, 12, "Platinum", "143152704", "Verification Route", ["ariopc"], "ariopc", "https://medal.tv/games/geometry-dash/clip/mXlMOAl0ry0Cb6cK4?invite=cr-MSxNeGQsMjE3MzQ4MzIz&v=47", [
        new Record("ariopc", "12,781", "N/A", "top 3", "https://medal.tv/games/geometry-dash/clips/mXlMOAl0ry0Cb6cK4?invite=cr-MSxNeGQsMjE3MzQ4Mz323&v=47"),
    ], false),
    new Level("Double Double PLUS", 85.83, 2, "Platinum", "138089168", "Any Route", ["zis08"], "zis08", "https://medal.tv/games/geometry-dash/clip/muXjHLShWGsp-QFck?invite=cr-MSw1bHUsMTY4ODkwOTU4", [
        new Record("zis08", "7,441", "10/10", "Mid Platinum", "https://medal.tv/games/geometry-dash/clips/muXjHLShWGsp-QFck?invite=cr-MSw1bHUsMTY4ODkwOTU4"),
        new Record("XanderGMDD", "3,886", "0/10", "Really fucking hard, 80-88 points", "https://medal.tv/games/geometry-dash/clips/mOiQbAFGnTDxF9ArR?invite=cr-MSxobUssMzM2NzY3Njgx&v=23"),
    ], false),
    new Level("rubrub", 84.86, 20, "Platinum", "142653512", "Verification Route", ["Seedskyy73"], "sparked18", "https://youtube.com/embed/Giw-WEDddSM", [
        new Record("sparked18", "5,522", "5/10", "Top 3", "https://www.youtube.com/watch?v=Giw-WEDddSM"),
        new Record("zis08", "3,817", "5/10", "Little Harder than Shardiopolis", "https://medal.tv/games/geometry-dash/clips/mVKTeUig5nQ9Zprgh?invite=cr-MSxPeGosMTY4ODkwOTU4&v=28"),
    ], false),
    new Level("red scapes", 78, 16, "Platinum", "142592451", "Small Skips Allowed", ["VerdantXD"], "RhiliXZ27", "https://youtube.com/embed/Lwg1J_PJ1wg?si=3bISZIBTNfDJLef0", [
        new Record("RhiliXZ27", "449", "N/A", "#4", "https://www.youtube.com/watch?v=Lwg1J_PJ1wg"),
        new Record("Komically", "1,024", "6/10", "4-5, definitely platinum", "https://youtu.be/GzcOzl152z4"),
        new Record("ariopc", "2,437", "3/10", "Tied with Shardiopolis for me", "https://medal.tv/games/geometry-dash/clips/mVdMCOV17tJ7HaIGP?invite=cr-MSx2V3YsMjE3MzQ4MzIz&v=17"),
        new Record("sparked18", "687", "9/10", "7-9", "https://youtu.be/3MQC8_gumYc"),
        new Record("probro675", "1,292", "0/10", "Entry Platinum (78 points)", "https://youtu.be/R59zp66u740?is=p3HHzywcgUmgE4Tf"),
        new Record("zis08", "2,733", "1/10", "Same diff as RubRub", "https://medal.tv/games/geometry-dash/clips/mVN7u7PRKHZHLZXIK?invite=cr-MSw1S2ssMTY4ODkwOTU4"),
        new Record("EndGamer7896", "3,715", "Harder than Shardiopolis", "https://medal.tv/games/geometry-dash/clips/mUML4fjP1mUdbbISx?invite=cr-MSxldXUsNTk1MDYwNDc2"),
    ]),
    new Level("Shardiopolis", 76.36, 25, "Platinum", "139167165", "Small Skips Allowed", ["probro675"], "probro675", "https://youtube.com/embed/S2B2JVEOxbQ?si=0hlf-vQHAkxh612i", [
        new Record("probro675", "1,800", "8/10", "76.5", "https://youtu.be/S2B2JVEOxbQ?si=0hlf-vQHAkxh612i"),
        new Record("XanderGMDD", "2,846", "7/10", "70-79 points", "https://medal.tv/games/geometry-dash/clips/mOprL3M5LuNCEpfwV?invite=cr-MSwxdzksMzM2NzY3Njgx"),
        new Record("zis08", "1,500", "9/10", "High Gold", "https://medal.tv/games/geometry-dash/clips/mPuMMCtSDT99NBHgY?invite=cr-MSxEY0UsMTY4ODkwOTU4&v=16"),
        new Record("ariopc", "5,750", "7.5/10", "Exactly right", "https://medal.tv/games/geometry-dash/clips/mSINX6pz870cHYqAf?invite=cr-MSxUZHUsMjE3MzQ4MzIz"),
        new Record("Taublix", "2,091", "7.5/10", "It's my hardest on the list for sure", "https://www.youtube.com/watch?v=ya2wq8Z4LPc"),
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
    new Level("SUGAR TRIP", 72.25, 12, "Gold", "137410249", "Any Route", ["XanderGMDD"], "XanderGMDD", "https://medal.tv/games/geometry-dash/clip/mrFHRKVURma6Jkca6?invite=cr-MSxJbkQsNTkwMDQ5Mzc3", [
        new Record("XanderGMDD", "1,590", "N/A", "66-72 points", "https://medal.tv/games/geometry-dash/clips/mrFHRKVURma6Jkca6?invite=cr-MSxJbkQsNTkwMDQ5Mzc3"),
        new Record("placek3", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mrOKUSX4fdNvnBjYb?invite=cr-MSxJSHMsNTk0ODYzMTcx&v=22"),
        new Record("Farlayy", "N/A", "N/A", "N/A", ""),
        new Record("EndGamer7896", "N/A", "N/A", "74 points", "https://youtu.be/lXRG1Xt0irs"),
        new Record("Taublix", "1,127", "7/10", "Prolly accurate", "https://www.youtube.com/watch?v=ca4v2M-Apk0"),
    ], false),
    new Level("Window", 70.57, 9, "Gold", "141886598", "Small Skips Allowed", ["Sp4c3m0nk3y"], "EndGamer7896", "https://medal.tv/games/geometry-dash/clip/mY4s0vno1TRa_Td68?invite=cr-MSx0Mm0sNTk1MDYwNDc22", [
        new Record("EndGamer7896", "2,200", "7/10", "71 points", "https://medal.tv/games/geometry-dash/clips/mQtF9s3Ac_Dp5_bqL?invite=cr-MSw5MmUsNTk1MDYwNDc2"),
        new Record("ariopc", "1,500", "4.5/10", "68 points", "https://medal.tv/games/geometry-dash/clips/mTHCKch8GXJeiZCct?invite=cr-MSx3ZmQsMjE3MzQ4MzIz&v=33"),
        new Record("Taublix", "1,035", "8/10", "harder than Cherry Blossoms, easier than Heartbot", "https://www.youtube.com/watch?v=xX6-8C07hAk"),
    ], false),
    new Level("Heartbot", 70.38, 17, "Gold", "142716543", "Any Route", ["Taublix"], "Taublix", "https://www.youtube.com/embed/PUgQFNbDMUI", [
        new Record("Taublix", "1,702", "6.5/10", "Harder than anything else I've beaten", "https://www.youtube.com/watch?v=PUgQFNbDMUI"),
    ], false),
    new Level("Startide", 69.83, 18, "Gold", "143002445", "Any Route", ["Taublix"], "Taublix", "https://www.youtube.com/embed/2hS4noiyM3I", [
        new Record("Taublix", "1,347", "9/10", "Harder than crystal castle, easier than Cherry Blossoms", "https://www.youtube.com/watch?v=2hS4noiyM3I"),
    ], false),
    new Level("Redemption rebirth", 69.65, 17, "Gold", "137617507", "Any Route", ["Komically", "sourceerrortxt"], "zeroskills", "https://www.youtube.com/embed/Loe1H_IsImQ", [
        new Record("zeroskills", "N/A", "N/A", "Easier than SLOWDOWN", "https://youtu.be/Loe1H_IsImQ"),
        new Record("EndGamer7896", "2,867", "7/10", "72 points", "https://medal.tv/games/geometry-dash/clips/mud8uQC9RJAAsVtzq?invite=cr-MSw0N2EsNTk1MDYwNDc2"),
    ], false),
    new Level("Cherry Blossoms", 66.4, 10, "Gold", "142557887", "Any Route", ["Taublix"], "Taublix", "https://www.youtube.com/embed/Ivr3wYNAHXE", [
        new Record("Taublix", "620", "7/10", "Low gold, around crystal castle difficulty", "https://www.youtube.com/watch?v=Ivr3wYNAHXE"),
        new Record("ariopc", "961", "7.5/10", "Mid-High Gold", "https://medal.tv/games/geometry-dash/clips/mUvKZfL9QaCDDI2ro?invite=cr-MSxnTEosMjE3MzQ4MzIz&v=31"),
        new Record("sparked18", "1,829", "8/10", "idt i've played enough levels to give an opinion", "https://youtu.be/-mrARiGd2HM"),
    ], false),
    new Level("Necrobot", 65.51, 12, "Gold", "143088384", "Verification Route", ["Seedskyy73"], "Seedskyy73", "https://medal.tv/games/geometry-dash/clip/mX2dREVUfIZYaAVxj?invite=cr-MSxkMnUsNTI1NzU2MjU4", [
        new Record("Seedskyy73", "637", "N/A", "idk high gold-platinum or sum", "https://medal.tv/games/geometry-dash/clips/mX2dREVUfIZYaAVxj?invite=cr-MSxkMnUsNTI1NzU2MjU8"),
        new Record("EndGamer7896", "1,221", "9.5/10", "61-64 points", "https://medal.tv/games/geometry-dash/clips/mX3z1x5SRkK1r6KPs?invite=cr-MSxtZTUsNTk1MDYwNDc2"),
        new Record("Taublix", "253", "9.5/10", "easier than SLOWDOWN harder than is life worth living", "https://www.youtube.com/watch?v=ykZOYhxY0zE"),
    ], false),
    new Level("komicaly never clear", 64.8, 1, "Gold", "141205747", "Small Skips Allowed", ["xpfinker812"], "Komically", "https://youtube.com/embed/15xmE_RUPaI", [
        new Record("Komically", "2,204", "0/10", "71 points", "https://www.youtube.com/watch?v=15xmE_RUPaI"),
        new Record("ariopc", "452", "2/10", "Low-Mid Gold", "https://medal.tv/games/geometry-dash/clips/mTWewLxLfZ-kg-EGF?invite=cr-MSxJbnEsMjE3MzQ4MzIz&v=30"),
    ], false),
    new Level("Matrix", 63.43, 20, "Gold", "142843519", "Verification Route", ["Seedskyy73"], "zis08", "https://medal.tv/games/geometry-dash/clip/mWWehO7YIJefuBhu8?invite=cr-MSxlWmgsMTY4ODkwOTU4", [
        new Record("zis08", "1,359", "8/10", "Low gold like VSR Diff", "https://medal.tv/games/geometry-dash/clips/mWWehO7YIJefuBhu8?invite=cr-MSxlWmgsMTY4ODkwOTU4"),
    ], "/nongs/Matrix.mp3"),
    new Level("dark something", 63.31, 4, "Gold", "142129059", "Small Skips Allowed", ["ariopc"], "ariopc", "https://medal.tv/games/geometry-dash/clip/mRFwHQfU8bTIjs4VS?invite=cr-MSxTcmIsMjE3MzQ4MzIz&v=63", [
        new Record("ariopc", "2,002", "5.5/10", "Gold tier maybe", "https://medal.tv/games/geometry-dash/clips/mRFwHQfU8bTIjs4VS?invite=cr-MSxTcmIsMjE3MzQ4MzIz&v=63"),
        new Record("EndGamer7896", "3,021", "4/10", "64 points", "https://medal.tv/games/geometry-dash/clips/mQJy48e0skT2ct10A?invite=cr-MSxueGcsNTk1MDYwNDc2"),
        new Record("Taublix", "469", "8.5/10", "it's good where it is rn", "https://www.youtube.com/watch?v=T12vckAjHO4"),
    ], false),
    new Level("crystal castle", 62.15, 9, "Gold", "142272601", "Verification Route", ["ariopc"], "ariopc", "https://medal.tv/games/geometry-dash/clip/mSoPKyf6csJswSZL8?invite=cr-MSxUMVksMjE3MzQ4MzIz&v=51", [
        new Record("ariopc", "2,376", "8/10", "Mid Gold", "https://medal.tv/games/geometry-dash/clips/mSoPKyf6csJswSZL8?invite=cr-MSxUMVksMjE3MzQ4Mz323&v=51"),
        new Record("EndGamer7896", "1,664", "5/10", "63 points", "https://medal.tv/games/geometry-dash/clips/mSNpxHGBD1nJw8v8R?invite=cr-MSxjcWEsNTk1MDYwNDc2"),
        new Record("Taublix", "976", "8/10", "Probably accurate", "https://www.youtube.com/watch?v=j2Rke-E7MtE"),
        new Record("probro675", "983", "5.5/10", "Mid Gold 61 points", "https://youtu.be/Ge0j9wapw-c?is=sXZDGQHuX8-_HjVb"),
    ], false),
    new Level("SLOWDOWN", 62.08, 15, "Gold", "136717712", "Any Route", ["snowwgmdd"], "Zannoz", "https://medal.tv/games/geometry-dash/clip/moqvde4LlCgunP6bZ?invite=cr-MSxBeGosNTM1NDU2MDU0", [
        new Record("Zannoz", "2,665", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/moqvde4LlCgunP6bZ?invite=cr-MSxBeGosNTM1NDU2MDU0"),
        new Record("Farlayy", "N/A", "N/A", "N/A", ""),
        new Record("XanderGMDD", "N/A", "N/A", "55-57 points", "https://medal.tv/games/geometry-dash/clips/mosGH6H1Osmfz2Ysy?invite=cr-MSx4Z2gsMzM2NzY3Njgx"),
        new Record("EndGamer7896", "N/A", "N/A", "65 points", "https://medal.tv/games/geometry-dash/clips/mrcAu7vfrTqQhVkOz?invite=cr-MSx0ZTYsNTk1MDYwNDc2"),
        new Record("placek3", "N/A", "N/A", "N/A", "https://www.youtube.com/watch?v=8CEpN01ZWPc"),
        new Record("Taublix", "803", "7.5/10", "Probably well placed", "https://www.youtube.com/watch?v=V6Lgc03sGw0"),
        new Record("Monkeyboy21", "4,865", "8/10", "Probably good where its at (Low-Mid Gold)", "https://medal.tv/games/geometry-dash/clips/mVkOCxsuK4d4SDV1H?invite=cr-MSxIM0EsMTk0NjAyNjk3&v=30"),
    ], false),
    new Level("Jade Runner", 60, 8, "Gold", "136732810", "Any Route", ["EndGamer7896"], "XanderGMDD", "https://medal.tv/games/geometry-dash/clip/moPx7tKLuNQoSzZAB?invite=cr-MSwycVQsMzM2NzY3Njgx", [
        new Record("XanderGMDD", "N/A", "N/A", "40-44 points", "https://medal.tv/games/geometry-dash/clips/moPx7tKLuNQoSzZAB?invite=cr-MSwycVQsMzM2NzY3Njgx"),
        new Record("Farlayy", "N/A", "N/A", "N/A", ""),
        new Record("EndGamer7896", "N/A", "N/A", "70 points", "https://medal.tv/games/geometry-dash/clips/mrBkjC2JyixC2UlVh?invite=cr-MSw5MWwsNTk1MDYwNDc2"),
        new Record("placek3", "N/A", "N/A", "N/A", "https://www.youtube.com/watch?v=8CEpN01ZWPc"),
        new Record("ariopc", "1,672", "0/10", "Harder than where it is now", "https://medal.tv/games/geometry-dash/clips/mWzscZKGc6b-0bK20?invite=cr-MSxqTG4sMjE3MzQ4MzIz"),
    ], false),
    new Level("robotnics", 58.38, 6, "Gold", "136706958", "Any Route", ["XanderGMDD"], "XanderGMDD", "https://medal.tv/games/geometry-dash/clip/monG1ZCyALH5FzBu-?invite=cr-MSxETUMsMzM2NzY3Njgx", [
        new Record("XanderGMDD", "1,829", "N/A", "57-60 points", "https://medal.tv/games/geometry-dash/clips/monG1ZCyALH5FzBu-?invite=cr-MSxETUMsMzM2NzY3Njgx"),
        new Record("Farlayy", "N/A", "N/A", "N/A", ""),
        new Record("4096Tristan", "N/A", "N/A", "N/A", "https://youtu.be/VcmM388hsMA?si=TZIcbz6_-3SvMPvN"),
        new Record("EndGamer7896", "N/A", "N/A", "61 points", "https://medal.tv/games/geometry-dash/clips/mrdpiSYThwzw7WhvO?invite=cr-MSxnZGosNTk1MDYwNDc2"),
        new Record("placek3", "N/A", "N/A", "N/A", "https://www.youtube.com/watch?v=8CEpN01ZWPc"),
    ], false),
    new Level("VSR", 55.57, 13, "Gold", "141297381", "Small Skips Allowed", ["Vinecke123"], "XanderGMDD", "https://medal.tv/games/geometry-dash/clip/mNp9mDGlV-CqIJwRL?invite=cr-MSxGYWcsMzM2NzY3Njgx&v=32", [
        new Record("XanderGMDD", "901", "8/10", "50-53 points", "https://medal.tv/games/geometry-dash/clips/mNp9mDGlV-CqIJwRL?invite=cr-MSxGYWcsMzM2NzY3Njgx&v=32"),
        new Record("EndGamer7896", "672", "8/10", "58 points", "https://medal.tv/games/geometry-dash/clips/mNpaTKjrZKalpN5Sg?invite=cr-MSw1ZjksNTk1MDYwNDc2"),
        new Record("Komically", "611", "9/10", "57 points", "https://youtu.be/WEHU8OcA0Q4"),
        new Record("Monkeyboy21", "953", "8/10", "Good where its at", "https://medal.tv/games/geometry-dash/clips/mOXcxhXqCbrRhBvC3?invite=cr-MSxaVTYsMTk0NjAyNjk3&v=30"),
        new Record("ariopc", "703", "8.5/10", "56 points", "https://medal.tv/games/geometry-dash/clips/mTVGL4gi6hMuP0IB4?invite=cr-MSxHMTMsMjE3MzQ4MzIz&v=27"),
        new Record("zis08", "1,649", "6/10", "N/A", "https://medal.tv/games/geometry-dash/clips/mW0sEnghs1uZ2WjNa?invite=cr-MSxZRE8sMTY4ODkwOTU4"),
        new Record("Taublix", "300", "9.5/10", "fine where it is", "https://www.youtube.com/watch?v=pqRKXqUlf3Q"),
    ], false),
    new Level("is life worth living", 54.23, 24, "Gold", "142923554", "Verification Route", ["Komically"], "Komically", "https://youtube.com/embed/BcOpJuh1Be8", [
        new Record("Komically", "999", "9.5/10", "Low Gold", "https://www.youtube.com/watch?v=BcOpJuh1Be8"),
        new Record("Taublix", "309", "10/10", "Low Gold", "https://www.youtube.com/watch?v=DzPUBBskk34"),
        new Record("4096Tristan", "365", "Harder than Gold Temple, easier than robotnics", "https://youtu.be/jvAKH7tAAV0"),
        new Record("EndGamer7896", "669", "62.5 points", "https://medal.tv/games/geometry-dash/clips/mWeD4YfDrhBPiwp9b?invite=cr-MSx5ZjYsNTk1MDYwNDc2"),
        new Record("sparked18", "796", "7/10", "good where it's at", "https://youtu.be/W4diAeLIb1k"),
        new Record("probro675", "259", "10/10", "Low Gold 55.25 points (Just below VSR)", "https://youtu.be/ibY2v43tg3c?is=USwhdF2u9cIOocu2"),
        new Record("TheUnoKing9", "2,012", "9/10", "low gold?", "https://youtu.be/iqWk3YuCTlE"),
        new Record("ariopc", "387", "9/10", "like mid silver idk", "https://medal.tv/games/geometry-dash/clips/mXqI89Vkle16Xcq7o?invite=cr-MSxxeG0sMjE3MzQ4MzIz&v=37"),
        new Record("zis08", "910", "10/10", "high Silver", "https://medal.tv/games/geometry-dash/clips/mXsS8D9nybq-jZPNA?invite=cr-MSwyWjYsMTY4ODkwOTU4"),
    ], false),
    new Level("Microclick Hell", 54.15, 3, "Gold", "142803485", "Any Route", ["xpfinker812"], "zis08", "https://medal.tv/games/geometry-dash/clip/mWVJRTdAViu4LTT7p?invite=cr-MSxhWWksMTY4ODkwOTU4&v=15", [
        new Record("zis08", "708", "5/10", "Mid Silver", "https://medal.tv/games/geometry-dash/clips/mWVJRTdAViu4LTT7p?invite=cr-MSxhWWksMTY4ODkwOTU4&v=15"),
    ], false),
    new Level("grain robot 43", 54.07, 9, "Gold", "142865365", "Small Skips Allowed", ["itsGalaxie"], "EndGamer7896", "https://medal.tv/games/geometry-dash/clip/mVMXDBEoY89lr2-ev?invite=cr-MSxzbWgsNTk1MDYwNDc2", [
        new Record("EndGamer7896", "1,250", "1/10", "Easier than SLOWDOWN", "https://medal.tv/games/geometry-dash/clips/mVMXDBEoY89lr2-ev?invite=cr-MSxzbWgsNTk1MDYwNDc2"),
        new Record("zis08", "380", "5/10", "mid Silver", "https://medal.tv/games/geometry-dash/clips/mXtcsW8SZvEGrgLEc?invite=cr-MSxjQ0csMTY4ODkwOTU4&v=17"),
    ], false),
    new Level("Gold Temple", 51.8, 4, "Gold", "136720720", "Any Route", ["XanderGMDD"], "XanderGMDD", "https://medal.tv/games/geometry-dash/clip/morBvhE7In0RYdbUN?invite=cr-MSx3WGQsNTkwMDQ5Mzc3", [
        new Record("XanderGMDD", "N/A", "N/A", "45-49 points", "https://medal.tv/games/geometry-dash/clips/morBvhE7In0RYdbUN?invite=cr-MSx3WGQsNTkwMDQ5Mzc3"),
        new Record("Farlayy", "N/A", "N/A", "N/A", ""),
        new Record("EndGamer7896", "N/A", "N/A", "55 points", "https://medal.tv/games/geometry-dash/clips/mrdpiSYThwzw7WhvO?invite=cr-MSxnZGosNTk1MDYwNDc2"),
        new Record("placek3", "N/A", "N/A", "N/A", "https://www.youtube.com/watch?v=8CEpN01ZWPc"),
        new Record("probro675", "1,316", "0/10", "No clue, but definitely not silver", "https://youtu.be/wgLnZWXC4hc?si=E9ovoTDTNuVSHd38"),
        new Record("ariopc", "1,925", "0/10", "Probably fine where its at", "https://medal.tv/games/geometry-dash/clips/mRRwdx5r3apMcFaw4?invite=cr-MSx4RFYsMjE3MzQ4MzIz&v=24"),
    ], false),

    /*
    ..######..####.##.......##.....##.########.########.
    .##....##..##..##.......##.....##.##.......##.....##
    .##........##..##.......##.....##.##.......##.....##
    ..######...##..##.......##.....##.######...########.
    .......##..##..##........##...##..##.......##...##..
    .##....##..##..##.........##.##...##.......##....##.
    ..######..####.########....###....########.##.....##
    */
    new Level("Shakester", 47.6, 3, "Silver", "85678633", "Any Route", ["Farlayy"], "Farlayy", "https://youtube.com/embed/RAVFhEVV6hE", [
        new Record("Farlayy", "N/A", "N/A", "N/A", "https://youtube.com/watch?v=RAVFhEVV6hE"),
        new Record("placek3", "N/A", "N/A", "N/A", "https://www.youtube.com/watch?v=8CEpN01ZWPc"),
        new Record("zeroskills", "N/A", "N/A", "Good as is", ""),
        new Record("EndGamer7896", "1,783", "3/10", "45 points", "https://medal.tv/games/geometry-dash/clips/mIxu2N3FC7IYQZa8_?invite=cr-MSx2MGcsNTk1MDYwNDc2"),
        new Record("XanderGMDD", "1,046", "4/10", "53-55 points", "https://medal.tv/games/geometry-dash/clips/mOgcaQG4NTLzBKXtK?invite=cr-MSxQNGIsMzM2NzY3Njgx&v=31"),
        new Record("Taublix", "305", "5.5/10", "I think its okay where its at right now", "https://www.youtube.com/watch?v=mfiFefSQfQc"),
    ], false),
    new Level("Skylight", 45.2, 9, "Silver", "142869386", "Any Route", ["Taublix"], "Taublix", "https://www.youtube.com/embed/hkXnbqdOCyA", [
        new Record("Taublix", "153", "10/10", "Mid Silver tier", "https://www.youtube.com/watch?v=hkXnbqdOCyA"),
        new Record("sourceerrortxt", "2,757", "6/10", "Low Gold (50-57 points)", "https://youtu.be/m3O7ZFltKK0"),
    ], false),
    new Level("Torch", 42.95, 13, "Silver", "143162026", "Any Route", ["Taublix"], "Taublix", "https://www.youtube.com/embed/eEztV-Uya7k", [
        new Record("Taublix", "270", "9.5/10", "Middle to low Silver probably", "https://www.youtube.com/watch?v=eEztV-Uya7k"),
    ], false),
    new Level("robopolis copyable 2", 42.39, 9, "Silver", "142803392", "Verification Route", ["ariopc"], "ariopc", "https://medal.tv/games/geometry-dash/clip/mVn9dTu2m39TAgTJ_?invite=cr-MSxqZGgsMjE3MzQ4MzIz&v=42", [
        new Record("ariopc", "809", "9/10", "High Silver / Low Gold", "https://medal.tv/games/geometry-dash/clips/mVn9dTu2m39TAgTJ_?invite=cr-MSxqZGgsMjE3MzQ4Mz23&v=42"),
        new Record("EndGamer7896", "791", "8/10", "69.5 points", "https://medal.tv/games/geometry-dash/clips/mVBBFgG5wF2rHQ0gp?invite=cr-MSx3c3QsNTk1MDYwNDc2"),
        new Record("Taublix", "184", "9.5/10", "Easier than Skylight, harder than im crine", "https://www.youtube.com/watch?v=-UxXKaPL8a4"),
        new Record("sparked18", "667", "N/A", "mid-high silver", "https://youtu.be/W4diAeLIb1k"),
    ], false),
    new Level("Joy and rainbows", 36.38, 3, "Silver", "141413356", "Small Skips Allowed", ["Sp4c3m0nk3y"], "Komically", "https://youtube.com/embed/338pvY8as70", [
        new Record("Komically", "100", "5/10", "Top of silver", "https://www.youtube.com/watch?v=338pvY8as70"),
        new Record("XanderGMDD", "184", "6/10", "35-39 points", "https://medal.tv/games/geometry-dash/clips/mOglTKGkrz_fz3OFk?invite=cr-MSxpMkwsMzM2NzY3Njgx&v=23"),
    ], false),
    new Level("Leaper", 36.33, 3, "Silver", "141401606", "Any Route", ["EndGamer7896"], "EndGamer7896", "https://medal.tv/games/geometry-dash/clip/mNPdClIZVXD_8kwsC?invite=cr-MSwyaGMsNTk1MDYwNDc2", [
        new Record("EndGamer7896", "427", "0/10", "Mid Silver, 36 points", "https://medal.tv/games/geometry-dash/clips/mNPdClIZVXD_8kwsC?invite=cr-MSwyaGMsNTk1MDYwNDc2"),
    ], false),
    new Level("Stereo Madness sp 2", 36.25, 9, "Silver", "143162497", "Any Route", ["CyberCharger"], "CyberCharger", "https://www.youtube.com//embed/-JYsaSzX0S0", [
        new Record("CyberCharger", "1,290", "5/10", "silver i guess maybe like low", "https://www.youtube.com/watch?v=-JYsaSzX0S0"),
        new Record("EndGamer7896", "163", "7/10", "30.5 points", "https://medal.tv/games/geometry-dash/clips/mXKMfjt5S6SZ_ga0D?invite=cr-MSxkZ2EsNTk1MDYwNDc2"),
        new Record("probro675", "111", "4/10", "Low Silver 33 points", "https://youtu.be/con_HubyfyY?is=8uf0AKIacu4NLwov"),
    ], false),
    new Level("Robot carnival", 35.5, 11, "Silver", "141050126", "Small Skips Allowed", ["Vinecke123"], "EndGamer7896", "https://medal.tv/games/geometry-dash/clip/mM5DQxD0WqP97w9pF?invite=cr-MSxtemUsNTk1MDYwNDc2", [
        new Record("EndGamer7896", "576", "6/10", "32 points", "https://medal.tv/games/geometry-dash/clips/mM5DQxD0WqP97w9pF?invite=cr-MSxtemUsNTk1MDYwNDc2"),
    ], "/nongs/Robot carnival.mp3"),
    new Level("Cant Let Gobot", 34.5, 3, "Silver", "141400994", "Any Route", ["EndGamer7896"], "EndGamer7896", "https://medal.tv/games/geometry-dash/clip/mMFgqfWoYIx8qvrAm?invite=cr-MSwwZmgsNTk1MDYwNDc2", [
        new Record("EndGamer7896", "547", "8/10", "Low/Mid Silver, 34 points", "https://medal.tv/games/geometry-dash/clips/mMFgqfWoYIx8qvrAm?invite=cr-MSwwZmgsNTk1MDYwNDc2"),
        new Record("Monkeyboy21", "539", "3/10", "Good where its at", "https://medal.tv/games/geometry-dash/clips/mPMdWcEqD951CcZMI?invite=cr-MSw4aGQsMTk0NjAyNjk3&v=30"),
        new Record("probro675", "814", "1/10 (utter dogshit)", "Mid Silver, 36 points", "https://youtu.be/CVTk3cYGFx8?si=rfeAWtP_j06Em_Db"),
    ], false),
    new Level("im crine", 31.65, 11, "Silver", "141834640", "Small Skips Allowed", ["probro675"], "probro675", "https://youtube.com/embed/Ikz5KSCTc9Q?si=E_rfGiVsj8ibZMcG", [
        new Record("probro675", "304", "6.7/10", "Entry/Low Silver", "https://youtu.be/Ikz5KSCTc9Q?si=E_rfGiVsj8ibZMcG"),
        new Record("EndGamer7896", "396", "10/10", "33.5 points", "https://medal.tv/games/geometry-dash/clips/mQi1epv0UKNns_Gg_?invite=cr-MSxkMWMsNTk1MDYwNDc2"),
        new Record("ariopc", "589", "9/10", "I don't know", "https://medal.tv/games/geometry-dash/clips/mRWGApLoPpkcBUE2u?invite=cr-MSw2T2osMjE3MzQ4MzIz&v=20"),
        new Record("Taublix", "158", "6/10", "Placed fine", "https://www.youtube.com/watch?v=ZUVZ8Pda8CQ"),
    ], false),
    new Level("Robopolis V2", 29.5, 11, "Silver", "138091805", "Any Route", ["rumble1978"], "EndGamer7896", "https://medal.tv/games/geometry-dash/clip/muYoylZMtRMFjDQcF?invite=cr-MSx4amcsNTk1MDYwNDc2", [
        new Record("EndGamer7896", "218", "9/10", "26 points", "https://medal.tv/games/geometry-dash/clips/muYoylZMtRMFjDQcF?invite=cr-MSx4amcsNTk1MDYwNDc2"),
        new Record("XanderGMDD", "372", "0/10", "35 points", "https://medal.tv/games/geometry-dash/clips/mNcubT6LmWeZdTZML?invite=cr-MSxsUVcsMzM2NzY3Njgx&v=15"),
        new Record("Monkeyboy21", "536", "8/10", "Silver ig 35-36 points", "https://medal.tv/games/geometry-dash/clips/mOKO424EO5p6X8-_G?invite=cr-MSxUd1osMTk0NjAyNjk3&v=34"),
        new Record("probro675", "375", "0/10", "Entry Silver, 26 points", "https://youtu.be/3vyQME4fKAM?si=FMDGhSXmv-iG0R0Z"),
    ], false),
    new Level("Unnamed 41", 27.57, 4, "Silver", "136714964", "Any Route", ["XanderGMDD"], "XanderGMDD", "https://medal.tv/games/geometry-dash/clip/mopJfH506wMrq0VC-?invite=cr-MSxQdkMsMzM2NzY3Njgx", [
        new Record("XanderGMDD", "N/A", "N/A", "30-33 points", "https://medal.tv/games/geometry-dash/clips/mopJfH506wMrq0VC-?invite=cr-MSxQdkMsMzM2NzY3Njgx"),
        new Record("Farlayy", "N/A", "N/A", "N/A", ""),
        new Record("sourceerrortxt", "N/A", "N/A", "N/A", "https://youtu.be/6GoeHlz11YU"),
        new Record("Zannoz", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/moJTHJ2C2fLHhyJif/spok?invite=cr-MSxEcTksNTM1NDU2MDU0LA"),
        new Record("EndGamer7896", "N/A", "N/A", "Top Bronze", "https://medal.tv/games/geometry-dash/clips/mqPPqqjXh_tZBolRT?invite=cr-MSxpZGssNTk1MDYwNDc2"),
        new Record("placek3", "N/A", "N/A", "N/A", "https://www.youtube.com/watch?v=8CEpN01ZWPc"),
        new Record("zeroskills", "N/A", "N/A", "Good as is", ""),
        new Record("zis08", "N/A", "N/A", "Mid Bronze", "https://medal.tv/games/geometry-dash/clips/msqwGj3fd9pNrqyWe?invite=cr-MSwxZDYsMTY4ODkwOTU4"),
        new Record("ariopc", "477", "0/10", "Low-mid silver maybe", "https://medal.tv/games/geometry-dash/clips/mWPXk8UlJDPkCA8Dw?invite=cr-MSw4aUUsMjE3MzQ4MzIz&v=24"),
    ], false),
    new Level("Monochrome", 26.29, 7, "Silver", "138015367", "Any Route", ["EndGamer7896"], "EndGamer7896", "https://medal.tv/games/geometry-dash/clip/muFDSeOPYnZ7XiKEH?invite=cr-MSxwNGEsNTk1MDYwNDc2", [
        new Record("EndGamer7896", "848", "5/10", "Entry Silver, 25 points", "https://medal.tv/games/geometry-dash/clips/muFDSeOPYnZ7XiKEH?invite=cr-MSxwNGEsNTk1MDYwNDc2"),
        new Record("placek3", "N/A", "N/A", "N/A", "https://medal.tv/games/geometry-dash/clips/mvHzaA57FF0hF7mK5?invite=cr-MSx6RnAsNTk0ODYzMTcx&v=31"),
        new Record("XanderGMDD", "500", "1/10", "30-33 points", "https://medal.tv/games/geometry-dash/clips/mNUJTrZval_1X5lGP?invite=cr-MSx4NGssMzM2NzY3Njgx"),
        new Record("Monkeyboy21", "364", "7/10", "Good where its at", "https://medal.tv/games/geometry-dash/clips/mP6jJtV3HiSl41t1q?invite=cr-MSxDS2gsMTk0NjAyNjk3&v=32"),
        new Record("ariopc", "193", "8/10", "Fine where its at", "https://medal.tv/games/geometry-dash/clips/mRVxSAMI6zRUNO4Oy?invite=cr-MSwzWFMsMjE3MzQ4MzIz&v=33"),
        new Record("Taublix", "75", "8/10", "High Bronze", "https://www.youtube.com/watch?v=IzA0RLh6FI0"),
    ], false),
    new Level("Endgamer Takes Dihh", 26.02, 3, "Silver", "141856398", "Small Skips Allowed", ["probro675"], "probro675", "https://youtube.com/embed/3LaVMBaNJRA?si=QupH51tNppXLMhRE", [
        new Record("probro675", "211", "1/10", "High/Top Bronze (17 points)", "https://youtu.be/3LaVMBaNJRA?si=QupH51tNppXLMhRE"),
        new Record("EndGamer7896", "1,437", "2/10", "35 points", "https://medal.tv/games/geometry-dash/clips/mQJy48e0skT2ct10A?invite=cr-MSxueGcsNTk1MDYwNDc2"),
        new Record("Komically", "473", "3/10", "Harder than WfX2", "https://youtu.be/MfwG1sm_tX0"),
        new Record("Taublix", "212", "6.5/10", "Harder than Monochrome, easier than im crine", "https://www.youtube.com/watch?v=oP7yYWTt4UI"),
    ], false),
    new Level("Dry Bot", 25.58, 3, "Silver", "141195861", "Any Route", ["EndGamer7896"], "EndGamer7896", "https://medal.tv/games/geometry-dash/clip/mLRLKP6QpVC65O2Jp?invite=cr-MSw3b3QsNTk1MDYwNDc2", [
        new Record("EndGamer7896", "460", "7/10", "Low Silver, 26 points", "https://medal.tv/games/geometry-dash/clips/mLRLKP6QpVC65O2Jp?invite=cr-MSw3b3QsNTk1MDYwNDc2"),
        new Record("Monkeyboy21", "279", "7/10", "Good where its at", "https://medal.tv/games/geometry-dash/clips/mPLSy2IGF0pfVp6KK?invite=cr-MSx6NDUsMTk0NjAyNjk3&v=30"),
        new Record("Taublix", "135", "7/10", "harder than City thing, easier than im crine", "https://www.youtube.com/watch?v=hn9YHNNvAJc"),
        new Record("zis08", "243", "2/10", "High Bronze", "https://medal.tv/games/geometry-dash/clips/mW4eQ0LJvmRNEle5Y?invite=cr-MSw3RTcsMTY4ODkwOTU4&v=21"),
    ], false),
    new Level("City thing", 25.33, 8, "Silver", "141404949", "Any Route", ["TheUnoKing9"], "TheUnoKing9", "https://youtube.com/embed/KnF_EdaGUjA", [
        new Record("TheUnoKing9", "532", "N/A", "Low Silver/High Bronze", "https://youtu.be/KnF_EdaGUjA"),
        new Record("Komically", "149", "5/10", "Good as is", "https://youtu.be/sTdSRIej5Rw"),
        new Record("probro675", "204", "6.5/10", "35.5 points", "https://youtu.be/90TVOy8ZGUs?si=7wIPaAsjCiQccCC7"),
        new Record("XanderGMDD", "193", "4/10", "27 points", "https://medal.tv/games/geometry-dash/clips/mOgA7XYGlQ_hkS_0S?invite=cr-MSxpa1YsMzM2NzY3Njgx&v=19"),
        new Record("EndGamer7896", "201", "6/10", "20 points", "https://medal.tv/games/geometry-dash/clips/mOp4LQQUghG7Hmp_7?invite=cr-MSw1NmEsNTk1MDYwNDc2"),
        new Record("Taublix", "94", "9/10", "accurate probably", "https://www.youtube.com/watch?v=g0JAUOKs-Sc"),
        new Record("zis08", "124", "7/10", "Mid Bronze", "https://medal.tv/games/geometry-dash/clips/mW4nBSd2eU_XWdtKf?invite=cr-MSxGeVIsMTY4ODkwOTU4&v=18"),
        new Record("ariopc", "383", "5/10", "should not be placed below Monochrome", "https://medal.tv/games/geometry-dash/clips/mWx1si5B9Vnu27ccf?invite=cr-MSxJekssMjE3MzQ4MzIz&v=21"),
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
    new Level("frostworks", 24.57, 8, "Bronze", "136124065", "Any Route", ["sourceerrortxt"], "sourceerrortxt", "https://www.youtube.com/embed/DOt_YqK4I7g", [
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
    ], false),
    new Level("WfX2", 22.93, 3, "Bronze", "137224701", "Any Route", ["EndGamer7896"], "EndGamer7896", "https://medal.tv/games/geometry-dash/clip/mqTuJ97zO3YjUbd3t?invite=cr-MSxMWUQsNTk1MDYwNDc2", [
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
    ], false),
    new Level("Bot After Ro", 22.84, 3, "Bronze", "141400992", "Any Route", ["EndGamer7896"], "EndGamer7896", "https://medal.tv/games/geometry-dash/clip/mME1SeNJ6wppTbBgY?invite=cr-MSxsZWYsNTk1MDYwNDc2", [
        new Record("EndGamer7896", "168", "6/10", "Low Silver, 28 points", "https://medal.tv/games/geometry-dash/clips/mME1SeNJ6wppTbBgY?invite=cr-MSxsZWYsNTk1MDYwNDc2"),
        new Record("Monkeyboy21", "111", "6/10", "Good where its at", "https://medal.tv/games/geometry-dash/clips/mPLWS03u0ztbnnkfB?invite=cr-MSxOWVQsMTk0NjAyNjk3&v=30"),
        new Record("probro675", "65", "8/10", "High Bronze / Entry Silver", "https://youtu.be/6_41MOYUcq0?si=g3xkTQY-zcH3_A9y"),
        new Record("Taublix", "41", "8/10", "High Bronze", "https://www.youtube.com/watch?v=bzjSDXh6BCY"),
        new Record("Komically", "61", "8/10", "Just under black hole sun", "https://youtu.be/MfwG1sm_tX0"),
    ], false),
    new Level("Ape Rotation", 21.92, 3, "Bronze", "136828286", "Any Route", ["EndGamer7896"], "XanderGMDD", "https://medal.tv/games/geometry-dash/clip/moTOrjARmqBTM0OkI?invite=cr-MSw0ZWcsMzM2NzY3Njgx", [
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
    ], false),
    new Level("WRATH", 21.6, 10, "Bronze", "141258321", "Any Route", ["XanderGMDD", "EndGamer7896"], "EndGamer7896", "https://medal.tv/games/geometry-dash/clip/mN0PjxoYRgjJ2K0yq?invite=cr-MSxyODksNTk1MDYwNDc2", [
        new Record("EndGamer7896", "63", "7/10", "Mid Bronze, 15 points", "https://medal.tv/games/geometry-dash/clips/mN0PjxoYRgjJ2K0yq?invite=cr-MSxyODksNTk1MDYwNDc2"),
        new Record("XanderGMDD", "221", "2/10", "Harder than Code Red", "https://medal.tv/games/geometry-dash/clips/mNbXvba2pC4yN9ufd?invite=cr-MSxHQVQsMzM2NzY3Njgx&v=15"),
        new Record("Taublix", "137", "7/10", "High Bronze", "https://www.youtube.com/watch?v=peBEgDVJA14"),
        new Record("Komically", "462", "4/10", "Could go up a spot or two, but its fine", "https://youtu.be/MfwG1sm_tX0"),
    ], false),
    new Level("Black Hole Sun", 20.89, 3, "Bronze", "142565291", "Small Skips Allowed", ["xpfinker812"], "EndGamer7896", "https://medal.tv/games/geometry-dash/clip/mUcRtJAGaNgG1Lgx_?invite=cr-MSxqb3QsNTk1MDYwNDc2", [
        new Record("EndGamer7896", "460", "2/10", "Top Bronze, 21 points", "https://medal.tv/games/geometry-dash/clips/mUcRtJAGaNgG1Lgx_?invite=cr-MSxqb3QsNTk1MDYwNDc2"),
        new Record("ariopc", "221", "1/10", "fine", "https://medal.tv/games/geometry-dash/clips/mVKwFpC2fS8K1Nayd?invite=cr-MSx2NWYsMjE3MzQ4MzIz&v=35"),
        new Record("Komically", "149", "2/10", "Good where it is", "https://youtu.be/MfwG1sm_tX0"),
        new Record("Taublix", "122", "6/10", "harder than WRATH easier than Ape Rotation", "https://www.youtube.com/watch?v=c4f9A-63Jeo"),
    ], "/nongs/Black Hole Sun.mp3"),
    new Level("Endgamer never clear", 19, 1, "Bronze", "142351321", "Verification Route", ["ariopc"], "ariopc", "https://medal.tv/games/geometry-dash/clip/mSS6NpUo7LZQJt-hK?invite=cr-MSwzbW8sMjE3MzQ4MzIz&v=27", [
        new Record("ariopc", "166", "1/10", "High Bronze", "https://medal.tv/games/geometry-dash/clips/mSS6NpUo7LZQJt-hK?invite=cr-MSwzbW8sMjE3MzQ4MzIz&v=27"),
        new Record("EndGamer7896", "373", "0/10", "16 points", "https://medal.tv/games/geometry-dash/clips/mSSBc42WCETzhOePd?invite=cr-MSxhZnYsNTk1MDYwNDc2"),
        new Record("probro675", "143", "1/10", "18 points", "https://youtu.be/WrP3duEDWgE?si=7tjOl8FCXPDNgQro"),
        new Record("Komically", "468", "1/10", "24.99 points", "https://youtu.be/MfwG1sm_tX0"),
    ], false),
    new Level("Glass Castle", 18.88, 4, "Bronze", "136826420", "Any Route", ["XanderGMDD"], "XanderGMDD", "https://medal.tv/games/geometry-dash/clip/moSGRT8hdQ483IsCG?invite=cr-MSw0Uk0sMzM2NzY3Njgx", [
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
    ], false),
    new Level("Code Red", 14.63, 7, "Bronze", "136724597", "Any Route", ["XanderGMDD"], "XanderGMDD", "https://medal.tv/games/geometry-dash/clip/moteytWTL6Ggwm_P1?invite=cr-MSw0QkQsMzM2NzY3Njgx", [
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
    ], false),
    new Level("lowk ima milk", 13.69, 6, "Bronze", "137206383", "Any Route", ["XanderGMDD"], "XanderGMDD", "https://medal.tv/games/geometry-dash/clip/mqNYtIqiHqWQ7WwEe?invite=cr-MSxDRHosMzM2NzY3Njgx", [
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
    ], false),
    new Level("Copper Alloy", 12.78, 8, "Bronze", "136109854", "Any Route", ["sourceerrortxt"], "sourceerrortxt", "https://www.youtube.com/embed/VmPu-EKcZdA", [
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
    ], false),
    new Level("out of time", 10.28, 4, "Bronze", "136136798", "Any Route", ["sourceerrortxt"], "sourceerrortxt", "https://www.youtube.com/embed/HRYVy3vU168", [
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
    ], false),
    new Level("Waiting for Xander", 9.99, 2, "Bronze", "Any Route", "137223061", ["EndGamer7896"], "EndGamer7896", "https://medal.tv/games/geometry-dash/clip/mqSD6F83c19OvKQ2w?invite=cr-MSw1QnIsNTk1MDYwNDc2", [
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
    ], false),
    new Level("Robogeist", 9.79, 4, "Bronze", "141195852", "Any Route", ["EndGamer7896"], "EndGamer7896", "https://medal.tv/games/geometry-dash/clip/mKd0hJ7OXL6e-JXeA?invite=cr-MSxobXIsNTk1MDYwNDc2", [
        new Record("EndGamer7896", "68", "8/10", "Low/Mid Bronze, 10 points", "https://medal.tv/games/geometry-dash/clips/mKd0hJ7OXL6e-JXeA?invite=cr-MSxobXIsNTk1MDYwNDc2"),
        new Record("Monkeyboy21", "35", "7/10", "Maybe a little lower", "https://medal.tv/games/geometry-dash/clips/mPpMUE86nnDvcfL11?invite=cr-MSxBMmEsMTk0NjAyNjk3&v=36"),
        new Record("Sp4c3m0nk3y", "168", "5/10", "Fine where it is", "https://medal.tv/games/geometry-dash/clips/mSqqqCxB4lBvqbdOt?invite=cr-MSw3NnQsNTU2MTU0Nzcw"),
        new Record("TheUnoKing9", "144", "7/10", "Easier than out of time", "https://youtu.be/pMTZ0V6BEjw"),
        new Record("Taublix", "26", "7/10", "Harder than greybot, easier than copper alloy", "https://www.youtube.com/watch?v=a89IEjGMWVc"),
        new Record("zis08", "98", "5/10", "N/A", "https://medal.tv/games/geometry-dash/clips/mW21s9OFSEz-uiWr5?invite=cr-MSxYZ0YsMTY4ODkwOTU4"),
        new Record("sparked18", "64", "N/A", "good where its at", "https://youtu.be/W4diAeLIb1k"),
        new Record("Komically", "13", "7/10", "Good where it is", "https://youtu.be/MfwG1sm_tX0"),
    ], false),
    new Level("greybot", 8.01, 5, "Bronze", "142492605", "Any Route", ["ariopc"], "ariopc", "https://medal.tv/games/geometry-dash/clip/mTJkd1Tz66MVCDduS?invite=cr-MSxXc0QsMjE3MzQ4MzIz&v=23", [
        new Record("ariopc", "68", "8/10", "Probably low bronze, pretty easy", "https://medal.tv/games/geometry-dash/clips/mTJkd1Tz66MVCDduS?invite=cr-MSxXc0QsMjE3MzQ4Mz23&v=23"),
        new Record("probro675", "105", "4/10", "Mid Bronze, 14.5 points", "https://youtu.be/lZyWGoo27hQ?is=miu0oMqqe92rkYpx"),
        new Record("Taublix", "11", "10/10", "easier than Robogeist", "https://www.youtube.com/watch?v=Yd0DZyzvC6k"),
        new Record("EndGamer7896", "88", "7.5/10", "Low Bronze, 9 points", "https://medal.tv/games/geometry-dash/clips/mTWahdpSSPrNmIyrw?invite=cr-MSxvc3csNTk1MDYwNDc2"),
        new Record("zis08", "24", "10/10", "Easiest level on the list", "https://medal.tv/games/geometry-dash/clips/mW1MbdYF1lQH_zgiP?invite=cr-MSxOV1IsMTY4ODkwOTU4"),
        new Record("sparked18", "11", "N/A", "good where its at", "https://youtu.be/W4diAeLIb1k"),
        new Record("Komically", "39", "8.5/10", "Good where it is", "https://youtu.be/MfwG1sm_tX0"),
    ], false),
    new Level("Robot On Track", 6.66, 4, "Bronze", "141189643", "Any Route", ["EndGamer7896"], "EndGamer7896", "https://medal.tv/games/geometry-dash/clip/mKaizDeV9Sfz6pA3p?invite=cr-MSw1bXEsNTk1MDYwNDc2", [
        new Record("EndGamer7896", "29", "8/10", "Low Bronze, 7 points", "https://medal.tv/games/geometry-dash/clips/mKaizDeV9Sfz6pA3p?invite=cr-MSw1bXEsNTk1MDYwNDc2"),
        new Record("Monkeyboy21", "54", "7/10", "Good where its at", "https://medal.tv/games/geometry-dash/clips/mPpDtUs7gSld5VdEa?invite=cr-MSwyN2QsMTk0NjAyNjk3&v=26"),
        new Record("XanderGMDD", "48", "4/10", "Good where it is", "https://medal.tv/games/geometry-dash/clips/mPvTrSllOWJ_2GHp1?invite=cr-MSxtWXAsMzM2NzY3Njgx&v=25"),
        new Record("Sp4c3m0nk3y", "285", "5/10", "Fine where it is", "https://medal.tv/games/geometry-dash/clips/mSp51XucL-29Qsii4?invite=cr-MSx4dW8sNTU2MTU0Nzcw"),
        new Record("TheUnoKing9", "151", "5/10", "Good where it is", "https://youtu.be/1qyM9cbH-JM"),
        new Record("Taublix", "6", "9/10", "accurate", "https://www.youtube.com/watch?v=JnOip6Jc4DA"),
        new Record("zis08", "86", "8/10", "N/A", "https://medal.tv/games/geometry-dash/clips/mW1Iv0u6hcczPM0cA?invite=cr-MSxpeHcsMTY4ODkwOTU4"),
        new Record("sparked18", "76", "N/A", "low bronze", "https://youtu.be/W4diAeLIb1k"),
        new Record("Komically", "21", "8/10", "Good where it is", "https://youtu.be/MfwG1sm_tX0"),
    ], false),
    new Level("Robot Madness", 5.17, 4, "Bronze", "141189636", "Any Route", ["EndGamer7896"], "EndGamer7896", "https://medal.tv/games/geometry-dash/clip/mKahUL0fholoxYzKu?invite=cr-MSwycWQsNTk1MDYwNDc2", [
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
    ], false),
    new Level("xandeR is a chud", 4.91, 2, "Bronze", "141346496", "Small Skips Allowed", ["xpfinker812"], "Komically", "https://youtube.com/embed/bkUKEgp6wQQ", [
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
    ], false),
    new Level("Snowscape", 1.05, 14, "Bronze", "143220452", "Small Skips Allowed", ["CyberCharger"], "CyberCharger", "https://www.youtube.com/embed/h8S3V_XfD6M", [
        new Record("CyberCharger", "28", "10/10", "easiest bronze", "https://www.youtube.com/watch?v=h8S3V_XfD6M"),
        new Record("EndGamer7896", "4", "10/10", "Not sure if this is easier than LeBronze", "https://medal.tv/games/geometry-dash/clips/mXScCpEwNYJ7mbHys?invite=cr-MSx1dmUsNTk1MDYwNDc2"),
    ], false),
    new Level("LeBronze", 1, 6, "Bronze", "137909718", "Any Route", ["EndGamer7896"], "EndGamer7896", "https://medal.tv/games/geometry-dash/clip/mue07kBtQ_fmFBPPo?invite=cr-MSxyb2QsNTk1MDYwNDc2", [
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
    ], false),
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
    new Level("Crayons", 0, 17, "Hell", "-", "Any Route", ["rumble1978"], "rumble1978", "https://medal.tv/games/geometry-dash/clip/mv7xGhRttimy7uuS6?invite=cr-MSxqQlUsNDc0ODUyOTUy&v=300", [], false),
    new Level("Double Double", 0, 2, "Hell", "137564688", "Any Route", ["zis08"], "zis08", "https://medal.tv/games/geometry-dash/clip/msohBZHNKc1I8piec?invite=cr-MSxhZ3MsMTY4ODkwOTU4", [], false),
    new Level("Tiptoe Temple", 0, 0, "Hell", "96953991", "Any Route", ["iMintyGreen"], "Farlayy", "https://www.youtube.com/embed/xN16fwLFoAs", [], false),
    new Level("lord of cinder", 0, 1, "Hell", "141960393", "Verification Route", ["SqueegGD"], "zeroskills", "https://youtube.com/embed/LdSbgVkdokk", [
        new Record("zeroskills", "1,033", "6/10", "Easier than WfX2, 19-24 points", "https://youtu.be/LdSbgVkdokk"),
    ], false),
    new Level("SHM RCL 55xH", 0, 3, "Hell", "141128210", "Small Skips Allowed", ["SqueegGD"], "SqueegGD", "https://www.youtube.com/embed/Z6yDecBauoM", [
        new Record("SqueegGD", "77", "0/10", "Top 1", "https://www.youtube.com/watch?v=Z6yDecBauoM"),
        new Record("EndGamer7896", "194", "8/10", "12 points", "https://medal.tv/games/geometry-dash/clips/mM3vrwfhrTuH20otN?invite=cr-MSxzNm4sNTk1MDYwNDc2"),
        new Record("XanderGMDD", "88", "5/10", "Mid Bronze", "https://medal.tv/games/geometry-dash/clips/mNcerqYXIy5VHfqXF?invite=cr-MSx3MDUsMzM2NzY3Njgx&v=20"),
    ], false),
    new Level("WHY", 0, 2, "Hell", "136548356", "Any Route", ["XanderGMDD"], "XanderGMDD", "https://medal.tv/games/geometry-dash/clip/mnwqZkqOoSOGO8Iio?invite=cr-MSxVVXosMzM2NzY3Njgx&v=12", [], false),

    /*
    .########..##.....##.########...######......###....########..#######..########..##....##
    .##.....##.##.....##.##.....##.##....##....##.##......##....##.....##.##.....##..##..##.
    .##.....##.##.....##.##.....##.##.........##...##.....##....##.....##.##.....##...####..
    .########..##.....##.########..##...####.##.....##....##....##.....##.########.....##...
    .##........##.....##.##...##...##....##..#########....##....##.....##.##...##......##...
    .##........##.....##.##....##..##....##..##.....##....##....##.....##.##....##.....##...
    .##.........#######..##.....##..######...##.....##....##.....#######..##.....##....##...
    */
    new Level("Cave A Neer", 0, 0, "Purgatory", "131713130", "Any Route", ["zis08"], "zis08", "https://youtube.com/embed/7vp7MYNVkGk?si=aGBPL_JaAgaHCfRl", [], "/nongs/Cave A Neer.mp3"),
    new Level("Evil Death 1", 0, 2, "Purgatory", "143122349", "Any Route", ["4096Tristan"], "4096Tristan", "https://youtube.com/embed/5mKMGGpn_LY", [], false),
    new Level("ball fondling challenge", 0, 0, "Purgatory", "108970071", "Any Route", ["bunibus"], "tFluffy", "https://www.youtube.com/embed/shqywNEj1zk", [], false),
    new Level("qplaskmzxncbrvgfhywe", 0, 1, "Purgatory", "143173113", "Any Route", ["FoldedZero"], "FoldedZero", "https://www.youtube.com/embed/brpsQqoDpUk", [], false),
    new Level("On The Cliff edge", 0, 0, "Purgatory", "1129285315", "Any Route", ["zis08"], "zis08", "https://youtube.com/embed/MQdkvdPwKE0?si=7BYt0Cek1wM8hbJd", [], "/nongs/On The Cliff edge.mp3"),
    new Level("gar", 0, 0, "Purgatory", "137741707 (Broken)", "Any Route", ["BungusGD"], "BungusGD", "https://youtube.com/embed/whD2Q-jQOHE?si=Qqod5Mz8NiaBkiWh", [], false),

    /*
    .##.......####.##.....##.########...#######.
    .##........##..###...###.##.....##.##.....##
    .##........##..####.####.##.....##.##.....##
    .##........##..##.###.##.########..##.....##
    .##........##..##.....##.##.....##.##.....##
    .##........##..##.....##.##.....##.##.....##
    .########.####.##.....##.########...#######.
    */
    new Level("Poison", 0, 8, "Limbo", "141674535", "Small Skips Allowed", ["Monkeyboy21"], "-", "https://medal.tv/games/geometry-dash/clip/mP7XWd8Npb6kjyZA0?invite=cr-MSw3eFMsMTk0NjAyNjk3&v=16"),
    new Level("FINAL ROBOTISY", 0, 9, "Limbo", "141287742", "Small Skips Allowed", ["XanderGMDD"], "-", "https://medal.tv/games/geometry-dash/clip/mNcXr8HvQTellyDsU?invite=cr-MSxtenIsMzM2NzY3Njgx"),
    new Level("Dopamine Rush", 0, 3, "Limbo", "136993028", "Any Route", ["EndGamer7896"], "-", "https://www.youtube.com/embed/nOcsSgJBJZI", [], false),
    new Level("LightMost", 0, 3, "Limbo", "142864406", "Small Skips Allowed", ["Seedskyy73"], "-", "https://www.youtube.com/embed/dQw4w9WgXcQ", [], "/nongs/LightMost.mp3"),
    new Level("Expiration Date", 0, 4, "Limbo", "137150681", "Any Route", ["EndGamer7896"], "-", "https://www.youtube.com/embed/vK5TPmBbFeE", [], false),
    new Level("Heliorobo", 0, 13, "Limbo", "138007569", "Small Skips Allowed", ["XanderGMDD"], "-", "https://youtube.com/embed/JwXFRP8OQbk", [], false),
    new Level("RENOVATION", 0, 4, "Limbo", "138079978", "Any Route", ["EndGamer7896"], "-", "https://www.youtube.com/embed/BVGFRk3T9js", [], "/nongs/RENOVATION.mp3"),
    new Level("ROBOWAMBA", 0, 17, "Limbo", "137515738", "Small Skips Allowed", ["XanderGMDD"], "-", "https://www.youtube.com/embed/DpSCu9R6Sq4", [], false),
    new Level("fishnet", 0, 10, "Limbo", "142489532", "Any Route", ["GMDastroo"], "-", "https://youtube.com/embed/dQw4w9WgXcQ", [], false),
    new Level("silent botstep", 0, 1, "Limbo", "142462074", "Showcase Route", ["xpfinker812"], "-", "https://medal.tv/games/geometry-dash/clip/mTyE9pAgN1GYH1RH-?invite=cr-MSxpQmIsNTMwODEwMjU3&v=26", [], false),
    new Level("Rcl is   fake", 0, 11, "Limbo", "143055646", "Any Route", ["Seedskyy73"], "-", "https://www.youtube.com/embed/dQw4w9WgXcQ", [], false),
    new Level("robopolis 9 infinity", 0, 4, "Limbo", "142803486", "Small Skips Allowed", ["xpfinker812"], "-", "https://medal.tv/games/geometry-dash/clip/mVHhRotwGd2iA9hmn?invite=cr-MSxJejMsNTMwODEwMjU3&v=11", [], false),
    new Level("The Third Robot", 0, 8, "Limbo", "136718958", "Any Route", ["Zannoz"], "-", "https://youtube.com/embed/dQw4w9WgXcQ", [], false),
    new Level("Robotic Exertion", "0", 5, "Limbo", "140939483", "Any Route", ["XanderGMDD"], "-", "https://www.youtube.com/embed/dQw4w9WgXcQ", [], false),
    new Level("probro is a chud", 0, 1, "Limbo", "143177018", "Showcase Route", ["xpfinker812"], "-", "https://medal.tv/games/geometry-dash/clip/mXvk0PhVdKcFrwf0X?invite=cr-MSw3VVQsNTMwODEwMjU3&v=20", [], false),
    new Level("robot but uwu ig idk", 0, 4, "Limbo", "141419232", "Small Skips Allowed", ["xpfinker812"], "-", "https://medal.tv/games/geometry-dash/clip/mN0ZnUG1OgkbPXwuZ?invite=cr-MSxwRkosNTMwODEwMjU3&v=13", [], false),
    new Level("I AM NOT FLAT", 0, 2, "Limbo", "141879903", "Any Route", ["xpfinker812"], "-", "https://medal.tv/games/geometry-dash/clip/mQlqNIl9sq916CIHE?invite=cr-MSwzYnIsNTMwODEwMjU3&v=17", [], "/nongs/I AM NOT FLAT.mp3"),
    new Level("endgame is a chud", 0, 2, "Limbo", "141575973", "Small Skips Allowed", ["xpfinker812"], "-", "https://medal.tv/games/geometry-dash/clip/mOG8kBGla6fXvI3I-?invite=cr-MSxIUVgsNTMwODEwMjU3&v=7d", [], false),
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
            if (!players[record.name]) {
                players[record.name] = 0;
            }

            players[record.name] += (level.points * 100);
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
    let hellAndLimbo = levels.concat(displacement).filter(level => level.tier === "Hell" || level.tier === "Limbo");
    for (let level of levels.concat(hellAndLimbo)) {
        for (let creator of level.creator) {
            if (level.quality) {
                if (!qualityScores[creator]) {
                    qualityScores[creator] = 0;
                }

                qualityScores[creator] += Math.round(level.quality / level.creator.length);
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
    for (let level of levels.concat(hellAndLimbo)) {
        for (let creator of level.creator) {
            if (!levelsCreated[creator]) {
                levelsCreated[creator] = 0;
            }

            levelsCreated[creator]++;
        }
    };

    let sortedCreators = Object.entries(levelsCreated).sort((a, b) => b[1] - a[1]);

    for (let [creator, created] of sortedCreators) {
        let creatorLi = document.createElement("li");
        creatorLi.innerHTML = `${creator}: ${created} levels created`;
        creatorLi.className = getRank(creator);
        creatorLeaderboard.appendChild(creatorLi);
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