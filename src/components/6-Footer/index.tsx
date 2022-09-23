import { Button, Flex, FormControl, FormLabel, Heading, Input, InputGroup, InputLeftElement, InputRightElement, Link, Select, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BsTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";

export function Footer() {

   const formData = {
      title:'SEJA UMA CONSULTORA',
      name:'Nome',
      number:'Número',
      email:'E-mail',
      buttonText:'Enviar'
   }

   const [states, setStates] = useState([])
   const [cities, setCities] = useState([])
   const [able, setAble] = useState(true)

   let emailData = {}

   let [city, setCity] = useState('')
   let [state, setState] = useState({'Estado':''})

useEffect(() => {
   const fetchStates = async () => {
     const statesList = await axios(
       'https://servicodados.ibge.gov.br/api/v1/localidades/estados',
     );

     let statesListPivot = []

     statesList.data.map(item => {
         statesListPivot.push(item.sigla)})
     setStates(statesListPivot.sort());
   }

   const fetchCities = async (state) => {
   if (state !=( Object.keys(state).length === 0) ) {
      const citiesList = await axios(
         `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state['Estado']}/municipios`,
      );
      let citiesListPivot = []

      citiesList.data.map(item => {
          citiesListPivot.push(item.nome)})
      setCities(citiesListPivot.sort());
   };
   }

   fetchStates();
   fetchCities(state)
 }, [state]);

useEffect( () => {
   if ((state['Estado'] != '' )) {
      setAble(false)
   } else {
      setAble(true)
   }
}, [state])

const [disable, setDisable] = useState(false)
const [color, setColor] = useState('clubMaldivas')
const [sentText, setSentText] = useState('Enviar')

const {
   handleSubmit,
   register,
   formState: { errors, isSubmitting },
 } = useForm()

 function onSubmit(values) {
   setDisable(true)
   setColor('clubCigar')
   setSentText('Enviado ✔')
   emailData = {...values, ...state}
   return new Promise(() => {
     setTimeout(() => {
      fetch('/api/mail', {
         method:'post',
         body:JSON.stringify(emailData)
      })
    }, 2000)
   })
 }



   return (
      <Flex
        id='#contato'
        w='100%'
        bg='#0f0f0f'
        color='gray.50'
        fontFamily='Heebo'
        bgRepeat='repeat-x'
        flexDir="column"
        justifyContent='center'
        py={8}
        px={2}
      >
         <Flex w='100%'>
            <Heading mx='auto' fontWeight='300' fontSize='1.8rem'> Fale conosco </Heading>
         </Flex>
         <Flex w='100%' flexDir={['column','column','row', 'row']}>

            {/* MAPA */}
            <Flex w='100%' justifyContent='center' p={[8,8,16,16]} flexDir='column' gap={4}>

               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49219.889364100636!2d-46.68089142617247!3d-23.52206389553647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef813d5a0e76d%3A0xc91f02336118f045!2sCT%20da%20Barra%20Funda%20(S%C3%A3o%20Paulo%20FC)!5e0!3m2!1spt-BR!2sbr!4v1663877682041!5m2!1spt-BR!2sbr" width="100%" height="400px" loading="lazy"/>
               <VStack>
                  <Text> Av. Marquês de São Vicente, 2724 - Barra Funda, São Paulo - SP, 05036-040</Text>
               </VStack>
            </Flex>

            {/* FORM */}
            <Flex w='100%'justifyContent='center' p={[8,8,16,16]}>
            <FormControl isRequired>
               <form onSubmit={handleSubmit(onSubmit)}>
                  <FormLabel fontWeight='400' pl={2} pt={4} mb={0} htmlFor='first-name'> {formData.name}</FormLabel>
                  <Input p={2} placeholder='Digite seu nome' {...register("Nome")} />
                  
                  <FormLabel fontWeight='400' pl={2} pt={4} mb={0} htmlFor='telephone'> {formData.number}</FormLabel>
                  <InputGroup>
                  <Input type='tel' w='100px' minLength={2} maxLength={3} placeholder='DDD' {...register("ddd")} />
                  <Input type='tel' minLength={8} maxLength={9} placeholder='Ex: 912345678 ou 23456789' {...register("Numero")} />
                  <InputRightElement pointerEvents='none'>
                     <BsTelephoneFill fontSize='1.1rem' color='gray' />
                  </InputRightElement>
                  </InputGroup>

                  <FormLabel fontWeight='400' pl={2} pt={4} mb={0} htmlFor='e-mail'> {formData.email}</FormLabel>
                  <InputGroup>
                  <InputLeftElement pointerEvents='none'>
                     <IoIosMail fontSize='1.4rem' color='gray' />
                  </InputLeftElement>
                  <Input type='mail' placeholder='Digite seu e-mail' {...register("Email")} />
                  </InputGroup>

                  <FormLabel fontWeight='400' pl={2} pt={4} mb={0} htmlFor='e-mail'> Estado e Cidade</FormLabel>
                  <InputGroup>
                  <Select id='country'  _placeholder={{color:'#1c928b'}}  onChange={ (e) => setState({'Estado':e.target.value})}  placeholder='UF'>
                     {states.map(item => {
                        return (
                           <option style={{ color: 'black' }} key={item}>{item}</option>
                     )})}
                  </Select>
                  <Select isDisabled={able} id='city' onChange={ (e) => setCity(e.target.value)} placeholder='Cidade' {...register("Cidade")}>
                        {cities.map(item => {

                           return (
                              <option style={{ color: 'black' }} key={item}>{item}</option>
                        )})}
                  </Select>
                  </InputGroup>
                     <Button
                     borderRadius={3}
                     mt={8}
                     w='100%'
                     _hover={{bg:'clubCigar',
                     transition:'360ms'}}
                     mx='auto'
                     cursor='pointer'
                     bg={color}
                     disabled={disable}
                     type='submit'
                     color='white'
                     >
                        {sentText}
                     </Button>
                  </form>
               </FormControl>
            </Flex>
         </Flex>
         <Flex w='100%'>
            <Flex display='inline' mx='auto' fontWeight='300' fontSize='0.7rem'> 
               desenvolvido por 
               <Link href='awer.co' color='#F55F5E' _hover={{textDecoration: 'none' , color:'#729EA1'}}>
                  <Text display='inline' > awer.co </Text>
               </Link>
            </Flex> 
         </Flex>
      </Flex>
   )
}