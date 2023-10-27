import { Box, Flex, SimpleGrid, GridItem, Heading, Image, Text, useBreakpointValue, VStack, Link } from "@chakra-ui/react";

import { Link as Slink } from 'react-scroll'

export const lines = [
    {
       image: 'static/img/positano.jpg', name: 'Nacionalidade Italiana', cols: [4, 4, 2, 2],
       lineData: {
          mode: 'nationality', 
          title: 'Nacionalidade Italiana', 
          text:
             <Flex display='inline'>

                <Text fontWeight={'600'}>
                   Quem Tem Direito à Cidadania Italiana?
                </Text>
                <br></br>

                <Text>
                   Para se tornar um cidadão da Itália você precisa confirmar que você tem ao menos um de seus ascendentes diretos (pais, avós, bisavós ou trisavós) italiano(a) e que esse ancestral não tenha renunciado à sua cidadania antes do nascimento do próximo descendente.
                </Text>
                <br></br>

                <Text fontWeight={'600'}>
                   Ou seja, você tem quatro avós, oito bisavós e trinta e dois trisavós. Se qualquer um deles nasceu na Itália e sendo possível comprovar isso documentalmente, você tem o direito à cidadania italiana!
                </Text>
                <br></br>

                <Text fontWeight={'600'}>
                   As Vantagens da Cidadania Italiana
                </Text>
                <br></br>

                <Text>
                   Além do acesso ao direito de viver e trabalhar na própria Itália, tal qual um italiano nato, e a desnecessidade de visto para entrada nos Estados Unidos, a cidadania italiana oferece a você e sua família uma porta de entrada para a União Europeia, sendo possível morar e trabalhar em qualquer um dos 27 países do espaço Schengen.
                </Text>
                <br></br>

                <Text fontWeight={'600'}>
                   O Processo Detalhado: Da Busca à Conquista
                </Text>
                <br></br>

                <Text>
                   <b> Busca do documento do italiano: </b>O processo de nacionalidade italiana se inicia por meio da busca do documento de nascimento do Italiano na Itália, sendo esse documento imprescindível para todo o processo. Esta é uma tarefa complexa, pois buscamos nas mais de 7 mil Comunes (similar aos cartórios italianos) o documento de seu ancestral. Para tanto, contamos com uma rede de recursos, genealogistas e especialistas locais que nos permitem enfrentar este desafio com eficiência e alta taxa de sucesso.
                </Text>
                <br></br>

                <Text>
                   <b> Análise Documental: </b> Iniciamos uma análise minuciosa da documentação para avaliar a elegibilidade e identificar quaisquer lacunas que precisem ser preenchidas.
                </Text>
                <br></br>

                <Text>
                   <b>Obtenção de Certidões:</b> Trabalhamos em estreita colaboração com fontes oficiais para obter as certidões necessárias, e proceder com quaisquer correções documentais eventualmente imprescindíveis. Seja na Itália ou no Brasil, nossa equipe está preparada para enfrentar todos os desafios para garantir que sua documentação esteja completa, trabalhando com uma rede de parceiros nos dois países possibilitando atenção, celeridade, cuidado e eficiência em todos os procedimentos.
                </Text>
                <br></br>

                <Text>
                   <b>Traduções e Legalizações: </b>Para garantir a validade dos documentos no âmbito italiano, as certidões devem ser traduzidas e ter Apostila de Haia, para que assim tenham valia na Itália. Cuidamos de todo esse procedimento e acompanhamos de perto o seu andamento!
                </Text>
                <br></br>

                <Text>
                   <b>Preparação do Dossiê: </b>Organizamos cuidadosamente toda a documentação em um dossiê completo, pronto para apresentação às autoridades competentes.
                </Text>
                <br></br>

                <Text>
                   <b>Apresentação e Acompanhamento:</b> Submetemos o dossiê às autoridades italianas e acompanhamos todo o processo até a sua completude, garantindo que todas as etapas sejam cumpridas de acordo com os regulamentos vigentes.
                </Text>
                <br></br>

                <Text fontWeight={'600'}>
                   Pronto para começar?
                </Text>
                <br></br>

                <Flex flexDir={'column'}>
                   Transforme o seu sonho de cidadania italiana em realidade. Entre em contato conosco hoje mesmo para uma consulta inicial sem compromisso. Juntos, vamos trilhar o caminho até a sua cidadania italiana e abrir as portas para um futuro cheio de possibilidades, sempre de forma transparente, rápida e atenciosa. Nosso foco é sempre a cidadania italiana em mãos e a satisfação integral do cliente!
                   <Text color='clubMaldivas' _hover={{cursor:'pointer'}}>
                      <Slink to={'#contato'} spy={true} smooth={true} offset={-60} duration={500}> Entre em contato conosco e saiba mais. </Slink>
                   </Text>
                </Flex>
                <br></br>

             </Flex>,
          serviceImage: 'static/img/positano.jpg'
       }
    },

    {
       image: 'static/img/passport.jpg', name: 'Cidadania Portuguesa', cols: [4, 4, 2, 2],
       lineData: { mode: 'nationality', title: 'Título 2 - What is Lorem Ipsum?', text: 'texto 2 -Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of', serviceImage: 'static/img/nat-2.jpg' }
    },
 ]