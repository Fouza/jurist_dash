import { useState, useEffect } from 'react';
import './App.css';
import { Layout, Menu } from 'antd';
import { PieChartOutlined, DesktopOutlined, UserOutlined, AppstoreAddOutlined, SearchOutlined } from '@ant-design/icons';
import logo from './assets/images/logo_jurist.png';
import { Col, Divider, Row } from 'antd';
import { BrowserRouter as Router, Route, Switch, Redirect, useLocation } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Processing from './components/Processing/Processing';
import Start from './components/Start/Start';
import List from './components/List/List';

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
	return {
		key,
		icon,
		children,
		label,
	};
}

const items = [
	getItem('Dashboard', '/', <PieChartOutlined />),
	getItem('Document processing', '/processing', <DesktopOutlined />),
	getItem('Users', '/users', <UserOutlined />),
	getItem('Elastic-search', '/elasti-search', <SearchOutlined />),
	getItem('Settings', '/settings', <AppstoreAddOutlined />),
];

const App = () => {

	const [key, setKey] = useState(localStorage.getItem("key"))


	const handleNavigation = item => {
		setKey(item.key)
		localStorage.setItem('key', item.key)
	}

	const [children, setChildren] = useState(Dashboard)

	useEffect(() => {
		if (key) {
			switch (key) {
				case '/' || '/dashboard':
					setChildren(Dashboard)
					break;
				case '/processing': 
					setChildren(<Processing handleNavigation={handleNavigation} />) 
					break;
				case '/list':
					setChildren(<List handleNavigation={handleNavigation} />)
					break;
				case '/start':
					setChildren(<Start />)
					break;
				default:
					setChildren(Dashboard)
			}
		}
	}, [key]);
	console.log(key)

	return (
		<Layout
			hasSider
			style={{
				minHeight: '100vh',
			}}
		>
			<Sider style={{
				// overflow: 'auto',
				height: '100vh',
				position: 'relative',
				left: 0,
				top: 0,
				bottom: 0,
				backgroundColor: '#FFF',
				height: '100%',
			}} >

				<Row gutter={16} align={'middle'}>
					<Col className="gutter-row" span={6}>
						<div className='logo'>
							<img src={logo} />
						</div>
					</Col>
					<Col className="gutter-row" span={6} >
						<p className='title'>JuristDash</p>
						<span className='subtitle'>Search Engine Generator</span>
					</Col>
				</Row>
				<Menu theme="light" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={(item) => handleNavigation(item)} />
			</Sider>
			<Layout className="site-layout" style={{ backgroundColor: '#FFF' }}>
				<Content
					style={{
						margin: '0 16px',
						paddingBottom: '70px'
					}}
				>
					<div className="site-layout-background" style={{
						padding: 24,
						minHeight: 360,
					}}>
						{children}
					</div>
				</Content>
			</Layout>
		</Layout>
	);
}

export default App;
