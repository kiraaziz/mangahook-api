"use client"
import { GiHook } from "react-icons/gi"
import { BiSearch } from "react-icons/bi"
import { Navbar, NavbarContent, NavbarItem, Link, Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Input } from "@nextui-org/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const NavbarComponent = ({ children }) => {
    return (
        <Navbar maxWidth="full" className="bg-base-300 flex-1 sticky p-3 gap-3 shadow-xl">
            <div className="h-full w-max flex  items-center gap-2" >
                <GiHook className="text-red-400" size={25} />
                <Link href="/" className="font-bold text-inherit text-white">Manga Hook</Link>
            </div>
            <NavbarContent className="w-full " justify="end">
                {children}
                <NavbarItem className="items-start">
                    <SearchBox />
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}

const SearchBox = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [value, setValue] = useState("")
    const router = useRouter()

    return (
        <>
            <Button isIconOnly onPress={onOpen} className="bg-red-400 text-white">
                <BiSearch size={20} />
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalBody className="bg-base-300 p-4">
                                <h1 className="font-semibold text-xl text-red-400">Search</h1>
                                <div className="flex gap-2 items-center justify-center p-1 w-full">
                                    <input value={value} onChange={(e)=>setValue(e.target.value)} placeholder="tap something ..." className="input flex-1" />
                                    <button onClick={()=>{
                                        router.push("/search/" + value)
                                        onClose()
                                    }} disabled={!value} className="btn">
                                        <BiSearch />
                                    </button>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}



export default NavbarComponent