import { useEffect, useState } from "react"
import { ToDoItem } from "../toDoItem"
import { Button, Center, Flex } from "@mantine/core"

interface Item {
    nome: string,
    data: string
}
export const ToDoList = () => {
    const [itens, setItens] = useState<Item[]>([])
    useEffect(() => {
        const itensStorage = localStorage.getItem('itens');
        if (itensStorage) {
            setItens(JSON.parse(itensStorage));
        } else {
            setItens([]);
        }
    }, [])
    return (
        <Flex direction={'column'} gap={'md'}>
            {itens.map((item, index) => {
                return <ToDoItem key={index} nome={item.nome} data={item.data} />
            })}
        </Flex>

    )
}