import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Text, Tbody, Td, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
  const isWideScreen = useBreakpointValue({
    base: false,
    lg: true,
  })
  return(
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius="8" bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Users</Heading>
            <Button
              as="a"
              cursor="pointer"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize="20"/>}
            >
              Create User
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color="gray.300" width={["1","8"]}>
                  <Checkbox colorScheme="pink"/>
                </Th>
                <Th>User</Th>
                { isWideScreen && <Th>Registration Date</Th> }
                <Th width={["1","8"]}></Th>
              </Tr>
            </Thead>

            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Dan Costa</Text>
                    <Text fontSize="small" color="gray.300">dancosta.id@gmail.com</Text>
                  </Box>
                </Td>
                  { isWideScreen && <Td>April 4th, 2022</Td> }
                  { isWideScreen && 
                    <Td>
                      <Button
                        as="a"
                        cursor="pointer"
                        size="sm"
                        fontSize="sm"
                        bg="gray.300"
                        leftIcon={<Icon as={RiPencilLine} fontSize="16"/>}
                      >
                        Edit User
                      </Button>
                    </Td> 
                  }
          
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}