import React, { Fragment, useEffect, useState } from 'react';

import { Steps } from 'antd';
import { Col, Divider, Row, InputNumber, Button } from 'antd';
import './Start.css';
import Verif from '../Verif/Verif';

const { Step } = Steps;

const Start = ({ }) => {

	const [step, setStep] = useState(0)
	const [numAnnexe, setNumAnnexe] = useState(0);
	const [numFin, setNumFin] = useState(0)

	const handleNumFin = (value) => {
		setNumFin(value)
	}

	const handleNumAnnexe = (value) => {
		setNumAnnexe(value)
	}

	const nextStep = e => {
		setStep(step + 1)
	}

	return (
		<section>
			<p className='title_content'>Verification of Document SG9301</p>
			<div className='main'>
				{/* <Row gutter={16} align="middle">
					<Col className="gutter-row" span={4}>
						<span className='step_title'>Etape Courante : </span>
					</Col>
					<Col className="gutter-row" span={12} offset={}>
						<Steps current={1} className='steps'>
							<Step title="Information d'entrée" />
							<Step title="Océrisation" />
							<Step title="Vérification de l'océrisation" />
						</Steps>
					</Col>
				</Row> */}
				<Steps current={step} className='steps' onChange={current => setStep(current)}>
					<Step title="Information d'entrée" />
					<Step title="Océrisation" />
					<Step title="Vérification de l'océrisation" />
				</Steps>

				{step === 0 ?
					<div className='form_container'>
						<p className='form_title'>Les pages sommaires et annexes</p>
						<Row gutter={16} align="middle" >
							<Col span={8} style={{ marginRight: '20px' }}>
								<p className='label'>Veuillez insérer le numéro fin des pages sommaires</p>
								<InputNumber value={numFin} size="large" onChange={(value) => handleNumFin(value)} />
							</Col>
							<Col span={8}>
								<p className='label'>Veuillez insérer les numéro des pages contant un annexe qui remplit toute la page</p>
								<InputNumber value={numAnnexe} size="large" onChange={value => handleNumAnnexe(value)} />
							</Col>
						</Row>
					</div>
					: step === 1 ?
						<div className='form_container_2'>
							<Row gutter={16} align="middle" >
								Votre document est entrain d’être océrisé... Veuillez patienter
							</Row>
						</div>
						: 
							<Verif />
						
				}

				<div className='form_footer'>
					<Row gutter={16} align="middle">
						<Col className='gutter-row' span={8}>
							<Button onClick={e => setStep(0)}>Annuler</Button>
						</Col>
						<Col className='gutter-row' span={8} >
							<Button type="primary" onClick={e => nextStep(e)} disabled={step === 1}>Passer à l'étape suivante</Button>
						</Col>
					</Row>
				</div>
			</div>
		</section>
	)
}

export default Start;