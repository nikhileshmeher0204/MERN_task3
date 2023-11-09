import React from 'react'
import { Link } from 'react-router-dom';
function Home() {
  const tableData = [
    { id: 1, name: 'Task 1', link: '/task1' },
    { id: 2, name: 'Task 2', link: '/task2' },
    { id: 3, name: 'Task 3', link: '/task3' },
    { id: 4, name: 'Task 4', link: '/task4' },
    { id: 5, name: 'Task 5', link: '/task5' },  
    { id: 6, name: 'Task 6', link: '/task6' },
    { id : 7, name: 'Repo Link (All Task Combined)', link: 'https://github.com/nikhileshmeher0204'},
  ];
  return (
    <>
      <h2 className='text-center m-4'>MERN Projects React</h2>
      <div className="container">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
                <Link to={item.link}>{item.name}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Home