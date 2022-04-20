import { Text } from "@chakra-ui/react"

export function Logo(){
  return(
    <Text
      fontSize={["md", "3xl"]}
      fontWeight="bold"
      letterSpacing="tight"
      w="64"
    >
      Dc DashGo
      <Text
      as="span"
      ml="1"
      color="pink.500"
      >.</Text>
    </Text>
  )
}