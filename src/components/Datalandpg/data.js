const HEADER = 'Dra Ulloa';

const NAVBAR_DATA = [
	{
		id: 1,
		url: '#services',
		label: 'Tratamientos',
		publico: true,
		token: false
	},
	{
		id: 2,
		url: '#services',
		label: 'Servicios',
		publico: true,
		token: false
	},
	{
		id: 3,
		url: '#Why-us',
		label: 'Porque elegir?',
		publico: true,
		token: false
	},
	 {
	    id: 4,
	    url: "casos/Casos",
	   label: "Experiencia",
	    publico: true,
	    token:false
	},
	{
		id: 5,
		url: '#footer',
		label: 'Contacto',
		publico: true,
		token: false
	},
	 {
	 	id: 6,
	 	url: 'pacientes/pacientes',
	 	label: 'Pacientes',
	 	publico: false,
	 	token: true
	 }

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
		'te ayudamos a recuperar todos los dientes mediante implantes dentales con lo último en tecnología dental para darte un tratamiento integral de la más alta calidad ',
	TUTORIAL_URL: '/carrusel',
	WATCH_TUTORIAL: 'Ver resultados'
};
const SERVICE_DATA = {
	HEADING: 'Tratamientos',
	ALL_SERVICES: 'Todos los tratamientos',
	SERVICE_LIST: [
		{
			LABEL: 'Implantes dentales',
			DESCRIPTION:
				'Los implantes dentales son la opción para reemplazar los dientes perdidos. La pérdida o daño de un solo diente puede tener un impacto considerable en la vida cotidiana y la autoestima de una persona.',
			URL: 'images/implante1.png'
		},
		{
			LABEL: 'Estetica dental',
			DESCRIPTION: 'Alternativas blanquemiento, diseño de sonrisa, carillas , coronas dentales.',
			URL: 'images/sonrisa.png'
		},
		{
			LABEL: 'Terceros Molares',
			DESCRIPTION: 'Los terceros molares son también llamados, muelas del juicio',

			URL: 'images/service3.png'
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
