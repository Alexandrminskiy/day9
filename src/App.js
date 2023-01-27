import { Button } from 'antd'; //1
import { useNavigate } from "react-router-dom"; //1
import { Table, Tag } from 'antd';

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
          <a>Подробнее {record.name}</a>
        </div>
      ),
    },
  ];

  return (
    <div className="App">
      <div>side Rendering</div>
      <div>Hello World 1</div>
      {/* Добавили кнопку переход на другую страницу без обновления 1*/}
      <Button type="primary" onClick={() => navigate('/new')}>Go new page</Button>

      <Table pagination={false} columns={columns} dataSource={data} />;
    </div>
  );
}



export default App;
