import { Collapse, Menu, Layout, Button } from 'antd';
import { useState } from 'react';
import { HomeOutlined, UserOutlined, MenuOutlined } from '@ant-design/icons';
import "./FrontendLayout.css";
const { Header } = Layout;
const { Panel } = Collapse;

const items = [
  { key: '1',  label: 'Home' },
  { key: '2',  label: 'About' },
  { key: '3',  label: 'Portfolio' },
  { key: '4',  label: 'Resume' },
  { key: '5',  label: 'Contact' },
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
    <Layout  className="h-screen main " style={{}}>
      <Header className="header   bg-black h-[70px] w-[100%] m-auto" >

        <div className='flex justify-between w-[80%]  m-auto'>

      <span className='text-white mt-3 text-3xl'>Iqra_</span>
            
            <Menu    mode="horizontal"  style={{padding:'5px'}} selectedKeys={selectedKeys} 
      onClick={handleClick}  className="h-14 text-base  flex justify-end  w-[70%]">
              {items.map(item => (
                <Menu.Item  key={item.key} icon={item.icon}  className={`animation ${selectedKeys.includes(item.key) ? 'selected' : ''}  `}>
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
              </div>
      </Header>

    <Layout className=' second w-[75%] m-auto bg-black mt-5 text-white' >
      <div className='p-10'>

<h1 className='text-5xl  mt-8'>
  Hi_
</h1>

<h1 className='text-5xl mt-5 '>
I'M
 <span className='text-12xl ml-4'>
   IQRA A.KHALID
  </span>
   </h1>
      </div>
    </Layout>
    </Layout>
  );
};

export default FrontendLayout;
