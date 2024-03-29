import { Box, Drawer, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerBody, DrawerOverlay, useBreakpointValue } from "@chakra-ui/react";
import { useSideBarDrawer } from "../../contexts/SidebarDrawerContext";
import { SidebarNav } from "./SideBarNav";

export function Sidebar(){
  const { isOpen, onClose} = useSideBarDrawer();

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  })

  if (isDrawerSidebar){
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="gray.800" p="4">
            <DrawerCloseButton mt="6"/>
            <DrawerHeader>Navagation</DrawerHeader>
            <DrawerBody>
              <SidebarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }
  return(
    <Box as="aside" w="64" mr="8" >
      <SidebarNav />
    </Box>
  )
}