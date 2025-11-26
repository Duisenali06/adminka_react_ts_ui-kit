import React from 'react';
import { Layout, Menu, theme } from 'antd';
import { dataImages } from './data/images';
import { labels } from './data/labels';
import { Logo } from './component/Logo';
import { Outlet, useNavigate, useLocation } from 'react-router';

const { Header, Content, Sider } = Layout;

const items = labels.map((icon, index) => ({
  key: String(index + 1),
  icon: <img src={dataImages[index]} alt="" />,
  label: icon,
}));

const AppLayout: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();
  const location = useLocation();

  // Определяем текущий header и выбранную вкладку по URL
  const path = location.pathname.replace('/', '');
  const currentIndex = labels.findIndex(label => label.toLowerCase() === path);
  const header = currentIndex >= 0 ? labels[currentIndex] : labels[0];
  const selectedKey = currentIndex >= 0 ? String(currentIndex + 1) : '1';

  const handleMenuClick = (index: number) => {
    navigate(`/${labels[index].toLowerCase()}`);
  };

  return (
    <Layout style={{ minHeight: '100vh', width: '100%' }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <Logo />
        <Menu
          theme="dark"
          mode="inline"
          items={items}
          selectedKeys={[selectedKey]}
          onClick={(e) => handleMenuClick(Number(e.key) - 1)}
        />
      </Sider>
      <Layout>
        <Header
          className="flex items-center"
          style={{ padding: 0, background: colorBgContainer }}
        >
          <div className="font-medium text-xl pl-3">{header}</div>
        </Header>

        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
