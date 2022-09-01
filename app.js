
var mainDiv = document.getElementById("mainCont");
var data =[
   
    {
      "name": "Egypt",
      "code": "EGY",
      "continent": "Africa",
      "assoc": {
        "key": "egy",
        "name": "Egyptian Football Association",
        "continental": {
          "name": "Confederation Africaine de Football (CAF)",
          "code": "CAF"
        }
      }
    },
    {
      "name": "Morocco",
      "code": "MAR",
      "continent": "Africa",
      "assoc": {
        "key": "mar",
        "name": "Federation Royale Marocaine de Football",
        "continental": {
          "name": "Confederation Africaine de Football (CAF)",
          "code": "CAF"
        }
      }
    },
    {
      "name": "Tunisia",
      "code": "TUN",
      "continent": "Africa",
      "assoc": {
        "key": "tun",
        "name": "Federation Tunisienne de Football",
        "continental": {
          "name": "Confederation Africaine de Football (CAF)",
          "code": "CAF"
        }
      }
    },
    {
      "name": "Senegal",
      "code": "SEN",
      "continent": "Africa",
      "assoc": {
        "key": "sen",
        "name": "Federation Senegalaise de Football",
        "continental": {
          "name": "Confederation Africaine de Football (CAF)",
          "code": "CAF"
        }
      }
    },
    {
      "name": "Nigeria",
      "code": "NGA",
      "continent": "Africa",
      "assoc": {
        "key": "nga",
        "name": "Nigeria Football Federation",
        "continental": {
          "name": "Confédération Africaine de Football (CAF)",
          "code": "CAF"
        }
      }
    },
    {
      "name": "Japan",
      "code": "JPN",
      "continent": "Asia",
      "assoc": {
        "key": "jpn",
        "name": "Japan Football Association",
        "continental": {
          "name": "Asian Football Confederation (AFC)",
          "code": "AFC"
        }
      }
    },
    {
      "name": "South Korea",
      "code": "KOR",
      "continent": "Asia",
      "assoc": {
        "key": "kor",
        "name": "Korea Football Association",
        "continental": {
          "name": "Asian Football Confederation (AFC)",
          "code": "AFC"
        }
      }
    },
    {
      "name": "Costa Rica",
      "code": "CRC",
      "continent": "Central America",
      "assoc": {
        "key": "crc",
        "name": "Federación Costarricense de Fútbol",
        "continental": {
          "name": "Confederation of North, Central American and Caribbean Association Football (CONCACAF)",
          "code": "CONCACAF"
        }
      }
    },
    {
      "name": "Panama",
      "code": "PAN",
      "continent": "Central America",
      "assoc": {
        "key": "pan",
        "name": "Federación Panameña de Fútbol",
        "continental": {
          "name": "Confederation of North, Central American and Caribbean Association Football (CONCACAF)",
          "code": "CONCACAF"
        }
      }
    },
    {
      "name": "Belgium",
      "code": "BEL",
      "continent": "Europe",
      "assoc": {
        "key": "bel",
        "name": "Koninklijke Belgische Voetbalbond",
        "continental": {
          "name": "Union of European Football Associations (UEFA)",
          "code": "UEFA"
        }
      }
    },
    {
      "name": "Germany",
      "code": "GER",
      "continent": "Europe",
      "assoc": {
        "key": "ger",
        "name": "Deutscher Fußball-Bund",
        "continental": {
          "name": "Union of European Football Associations (UEFA)",
          "code": "UEFA"
        }
      }
    },
    {
      "name": "Spain",
      "code": "ESP",
      "continent": "Europe",
      "assoc": {
        "key": "esp",
        "name": "Real Federación Española de Fútbol",
        "continental": {
          "name": "Union of European Football Associations (UEFA)",
          "code": "UEFA"
        }
      }
    },
    {
      "name": "France",
      "code": "FRA",
      "continent": "Europe",
      "assoc": {
        "key": "fra",
        "name": "Fédération Française de Football",
        "continental": {
          "name": "Union of European Football Associations (UEFA)",
          "code": "UEFA"
        }
      }
    },
    {
      "name": "Portugal",
      "code": "POR",
      "continent": "Europe",
      "assoc": {
        "key": "por",
        "name": "Federação Portuguesa de Futebol",
        "continental": {
          "name": "Union of European Football Associations (UEFA)",
          "code": "UEFA"
        }
      }
    },
    {
      "name": "Denmark",
      "code": "DEN",
      "continent": "Europe",
      "assoc": {
        "key": "den",
        "name": "Dansk Boldspil-Union",
        "continental": {
          "name": "Union of European Football Associations (UEFA)",
          "code": "UEFA"
        }
      }
    },
    {
      "name": "Poland",
      "code": "POL",
      "continent": "Europe",
      "assoc": {
        "key": "pol",
        "name": "Polski Związek Piłki Nożnej",
        "continental": {
          "name": "Union of European Football Associations (UEFA)",
          "code": "UEFA"
        }
      }
    },
    {
      "name": "Sweden",
      "code": "SWE",
      "continent": "Europe",
      "assoc": {
        "key": "swe",
        "name": "Svenska Fotbollförbundet",
        "continental": {
          "name": "Union of European Football Associations (UEFA)",
          "code": "UEFA"
        }
      }
    },
    {
      "name": "Switzerland",
      "code": "SUI",
      "continent": "Europe",
      "assoc": {
        "key": "sui",
        "name": "Association Suisse de Football",
        "continental": {
          "name": "Union of European Football Associations (UEFA)",
          "code": "UEFA"
        }
      }
    },
    {
      "name": "Croatia",
      "code": "CRO",
      "continent": "Europe",
      "assoc": {
        "key": "cro",
        "name": "Hrvatski Nogometni Savez",
        "continental": {
          "name": "Union of European Football Associations (UEFA)",
          "code": "UEFA"
        }
      }
    },
    {
      "name": "Serbia",
      "code": "SRB",
      "continent": "Europe",
      "assoc": {
        "key": "srb",
        "name": "Fudbalski Savez Srbije",
        "continental": {
          "name": "Union of European Football Associations (UEFA)",
          "code": "UEFA"
        }
      }
    },
    {
      "name": "Russia",
      "code": "RUS",
      "continent": "Europe",
      "assoc": {
        "key": "rus",
        "name": "Russian Football Union",
        "continental": {
          "name": "Union of European Football Associations (UEFA)",
          "code": "UEFA"
        }
      }
    },
    {
      "name": "Iceland",
      "code": "ISL",
      "continent": "Europe",
      "assoc": {
        "key": "isl",
        "name": "Knattspyrnusamband Íslands",
        "continental": {
          "name": "Union of European Football Associations (UEFA)",
          "code": "UEFA"
        }
      }
    },
    {
      "name": "England",
      "code": "ENG",
      "continent": "Europe"
    },
    {
      "name": "Iran",
      "code": "IRN",
      "continent": "Middle East",
      "assoc": {
        "key": "irn",
        "name": "Football Federation Islamic Republic of Iran",
        "continental": {
          "name": "Asian Football Confederation (AFC)",
          "code": "AFC"
        }
      }
    },
    {
      "name": "Saudi Arabia",
      "code": "KSA",
      "continent": "Middle East",
      "assoc": {
        "key": "ksa",
        "name": "Saudi Arabian Football Federation",
        "continental": {
          "name": "Asian Football Confederation (AFC)",
          "code": "AFC"
        }
      }
    },
    {
      "name": "Mexico",
      "code": "MEX",
      "continent": "North America",
      "assoc": {
        "key": "mex",
        "name": "Federación Mexicana de Fútbol Asociación",
        "continental": {
          "name": "Confederation of North, Central American and Caribbean Association Football (CONCACAF)",
          "code": "CONCACAF"
        }
      }
    },
    {
      "name": "Australia",
      "code": "AUS",
      "continent": "Pacific",
      "assoc": {
        "key": "aus",
        "name": "Football Federation Australia",
        "continental": {
          "name": "Asian Football Confederation (AFC)",
          "code": "AFC"
        }
      }
    },
    {
      "name": "Argentina",
      "code": "ARG",
      "continent": "South America",
      "assoc": {
        "key": "arg",
        "name": "Asociación del Fútbol Argentino",
        "continental": {
          "name": "Confederación Sudamericana de Fútbol (CONMEBOL)",
          "code": "CONMEBOL"
        }
      }
    },
    {
      "name": "Brazil",
      "code": "BRA",
      "continent": "South America",
      "assoc": {
        "key": "bra",
        "name": "Confederação Brasileira de Futebol",
        "continental": {
          "name": "Confederación Sudamericana de Fútbol (CONMEBOL)",
          "code": "CONMEBOL"
        }
      }
    },
    {
      "name": "Uruguay",
      "code": "URU",
      "continent": "South America",
      "assoc": {
        "key": "uru",
        "name": "Asociación Uruguaya de Fútbol",
        "continental": {
          "name": "Confederación Sudamericana de Fútbol (CONMEBOL)",
          "code": "CONMEBOL"
        }
      }
    },
    {
      "name": "Colombia",
      "code": "COL",
      "continent": "South America",
      "assoc": {
        "key": "col",
        "name": "Federación Colombiana de Fútbol",
        "continental": {
          "name": "Confederación Sudamericana de Fútbol (CONMEBOL)",
          "code": "CONMEBOL"
        }
      }
    },
    {
      "name": "Peru",
      "code": "PER",
      "continent": "South America",
      "assoc": {
        "key": "per",
        "name": "Federación Peruana de Fútbol",
        "continental": {
          "name": "Confederación Sudamericana de Fútbol (CONMEBOL)",
          "code": "CONMEBOL"
        }
      }
    }
]

var modalDivMain = document.createElement("div");
modalDivMain.setAttribute("class", "modal-divmain")

var modalDiv = document.createElement("div")
modalDiv.setAttribute("class", "modal-div")


mainDiv.appendChild(modalDivMain)
modalDivMain.appendChild(modalDiv)





var firstDiv = document.createElement("div");
firstDiv.setAttribute("class", "team-div")
var firstDivH1 = document.createElement("h1");
var firstDivH1Txt = document.createTextNode("Teams")


var secondDiv = document.createElement("div");
secondDiv.setAttribute("class", "code-div")
var secondDivH1 = document.createElement("h1");
var secondDivH1Txt = document.createTextNode("Code")


var thirdDiv = document.createElement("div");
thirdDiv.setAttribute("class", "cont-div")
var thirdDivH1 = document.createElement("h1");
var thirdDivH1Txt = document.createTextNode("Continent")


var fourthDiv = document.createElement("div");
fourthDiv.setAttribute("class", "detail-div")
var fourthDivH1 = document.createElement("h1");
var fourthDivH1Txt = document.createTextNode("More Details")



mainDiv.appendChild(firstDiv);
firstDiv.appendChild(firstDivH1);
firstDivH1.appendChild(firstDivH1Txt);

mainDiv.appendChild(secondDiv)
secondDiv.appendChild(secondDivH1);
secondDivH1.appendChild(secondDivH1Txt);


mainDiv.appendChild(thirdDiv)
thirdDiv.appendChild(thirdDivH1);
thirdDivH1.appendChild(thirdDivH1Txt);


mainDiv.appendChild(fourthDiv)
fourthDiv.appendChild(fourthDivH1);
fourthDivH1.appendChild(fourthDivH1Txt);






for (var key in data){
    // console.log(data[key].name);

    // if(typeof (data[key]) === "object") {
    //     console.log( data[key].assoc)
    // }

    // if(typeof (data[key]).assoc === "object") {
    //     console.log( data[key].assoc.continental)

    // }
    var firstDivP = document.createElement("p");
    var firstDivPTxt = document.createTextNode(data[key].name)

    var secondDivP = document.createElement("p");
    var secondDivPTxt = document.createTextNode(data[key].code)

    var thirdDivP = document.createElement("p");
    var thirdDivPTxt = document.createTextNode(data[key].continent)
 
    var fourthDivP = document.createElement("p");
    fourthDivP.setAttribute("onClick", `details("${data[key].name}")`)
    var fourthDivPTxt = document.createTextNode("Get Details")





firstDiv.appendChild(firstDivP);
firstDivP.appendChild(firstDivPTxt);

secondDiv.appendChild(secondDivP);
secondDivP.appendChild(secondDivPTxt);

thirdDiv.appendChild(thirdDivP);
thirdDivP.appendChild(thirdDivPTxt);

fourthDiv.appendChild(fourthDivP);
fourthDivP.appendChild(fourthDivPTxt);

}
console.log(mainDiv);



function details(names) {

    for (var key in data){

    if(data[key].name === names) {
        console.log(data[key])
        break;
    }

      if(typeof (data[key]) === "object") {
         console.log( data[key].assoc)
     }

    if(typeof (data[key]).assoc === "object") {
        console.log( data[key].assoc.continental)

    }
}
modalDivMain.style.display="block"

    
} 
