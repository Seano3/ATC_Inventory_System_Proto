import csvData from './database.JSON';

export function updateLocation(ID, Location) {

}

export function updateATInfo(JSON) {

}

export function addNewAT(JSON) {

}

export function deleteAT(ID) {

}

export function getAT(ID) {
    
}

export function getDatabase() {
	return fetch(csvData)
    .then(response => response.json())
    .catch(error => console.error('Error fetching data:', error));
}
