const navItems = [
   { id: '#Home', text: 'Home', active: 'active' },
   { id: '#quemSomos', text: 'Quem somos' },
   { id: '#services', text: 'Serviços' },
   { id: '#feedbacks', text: 'Referências' },
   { id: '#namidia', text: 'Na Mídia' },
   { id: '#contato', text: 'Contato' }]



const services = [
   { id: '#visa', name: 'Vistos', href:'/vistos' },
   // { id: '#apostilamento', name: 'Apostilamento', href:'localhost:3000/vistos' },
   // { id: '#negocios', name: 'Negocios para Portugal ', href:'localhost:3000/vistos' },
   // { id: '#cursoseempregos', name: 'Cursos e empregos em Portugal', href:'localhost:3000/vistos' },
]

const nationalities = [
   { id: '#nationalityPortuguese', name: 'Nacionalidade Portuguesa', href:'/nacionalidade-portuguesa' },
   { id: '#nationalityItalian', name: 'Nacionalidade Italiana', href:'/nacionalidade-italiana' },
]

export { navItems, services, nationalities }