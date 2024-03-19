import csvData from './database.JSON';

export function updateLocation(ID, Location) {

}

export function updateATInfo() {

}

export function addNewAT() {

}

export function deleteAT() {

}

export function getDatabase() {
	return fetch(csvData)
    .then(response => response.json())
    .catch(error => console.error('Error fetching data:', error));
}
