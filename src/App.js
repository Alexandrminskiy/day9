import { Button } from 'antd'; //1
import { useNavigate, Link } from "react-router-dom"; //1
import { Table } from 'antd';

const data = [
  {
    id: '123',
    name: 'John Brown',
  },
  {
    id: '1234',
    key: '2',
    name: 'Jim Green',
  },
  {
    id: '12345',
    key: '3',
    name: 'Joe Black',
  },
];


function App() {
  const navigate = useNavigate(); //1

  const handleClick = () => {
    return navigate('new');
  }

  const columns = [
    {
      title: 'Name',
      key: 'name',
      render: (record) => <p>{record.name}</p>,
    },
    {
      title: 'Action',
      key: 'action',
      render: (record) => (
        <div key={record.id} size="middle">
          <Link to={`users/${record.id}`}>Подробнее о{record.name}</Link>
        </div>
      ),
    },
  ];

  return (
    <div className="App">
      <div>side Rendering</div>
      <div>Hello World 1</div>
      {/* Добавили кнопку переход на другую страницу без обновления 1*/}
      <Button type="primary" onClick={handleClick}>Go new page</Button>

      <Table pagination={false} columns={columns} dataSource={data} />;
    </div>
  );
}



export default App;
