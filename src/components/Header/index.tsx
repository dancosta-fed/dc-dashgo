import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSideBarDrawer } from "../../contexts/SidebarDrawerContext";
import { Logo } from "./Logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";


export function Header() {
  const { onOpen } = useSideBarDrawer()

  const isWideScreen = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {!isWideScreen &&(
       <IconButton
          aria-label="Open Navagation"
          icon={<Icon
          as={RiMenuLine}/>}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
          >
        </IconButton>
      )}

      <Logo />

      { isWideScreen && (
        <SearchBox />
      )}

      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile showProfileData={isWideScreen}/>
      </Flex>
    </Flex>
  )
}