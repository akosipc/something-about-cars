import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { zodResolver } from '@hookform/resolvers/zod'

import { ADD_LOG } from '@mutations/Log'

import {
  Input,
  Button,
  Select,
  Textarea,
  FormLabel,
  InputGroup,
  FormControl,
  InputLeftAddon,
  FormErrorMessage,
} from '@chakra-ui/react'

const schema = z.object({
  type: z.string({ required_error: 'Type is required' }).trim(),
  amount: z.number().gt(0, { message: "Please input a number greater than 0" }),
  comments: z.string().trim()
})

export const LogForm = () => {
  const [type, setType] = useState('')
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({ resolver: zodResolver(schema) })

  const [addLog, { data, loading, error }] = useMutation(ADD_LOG)

  const onSubmit = data => {
    addLog({ variables: { object: data }})
  }

  return (
    <form onSubmit={ handleSubmit(onSubmit) }>
      <FormControl isInvalid={ errors.type?.message} isRequired>
        <FormLabel> Log Type </FormLabel>
        <Select 
          placeholder='Select Log Type'
          {...register('type')}
        >
          <option> Gas </option>
          <option> Maintenance </option>
          <option> Car Detailing </option>
        </Select>
        <FormErrorMessage>
          { errors.type?.message }
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={ errors.amount?.message } isRequired>
        <FormLabel> Amount in PHP </FormLabel>
        <InputGroup>
          <InputLeftAddon children='₱' />
          <Input
            type='number'
            placeholder='5000.00'
            {...register('amount', { valueAsNumber: true })}
          />
        </InputGroup>
        <FormErrorMessage>
          { errors.amount?.message }
        </FormErrorMessage>
      </FormControl>

      <FormControl>
        <FormLabel> Comments </FormLabel>
        <Textarea 
          placeholder='You can add some comments here'
          {...register('comments')}
        />
      </FormControl>

      <Button
        mt={4}
        type='submit'
        isLoading={isSubmitting}
        colorScheme='purple'
        loadingText='Submitting...'
      >
        Submit
      </Button>
    </form>
  )
}

