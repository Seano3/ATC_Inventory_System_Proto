import { getDatabase } from '../../Database/DatabaseInteractions';
import React, { useState, useEffect } from 'react';

const PublicTable = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		getDatabase().then(fetchedData => setData(fetchedData));
	}, []);

	return (
		<table>
			<thead>
				<tr>
					<th>ID</th>
					<th>Type</th>
					<th>Battery Type</th>
					<th>Battery Date</th>
					<th>Location</th>
					<th>Origination Date</th>
					<th>Seral Number</th>
					<th>Notes</th>
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
						<td>{item.Notes}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default PublicTable; 