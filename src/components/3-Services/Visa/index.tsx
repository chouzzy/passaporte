import { Box, Flex, SimpleGrid, GridItem, Heading, Image, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import { LineItem } from "./LineItem";
import {Link as Slink} from 'react-scroll'

interface VisaProps {
   changePage: (lineData:any) => void
}

export function Visa({changePage}: VisaProps) { 

   const linesBkp = [
      {image:'static/img/visa-1.jpg', 
       name:<VStack> <Text>Visto D1</Text> <Text>Trabalhe legalmente em Portugal</Text> </VStack>,
       cols:[6,6,3,3], lineData:{mode:'visa',title: 'Visto D1: Trabalhe legalmente em Portugal', 
       text:<Flex display='inline'>O Visto D1 é uma excelente oportunidade para aqueles que têm interesse em exercer atividade subordinada em Portugal, portando uma promessa de emprego formal ou contrato de trabalho assinado. <br></br> <br></br>  Existem algumas outras obrigações para aqueles que têm uma oportunidade de trabalho em Portugal, para além da necessidade de uma promessa de emprego e/ou de um contrato de trabalho. A obtenção do Visto D1 demanda a necessidade de anúncio, por parte da empresa contratante, da vaga no Instituto do Emprego e da Formação Profissional (IEFP). Este anúncio é de responsabilidade exclusiva da empresa, que deverá fornecer declaração de cumprimento deste fluxo.
       <br></br><br></br>
       
      <Text display='inline' color='teal.500' fontWeight={'bold'} _hover={{color:'teal.600', transition:'400ms' , cursor:'pointer'}}> 
         <Slink to={'#contato'} spy={true} smooth={true} offset={-60} duration={500}> 
         Clique aqui para saber mais
         </Slink> 
      </Text>

      <br></br><br></br>
      Lembre-se, caso você ainda não possua trabalho em Portugal, não se preocupe! Portugal oferece agora outra excelente oportunidade para você,{' '}

      <Text display='inline' color='teal.500' fontWeight={'bold'} _hover={{color:'teal.600', transition:'400ms' , cursor:'pointer'}}> 
         <Slink to={'#Home'} onClick={() => {changePage(lines[1].lineData)}}> 
         clique aqui e saiba mais sobre o Visto para busca de trabalho!
         </Slink> 
      </Text>
      </Flex>,
        serviceImage:'static/img/visa-1.jpg'}},

      {image:'static/img/visa-2.jpg', 
       name:<VStack> <Text>Visto D2</Text> <Text>Ideal para Empreendedores e Profissionais autônomos.</Text> </VStack>,
       cols:[6,6,3,3], lineData:{mode:'visa',title: 'Visto D2: Ideal para Empreendedores e Profissionais autônomos', 
       text:<Flex display='inline'>O Visto D2 é o ideal para você que tem a vontade de ter seu próprio negócio em Portugal, empreendendo no país de modo a incentivar a economia local e gozar de todos os benefícios de ser um empreendedor em Portugal. Além disso, também podem solicitar o Visto D2 trabalhadores autônomos que tenham um contrato de trabalho ou proposta de emprego como profissional liberal em Portugal. Claro, além da vontade de empreender no país, é necessário comprovar algumas condições preliminares. Porém, não se preocupe, o Clube do Passaporte pode te ajudar com tudo isso!  <br></br><br></br>Para saber mais,{' '}

      <Text display='inline' color='teal.500' fontWeight={'bold'} _hover={{color:'teal.600', transition:'400ms' , cursor:'pointer'}}> 
         <Slink to={'#contato'} spy={true} smooth={true} offset={-60} duration={500}>
            entre em contato conosco.
         </Slink> 
      </Text>
      </Flex>,
      serviceImage:'static/img/visa-2.jpg'}},

      {image:'static/img/visa-3.jpg', 
       name:<VStack> <Text>Visto D3</Text> <Text>Ótima oportunidade para a obtenção do Cartão Azul europeu.</Text> </VStack>,
       cols:[6,6,3,3], lineData:{mode:'visa',title: 'Visto D3: Ótima oportunidade para a obtenção do Cartão Azul europeu', 
       text:<Flex display='inline'>O Visto D3 é ideal para você que desempenha uma atividade altamente qualificada e com competência técnica especializada. Ou seja, é adequado para aqueles que no exercício inerente aos seus cargos, tomam decisões especializadas ou trabalham na resolução de problemas complexos. São exemplos de cargos que podem ter o direito à aplicação para este Visto: engenheiros, cientistas, investigadores, gestores, juristas, docentes de ensino superior, entre outras ocupações. <br></br> <br></br>  Esta modalidade de Visto possibilita ao seu titular o ingresso com o processo de autorização de residência em Portugal e, sobretudo, a solicitação do Cartão Azul. Este último documento é bem vantajoso, já que permite ao aplicante trabalhar de forma legal em qualquer país da União Europeia depois de 18 meses de sua concessão.{' '}
      <Text display='inline' color='teal.500' fontWeight={'bold'} _hover={{color:'teal.600', transition:'400ms' , cursor:'pointer'}}> 
         <Slink to={'#contato'} spy={true} smooth={true} offset={-60} duration={500}> 
         Clique aqui e saiba mais!
         </Slink> 
      </Text>
      <br></br><br></br> 
      Lembre-se, caso você não se encaixe nessa possibilidade, Portugal oferece agora outra excelente{' '}

      <Text display='inline' color='teal.500' fontWeight={'bold'} _hover={{color:'teal.600', transition:'400ms' , cursor:'pointer'}}> 
         <Slink to={'#Home'} onClick={() => {changePage(lines[1].lineData)}}> 
          oportunidade para você.
         </Slink> 
      </Text>
      </Flex>,
        serviceImage:'static/img/visa-3.jpg'}},

      {image:'static/img/visa-4.jpg', 
       name:<VStack> <Text>Visto D4</Text> <Text>O ensino em Portugal a um passo de distância!</Text> </VStack>,
       cols:[6,6,3,3], lineData:{mode:'visa',title: 'Visto D4: O ensino em Portugal a um passo de distância!', 
       text:<Flex display='inline'>O Visto D4 é o instrumento ideal para os estudantes que não têm cidadania europeia e possuem carta de aceitação ou matrícula em uma instituição de ensino portuguesa. A intenção dele é a regularização de estudantes que pretendem estudar por mais de um ano no país luso, aplicando-se para estudantes de doutorado, mestrado, graduação, entre outras modalidades. <br></br> <br></br> Sua atratividade está relacionada à reconhecida qualidade de ensino em Portugal, para além das facilidades para ingresso nas universidades portuguesas, sendo exemplo a possibilidade de uso da nota do Exame Nacional do Ensino Médio (ENEM) para admissão em diversas instituições de ensino portuguesas. O Visto D4 confere o direito de permanência em Portugal por 120 dias, bem como o direito de solicitar uma Autorização de Residência para viver em solo português por até cinco anos. A obtenção do Visto D4 também não impede que o indivíduo exerça atividade profissional, desde que isso não interfira na carga horária de estudos e que seja devidamente comunicada ao Serviço de Estrangeiros e Fronteiras. Isso tudo sem que haja limite de horas de trabalho por dia.  
      <br></br><br></br>
      <Text display='inline' color='teal.500' fontWeight={'bold'} _hover={{color:'teal.600', transition:'400ms' , cursor:'pointer'}}> <Slink to={'#contato'} spy={true} smooth={true} offset={-60} duration={500}>Clique aqui e saiba mais!</Slink> </Text>
      <br></br><br></br>
      <Text display='inline' color='teal.500' fontWeight={'bold'} _hover={{color:'teal.600', transition:'400ms' , cursor:'pointer'}}> 
         <Slink to={'#Home'} onClick={() => {changePage(lines[4].lineData)}}>
            Se você já está estudando na Europa, o Visto D5 deve ser o ideal para você, clique para saber mais
         </Slink> 
      </Text>
      </Flex>,
        serviceImage:'static/img/visa-4.jpg'}},

      {image:'static/img/visa-5.jpg', 
       name:<VStack> <Text>Visto D5</Text> <Text> Estudos em Portugal para estrangeiros já residentes na Europa.</Text> </VStack>,
       cols:[6,6,3,3], lineData:{mode:'visa',title: 'Visto D5: Estudos em Portugal para estrangeiros já residentes na Europa', 
       text:<Flex display='inline'>O Visto D5 é perfeito para pessoas que estejam estudando em alguma instituição de ensino na Europa e queiram passar a estudar e residir em Portugal. É justamente o seu conceito que o diferencia do Visto D4, pois ele é aconselhável para estudantes do ensino superior que já residem e estudam em qualquer país membro da União Europeia legalmente há menos de dois anos e queiram transferir ou complementar seus estudos para Portugal. Assim como o D4, este Visto também permite o exercício de atividade profissional remunerada. <br></br> <br></br> Este visto é um  pouco diferente dos demais, uma , pois o solicitante deve já ser titular de uma autorização de residência ou de estudo concedida por um outro Estado membro da União Europeia. É uma modalidade de visto extremamente adequada para casos de intercâmbio dentro da Europa, dupla titulação e a chamada graduação sanduíche. <br></br><br></br> Caso você esteja estudando na Europa,{' '}
      <Text display='inline' color='teal.500' fontWeight={'bold'} _hover={{color:'teal.600', transition:'400ms' , cursor:'pointer'}}> 
         <Slink to={'#contato'} spy={true} smooth={true} offset={-60} duration={500}>
            entre em contato conosco!
         </Slink> 
      </Text>
      <br></br><br></br>
      <Text display='inline' color='teal.500' fontWeight={'bold'} _hover={{color:'teal.600', transition:'400ms' , cursor:'pointer'}}> 
         <Slink to={'#Home'} onClick={() => {changePage(lines[3].lineData)}}>
            Caso você ainda esteja no Brasil, clique para saber mais sobre o visto D4.
         </Slink> 
      </Text>
      </Flex>,
        serviceImage:'static/img/visa-5.jpg'}},
      {image:'static/img/visa-6.jpg', 
       name:<VStack> <Text>Visto D6</Text> <Text> Para estender os benefícios à família.</Text> </VStack>,
       cols:[6,6,3,3], lineData:{mode:'visa',title: 'Visto D6: Para estender os benefícios à família', 
       text:<Flex display='inline'>O Visto D6 é um importante passo para o estabelecimento da família inteira em Portugal. Na medida em que um indivíduo inicia o processo para receber a autorização de residência no país luso, ou já possui esta autorização, pode solicitar o Visto D6 para os demais familiares. <br></br> <br></br> Este visto, quando concedido, permite que o cônjuge da pessoa que está vivendo  em Portugal também possa viver no país. Além disso, esse visto permite a entrada dos filhos menores de idade do casal ao país luso, e, em alguns casos, ainda concede o direito para os filhos com mais de 18 anos, bem como para  os progenitores  de um dos cônjuges. <br></br><br></br> 
       Em moldes similares ao do primeiro integrante da família, estes familiares adquirem o Visto D6 e também podem{' '}
      <Text display='inline' color='teal.500' fontWeight={'bold'} _hover={{color:'teal.600', transition:'400ms' , cursor:'pointer'}}> 
         <Slink to={'#contato'} spy={true} smooth={true} offset={-60} duration={500}>
            trabalhar por lá de maneira legal.
         </Slink> 
      </Text>
      </Flex>,
        serviceImage:'static/img/visa-6.jpg'}},
      {image:'static/img/visa-7.jpg', 
       name:<VStack> <Text>Visto D7</Text> <Text> A tranquilidade para aposentados e titulares de rendimentos próprios.</Text> </VStack>,
       cols:[6,6,3,3], lineData:{mode:'visa',title: 'Visto D7: A tranquilidade para aposentados e titulares de rendimentos próprios', 
       text:<Flex display='inline'>O Visto D7 é aplicável para aposentados e pensionistas, titulares de rendimentos próprios e também para aqueles que exercem atividade religiosa no Brasil. Para os aposentados, não há limite de idade e qualquer tipo de aposentadoria é aceita, respeitados os requisitos mínimos exigidos por Portugal. Para os titulares de rendimento, são considerados recursos provenientes de aluguel, propriedade intelectual, aplicações financeiras e dividendos de empresas, também respeitados os requisitos mínimos. Já para os praticantes de atividade religiosa também é facultado o pedido do Visto D7, desde que sejam ministros do culto, ou que exerçam profissionalmente atividade religiosa. <br></br> <br></br>  O Visto D7 possui validade de quatro meses, podendo ser pedida posteriormente a Autorização de Residência em Portugal. Os valores exigidos para as três categorias possíveis são os mesmos, sendo necessária a comprovação de renda suficiente correspondente a 100% do salário mínimo vigente em Portugal para o titular pelo período de 12 meses. Não obstante, o portador do Visto D7 pode trabalhar de forma regular em solo português, aumentando ainda mais a renda que detinha. <br></br><br></br> Ficou interessado? 
      <Text display='inline' color='teal.500' fontWeight={'bold'} _hover={{color:'teal.600', transition:'400ms' , cursor:'pointer'}}> <Slink to={'#contato'} spy={true} smooth={true} offset={-60} duration={500}> Saiba mais!</Slink> </Text>
      </Flex>,
        serviceImage:'static/img/visa-7.jpg'}},
      {image:'static/img/visa-8.jpg', 
      name:<VStack> <Text>Visto D8</Text> <Text> Apenas para trabalho temporário.</Text> </VStack>,
      cols:[6,6,3,3], lineData:{mode:'visa',title: 'Visto D8: O visto de trabalho temporário', 
      text:<Flex display='inline'> <br></br> <br></br>  🚧 Área em construção 🚧 <br></br><br></br>
      <Text display='inline' color='teal.500' fontWeight={'bold'} _hover={{color:'teal.600', transition:'400ms' , cursor:'pointer'}}> <Slink to={'#contato'} spy={true} smooth={true} offset={-60} duration={500}> </Slink> </Text>
      </Flex>,
      serviceImage:'static/img/visa-8.jpg'}},
   ]

   const lines = [
      {image:'static/img/visa-1.jpg', 
       name:<VStack> <Text>Visto D1</Text> <Text>Trabalhe legalmente em Portugal</Text> </VStack>,
       cols:[6,6,3,3], lineData:{mode:'visa',title: 'Visto D1: Trabalhe legalmente em Portugal', 
       text:<Flex display='inline'>O Visto D1 é uma excelente oportunidade para aqueles que têm interesse em exercer atividade subordinada em Portugal, portando uma promessa de emprego formal ou contrato de trabalho assinado. <br></br> <br></br>  Existem algumas outras obrigações para aqueles que têm uma oportunidade de trabalho em Portugal, para além da necessidade de uma promessa de emprego e/ou de um contrato de trabalho. A obtenção do Visto D1 demanda a necessidade de anúncio, por parte da empresa contratante, da vaga no Instituto do Emprego e da Formação Profissional (IEFP). Este anúncio é de responsabilidade exclusiva da empresa, que deverá fornecer declaração de cumprimento deste fluxo.
       <br></br><br></br>
       
      <Text display='inline' color='teal.500' fontWeight={'bold'} _hover={{color:'teal.600', transition:'400ms' , cursor:'pointer'}}> 
         <Slink to={'#contato'} spy={true} smooth={true} offset={-60} duration={500}> 
         Clique aqui para saber mais
         </Slink> 
      </Text>

      <br></br><br></br>
      Lembre-se, caso você ainda não possua trabalho em Portugal, não se preocupe! Portugal oferece agora outra excelente oportunidade para você,{' '}

      <Text display='inline' color='teal.500' fontWeight={'bold'} _hover={{color:'teal.600', transition:'400ms' , cursor:'pointer'}}> 
         <Slink to={'#Home'} onClick={() => {changePage(linesBkp[1].lineData)}}> 
         clique aqui e saiba mais sobre o Visto para busca de trabalho!
         </Slink> 
      </Text>
      </Flex>,
        serviceImage:'static/img/visa-1.jpg'}},

      {image:'static/img/visa-2.jpg', 
       name:<VStack> <Text>Visto D2</Text> <Text>Ideal para Empreendedores e Profissionais autônomos.</Text> </VStack>,
       cols:[6,6,3,3], lineData:{mode:'visa',title: 'Visto D2: Ideal para Empreendedores e Profissionais autônomos', 
       text:<Flex display='inline'>O Visto D2 é o ideal para você que tem a vontade de ter seu próprio negócio em Portugal, empreendendo no país de modo a incentivar a economia local e gozar de todos os benefícios de ser um empreendedor em Portugal. Além disso, também podem solicitar o Visto D2 trabalhadores autônomos que tenham um contrato de trabalho ou proposta de emprego como profissional liberal em Portugal. Claro, além da vontade de empreender no país, é necessário comprovar algumas condições preliminares. Porém, não se preocupe, o Clube do Passaporte pode te ajudar com tudo isso!  <br></br><br></br>Para saber mais,{' '}

      <Text display='inline' color='teal.500' fontWeight={'bold'} _hover={{color:'teal.600', transition:'400ms' , cursor:'pointer'}}> 
         <Slink to={'#contato'} spy={true} smooth={true} offset={-60} duration={500}>
            entre em contato conosco.
         </Slink> 
      </Text>
      </Flex>,
      serviceImage:'static/img/visa-2.jpg'}},

      {image:'static/img/visa-3.jpg', 
       name:<VStack> <Text>Visto D3</Text> <Text>Ótima oportunidade para a obtenção do Cartão Azul europeu.</Text> </VStack>,
       cols:[6,6,3,3], lineData:{mode:'visa',title: 'Visto D3: Ótima oportunidade para a obtenção do Cartão Azul europeu', 
       text:<Flex display='inline'>O Visto D3 é ideal para você que desempenha uma atividade altamente qualificada e com competência técnica especializada. Ou seja, é adequado para aqueles que no exercício inerente aos seus cargos, tomam decisões especializadas ou trabalham na resolução de problemas complexos. São exemplos de cargos que podem ter o direito à aplicação para este Visto: engenheiros, cientistas, investigadores, gestores, juristas, docentes de ensino superior, entre outras ocupações. <br></br> <br></br>  Esta modalidade de Visto possibilita ao seu titular o ingresso com o processo de autorização de residência em Portugal e, sobretudo, a solicitação do Cartão Azul. Este último documento é bem vantajoso, já que permite ao aplicante trabalhar de forma legal em qualquer país da União Europeia depois de 18 meses de sua concessão.{' '}
      <Text display='inline' color='teal.500' fontWeight={'bold'} _hover={{color:'teal.600', transition:'400ms' , cursor:'pointer'}}> 
         <Slink to={'#contato'} spy={true} smooth={true} offset={-60} duration={500}> 
         Clique aqui e saiba mais!
         </Slink> 
      </Text>
      <br></br><br></br> 
      Lembre-se, caso você não se encaixe nessa possibilidade, Portugal oferece agora outra excelente{' '}

      <Text display='inline' color='teal.500' fontWeight={'bold'} _hover={{color:'teal.600', transition:'400ms' , cursor:'pointer'}}> 
         <Slink to={'#Home'} onClick={() => {changePage(linesBkp[1].lineData)}}> 
          oportunidade para você.
         </Slink> 
      </Text>
      </Flex>,
        serviceImage:'static/img/visa-3.jpg'}},

      {image:'static/img/visa-4.jpg', 
       name:<VStack> <Text>Visto D4</Text> <Text>O ensino em Portugal a um passo de distância!</Text> </VStack>,
       cols:[6,6,3,3], lineData:{mode:'visa',title: 'Visto D4: O ensino em Portugal a um passo de distância!', 
       text:<Flex display='inline'>O Visto D4 é o instrumento ideal para os estudantes que não têm cidadania europeia e possuem carta de aceitação ou matrícula em uma instituição de ensino portuguesa. A intenção dele é a regularização de estudantes que pretendem estudar por mais de um ano no país luso, aplicando-se para estudantes de doutorado, mestrado, graduação, entre outras modalidades. <br></br> <br></br> Sua atratividade está relacionada à reconhecida qualidade de ensino em Portugal, para além das facilidades para ingresso nas universidades portuguesas, sendo exemplo a possibilidade de uso da nota do Exame Nacional do Ensino Médio (ENEM) para admissão em diversas instituições de ensino portuguesas. O Visto D4 confere o direito de permanência em Portugal por 120 dias, bem como o direito de solicitar uma Autorização de Residência para viver em solo português por até cinco anos. A obtenção do Visto D4 também não impede que o indivíduo exerça atividade profissional, desde que isso não interfira na carga horária de estudos e que seja devidamente comunicada ao Serviço de Estrangeiros e Fronteiras. Isso tudo sem que haja limite de horas de trabalho por dia.  
      <br></br><br></br>
      <Text display='inline' color='teal.500' fontWeight={'bold'} _hover={{color:'teal.600', transition:'400ms' , cursor:'pointer'}}> <Slink to={'#contato'} spy={true} smooth={true} offset={-60} duration={500}>Clique aqui e saiba mais!</Slink> </Text>
      <br></br><br></br>
      <Text display='inline' color='teal.500' fontWeight={'bold'} _hover={{color:'teal.600', transition:'400ms' , cursor:'pointer'}}> 
         <Slink to={'#Home'} onClick={() => {changePage(linesBkp[4].lineData)}}>
            Se você já está estudando na Europa, o Visto D5 deve ser o ideal para você, clique para saber mais
         </Slink> 
      </Text>
      </Flex>,
        serviceImage:'static/img/visa-4.jpg'}},

      {image:'static/img/visa-5.jpg', 
       name:<VStack> <Text>Visto D5</Text> <Text> Estudos em Portugal para estrangeiros já residentes na Europa.</Text> </VStack>,
       cols:[6,6,3,3], lineData:{mode:'visa',title: 'Visto D5: Estudos em Portugal para estrangeiros já residentes na Europa', 
       text:<Flex display='inline'>O Visto D5 é perfeito para pessoas que estejam estudando em alguma instituição de ensino na Europa e queiram passar a estudar e residir em Portugal. É justamente o seu conceito que o diferencia do Visto D4, pois ele é aconselhável para estudantes do ensino superior que já residem e estudam em qualquer país membro da União Europeia legalmente há menos de dois anos e queiram transferir ou complementar seus estudos para Portugal. Assim como o D4, este Visto também permite o exercício de atividade profissional remunerada. <br></br> <br></br> Este visto é um  pouco diferente dos demais, uma , pois o solicitante deve já ser titular de uma autorização de residência ou de estudo concedida por um outro Estado membro da União Europeia. É uma modalidade de visto extremamente adequada para casos de intercâmbio dentro da Europa, dupla titulação e a chamada graduação sanduíche. <br></br><br></br> Caso você esteja estudando na Europa,{' '}
      <Text display='inline' color='teal.500' fontWeight={'bold'} _hover={{color:'teal.600', transition:'400ms' , cursor:'pointer'}}> 
         <Slink to={'#contato'} spy={true} smooth={true} offset={-60} duration={500}>
            entre em contato conosco!
         </Slink> 
      </Text>
      <br></br><br></br>
      <Text display='inline' color='teal.500' fontWeight={'bold'} _hover={{color:'teal.600', transition:'400ms' , cursor:'pointer'}}> 
         <Slink to={'#Home'} onClick={() => {changePage(linesBkp[3].lineData)}}>
            Caso você ainda esteja no Brasil, clique para saber mais sobre o visto D4.
         </Slink> 
      </Text>
      </Flex>,
        serviceImage:'static/img/visa-5.jpg'}},
      {image:'static/img/visa-6.jpg', 
       name:<VStack> <Text>Visto D6</Text> <Text> Para estender os benefícios à família.</Text> </VStack>,
       cols:[6,6,3,3], lineData:{mode:'visa',title: 'Visto D6: Para estender os benefícios à família', 
       text:<Flex display='inline'>O Visto D6 é um importante passo para o estabelecimento da família inteira em Portugal. Na medida em que um indivíduo inicia o processo para receber a autorização de residência no país luso, ou já possui esta autorização, pode solicitar o Visto D6 para os demais familiares. <br></br> <br></br> Este visto, quando concedido, permite que o cônjuge da pessoa que está vivendo  em Portugal também possa viver no país. Além disso, esse visto permite a entrada dos filhos menores de idade do casal ao país luso, e, em alguns casos, ainda concede o direito para os filhos com mais de 18 anos, bem como para  os progenitores  de um dos cônjuges. <br></br><br></br> 
       Em moldes similares ao do primeiro integrante da família, estes familiares adquirem o Visto D6 e também podem{' '}
      <Text display='inline' color='teal.500' fontWeight={'bold'} _hover={{color:'teal.600', transition:'400ms' , cursor:'pointer'}}> 
         <Slink to={'#contato'} spy={true} smooth={true} offset={-60} duration={500}>
            trabalhar por lá de maneira legal.
         </Slink> 
      </Text>
      </Flex>,
        serviceImage:'static/img/visa-6.jpg'}},
      {image:'static/img/visa-7.jpg', 
       name:<VStack> <Text>Visto D7</Text> <Text> A tranquilidade para aposentados e titulares de rendimentos próprios.</Text> </VStack>,
       cols:[6,6,3,3], lineData:{mode:'visa',title: 'Visto D7: A tranquilidade para aposentados e titulares de rendimentos próprios', 
       text:<Flex display='inline'>O Visto D7 é aplicável para aposentados e pensionistas, titulares de rendimentos próprios e também para aqueles que exercem atividade religiosa no Brasil. Para os aposentados, não há limite de idade e qualquer tipo de aposentadoria é aceita, respeitados os requisitos mínimos exigidos por Portugal. Para os titulares de rendimento, são considerados recursos provenientes de aluguel, propriedade intelectual, aplicações financeiras e dividendos de empresas, também respeitados os requisitos mínimos. Já para os praticantes de atividade religiosa também é facultado o pedido do Visto D7, desde que sejam ministros do culto, ou que exerçam profissionalmente atividade religiosa. <br></br> <br></br>  O Visto D7 possui validade de quatro meses, podendo ser pedida posteriormente a Autorização de Residência em Portugal. Os valores exigidos para as três categorias possíveis são os mesmos, sendo necessária a comprovação de renda suficiente correspondente a 100% do salário mínimo vigente em Portugal para o titular pelo período de 12 meses. Não obstante, o portador do Visto D7 pode trabalhar de forma regular em solo português, aumentando ainda mais a renda que detinha. <br></br><br></br> Ficou interessado? 
      <Text display='inline' color='teal.500' fontWeight={'bold'} _hover={{color:'teal.600', transition:'400ms' , cursor:'pointer'}}> <Slink to={'#contato'} spy={true} smooth={true} offset={-60} duration={500}> Saiba mais!</Slink> </Text>
      </Flex>,
        serviceImage:'static/img/visa-7.jpg'}},
      {image:'static/img/visa-8.jpg', 
       name:<VStack> <Text>Visto D8</Text> <Text> Apenas para trabalho temporário.</Text> </VStack>,
       cols:[6,6,3,3], lineData:{mode:'visa',title: 'Visto D8: O visto de trabalho temporário', 
       text:<Flex display='inline'> <br></br> <br></br>  🚧 Área em construção 🚧 <br></br><br></br>
      <Text display='inline' color='teal.500' fontWeight={'bold'} _hover={{color:'teal.600', transition:'400ms' , cursor:'pointer'}}> <Slink to={'#contato'} spy={true} smooth={true} offset={-60} duration={500}> </Slink> </Text>
      </Flex>,
        serviceImage:'static/img/visa-8.jpg'}},
   ]

   const textData = {
      title:<Flex display='inline'> passaportes e <Text display='inline' color='clubMaldivas'> vistos</Text></Flex>,
      subtitle:
      <Flex display='inline' mx='auto'> Conte conosco para abrir as portas
      <Text display='inline' color='clubMaldivas'> abrir as portas </Text>
      de Portugal e da Europa para você, sua família e seus descendentes!
      </Flex>
   }

   return (
      <>
      
      <Flex
      id='#visa'
      w='100%'
      bgGradient='linear(135deg,#0f0f0f, #343434, #0f0f0f)'
      color='gray.50'
      fontFamily='Heebo'
      bgRepeat='repeat-x'
      flexDir="column"
      justifyContent='center'
      py={8}
      px={2}
      >
         <Heading fontWeight='300' textAlign='center' mt={4} mb={2} w='100%' textTransform='uppercase'>
            {textData.title}
         </Heading>

         
         <Flex fontWeight='400' textAlign='center' mb={4} w='100%'>
            {textData.subtitle}
         </Flex>

         
         <SimpleGrid
         textAlign='center'
         columns={12}
         py={[12,4,4,12]}
         gap={[2,8,8,12]}
         >
            {lines.map( item => {
               return (
                  <LineItem key={item.lineData.title} changePage={changePage} LineImage={item.image} LineName={item.name} lineData={item.lineData} columns={item.cols}/>
               )
            })}
         </SimpleGrid>

      </Flex>
      </>
   )
}