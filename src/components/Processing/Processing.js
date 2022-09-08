import React from 'react';
import { Card } from 'antd';
import journal from '../../assets/images/journal.png';
import decisions from '../../assets/images/decisions.jpg';
import { Col, Divider, Row } from 'antd';

import './Processing.css';

const { Meta } = Card;

const Processing = () => {

	return (
		<section>
			<p className='title_content'>Traitement de documents</p>
			<div className='main'>
				<div className='choice'>
					<p className='subtitle_content'>Choisissez un type de document à importer</p>
				</div>
				<div className='container'>
					<Row gutter={16} align={'middle'}>
						<Col style={{ marginTop: '8px' }} >
							<Card
								style={{ width: 300, justifyContent: 'center' }}
								cover={
									<img
										alt="example"
										src={journal}
										style={{ width: '161px', padding: '20px 20px', marginRight: 'auto', marginLeft: 'auto' }}
									/>
								}
							>
								<Meta
									title="Journal officiel - Arabe"
									style={{ backgroundColor: '#b0b0b026' }}
								/>
							</Card>
						</Col>
						<Col style={{ marginTop: '8px' }}>
							<Card
								style={{ width: 300 }}
								cover={
									<img
										alt="example"
										src={decisions}
										style={{ width: '205px', padding: '20px 40px', marginRight: 'auto', marginLeft: 'auto' }}
									/>
								}
							>
								<Meta
									title="Décisions de court suprême"
									style={{ backgroundColor: '#b0b0b026' }}
								/>
							</Card>
						</Col>
					</Row>
				</div>
			</div>
		</section>
	)

}

export default Processing