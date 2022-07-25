import { ChangeEvent, Dispatch, useMemo, useState } from 'react'
import { Box, chakra, Flex, Icon, IconButton, Text } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

import InputFloat from '../../input/inputFloat'
import { isEmpty } from '../../../utils/isEmpty'

interface OptionProps {
  desc?: string
  label: string
  value: string
  onClick?: () => void
}

interface IData {
  value: string
  label: string
  desc: string
}
interface ISelectData {
  selectOptions: IData[]
  label: string
  setValue: Dispatch<React.SetStateAction<number | undefined>>
  innerValue: string
  setInnerValue: Dispatch<React.SetStateAction<string | undefined>>
}

const Option = ({ onClick, label, desc }: OptionProps) => (
  <chakra.button type='button' onClick={onClick} textAlign='left'>
    <Flex
      p={2}
      w='full'
      pos='relative'
      align='center'
      borderLeftWidth='4px'
      borderLeftColor='transparent'
      transition='background 150ms linear'
      _hover={{ borderLeftColor: 'primary.500', bg: 'primary.50' }}>
      <Flex align='center' w='full'>
        <Box mx='8px' mt='-4px'>
          <Text fontWeight='semibold'>{label}</Text>
          <Box w='full' mt='-4px'>
            <Text fontSize='12px' color='gray.500' textTransform='none'>
              {desc}
            </Text>
          </Box>
        </Box>
      </Flex>
    </Flex>
  </chakra.button>
)

const Select = ({ selectOptions, label, setValue, innerValue, setInnerValue }: ISelectData) => {
  const [isOpen, setIsOpen] = useState(false)

  const filterOptions = useMemo(() => {
    return selectOptions?.filter(({ label }) => {
      return label.toLowerCase().includes(innerValue.toLowerCase())
    })
  }, [innerValue])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsOpen(!isEmpty(e.target.value))
    setInnerValue(e.target.value)
  }

  const handleSelect = (data: OptionProps) => {
    setIsOpen(false)
    setInnerValue(data.label)
    setValue(Number(data.value))
  }

  return (
    <Box w='full'>
      <Box h='60px' w='full' pos='relative'>
        <InputFloat
          value={innerValue}
          onChange={handleChange}
          label={label}
          rightElement={
            <IconButton
              zIndex={1}
              variant='ghost'
              colorScheme='primary'
              aria-label='Abrir select'
              icon={<Icon as={ChevronDownIcon} />}
              onClick={() => setIsOpen((prev) => !prev)}
            />
          }
        />

        <Box
          w='full'
          bg='white'
          top='105%'
          zIndex={40}
          shadow='base'
          pos='absolute'
          rounded='base'
          overflowY='auto'
          maxH={isOpen ? '300px' : '0'}>
          <Flex flexDir='column' w='full'>
            {filterOptions.map((data) => (
              <Option {...data} key={data.value} onClick={() => handleSelect(data)} />
            ))}
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}

export default Select
