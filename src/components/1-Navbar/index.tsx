import { useBreakpointValue, Grid, GridItem,Link, Image, HStack, Flex, Text, VStack, useColorModeValue} from "@chakra-ui/react"
import { ModalMenu } from "./Modal";
import { BsInstagram } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import { NavItem } from "./NavItem";
import { useState, useEffect } from "react";
import {CaretDown} from "phosphor-react";
import { useDisclosure, MenuItem, Menu, MenuButton, MenuList} from "@chakra-ui/react"
import {Link as Slink} from 'react-scroll'


export function Navbar() {
   const [whatsNumber, setWhatsNumber] = useState('11912304030')
   const { isOpen, onOpen, onClose } = useDisclosure()
   // useEffect(() => {
   //    const fetchWhatsNumber = async () => {
   //       await fetch('/api/random', {method:'get'})
   //       .then(response => response.json())
   //       .then(data => {
   //          setWhatsNumber(data.number)
   //          console.log(whatsNumber)
   //       })
   //    }
   //    fetchWhatsNumber()
   // }, [])

   const isMobile = useBreakpointValue({
      base: true,
      sm: true,
      md: true,
      lg: false,
      xl: false
   })

   const navItems= [
   {id:'#Home', text:'Home', active:'active'},
   {id:'#quemSomos', text:'Quem somos'},
   {id:'#services', text:'Serviços'},
   {id:'#feedbacks', text:'Referências'},
   {id:'#namidia', text:'Na Mídia'},
   {id:'#contato', text:'Contato'}]

   let socialMediaLinks = [
      {id:"instagram", instagram:'https://www.instagram.com/lindacortintas/'},
      {id:"facebook", facebook:'https://www.facebook.com/Lindacor-Tintas-104622232176385'},
      {id:"linkedin", linkedin:'https://www.linkedin.com/company/lindacor-tintas/'},
      {id:"whatsapp", whatsapp:`https://wa.me/${whatsNumber}?text=Olá, tudo bem? Acessei o site do Clube do Passaporte e gostaria de falar com um atendente.`},
   ]

   const services = [
      {id:'#visa', name:'Vistos'},
      {id:'#nationality', name:'Cidadania via direta'},
      {id:'#nationality2', name:'Cidadania via sefardita'},
   ]

   return (
      <Flex w='100%' position='fixed' zIndex={1}>
         <Grid
            p={4}
            position='relative'
            bgGradient='linear(135deg, #222222, #202020)'
            templateColumns={['','','','repeat(12,1fr)','repeat(12,1fr)']}
            w='100%'
            fontFamily='Heebo'
            fontWeight='300'
            textAlign='center'
            alignItems='center'
            color='white'
         >

         <GridItem mr={['auto','','','','auto']} ml={[6,6,12,12]} colStart={[0,0,1,1,1]} colEnd={[0,0,3,3,3]}>
         
         <Link href='/' _hover={{textDecoration:'none'}}>
            <HStack alignItems='center'>
               <Image mx='auto' src='static/img/logo branco.png' maxW={10} alt='Logo do Clube do Passaporte'/>
               <VStack spacing={-2} textTransform='uppercase'>
                  <Text fontSize='0.8rem'  fontWeight='400' mr='auto' color='white' textShadow='1px 1px 1px #00000050'> Clube do</Text>
                  <Text fontSize='1rem' fontWeight='400' color='clubAqua' textShadow='1px 1px 1px #00000050'> Passaporte</Text>
               </VStack>
            </HStack>
         </Link>

         </GridItem>

         {isMobile?
            <ModalMenu key={navItems} mediaLinks={socialMediaLinks} navItems={navItems}/>
         : 
         <>
            <GridItem colStart={[3,3,3,3,3]} mt={4} colEnd={[10,10,10,11,11]} >
            <HStack justifyContent='center' spacing={[0,0,0,4,16]} textTransform='uppercase' fontSize={'0.9rem'}>
                     {navItems.map(item => {
                        if (item.id == '#services') {
                           return (
                              <Menu isOpen={isOpen} key={item.id}>
                              <MenuButton
                                 textTransform='uppercase'
                                  mx={1}
                                  borderRadius={1}
                                  aria-label="Courses"
                                  fontWeight="normal"
                                  onMouseEnter={onOpen}
                                  onMouseLeave={onClose}
                              >
                                  <Flex justify='center' align='center' gap={1} >
                                    <Text display='inline'>
                                       {item.text} 
                                    </Text>
                                    {isOpen ? <CaretDown color='#4ca7a1' /> : <CaretDown />}   
                                 </Flex>

                              </MenuButton>

                              <MenuList bg='clubBlack' borderRadius={1} borderColor='clubMaldivas' onMouseEnter={onOpen} onMouseLeave={onClose} textTransform='uppercase'>

                                  {services.map(item => {
                                     return (
                                       <MenuItem fontWeight={300} fontSize='0.8rem' letterSpacing={0.5} color='white' key={item.id} textTransform='uppercase' _hover={{bg:'clubCigar'}}>

                                          <Slink to={item.id} spy={true} smooth={true} offset={-60} duration={500}>
                                          <Flex _hover={{color:'white'}}>
                                                <Flex w='2px' bg='clubMaldivas' mr={2} display='inline'></Flex>
                                                <Text display='inline'> {item.name} </Text>
                                          </Flex>
                                          </Slink>

                                       </MenuItem>
                                    )
                                  })}
                              </MenuList>
                          </Menu>
                           )
                        } else {
                           return (
                              <NavItem key={item.text} id={item.id} text={item.text} 
                              activeClass={item.active}/>
                           )
                        }
                     })}
                  
               </HStack>
            </GridItem>

            <GridItem colStart={[10,10,10,11,11]} colEnd={13} pt={4}>
               <HStack justifyContent='center' alignItems='baseline' spacing={2} fontSize='1.2rem' color='clubAqua'>
                  <Link _hover={{color: "clubAquaClean"}} href={socialMediaLinks[0].instagram}> <BsInstagram /> </Link>
                  <Link className='zap-tag' _hover={{color:'clubAquaClean', transition:'200ms'}} color='#6cd474'fontSize='1.3rem' href={socialMediaLinks[3].whatsapp}> <RiWhatsappFill/> </Link>
               </HStack>
            </GridItem>

            {/* <GridItem colStart={11} colEnd={13} mb={2}>
                  <Button borderRadius={3} _hover={{boxShadow:'lg'}} bg='datGreen' color='white'>Loja Daterra</Button>
            </GridItem> */}
            </>
         }
         </Grid>
      </Flex>
   )
}