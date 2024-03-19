import csvData from './database.csv';

export function updateLocation(ID, Location){
    
}

export function updateATInfo(){ 

}

export function addNewAT(){ 

}

export function deleteAT(){ 

}

export function getDatabase(){
	const lines = csvData.split('\n');
    const result = [];
    const headers = lines[0].split(',');

	for (let i = 1; i < lines.length; i++) {
        const obj = {};
        const currentLine = lines[i].split(',');

        for (let j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentLine[j];
        }

        result.push(obj);
    }

    return result;
}
