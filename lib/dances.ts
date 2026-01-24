export type Level =
  | "Beginner"
  | "Improver"
  | "Intermediate"
  | "Advanced"
  | "NA";

export interface Dance {
  id: string;
  name: string;
  aliases?: string[];
  isPairDance: boolean;
  level: Level;
  songs: string[];
  videoLink?: string[];
  stepsheetLink?: string;
}

export const dances: Dance[] = [
  {
    name: "16 Step",
    isPairDance: true,
    level: "Beginner",
    songs: [
      "On the road again - Willie Nelson",
      "Rocky Top - Osborne Brothers",
      "Sold - John Michael Montgomery",
      "If your gonna play in Texas - Alabama",
      "I don't even know her name - Alan Jackson",
      "Fishin in the dark - Nitty Gritty Dirt Band",
      "Love Like This - Gamblers",
      "Down On The Farm - Tim Mc Craw",
      "Back To Tourmakeady by Nathan Carter",
      "Yankee Doodle by Boxcar Willie",
    ],
    videoLink: [
      "https://youtu.be/e5lxueUtcPQ?si=IZ3dLiOmgaMPZJXY"
    ],
    stepsheetLink: 
      "https://nolimit-linedancer.at/wp-content/uploads/2019/02/16-Step.pdf",
    id: "1",
  },
  {
    name: "1976",
    isPairDance: false,
    level: "Beginner",
    songs: [
      "1976 - Alan Jackson - Country", 
      "Billie Jean - Michael Jackson - Non Country",
      "It's 5 o'clock somethere - Alan Jackson",
    ],
    videoLink: [
      "https://youtu.be/JHTACL4kY74?si=OCOAAPLNaKk2uAbP"
    ],
    stepsheetLink: 
      "https://www.dancer-in-line.de/docs/taenze/1976_OBrien.pdf",
    id: "2",
  },
  {
    name: "A bar song",
    isPairDance: false,
    level: "Beginner",
    songs: [
      "A Bar Song (Tipsy) - Shaboozey",
      "My only wish - Britney Spears (Restart i.d. 12. Wand nach 8 counts, tag n.d 14.Wd.)",
    ],
    videoLink: [
      "https://youtu.be/UTOI9jPY8uo?si=cYDp-Jvgm3-4-cmJ"
    ],
    stepsheetLink: 
      "https://www.get-in-line.de/dances/A%20Bar%20Song_-_B%20Murphy.htm",
    id: "3",
  },
  {
    name: "A country high",
    isPairDance: false,
    level: "Intermediate",
    songs: [
      "High on a Country Song - Sam Riggs", 
      "Sharp dressed Man"
    ],
    videoLink: [
      "https://youtu.be/BsWeUZ8BJKA?si=lJ8g-fzcTpu4e4Ns",
      "https://youtu.be/0k6bwPk9XZE?si=ClE9vZXpZEYAtwZh",
    ],
    stepsheetLink: 
      "https://www.get-in-line.de/dances/A%20Country%20High_-_Gifford.htm",
    id: "4",
  },
  {
    name: "After Five Stomp",
    isPairDance: false,
    level: "Beginner",
    songs: [
      "Country Music Made Me Do It - Mike Henderson,",
      "Setting The Woods On Fire - The Tractors",
      "Ashes of Love - Kentucky Headhunters",
    ],
    videoLink: ["https://youtu.be/uSTJB84g8us?si=QnaoQIcD3LfvfUFo"],
    stepsheetLink: "https://www.get-in-line.de/dances/After_Five_Stomp_-_Horner.htm",
    id: "5",
  },
  {
    name: "After the storm",
    isPairDance: false,
    level: "Beginner",
    songs: ["Calm After The Storm - The Common Linnets"],
    videoLink: [
      "https://youtu.be/aPugMGMLTvQ?si=J00p27yoXUHmLew0",
      "https://youtu.be/WQW8Iqhn96E?si=EDRQqTGuTvoolMLb",
      "https://youtu.be/MHVIrOopSBo?si=F1XqpNCA6RctaqA6",
    ],
    stepsheetLink:"https://www.get-in-line.de/dances/After%20The%20Storm_-_Argyle.htm",
    id: "34",
  },
  {
    name: "Ah Si!",
    isPairDance: false,
    level: "Beginner",
    songs: [
      "Levantando Las Manos - El Simbolo,",
      "Te Quiero Mas - Formula Albierta",      
    ],
    videoLink: [
      "https://youtu.be/YHbADO5GbtU?si=lJFGFE4sWf9ztq7z"
    ],
    stepsheetLink: 
      "https://www.get-in-line.de/dances/Ah_Si!_-_Masur.htm",
    id: "6",
  },
  {
    name: "Alligator Rock",
    isPairDance: false,
    level: "Intermediate",
    songs: [
      "See You Later Alligator/R.O.C.K./",
      "Rock Around The Clock - Johnny Earle",
      "You never can tell - Bruce Springsteen",
      "Run Rudolph run - Bryan Adams",
    ],
    videoLink: [
      "https://youtu.be/d-c3wLpDwWQ?si=IC-TJN0ks4C1rFWA",
      "https://youtu.be/nj1rkseEmDg?si=dwEpH-xRogT7upe3",
    ],
    stepsheetLink: 
      "https://www.get-in-line.de/dances/Alligator%20Rock_-_Lescarbeau.htm",
    id: "7",
  },
  {
    name: "All Shook Up",
    isPairDance: false,
    level: "Advanced",
    songs: [
      "All Shook Up - Billy Joel,", "All Shook Up - Elvis Presley"
    ],
    videoLink: [
      "https://youtu.be/yCXqW9xXgnw?si=wE-sTyBTmwayn6YP"
    ],
    stepsheetLink: 
      "https://www.get-in-line.de/dances/All_Shook_Up_-_Fleetwood_Pyle.htm",
    id: "8",
  },
  /*{
    name: "American Kids",
    isPairDance: false,
    level: "Beginner",
    songs: ["American Kids - Kenny Chesney"],
    aliases: ["lernen", "gesehen am 20.12.25 in Billingsbach"],
    videoLink: [
      "https://youtu.be/lnJL8QYWqNE?si=goPAZ_i6-sgR9aBl"
    ],
    stepsheetLink: 
      "https://www.get-in-line.de/dances/American%20Kids_-_Pelletier.htm"
    ,
    id: "9",
  },*/
  {
    name: "An Irish Pub",
    isPairDance: false,
    level: "Beginner",
    songs: ["Irish Pub Song - The High Kings"],
    videoLink: [
      "https://youtu.be/o317_KwyjU4?si=F56ni9_L4b1UZWBV"
    ],
    stepsheetLink: 
      "https://www.get-in-line.de/dances/Irish%20Pub%20Song%20EZ_-_Joergensen.htm",
    id: "10",
  },
  {
    name: "Another Song",
    isPairDance: false,
    level: "Beginner",
    songs: [
      "Another Song I Had To Write - Jacob Lyda"
    ],
    videoLink: [
      "https://youtu.be/-JKrHODcq5o?si=FR0smfi-5QEEhVv3"
    ],
    stepsheetLink: 
      "https://www.get-in-line.de/dances/Another_Song_-_Sala-McGowan_Hickie.htm",
    id: "11",
  },
  {
    name: "Arizona Waltz",
    isPairDance: false,
    level: "Beginner",
    songs: [
      "I Love You Arizona - Rex Allen Jr. : (Arizona State Song)",
      "Alt music : almost any slow to medium tempo waltz",
    ],
    stepsheetLink:"https://www.copperknob.co.uk/downloadsheetpdf?StepsheetID=83808",
    id: "12",
  },
  {
    name: "Ashes Of Love",
    isPairDance: false,
    level: "Improver",
    songs: [
      "Ashes Of Love - Kentucky Headhunters"
    ],
    videoLink: [
      "https://youtu.be/_GQMeYHweso?si=bmq_4-JF1ULaGfMc"
    ],
    stepsheetLink: 
      "https://www.get-in-line.de/dances/Ashes_Of_Love_-_Lafferty.htm",
    id: "13",
  },
  {
    name: "Austin",
    isPairDance: false,
    level: "Improver",
    songs: [
      "Austin - Dasha"
    ],
    videoLink: [
      "https://youtu.be/MuaAVgjJcjk?si=72otnsKLcu1xOAMC"
    ],
    stepsheetLink: 
      "https://www.get-in-line.de/dances/Austin%20(mod%204w)_-_Dasha.htm",
    id: "14",
  },
  {
    name: "Baby Belle",
    isPairDance: false,
    level: "Beginner",
    songs: ["The Belle Of Liverpool - Derek Ryan"],
    aliases: ["neu 2025 bei Hans -Dieter"],
    videoLink: [
      "https://youtu.be/gRxZPDi8MMk?si=ykEtikZRctpWV_5q",
      "https://youtu.be/lRRMAM9UVXQ?si=vs5JP8u3f0S3CNHR",
    ],
    stepsheetLink:"https://www.get-in-line.de/dances/Baby_Belle_-_Teather.htm",
    id: "15",
  },
  {
    name: "Baby ride easy",
    isPairDance: false,
    level: "NA",
    songs: [
      "Baby Ride Easy - Carlene Carter",
      "The lucky one - Alison Krauss",
      "Tequilla makes her clothes fall off - Joe Nichols",
    ],
    videoLink: [
      "https://youtu.be/BciZ-8E8Pm8?si=r-QuXSH_GG18D5fS",
      "https://youtu.be/fco-MdJrPaA?si=G9H3LfCk8NkysPLg",
      "https://youtu.be/Adqbg1h_AWM?si=A9gkARLjTFQ1ZzzW",
    ],
    stepsheetLink:"https://www.get-in-line.de/dances/Baby_Ride_Easy_-_Dynamite_Dot.htm",
    id: "16",
  },
  {
    name: "Bacco Per Bacco aka Zjozzys Funk",
    isPairDance: false,
    level: "Improver",
    songs: ["Bacco Per Bacco - Zucchero"],
    videoLink: [
      "https://youtu.be/4nrehj1jxaI?si=93hKh1c8vmy93ue2",
      "https://youtu.be/pm5rD7WdUbE?si=qlco1yv19l6bBgzA",
    ],
    stepsheetLink:"https://www.get-in-line.de/dances/Zjozzys%20Funk_-_Velde.htm",
    id: "17",
  },
  {
    name: "Back When",
    isPairDance: false,
    level: "Improver",
    songs: ["Back When - Tim McGraw"],
    stepsheetLink:"https://www.copperknob.co.uk/stepsheets/63878/back-when",
    id: "18",
  },
  {
    name: "Bad moon on the rise",
    isPairDance: false,
    level: "Intermediate",
    songs: [
      "Bad Moon Rising - Creedence Clearwater Revival"
    ],
    videoLink: [
      "https://youtu.be/PPmxmR9XYfE?si=EOZ6qWDSt56ZJBrD",
      "https://youtu.be/E0zq_iXG43o?si=QQGsAZ0KSxRq35sO",
    ],
    stepsheetLink:"https://www.get-in-line.de/dances/Bad%20Moon%20On%20The%20Rise_-_Biggs.htm",
    id: "19",
  },
  {
    name: "Barn Dance",
    isPairDance: true,
    level: "Beginner",
    songs: [
      "Redneck Girl - Bellamy Brothers Designated Drinker v. Alan Jackson",
      "I like it, I love it - Tim McGraw",
      "Familiy tradition - Hank Williams",
    ],
    videoLink: [
      "https://youtu.be/7DMeJVIeF2g?si=BTl9Mzx7O6a-Nccz",
      "https://youtu.be/nken2g1F6rQ?si=Z0xGEnJEizFxrp5C",
    ],
    stepsheetLink:"https://www.get-in-line.de/dances/Barn%20Dance%20(P)_-_Klietsch.htm",
    id: "20",
  },
  {
    name: "Beer for my horses",
    isPairDance: false,
    level: "Improver",
    songs: [
      "Beer For My Horses v on Toby Keith",
      "Young & crazy - Frankie Ballard",
      "Feliz navidad - Boney M",
    ],
    videoLink: [
      "https://youtu.be/yQc9UrtsGNk?si=SOmqvPI0mE4iC5nx",
      "https://youtu.be/ZmnEFxACy3s?si=y2oxtFk0vBBdYHC2",
      "https://youtu.be/FGp8BiNz-rA?si=_aYE6RZJfsIpTB92",
    ],
    stepsheetLink:"https://www.get-in-line.de/dances/Beer%20For%20My%20Horses_-_CBass.htm", 
    id: "21",
  },
 /* {
    name: "Billy's Dance",
    isPairDance: true,
    level: "Improver",Olsen Brothers"
    ],
    videoLink: [
      "https://youtu.be/muR_htbpIyY?si=VEmPngQM11wJi__U",
      "https://youtu.be/3wG-iaFVrE8?si=I8v-sGj1X7wB3san",
    ],
    songs: [
      "San Francisco - 
    id: "22",
  },*/
  {
    name: "Black Coffee",
    isPairDance: false,
    level: "Improver",
    songs: [
      "Black Coffee - Lacy J. Dalton Western Girls - Marty Stuart",
      "As good as I once was - Toby Keith",
      "Lucky Lips - Rote Lippen",
      "Whiskey over you - Daisy Town",
      "Little sister - Elvis Presley",
      "Mitternacht - E Nomine",
    ],
    videoLink: [
      "https://youtu.be/orm-7T9LNNE?si=UB0Wo7sxrR_lmtd7",
      "https://youtu.be/jLhSus4kYOw?si=M9acEorMdSbJv5NB",
      "https://youtu.be/y28D1ekRjok?si=pgTMF2326FmRcB0K",
    ],
      stepsheetLink:"https://www.get-in-line.de/dances/Black%20Coffee_-_O%27Malley.htm",
    id: "23",
  },
  /*{
    name: "Blue Night Cha",
    isPairDance: false,
    level: "Beginner",
    songs: ["Blue Night - Michael Learns To Rock"],
    videoLink: [
      "https://youtu.be/7jToAyvoyBQ?si=SKktGUvSmF2FAlC2",
      "https://youtu.be/uCujlUwrJtM?si=iLORWrc7RiET1SqN",
    ],
    stepsheetLink:"https://www.get-in-line.de/dances/Blue_Night_Cha_-_Ray.htm",
    id: "24",
  },*/
  /*{
    name: "Blue Rose",
    isPairDance: true,
    level: "NA",
    songs: [
      "Why Do I Feel Like Running by Montgomery G entry"
    ],
    videoLink: [
      "https://youtu.be/yCL6WmKlluU?si=MtaL6YlpW333Izpf",
      "https://youtu.be/1hUk0Scp8WI?si=zZf5Mazyr1B3e4Kb",
    ],
    stepsheetLink:"https://www.copperknob.co.uk/stepsheets/62774/blue-rose-p",
    id: "25",
  },*/
  {
    name: "Boat To Liverpool",
    isPairDance: false,
    level: "Intermediate",
    songs: [
      "On The Boat To Liverpool - Nathan Carter",
      "You make me feel like Christmas - Gwen Stefani",
    ],
    videoLink: [
      "https://youtu.be/ZdYBmE_tH-k?si=tk8oOcrqV4XtjJ-I",
      "https://youtu.be/4306lzGTJTk?si=6UiGnE8X2dMiUpXy",
      "https://youtu.be/k2s4yXaVGKg?si=yw4s0BiVsgQxPp5f",
    ],
    stepsheetLink:"https://www.get-in-line.de/dances/The%20Boat%20To%20Liverpool_-_Brown.htm",
    id: "26",
  },
  {
    name: "Bonaparte's Retreat",
    isPairDance: false,
    level: "Beginner",
    songs: ["Bonaparte's Retreat - Glen Campbell"],
    videoLink: [
      "https://youtu.be/OY_1B8cawOE?si=nxQs0F4wUMxYegrK",
      "https://youtu.be/1OYjEL4ZBlI?si=D7izsAyHRWv5YNxC",
    ],
    stepsheetLink:"https://www.get-in-line.de/dances/Bonaparte%27s%20Retreat_-_Glover.htm",
    id: "27",
  },
  {
    name: "Boot Scootin Boogie",
    isPairDance: false,
    level: "NA",
    songs: [
      "Boot Scootin Boogie - Brooks & Dunn"
    ],
    videoLink: [
      "https://youtu.be/9CXVhnNm0hg?si=ZKR_zSLMhyUUbaJS",
      "https://youtu.be/wZITUOchwQQ?si=HhiVwxAmABap848-",
    ],
    stepsheetLink:"https://linedance-berlin.de/wp-content/uploads/2009/10/Boot-Scootin-Boogie-.pdf",
    id: "28",
  },
  {
    name: "Bosa Nova",
    isPairDance: false,
    level: "Improver",
    songs: [
      "Blame It On The Bossa Nova - Jane McDonald",
      "Let it snow - Charley Pride",
    ],
    videoLink: [
      "https://youtu.be/he_qRrOisF8?si=vT8NW64VLqm3Kzah",
      "https://youtu.be/QZvr6HA2Sf8?si=a05ciDJYKZP02Ibn",
      "https://youtu.be/r-HLlhvhrsw?si=qUvO9_Rsa3x05Con",
    ],
    stepsheetLink:"https://www.get-in-line.de/dances/Bosa_Nova_-_Dennington.htm",
    id: "29",
  },
  {
    name: "Bread And Butter",
    isPairDance: false,
    level: "Intermediate",
    songs: [
      "Shortenin' Bread - Tractors Sloop John B",
      "So called friend - Danni Leigh",
      "Summer of 69 - Bryan Adams",
    ],
    videoLink: [
      "https://youtu.be/GYWv9RBx2EE?si=S8e9zrY9P-WSmlNK",
      "https://youtu.be/6j9oehuV7mM?si=BZWE-RdbitjruOd7",
    ],
    stepsheetLink:"https://www.get-in-line.de/dances/Bread_And_Butter_-_Morgan.htm",
    id: "30",
  },
  {
    name: "Bring Down The House",
    isPairDance: false,
    level: "Intermediate",
    songs: [
      "Bring Down the House - Dean Brody",
      "Pick out a christ mas tree - Dan+Shay",
    ],
    videoLink: ["https://youtu.be/xLqtx6CvVz4?si=02-Mbr_XPBxr2e_l"],
    stepsheetLink:"https://www.get-in-line.de/dances/Bring%20Down%20The%20House_-_Cormier-Henley.htm",
    id: "31",
  },
  {
    name: "Butterfly",
    isPairDance: true,
    level: "Intermediate",
    songs: [
      "www.memory.com - Alan Jackson",
      "A long and happy life - Delta Rae",
    ],
    videoLink: ["https://youtu.be/7_hruLKnwZ8?si=Ch_-iCXTgfz7g93y"],
    stepsheetLink:"https://www.get-in-line.de/dances/Butterfly_-_Unbekannt.htm",  
    id: "32",
  },
  {
    name: "Cabo san Lucas",
    isPairDance: false,
    level: "Beginner",
    songs: [
      "Cabo San Lucas - Toby Keith",
      "Some broken hearts - Don Willliams",
    ],
    videoLink: [
      "https://youtu.be/NnL1D12Rq2A?si=VkM1r-ERu7nvFGgG",
      "https://youtu.be/13onhnhUMKY?si=Xn6okFe67b0rG3HD",
    ],
    stepsheetLink:"https://www.get-in-line.de/dances/Cabo_San_Lucas_-_Ghazali.htm", 
    id: "33",
  },
  {
    name: "Canadian Stomp",
    isPairDance: false,
    level: "Beginner",
    songs: [
      "Copperhead Road - Steve Earle",
      "Louisiana Saturday night - Mel McDaniel",
      "Any Man Of Mine - Shania Twain One beer can vom Brad Paisley",
      "What makes you country - Luke Bryan",
      "Beer never broke my heart - Luke Combs",
      "Sweet home Alabama - Lynyrd Skynyrd", 
      "Liquor Talking - Don Louis",
    ],
    videoLink: [
      "https://youtu.be/ps79VA4HFUc?si=YzKKQlzntekJFqOh",
      "https://youtu.be/Amujecgz67Q?si=yplOwXbdOtXwZmwC",
      "https://youtu.be/SspeJUF1SjU?si=n0wKafyx86HbOcGQ",
    ],
    stepsheetLink:"https://www.get-in-line.de/dances/Canadian_Stomp_Circle_-_Pflug.htm",
    id: "35",
  },
  {
    name: "CCS",
    isPairDance: false,
    level: "Beginner",
    songs: [
      "If I Never Stop Loving You - David Kersh,",
      "Lovin' You Against My Will - Gary All an,",
      "Oh Girl - Vince Gill",
      "Your man - Josh Turner",
    ],
    videoLink: [
      "https://youtu.be/KWNULXemUn0?si=j5IyplmPCxknIqhJ",
      "https://youtu.be/jzXdIlS2GtI?si=QC44C3aE72GwmdrY",
    ],
    stepsheetLink:"https://www.get-in-line.de/dances/C_C_S_-_Davis-Hammer.htm",
    id: "36",
  },
  {
    name: "Chattahoochee",
    isPairDance: false,
    level: "Beginner",
    songs: [
      "Chattahoochee - Alan Jackson,",
      "Chattahoochee (Extended Mix) - Alan Jackson,",
      "Dallas Days And Fort Worth Nights - Chris LeDoux",
      "The night I called the old man out - Garth Brooks",
      "Cherokee Boogie - BR5-49",
    ],
    videoLink: [
      "https://youtu.be/oroaUj0s2v8?si=aah04_cqSrtUSMt7",
      "https://youtu.be/44T3yo5OREY?si=Iw5zZX5xTvk-vdmY",
      "https://youtu.be/TPXs0Ofv2qA?si=P7uJmd_qS5Th2_p_",
    ],
    stepsheetLink:"https://www.get-in-line.de/dances/Chattahoochee_-_Unbekannt.htm",
    id: "37",
  },
  {
    name: "Cheyenne Rock",
    isPairDance: false,
    level: "Intermediate",
    songs: [
      "Past The Point Of Rescue - Hal Ketchum,",
      "(Tonight We Just Might) Fall in Love Again - Hal Ketchum",
    ],
    stepsheetLink:"https://www.get-in-line.de/dances/Cheyenne%20Rock_-_Reeves.htm",
    id: "38",
  },
  {
    name: "Chica Boom Boom",
    isPairDance: false,
    level: "Improver",
    songs: [
      "Boom Boom Goes My Heart - Alex Swings Oscar Sings"
    ],
    videoLink: [
      "https://youtu.be/PnnU4wqnvQU?si=2pMmZauYTS84Q8RI",
      "https://youtu.be/7AknftqE_jQ?si=Lx6HIbbBftP3Uwpo",
    ],
    stepsheetLink:"https://www.get-in-line.de/dances/Chica_Boom_Boom_-_Morris.htm",
    id: "39",
  },
  {
    name: "Clickety Clack",
    isPairDance: false,
    level: "Intermediate",
    songs: [
      "Southbound Train - Travis Tritt",
      "Redneck woman - Gretchen Wilson",
      "Guitar Cadillacs - D. Yoakam",
      "Beer & woman - Steve Forde",
    ],
    videoLink: [
      "https://youtu.be/nRmvdZZ6ths?si=nGXsyNbt9xS-ZdI8"
    ],
    stepsheetLink:"https://www.get-in-line.de/dances/Clickety_Clack_-_Metelnick-Hunyadi.htm",
    id: "40",
  },
  {
    name: "Closer",
    isPairDance: false,
    level: "Improver",
    songs: [
      "Closer - Susan Ashton,", 
      "Little Unlucky At Love - Jenai"
    ],
    videoLink: [
      "https://youtu.be/eNiuLUHhD_s?si=T_b5biJe2M9PgGOI"
    ],
    stepsheetLink:"https://www.get-in-line.de/dances/Closer_-_Kelly.htm",
    id: "41",
  },
  {
    name: "Coastin'",
    isPairDance: false,
    level: "Improver",
    songs: [
      "Lord Of The Dance - Ronan Hardiman"
    ],
    videoLink: [
      "https://youtu.be/_7xGvGX3OHc?si=4GEaAl6KbdkxJbaj"
    ],
    stepsheetLink:"https://www.get-in-line.de/dances/Coastin%27_-_Yeoman.htm",
    id: "42",
  },
  {
    name: "Codigo",
    isPairDance: false,
    level: "Improver",
    songs: [
      "Código - George Strait",
      "I don't need anything this christmas - Shawn Colvin",
    ],
    videoLink: [
      "https://youtu.be/qOU48uhELgc?si=IstTPWDODMmt-WCJ",
      "https://youtu.be/B0P4Wd1C_dc?si=Ib9_MuvsDjt102Mj",
    ],
    stepsheetLink:"https://www.get-in-line.de/dances/Codigo_-_Stott.htm",
    id: "43",
  },
  {
    name: "Coffee Days and Whiskey Nights",
    isPairDance: false,
    level: "Beginner",
    songs: [
      "Coffee Days And Whiskey Nights - Robynn Shayne",
      "Ashes of love - Kentucky Headhunters",
      "Straight to hell - Darius Rucker",
    ],
    videoLink: [
      "https://youtu.be/5IR-iB563Vg?si=lM97Y3DJfxWuFwST",
      "https://youtu.be/Cnu-I7R1Cy8?si=V8pj-95J78Ip8kxn",
    ],
    stepsheetLink:"https://www.get-in-line.de/dances/Coffee%20Days%20and%20Whiskey%20Nights_-_Verhagen.htm",
    id: "44",
  },
  {
    name: "Come dance with me",
    isPairDance: false,
    level: "Beginner",
    songs: [
      "Come Dance With Me - Nancy Hays",
      "L.A. Woman - Frankie Ballard",
      "How forever feels - Kenny Chesney",
      "Must be the whiskey - Cody Jinks",
    ],
    videoLink: [
      "https://youtu.be/IjmShXNKl9k?si=-El9caZwsjHLP8UX",
      "https://youtu.be/NXNByOkG2FM?si=ERd92Zwh0Jv9NvOQ",
    ],
    stepsheetLink:"https://www.get-in-line.de/dances/Come_Dance_With_Me_-_Thompson.htm",
    id: "45",
  },
  {
    name: "Copperhead Road aka Drunken Cowboy",
    isPairDance: false,
    level: "Beginner",
    songs: ["Copperhead Road - Steve Earl"],
    videoLink: [
      "https://youtu.be/1D1m0ajN-5o?si=OOoroH2vCAYU5KIy",
      "https://youtu.be/g3zwEDiU53I?si=ei17Tmxm3EHJp7YA",
    ],
    stepsheetLink:"https://www.get-in-line.de/dances/Copperhead_Road-20_-_Unbekannt.htm",
    id: "46",
  },
  {
    name: "Corn",
    isPairDance: false,
    level: "Improver",
    songs: ["Corn - Blake Shelton"],
    videoLink: [
      "https://youtu.be/CcGUBp-lWcc?si=cG5OkauzfQkV6GUt"
    ],
    stepsheetLink:"https://www.get-in-line.de/dances/Corn_-_Fowler.htm",
    id: "47",
  },
  {
    name: "Corn don't grow",
    isPairDance: false,
    level: "Improver",
    songs: ["Where Corn Don't Grow - Travis Tritt"],
    videoLink: [
      "https://youtu.be/vPup0rMFV_s?si=TwIRLji3xHOmGiUT",
      "https://youtu.be/OixEfO9Rlnw?si=OPlDT04s-4-dbT4x",
    ],
    stepsheetLink:"https://www.get-in-line.de/dances/Corn%20Don%27t%20Grow_-_Argyle.htm",
    id: "48",
  },
  {
    name: "Country 2 Step",
    isPairDance: false,
    level: "Beginner",
    songs: [
      "A better man - Clint Black (langsam)", 
      "Country roads - John Denver",
      "Flieg junger Adler - Tom Astor",
      "I Just Want My Baby Back - Jerry Kilgore",
      "Listen to your sens es - Alan Jackson",
      "Mr. Rock and Roll - Amy McDonald",
      "Rockin little Christmas - Carlene Carter",
      "The best thing - Brad Paisley",
      ],
    videoLink: [
      "https://youtu.be/EKSeFK2m81c?si=NLddFGwzlb6-c21y",
      "https://youtu.be/p7objprgyic?si=a5zDqVkFW1fJqKes",
    ],
    stepsheetLink:"https://www.get-in-line.de/dances/Country_2_Step_-_Masters_In_Line.htm",
    id: "49",
  },
  {
    name: "Country In The City",
    isPairDance: false,
    level: "Beginner",
    songs: [
      "Country In The City - Lesley Kernochan"
    ],
    videoLink: [
      "https://youtu.be/28Qm7VyC6SI?si=wClEtBN_r0Ne0-og"
    ],
    stepsheetLink:"https://www.get-in-line.de/dances/Country%20In%20The%20City_-_Markof.htm",
    id: "50",
  },
  {
    name: "Country Walkin'",
    isPairDance: false,
    level: "Beginner",
    songs: [
      "Walkin' The Country - The Ranch",
      "Strike It Up - Black Box",
      "Old Pop In An Oak - Rednex",
    ],
    videoLink: [
      "https://youtu.be/uWZDHMiZUfs?si=QuWYpU2pl-Qg0xUj"
    ],
    stepsheetLink:"https://www.get-in-line.de/dances/Country_Walkin%27_-_Desarro.htm",
    id: "51",
  },
  {
    name: "Cowboy Cha Cha",
    isPairDance: true,
    level: "Beginner",
    songs: [
      "A Hot Dog & A Daiquiri by Bill Crews",
      "Gone Country by Alan Jackson",
      "Tequila Sunrise by Alan Jackson",
      "Dancin' Cowboys by The Bellamy Brother",
      "Neon Moon by Brooks & Dunn",
      "Margaritaville by Jimmy Buffett",
      "Segler aus Papier by Fair Play",
    ],
    videoLink: [
      "https://youtu.be/yIqieY2QS3Y?si=p17tFrosnsal452f",
      "https://youtu.be/kVMqgSEBhZM?si=BmRdHOm3RJJAivIZ",
      "https://youtu.be/FJLjEsGefX8?si=48M6bRygP4v3u4Ty",
    ],
    stepsheetLink:"https://linedance-berlin.de/wp-content/uploads/2010/03/Cowboy-Cha-Cha-.pdf",
    id: "52",
  },
  {
    name: "Cowboy Charleston",
    isPairDance: false,
    level: "Beginner",
    songs: [
      "New York, New York - Frank Sinatra,",
      "(This Thing Called) Wantin' And Havin' It All - Sawyer Brown,",
      "Sold - John Michael Montgomery,",
      "In The Mode (Club Mix) - Asleep At The Wheel",
      "Walking in the Winter Wonderland - Jerry Jeff Walter",
    ],
    videoLink: [
      "https://youtu.be/AdyVGPT2Teg?si=l7zYAKyKOQmSPihl"
    ],
    stepsheetLink:"https://www.get-in-line.de/dances/Cowboy_Charleston_-_Unbekannt.htm",
    id: "53",
  },
  {
    name: "Crazy Friends",
    isPairDance: false,
    level: "Improver",
    songs: [
      "Crazy As Me (feat. Blake Wood) - Belles"
    ],
    videoLink: [
      "https://www.youtube.com/watch?v=Hk1l729xLtw"

    ],
    stepsheetLink:"https://www.copperknob.co.uk/stepsheets/199680/crazy-friends",
    id: "54",
  },
  {
    name: "Crossfire",
    isPairDance: false,
    level: "Beginner",
    songs: [
      "Crossfire by DJ Ötzi & The Bellamy Brothers",   
    ],
    videoLink: [
      "https://youtu.be/Gz7r0dE90_8?si=x1T6Gpiz1Ewp9w7X"
    ],
    stepsheetLink:"https://www.copperknob.co.uk/stepsheets/181210/crossfire",
    id: "55",
  },
  {
    name: "Cruisin'",
    isPairDance: false,
    level: "Beginner",
    songs: [
      "Shadows In The Night - Scooter Lee",
      "I need more of you - Bellamy Brothers",
      "What Kind Of Fool - Scooter Lee",
      "Still Cruisin' - Beach Boys",
      "If I Said You Had a Beautiful Body - The Bellamy Brothers",
      "Amarillo by Morning - George Strait",
      "Margaritaville - Alan Jackson & Jimmy Buffett",
    ],
    videoLink: [
      "https://youtu.be/hZBK3pt-7u0?si=8UJduGIpRYUk2QbP"
    ],
    stepsheetLink:"https://www.get-in-line.de/dances/Cruisin%27_-_Hale.htm",
    id: "56",
  },
  {
    name: "Cucaracha",
    isPairDance: false,
    level: "Beginner",
    songs: [
      "All you ever do is bring me down - Mavericks"
    ],
    videoLink: [
      "https://youtu.be/ftogsZM8WWg?si=dIpjR7TYWw4IaLB8"
    ],
    stepsheetLink:"https://www.get-in-line.de/dances/Cucaracha_-_Dahl-Dahl.htm",
    id: "57",
  },
  {
    name: "Cupid Shuffle",
    isPairDance: false,
    level: "Beginner",
    songs: ["Cupid Shuffle - Cupid"],
    videoLink: [
      "https://youtu.be/UVKooAlER20?si=vyknFJZiuqUQ6TpJ",
      "https://youtu.be/wBeVHvgm8Es?si=4d6d4-3laOfMQCCb",
    ],
    stepsheetLink:"https://www.get-in-line.de/dances/Cupid_Shuffle_-_Cupid.htm",
    id: "58",
  },
  {
    name: "Dancing in the dark",
    isPairDance: false,
    level: "Improver",
    songs: [
      "Smoke Rings In The Dark - Gary Allan,",
      "I Should Have Been True - Mavericks",
      "Knockin on heaven's door - Guns & Roses",
      "Old lucky diamond motel - Vince Gill",
      "One horse town - Blackberry Smoke",
    ],
    videoLink: [
      "https://youtu.be/3buaoK_GZlI?si=1ZDQrw5X7jV8tqch",
      "https://youtu.be/7oQW_a_uOWU?si=7LvMkRFufLvSm5u9",
    ],
    stepsheetLink:"https://www.get-in-line.de/dances/Dancing_In_The_Dark_-_Thompson.htm",
    id: "59",
  },
  {
    name: "Designated Drinker",
    isPairDance: false,
    level: "Improver",
    songs: [
      "Designated Drinker - Alan Jackson",
      "Ain't Much Fun - Toby Keith,",
      "Slow Me Down - Shelby Lynne,",
      "Whiskey Under The Bridge - Brooks & Dunn",
    ],
    stepsheetLink:"https://www.get-in-line.de/dances/Designated_Drinker_-_Brady.htm",
    id: "60",
  },
  {
    name: "Devil in Disguise",
    isPairDance: false,
    level: "Improver",
    songs: [
      "Devil In Disguise - Trisha Yearwood,",
      "Devil In Disguise - Elvis Presley",
    ],
    videoLink: [
      "https://youtu.be/Gzv66zGf7-Y?si=xRgu_oii7GeY-fTD",
      "https://youtu.be/vF4Dogui1o4?si=fwbZaT1qbG5oeuTD",
      "https://youtu.be/Px_aqBrRLfQ?si=4PIjQkAmILmCRRKk",
    ],
    stepsheetLink:"https://www.get-in-line.de/dances/A_Devil_In_Disguise_-_Stott-Birchall.htm",
    id: "61",
  },
  {
    name: "Disappearing Tail Lights",
    isPairDance: false,
    level: "Improver",
    songs: [
      "Disappearing Tail Lights - Gord Bamford",
      "What Kinda Gone - Chris Cagle",
    ],
    videoLink: [
      "https://youtu.be/ydvjSKxNuaQ?si=xib2dN26Q1yMsk2u",
      "https://youtu.be/C5Xpm1aEEkQ?si=QHTBoF5OeqokwqbX",
    ],
    stepsheetLink:"https://www.get-in-line.de/dances/Disappearing_Tail_Lights_-_Metelnick-Biggs.htm",
    id: "62",
  },
  /*{
    name: "Dizzy",
    isPairDance: false,
    level: "Intermediate",
    songs: ["Dizzy - Scooter Lee"],
    videoLink: [
      "https://youtu.be/JY2EsnnLlBg?si=-wnHzov8AwyZ7elW",
      "https://youtu.be/N8jhSXUJhMQ?si=ldwhHRjCD99ZimIs",
      "https://youtu.be/k21ZrJFjR_8?si=zqIjjOmy7A0AZBtm",
    ],
    stepsheetLink:"https://www.get-in-line.de/dances/Dizzy_-_Thompson.htm",
    id: "63",
  },*/
  {
    name: "Do It All Again",
    isPairDance: false,
    level: "Improver",
    songs: ["Do It All Again - Guilty Ple asure, Enisa & Faydee"],
    videoLink: ["https://youtu.be/QtPkuRt0st0?si=Uzps8xuvBluud3ki"],
    stepsheetLink:"https://www.get-in-line.de/dances/Do%20It%20All%20Again_-_O%27Reilly-Gallagher.htm",
    id: "64",
  },
  {
    name: "Do It With Style",
    isPairDance: false,
    level: "Improver",
    songs: ["Style - Danger Twins"],
    videoLink: [
      "https://youtu.be/FxeUaO5ljPc?si=rqMH4TkJm958m_BB",
      "https://youtu.be/Rx-cZPAuqxw?si=3CKXkemIaO8GDLR6",
    ],
    stepsheetLink:"https://www.get-in-line.de/dances/Do%20It%20With%20Style_-_Gagnon-Beauchamp.htm",
    id: "65",
  },
  {
    name: "Doctor, Doctor",
    isPairDance: false,
    level: "Intermediate",
    songs: ["Bad Case Of Loving You - Robert Palmer"],
    videoLink: [
      "https://youtu.be/d9cXzJucMWM?si=-KZJuEaqugVCbuhr",
      "https://youtu.be/y9RKzQPF4ak?si=dZfZfN39mGLB7WOI",
    ],
    stepsheetLink:"https://www.get-in-line.de/dances/Doctor%20Doctor_-_MIL.htm",
    id: "66",
  },
  {
    name: "Don't you wish",
    isPairDance: false,
    level: "Beginner",
    songs: ["Don't You Wish It Was True - John Fogerty"],
    videoLink: [
      "https://youtu.be/Q9wY9bsJ1qs?si=ow_GqT3Yt1ichQol",
      "https://youtu.be/XQqwu62LrVE?si=LCRFAgCwwvvh18-i",
    ],
    stepsheetLink:"https://www.get-in-line.de/dances/Don%27t_You_Wish_-_Simons.htm",
    id: "67",
  },
  {
    name: "Down on the corner",
    isPairDance: false,
    level: "Intermediate",
    songs: [
      "Down On The Corner - Mavericks",
      "I need more of you - Bellamy brothers",
      "Jeans on - Keith Urban",
    ],
    videoLink: ["https://youtu.be/71owBFlVB0o?si=ShCyBI87fRpPH44O"],
    stepsheetLink:"https://www.get-in-line.de/dances/Down_On_The_Corner_-_Metelnick.htm",
    id: "68",
  },
  {
    name: "Drinking Problem",
    isPairDance: false,
    level: "Intermediate",
    songs: ["Drinking Problem - Midland"],
    videoLink: [
      "https://youtu.be/PYFqw0NTBq8?si=H9ElCy2Gfg9KjmvA",
      "https://youtu.be/FyifTTC3Itk?si=mzF7wxyUWxakB7fW",
    ],
    stepsheetLink:"https://www.get-in-line.de/dances/Drinking%20Problem_-_Bailey.htm",
    id: "69",
  },
  {
    name: "Drivin' my life away",
    isPairDance: false,
    level: "Beginner",
    songs: ["Drivin' My Life Away - Rhett Akins"],
    videoLink: [
      "https://youtu.be/8DPiddgWhO0?si=IHYfiu7-kR61B-mq",
      "https://youtu.be/544dMQL1rkk?si=XBS5SygRT63Fm7TF",
    ],
    stepsheetLink:"https://www.get-in-line.de/dances/Drivin%27_My_Life_Away_-_Castle-Castle.htm",
    id: "70",
  },
  {
    name: "Eagles Rock",
    isPairDance: false,
    level: "Intermediate",
    songs: ["How Long - The Eagles"],
    videoLink: [
      "https://youtu.be/UMgXvofY3tA?si=6ZNtnxRX8QDRU2b0",
      "https://youtu.be/LUPAaaf_T4o?si=HrIfHzQenFtmKQ01",
    ],
    stepsheetLink:"https://www.get-in-line.de/dances/Eagles_Rock_-_Teather.htm",
    id: "71",
  },
  {
    name: "East Bound and Down 2000",
    isPairDance: false,
    level: "NA",
    songs: ["East Bound and Down - Jerry Reed"],
    videoLink: ["https://youtu.be/44Zqk7Jxyfw?si=cfibQnzvQ_8EqJYa"],
    stepsheetLink:"https://www.get-in-line.de/dances/East_Bound_And_Down_2000_-_Hunyadi.htm",
    id: "72",
  },
  {
    name: "Eatin' Right And Drinkin' Bad",
    isPairDance: false,
    level: "Beginner",
    songs: [
      "Eatin' Right And Drinkin' Bad - Ronny Beard",
      "All My Ex's Live In Texas - George Strait",
      "Bringing back the sunshine - Blake Shelton",
    ],
    videoLink: [
      "https://youtu.be/GhXyFevB8dA?si=7NgjKo9gZi3jQK3U",
      "https://youtu.be/llLR3tOVkNU?si=WI6L6geSjQgejUoY",
    ],
    stepsheetLink:"https://www.get-in-line.de/dances/Eatin%27_Right_And_Drinkin%27_Bad_-_Perry.htm",
    id: "73",
  },
  {
    name: "El Paso",
    isPairDance: true,
    level: "Beginner",
    songs: ["Neon Moon - Brooks & Dunn", "Tequila Sunrise - Eagles"],
    videoLink: ["https://youtu.be/vk7xvD1ezXM?si=HWCC9nMgA0RX_eKU"],
    stepsheetLink:"https://www.get-in-line.de/dances/El_Paso_-_Unbekannt.htm",
    id: "74",
  },
  {
    name: "Electric Slide",
    isPairDance: false,
    level: "Beginner",
    songs: [
      "Electric Boogie - Marcia Griffiths",
      "Achy Breaky Heart - Billy Ray Cyrus",
      "Play something country - Brooks & Dunn",
      "Walk softly - Kentucky Headhunters",
    ],
    videoLink: [
      "https://youtu.be/jHpyJa_h_TU?si=g4Uy3BLvt78-nAev",
      "https://youtube.com/shorts/dHUCuqgIX5I?si=ugVRJfAus9FolXYq",
      "https://youtu.be/IaAjJIkkNwg?si=u2io4xDTTwqjPS4N",
    ],
    stepsheetLink:"https://www.get-in-line.de/dances/Electric%20Slide_-_Silver.htm",
    id: "75",
  },
  {
    name: "Endless",
    isPairDance: false,
    level: "Beginner",
    songs: ["Less and Less - Josh Grider"],
    videoLink: [
      "https://youtu.be/ygbJc_gTB-8?si=S4ByK2oVF7sRcyAx",
      "https://youtu.be/-9PlgylskfU?si=ESo9xvR6FkupqVAv",
    ],
    stepsheetLink:"https://www.get-in-line.de/dances/Endless_-_Ryan.htm",
    id: "76",
  },
  {
    name: "Fisher's Hornpipe",
    isPairDance: false,
    level: "Improver",
    songs: ["Fisher's Hornpipe - David Schnaufer"],
    videoLink: [
      "https://youtu.be/Fyha771R3fU?si=W9R13HgR8YbU4BBZ",
      "https://youtu.be/w52PuhJxkJo?si=lUz4nT2qkvtU2g1J",
    ],
    id: "77",
  },
  {
    name: "Flobie Slide",
    isPairDance: false,
    level: "Beginner",
    songs: [
      "Six Days On The Road - Sawyer Brown,",
      "I'm Holdin' On To Love (To Save My Life) - Shania Twain,",
      "Big Bang Boogie - The Judds",
    ],
    videoLink: [
      "https://youtu.be/xcLC-X8ytxs?si=OZEft4_lYvOPG9g7",
      "https://youtu.be/YCBSKcXT2iE?si=SR0glkT2gT8t-Nuh",
    ],
    id: "78",
  },
  {
    name: "The Flute",
    isPairDance: false,
    level: "Intermediate",
    songs: ["Flute - Barcode Brothers"],
    videoLink: [
      "https://youtu.be/r8VWQxr118c?si=99_7hoi_VufJh1on",
      "https://youtu.be/vAvepBJkLDA?si=9BvM43TNOq_ELvce",
      "https://youtu.be/IpCGvojs1XA?si=DwXZsxMctC5E0bCW",
    ],
    id: "79",
  },
  {
    name: "Footloose",
    isPairDance: false,
    level: "Intermediate",
    songs: [
      "Footloose - Kenny Loggins,", 
      "Footloose - Blake Shelton"],
    videoLink: ["https://youtu.be/fvbmQU9Y1Sg?si=LONnvS2xE0EXkX76"],
    id: "80",
  },
  {
    name: "Forever to Me",
    isPairDance: false,
    level: "Improver",
    songs: ["Forever To Me - Cole Swindell"],
    id: "81",
  },
  {
    name: "Four Corner",
    isPairDance: false,
    level: "Improver",
    songs: ["Guitars, Cadillacs - Dwight Yoakam"],
    videoLink: ["https://youtu.be/gTncpCChro4?si=mK1giYt6QVOGiSkj"],
    id: "82",
  },
  {
    name: "Front Door Famous",
    isPairDance: false,
    level: "Improver",
    songs: ["Front Door Famous - Luke Combs"],
    videoLink: [
      "https://youtu.be/AflnXnf3hAI?si=cEOjHfZbNMDfhumI",
      "https://youtu.be/gUMadvY8OY8?si=pqaoB-Oy5Pw7imdB",
    ],
    id: "83",
  },
  {
    name: "Galway Girls",
    isPairDance: false,
    level: "Improver",
    songs: ["Galway Girl - Sharon Shannon & Steve Earle"],
    videoLink: [
      "https://youtu.be/8ZD2hR01YM4?si=ENw7c8D3JYQeiaVQ",
      "https://youtu.be/3wrZOqhvqnA?si=3qUxTty3uSruDf1R",
    ],
    id: "84",
  },
  /*{
    name: "Ghost Town",
    isPairDance: false,
    level: "Beginner",
    songs: [
      "Ghost Town - Sam Outlaw"
    ],
    videoLink: [
      "https://youtu.be/1b0lNaaOH0I?si=FRGayRi3tRdkhWvq",
      "https://youtu.be/7q6s1WILdE8?si=s5Wm9SL6F-e3d6mK",
    ],
    id: "85",
  },*/
  {
    name: "Ghost Train",
    isPairDance: false,
    level: "NA",
    songs: [
      "Ghost Train - Australia's Tornados",
      "Baby likes to rock it - The Tractors",
      "Zorbas Dance (Sirtaki)",
    ],
    videoLink: [
      "https://youtu.be/7ZW63hu6hhY?si=0eD9l8c3XOqR76UM",
      "https://youtu.be/9WqcikLfIH0?si=d0br8AROaGJ4ulh2",
    ],
    id: "86",
  },
  {
    name: "Glass of Wine",
    isPairDance: false,
    level: "Beginner",
    songs: ["Cry to Me - Kilotile"],
    videoLink: [
      "https://youtu.be/rbU9jPFCTi4?si=DMKd9h6LaGCop11t",
      "https://youtu.be/3qj2Mvxu1F4?si=hCoqGs3p7yFbl85u&t=210",
    ],
    id: "87",
  },
  {
    name: "God Blessed Texas",
    isPairDance: false,
    level: "NA",
    songs: ["God Blessed Texas - Little Texas"],
    videoLink: [
      "https://youtu.be/CIWc69F6SA8?si=xhQ6UlCI9nF_rwl5",
      "https://youtu.be/ZwYR6EQFP98?si=x6uRpsLoqx1S0Up-",
    ],
    id: "88",
  },
  {
    name: "Golden Wedding Ring",
    isPairDance: false,
    level: "Beginner",
    songs: ["Golden Ring (ft. Dierks Bentley) - Terri Clark"],
    videoLink: ["https://www.youtube.com/watch?v=CXVSsyPVVEs"],
    id: "89",
  },
  {
    name: "Gone West",
    isPairDance: false,
    level: "Improver",
    songs: ["Gone West - Gone West"],
    videoLink: [
      "https://youtu.be/Wbl2hH1ia-8?si=892DojiN2DJK78rv",
      "https://youtu.be/hzmsrR2PV18?si=uFyd5xanHWg6MB9J",
    ],
    id: "90",
  },
  {
    name: "Good day to run",
    isPairDance: false,
    level: "Beginner",
    songs: ["A Good Day To Run - Darryl Worley"],
    videoLink: ["https://youtu.be/yR1ILtWmYLI?si=gS-Gw2bnpEpt13Ef"],
    id: "91",
  },
  {
    name: "Good Time",
    isPairDance: false,
    level: "Beginner",
    songs: ["Good Time - Alan Jackson"],
    videoLink: ["https://youtu.be/vTY5hwqxRLs?si=c2wOM8xQEIR1ePs_"],
    id: "92",
  },
  {
    name: "Grundy Gallop",
    isPairDance: true,
    level: "NA",
    songs: [
      "Sold - John M. Montgomery [120 bpm]",
      "To Be Loved By You - Wynonna [96 bpm]",
      "Dust On The Bottle - David Lee Murphy [102 bpm]",
      "No No Never - Texas Lightning [ bpm]"
    ],
    videoLink: ["https://youtu.be/dZKv36dj5zk?si=k9CHyacbDmkQfvm1"],
    id: "93",
  },
  {
    name: "Gypsy Queen",
    isPairDance: false,
    level: "Intermediate",
    songs: ["Gypsy Queen - Chris Norman", "Wake up little Suzie"],
    videoLink: ["https://youtu.be/FZfLxANTUBM?si=VJjlekFOdIv5yXLO"],
    id: "94",
  },
  /*{
    name: "Half a Cha",
    isPairDance: false,
    level: "Beginner",
    songs: [
      "Half A Song - Cody Johnson",
      "'Til my last day - Justin Moore",
      "Country - Mo Pitney",
    ],  
    id: "95",
 },*/
  {
    name: "Happy, Happy, Happy",
    isPairDance: false,
    level: "Intermediate",
    songs: ["Soggy Bottom Summer - Dean Brody"],
    videoLink: [
      "https://youtu.be/i9zhQUTu4Pg?si=aPhNx5F0ycp2SOCv",
      "https://youtu.be/iZmox7066lM?si=0TyQy1DFWVfPX6N5",
    ],
    id: "96",
  },
  {
    name: "Healing Hands",
    isPairDance: false,
    level: "Beginner",
    songs: ["Healing Hands - Drop Box Cowboys"],
    videoLink: ["https://youtu.be/1cC3AyeHl5I?si=TCWRHtXV83MqCAiV"],
    id: "97",
  },
  {
    name: "Hearts And Flowers",
    isPairDance: false,
    level: "Beginner",
    songs: [
      "Hearts And Flowers - Dave Sheriff",
      "Working man blues - Merke Haggard",
      "Five Minutes - Lorrie Morgan",
      "Hello Mary Lou - Creedence Clearwater Revival",
      "I believe in Santa Claus - Dolly Parton",
    ],
    videoLink: ["https://youtu.be/nFCA9iVW8aM?si=CvM9ONf1ZaevhX8o"],
    id: "98",
  },
  {
    name: "Heel, Toe, Rodeo",
    isPairDance: false,
    level: "Improver",
    songs: ["Cowboy Up - Kaylee Bell"],
    videoLink: ["https://youtu.be/_KccikoFlYw?si=U6P8PjZOgoRmitl1"],
    id: "99",
  },
  {
    name: "Hey Girl",
    isPairDance: false,
    level: "Beginner",
    songs: [
      "Come Do A Little Life - Mo Pitney",
      "Better man - Clint Black",
      "Does it make me a cowboy - Daisy Town",
      "Anything for love - James House",
      "Tall tall trees - Alan Jackson",
    ],
    videoLink: [
      "https://www.youtube.com/@killlis",
      "https://youtu.be/KXYh4wOxXEk?si=nUxtapiKSlzzzKu6",
      "https://youtu.be/pam3fPRHbYY?si=H8e-QJemphoxSUxE",
    ],
    id: "100",
  },
  {
    name: "High Cotton",
    isPairDance: false,
    level: "NA",
    songs: ["High Cotton - Alabama"],
    videoLink: ["https://youtu.be/3U4XVci9oaY?si=B8_yyWHzZjAS7Su6"],
    id: "101",
  },
  {
    name: "Hillbilly Strut",
    isPairDance: false,
    level: "Beginner",
    songs: [
      "Walk Softly On This Heart Of Mine - Kentucky Headhunters,",
      "Looking For A Good Time - Lady Antebellum,",
      "Everybody Wants To Go To Heaven - Kenny Chesney,",
    ],
    id: "102",
  },
  {
    name: "Home To Louisiana",
    isPairDance: false,
    level: "Improver",
    songs: ["Home To Louisiana - Ann Tayler"],
    videoLink: ["https://youtu.be/CqaVE4XNWfs?si=DeTiJba1ZBTibhl2"],
    id: "103",
  },
  {
    name: "Homesick Heart",
    isPairDance: false,
    level: "Improver",
    songs: ["Homesick - Kane Brown"],
    videoLink: ["https://youtu.be/kmom4PL3_ak?si=CIk5fUG2lYAORDBx"],
    id: "104",
  },
  {
    name: "Homeward Bound",
    isPairDance: false,
    level: "Improver",
    songs: ["Take Me Home - Tol & Tol"],
    videoLink: [
      "https://youtu.be/rB-UWXQuHdM?si=0l52AF_OuQrDEqDH",
      "https://youtu.be/yCn_8yWZzuY?si=EyK8rFRRK96acl5A",
    ],
    id: "105",
  },
  {
    name: "Horseshoe Shuffle",
    isPairDance: true,
    level: "Beginner",
    songs: [
      "jeder Cha Cha", 
      "Amarillo by Morning - George Strait"
    ],
    videoLink: ["https://youtu.be/BZCjMbUy7aA?si=aW3oDA-6tIXkdDAH"],
    id: "106",
  },
  {
    name: "I'm on My Way",
    isPairDance: false,
    level: "Beginner",
    songs: ["Toora Loora Lay - Celtic Thunder"],
    videoLink: ["https://youtu.be/daqLayXW6Mg?si=BnbcfPV9WUoEKF34"],
    id: "107",
  },
  {
    name: "I Love A Rainy Night",
    isPairDance: false,
    level: "Beginner",
    songs: [
      "I Love A Rainy Night - Eddie Rabbitt,",
      "Honky Tonk History - The Dean Brothers",
    ],
    videoLink: ["https://youtu.be/73XVuNmpBKc?si=QRSkbnd0EQOqzgi0"],
    id: "108",
  },
  {
    name: "I Love This Bar",
    isPairDance: false,
    level: "Improver",
    songs: ["I Love This Bar - Toby Keith"],
    videoLink: ["https://youtu.be/kuVbdjOE_qs?si=z3jOUNt30DBISs-z"],
    id: "109",
  },
  {
    name: "I Never Lie",
    isPairDance: false,
    level: "Improver",
    songs: ["I Never Lie - Zach Top"],
    videoLink: [
      "https://youtu.be/g8lvfIGUJEA?si=kDLdxbirMwPCp9fV",
      "https://youtu.be/nt73vGAQZhs?si=BPV31B4hu2iU5xKf",
    ],
    id: "110",
  },
  {
    name: "Ice Breaker",
    isPairDance: false,
    level: "Beginner",
    songs: [
      "Seminole Wind - John Anderson",
      "Hold Your Horses (Radio Version) - E-Type",
    ],
    aliases: ["Seminole Wind"],
    videoLink: [
      "https://youtu.be/Sp-V1CV_Stw?si=e0j7Nz1FqO-lcOut",
      "https://youtu.be/O9He_z27H48?si=lovSP6RtJ1nkKiKD",
    ],
    id: "111",
  },
  {
    name: "Inspiration",
    isPairDance: false,
    level: "Improver",
    songs: ["Heaven In My Woman's Eyes - Tracy Byrd"],
    videoLink: ["https://youtu.be/ZtzyJ-f719Y?si=S3Nj73peinKuZiTt"],
    id: "112",
  },
  {
    name: "Irish Stew - Whiskey in the jar",
    isPairDance: false,
    level: "Improver",
    songs: [
      "Irish Stew - Sham Rock", 
      "Bells over belfast - The irish rover"
    ],
    videoLink: [
      "https://youtu.be/wjLbYShd3Pc?si=sAx8soQ2yQbUygbU",
      "https://youtu.be/rva6P7HRBII?si=-Q0Oa_ZSYD0kETNM",
      "https://youtu.be/Krh__Vs8bi8?si=kn7WgAprHmMA9xor",
    ],
    id: "113",
  },
  {
    name: "Islands In The Stream",
    isPairDance: false,
    level: "Intermediate",
    songs: [
      "Islands In The Stream - Kenny Rogers & Dolly Parton",
      "Swingin' home for christmas - The tractors",
    ],
    id: "114",
  },
  {
    name: "It must be love",
    isPairDance: false,
    level: "Beginner",
    songs: ["It Must Be Love - Alan Jackson"],
    videoLink: ["https://youtu.be/3U4XVci9oaY?si=B8_yyWHzZjAS7Su6"],
    id: "115",
  },
  {
    name: "Jambalaya",
    isPairDance: false,
    level: "Intermediate",
    songs: [
      "Jambalaya - Led Loader & The Barrels",
      "Long hot summer - Keith Urban",
    ],
    videoLink: [
      "https://youtu.be/5kAi7aqndEg?si=Q-ZFHWo_CZCXR8av",
      "https://youtu.be/RwZwtHlF0Ys?si=GIkULhCLRkKY1IZd",
    ],
    id: "116",
  },
  {
    name: "Joana",
    isPairDance: false,
    level: "Beginner",
    songs: [
      "Come Early Morning - Don Williams",
      "Going nowhere - Daisy Town",
      "Little Bitty - Alan Jackson",
      "Dallas",
      "Chaisin' the neon rainbow - Alan Jackson",
    ],
    videoLink: [
      "https://www.youtube.com/@killlis",
      "https://youtu.be/tKw0iDJ_dQE?si=24NMs4oA7Kn66JAE",
      "https://youtu.be/615vN_J7U5A?si=gMWNgZxAOZN68Xof",
    ],
    id: "117",
  },
  {
    name: "Jolene, Jolene",
    isPairDance: false,
    level: "Intermediate",
    songs: ["Jolene (ft. The Common Linnets) - The BossHoss"],
    videoLink: ["https://youtu.be/RbQBCoox-t4?si=kKP9ELCSMQ9D4sFh"],
    id: "118",
  },
  {
    name: "Just Wright",
    isPairDance: false,
    level: "Beginner",
    songs: ["C'est La Vie - Chely Wright"],
    id: "119",
  },
  {
    name: "Kawliga aka Redneck Girl",
    isPairDance: false,
    level: "Beginner",
    songs: [
      "Redneck Girl - Bellamy Brothers [125 bpm]",
      "Lot Of Leavin' Left To Do - Dierks Bentley [118 bpm]",
      "Kawliga - Hank Williams Jr [ bpm]",
      "Indian Outlaw - Tim McGraw [110 bpm]",
      "No Way Jose - Ray Kennedy [144 bpm]",
    ],
    id: "120",
  },
  {
    name: "Kid Rock Alabama",
    isPairDance: false,
    level: "Improver",
    songs: [
      "All Summer Long - Kid Rock",
      "Walking the country von Keith Urban",
      "Sweet home Alabama - Lynyrd Skynyrd",
    ],
    videoLink: ["https://youtu.be/lR4aupVGcHo?si=Luh7G3nRdMQuiUQ8"],
    id: "121",
  },
  {
    name: "Kiss My Country A**",
    isPairDance: false,
    level: "Intermediate",
    songs: [
      "My Kind Of Music - Ray Scott",
      "Santa Claus is comin' to town by Mariah Carey",
    ],
    videoLink: ["https://youtu.be/h-AvG4ilHCA?si=mZQ9JBuRlCeEVuv6"],
    id: "122",
  },
  {
    name: "Kiss of Death",
    isPairDance: false,
    level: "Improver",
    songs: ["Kiss Of Death - Ernest"],
    videoLink: ["https://youtu.be/l6fh_svO31I?si=OwOcLnqqpPmE-yIS"],
    id: "123",
  },
  {
    name: "Knee Deep",
    isPairDance: false,
    level: "Improver",
    songs: ["Knee Deep - The Zac Brown Band"],
    videoLink: [
      "https://youtu.be/EMSKgf8-0JM?si=iwOG-EtuyjxAfyPK",
      "https://youtu.be/I4K_N_DFyLs?si=VAZ-p_SG3Olptvk-",
    ],
    id: "124",
  },
  {
    name: "Last Christmas",
    isPairDance: false,
    level: "Beginner",
    songs: ["Last Christmas - Cascada"],
    videoLink: ["https://youtu.be/SXhFCgxTe4E?si=jaFHKVc8-YeI1Btt"],
    id: "125",
  },
  {
    name: "Land Of Dreams",
    isPairDance: false,
    level: "Improver",
    songs: ["Land Of Dreams - Rosanne Cash"],
    videoLink: [
      "https://youtu.be/bEtGZXfJOxU?si=qNyJlOe0NZNwtXwm",
      "https://youtu.be/U82abnD35yc?si=Le6sY7ZsGrGFP396",
    ],
    id: "126",
  },
  {
    name: "Lay Low",
    isPairDance: false,
    level: "Intermediate",
    songs: [
      "Lay Low - Josh Turner",
      "'Til my last day - Justin Moore",
      "Christmas - Chris Young",
    ],
    videoLink: ["https://youtu.be/UzspKjYeeh4?si=pdwBw0ASSmc_Wx6T"],
    id: "127",
  },
  {
    name: "Lightning Polka",
    isPairDance: false,
    level: "Intermediate",
    songs: [
      "Sin Wagon - Dixie Chicks,",
      "I Want You To Want Me - Jim Witter,",
      "Little Bird - Sherrié Austin,",
      "Ghost Riders In The Sky - Ned Sublette",
    ],
    videoLink: [
      "https://youtu.be/ra8ORwkxTT8?si=Hp6_jeGXChDQCwvS",
      "https://youtu.be/MsrQ7-5jwnk?si=qn9VjE3u41MRNuWz",
    ],
    id: "128",
  },
  {
    name: "Lindi Shuffle",
    isPairDance: false,
    level: "Beginner",
    songs: [
      "Billy Bill - Twister Alley (Original -Choreo)",
      "I Can't Wait For Payday - Dave Sheriff",
      "I Need More Of You (122 bpm) - Bellamy Brothers",
      "Love U Too Much - Brady Seals",
      "Restless - Shelby Lynne",
      "Shooter (164 bpm) - Rednex",
    ],
    videoLink: [
      "https://youtu.be/4wav3Dr16t4?si=ulJeEjb-UPioqqEw",
      "https://youtu.be/Q9E9D9v9NHs?si=8V-TQipYmFyaLKHW",
      "https://youtu.be/A5U-ANOjKYk?si=kvEMmkKrwGbfYpPB",
    ],
    id: "129",
  },
  {
    name: "Little Rhumba",
    isPairDance: false,
    level: "Beginner",
    songs: [
      "Like She's Not Yours - The Bellamy Brothers",
      "Things change by Dwight Yaokam",
    ],
    videoLink: [
      "https://youtu.be/ZAJwIXXhKxw?si=NSY2HeN4JJhq4HF2",
      "https://youtu.be/yy_MF1bARN8?si=_YvBbVlWELLEwEpt",
    ],
    id: "130",
  },
  {
    name: "Lonely Drum",
    isPairDance: false,
    level: "Intermediate",
    songs: [
      "Lonely Drum - Aaron Goodvin", 
      "Tulsa Time", 
      "Roots - Zac Brown"
    ],
    videoLink: [
      "https://youtu.be/RPfROw0mTTg?si=ThSGYHwwAh1nJ5eM",
      "https://youtu.be/CbwRomj2bXw?si=DqFzdK-HNRcdnEnk",
    ],
    id: "131",
  },
  {
    name: "Long Black Train",
    isPairDance: false,
    level: "Beginner",
    songs: ["Long Black Train - Josh Turner"],
    videoLink: [
      "https://youtu.be/NYCdvZ8E0iA?si=Y-CTs8We2HnRLecY",
      "https://youtu.be/gurCtoLCh5o?si=QtnZH7Qo8C23TkfY",
    ],
    id: "132",
  },
  /*{
    name: "Lorrie's Dance",
    isPairDance: true,
    level: "NA",
    songs: [],
    videoLink: [
      "https://youtu.be/EaSn-UCEEO4?si=HCJ8lXXG0aUTnILS",
      "https://youtu.be/NlIlqvurpAE?si=_FS9ST6achAaocNS",
    ],
    id: "133",
  },*/
  {
    name: "Love Potion 666",
    isPairDance: false,
    level: "Beginner",
    songs: ["Love Potion 666 - DJTEXX"],
    id: "134",
  },
  {
    name: "Lucky Lips",
    isPairDance: false,
    level: "Beginner",
    songs: ["Lucky Lips - The Conquerors"],
    videoLink: [
      "https://youtu.be/gU1PQDm3aXQ?si=8qEyW2rXCf0xQnLl",
      "https://youtu.be/qM64yxQDDyY?si=4J4AF1N9rhFScyNP",
    ],
    id: "135",
  },
  {
    name: "Made In Mexico",
    isPairDance: false,
    level: "Beginner",
    songs: ["Made In Mexico - Neon Union"],
    videoLink: ["https://youtu.be/gbZdQ1hVols?si=lxlWUt7bEjMFNVTw"],
    id: "136",
  },
  {
    name: "Make Some New Love",
    isPairDance: false,
    level: "Beginner",
    songs: ["Hey Old Lover - Kip Moore"],
    videoLink: [
      "https://youtu.be/2vnOYszuHBU?si=U_Nvc2-qFoW9s5kx",
      "https://youtu.be/LfKtXlEEVBs?si=B-Gq8c81LMyibP6u",
    ],
    id: "137",
  },
  {
    name: "Mamma Maria",
    isPairDance: false,
    level: "Beginner",
    songs: [
      "Mamma Maria - Ricchi & Poveri,",
      "Mamma Maria - The Countdown,",
      "High Lonesome Sound - Vince Gill,",
      "Poker Face - Lady GaGa,",
      "Mamma Mia - ABBA,",
      "Natural Disaster - The Zac Brown Band",
    ],
    videoLink: [
      "https://youtu.be/3rYumvTOdFY?si=W_wEnyw8fAGq5qNa",
      "https://youtu.be/bptlrrYarMU?si=KyL3iPyFpVHydsTf",
    ],
    id: "138",
  },
  {
    name: "Margaritaville",
    isPairDance: false,
    level: "Beginner",
    songs: [
      "Margaritaville - Alan Jackson & Jimmy Buffett",
    ],
    videoLink: ["https://youtu.be/MBj8URs7Pgc?si=KWnMdeit_kG16GnW"],
    id: "139",
  },
  {
    name: "Memory Lanes",
    isPairDance: true,
    level: "Intermediate",
    songs: ["Memory Lane - Old Dominion"],
    videoLink: ["https://youtu.be/tgcnyjGo8Zw?si=x7grb8j8jBGtrYnt"],
    id: "140",
  },
  {
    name: "Messed Up In Memphis",
    isPairDance: false,
    level: "Intermediate",
    songs: ["Messed Up In Memphis - Darryl Worley"],
    videoLink: [
      "https://youtu.be/9YRTaeeR8tk?si=D0YzO7fvXU9kNMcR",
      "https://youtu.be/0VDd0klw3Es?si=OvWBzFnPX-ZYYy9r",
    ],
    id: "141",
  },
  {
    name: "Missing",
    isPairDance: false,
    level: "Improver",
    songs: ["Missing - William Michael Morgan"],
    videoLink: [
      "https://youtu.be/tRUvdht3hTk?si=8sLGz-grAlMjH4Ue",
      "https://youtu.be/p2wdMIwxCT0?si=rjaynJQ2bWSVXFHh",
    ],
    id: "142",
  },
  {
    name: "My Maria",
    isPairDance: false,
    level: "Improver",
    songs: [
      "Un Momento Alla - Rick Trevino", 
      "My Maria - Brooks & Dunn"
    ],
    videoLink: [
      "https://youtu.be/RRedbW4qFOg?si=BMgJbfwefucapAGP",
      "https://youtu.be/BDcmAxzAs-s?si=MvlJnG5GkB7-IJT7",
    ],
    id: "143",
  },
  {
    name: "Niemals",
    isPairDance: false,
    level: "Beginner",
    songs: ["„No No Never (Niemals)“ - Jill Fisher"],
    videoLink: ["https://youtu.be/w73IKVDlBzU?si=e7_OBmrPK8mfrjtO"],
    stepsheetLink:
      "https://www.countrybears-linedancer.com/taenze/no-no-never-niemals/",
    id: "144",
  },
  {
    name: "No Body",
    isPairDance: false,
    level: "Intermediate",
    songs: [
      "No Body - Blake Shelton"
    ],
    videoLink: ["https://youtu.be/SC3xAzGu_TM?si=dovbV9ieNQX3nMpu"],
    id: "145",
  },
  {
    name: "Not Fair",
    isPairDance: false,
    level: "Beginner",
    songs: [
      "Not Fair - Lily Allen",
      "Black pearl aus Pirates of the Carribean",
    ],
    videoLink: ["https://youtu.be/knaF5-7QHcY?si=D_qxVHjWGYMwX5j9"],
    id: "146",
  }, 
  {
    name: "Nothing But You",
    isPairDance: false,
    level: "Intermediate",
    songs: ["Nothing but You - Leaving Austin"],
    videoLink: [
      "https://youtu.be/aFdKyX4Kx_s?si=BiB5hhDxcBBjnx1S",
      "https://youtu.be/J5Bl2PZyRuQ?si=rggMLcRmW1b_hJ8E",
    ],
    id: "147",
  },
  {
    name: "On My Knees",
    isPairDance: true,
    level: "NA",
    songs: [
      "On My Knees - The Red Clay Strays",
    ],
    videoLink: [
      "https://youtu.be/uGI5tQnY6s4?si=dR2UiVoIotKPoOTy",
      "https://youtu.be/setsTAEAO_o?si=0ojxYx6sBEedo1ut",
    ],
    id: "148",
  },
  {
    name: "Open Heart Cowboy",
    isPairDance: false,
    level: "Improver",
    songs: ["Little Yellow Blanket - Dean Brody"],
    videoLink: [
      "https://youtu.be/zwy08VLHdBk?si=VQvbunlb4VmreT0o",
      "https://youtu.be/y91ND8S4GLo?si=vDlcDIpVpi2QNFmr",
    ],
    id: "149",
  },
  {
    name: "Peaceful Easy Feeling",
    isPairDance: false,
    level: "NA",
    songs: ["Peaceful Easy Feeling - The Eagles"],
    id: "150",
  },
  {
    name: "People are crazy",
    isPairDance: false,
    level: "Improver",
    songs: ["People Are Crazy - Billy Currington"],
    videoLink: [
      "https://youtu.be/tqp6Ymm9IRo?si=-WQxrhyo3utXn0rU",
      "https://youtu.be/Bd42gaBVOZE?si=SU_e33ui6qQmnETZ",
    ],
    id: "151",
  },
  {
    name: "People are good",
    isPairDance: false,
    level: "Beginner",
    songs: ["Most People Are Good - Luke Bryan"],
    videoLink: ["https://youtu.be/4rkgMEXAnpM?si=g_xs3Nvw8xgkBz28"],
    id: "152",
  },
  {
    name: "Picnic Polka",
    isPairDance: false,
    level: "Beginner",
    songs: ["I Want To Be A Cowboy's Sweetheart - LeAnn Rimes"],
    videoLink: [
      "https://youtu.be/dZAxmL8CPAo?si=yM_glO-6GuIv_3F1",
      "https://youtu.be/pXDv77GhA6c?si=iZRUzBNKqCoxkqBA",
    ],
    id: "153",
  },
  {
    name: "Pina Co-Cha-Cha",
    isPairDance: false,
    level: "Improver",
    songs: [
      "Two Pina Coladas - Garth Brooks",
      "Just Like A Rodeo - Roger Brown & Swing City",
      "Are You In It For Love - Ricky Martin",
    ],
    id: "154",
  },
  {
    name: "Pizziricco",
    isPairDance: false,
    level: "Improver",
    songs: ["Pizziricco - Mavericks"],
    videoLink: ["https://youtu.be/znFKcIoc-yU?si=Qp-P8LZoqtdtu4BZ"],
    id: "155",
  },
  {
    name: "Playboys",
    isPairDance: false,
    level: "Improver",
    songs: [
      "Playboys - Midland", 
      "Lit this year - Florida Georgia Line"
    ],
    videoLink: ["https://youtu.be/cqhF4rP-7LY?si=88ohetF3mDtTnVPx"],
    id: "156",
  },
  {
    name: "Quarter After One",
    isPairDance: false,
    level: "Intermediate",
    songs: ["Need You Now - Lady Antebellum"],
    videoLink: [
      "https://youtu.be/KNoXQZKLSoA?si=lRH1EUX_yPikgP15",
      "https://youtu.be/jrPGJzSjn1o?si=1TpFqZNsHSCkayh2",
    ],
    id: "157",
  },
  {
    name: "Ready For It",
    isPairDance: false,
    level: "Improver",
    songs: [
      "This Is It - Oh The Larceny", 
      "Honky-Tonk - Josiah Siska"
    ],
    videoLink: ["https://youtu.be/CZD9a9LXdQc?si=Rjkp9SohZJjKc5e7"],
    id: "158",
  },
  {
    name: "Red Hot Salsa",
    isPairDance: false,
    level: "NA",
    songs: ["Red Hot Salsa - Dave Sheriff"],
    videoLink: [
      "https://youtu.be/pj0EQ_XSkmI?si=xOH2voZMAXFYJDGJ",
      "https://youtu.be/0zOdZFMBCM4?si=Crwwp2hFJshGnqJL",
    ],
    id: "159",
  },
  {
    name: "Red Solo Cup",
    isPairDance: false,
    level: "Intermediate",
    songs: ["Red Solo Cup - Toby Keith"],
    videoLink: ["https://youtu.be/cpXlSm2x0Gk?si=zhU00BzXt4PjSwZI"],
    id: "160",
  },
  {
    name: "Rhyme Or Reason",
    isPairDance: false,
    level: "Improver",
    songs: [
      "It Happens - Sugarland", 
      "Here comes Santa Claus - Elvis Presley"
    ],
    videoLink: [
      "https://youtu.be/0HjroP-wuiI?si=5txHJaTKDmmZGpyB",
      "https://youtu.be/rva6P7HRBII?si=-Q0Oa_ZSYD0kETNM",
    ],
    id: "161",
  },
  {
    name: "Roots",
    isPairDance: false,
    level: "Intermediate",
    songs: ["Roots - Zac Brown Band"],
    videoLink: [
      "https://youtu.be/6VGHYHR_f4M?si=SiY04kgttGodZ6Qp",
      "https://youtu.be/pkAraEV2Seg?si=Aag5h2STE4_PcN0C",
    ],
    id: "162",
  },
  {
    name: "Rose-A-Lee aka Heel And Toe",
    isPairDance: false,
    level: "Improver",
    songs: ["Rose-A-Lee - Smokie"],
    videoLink: [
      "https://youtu.be/wyyIjrWE0LI?si=v0oyqY4BoXyrsCTD",
      "https://youtu.be/vMIt-LBT5zg?si=B2oxIU53gUCO0c5H",
    ],
    id: "163",
  },
  {
    name: "Rosegarden",
    isPairDance: false,
    level: "Intermediate",
    songs: [
      "Rose Garden - Scooter Lee oder Lynn Anderson",
      "Merry christmas - Ed Sheeran & Elton John"
    ],
    videoLink: [
      "https://youtu.be/e4Bvwjo-OMk?si=1lvl3gPSl4JGVKdB",
      "https://youtu.be/Qidt26HkhWM?si=icrkAw6cwtp1VUuD",
    ],
    id: "164",
  },
  {
    name: "Sam's Ghost Town",
    isPairDance: false,
    level: "Beginner",
    songs: ["Ghost Town - Sam Outlaw"],
    videoLink: [
      "https://youtu.be/7Zmd9IKvXmU?si=a-r_RZYbhjvxUt8e",
      "https://youtu.be/TkHIw4hl_kc?si=Jc6zQdho_eaEzFlx",
    ],
    id: "165",
  },
  {
    name: "Shadow",
    isPairDance: true,
    level: "Intermediate",
    songs: [
      "Shadow In The Night - Scooter Lee",
      "Write this down - George Strait",
      "Suspicious minds - Fankie Ballard",
      "Mexican Flower - Larissia Murphy",
      "Trail of Tears - Tanya Tucker",
      "My next broken heart - Brooks & Dunn",
    ],
    videoLink: ["https://youtu.be/_Y1lMkcwV3E?si=x6PDZBE_epaaPZPA"],
    id: "166",
  },
  {
    name: "Shakin Mix",
    isPairDance: false,
    level: "Beginner",
    songs: ["Hitmix - Shakin' Stevens"],
    videoLink: ["https://youtu.be/Mry9Xg60Q1o?si=RFGutWWVff8bA0V3"],
    id: "167",
  },
  {
    name: "Sheltered",
    isPairDance: false,
    level: "Improver",
    songs: ["Sheltered - The Castellows"],
    videoLink: ["https://youtu.be/k0_uVE6Rf8o?si=YziypFG1FSy8hAPU"],
    id: "168",
  },
  {
    name: "Silverado Cowboy",
    isPairDance: false,
    level: "Improver",
    songs: ["Silverado Bench Seat - Granger Smith"],
    videoLink: ["https://youtu.be/tnvOHpVslB4?si=4H8_6NVl6lDaQkhi"],
    id: "169",
  },
  {
    name: "Silvercoins",
    isPairDance: false,
    level: "Improver",
    songs: [
      "I Recall a Gypsy Woman - Ricus Nel",
      "Christmas in the country - Thomas Rhett",
    ],
    videoLink: ["https://youtu.be/L4QwspE2eKc?si=KnjRi8NDIwCDQG-8"],
    id: "170",
  },
  {
    name: "Silver Lining",
    isPairDance: false,
    level: "Improver",
    songs: ["Silver Lining - Kacey Musgraves"],
    videoLink: [
      "https://youtu.be/yq-mrsw3fPA?si=fN818NIVazM77ea2",
      "https://youtu.be/cvXsz1ZNRt4?si=nGtKX4cJiHJ1JNVO",
    ],
    id: "171",
  },
  {
    name: "Snap",
    isPairDance: false,
    level: "Beginner",
    songs: [
      "Anthem - Brett Kissel",
      "No Excuses - Meghan Trainor",
      "You broke up with me - Walker Hayes",
    ],
    videoLink: ["https://youtu.be/kG_yRiwwH6Q?si=kZFjriYFAUxA92ca"],
    id: "172",
  },
  {
    name: "Some beach",
    isPairDance: false,
    level: "Intermediate",
    songs: [
      "Some Beach - Blake Shelton,",
      "I Want To Be The First One - Darryl & Don Ellis,",
      "Me, Marie - Billy Yates",
      "Last Christmas - Wham",
    ],
    videoLink: [
      "https://youtu.be/D2VeWstivYw?si=-DsWqV-H0V0xU22d",
      "https://youtu.be/8tUq4tCV1gI?si=XI729FaYzj6eML5z",
    ],
    id: "173",
  },
  {
    name: "Something In The Water",
    isPairDance: false,
    level: "Beginner",
    songs: ["Something In The Water - Brooke Fraser"],
    videoLink: ["https://youtu.be/zDLw8w6pbsw?si=-oaeTozyAZO7ytJN"],
    id: "174",
  },
  {
    name: "Speak to the sky",
    isPairDance: false,
    level: "Improver",
    songs: ["Speak To The Sky - Brendon Walmsley"],
    videoLink: ["https://youtu.be/rva6P7HRBII?si=-Q0Oa_ZSYD0kETNM"],
    id: "175",
  },
  {
    name: "Stand By Me",
    isPairDance: false,
    level: "Beginner",
    songs: ["Stand by Me (Ivan Jack Remix) - 45 Stars"],
    videoLink: ["https://youtu.be/bol2KAE8IfI?si=_rU41ruy2ijdn0cC"],
    id: "176",
  },
  {
    name: "Sticks and Stones",
    isPairDance: false,
    level: "Beginner",
    songs: [
      "Sticks And Stones - Tracy Lawrence",
      "Part of me, part of you - Glenn Frey",
      "Write this down - George Strait",
    ],
    videoLink: [
      "https://youtu.be/IwYlKXN0NTI?si=lEyDZ4WDPfwSKLP4",
      "https://youtu.be/hPB2pb8fcbg?si=rRk1-oyplTVk0wJs",
    ],
    id: "177",
  },
  {
    name: "Stitch It Up",
    isPairDance: false,
    level: "Improver",
    songs: ["Elvis Medley - Dean Brothers"],
    id: "178",
  },
  {
    name: "Storm and Stone",
    isPairDance: false,
    level: "Improver",
    songs: ["Run - Storm & Stone"],
    videoLink: [
      "https://youtu.be/1OxfWEgemkw?si=GyX-uWDU9JRe0SnR",
      "https://youtu.be/1_sulPFU1Pg?si=tWjpsCUqSO4OpUB-",
    ],
    id: "179",
  },
  {
    name: "Stray Cat Strut aka Starter Step",
    isPairDance: false,
    level: "Beginner",
    songs: [
      "Designated Drinker - Alan Jackson & George Strait",
      "I'm from the country - Tracy Byrd",
      "Walk Softly Heart of Mine - Kentucky Headhunters",
      "Adalida - George Strait",
    ],videoLink: [
      "https://youtu.be/ggte6B6XmmA?si=-oqhHFOx84zynEDv",
      "https://youtu.be/4GtkNt8SAEA?si=Kye0rhaakvnToUcg",
    ],
    id: "180",
  },
  {
    name: "Sugar & Pai",
    isPairDance: false,
    level: "Improver",
    songs: ["Sugar And Pie - Boots Band"],
    videoLink: ["https://youtu.be/ggFb1FfLJZg?si=uBMRx9FqwcLHAJAm"],
    id: "181",
  },
  {
    name: "Suit And Tie",
    isPairDance: false,
    level: "Intermediate",
    songs: ["Suit and Tie (Sixteen Tons ) - Cooper Alan"],
    videoLink: [
      "https://youtu.be/gWwSZsnvar4",
      "https://youtu.be/51geN8QWbpw?si=bQ6UuVMt2CaFGsvD",
    ],
    id: "182",
  },
  {
    name: "Summer Fly",
    isPairDance: false,
    level: "Improver",
    songs: [
      "Summer Fly - Hayley Westenra", 
      "Much to young - Garth Brooks"
    ],
    videoLink: [
      "https://youtu.be/bs7lK-VtwdI?si=UVIJ_9vCMPkIYbw_",
      "https://youtu.be/5zd5jGLfBsw?si=wDT3nnrMSFyqv-Ts",
      "https://youtu.be/LELP-8flO80?si=Rb4aGj1DFSmzRsg_",
    ],
    id: "183",
  },
  {
    name: "Sweet, sweet smile",
    isPairDance: false,
    level: "Improver",
    songs: [
      "Sweet Sweet Smile - Sharon B,",
      "Sweet Sweet Smile - Carpenters",
      "Turn it on, turn it up - Dwight Yoakam",
      "Catfish John - Nitty Gritty Dirt Band & Alison Krauss",
    ],videoLink: [
      "https://youtu.be/U6Y1byCim40?si=JhgHCjz1mafbWwgu",
      "https://youtu.be/RwZwtHlF0Ys?si=aSpAR4cPclxvHgrN",
    ],
    id: "184",
  },
  {
    name: "Swingin'",
    isPairDance: false,
    level: "NA",
    songs: [],
    id: "185",
  },
  {
    name: "Tag On",
    isPairDance: false,
    level: "Intermediate",
    songs: [
      "Too Strong To Break - Beccy Cole",
      "Red dirt road - Brooks & Dunn",
      "Jingle my bells - The tractors",
      "Take it easy",
    ],
    videoLink: [
      "https://youtu.be/ZQaqrX8CDkM?si=DlWj0tLpKopzcttU",
      "https://youtu.be/55CL-WN8HOY?si=QFGokEup1fcAFL5A",
    ],
    id: "186",
  },

  /*{
    name: "Tennessee Waltz",
    isPairDance: false,
    level: "Improver",
    songs: ["The Tennessee Waltz - Patti Page"],
    aliases: ["lernen"],
    id: "188",
  },*/
  {
    name: "Tennessee Waltz for Two",
    isPairDance: true,
    level: "Improver",
    songs: ["The Tennessee Waltz - Patti Page"],
    aliases: ["lernen"],
    id: "189",
  },
  {
    name: "Tequila Sunrise",
    isPairDance: false,
    level: "Beginner",
    songs: ["Tequila Sunrise - Pinchitos Caliente"],
    videoLink: ["https://youtu.be/tAbT97_fHy0?si=Z_jHN-0tI1COFw35"],
    id: "190",
  },
  {
    name: "Texas Girls",
    isPairDance: false,
    level: "Improver",
    songs: ["Texas - Blake Shelton"],
    videoLink: ["https://youtu.be/sCt4phw3tDQ?si=e5uZDlNU_feDgbWe"],
    id: "191",
  },
  {
    name: "Texas Hold 'Em",
    isPairDance: false,
    level: "Improver",
    songs: [
      "Texas hold 'em - Beyoncé", 
      "Fiddle in the Band - Kane Brown",
    ],
    videoLink: ["https://youtu.be/OArFg3Uprds?si=v1FM8DOEYzuIxB8M"],
    id: "192",
  },
  {
    name: "Thank God for the radio",
    isPairDance: false,
    level: "Beginner",
    songs: ["Thank God for the Radio - Kendalls"],
    videoLink: ["https://youtu.be/mWA7g9RU928?si=5or-jVgAQBjQkw2X"],
    id: "193",
  },
  {
    name: "Thank You",
    isPairDance: false,
    level: "Beginner",
    songs: ["Thank You - Gary Perkins & The Breeze"],
    videoLink: ["https://youtu.be/Q5fpZSPwJm4?si=MZpu4RDjwZskqNUc"],
    id: "194",
  },
  {
    name: "The Card You Gamble",
    isPairDance: false,
    level: "Intermediate",
    songs: [
      "The Card You Gamble (Main Theme From Monarch) - Monarch Cast & Caitlyn Smith",
    ],
    videoLink: [
      "https://youtu.be/uZ5HRWHdly8?si=N1DQLH3jC_R225Fi",
      "https://youtu.be/LukDm1yE49M?si=0gVHo1ulUp2FqVRh",
    ],
    id: "195",
  },
  {
    name: "The Gambler",
    isPairDance: false,
    level: "Improver",
    songs: ["The Gambler (Robert Wilsdon Remix) - Kenny Rogers"],
    videoLink: ["https://youtu.be/wxanIouynOI?si=FOsHH6Q1e7vhuqVT"],
    id: "196",
  },
  {
    name: "The Last Living Cowboy",
    isPairDance: false,
    level: "Improver",
    songs: ["The Last Living Cowboy by Toby Keith"],
    videoLink: [
      "https://youtu.be/G_ElxFbRYOQ?si=pINAQJ8mJYTOBvYB",
      "https://youtu.be/tfnm2mJAQtQ?si=VDJIPRnqZLHAwfTT",
    ],
    id: "197",
  },
  {
    name: "The Last Shanty",
    isPairDance: false,
    level: "Beginner",
    songs: ["The Last Shanty - Patrick Feeney"],
    videoLink: ["https://youtu.be/tuBJTKLPqtk?si=LfrG4lRp6f5Ao1zN"],
    id: "198",
  },
  {
    name: "The Little Farmer",
    isPairDance: false,
    level: "Beginner",
    songs: ["The Farmer - Robert Mizzel"],
    videoLink: ["https://youtu.be/p2929OG47bk?si=zFaR9ukd_TyTt5NE"],
    id: "199",
  },
  {
    name: "The Morning After",
    isPairDance: false,
    level: "Beginner",
    songs: ["The Morning After - Nathan Carter"],
    videoLink: ["https://youtu.be/cikJp1bHW6U?si=i13kCc45JEW2Nb9r"],
    id: "200",
  },
  {
    name: "The Trail",
    isPairDance: false,
    level: "Intermediate",
    songs: ["Trail Of Tears - Billy Ray Cyrus", 
    ],
    videoLink: ["https://youtu.be/rxBfZ59gqmU?si=U604lSSPr-MAj-to"],
    id: "201",
  },
  {
    name: "The Wellerman",
    isPairDance: false,
    level: "Improver",
    songs: [
      "The Wellerman (Sea Shanty) - From TikTok to Epic Remix - The Kiffness",
    ],
    id: "202",
  },
  {
    name: "The whole world",
    isPairDance: false,
    level: "Intermediate",
    songs: [
      "He`s got the whole world - Brendon Walmsley (feat. Steve Grace & Colin Buchanan)",
    ],
    videoLink: ["https://youtu.be/SwAJHBVFYwA?si=OqrlgJtjNosR8vqr"],
    id: "203",
  },
 /* {
    name: "This Barn",
    isPairDance: false,
    level: "Improver",
    songs: ["This Bar - Morgan Wallen"],
    videoLink: ["https://youtu.be/jC_dqLF7UGs?si=GUf1zJXHYe1RjE5D"],
    id: "204",
  },*/
  {
    name: "This Is Me missing you",
    isPairDance: false,
    level: "Improver",
    songs: ["This Is Me Missing You - James House"],
    videoLink: [
      "https://youtu.be/hQuGY8OnSmQ?si=qfquUzuNTBPlTbjA",
      "https://youtu.be/AB4G8oppHI8?si=TbXAOYFmQJK_4j9_",
    ],
    id: "205",
  },
  {
    name: "'Til You Can't",
    isPairDance: false,
    level: "Intermediate",
    songs: ["'Til You Can't - Cody Johnson"],
    id: "206",
  },
  {
    name: "Toes",
    isPairDance: false,
    level: "Beginner",
    songs: ["Toes - Zac Brown Band"],
    videoLink: ["https://youtu.be/ZSS1SkocCPE?si=HG03t1pgE26RpNu0"],
    id: "207",
  },
  {
    name: "Tomorrow never comes",
    isPairDance: false,
    level: "Intermediate",
    songs: ["Tomorrow never comes - Zac Brown Band"],
    id: "208",
  },
  {
    name: "Touch Of Heaven",
    isPairDance: false,
    level: "NA",
    songs: ["Heaven Cried - Tony Ramey"],
    videoLink: ["https://youtu.be/SMSIGzsgoZ0?si=IN4BzDs2lVVPNHOQ"],
    id: "209",
  },
  {
    name: "Tush Push",
    isPairDance: false,
    level: "Intermediate",
    songs: [
      "Chattahoochee - Alan Jackson,",
      "Ain't going down - Garth Brooks",
      "Born To Boogie - Hank Williams Jr",
      "Drivin' My Life Away - Rhett Akins",
      "I like it, I love it - Tim McGraw",
      "Fall in love - Kenny Chesney",
      "God blessed Texas - Little Texas",
      "Take it easy",
      "The night I called the old man out - Garth Brooks",
    ],
    videoLink: ["https://youtu.be/T4TNgig7yRQ?si=dxSFvofMSzgDpGrU"],
    id: "210",
  },
  {
    name: "Twenty Two",
    isPairDance: false,
    level: "Beginner",
    songs: ["You look like you love me - Ella Langle y & Riley Green"],
    videoLink: ["https://youtu.be/luQb4lPTvMs?si=HlYphIQ4VigG7Dr9"],
    id: "211",
  },
  {
    name: "Unlove Me",
    isPairDance: false,
    level: "Beginner",
    songs: ["Unlove Me - Julie Roberts"],
    videoLink: ["https://youtu.be/fl35RhTa-IE?si=H03_KMG4xqcCKAwA"],
    id: "212",
  },
  {
    name: "Vertical Expressions",
    isPairDance: false,
    level: "Intermediate",
    songs: ["Vertical Expression (Of Horizontal Desire) - Bellamy Brothers"],
    videoLink: ["https://youtu.be/rGfA8t8JL3Q?si=Ol4O5SAWesp8lKBv"],
    id: "213",
  },
  {
    name: "Wagon Wheel Rock",
    isPairDance: false,
    level: "Improver",
    songs: ["Wagon Wheel - Nathan Carter"],
    videoLink: [
      "https://youtu.be/ExnB1nYoNho?si=5xIF6uoj7rScCudS",
      "https://youtu.be/qfNxUi040HU?si=Wms4En6fsHvpPbEM",
    ],
    id: "214",
  },
  {
    name: "Walking Away",
    isPairDance: false,
    level: "Improver",
    songs: ["As She's Walking Away - The Zac Brown Band with Alan Jackson"],
    videoLink: [
      "https://youtu.be/AUcsqgTw2oI?si=M1KbTBZFwrFsIf9D",
      "https://youtu.be/bTRrjoF3JZA?si=jL5PWTETsf299sXt",
    ],
    id: "215",
  },
  {
    name: "Waltz Across Texas",
    isPairDance: false,
    level: "Beginner",
    songs: [
      "Waltz Across Texas - Dean Brothers",
      "oder jeder andere langsame bis mittelschnelle Walzer",
    ],
    videoLink: [
      "https://youtu.be/jKGkZ-TFOKQ?si=_6YrL-odZdqibyUp",
      "https://youtu.be/vvKVFz6-dO8?si=3mJc0xWbh6bR83VN",
    ],
    id: "216",
  },
  {
    name: "Wanderer",
    isPairDance: false,
    level: "Beginner",
    songs: [
      "The Wanderer - Eddie Rabbitt",
      "I Wanna Dance With You - Eddie Rabbitt",
      "I Love A Rainy Night - Eddie Rabbitt",
      "Leaving Louisiana - Oak Ridge Boys",
      "The Wanderer -115 bpm - Dion and The Belmonts",
      "The Majestic -137 bpm - Dion and The Belmonts",
    ],
    videoLink: [
      "https://youtu.be/-SJHLqXDPeA?si=TwuVuQEVAq8vrmZx",
      "https://youtu.be/sauR5fzAsyQ?si=skjwEvV-eAML-bkz",
    ],
    id: "217",
  },
  {
    name: "Watermelon Crawl",
    isPairDance: false,
    level: "Intermediate",
    songs: [
      "Watermelon Crawl - Tracy Byrd",
      "Shut Up And Kiss Me - Mary Chapin Carpenter",
      "Eugene You Genius - Bryan White",
    ],
    id: "218",
  },
  {
    name: "Wave On Wave",
    isPairDance: false,
    level: "Improver",
    songs: ["Wave On Wave - Pat Green"],
    videoLink: [
      "https://youtu.be/Kg-DKMqs7QM?si=p4pdCjPh-K69V4DQ",
      "https://youtu.be/_zq6fwfHpIk?si=WpyCO5JxkPRZp8mp",
    ],
    id: "219",
  },
  {
    name: "Whiskey's Gone",
    isPairDance: false,
    level: "NA",
    songs: [
      "Whiskey's Gone - The Zac Brown Band",
        ],
    videoLink: [
      "https://youtu.be/s7zRVLTUd_A?si=coD0z3lgM51VTktm",
      "https://youtu.be/8Ut3Ewz_d4k?si=MgwKyQuQOB_Tk487",
    ],
    id: "220",
  },
  {
    name: "When you're drunk",
    isPairDance: false,
    level: "Intermediate",
    songs: ["I Hate You When You're Drunk - Olly Murs"],
    
    id: "221",
  },
  {
    name: "White Rose",
    isPairDance: false,
    level: "Improver",
    songs: [
      "White Rose - Toby Keith",
      "Shut up and drive - Chely Wright",
      "What if - Daisy Town",
    ],
    videoLink: [
      "https://www.youtube.com/@killlis",
      "https://youtu.be/5-vlo2eAheQ?si=7p5XtoxvCSA8Udi0",
      "https://youtu.be/wfefuj_OeMw?si=lr2IxUCEUrNX1keI",
      "https://youtu.be/9q9L40ZiNrc?si=wLLCR4wkuVmdLESa",
    ],
    id: "222",
  },
  {
    name: "Wishful Thinking",
    isPairDance: false,
    level: "Improver",
    songs: [
      "Breathe - Faith Hill",
      "Is that a tear - Tracey Lawrence",
      "Linda Lou - Tractors" ,
      "Let's make love - Faith Hill",
      "Route 66 - J.Mayer" ,
      "Lovin' All Night - Rodney Crowell",
      "Nobody knows - Kevin Sharp" ,
      "Somedays you gotta dance - Dixie Chicks",
      "Shortenin' Bread - Tractors" ,
      "Sounds like something I do - Drake Milligan",
      "Lay down Sally - Eric Clapton", 
      "The Bug - Mary C. Carpenter",
      "Little Liza Jane", 
      "Queen of hearts - Juice Newton (sehr langsam)",
      "Another Rock'n Roll Christmas - Garry Glitter",
    ],
    videoLink: ["https://youtu.be/vNVZRpHOwSI?si=_Jt8QBMd6F5k42fO"],
    id: "223",
  },
  {
    name: "Wrong Direction",
    isPairDance: false,
    level: "Improver",
    songs: ["Wrong Direction - Ilse DeLange & Michael Schulte"],
    videoLink: ["https://youtu.be/_p3vBcM9rz4?si=GAyiy5EDE98BRa4n"],
    id: "224",
  },
  {
    name: "You're So Naughty - Kiss My Body",
    isPairDance: false,
    level: "Improver",
    songs: ["He Drinks Tequila - Sammy Kershaw & Lorrie Morgan"],
    videoLink: ["https://youtu.be/J2bGzuPb2X0?si=pR_zY5YsyoAD2XHQ"],
    id: "225",
  },
];