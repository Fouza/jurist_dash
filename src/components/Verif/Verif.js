import React, { useState } from 'react'
import { DatePicker, Row, Col, Input, InputNumber } from 'antd';
import './Verif.css';

const dateFormat = 'DD/MM/YYYY';

const article = {
	"ATexte": "إن الوزير الأول،\n- بناء على الدستور، لا سيما المادتان 99-4 و143\n(الفقرة 2) منه،\n- وبمقتضى الأمر رقم 66-156 المؤرخ في 18 صفر عام\n1386 الموافق 8 يونيو سنة 1966 والمتضمن قانون العقوبات،\nالمعدل والمتقم\n- و بمقتضى القانون رقم 88-07 المؤرخ في 7 جمادى\nالثانية عام 1408 الموافق 26 يناير سنة 1988 والمتعلق\nبالوقاية الصحية والأمن وطب العمل،\n- وبمقتضى القانون رقم 98-06 المؤرخ في 3 ربيع الأول\nعام 1419 الموافق 27 يونيو سنة 1998 الذي يحدد القواعد\nالعامة المتعلقة بالطيران المدني، المعدل والمتقم،\nو\n3\n- وبمقتضى القانون رقم 01-13 المؤرخ في 17 جمادى\nالأولى عام 1422 الموافق 7 غشت سنة 2001 والمتضمن توجيه\nالنقل البري وتنظيمه، المعدل والمتقم\n- وبمقتضى القانون رقم 04-08 المؤرخ في\nجمادی\nالثانية عام 1425 الموافق 14 غشت سنة 2004 والمتعلق\nبشروط ممارسة الأنشطة التجارية، المعدل والمتمم،\n27\n- وبمقتضى الأمر رقم 06-03 المؤرخ في 19 جمادى الثانية\nعام 1427 الموافق 15 يوليو سنة 2006 والمتضمن القانون\nالأساسي العام للوظيفة العمومية،\n- و بمقتضى القانون رقم 11-10 المؤرخ في 20\nرجب عام\n1432 الموافق 22 يونيو سنة 2011 والمتعلق بالبلدية،\n- و بمقتضى القانون رقم 12-07 المؤرخ في 28 ربيع الأول\nعام 1433 الموافق 21 فبراير سنة 2012 والمتعلق بالولاية،- و بمقتضى القانون رقم 18-11 المؤرخ في 18 شوال عام\n1439 الموافق 2 يوليو سنة 2018 والمتعلق بالصحة، المعدل\nوالمتمم،\n9\n- وبمقتضى المرسوم الرئاسي رقم 13–293 المؤرخ في\nرمضان عام 1434 الموافق 4 غشت سنة 2013 والمتضمن\nنشر اللوائح الصحية الدولية (2005)، المعتمدة بجنيف\nبتاريخ 23 مايو سنة 2005،\n26\n- و بمقتضى المرسوم الرئاسي رقم 19-370 المؤرخ في\nأول جمادى الأولى عام 1441 الموافق 28 ديسمبر سنة 2019\nوالمتضمن تعيين الوزير الأول،\n- و بمقتضى المرسوم الرئاسي رقم 20–163 المؤرخ في\nأول ذي القعدة عام 1441 الموافق 23 يونيو سنة 2020 والمتضمن\nتعيين أعضاء الحكومة، المعدل والمتقم،\n- وبمقتضى المرسوم التنفيذي رقم 20–69 المؤرخ في\n26 رجب عام 1441 الموافق 21 مارس سنة 2020 والمتعلق\nبتدابير الوقاية من انتشار وباء فيروس كورونا (كوفيد – 19)\nومكافحته، ومجموع النصوص اللاحقة به،\nيرسم ما يأتي :\nالمادة الأولى : يهدف هذا المرسوم إلى تحديد الأحكام\nالرامية إلى تعزيز نظام الوقاية من انتشار وباء فيروس\nكورونا (كوفيد - 19) ومكافحته، في ظل التقيد بالأحكام الرامية\nإلى الحفاظ على صحة المواطنين وحمايتهم من أي خطر\nلانتشار فيروس كورونا.\nالمادة 2 : يكيف إجراء الحجر الجزئي المنزلي لمدة خمسة\nعشر (15) يوماً على النحو الآتي :\n- يطبق إجراء الحجر الجزئي المنزلي من الساعة الثامنة\nمساء إلى غاية الساعة الخامسة من صباح اليوم الموالي،\nبالنسبة للتسع والعشرين (29) ولاية الآتية : أدرار ، وباتنة، ، و\nو بجاية، وبسكرة، والبليدة، والبويرة، وتبسة، وتلمسان،\nوتيارت، وتيزي وزو، والجزائر، وجيجل، وسطيف، وعنابة،وقالمة، وقسنطينة، والمدية، والمسيلة، وورقلة، ووهران،\nوإيليزي، وبرج بوعريريج، وبومرداس، وتندوف\nوتيسمسيلت، والوادي، وخنشلة، وتيبازة، وعين تموشنت،\n- لا يخص إجراء الحجر الجزئي المنزلي الولايات التسع\nعشرة (19) الآتية : الشلف، والأغواط، وأم البواقي، وبشار،\nوتامنغست، والجلفة، وسعيدة، وسكيكدة، وسيدي بلعباس،\nومستغانم، ومعسكر، والبيض، والطارف، وسوق أهراس،\nوميلة، وعين الدفلى، والنعامة، وغرداية، وغليزان.\nالمادة 3 : يمكن الولاة، بعد موافقة السلطات المختصة،\nاتخاذ كل التدابير التي تقتضيها الوضعية الصحية لكل\nولاية، لا سيما إقرار أو تعديل أو ضبط أوقات حجر منزلي\nجزئي أو كلي يستهدف بلدية أو مكانًا أو حيا أو أكثر، التي\nتشهد بؤرا للعدوى.\nكما يمكنهم أن يتخذوا، عند الحاجة، الترتيبات الضرورية\nلغلق كلي أو جزئي لأماكن النزهة والاستراحة وفضاءات\nالترفيه والتسلية، وكذا كل مكان من شأنه أن يستقبل تدفقا\nكبيرا للجمهور.\nالمادة 4 : يمدد الإجراء الذي يحظر أي نوع من تجمعات\nالأشخاص والتجمعات العائلية، عبر كامل التراب الوطني،\nولا سيما حفلات الزواج والختان، وكذا التجمعات بمناسبة\nالجنازات.\n6\nالمادة 5 : يعلق نشاط النقل الحضري للأشخاص، العمومي\nوالخاص، خلال أيام العطل الأسبوعية.\nالمادة 6 : تُغلق لمدة خمسة عشر يوما، أسواق بيع\nالمركبات المستعملة على مستوى كامل التراب الوطني.\nالمادة 7 : تكلف المصالح المختصة بتنفيذ عمليات\nرقابة على مستوى الأسواق الأسبوعية من أجل التحقق من\nمدى تطبيق تدابير الوقاية والحماية، لا سيما الارتداء\nالإجباري للقناع الواقي وكذا التباعد الجسدي.\nكما تكلف المصالح المختصة بالقيام بعمليات رقابة\nوتفقد للمتاجر وغيرها من الأنشطة التي تستقبل الجمهور ،\nبغرض السهر على التطبيق الجيد لتدابير الوقاية والحماية،\nوذلك دون الإخلال بتوجيه إعذارات للمخالفين أو غلق هذه\nالمتاجر والأنشطة.\nويمكن أن يقوم الولاة في حالة انتهاك التدابير المتخذة\nفي إطار مكافحة انتشار فيروس كورونا (كوفيد – 19)،\nبالغلق الفوري للأماكن المذكورة في الفقرتين الأولى و2 أعلاه.المادة 8 : تُكلف السلطات المختصة، بمساعدة الحركة\nالجمعوية والجمعيات الدينية ولجان الأحياء بالتعاون الوثيق\nمع السلطات المحلية، بتنفيذ عمليات مراقبة صارمة لمدى\nتطبيق البروتوكول الصحي على مستوى المساجد.\nالمادة 9 : يكلف مفتشو سلك التربية الوطنية بتنفيذ\nعمليات رقابة مستمرة على مستوى مؤسسات الطور الابتدائي\nوالمتوسط والثانوي، العمومية والخاصة، للتحقق من الامتثال\nللبروتوكول الصحي المعمول به والإجراءات التنظيمية التي\nاتخذتها السلطات العمومية.\nالمادة 10 : تكلّف الفرق الطبية للصحة المدرسية بتنفيذ\nزيارات على مستوى جميع مؤسسات التربية والتعليم،\nلمتابعة وضمان صحة التلاميذ والمعلمين والمستخدمين\nالإداريين.\nالمادة 11 : يتعين على الولاة اتخاذ جميع الترتيبات\nلضمان عمليات تطهير الأماكن والفضاءات والمباني العمومية\nمن خلال حشد الوسائل اللازمة بمساعدة الجماعات المحلية\nومصالح الأمن وكذا الحماية المدنية.\nالمادة 12 : يتعين أن تقوم المصالح المختصة بحملات\nاتصال وتحسيس جوارية للمواطنين، بمشاركة الجمعيات\nولجان الأحياء حول ضرورة الامتثال للبروتوكولات الصحية\nالمعمول بها، والأفعال المانعة، لا سيما ارتداء القناع الواقي\nوالتباعد الجسدي وتدابير النظافة.\n:\nالمادة 13 : تبقى مطبقة تدابير الوقاية والحماية الأخرى\nالمتخذة في إطار نظام الوقاية من وباء فيروس كورونا\n(كوفيد – 19) ومكافحته، المنصوص عليها بموجب التنظيم\nالمعمول به\nالمادة 14 : تدخل أ ، أحكام هذا المرسوم حيز التنفيذ ابتداء\nمن 10 نوفمبر سنة 2020.\nالمادة 15 : ينشر هذا المرسوم في الجريدة الرسمية\nللجمهورية الجزائرية الديمقراطية الشعبية .\nحرر بالجزائر في 23 ربيع الأول عام 1442 الموافق 9 نوفمبر\nسنة 2020.\nعبد العزيز جراد",
	"AnneeJO": "2020",
	"Date publication AR": "2404144",
	"Date publication FR": "10112022",
	"Date signature AR": "23031442",
	"Date signature FR": "09112020",
	"Ministère AR": "undefined",
	"NumJO": "066",
	"NumSGG": 0,
	"Refer": "20-310",
	"Sommaire AR": "يتضمن الأحكام المتعلقة بتعزيز نظام الوقاية من انتشار وباء فيروس كورونا (كوفيد – 19) ومكافحته.",
	"Titre Ar": "مرسوم تنفيذي رقم 20–310 مؤرخ في 23 ربيع الأول عام 1442 الموافق 9 نوفمبر سنة 2020، يتضمن الأحكام المتعلقة بتعزيز نظام الوقاية من انتشار وباء فيروس كورونا (كوفيد – 19) ومكافحته.",
	"Type Texte AR": "مرسوم تنفيذي",
	"end_page": 4,
	"secteur": "undefined",
	"start_page": 3
}

const Verif = () => {

	const [form, setForm] = useState(article)

	const onChangeHijri = (date, dateString) => {
		setForm({ ...form, 'Date signature AR': date.format('DDMMYYYY') })
		console.log(date.format('DDMMYYYY'), dateString)
	}

	const onChangeGeorg = (date, dateString) => {
		setForm({ ...form, 'Date signature FR': date.format('DDMMYYYY') })
		console.log(date.format('DDMMYYYY'), dateString)
	}

	return (
		<Row gutter={16}>
			<Col span={10}>
				<div className='form_container'>
					<p className='title'>Informations de l'article</p>
					<div className='form'>
						<Row gutter={16}>
							<Col span={8} style={{ marginRight: '16px' }}>
								<p className='label_input'>Date de signature hijri</p>
								<DatePicker onChange={onChangeHijri} format={dateFormat} size="large" />
							</Col>
							<Col span={8}>
								<p className='label_input'>Date de signature géorgian</p>
								<DatePicker onChange={onChangeGeorg} format={dateFormat} size="large" />
							</Col>
						</Row>
						<Row style={{ marginTop: '16px' }}>
							<Col span={8} style={{ marginRight: '16px' }}>
								<p className='label_input'>Type d'article</p>
								<Input value={form['Type Texte AR']} />
							</Col>
							<Col span={4} style={{ marginRight: '16px' }}>
								<p className='label_input'>Page début</p>
								<InputNumber value={form.start_page} />
							</Col>
							<Col span={4} >
								<p className='label_input'>Page fin</p>
								<InputNumber value={form.end_page} />
							</Col>
						</Row>
						<Row>
							<Col>
								<p className='label_input'>Refer</p>
								<Input value={form['Refer']} />
							</Col>
						</Row>
					</div>

					<p className='title' style={{ marginTop: '27px' }}>Détails</p>
					<p className='label_input'>Sommaire</p>
					<Input value={form['Sommaire AR']} />
					<p className='label_input' style={{ marginTop: '14px' }}>Content</p>
					<Input value={form.ATexte} />
					<Row>
						<Col span={8} style={{ marginRight: '16px' }}>
							<p className='label_input'>Ministère</p>
							<Input value={form['Ministère AR']} />
						</Col>
						<Col span={8}>
							<p className='label_input'>Secteur</p>
							<Input value={form.secteur} />
						</Col>
					</Row>
				</div>
			</Col>
			<Col span={6}>

			</Col>
		</Row>
	)
}

export default Verif