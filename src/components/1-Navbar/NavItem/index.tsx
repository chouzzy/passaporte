import { Box} from "@chakra-ui/react"
import {Link as Slink} from 'react-scroll'


interface NavItemProps {
   id:string,
   activeClass?:string,
   text:string,
   navColor?:string 
}

export function NavItem({id, activeClass, text, navColor,}:NavItemProps) {
   return (
         <Slink  activeClass={activeClass} to={id} spy={true} smooth={true} offset={-60} duration={500}>
            <Box cursor='pointer' color={navColor} _hover={{color: "clubAquaClean", transition:'500ms'}} flex='1'> {text}</Box>
         </Slink>
   )
}