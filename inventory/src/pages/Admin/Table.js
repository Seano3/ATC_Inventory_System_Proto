import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import csvData from '../../database.csv';

const Table = () => {
	console.log('Table component rendered');

	const [data, setData] = useState([]);

	useEffect(() => {
		fetch(csvData)
			.then(response => response.text())
			.then(dbData => {
				console.log(dbData);
				Papa.parse(dbData, {
					header: true,
					delimiter: ',',
					complete: (results) => {
						console.log(results);
						setData(results.data);
					}
				});
			});
	}, []);

	return (
		<div>
			<h1>Table</h1>
			<table>
				<thead>
					<tr>
						{data.length > 0 && Object.keys(data[0]).map((key, index) => (
							<th key={index}>{key}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.map((row, index) => (
						<tr key={index}>
							{Object.values(row).map((value, i) => (
								<td key={i}>{value}</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>

	);
};

export default Table; 