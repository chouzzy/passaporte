import { Dispatch, SetStateAction } from "react";
import { About } from "../5-About";
import { Homepage } from "./Homepage";
import { SubHomepage } from "./SubHomepage";

interface InitialHomeProps {
  serviceOn:any
  changePage?: (lineData: any) => void
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  firstOpen: boolean
  setFirstOpen: any
}

export function InitialHome({serviceOn, changePage,  isOpen, onOpen, onClose, firstOpen, setFirstOpen }: InitialHomeProps) {
 return (
   <>
      <Homepage serviceOn={serviceOn} changePage={changePage}  isOpen={isOpen} onOpen={onOpen} onClose={onClose} firstOpen={firstOpen} setFirstOpen={setFirstOpen} />
      <SubHomepage/>
   </>
 )
}