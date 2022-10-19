import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Select from '../Select/Select.jsx';
import './Table.css';


function SmallExample() {
  const { allData } = useSelector((state) => state.homepageReducer);

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th className='file_table'>File: <Select /></th>
          <th>Text</th>
          <th>Number</th>
          <th>Hex</th>
        </tr>
      </thead>
      <tbody>
        { allData.length > 0 && allData.slice(1,allData.length).map((file, index) => {
            return (
            <tr key={index}>
                <td>{index}</td>
                <td>{file.file}</td>
                <td>{file.lines[0].text}</td>
                <td>{file.lines[0].number}</td>
                <td>{file.lines[0].hex}</td>
            </tr>)
        })}
      </tbody>
    </Table>
  );
}

export default SmallExample;