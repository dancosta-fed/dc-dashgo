import { Icon, Text, Link as ChakraLink, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps  extends ChakraLinkProps{
  icon: ElementType,
  children: string,
  href: string,
}

export function NavLink({icon, children, href, ...restProps}:NavLinkProps){
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink align="center" display="flex" {...restProps}>
        <Icon as={icon} fontSize="20"/>
        <Text ml="4" fontWeight="medium">{children}</Text>
      </ChakraLink>
    </ActiveLink>
  )
}
