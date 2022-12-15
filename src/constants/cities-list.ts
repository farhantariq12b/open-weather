import { Option } from "../interfaces";

const cities: Option[] = [
  {
    value: 2759794,
    label: "Amsterdam"
  },
  {
    value: 2747371,
    label: "'s Gravenmoer"
  },
  {
    value: 2747364,
    label: "'s-Gravenzande"
  },
  {
    value: 2747357,
    label: "'s-Heerenberg"
  },
  {
    value: 2747351,
    label: "'s-Hertogenbosch"
  },
  {
    value: 2746354,
    label: "'t Hofke"
  },
  {
    value: 2746031,
    label: "'t Zand"
  },
  {
    value: 2760144,
    label: "Aalburg"
  },
  {
    value: 2760134,
    label: "Aalsmeer"
  },
  {
    value: 2760123,
    label: "Aalten"
  },
  {
    value: 6698718,
    label: "Aarle-Rixtel"
  },
  {
    value: 2760055,
    label: "Abtswoude"
  },
  {
    value: 2759961,
    label: "Aduard"
  },
  {
    value: 2759922,
    label: "Akkrum"
  },
  {
    value: 2759915,
    label: "Alblasserdam"
  },
  {
    value: 2749669,
    label: "Aldeboarn"
  },
  {
    value: 2759899,
    label: "Alkmaar"
  },
  {
    value: 2759887,
    label: "Almelo"
  },
  {
    value: 2759884,
    label: "Almen"
  },
  {
    value: 2759880,
    label: "Almere Haven"
  },
  {
    value: 2759879,
    label: "Almere Stad"
  },
  {
    value: 2759878,
    label: "Almkerk"
  },
  {
    value: 2759875,
    label: "Alphen aan den Rijn"
  },
  {
    value: 2759828,
    label: "Amerongen"
  },
  {
    value: 2759821,
    label: "Amersfoort"
  },
  {
    value: 2759798,
    label: "Amstelveen"
  },
  {
    value: 2759796,
    label: "Amstenrade"
  },
  {
    value: 6544881,
    label: "Amsterdam-Zuidoost"
  },
  {
    value: 2759781,
    label: "Andelst"
  },
  {
    value: 2759757,
    label: "Anjum"
  },
  {
    value: 2759746,
    label: "Anloo"
  },
  {
    value: 2759706,
    label: "Apeldoorn"
  },
  {
    value: 2759687,
    label: "Appingedam"
  },
  {
    value: 2759684,
    label: "Arcen"
  },
  {
    value: 2759661,
    label: "Arnhem"
  },
  {
    value: 2759633,
    label: "Assen"
  },
  {
    value: 2759621,
    label: "Asten"
  },
  {
    value: 2759611,
    label: "Augustinusga"
  },
  {
    value: 2759594,
    label: "Axel"
  },
  {
    value: 2759581,
    label: "Baak"
  },
  {
    value: 6544755,
    label: "Baakwoning"
  },
  {
    value: 2759554,
    label: "Baarle-Nassau"
  },
  {
    value: 2759544,
    label: "Baarn"
  },
  {
    value: 2759472,
    label: "Balk"
  },
  {
    value: 2759429,
    label: "Barchem"
  },
  {
    value: 2759426,
    label: "Barendrecht"
  },
  {
    value: 2759407,
    label: "Barneveld"
  },
  {
    value: 2759397,
    label: "Barsingerhorn"
  },
  {
    value: 2759356,
    label: "Bedum"
  },
  {
    value: 2759350,
    label: "Beek"
  },
  {
    value: 2759342,
    label: "Beekbergen"
  },
  {
    value: 2759286,
    label: "Beesel"
  },
  {
    value: 2759199,
    label: "Bennebroek"
  },
  {
    value: 2759197,
    label: "Bennekom"
  },
  {
    value: 2759178,
    label: "Benthuizen"
  },
  {
    value: 2759163,
    label: "Berg"
  },
  {
    value: 2759164,
    label: "Berg"
  },
  {
    value: 2759147,
    label: "Berg en Dal"
  },
  {
    value: 2759131,
    label: "Bergeijk"
  },
  {
    value: 2759132,
    label: "Bergeijk"
  },
  {
    value: 2759145,
    label: "Bergen op Zoom"
  },
  {
    value: 2759129,
    label: "Bergharen"
  },
  {
    value: 2759126,
    label: "Berghem"
  },
  {
    value: 2759113,
    label: "Bergschenhoek"
  },
  {
    value: 2759089,
    label: "Berkel"
  },
  {
    value: 6929992,
    label: "Berkel en Rodenrijs"
  },
  {
    value: 6544286,
    label: "Berkelland"
  },
  {
    value: 2759057,
    label: "Berltsum"
  },
  {
    value: 2759040,
    label: "Best"
  },
  {
    value: 2759016,
    label: "Beuningen"
  },
  {
    value: 2758998,
    label: "Beverwijk"
  },
  {
    value: 2758992,
    label: "Biddinghuizen"
  },
  {
    value: 2758991,
    label: "Bieberg"
  },
  {
    value: 2758974,
    label: "Biesdonk"
  },
  {
    value: 2758930,
    label: "Bilgaard"
  },
  {
    value: 6621526,
    label: "Binnenstad"
  },
  {
    value: 2758878,
    label: "Bladel"
  },
  {
    value: 2758868,
    label: "Blaricum"
  },
  {
    value: 2758838,
    label: "Bleiswijk"
  },
  {
    value: 2758803,
    label: "Bloemendaal"
  },
  {
    value: 2758804,
    label: "Bloemendaal"
  },
  {
    value: 2758777,
    label: "Blokzijl"
  },
  {
    value: 2758765,
    label: "Bodegraven"
  },
  {
    value: 2758759,
    label: "Boekel"
  },
  {
    value: 2758748,
    label: "Boelenslaan"
  },
  {
    value: 2758682,
    label: "Bolsward"
  },
  {
    value: 2758663,
    label: "Bong"
  },
  {
    value: 2758652,
    label: "Bonrepas"
  },
  {
    value: 2758633,
    label: "Boornbergum"
  },
  {
    value: 2758626,
    label: "Borculo"
  },
  {
    value: 2758621,
    label: "Borger"
  },
  {
    value: 2758602,
    label: "Born"
  },
  {
    value: 2758598,
    label: "Borne"
  },
  {
    value: 2758587,
    label: "Borssele"
  },
  {
    value: 2758549,
    label: "Boskamp"
  },
  {
    value: 2758547,
    label: "Boskoop"
  },
  {
    value: 2758500,
    label: "Boven-Hardinxveld"
  },
  {
    value: 2758490,
    label: "Boven-Leeuwen"
  },
  {
    value: 2758462,
    label: "Boxmeer"
  },
  {
    value: 2758460,
    label: "Boxtel"
  },
  {
    value: 2758432,
    label: "Braband"
  },
  {
    value: 2758405,
    label: "Brandwijk"
  },
  {
    value: 2758401,
    label: "Breda"
  },
  {
    value: 2758393,
    label: "Bredevoort"
  },
  {
    value: 2758391,
    label: "Bredeweg"
  },
  {
    value: 2758336,
    label: "Breugel"
  },
  {
    value: 2758333,
    label: "Breukelen"
  },
  {
    value: 2758326,
    label: "Brielle"
  },
  {
    value: 2758309,
    label: "Britsum"
  },
  {
    value: 2758258,
    label: "Broek in Waterland"
  },
  {
    value: 2758245,
    label: "Broek op Langedijk"
  },
  {
    value: 2758275,
    label: "Broekhem"
  },
  {
    value: 2758239,
    label: "Broeksterwâld"
  },
  {
    value: 2758186,
    label: "Bruinisse"
  },
  {
    value: 2758177,
    label: "Brummen"
  },
  {
    value: 2758174,
    label: "Brunssum"
  },
  {
    value: 2758131,
    label: "Buitenpost"
  },
  {
    value: 2758106,
    label: "Bunnik"
  },
  {
    value: 2758104,
    label: "Bunschoten"
  },
  {
    value: 2758895,
    label: "Burdaard"
  },
  {
    value: 7870374,
    label: "Burgemeesterswijk"
  },
  {
    value: 2758086,
    label: "Burgersdijk"
  },
  {
    value: 2758081,
    label: "Burgh"
  },
  {
    value: 2759103,
    label: "Burgum"
  },
  {
    value: 2758064,
    label: "Bussum"
  },
  {
    value: 6324403,
    label: "Camminghaburen"
  },
  {
    value: 2758012,
    label: "Capelle aan den IJssel"
  },
  {
    value: 2758007,
    label: "Capelle-West"
  },
  {
    value: 2757991,
    label: "Castricum"
  },
  {
    value: 2757938,
    label: "Coevering"
  },
  {
    value: 2757937,
    label: "Coevorden"
  },
  {
    value: 2757890,
    label: "Cranendonck"
  },
  {
    value: 2757874,
    label: "Cuijk"
  },
  {
    value: 2757872,
    label: "Culemborg"
  },
  {
    value: 2757857,
    label: "Dalen"
  },
  {
    value: 2757850,
    label: "Dalfsen"
  },
  {
    value: 2757838,
    label: "Damwâld"
  },
  {
    value: 2757783,
    label: "De Bilt"
  },
  {
    value: 2757685,
    label: "De Doornakkers"
  },
  {
    value: 6621532,
    label: "De Heeze"
  },
  {
    value: 2757493,
    label: "De Horst"
  },
  {
    value: 6697854,
    label: "De Knipe"
  },
  {
    value: 2757374,
    label: "De Laar"
  },
  {
    value: 2757336,
    label: "De Lier"
  },
  {
    value: 2757167,
    label: "De Pan"
  },
  {
    value: 2757041,
    label: "De Steeg"
  },
  {
    value: 6544725,
    label: "De Steegh"
  },
  {
    value: 2743590,
    label: "De Westereen"
  },
  {
    value: 2757698,
    label: "Dedemsvaart"
  },
  {
    value: 2757475,
    label: "Deinum"
  },
  {
    value: 2757370,
    label: "Delden"
  },
  {
    value: 2757347,
    label: "Delfshaven"
  },
  {
    value: 2757345,
    label: "Delft"
  },
  {
    value: 2757340,
    label: "Delfzijl"
  },
  {
    value: 2757244,
    label: "Den Burg"
  },
  {
    value: 2757224,
    label: "Den Ham"
  },
  {
    value: 2757220,
    label: "Den Helder"
  },
  {
    value: 2757194,
    label: "Den Oever"
  },
  {
    value: 2756987,
    label: "Deventer"
  },
  {
    value: 2756888,
    label: "Diemen"
  },
  {
    value: 2756878,
    label: "Diepenheim"
  },
  {
    value: 2756865,
    label: "Dieren"
  },
  {
    value: 2756800,
    label: "Dinteloord"
  },
  {
    value: 2756787,
    label: "Dirksland"
  },
  {
    value: 2756774,
    label: "Doenrade"
  },
  {
    value: 2756772,
    label: "Doesburg"
  },
  {
    value: 2756767,
    label: "Doetinchem"
  },
  {
    value: 2756759,
    label: "Dokkum"
  },
  {
    value: 2756746,
    label: "Domburg"
  },
  {
    value: 2756723,
    label: "Dongen"
  },
  {
    value: 2756686,
    label: "Doorn"
  },
  {
    value: 2756683,
    label: "Doornenburg"
  },
  {
    value: 2756673,
    label: "Doorwerth"
  },
  {
    value: 2756669,
    label: "Dordrecht"
  },
  {
    value: 2756644,
    label: "Drachten"
  },
  {
    value: 2756642,
    label: "Drachtstercompagnie"
  },
  {
    value: 2756619,
    label: "Driebergen-Rijsenburg"
  },
  {
    value: 2756598,
    label: "Driehuis"
  },
  {
    value: 2756591,
    label: "Driel"
  },
  {
    value: 2756584,
    label: "Driemond"
  },
  {
    value: 2756569,
    label: "Drimmelen"
  },
  {
    value: 2756567,
    label: "Drogeham"
  },
  {
    value: 2756561,
    label: "Dronryp"
  },
  {
    value: 2756559,
    label: "Dronten"
  },
  {
    value: 2756539,
    label: "Druten"
  },
  {
    value: 2756507,
    label: "Duiven"
  },
  {
    value: 2756504,
    label: "Duivendrecht"
  },
  {
    value: 2756451,
    label: "Dwingeloo"
  },
  {
    value: 2749430,
    label: "Eastermar"
  },
  {
    value: 2756438,
    label: "Echtenerbrug"
  },
  {
    value: 2756431,
    label: "Edam"
  },
  {
    value: 2756429,
    label: "Ede"
  },
  {
    value: 2756426,
    label: "Ederveen"
  },
  {
    value: 2756418,
    label: "Eefde"
  },
  {
    value: 2756380,
    label: "Een"
  },
  {
    value: 2756351,
    label: "Eerbeek"
  },
  {
    value: 2756349,
    label: "Eerde"
  },
  {
    value: 2756342,
    label: "Eersel"
  },
  {
    value: 2756301,
    label: "Egmond aan Zee"
  },
  {
    value: 2756295,
    label: "Eibergen"
  },
  {
    value: 2756283,
    label: "Eijsden"
  },
  {
    value: 2756253,
    label: "Eindhoven"
  },
  {
    value: 2756232,
    label: "Elburg"
  },
  {
    value: 2756229,
    label: "Elden"
  },
  {
    value: 2756200,
    label: "Ellecom"
  },
  {
    value: 2756169,
    label: "Elsloo"
  },
  {
    value: 2756161,
    label: "Elst"
  },
  {
    value: 2756139,
    label: "Emmeloord"
  },
  {
    value: 2756136,
    label: "Emmen"
  },
  {
    value: 2756133,
    label: "Emmer-Compascuum"
  },
  {
    value: 2756114,
    label: "Emst"
  },
  {
    value: 2756100,
    label: "Engeland"
  },
  {
    value: 2756077,
    label: "Enkhuizen"
  },
  {
    value: 2756072,
    label: "Ens"
  },
  {
    value: 2756071,
    label: "Enschede"
  },
  {
    value: 2756059,
    label: "Epe"
  },
  {
    value: 2756050,
    label: "Epse"
  },
  {
    value: 2756039,
    label: "Ermelo"
  },
  {
    value: 2756035,
    label: "Erp"
  },
  {
    value: 2756016,
    label: "Espelo"
  },
  {
    value: 2755996,
    label: "Etten-Leur"
  },
  {
    value: 2755982,
    label: "Euvelgunne"
  },
  {
    value: 2745743,
    label: "Feanwâlden"
  },
  {
    value: 2755920,
    label: "Ferwert"
  },
  {
    value: 2755893,
    label: "Flevowijk"
  },
  {
    value: 2755873,
    label: "Folgeren"
  },
  {
    value: 2755862,
    label: "Fort"
  },
  {
    value: 2755845,
    label: "Franeker"
  },
  {
    value: 6544876,
    label: "Friese Buurt"
  },
  {
    value: 2755774,
    label: "Gageldonk"
  },
  {
    value: 2755732,
    label: "Garderen"
  },
  {
    value: 2755729,
    label: "Garyp"
  },
  {
    value: 2755669,
    label: "Geertruidenberg"
  },
  {
    value: 2755645,
    label: "Geffen"
  },
  {
    value: 2755633,
    label: "Geldermalsen"
  },
  {
    value: 2755619,
    label: "Geldrop"
  },
  {
    value: 2755616,
    label: "Geleen"
  },
  {
    value: 7535498,
    label: "Gemeente  Oldambt"
  },
  {
    value: 2747350,
    label: "Gemeente 's-Hertogenbosch"
  },
  {
    value: 6544296,
    label: "Gemeente Aa en Hunze"
  },
  {
    value: 2760143,
    label: "Gemeente Aalburg"
  },
  {
    value: 2760133,
    label: "Gemeente Aalsmeer"
  },
  {
    value: 2760122,
    label: "Gemeente Aalten"
  },
  {
    value: 2759914,
    label: "Gemeente Alblasserdam"
  },
  {
    value: 6544242,
    label: "Gemeente Albrandswaard"
  },
  {
    value: 2759898,
    label: "Gemeente Alkmaar"
  },
  {
    value: 2759886,
    label: "Gemeente Almelo"
  },
  {
    value: 6544259,
    label: "Gemeente Almere"
  },
  {
    value: 2759874,
    label: "Gemeente Alphen aan den Rijn"
  },
  {
    value: 2759820,
    label: "Gemeente Amersfoort"
  },
  {
    value: 2759797,
    label: "Gemeente Amstelveen"
  },
  {
    value: 2759793,
    label: "Gemeente Amsterdam"
  },
  {
    value: 2759705,
    label: "Gemeente Apeldoorn"
  },
  {
    value: 2759660,
    label: "Gemeente Arnhem"
  },
  {
    value: 2759632,
    label: "Gemeente Assen"
  },
  {
    value: 2759619,
    label: "Gemeente Asten"
  },
  {
    value: 2759553,
    label: "Gemeente Baarle-Nassau"
  },
  {
    value: 2759543,
    label: "Gemeente Baarn"
  },
  {
    value: 2759425,
    label: "Gemeente Barendrecht"
  },
  {
    value: 2759406,
    label: "Gemeente Barneveld"
  },
  {
    value: 2759343,
    label: "Gemeente Beek"
  },
  {
    value: 2755270,
    label: "Gemeente Berg en Dal"
  },
  {
    value: 2759151,
    label: "Gemeente Bergen"
  },
  {
    value: 2759144,
    label: "Gemeente Bergen op Zoom"
  },
  {
    value: 6544268,
    label: "Gemeente Bernheze"
  },
  {
    value: 2759039,
    label: "Gemeente Best"
  },
  {
    value: 2759014,
    label: "Gemeente Beuningen"
  },
  {
    value: 2758997,
    label: "Gemeente Beverwijk"
  },
  {
    value: 2758877,
    label: "Gemeente Bladel"
  },
  {
    value: 2758802,
    label: "Gemeente Bloemendaal"
  },
  {
    value: 2758619,
    label: "Gemeente Borger-Odoorn"
  },
  {
    value: 2758597,
    label: "Gemeente Borne"
  },
  {
    value: 2758588,
    label: "Gemeente Borsele"
  },
  {
    value: 2758546,
    label: "Gemeente Boskoop"
  },
  {
    value: 2758461,
    label: "Gemeente Boxmeer"
  },
  {
    value: 2758459,
    label: "Gemeente Boxtel"
  },
  {
    value: 2758400,
    label: "Gemeente Breda"
  },
  {
    value: 2758325,
    label: "Gemeente Brielle"
  },
  {
    value: 6544290,
    label: "Gemeente Bronckhorst"
  },
  {
    value: 2758176,
    label: "Gemeente Brummen"
  },
  {
    value: 2758173,
    label: "Gemeente Brunssum"
  },
  {
    value: 2758103,
    label: "Gemeente Bunschoten"
  },
  {
    value: 2758095,
    label: "Gemeente Buren"
  },
  {
    value: 2758063,
    label: "Gemeente Bussum"
  },
  {
    value: 2758011,
    label: "Gemeente Capelle aan den IJssel"
  },
  {
    value: 2757990,
    label: "Gemeente Castricum"
  },
  {
    value: 2757936,
    label: "Gemeente Coevorden"
  },
  {
    value: 6544288,
    label: "Gemeente Cranendonck"
  },
  {
    value: 2757873,
    label: "Gemeente Cuijk"
  },
  {
    value: 2757871,
    label: "Gemeente Culemborg"
  },
  {
    value: 2757849,
    label: "Gemeente Dalfsen"
  },
  {
    value: 2757782,
    label: "Gemeente De Bilt"
  },
  {
    value: 6544229,
    label: "Gemeente De Marne"
  },
  {
    value: 6544250,
    label: "Gemeente De Ronde Venen"
  },
  {
    value: 6544227,
    label: "Gemeente De Wolden"
  },
  {
    value: 2757344,
    label: "Gemeente Delft"
  },
  {
    value: 2757339,
    label: "Gemeente Delfzijl"
  },
  {
    value: 2747372,
    label: "Gemeente Den Haag"
  },
  {
    value: 2757219,
    label: "Gemeente Den Helder"
  },
  {
    value: 2756986,
    label: "Gemeente Deventer"
  },
  {
    value: 2756887,
    label: "Gemeente Diemen"
  },
  {
    value: 2756766,
    label: "Gemeente Doetinchem"
  },
  {
    value: 2756722,
    label: "Gemeente Dongen"
  },
  {
    value: 2756668,
    label: "Gemeente Dordrecht"
  },
  {
    value: 6544254,
    label: "Gemeente Drechterland"
  },
  {
    value: 2751271,
    label: "Gemeente Drimmelen"
  },
  {
    value: 2756558,
    label: "Gemeente Dronten"
  },
  {
    value: 2756538,
    label: "Gemeente Druten"
  },
  {
    value: 2756506,
    label: "Gemeente Duiven"
  },
  {
    value: 2756443,
    label: "Gemeente Echt-Susteren"
  },
  {
    value: 2756430,
    label: "Gemeente Edam-Volendam"
  },
  {
    value: 2756428,
    label: "Gemeente Ede"
  },
  {
    value: 6544278,
    label: "Gemeente Eemsmond"
  },
  {
    value: 2756341,
    label: "Gemeente Eersel"
  },
  {
    value: 2756252,
    label: "Gemeente Eindhoven"
  },
  {
    value: 2756231,
    label: "Gemeente Elburg"
  },
  {
    value: 2756134,
    label: "Gemeente Emmen"
  },
  {
    value: 2756076,
    label: "Gemeente Enkhuizen"
  },
  {
    value: 2756070,
    label: "Gemeente Enschede"
  },
  {
    value: 2756058,
    label: "Gemeente Epe"
  },
  {
    value: 2756038,
    label: "Gemeente Ermelo"
  },
  {
    value: 2755994,
    label: "Gemeente Etten-Leur"
  },
  {
    value: 2755668,
    label: "Gemeente Geertruidenberg"
  },
  {
    value: 2755632,
    label: "Gemeente Geldermalsen"
  },
  {
    value: 6544232,
    label: "Gemeente Geldrop-Mierlo"
  },
  {
    value: 2755583,
    label: "Gemeente Gennep"
  },
  {
    value: 2755506,
    label: "Gemeente Gilze en Rijen"
  },
  {
    value: 2755484,
    label: "Gemeente Goedereede"
  },
  {
    value: 2755475,
    label: "Gemeente Goes"
  },
  {
    value: 2755463,
    label: "Gemeente Goirle"
  },
  {
    value: 2755433,
    label: "Gemeente Gorinchem"
  },
  {
    value: 2755419,
    label: "Gemeente Gouda"
  },
  {
    value: 6544272,
    label: "Gemeente Graafstroom"
  },
  {
    value: 2755357,
    label: "Gemeente Grave"
  },
  {
    value: 2755250,
    label: "Gemeente Groningen"
  },
  {
    value: 2755203,
    label: "Gemeente Grootegast"
  },
  {
    value: 2755031,
    label: "Gemeente Haaksbergen"
  },
  {
    value: 2755002,
    label: "Gemeente Haarlem"
  },
  {
    value: 2754999,
    label: "Gemeente Haarlemmermeer"
  },
  {
    value: 2754858,
    label: "Gemeente Hardenberg"
  },
  {
    value: 2754846,
    label: "Gemeente Harderwijk"
  },
  {
    value: 2754840,
    label: "Gemeente Haren"
  },
  {
    value: 2754836,
    label: "Gemeente Harenkarspel"
  },
  {
    value: 2754816,
    label: "Gemeente Harlingen"
  },
  {
    value: 2754696,
    label: "Gemeente Heemskerk"
  },
  {
    value: 2754680,
    label: "Gemeente Heerde"
  },
  {
    value: 2754668,
    label: "Gemeente Heerenveen"
  },
  {
    value: 2754658,
    label: "Gemeente Heerhugowaard"
  },
  {
    value: 2754651,
    label: "Gemeente Heerlen"
  },
  {
    value: 2754515,
    label: "Gemeente Heiloo"
  },
  {
    value: 2754453,
    label: "Gemeente Hellevoetsluis"
  },
  {
    value: 2754446,
    label: "Gemeente Helmond"
  },
  {
    value: 2754407,
    label: "Gemeente Hendrik-Ido-Ambacht"
  },
  {
    value: 2754392,
    label: "Gemeente Hengelo"
  },
  {
    value: 2754072,
    label: "Gemeente Hillegom"
  },
  {
    value: 2754065,
    label: "Gemeente Hilvarenbeek"
  },
  {
    value: 2754063,
    label: "Gemeente Hilversum"
  },
  {
    value: 2753718,
    label: "Gemeente Hoogeveen"
  },
  {
    value: 2753705,
    label: "Gemeente Hoogezand-Sappemeer"
  },
  {
    value: 2753635,
    label: "Gemeente Hoorn"
  },
  {
    value: 6544233,
    label: "Gemeente Horst aan de Maas"
  },
  {
    value: 2753556,
    label: "Gemeente Houten"
  },
  {
    value: 2753467,
    label: "Gemeente Huizen"
  },
  {
    value: 2753437,
    label: "Gemeente Hulst"
  },
  {
    value: 2753354,
    label: "Gemeente IJsselstein"
  },
  {
    value: 2753104,
    label: "Gemeente Kampen"
  },
  {
    value: 2753012,
    label: "Gemeente Katwijk"
  },
  {
    value: 2752922,
    label: "Gemeente Kerkrade"
  },
  {
    value: 6544220,
    label: "Gemeente Koggenland"
  },
  {
    value: 2752263,
    label: "Gemeente Krimpen aan den IJssel"
  },
  {
    value: 2751962,
    label: "Gemeente Langedijk"
  },
  {
    value: 6544291,
    label: "Gemeente Lansingerland"
  },
  {
    value: 2751833,
    label: "Gemeente Leek"
  },
  {
    value: 2751807,
    label: "Gemeente Leerdam"
  },
  {
    value: 2751791,
    label: "Gemeente Leeuwarden"
  },
  {
    value: 2751790,
    label: "Gemeente Leeuwarderadeel"
  },
  {
    value: 2751772,
    label: "Gemeente Leiden"
  },
  {
    value: 2751770,
    label: "Gemeente Leiderdorp"
  },
  {
    value: 6544252,
    label: "Gemeente Leidschendam-Voorburg"
  },
  {
    value: 2751737,
    label: "Gemeente Lelystad"
  },
  {
    value: 2751721,
    label: "Gemeente Lemsterland"
  },
  {
    value: 2751688,
    label: "Gemeente Leusden"
  },
  {
    value: 6544270,
    label: "Gemeente Liesveld"
  },
  {
    value: 6544236,
    label: "Gemeente Lingewaard"
  },
  {
    value: 2751546,
    label: "Gemeente Lisse"
  },
  {
    value: 6544300,
    label: "Gemeente Littenseradiel"
  },
  {
    value: 2751536,
    label: "Gemeente Lochem"
  },
  {
    value: 2751455,
    label: "Gemeente Loon op Zand"
  },
  {
    value: 2751435,
    label: "Gemeente Lopik"
  },
  {
    value: 2751423,
    label: "Gemeente Losser"
  },
  {
    value: 2751284,
    label: "Gemeente Maassluis"
  },
  {
    value: 2751282,
    label: "Gemeente Maastricht"
  },
  {
    value: 2751036,
    label: "Gemeente Meerssen"
  },
  {
    value: 2750946,
    label: "Gemeente Meppel"
  },
  {
    value: 2750894,
    label: "Gemeente Middelburg"
  },
  {
    value: 2750883,
    label: "Gemeente Middelharnis"
  },
  {
    value: 6544297,
    label: "Gemeente Midden-Drenthe"
  },
  {
    value: 6544256,
    label: "Gemeente Montferland"
  },
  {
    value: 2750520,
    label: "Gemeente Naarden"
  },
  {
    value: 6544269,
    label: "Gemeente Neder-Betuwe"
  },
  {
    value: 2750466,
    label: "Gemeente Nederweert"
  },
  {
    value: 2750395,
    label: "Gemeente Niedorp"
  },
  {
    value: 2750324,
    label: "Gemeente Nieuwegein"
  },
  {
    value: 2750064,
    label: "Gemeente Nijkerk"
  },
  {
    value: 2750052,
    label: "Gemeente Nijmegen"
  },
  {
    value: 6544287,
    label: "Gemeente Noordenveld"
  },
  {
    value: 2749851,
    label: "Gemeente Noordoostpolder"
  },
  {
    value: 2749814,
    label: "Gemeente Noordwijk"
  },
  {
    value: 2749810,
    label: "Gemeente Noordwijkerhout"
  },
  {
    value: 2749779,
    label: "Gemeente Nuenen, Gerwen en Nederwetten"
  },
  {
    value: 2749754,
    label: "Gemeente Nunspeet"
  },
  {
    value: 2749752,
    label: "Gemeente Nuth"
  },
  {
    value: 2749722,
    label: "Gemeente Oegstgeest"
  },
  {
    value: 2749679,
    label: "Gemeente Oisterwijk"
  },
  {
    value: 2749667,
    label: "Gemeente Oldebroek"
  },
  {
    value: 2749643,
    label: "Gemeente Oldenzaal"
  },
  {
    value: 2749611,
    label: "Gemeente Ommen"
  },
  {
    value: 6544298,
    label: "Gemeente Onderbanken"
  },
  {
    value: 2749447,
    label: "Gemeente Oosterhout"
  },
  {
    value: 2749233,
    label: "Gemeente Oss"
  },
  {
    value: 2749181,
    label: "Gemeente Oud-Beijerland"
  },
  {
    value: 6544276,
    label: "Gemeente Overbetuwe"
  },
  {
    value: 2748728,
    label: "Gemeente Papendrecht"
  },
  {
    value: 6544221,
    label: "Gemeente Pijnacker-Nootdorp"
  },
  {
    value: 2748412,
    label: "Gemeente Purmerend"
  },
  {
    value: 2748391,
    label: "Gemeente Putten"
  },
  {
    value: 2748370,
    label: "Gemeente Raalte"
  },
  {
    value: 2748200,
    label: "Gemeente Rheden"
  },
  {
    value: 2748184,
    label: "Gemeente Rhenen"
  },
  {
    value: 2748171,
    label: "Gemeente Ridderkerk"
  },
  {
    value: 6544273,
    label: "Gemeente Rijnwoude"
  },
  {
    value: 2748075,
    label: "Gemeente Rijswijk"
  },
  {
    value: 6544264,
    label: "Gemeente Roerdalen"
  },
  {
    value: 2747999,
    label: "Gemeente Roermond"
  },
  {
    value: 2747890,
    label: "Gemeente Rotterdam"
  },
  {
    value: 2747868,
    label: "Gemeente Rozenburg"
  },
  {
    value: 2747857,
    label: "Gemeente Rucphen"
  },
  {
    value: 2747719,
    label: "Gemeente Schagen"
  },
  {
    value: 2747595,
    label: "Gemeente Schiedam"
  },
  {
    value: 2747583,
    label: "Gemeente Schijndel"
  },
  {
    value: 2747311,
    label: "Gemeente Simpelveld"
  },
  {
    value: 2747226,
    label: "Gemeente Sint-Oedenrode"
  },
  {
    value: 6544255,
    label: "Gemeente Sittard-Geleen"
  },
  {
    value: 2747168,
    label: "Gemeente Sliedrecht"
  },
  {
    value: 2747091,
    label: "Gemeente Smallingerland"
  },
  {
    value: 2747033,
    label: "Gemeente Soest"
  },
  {
    value: 2747020,
    label: "Gemeente Someren"
  },
  {
    value: 2746931,
    label: "Gemeente Spijkenisse"
  },
  {
    value: 2746859,
    label: "Gemeente Stadskanaal"
  },
  {
    value: 2746837,
    label: "Gemeente Staphorst"
  },
  {
    value: 2746801,
    label: "Gemeente Steenbergen"
  },
  {
    value: 6544235,
    label: "Gemeente Steenwijkerland"
  },
  {
    value: 2746607,
    label: "Gemeente Strijen"
  },
  {
    value: 2746421,
    label: "Gemeente Terneuzen"
  },
  {
    value: 2746383,
    label: "Gemeente Texel"
  },
  {
    value: 6544293,
    label: "Gemeente Teylingen"
  },
  {
    value: 2746350,
    label: "Gemeente Tholen"
  },
  {
    value: 2746330,
    label: "Gemeente Tiel"
  },
  {
    value: 2746300,
    label: "Gemeente Tilburg"
  },
  {
    value: 2746132,
    label: "Gemeente Tubbergen"
  },
  {
    value: 6544245,
    label: "Gemeente Twenterand"
  },
  {
    value: 6544282,
    label: "Gemeente Tynaarlo"
  },
  {
    value: 2746004,
    label: "Gemeente Uden"
  },
  {
    value: 2745972,
    label: "Gemeente Uithoorn"
  },
  {
    value: 2745931,
    label: "Gemeente Urk"
  },
  {
    value: 2745911,
    label: "Gemeente Utrecht"
  },
  {
    value: 2756685,
    label: "Gemeente Utrechtse Heuvelrug"
  },
  {
    value: 2745904,
    label: "Gemeente Vaals"
  },
  {
    value: 2745859,
    label: "Gemeente Valkenswaard"
  },
  {
    value: 2745782,
    label: "Gemeente Veendam"
  },
  {
    value: 2745773,
    label: "Gemeente Veenendaal"
  },
  {
    value: 2745738,
    label: "Gemeente Veere"
  },
  {
    value: 2745725,
    label: "Gemeente Veghel"
  },
  {
    value: 2745704,
    label: "Gemeente Veldhoven"
  },
  {
    value: 2745675,
    label: "Gemeente Velsen"
  },
  {
    value: 2745640,
    label: "Gemeente Venlo"
  },
  {
    value: 2745633,
    label: "Gemeente Venray"
  },
  {
    value: 2745579,
    label: "Gemeente Vianen"
  },
  {
    value: 2745466,
    label: "Gemeente Vlaardingen"
  },
  {
    value: 2745460,
    label: "Gemeente Vlagtwedde"
  },
  {
    value: 2745391,
    label: "Gemeente Vlissingen"
  },
  {
    value: 2745386,
    label: "Gemeente Vlist"
  },
  {
    value: 2745300,
    label: "Gemeente Voorschoten"
  },
  {
    value: 2745295,
    label: "Gemeente Voorst"
  },
  {
    value: 2745153,
    label: "Gemeente Vught"
  },
  {
    value: 2745126,
    label: "Gemeente Waalre"
  },
  {
    value: 2745122,
    label: "Gemeente Waalwijk"
  },
  {
    value: 2745095,
    label: "Gemeente Waddinxveen"
  },
  {
    value: 2745087,
    label: "Gemeente Wageningen"
  },
  {
    value: 2744989,
    label: "Gemeente Wassenaar"
  },
  {
    value: 2758257,
    label: "Gemeente Waterland"
  },
  {
    value: 2744910,
    label: "Gemeente Weert"
  },
  {
    value: 2744903,
    label: "Gemeente Weesp"
  },
  {
    value: 2744826,
    label: "Gemeente Werkendam"
  },
  {
    value: 2744819,
    label: "Gemeente Wervershoof"
  },
  {
    value: 6544265,
    label: "Gemeente West Maas en Waal"
  },
  {
    value: 2744674,
    label: "Gemeente Westervoort"
  },
  {
    value: 6544261,
    label: "Gemeente Westland"
  },
  {
    value: 2744609,
    label: "Gemeente Weststellingwerf"
  },
  {
    value: 2744548,
    label: "Gemeente Wierden"
  },
  {
    value: 2744540,
    label: "Gemeente Wieringen"
  },
  {
    value: 2744537,
    label: "Gemeente Wieringermeer"
  },
  {
    value: 2744513,
    label: "Gemeente Wijchen"
  },
  {
    value: 2744482,
    label: "Gemeente Wijk bij Duurstede"
  },
  {
    value: 2744331,
    label: "Gemeente Winterswijk"
  },
  {
    value: 2744256,
    label: "Gemeente Woensdrecht"
  },
  {
    value: 2744247,
    label: "Gemeente Woerden"
  },
  {
    value: 2744113,
    label: "Gemeente Zaanstad"
  },
  {
    value: 2744101,
    label: "Gemeente Zaltbommel"
  },
  {
    value: 2744040,
    label: "Gemeente Zandvoort"
  },
  {
    value: 2743996,
    label: "Gemeente Zeewolde"
  },
  {
    value: 2743976,
    label: "Gemeente Zeist"
  },
  {
    value: 2743948,
    label: "Gemeente Zevenaar"
  },
  {
    value: 2743882,
    label: "Gemeente Zijpe"
  },
  {
    value: 2743855,
    label: "Gemeente Zoetermeer"
  },
  {
    value: 7535501,
    label: "Gemeente Zuidplas"
  },
  {
    value: 2743618,
    label: "Gemeente Zundert"
  },
  {
    value: 2743607,
    label: "Gemeente Zutphen"
  },
  {
    value: 2743492,
    label: "Gemeente Zwijndrecht"
  },
  {
    value: 2743476,
    label: "Gemeente Zwolle"
  },
  {
    value: 2755601,
    label: "Genderen"
  },
  {
    value: 2755599,
    label: "Gendringen"
  },
  {
    value: 2755584,
    label: "Gennep"
  },
  {
    value: 2755533,
    label: "Giessenburg"
  },
  {
    value: 2755517,
    label: "Giethoorn"
  },
  {
    value: 2755498,
    label: "Ginneken"
  },
  {
    value: 2755485,
    label: "Goedereede"
  },
  {
    value: 2755476,
    label: "Goes"
  },
  {
    value: 2755464,
    label: "Goirle"
  },
  {
    value: 2755449,
    label: "Goor"
  },
  {
    value: 2755434,
    label: "Gorinchem"
  },
  {
    value: 2755429,
    label: "Gorredijk"
  },
  {
    value: 2755428,
    label: "Gorssel"
  },
  {
    value: 2755420,
    label: "Gouda"
  },
  {
    value: 2755399,
    label: "Goutum"
  },
  {
    value: 2755358,
    label: "Grave"
  },
  {
    value: 2755348,
    label: "Greffelkamp"
  },
  {
    value: 2755317,
    label: "Grijpskerk"
  },
  {
    value: 2755281,
    label: "Groenlo"
  },
  {
    value: 6948947,
    label: "Groenswaard"
  },
  {
    value: 2755272,
    label: "Groesbeek"
  },
  {
    value: 2755251,
    label: "Groningen"
  },
  {
    value: 2755200,
    label: "Groote Haar"
  },
  {
    value: 2755204,
    label: "Grootegast"
  },
  {
    value: 2755052,
    label: "Grou"
  },
  {
    value: 7870372,
    label: "Gulden Bodem"
  },
  {
    value: 2755542,
    label: "Gytsjerk"
  },
  {
    value: 2755033,
    label: "Haagse Beemden"
  },
  {
    value: 2755030,
    label: "Haaksbergen"
  },
  {
    value: 2755023,
    label: "Haamstede"
  },
  {
    value: 2755019,
    label: "Haansberg"
  },
  {
    value: 2755009,
    label: "Haaren"
  },
  {
    value: 2755003,
    label: "Haarlem"
  },
  {
    value: 2754978,
    label: "Haastrecht"
  },
  {
    value: 2754975,
    label: "Haelen"
  },
  {
    value: 2754930,
    label: "Hallum"
  },
  {
    value: 2754922,
    label: "Halsteren"
  },
  {
    value: 2754861,
    label: "Hardenberg"
  },
  {
    value: 2754848,
    label: "Harderwijk"
  },
  {
    value: 2754841,
    label: "Haren"
  },
  {
    value: 2754837,
    label: "Harenkarspel"
  },
  {
    value: 2754835,
    label: "Harfsen"
  },
  {
    value: 2754821,
    label: "Harkema"
  },
  {
    value: 2754817,
    label: "Harlingen"
  },
  {
    value: 2754808,
    label: "Harreveld"
  },
  {
    value: 2754804,
    label: "Harskamp"
  },
  {
    value: 2754788,
    label: "Haspel"
  },
  {
    value: 2754779,
    label: "Hasselt"
  },
  {
    value: 2754768,
    label: "Hattem"
  },
  {
    value: 2754752,
    label: "Havelte"
  },
  {
    value: 2754724,
    label: "Hazerswoude-Dorp"
  },
  {
    value: 2754719,
    label: "Hedel"
  },
  {
    value: 2754712,
    label: "Heeg"
  },
  {
    value: 2754703,
    label: "Heelsum"
  },
  {
    value: 2754697,
    label: "Heemskerk"
  },
  {
    value: 2754692,
    label: "Heemstede"
  },
  {
    value: 2754682,
    label: "Heer"
  },
  {
    value: 2754681,
    label: "Heerde"
  },
  {
    value: 2754669,
    label: "Heerenveen"
  },
  {
    value: 2754662,
    label: "Heerewaarden"
  },
  {
    value: 2754659,
    label: "Heerhugowaard"
  },
  {
    value: 2754656,
    label: "Heerjansdam"
  },
  {
    value: 2754652,
    label: "Heerlen"
  },
  {
    value: 2754635,
    label: "Heesch"
  },
  {
    value: 2754618,
    label: "Heeze"
  },
  {
    value: 2754552,
    label: "Heijplaat"
  },
  {
    value: 2754545,
    label: "Heikant"
  },
  {
    value: 2754516,
    label: "Heiloo"
  },
  {
    value: 2754507,
    label: "Heinenoord"
  },
  {
    value: 2754502,
    label: "Heino"
  },
  {
    value: 2754491,
    label: "Hekelingen"
  },
  {
    value: 2754454,
    label: "Hellevoetsluis"
  },
  {
    value: 2754447,
    label: "Helmond"
  },
  {
    value: 2754408,
    label: "Hendrik-Ido-Ambacht"
  },
  {
    value: 2754394,
    label: "Hengelo"
  },
  {
    value: 2754395,
    label: "Hengelo"
  },
  {
    value: 2754389,
    label: "Hengevelde"
  },
  {
    value: 2754386,
    label: "Hengstdal"
  },
  {
    value: 2754352,
    label: "Herkenbosch"
  },
  {
    value: 2754322,
    label: "Herveld"
  },
  {
    value: 2754273,
    label: "Het Hazebos"
  },
  {
    value: 2754287,
    label: "Heteren"
  },
  {
    value: 2754111,
    label: "Heythuysen"
  },
  {
    value: 2754073,
    label: "Hillegom"
  },
  {
    value: 2754066,
    label: "Hilvarenbeek"
  },
  {
    value: 2754064,
    label: "Hilversum"
  },
  {
    value: 6697850,
    label: "Hoek"
  },
  {
    value: 2754007,
    label: "Hoek van Holland"
  },
  {
    value: 2753996,
    label: "Hoensbroek"
  },
  {
    value: 2753887,
    label: "Hollum"
  },
  {
    value: 2753852,
    label: "Holwerd"
  },
  {
    value: 2753806,
    label: "Honselersdijk"
  },
  {
    value: 2753801,
    label: "Hoofddorp"
  },
  {
    value: 2753719,
    label: "Hoogeveen"
  },
  {
    value: 2753706,
    label: "Hoogezand"
  },
  {
    value: 7870365,
    label: "Hoogkamp"
  },
  {
    value: 2753686,
    label: "Hoogland"
  },
  {
    value: 2753638,
    label: "Hoorn"
  },
  {
    value: 2753587,
    label: "Horst"
  },
  {
    value: 2753557,
    label: "Houten"
  },
  {
    value: 2753548,
    label: "Houthem"
  },
  {
    value: 2753468,
    label: "Huizen"
  },
  {
    value: 2753470,
    label: "Huizum"
  },
  {
    value: 2753439,
    label: "Hulst"
  },
  {
    value: 2754864,
    label: "Hurdegaryp"
  },
  {
    value: 2753516,
    label: "Húns"
  },
  {
    value: 2753379,
    label: "IJlst"
  },
  {
    value: 2753359,
    label: "IJsselmonde"
  },
  {
    value: 2753355,
    label: "IJsselstein"
  },
  {
    value: 2753256,
    label: "Jelsum"
  },
  {
    value: 2753307,
    label: "Jirnsum"
  },
  {
    value: 2753201,
    label: "Jordaan"
  },
  {
    value: 2753197,
    label: "Joure"
  },
  {
    value: 6692371,
    label: "Jubbega"
  },
  {
    value: 2753184,
    label: "Julianadorp"
  },
  {
    value: 2753174,
    label: "Jutphaas"
  },
  {
    value: 2753106,
    label: "Kampen"
  },
  {
    value: 2753040,
    label: "Katerveer"
  },
  {
    value: 2753010,
    label: "Katwijk aan Zee"
  },
  {
    value: 2753011,
    label: "Katwijk aan den Rijn"
  },
  {
    value: 2752969,
    label: "Keldonk"
  },
  {
    value: 6929953,
    label: "Kelpen-Oler"
  },
  {
    value: 2752923,
    label: "Kerkrade"
  },
  {
    value: 2752899,
    label: "Kesteren"
  },
  {
    value: 2750405,
    label: "Kingdom of the Netherlands"
  },
  {
    value: 2752798,
    label: "Klazienaveen"
  },
  {
    value: 2752646,
    label: "Klimmen"
  },
  {
    value: 2752611,
    label: "Kloosterzande"
  },
  {
    value: 2752600,
    label: "Klundert"
  },
  {
    value: 6251994,
    label: "Klundert"
  },
  {
    value: 2752547,
    label: "Koewacht"
  },
  {
    value: 2752524,
    label: "Kollum"
  },
  {
    value: 2752520,
    label: "Kollumerzwaag"
  },
  {
    value: 2752492,
    label: "Koningsbosch"
  },
  {
    value: 6544829,
    label: "Koningshoeven"
  },
  {
    value: 2752444,
    label: "Kootstertille"
  },
  {
    value: 2752441,
    label: "Kootwijkerbroek"
  },
  {
    value: 2752420,
    label: "Korrewegwijk"
  },
  {
    value: 2752409,
    label: "Kortenhoef"
  },
  {
    value: 2752403,
    label: "Korteven"
  },
  {
    value: 2752367,
    label: "Koudum"
  },
  {
    value: 2752349,
    label: "Kraaijenstein"
  },
  {
    value: 2752314,
    label: "Kralingen"
  },
  {
    value: 2752300,
    label: "Kranenburg"
  },
  {
    value: 2752264,
    label: "Krimpen aan den IJssel"
  },
  {
    value: 2752260,
    label: "Krispijn"
  },
  {
    value: 2752240,
    label: "Krommenie"
  },
  {
    value: 2752192,
    label: "Kruisland"
  },
  {
    value: 2752187,
    label: "Kruisschot"
  },
  {
    value: 2752151,
    label: "Kunrade"
  },
  {
    value: 2752130,
    label: "Kwintsheul"
  },
  {
    value: 2752062,
    label: "Ladysmith"
  },
  {
    value: 6929985,
    label: "Lakerlopen"
  },
  {
    value: 2751998,
    label: "Lammerenburg"
  },
  {
    value: 2751980,
    label: "Landsmeer"
  },
  {
    value: 2751924,
    label: "Langerak"
  },
  {
    value: 2751874,
    label: "Laren"
  },
  {
    value: 2751875,
    label: "Laren"
  },
  {
    value: 2751861,
    label: "Laudermarke"
  },
  {
    value: 2751834,
    label: "Leek"
  },
  {
    value: 2751813,
    label: "Leens"
  },
  {
    value: 2751808,
    label: "Leerdam"
  },
  {
    value: 2751801,
    label: "Leersum"
  },
  {
    value: 2751793,
    label: "Leesten"
  },
  {
    value: 2751792,
    label: "Leeuwarden"
  },
  {
    value: 2751789,
    label: "Leeuwen"
  },
  {
    value: 2751773,
    label: "Leiden"
  },
  {
    value: 2751771,
    label: "Leiderdorp"
  },
  {
    value: 2751750,
    label: "Leimuiden"
  },
  {
    value: 2751738,
    label: "Lelystad"
  },
  {
    value: 2751729,
    label: "Lemmer"
  },
  {
    value: 2751709,
    label: "Lepelstraat"
  },
  {
    value: 2751687,
    label: "Leusden"
  },
  {
    value: 2751651,
    label: "Lichtenvoorde"
  },
  {
    value: 2751641,
    label: "Lienden"
  },
  {
    value: 2751621,
    label: "Liesveld"
  },
  {
    value: 2751599,
    label: "Limbricht"
  },
  {
    value: 2751582,
    label: "Lindenholt"
  },
  {
    value: 2751547,
    label: "Lisse"
  },
  {
    value: 2751537,
    label: "Lochem"
  },
  {
    value: 2751524,
    label: "Loenen"
  },
  {
    value: 2751456,
    label: "Loon op Zand"
  },
  {
    value: 2751449,
    label: "Loosbroek"
  },
  {
    value: 2751436,
    label: "Lopik"
  },
  {
    value: 2751424,
    label: "Losser"
  },
  {
    value: 6698635,
    label: "Lunetten"
  },
  {
    value: 2751385,
    label: "Lunteren"
  },
  {
    value: 2751320,
    label: "Maarn"
  },
  {
    value: 2751318,
    label: "Maarsbergen"
  },
  {
    value: 2751316,
    label: "Maarssen"
  },
  {
    value: 2751303,
    label: "Maasbracht"
  },
  {
    value: 2751301,
    label: "Maasbree"
  },
  {
    value: 2751296,
    label: "Maasdijk"
  },
  {
    value: 2751285,
    label: "Maassluis"
  },
  {
    value: 2751283,
    label: "Maastricht"
  },
  {
    value: 2751264,
    label: "Magele"
  },
  {
    value: 2751253,
    label: "Makkum"
  },
  {
    value: 2751254,
    label: "Makkum"
  },
  {
    value: 2751212,
    label: "Mantgum"
  },
  {
    value: 2751199,
    label: "Margraten"
  },
  {
    value: 2751193,
    label: "Mariaheide"
  },
  {
    value: 2751180,
    label: "Mariarade"
  },
  {
    value: 2751161,
    label: "Markelo"
  },
  {
    value: 2752950,
    label: "Marken"
  },
  {
    value: 2751129,
    label: "Marrum"
  },
  {
    value: 2751122,
    label: "Marsum"
  },
  {
    value: 6695503,
    label: "Meerhoven"
  },
  {
    value: 2751037,
    label: "Meerssen"
  },
  {
    value: 2751024,
    label: "Meerzicht"
  },
  {
    value: 2751005,
    label: "Meezenbroek"
  },
  {
    value: 2750978,
    label: "Melick"
  },
  {
    value: 2750965,
    label: "Menaam"
  },
  {
    value: 2750953,
    label: "Mensfort"
  },
  {
    value: 2750947,
    label: "Meppel"
  },
  {
    value: 2750938,
    label: "Merkelbeek"
  },
  {
    value: 2750903,
    label: "Middelbeers"
  },
  {
    value: 2750896,
    label: "Middelburg"
  },
  {
    value: 2750888,
    label: "Middeldijk"
  },
  {
    value: 2750884,
    label: "Middelharnis"
  },
  {
    value: 2750850,
    label: "Middenmeer"
  },
  {
    value: 2750821,
    label: "Mierlo"
  },
  {
    value: 2750815,
    label: "Mijdrecht"
  },
  {
    value: 2750811,
    label: "Mijnheerkens"
  },
  {
    value: 2750810,
    label: "Mijnsheerenland"
  },
  {
    value: 2750790,
    label: "Minnertsga"
  },
  {
    value: 2750764,
    label: "Moerkapelle"
  },
  {
    value: 2750641,
    label: "Monnickendam"
  },
  {
    value: 2750630,
    label: "Monster"
  },
  {
    value: 2750626,
    label: "Montfoort"
  },
  {
    value: 2750624,
    label: "Montfort"
  },
  {
    value: 2750543,
    label: "Munnikeveld"
  },
  {
    value: 6929980,
    label: "Muschberg en Geestenberg"
  },
  {
    value: 7874246,
    label: "Musiskwartier"
  },
  {
    value: 2750523,
    label: "Naaldwijk"
  },
  {
    value: 2750521,
    label: "Naarden"
  },
  {
    value: 2750480,
    label: "Nederhemert"
  },
  {
    value: 2750479,
    label: "Nederhemert-Noord"
  },
  {
    value: 2750467,
    label: "Nederweert"
  },
  {
    value: 2750460,
    label: "Neede"
  },
  {
    value: 2750450,
    label: "Neerbosch West"
  },
  {
    value: 2750444,
    label: "Neerijnen"
  },
  {
    value: 2750417,
    label: "Nes"
  },
  {
    value: 2750420,
    label: "Nes"
  },
  {
    value: 2750194,
    label: "Nieuw-Helvoet"
  },
  {
    value: 2750163,
    label: "Nieuw-Lekkerland"
  },
  {
    value: 2750158,
    label: "Nieuw-Loosdrecht"
  },
  {
    value: 2750157,
    label: "Nieuw-Lotbroek"
  },
  {
    value: 2750117,
    label: "Nieuw-Vossemeer"
  },
  {
    value: 2750325,
    label: "Nieuwegein"
  },
  {
    value: 2750310,
    label: "Nieuwehorne"
  },
  {
    value: 2750280,
    label: "Nieuwenhoorn"
  },
  {
    value: 2750187,
    label: "Nieuwkoop"
  },
  {
    value: 2750175,
    label: "Nieuwland"
  },
  {
    value: 2750065,
    label: "Nijkerk"
  },
  {
    value: 2750053,
    label: "Nijmegen"
  },
  {
    value: 2749992,
    label: "Noardburgum"
  },
  {
    value: 2749835,
    label: "Noord-Scharwoude"
  },
  {
    value: 2749931,
    label: "Noorderhoogebrug"
  },
  {
    value: 2749875,
    label: "Noordhorn"
  },
  {
    value: 2749813,
    label: "Noordwijk aan Zee"
  },
  {
    value: 2749812,
    label: "Noordwijk-Binnen"
  },
  {
    value: 2749811,
    label: "Noordwijkerhout"
  },
  {
    value: 2749807,
    label: "Noordwolde"
  },
  {
    value: 2749780,
    label: "Nuenen"
  },
  {
    value: 2749756,
    label: "Nunspeet"
  },
  {
    value: 2749753,
    label: "Nuth"
  },
  {
    value: 2749745,
    label: "Obdam"
  },
  {
    value: 2749735,
    label: "Odiliapeel"
  },
  {
    value: 2749723,
    label: "Oegstgeest"
  },
  {
    value: 2749712,
    label: "Oene"
  },
  {
    value: 2749708,
    label: "Oentsjerk"
  },
  {
    value: 2749703,
    label: "Oerle"
  },
  {
    value: 2749696,
    label: "Offenbeek"
  },
  {
    value: 2749685,
    label: "Oirsbeek"
  },
  {
    value: 2749683,
    label: "Oirschot"
  },
  {
    value: 2749680,
    label: "Oisterwijk"
  },
  {
    value: 2749668,
    label: "Oldebroek"
  },
  {
    value: 2749660,
    label: "Oldehove"
  },
  {
    value: 2749653,
    label: "Oldemarkt"
  },
  {
    value: 2749644,
    label: "Oldenzaal"
  },
  {
    value: 2749626,
    label: "Olst"
  },
  {
    value: 2749563,
    label: "Ool"
  },
  {
    value: 6544228,
    label: "Oost Gelre"
  },
  {
    value: 2749334,
    label: "Oost-Vlieland"
  },
  {
    value: 2749534,
    label: "Oostdorp"
  },
  {
    value: 2749513,
    label: "Oostelbeers"
  },
  {
    value: 2749503,
    label: "Oosterbeek"
  },
  {
    value: 2749451,
    label: "Oosterhoogebrug"
  },
  {
    value: 2749449,
    label: "Oosterhout"
  },
  {
    value: 2749450,
    label: "Oosterhout"
  },
  {
    value: 2749423,
    label: "Oosterpark"
  },
  {
    value: 2749385,
    label: "Oosterzee"
  },
  {
    value: 2749368,
    label: "Oosthoekeind"
  },
  {
    value: 6544855,
    label: "Op den Bosch"
  },
  {
    value: 2749307,
    label: "Op den Hering"
  },
  {
    value: 2749304,
    label: "Opeinde"
  },
  {
    value: 2749286,
    label: "Opmeer"
  },
  {
    value: 2749284,
    label: "Oppenhuizen"
  },
  {
    value: 2749281,
    label: "Opperdoes"
  },
  {
    value: 6948945,
    label: "Oranjewijk"
  },
  {
    value: 2749251,
    label: "Oranjewoud"
  },
  {
    value: 2749234,
    label: "Oss"
  },
  {
    value: 2749203,
    label: "Otterlo"
  },
  {
    value: 2749182,
    label: "Oud-Beijerland"
  },
  {
    value: 2748926,
    label: "Oud-Loosdrecht"
  },
  {
    value: 2749164,
    label: "Ouddorp"
  },
  {
    value: 6544222,
    label: "Oude IJsselstreek"
  },
  {
    value: 2749034,
    label: "Oude Pekela"
  },
  {
    value: 2748968,
    label: "Oude Wetering"
  },
  {
    value: 2749136,
    label: "Oudega"
  },
  {
    value: 2749120,
    label: "Oudehaske"
  },
  {
    value: 2749061,
    label: "Oudemirdum"
  },
  {
    value: 2749017,
    label: "Ouderkerk aan de Amstel"
  },
  {
    value: 2749009,
    label: "Oudeschild"
  },
  {
    value: 2749007,
    label: "Oudeschoot"
  },
  {
    value: 2748979,
    label: "Oudewater"
  },
  {
    value: 2748864,
    label: "Overberg"
  },
  {
    value: 2748760,
    label: "Palenstein"
  },
  {
    value: 2748729,
    label: "Papendrecht"
  },
  {
    value: 2748686,
    label: "Peelo"
  },
  {
    value: 2748591,
    label: "Pijnacker"
  },
  {
    value: 2748533,
    label: "Poeldijk"
  },
  {
    value: 2748530,
    label: "Poelpolder"
  },
  {
    value: 2748481,
    label: "Posterholt"
  },
  {
    value: 2756631,
    label: "Provincie Drenthe"
  },
  {
    value: 3319179,
    label: "Provincie Flevoland"
  },
  {
    value: 2755812,
    label: "Provincie Friesland"
  },
  {
    value: 2755634,
    label: "Provincie Gelderland"
  },
  {
    value: 2755249,
    label: "Provincie Groningen"
  },
  {
    value: 2751596,
    label: "Provincie Limburg"
  },
  {
    value: 2749990,
    label: "Provincie Noord-Brabant"
  },
  {
    value: 2749879,
    label: "Provincie Noord-Holland"
  },
  {
    value: 2748838,
    label: "Provincie Overijssel"
  },
  {
    value: 2745909,
    label: "Provincie Utrecht"
  },
  {
    value: 2744011,
    label: "Provincie Zeeland"
  },
  {
    value: 2743698,
    label: "Provincie Zuid-Holland"
  },
  {
    value: 2748413,
    label: "Purmerend"
  },
  {
    value: 2748403,
    label: "Puth"
  },
  {
    value: 2748392,
    label: "Putten"
  },
  {
    value: 2748371,
    label: "Raalte"
  },
  {
    value: 6950811,
    label: "Randenbroek"
  },
  {
    value: 2748329,
    label: "Randwijk"
  },
  {
    value: 2747938,
    label: "Reduzum"
  },
  {
    value: 2748286,
    label: "Reek"
  },
  {
    value: 2748280,
    label: "Reeuwijk"
  },
  {
    value: 2748240,
    label: "Renesse"
  },
  {
    value: 2748236,
    label: "Renkum"
  },
  {
    value: 2748208,
    label: "Reuver"
  },
  {
    value: 2748201,
    label: "Rheden"
  },
  {
    value: 2748185,
    label: "Rhenen"
  },
  {
    value: 2748178,
    label: "Rhoon"
  },
  {
    value: 2748172,
    label: "Ridderkerk"
  },
  {
    value: 2748104,
    label: "Rijnsburg"
  },
  {
    value: 2748076,
    label: "Rijswijk"
  },
  {
    value: 2748051,
    label: "Rinsumageast"
  },
  {
    value: 2748026,
    label: "Roden"
  },
  {
    value: 2748000,
    label: "Roermond"
  },
  {
    value: 2747929,
    label: "Roosendaal"
  },
  {
    value: 2747930,
    label: "Roosendaal"
  },
  {
    value: 2747910,
    label: "Rosmalen"
  },
  {
    value: 2747891,
    label: "Rotterdam"
  },
  {
    value: 2747886,
    label: "Rottevalle"
  },
  {
    value: 2747870,
    label: "Rozenburg"
  },
  {
    value: 2747865,
    label: "Rozendaal"
  },
  {
    value: 2747858,
    label: "Rucphen"
  },
  {
    value: 2747852,
    label: "Rugge"
  },
  {
    value: 2747835,
    label: "Ruinen"
  },
  {
    value: 2747758,
    label: "Sappemeer"
  },
  {
    value: 2747749,
    label: "Sas van Gent"
  },
  {
    value: 2747751,
    label: "Sassenheim"
  },
  {
    value: 2747720,
    label: "Schagen"
  },
  {
    value: 2747713,
    label: "Schaijk"
  },
  {
    value: 2747704,
    label: "Schalkhaar"
  },
  {
    value: 2747702,
    label: "Schalkwijk"
  },
  {
    value: 2747680,
    label: "Scharendijke"
  },
  {
    value: 2747671,
    label: "Scharnegoutum"
  },
  {
    value: 2747611,
    label: "Scherpenering"
  },
  {
    value: 2747599,
    label: "Scheveningen"
  },
  {
    value: 2747597,
    label: "Schiebroek"
  },
  {
    value: 2747596,
    label: "Schiedam"
  },
  {
    value: 2747584,
    label: "Schijndel"
  },
  {
    value: 2747551,
    label: "Schin op Geul"
  },
  {
    value: 2747553,
    label: "Schinnen"
  },
  {
    value: 2747550,
    label: "Schinveld"
  },
  {
    value: 2747542,
    label: "Schiphol"
  },
  {
    value: 2747515,
    label: "Schoonebeek"
  },
  {
    value: 2747506,
    label: "Schoonhoven"
  },
  {
    value: 2747380,
    label: "Sexbierum"
  },
  {
    value: 2747348,
    label: "Sibbe"
  },
  {
    value: 2747312,
    label: "Simpelveld"
  },
  {
    value: 2747297,
    label: "Sint Annaparochie"
  },
  {
    value: 2747290,
    label: "Sint Anthonis"
  },
  {
    value: 2747270,
    label: "Sint Jacobiparochie"
  },
  {
    value: 2747262,
    label: "Sint Jansklooster"
  },
  {
    value: 2747231,
    label: "Sint Nicolaasga"
  },
  {
    value: 2747229,
    label: "Sint Odiliënberg"
  },
  {
    value: 2747225,
    label: "Sint Pancras"
  },
  {
    value: 2747234,
    label: "Sint-Michielsgestel"
  },
  {
    value: 2747227,
    label: "Sint-Oedenrode"
  },
  {
    value: 2747203,
    label: "Sittard"
  },
  {
    value: 2747182,
    label: "Sleen"
  },
  {
    value: 2747169,
    label: "Sliedrecht"
  },
  {
    value: 2747143,
    label: "Slochteren"
  },
  {
    value: 2747109,
    label: "Sluiskil"
  },
  {
    value: 2747083,
    label: "Smerp"
  },
  {
    value: 2747063,
    label: "Sneek"
  },
  {
    value: 2747046,
    label: "Snippeling"
  },
  {
    value: 2747034,
    label: "Soest"
  },
  {
    value: 2747030,
    label: "Soesterberg"
  },
  {
    value: 2747021,
    label: "Someren"
  },
  {
    value: 2747010,
    label: "Son"
  },
  {
    value: 2746988,
    label: "Spaanshuisken"
  },
  {
    value: 2746981,
    label: "Spakenburg"
  },
  {
    value: 2746974,
    label: "Spankeren"
  },
  {
    value: 2746932,
    label: "Spijkenisse"
  },
  {
    value: 2746860,
    label: "Stadskanaal"
  },
  {
    value: 2746839,
    label: "Staphorst"
  },
  {
    value: 2746804,
    label: "Steenbergen"
  },
  {
    value: 2746766,
    label: "Steenwijk"
  },
  {
    value: 2746761,
    label: "Steenwijkerwold"
  },
  {
    value: 2746752,
    label: "Steggerda"
  },
  {
    value: 2746748,
    label: "Stein"
  },
  {
    value: 7870373,
    label: "Sterrenberg"
  },
  {
    value: 2746705,
    label: "Stiens"
  },
  {
    value: 2746623,
    label: "Streefkerk"
  },
  {
    value: 2746609,
    label: "Strijen"
  },
  {
    value: 2746596,
    label: "Stroe"
  },
  {
    value: 2746565,
    label: "Sumar"
  },
  {
    value: 2746558,
    label: "Surhuisterveen"
  },
  {
    value: 2746557,
    label: "Surhuizum"
  },
  {
    value: 2746504,
    label: "Tegelen"
  },
  {
    value: 2746424,
    label: "Ternaard"
  },
  {
    value: 2746420,
    label: "Terneuzen"
  },
  {
    value: 2746407,
    label: "Terschuur"
  },
  {
    value: 2746400,
    label: "Terwinselen"
  },
  {
    value: 2747373,
    label: "The Hague"
  },
  {
    value: 2746351,
    label: "Tholen"
  },
  {
    value: 2746331,
    label: "Tiel"
  },
  {
    value: 2746304,
    label: "Tijnje"
  },
  {
    value: 2746301,
    label: "Tilburg"
  },
  {
    value: 2746222,
    label: "Tolsteeg"
  },
  {
    value: 2746215,
    label: "Tongelre"
  },
  {
    value: 2746199,
    label: "Toom"
  },
  {
    value: 2746133,
    label: "Tubbergen"
  },
  {
    value: 2746120,
    label: "Tuk"
  },
  {
    value: 2746066,
    label: "Tweesluizen"
  },
  {
    value: 2746060,
    label: "Twello"
  },
  {
    value: 2746052,
    label: "Twijzel"
  },
  {
    value: 2746051,
    label: "Twijzelerheide"
  },
  {
    value: 2746038,
    label: "Tynaarlo"
  },
  {
    value: 2746311,
    label: "Tytsjerk"
  },
  {
    value: 2746024,
    label: "Tzum"
  },
  {
    value: 2746023,
    label: "Tzummarum"
  },
  {
    value: 2746014,
    label: "Ubachsberg"
  },
  {
    value: 2746012,
    label: "Ubbergen"
  },
  {
    value: 2746009,
    label: "Uddel"
  },
  {
    value: 2746005,
    label: "Uden"
  },
  {
    value: 2745978,
    label: "Uitgeest"
  },
  {
    value: 2745973,
    label: "Uithoorn"
  },
  {
    value: 2745968,
    label: "Uithuizermeeden"
  },
  {
    value: 2745961,
    label: "Uitweg"
  },
  {
    value: 2745944,
    label: "Ulrum"
  },
  {
    value: 2745932,
    label: "Urk"
  },
  {
    value: 2745926,
    label: "Urmond"
  },
  {
    value: 2745912,
    label: "Utrecht"
  },
  {
    value: 2745906,
    label: "Vaals"
  },
  {
    value: 2745895,
    label: "Vaartkant"
  },
  {
    value: 2745892,
    label: "Vaassen"
  },
  {
    value: 2745885,
    label: "Valburg"
  },
  {
    value: 2745874,
    label: "Valkenburg"
  },
  {
    value: 2745860,
    label: "Valkenswaard"
  },
  {
    value: 2745800,
    label: "Varsseveld"
  },
  {
    value: 2745783,
    label: "Veendam"
  },
  {
    value: 2745774,
    label: "Veenendaal"
  },
  {
    value: 2745739,
    label: "Veere"
  },
  {
    value: 2745726,
    label: "Veghel"
  },
  {
    value: 2745706,
    label: "Veldhoven"
  },
  {
    value: 2745677,
    label: "Velp"
  },
  {
    value: 2745673,
    label: "Velsen-Zuid"
  },
  {
    value: 7118109,
    label: "Velserbroek"
  },
  {
    value: 2745645,
    label: "Venhuizen"
  },
  {
    value: 2745641,
    label: "Venlo"
  },
  {
    value: 2745634,
    label: "Venray"
  },
  {
    value: 2745580,
    label: "Vianen"
  },
  {
    value: 6929984,
    label: "Villapark"
  },
  {
    value: 2745467,
    label: "Vlaardingen"
  },
  {
    value: 2745461,
    label: "Vlagtwedde"
  },
  {
    value: 2745392,
    label: "Vlissingen"
  },
  {
    value: 2745388,
    label: "Vlist"
  },
  {
    value: 2745382,
    label: "Vlodrop"
  },
  {
    value: 2745369,
    label: "Voerendaal"
  },
  {
    value: 2745340,
    label: "Volendam"
  },
  {
    value: 2745338,
    label: "Volkel"
  },
  {
    value: 2745333,
    label: "Vollenhove"
  },
  {
    value: 6948946,
    label: "Vondelwijk"
  },
  {
    value: 2745321,
    label: "Voorburg"
  },
  {
    value: 2745312,
    label: "Voorhof"
  },
  {
    value: 2745311,
    label: "Voorhout"
  },
  {
    value: 2745301,
    label: "Voorschoten"
  },
  {
    value: 2745297,
    label: "Voorst"
  },
  {
    value: 2745271,
    label: "Voorthuizen"
  },
  {
    value: 2745196,
    label: "Vreeland"
  },
  {
    value: 2745189,
    label: "Vries"
  },
  {
    value: 2745182,
    label: "Vriezenveen"
  },
  {
    value: 2745169,
    label: "Vroomshoop"
  },
  {
    value: 2745154,
    label: "Vught"
  },
  {
    value: 2745127,
    label: "Waalre"
  },
  {
    value: 2745123,
    label: "Waalwijk"
  },
  {
    value: 2745096,
    label: "Waddinxveen"
  },
  {
    value: 2745088,
    label: "Wageningen"
  },
  {
    value: 2745048,
    label: "Wanneperveen"
  },
  {
    value: 2745018,
    label: "Warga"
  },
  {
    value: 2745003,
    label: "Warnsveld"
  },
  {
    value: 2744998,
    label: "Warten"
  },
  {
    value: 2744994,
    label: "Waspik"
  },
  {
    value: 2744991,
    label: "Wassenaar"
  },
  {
    value: 2744946,
    label: "Weberbuurt"
  },
  {
    value: 2744911,
    label: "Weert"
  },
  {
    value: 2744904,
    label: "Weesp"
  },
  {
    value: 7648382,
    label: "Weesperzijde"
  },
  {
    value: 6697777,
    label: "Weidevenne"
  },
  {
    value: 2744871,
    label: "Wekerom"
  },
  {
    value: 2744869,
    label: "Welberg"
  },
  {
    value: 2744859,
    label: "Wellerlooi"
  },
  {
    value: 2744827,
    label: "Werkendam"
  },
  {
    value: 2744820,
    label: "Wervershoof"
  },
  {
    value: 2744608,
    label: "West-Terschelling"
  },
  {
    value: 2744800,
    label: "Westdorpe"
  },
  {
    value: 2744769,
    label: "Westerbork"
  },
  {
    value: 2744741,
    label: "Westerhaar-Vriezenveensewijk"
  },
  {
    value: 2744675,
    label: "Westervoort"
  },
  {
    value: 2744642,
    label: "Westkapelle"
  },
  {
    value: 2744549,
    label: "Wierden"
  },
  {
    value: 2744514,
    label: "Wijchen"
  },
  {
    value: 2744489,
    label: "Wijhe"
  },
  {
    value: 2744483,
    label: "Wijk bij Duurstede"
  },
  {
    value: 2744388,
    label: "Willemstad"
  },
  {
    value: 2744373,
    label: "Wilp"
  },
  {
    value: 2744344,
    label: "Winschoten"
  },
  {
    value: 2744337,
    label: "Winsum"
  },
  {
    value: 2744338,
    label: "Winsum"
  },
  {
    value: 2744332,
    label: "Winterswijk"
  },
  {
    value: 2744327,
    label: "Wirdum"
  },
  {
    value: 2744324,
    label: "Wisch"
  },
  {
    value: 2744257,
    label: "Woensdrecht"
  },
  {
    value: 2744248,
    label: "Woerden"
  },
  {
    value: 2744219,
    label: "Wolfheze"
  },
  {
    value: 2744194,
    label: "Wolvega"
  },
  {
    value: 2744191,
    label: "Wommels"
  },
  {
    value: 2744179,
    label: "Workum"
  },
  {
    value: 2744163,
    label: "Woudenberg"
  },
  {
    value: 2744156,
    label: "Woudrichem"
  },
  {
    value: 2744153,
    label: "Woudsend"
  },
  {
    value: 2744147,
    label: "Wâlterswâld"
  },
  {
    value: 2744130,
    label: "Yde"
  },
  {
    value: 2744129,
    label: "Yerseke"
  },
  {
    value: 6941548,
    label: "Ypenburg"
  },
  {
    value: 2744122,
    label: "Zaamslag"
  },
  {
    value: 2744118,
    label: "Zaandam"
  },
  {
    value: 2744114,
    label: "Zaanstad"
  },
  {
    value: 2744102,
    label: "Zaltbommel"
  },
  {
    value: 2744042,
    label: "Zandvoort"
  },
  {
    value: 2744014,
    label: "Zeeland"
  },
  {
    value: 2744002,
    label: "Zeesse"
  },
  {
    value: 2743997,
    label: "Zeewolde"
  },
  {
    value: 2743986,
    label: "Zegwaart"
  },
  {
    value: 2743977,
    label: "Zeist"
  },
  {
    value: 2743963,
    label: "Zelhem"
  },
  {
    value: 2743952,
    label: "Zetten"
  },
  {
    value: 2743949,
    label: "Zevenaar"
  },
  {
    value: 2743877,
    label: "Zijtaart"
  },
  {
    value: 2743856,
    label: "Zoetermeer"
  },
  {
    value: 2743694,
    label: "Zuidhorn"
  },
  {
    value: 2743680,
    label: "Zuidlaren"
  },
  {
    value: 2743619,
    label: "Zundert"
  },
  {
    value: 2743608,
    label: "Zutphen"
  },
  {
    value: 2743561,
    label: "Zwartebroek"
  },
  {
    value: 2743493,
    label: "Zwijndrecht"
  },
  {
    value: 2743477,
    label: "Zwolle"
  },
  {
    value: 2743478,
    label: "Zwolle"
  },
  {
    value: 7626528,
    label: "agz installatietechniek"
  }
];

export default cities;