import { useFormContext } from 'react-hook-form'
import { DeliveryAddressFormData } from '../..'
import { Input } from '../../../../components/Input'
import { DeliveryAddressFormContainer } from './styles'

export function DeliveryAddressForm() {
  const { register, formState } = useFormContext<DeliveryAddressFormData>()

  const { errors } = formState

  return (
    <DeliveryAddressFormContainer>
      <Input
        inputSize="regular"
        id="zipcode"
        type="text"
        placeholder="CEP"
        maxLength={8}
        error={errors.zipcode?.message}
        {...register('zipcode')}
      />
      <Input
        inputSize="large"
        id="street"
        type="text"
        placeholder="Rua"
        error={errors.street?.message}
        {...register('street')}
      />
      <div>
        <Input
          inputSize="regular"
          id="number"
          type="text"
          placeholder="Número"
          {...register('number', { valueAsNumber: true })}
          error={errors.number?.message}
        />
        <Input
          inputSize="large"
          id="complement"
          type="text"
          placeholder="Complemento"
          error={errors.complement?.message}
          {...register('complement')}
        />
      </div>
      <div>
        <Input
          inputSize="regular"
          id="neighborhood"
          type="text"
          placeholder="Bairro"
          error={errors.neighborhood?.message}
          {...register('neighborhood')}
        />
        <Input
          inputSize="large"
          id="city"
          type="text"
          placeholder="Cidade"
          error={errors.city?.message}
          {...register('city')}
        />
        <Input
          inputSize="small"
          id="district"
          type="text"
          placeholder="UF"
          maxLength={2}
          error={errors.district?.message}
          {...register('district')}
        />
      </div>
    </DeliveryAddressFormContainer>
  )
}
