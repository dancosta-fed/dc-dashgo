import { Button, Stack, Box, useBreakpointValue, Text } from "@chakra-ui/react";
import { RiTreasureMapFill } from "react-icons/ri";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCountOfRegistrations: number;
  registrationsPerPage?: number;
  currentPage?: number;
  onPageChange?:(page: number) => void;
}

const siblingsCount = 1

// creating an array to set the range of siblings
function generatePagesArray(from: number, to: number){
  return [...new Array(to - from)]
  .map((_, index) => {
    return from + index + 1
  })
  .filter(page => page > 0)
}

export function Pagination({
  totalCountOfRegistrations,
  registrationsPerPage = 10,
  currentPage = 1,
  onPageChange,
}: PaginationProps){
  // Rounding up for last page
  const lastPage = Math.floor(totalCountOfRegistrations) / registrationsPerPage;

  // couting sibligings pages to be shown
  const previousPages = currentPage > 1
    ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
    : []
  
  const nextPages = currentPage < lastPage
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
    : []

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

      {/* Showing first page */}
      {currentPage > (1 + siblingsCount) && (
        <>
          <PaginationItem onPageChange={onPageChange} number={1}  />
          {currentPage > (2 + siblingsCount) && (
            <Text color="gray.300" width="8" textAlign="center">...</Text>
          )}
        </>
      )}

        {/* Showing previous to current page */}
        {previousPages.length > 0 && previousPages.map(page => {
          return <PaginationItem onPageChange={onPageChange} key={page} number={page}  />
        })}

        {/* Showing current page */}
        <PaginationItem onPageChange={onPageChange} number={currentPage} isCurrent />
        
        {/* Showing next to current page */}
        {nextPages.length > 0 && nextPages.map(page => {
          return <PaginationItem onPageChange={onPageChange} key={page} number={page}  />
        })}

        {/* Showing last page */}
        {(currentPage + siblingsCount) < lastPage && (
          <>
          {(currentPage + 1 + siblingsCount) < lastPage && (
            <Text color="gray.300" width="8" textAlign="center">...</Text>
          )}
            <PaginationItem onPageChange={onPageChange} number={lastPage}  />
          </>
      )}
      </Stack>
    </Stack>
  )
}