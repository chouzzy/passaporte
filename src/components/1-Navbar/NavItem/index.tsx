import { Box, Text, useBreakpointValue } from "@chakra-ui/react"
import Link from "next/link";
import { useRouter } from "next/router";
import { Link as Slink } from 'react-scroll'

const Scroll = require('react-scroll');
const scroll = Scroll.animateScroll;
const scroller = Scroll.scroller;

interface NavItemProps {
   id: string,
   activeClass?: string,
   text: string,
   navColor?: string,
   serviceOn: boolean,
   backPage?(): any,
   modalToggle?: () => void,
   offSet?: number
}

export function NavItem({ id, activeClass, text, navColor, serviceOn, backPage, offSet, modalToggle }: NavItemProps) {

   const router = useRouter()

   function handleNavbarScrollService(offset, id) {
      if (typeof (modalToggle) == 'function') {
         modalToggle()
      }

      if (id != '#contato') {
         backPage()
         scroll.scrollTo(offset, {
            duration: 1000,
            smooth: true,
         })
      }
      else {
         scroll.scrollToBottom({
            duration: 1000,
            smooth: true,
         })
      }
   }

   async function backToHome() {

      if (id != '#formulario') {
         await router.push('/')
         scroll.scrollTo(offSet, {
            duration: 1000,
            smooth: true,
         })
      } else {
         scroll.scrollTo(10000, {
            duration: 1000,
            smooth: true,
         })
      }

   }


   return (
      <>
         {serviceOn == true ?
            <Slink onClick={modalToggle} activeClass={activeClass} to={id} spy={true} smooth={true} offset={-100} duration={500}>
               <Box cursor='pointer' color={navColor} _hover={{ color: "clubAquaClean", transition: '500ms' }} flex='1'> {text} </Box>
            </Slink>
            :
            backPage === undefined ?
               <Slink onClick={backToHome}>
                  <Box cursor='pointer' color={navColor} _hover={{ color: "clubAquaClean", transition: '500ms' }} flex='1'> {text} </Box>
               </Slink>
               :

               <Slink onClick={() => { handleNavbarScrollService(offSet, id) }} activeClass={activeClass}
               // to={'#contato'} spy={true} smooth={true} offset={-100} duration={500}
               >
                  <Box cursor='pointer' color={navColor} _hover={{ color: "clubAquaClean", transition: '500ms' }} flex='1'> {text} </Box>
               </Slink>

         }
      </>
   )
}