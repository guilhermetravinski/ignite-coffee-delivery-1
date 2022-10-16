import { MapPinLine } from 'phosphor-react'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import * as zod from 'zod'
import { useCart } from '../../hooks/useCart'
import { PaymentMethodTypes } from '../../reducers/cart/reducer'
import { CardHeader } from './components/CardHeader'
import { CartSummary } from './components/CartSummary'
import { PaymentMethods } from './components/PaymentMethods'
import { Subtitle } from './components/Subtitle'
import { CartContainer, FormContainer } from './styles'
import { DeliveryAddressForm } from './components/DeliveryAddressForm'

const deliveryAddressFormValidationSchema = zod.object({
  zipcode: zod.string().min(8).max(8, 'Digite um CEP válido'),
  street: zod.string().min(5, 'Digite um nome de rua válido'),
  number: zod.number().min(1, 'Digite um número da propriedade válido'),
  complement: zod.string().optional(),
  neighborhood: zod.string().min(1, 'Digite um bairro válido'),
  city: zod.string().min(1, 'Digite uma cidade válida'),
  district: zod.string().min(2).max(2, 'O UF precisa ter 2 digitos'),
  paymentMethod: zod.nativeEnum(PaymentMethodTypes),
})

export type DeliveryAddressFormData = zod.infer<
  typeof deliveryAddressFormValidationSchema
>

export function Cart() {
  const deliveryAddressForm = useForm<DeliveryAddressFormData>({
    resolver: zodResolver(deliveryAddressFormValidationSchema),
    defaultValues: {
      zipcode: '',
      city: '',
      complement: '',
      district: '',
      neighborhood: '',
      number: '' as any,
      paymentMethod: '' as any,
    },
  })

  const { setDeliveryAddressAndPaymentMethod, clearCartItemsAndTotalPrice } =
    useCart()

  const navigate = useNavigate()

  const { handleSubmit, reset, setValue, watch } = deliveryAddressForm

  const paymentMethod = watch('paymentMethod')

  function handleSelectPaymentMethod(chosenPaymentMethod: PaymentMethodTypes) {
    if (paymentMethod === chosenPaymentMethod) {
      setValue('paymentMethod', '' as any)
      return
    }

    setValue('paymentMethod', chosenPaymentMethod, { shouldValidate: true })
  }

  function handleAddDeliveryAddress(data: DeliveryAddressFormData) {
    setDeliveryAddressAndPaymentMethod(data, data.paymentMethod)
    clearCartItemsAndTotalPrice()
    reset()
    navigate('/order-completed')
  }

  return (
    <CartContainer className="container">
      <FormContainer>
        <Subtitle value={'Complete seu pedido'} />

        <form
          onSubmit={handleSubmit(handleAddDeliveryAddress)}
          id="delivery-address-form"
        >
          <FormProvider {...deliveryAddressForm}>
            <CardHeader
              icon={<MapPinLine size={22} />}
              title="Endereço de Entrega"
              description="Informe o endereço onde deseja receber seu pedido"
            />

            <DeliveryAddressForm />
          </FormProvider>
        </form>

        <PaymentMethods
          paymentMethod={paymentMethod}
          onSelectPaymentMethod={handleSelectPaymentMethod}
        />
      </FormContainer>

      <CartSummary />
    </CartContainer>
  )
}
