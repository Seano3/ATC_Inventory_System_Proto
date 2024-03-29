import { getDatabase } from '../../Database/DatabaseInteractions';
import React, { useState, useEffect } from 'react';
import "./CSS/PublicTable.css"

const PublicTable = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		getDatabase().then(fetchedData => setData(fetchedData));
	}, []);

	return (
		<html>
			<h1>Table</h1>
			<table id = "public">
				<thead>
					<tr>
						<th>ID</th>
						<th>Type</th>
						<th>Battery Type</th>
						<th>Battery Date</th>
						<th>Location</th>
						<th>Origination Date</th>
						<th>Serial Number</th>
						<th>Make</th>
						<th>Model</th>
					</tr>
				</thead>
				<tbody>
					{data.map(item => (
						<tr key={item.ID}>
							<td>{item.ID}</td>
							<td>{item.Type}</td>
							<td>{item.BatteryType}</td>
							<td>{item.BatteryDate}</td>
							<td>{item.Location}</td>
							<td>{item.OriginationDate}</td>
							<td>{item.SeralNumber}</td>
							<td>{item.Make}</td>
							<td>{item.Model}</td>
						</tr>
					))}
				</tbody>
			</table>
		</html>
	);
};

export default PublicTable; 