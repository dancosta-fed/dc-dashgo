import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps{
  showProfileData?: boolean;
}

export function Profile({showProfileData = true}: ProfileProps) {
  return(
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Dan Costa</Text>
          <Text color="gray.300" fontSize="small">
          dancosta.id@gmail.com
          </Text>
        </Box>
      )}
      <Avatar 
        size="md" 
        name="Daniel Costa"
        src="https://github.com/dancosta-fed.png"
      />
    </Flex>
  )
}