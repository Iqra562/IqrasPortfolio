import { Collapse, Menu, Layout, Button } from 'antd';
import { useState } from 'react';
import { HomeOutlined, UserOutlined, MenuOutlined } from '@ant-design/icons';
// import "./FrontendLayout.css";
const { Header } = Layout;
const { Panel } = Collapse;

const items = [
  { key: '1',  label: 'Home' },
  { key: '2',  label: 'Page' },
  { key: '3',  label: 'Icon' },
];

const FrontendLayout = () => {
  const [selectedKeys, setSelectedKeys] = useState(['1']); // Set the initial selected key

  const handleClick = (e) => {
    setSelectedKeys([e.key]); // Update the selected key when menu item is clicked
  };
  const [collapsed, setCollapsed] = useState(true);

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout  className="h-screen  " style={{backgroundColor:"#444c58"}}>
      <Header className="header flex   bg-gray-400" >
            
            <Menu  mode="horizontal"  selectedKeys={selectedKeys} // Pass selectedKeys prop to activate the corresponding menu item
      onClick={handleClick}  className="">
              {items.map(item => (
                <Menu.Item  key={item.key} icon={item.icon}  className={`animation ${selectedKeys.includes(item.key) ? 'selected' : ''}`}>
                  {item.label}
                </Menu.Item>
              ))}
            </Menu>
            <Button 
              type="primary"
              icon={<MenuOutlined />}
              onClick={handleCollapse}
              className="toggle-btn lg:hidden"
            />
      </Header>
    </Layout>
  );
};

export default FrontendLayout;
