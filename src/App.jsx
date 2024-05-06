import { useEffect, useState } from 'react';
import TableComponent from './TableComponents';

const App = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setFetchedData(data);

        // Calculate page count based on fetched data
        setPageCount(Math.ceil(data.length / 10)); // Assuming each page has 10 items
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const columns = [
    {
      Header: 'ID',
      accessor: 'id', // Assuming 'id' is the key in each post object
    },
    {
      Header: 'Title',
      accessor: 'title',
    },
    {
      Header: 'Body',
      accessor: 'body',
    },
  ];

  return (
    <div>
      <p>Table</p>
      <TableComponent columns={columns} data={fetchedData} pageCount={pageCount} />
    </div>
  );
};

export default App;
