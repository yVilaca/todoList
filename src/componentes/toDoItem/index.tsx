import { ActionIcon, Card, Flex, Group, Text } from "@mantine/core"
import { IconPencil, IconTrash } from "@tabler/icons-react"


interface Item{
    nome: string,
    data: string
}
export const ToDoItem = (props:Item) => {

    return(
        <Card shadow="md" w={700} m={'auto'}>
            <Flex justify={'space-between'} align={'center'}>
                <Group>
                    <ActionIcon variant="light">
                        <IconPencil size={18} />
                    </ActionIcon>
                    <ActionIcon variant="light">
                        <IconTrash size={18} />
                    </ActionIcon>
                </Group>
                <Text fw={600}>
                    {props.nome}
                </Text>
                <Text size="sm">
                {props.data}
                </Text>
            </Flex>
        </Card>
    )
}