import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@chakra-ui/icons'
import { Flex, IconButton, Select, Show, Text, Tooltip } from '@chakra-ui/react'
import React, { Dispatch } from 'react'

interface State {
  page: number
  numberPaginate: number
}

interface IProps {
  state: State
  setstate: Dispatch<React.SetStateAction<State>>
  paginas: number[]
}

const Pagination = ({ state, setstate, paginas }: IProps) => {
  const { page, numberPaginate } = state

  const increment = () => {
    if (paginas.length === page) return
    setstate({ ...state, page: page + 1 })
  }
  const decrement = () => {
    if (page === 1) return
    setstate({ ...state, page: page - 1 })
  }

  return (
    <>
      <Flex justifyContent='space-between' my={4} alignItems='center'>
        <Flex>
          <Tooltip label='First Page'>
            <IconButton
              aria-label='primera pagina'
              onClick={() => setstate({ ...state, page: 1 })}
              icon={
                <ArrowLeftIcon h={{ base: 2, sm: 3 }} w={{ base: 2, sm: 3 }} />
              }
              mr={{ base: 1, sm: 4 }}
            />
          </Tooltip>
          <Tooltip label='Previous Page'>
            <IconButton
              aria-label='pagina anterior'
              onClick={decrement}
              icon={
                <ChevronLeftIcon
                  h={{ base: 4, sm: 6 }}
                  w={{ base: 4, sm: 6 }}
                />
              }
            />
          </Tooltip>
        </Flex>

        <Flex
          fontSize={{ base: '12px', md: 'inherit' }}
          alignItems='center'
          gap={12}
          px={5}
        >
          <Text flexShrink='0'>
            Page{' '}
            <Text fontWeight='bold' as='span'>
              {page}
            </Text>{' '}
            of{' '}
            <Text fontWeight='bold' as='span'>
              {paginas.length}
            </Text>
          </Text>
          <Show above='lg'>
            <Flex alignItems='center'>
              <Text flexShrink='0'>Ir a la página :</Text>{' '}
              <Select
                as='select'
                id='paginas'
                w={24}
                p={1}
                textAlign='center'
                color='text-gray-600'
                value={page}
                onChange={(e) =>
                  setstate({ ...state, page: Number(e.target.value) })
                }
              >
                {paginas.map((page) => (
                  <Text as='option' textAlign='center' key={page} value={page}>
                    {page}
                  </Text>
                ))}
              </Select>
            </Flex>
          </Show>
          <Show above='lg'>
            <Flex alignItems='center'>
              <Text flexShrink='0'>Registros por página :</Text>{' '}
              <Select
                w={24}
                p={1}
                value={numberPaginate}
                textAlign='center'
                onChange={(e) =>
                  setstate({
                    ...state,
                    numberPaginate: Number(e.target.value)
                  })
                }
              >
                {[10, 20, 30, 40, 50].map((pageSize) => (
                  <Text
                    as='option'
                    textAlign='center'
                    key={pageSize}
                    value={pageSize}
                  >
                    {pageSize}
                  </Text>
                ))}
              </Select>
            </Flex>
          </Show>
        </Flex>

        <Flex>
          <Tooltip label='Next Page'>
            <IconButton
              aria-label='pagina siguiente'
              icon={
                <ChevronRightIcon
                  h={{ base: 4, sm: 6 }}
                  w={{ base: 4, sm: 6 }}
                />
              }
              onClick={increment}
            />
          </Tooltip>
          <Tooltip label='Last Page'>
            <IconButton
              onClick={() =>
                setstate({
                  ...state,
                  page: paginas.length
                })
              }
              aria-label='ultima pagina'
              icon={
                <ArrowRightIcon h={{ base: 2, sm: 3 }} w={{ base: 2, sm: 3 }} />
              }
              ml={{ base: 1, sm: 4 }}
            />
          </Tooltip>
        </Flex>
      </Flex>
      <Show below='lg'>
        <Flex
          fontSize={{ base: '12px', md: 'inherit' }}
          alignItems='center'
          flexDirection='column'
          gap={2}
          px={5}
        >
          <Flex alignItems='center'>
            <Text flexShrink='0'>Ir a la página :</Text>{' '}
            <Select
              as='select'
              id='paginas'
              w={24}
              p={1}
              textAlign='center'
              color='text-gray-600'
              value={page}
              onChange={(e) =>
                setstate({ ...state, page: Number(e.target.value) })
              }
            >
              {paginas.map((page) => (
                <Text as='option' textAlign='center' key={page} value={page}>
                  {page}
                </Text>
              ))}
            </Select>
          </Flex>
          <Flex alignItems='center'>
            <Text flexShrink='0'>Registros por página :</Text>{' '}
            <Select
              w={24}
              p={1}
              value={numberPaginate}
              textAlign='center'
              onChange={(e) =>
                setstate({
                  ...state,
                  numberPaginate: Number(e.target.value)
                })
              }
            >
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <Text
                  textAlign='center'
                  as='option'
                  key={pageSize}
                  value={pageSize}
                >
                  {pageSize}
                </Text>
              ))}
            </Select>
          </Flex>
        </Flex>
      </Show>
    </>
  )
}

export default Pagination
