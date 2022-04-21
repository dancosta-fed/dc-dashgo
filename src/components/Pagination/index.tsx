import { Button, Stack, Box, useBreakpointValue } from "@chakra-ui/react";
import { RiTreasureMapFill } from "react-icons/ri";
import { PaginationItem } from "./PaginationItem";

export function Pagination(){

  const isWideScreen = useBreakpointValue({
    base: false,
    lg: true,
  })

  const isMidScreen = useBreakpointValue({
    md: true,
  })


  return(
    <Stack
      direction={["column", "row"]}
      spacing="6"
      mt="8"
      justify="space-between"
      align="center"
    >

      <Box>
        <strong>0</strong> - <strong>10</strong> of size <strong>100</strong>
      </Box>


      <Stack direction="row" spacing="2">
        <PaginationItem number={1} isCurrent />
        <PaginationItem number={2} />
        <PaginationItem number={3} />
        <PaginationItem number={4} />
      </Stack>
    </Stack>
  )
}