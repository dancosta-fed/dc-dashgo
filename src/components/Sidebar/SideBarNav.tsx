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
            <NavLink icon={RiDashboardLine} href="/dashboard">Dashboard</NavLink>
            <NavLink icon={RiContactsLine} href="/users">Users</NavLink>
          </NavSection>
        </Stack>
        
        {/* Automation */}
        <Stack spacing="12" align="flex-start">
          <NavSection title="AUTOMATION">
            <NavLink icon={RiInputMethodLine} href="/forms">Forms</NavLink>
            <NavLink icon={RiGitMergeLine} href="/automation">Automation</NavLink>
          </NavSection>
        </Stack>
    </Stack>
  )
}