import { Stack, Icon, Text, Link } from "@chakra-ui/react";
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
    <Stack spacing="4">
      <Stack spacing="12" align="flex-start">
          {/* General */}
          <NavSection title="GERAL">
            <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
            <NavLink icon={RiContactsLine}>Users</NavLink>
          </NavSection>
        </Stack>
        
        {/* Automation */}
        <Stack spacing="12" align="flex-start">
          <NavSection title="AUTOMATION">
            <NavLink icon={RiInputMethodLine}>Forms</NavLink>
            <NavLink icon={RiGitMergeLine}>Automation</NavLink>
          </NavSection>
        </Stack>
    </Stack>
  )
}