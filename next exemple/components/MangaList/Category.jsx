"use client"
import { useEffect, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { redirectUrlGenerator } from "@/hooks/utils/redirectUrlGenerator"
import { NavbarItem, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Tabs, Tab } from "@nextui-org/react";
import useMangaList from "@/hooks/manga/useMangaList";

const Category = () => {

    const searchParams = useSearchParams()
    const router = useRouter()

    const [searchParamsStates, setSearchParamsState] = useState({
        category: searchParams.get("category"),
        type: searchParams.get("type"),
        state: searchParams.get("state"),
    })
    const [metaData, setMetaData] = useState()

    const handleRedirect = (f, e) => {

        setSearchParamsState((pre) => {
            return {
                ...pre,
                [f]: e
            }
        })
        router.push(redirectUrlGenerator(searchParams, metaData, f, e))
    }

    const loadData = async () => {
        const mangaDataReq = await useMangaList("")
        setMetaData(mangaDataReq.metaData)
        console.log(mangaDataReq.metaData)

    }

    useEffect(() => {
        loadData()
    }, [])

    return (
        metaData && <NavbarItem className="gap-1.5 w-full hidden lg:flex justify-end items-center">
            <div className="flex-1 overflow-x-auto max-w-xl">
                <Tabs
                    onSelectionChange={(e) => handleRedirect("category", e)}
                    classNames={{
                        cursor: "w-full bg-red-400",
                        tabContent: "group-data-[selected=true]:text-white text-red-400"
                    }} variant="light" items={metaData.category} aria-label="Options">
                    {metaData.category.map((val) => (
                        <Tab key={val.id} title={val.name} />
                    ))}
                </Tabs>
            </div>
            <Dropdown backdrop="blur" className="bg-base-200">
                <DropdownTrigger>
                    <Button
                        variant="bordered"
                        className="capitalize bg-base-300 border-red-400 text-white"
                    >{searchParamsStates.type ? searchParamsStates.type : metaData.type[0].name}
                    </Button>
                </DropdownTrigger>
                <DropdownMenu
                    onAction={(e) => handleRedirect("type", e)}
                >
                    {metaData.type.map((val, index) => (
                        <DropdownItem className={`text-white ${(val.id === searchParamsStates.type || (!searchParamsStates.type && index === 0)) && "bg-red-400/40"}`} key={val.id}>{val.name}</DropdownItem>
                    ))}
                </DropdownMenu>
            </Dropdown>
            <Dropdown backdrop="blur" className="bg-base-200">
                <DropdownTrigger>
                    <Button
                        variant="bordered"
                        className="capitalize bg-base-300 border-red-400 text-white"
                    >{searchParamsStates.state ? searchParamsStates.state : metaData.state[0].name}
                    </Button>
                </DropdownTrigger>
                <DropdownMenu
                    onAction={(e) => handleRedirect("state", e)}
                >
                    {metaData.state.map((val, index) => (
                        <DropdownItem className={`text-white ${(val.id === searchParamsStates.state || (!searchParamsStates.state && index === 0)) && "bg-red-400/40"}`} key={val.id}>{val.name}</DropdownItem>
                    ))}
                </DropdownMenu>
            </Dropdown>
        </NavbarItem>
    )
}

export default Category