const HEADER = 'Dra Ulloa';

const NAVBAR_DATA = [

/* 	{
		id: 2,
		url: '#services',
		label: 'Experiencia',
		publico: true,
		token: false
	}, */
	{
		id: 3,
		url: '#Why-us',
		label: 'Porque elegir?',
		publico: true,
		token: false
	},
/* 	 {
	    id: 4,
	    url: "#services",
	   label: "Quienes Somos",
	    publico: true,
	    token:false
	}, */
	{
		id: 5,
		url: '#footer',
		label: 'Contacto',
		publico: true,
		token: false
	},
	 {
	 	id: 6,
	 	url: 'https://draclinica.herokuapp.com/principal',
	 	label: '*Laboratorio',
	 	publico: true,
	 	token: true
	 }/* 
 */
	// {
	//     id: 7,
	//     url: "pacientes/pacienteItem",
	//     label: "Paciente",
	//     publico: false,
	//     token: true
	// },
	// {
	//     id: 8,
	//     url: "settings",
	//     label: "Perfil",
	//     publico: false,
	//     token:true
	// },
];
const BANNER_DATA = {
	HEADING: 'Bienvenido',
	DECRIPTION:
		'te ayudamos a recuperar todos los dientes mediante implantes dentales con lo último en tecnología dental para darte un tratamiento integral de la más alta calidad  comprendemos la importancia de una sonrisa completa y funcional. Nos comprometemos a proporcionar atención de alta calidad, con un enfoque particular en la comodidad y satisfacción de nuestros pacientes. Cada miembro de nuestro equipo está dedicado a brindar un servicio personalizado, respaldado por la más avanzada tecnología y técnicas en implantología dental.',
	TUTORIAL_URL: '/',
	WATCH_TUTORIAL: 'Ver algunos resultados'
};
const SERVICE_DATA = {
	HEADING: 'Tratamientos',
	ALL_SERVICES: 'Todos los tratamientos',
	SERVICE_LIST: [
		{   ENLACE: 'implante',
			LABEL: 'Implantes dentales',
			DESCRIPTION:
				'Por qué Elegir Nuestros Implantes Dentales: Garantía de por vida .💪 Restauración de la función masticatoria.🌸 Aspecto natural y estético.🩹 Mejora de la salud bucal a largo plazo..',
			URL: 'images/implante.png'
		},
		{
			ENLACE: 'estetica',
			LABEL: 'Estetica dental',
			DESCRIPTION: 'Nuestros Servicios de Estética Dental Incluyen: 💎 Blanqueamiento dental para una sonrisa más brillante.🦷 Carillas dentales para corregir imperfecciones.🌈 Contorneado estético para una alineación armoniosa.🌸 Restauraciones dentales estéticas para resultados naturales.👩‍⚕️ Equipo de Expertos en Estética Dental:Alternativas blanquemiento, diseño de sonrisa, carillas , coronas dentales.',
			URL: 'images/carillas.png'
		},
		{
			ENLACE: 'terceros',
			LABEL: 'Terceros Molares',
			DESCRIPTION: 'Las muelas del juicio, o terceros molares, a menudo necesitan ser extraídas para prevenir problemas futuros. Nuestro cirujano altamente capacitado se especializa en la extracción de muelas del juicio, asegurando un procedimiento seguro y una recuperación sin complicaciones.',

			URL: 'images/tercerosmolares.png'
		},
		{
			ENLACE: 'blanqueamiento',
			LABEL: 'Blanquemiento',
			DESCRIPTION:
				'El blanqueamiento Zoom es un tratamiento dental avanzado que utiliza una luz LED especial junto con un gel de blanqueamiento de alta potencia para eliminar manchas y decoloraciones en tus dientes. ¡Resultados visibles desde la primera sesión!',
			URL: 'images/zoom2.png'
		},
		{
			ENLACE: 'ortodoncia',
			LABEL: 'Ortodoncia',
			DESCRIPTION: 'Ortodoncista altamente capacitado utiliza las últimas tecnologías y técnicas para diseñar un plan de tratamiento personalizado para cada paciente. Ya sea que necesites brackets tradicionales, alineadores transparentes o tratamientos más avanzados, estamos aquí para crear la solución perfecta para ti.',
			URL: 'images/ortodoncia.png'
		},
		{
			ENLACE: 'endodoncia',
			LABEL: 'Endodoncia',
			DESCRIPTION: 'La endodoncia, también conocida como tratamiento de conducto, es esencial cuando la pulpa dental está dañada o infectada. Nuestros especialistas en endodoncia utilizan técnicas avanzadas para preservar tus dientes naturales y restaurar la salud de tus raíces.',

			URL: 'images/endodoncia.png'
		},
		{
			ENLACE: 'cirugia',
			LABEL: 'Cirugía Oral',
			DESCRIPTION:
				'👨‍⚕️ Nuestros Servicios de Cirugía Oral Incluyen:🦷 Extracciones dentales, incluyendo muelas del juicio. 🪥 Implantes dentales para restaurar la función y estética. 🌬 Cirugía para tratar problemas de encías. 🦷 Procedimientos preprotésicos y reconstructivos.',
			URL: 'images/cirugia.png'
		},
		{
			ENLACE: 'limpieza',
			LABEL: 'Limpieza dental',
			DESCRIPTION: ' Nuestra Limpeza Dental:		🦷 Eliminación de placa y sarro para prevenir caries. 😁 Restauración del brillo natural de tus dientes. 🌬 Frescura duradera y prevención del mal aliento. Evaluación completa de la salud bucal.',
			URL: 'images/limpieza.png'
		},
		{
			ENLACE: 'esteticaf',
			LABEL: 'Estetica Facial',
			DESCRIPTION: 'Tratamientos Adaptados a tus Necesidades:Desde rejuvenecimiento facial hasta procedimientos no invasivos, nuestros tratamientos están diseñados para abordar tus preocupaciones estéticas de manera específica. Sea cual sea tu objetivo, estamos comprometidos a crear una experiencia personalizada que te haga sentir renovado(a).',

			URL: 'images/estetica.png'
		}

	]
};

const ABOUT_DATA = {
	HEADING: 'Porque elegirnos?',
	TITLE: 'Cual es la diferencia',
	IMAGE_URL: 'images/network.png',
	WHY_CHOOSE_US_LIST: [
		'1) Especialista Acreditado por la Superintendencia de Salud.',
		'2) Clínica y Pabellon de Cirugía certificado por el Seremi de Salud.',
		'3) Alternativas de pago'
	]
};
const TESTIMONIAL_DATA = {
	HEADING: 'Que dicen nuestros clientes?',
	TESTIMONIAL_LIST: [
		{
			DESCRIPTION:
				'Nixalar has made a huge difference to our business with his good work and knowledge of SEO and business to business marketing techniques. Our search engine rankings are better than ever and we are getting more people contacting us thanks to Jomer’s knowledge and hard work.',
			IMAGE_URL: 'images/user1.jpg',
			NAME: 'Julia hawkins',
			DESIGNATION: 'Co-founder at ABC'
		},
		{
			DESCRIPTION:
				'Nixalar and his team have provided us with a comprehensive, fast and well planned digital marketing strategy that has yielded great results in terms of content, SEO, Social Media. His team are a pleasure to work with, as well as being fast to respond and adapt to the needs of your brand.',
			IMAGE_URL: 'images/user2.jpg',
			NAME: 'John Smith',
			DESIGNATION: 'Co-founder at xyz'
		}
	]
};

const SOCIAL_DATA = {
	HEADING: 'Social media',
	IMAGES_LIST: [
		// "images/facebook-icon.png",
		'images/instagram-icon.png',
		'images/whatsapp-icon.png'
		//   "images/twitter-icon.png",
		//   "images/linkedin-icon.png",
		//  "images/snapchat-icon.png"
	]
};

const FOOTER_DATA = {
	DESCRIPTION:
		'We are typically focused on result-based maketing in the digital world. Also, we evaluate your brand’s needs and develop a powerful strategy that maximizes profits.',
	CONTACT_DETAILS: {
		HEADING: 'Contactenos',
		ADDRESS:
			'Arauco 561, Oficina 612 - sexto piso Mall Plaza Los Rios, Valdivia, Region de los rios - Chile',
		MOBILE: '+56 949801968',
		EMAIL: 'drapaulaulloa@gmail.com',
		ATENCION: 'LUNES A VIERNES',
		HORARIO: '9:30 - 19:00'
	},
	SUBSCRIBE_NEWSLETTER: 'Subscribe newsletter',
	SUBSCRIBE: 'Subscribe'
};

const MOCK_DATA = {
	HEADER,
	NAVBAR_DATA,
	BANNER_DATA,
	SERVICE_DATA,
	ABOUT_DATA,
	TESTIMONIAL_DATA,
	SOCIAL_DATA,
	FOOTER_DATA
};
export default MOCK_DATA;
