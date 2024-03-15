import csv from 'csvtojson';

export function getEntireDatabase(){
    console.log("Called db function\n");
    const file = "../database.csv";
    const reader = new FileReader();
    reader.onload = function(e) {
        const csvData = e.target.result;
        csv()
          .fromString(csvData)
          .then((jsonObj) => {
            // jsonObj contains the parsed CSV data
            console.log(jsonObj);
            return jsonObj;
          });
      };
}

export function updateLocation(ID, Location){
    
}

export function updateATInfo(){ 

}

export function addNewAT(){ 

}

export function deleteAT(){ 

}