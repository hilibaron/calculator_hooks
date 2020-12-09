import './App.css';
import "antd/dist/antd.css";
import { Layout, Menu } from 'antd';
import Calculator from './components/Calculator/Calculator';
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1">Calculator</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' , size: 90}}>
            <br/>
            <div className="site-layout-content">
              <Calculator/>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Calculator ©2020 Created by Hili Baron
          </Footer>
        </Layout>,
    </div>
  );
}

export default App;

