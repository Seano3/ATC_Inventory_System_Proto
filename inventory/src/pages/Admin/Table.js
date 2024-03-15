import { getEntireDatabase } from '../../DatabaseInteractions';

const Table = () => {

    getEntireDatabase();

    return (
        <div>
            <h1>Table</h1>
{/*             <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {table.map((row, index) => (
                        <tr key={index}>
                            <td>{row.Name}</td>
                            <td>{row.Age}</td>
                        </tr>
                    ))}
                </tbody>
            </table> */}
        </div>

    );
};

export default Table; 