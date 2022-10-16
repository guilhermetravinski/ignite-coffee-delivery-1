import { useFormContext } from 'react-hook-form'
import { Input } from '../../../../components/Input'
import { DeliveryAddressFormContainer } from './styles'

export function DeliveryAddressForm() {
  const { register } = useFormContext()

  return (
    <DeliveryAddressFormContainer>
      <Input
        inputSize="regular"
        id="zipcode"
        type="text"
        placeholder="CEP"
        maxLength={8}
        {...register('zipcode')}
      />
      <Input
        inputSize="large"
        id="street"
        type="text"
        placeholder="Rua"
        {...register('street')}
      />
      <div>
        <Input
          inputSize="regular"
          id="number"
          type="text"
          placeholder="Número"
          {...register('number', { valueAsNumber: true })}
        />
        <Input
          inputSize="large"
          id="complement"
          type="text"
          placeholder="Complemento"
          {...register('complement')}
        />
      </div>
      <div>
        <Input
          inputSize="regular"
          id="neighborhood"
          type="text"
          placeholder="Bairro"
          {...register('neighborhood')}
        />
        <Input
          inputSize="large"
          id="city"
          type="text"
          placeholder="Cidade"
          {...register('city')}
        />
        <Input
          inputSize="small"
          id="district"
          type="text"
          placeholder="UF"
          maxLength={2}
          {...register('district')}
        />
      </div>
    </DeliveryAddressFormContainer>
  )
}
