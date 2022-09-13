import React from 'react'
import { Col, Divider, Row, Table, Button, message, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const dataSource = [
	{
		key: '1',
		name: 'Mike',
		date: 32,
		taille: '10 Downing Street',
		status: 'Importé'
	},
	{
		key: '2',
		name: 'John',
		date: 42,
		taille: '10 Downing Street',
		status: 'Importé'
	},
];

const columns = [
	{
		title: 'Nom du fichier',
		dataIndex: 'name',
		key: 'name',
	},
	{
		title: "Date d'importation",
		dataIndex: 'date',
		key: 'date',
	},
	{
		title: 'Taille (pages)',
		dataIndex: 'taille',
		key: 'taille',
	},
	{
		title: 'Status',
		dataIndex: 'status',
		key: 'status'
	}
];



const List = ({ handleNavigation }) => {


	const beforeUpload = (file) => {
		return new Promise((resolve) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			console.log(reader, 'reaeder')
			reader.onload = () => {
				localStorage.setItem('document', reader.result)
				handleNavigation({key: '/start'})
				console.log(reader, 'reaeder')
			};
		});
	}


	const onChange = (info) => {
		console.log(info)
		// if (info.file.status !== 'uploading') {
		// 	console.log(info.file, info.fileList);
		// }

		// if (info.file.status === 'done') {
		// 	message.success(`${info.file.name} file uploaded successfully`);
		// } else if (info.file.status === 'error') {
		// 	message.error(`${info.file.name} file upload failed.`);
		// }
	};

	const props = {
		name: 'file',
		action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
		headers: {
			authorization: 'authorization-text',
		},
		beforeUpload: beforeUpload
	};


	return (
		<section>
			<Row gutter={16} align="middle">
				<Col className='gutter-row' span={8} >
					<p className='title_content'>Journaux officiels - Arabe</p>
				</Col>
				<Col className='gutter-row' span={8} >
					<Upload {...props}>
						<Button type='primary' icon={<UploadOutlined />} onChange={info => onChange(info)} >Importer des nouveaux documents</Button>
					</Upload>
				</Col>
			</Row>

			<div className='main'>

				<div className='form_container'>
					<Table dataSource={dataSource} columns={columns} />;
				</div>

				<div className='form_footer'>
					<Row gutter={16} align="middle">
						<Col className='gutter-row' span={8} >
							<Button type="primary" onClick={e => handleNavigation({ key: '/start' })}>Envoyer au moteur de recherche</Button>
						</Col>
					</Row>
				</div>
			</div>
		</section>
	)
}

export default List