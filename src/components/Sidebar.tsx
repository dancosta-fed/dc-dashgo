import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";

export function Sidebar(){
  return(
    <Box
      as="aside"
      w="64"
      mr="8"
    >
      <Stack spacing="4">
        {/* General */}
        <Stack spacing="12" align="flex-start">
          <Box>
            <Text fontWeight="bold" color="gray.400" fontSize="small">GENERAL</Text>
            <Stack spacing="4" mt="8" align="stretch">
              {/* Dashboard */}
              <Link display="flex">
                <Icon as={RiDashboardLine} fontSize="20"/>
                <Text ml="4" fontWeight="medium">Dashboard</Text>
              </Link>

              {/* Contacts */}
              <Link display="flex">
                <Icon as={RiContactsLine} fontSize="20"/>
                <Text ml="4" fontWeight="medium">Users</Text>
              </Link>
            </Stack>
          </Box>
        </Stack>
        {/* Automation */}
        <Stack spacing="12" align="flex-start">
          <Box>
            <Text fontWeight="bold" color="gray.400" fontSize="small">AUTOMATION</Text>
            <Stack spacing="4" mt="8" align="stretch">
              {/* Forms */}
              <Link display="flex">
                <Icon as={RiInputMethodLine} fontSize="20"/>
                <Text ml="4" fontWeight="medium">Forms</Text>
              </Link>

              {/* Contacts */}
              <Link display="flex">
                <Icon as={RiGitMergeLine} fontSize="20"/>
                <Text ml="4" fontWeight="medium">Automation</Text>
              </Link>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </Box>
  )
}