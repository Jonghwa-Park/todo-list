import 'antd/dist/antd.css';
import { Button, Card, Input, List, Divider } from 'antd';

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

const ToDoList = () => {
  return (
    <>
      <Card title="To Do List">
        <Input.Group compact>
          <Input
            style={{ width: 'calc(100% - 200px)' }}
            defaultValue="오늘 할 일"
          />
          <Button type="primary">추가</Button>
        </Input.Group>

        <Divider />

        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={<a href="https://ant.design">{item.title}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
            </List.Item>
          )}
        />
      </Card>
    </>
  );
};

export default ToDoList;
