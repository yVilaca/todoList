import { ActionIcon, Center, Flex } from "@mantine/core"
import { IconBrandGithub } from "@tabler/icons-react"
import { IconPlus } from "@tabler/icons-react"
import { IconBrandInstagram } from "@tabler/icons-react"

export const ActionBar = () => {
    return(
        <Center>

        <Flex gap={10}>
            <ActionIcon variant="light" variant="light">
                <IconBrandInstagram/>
            </ActionIcon>
            <ActionIcon variant="light" p={'sm'} w={'100%'}>
                <IconPlus size={15}/> Adicionar
            </ActionIcon>
            <ActionIcon variant="light">
                <IconBrandGithub/>
            </ActionIcon>
        </Flex>
        </Center>
    )
}