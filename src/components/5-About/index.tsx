import { Container, Flex, Heading, Image, List, ListIcon, ListItem, Text } from "@chakra-ui/react"
import { AiOutlineCheck } from 'react-icons/ai'

const firstSessionData = {
   title:'Quem somos',
   history:
      <>
      <Text fontSize='0.9rem' fontWeight='400' lineHeight={1.5}>O Clube do Passaporte é uma empresa criada em 2017 pelo advogado Itay Mor, em Tel Aviv – Israel. <br></br>
      No Brasil, o Clube do Passaporte foi criado com um grande amor por Portugal e pelas portas que abrem a muitos – idealmente a todos – os descendentes de judeus sefarditas e cristãos novos. <br></br>
      Quem conhece Portugal por seus locais turísticos e cartões postais já conhece sua beleza e a maravilhosa energia e cultura que oferece. <br></br>
      Agora, nosso objetivo é ajudar você, a sua família e todos os descendentes de judeus portugueses e espanhóis afetados pela Inquisição a conseguirem a nacionalidade local e os inúmeros direitos que ela permite, uma verdadeira garantia de segurança para o futuro. <br></br>
      </Text>
      <Text fontSize='0.9rem' fontWeight='400'>
      Nossos escritórios operam atualmente em 3 ramos internacionais: <br></br>
      Port Pass Club - Israel <br></br>
      O Clube do Passaporte - Portugal <br></br>
      Clube do Passaporte - Brasil <br></br>
      </Text>
      </>,
   missionTitle:'Nossa missão',
   mission:<Text fontSize='0.9rem' fontWeight='400'>Nossa missão é permitir que o maior número possível de pessoas consiga acessar a <b style={{color:'#4ca7a1'}}>melhor qualidade de vida e criar caminhos </b>que permitem estudar, trabalhar e investir no exterior, especialmente em Portugal.</Text>,
   list:[
   "Morar em qualquer país da União Europeia",
   "Trabalhar na Europa sem precisar de visto",
   "Passar a cidadania portuguesa para filhos, netos e demais descendentes",
   "Benefícios empresariais",
   "Descontos e até gratuidade para cursar o Ensino Superior na Europa",
   ]
}

export function About() {
   return (

      <Flex id='#quemSomos' w='100%' flexDir='column' py={8} px={2}>
         {/* <Flex w='100%'>
            <Heading mx='auto' fontWeight='300' fontSize='1.8rem' color='clubAqua'> {firstSessionData.title} </Heading>
         </Flex> */}
      
         <Flex flexDir={['column','column','row', 'row']}  w='100%' alignItems='center'>

            <Flex w='50%' p={[4,8,12]}>
               <Image mx='auto' maxW={['','80%','80%','80%']} src='static/img/logo.png'/>
            </Flex>

            <Flex flexDir={'column'} w='100%' textAlign='left' gap={2} p={[8]}>
               <Heading fontSize='1.8rem' fontWeight='300' color='clubAqua'>
                  {firstSessionData.title}
               </Heading> 

                  {firstSessionData.history}
               <Heading mt={4} fontSize='1.8rem' fontWeight='300' color='clubAqua'>
                  {firstSessionData.missionTitle}
               </Heading> 

                  {firstSessionData.mission}
            </Flex>
         </Flex>
      </Flex>
   )
}