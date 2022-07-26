import {
  Icon,
  Input,
  FormLabel,
  IconButton,
  FormControl,
  FormErrorMessage,
  Box
} from '@chakra-ui/react'
import { ChangeEvent, ReactElement, useState } from 'react'
import { IconEye } from '../../icons/IconEye'
import { IconEyeSlash } from '../../icons/IconEyeSlash'
import { isEmpty } from '../../utils/isEmpty'

interface IProps {
  label?: string
  name?: string
  value: string | number
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  type?: string
  errorMessage?: string
  maxLength?: number
  rightElement?: ReactElement
}

const ShowPassword = ({ show }: { show: boolean }) => (
  <Icon as={show ? IconEyeSlash : IconEye} />
)

const InputFloat = ({
  label,
  name,
  type,
  value,
  onChange,
  errorMessage,
  rightElement,
  maxLength
}: IProps) => {
  const [show, setShow] = useState(false)
  return (
    <FormControl
      position="relative"
      bg={'gray.100'}
      _dark={{ backgroundColor: 'gray.700' }}
      h={'60px'}
      roundedTop={'md'}
      isInvalid={errorMessage === undefined ? false : !isEmpty(errorMessage)}
    >
      <Input
        maxLength={maxLength}
        type={type === 'password' ? (show ? 'text' : 'password') : type}
        id={name}
        name={name}
        transition={'all 0.3s'}
        rounded="none"
        autoComplete="none"
        _invalid={{ borderBottomColor: 'red.400' }}
        _valid={{ borderBottomColor: 'primary.500' }}
        w="full"
        h="full"
        border={'none'}
        roundedTop={'md'}
        borderBottom={'2px'}
        pt={5}
        px={3}
        value={value}
        onChange={onChange}
        borderBottomColor={value?.length !== 0 ? 'primary.500' : 'gray.300'}
        _hover={{ boxShadow: 'none' }}
        _focus={{
          boxShadow: '0 0 0 1px #00B593',
          borderBottomColor: 'primary.500'
        }}
      />
      <FormLabel
        htmlFor={name}
        color={
          (errorMessage === undefined ? false : !isEmpty(errorMessage))
            ? 'red.400'
            : 'primary.500'
        }
        position="absolute"
        zIndex={1}
        transition={'all 0.3s'}
        _focus={{ top: 1, left: 3, fontSize: 'sm' }}
        top={type === 'date' || type === 'time' || value?.length !== 0 ? 1 : 19}
        left={type === 'date' || type === 'time' || value?.length !== 0 ? 3 : 3}
        fontSize={
          type === 'date' || type === 'time' || value?.length !== 0
            ? 'sm'
            : 'md'
        }
      >
        {label}
      </FormLabel>
      {/* eslint-disable */}
      {type === 'password' ? (
        <IconButton
          aria-label="Show Password"
          type="button"
          position="absolute"
          right={3}
          top={'7.5px'}
          rounded="full"
          transition={'all 0.3s'}
          _focus={{}}
          variant="ghost"
          onClick={() => setShow((prevShow) => !prevShow)}
        >
          <ShowPassword show={show} />
        </IconButton>
      ) : null}

      {rightElement ? (
        <Box right={3} top="10px" position="absolute">
          {rightElement}
        </Box>
      ) : null}
      <FormErrorMessage fontSize="xs" lineHeight={0.5}>
        {errorMessage}
      </FormErrorMessage>
    </FormControl>
  )
}

export default InputFloat
