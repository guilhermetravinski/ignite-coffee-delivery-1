import { MapPinLine } from 'phosphor-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as zod from 'zod'
import { Input } from '../../components/Input'
import { useCart } from '../../hooks/useCart'
import { PaymentMethodTypes } from '../../reducers/cart/reducer'
import { CardHeader } from './components/CardHeader'
import { CartSummary } from './components/CartSummary'
import { PaymentMethods } from './components/PaymentMethods'
import { Subtitle } from './components/Subtitle'
import { CartContainer, FormContainer, InputsContainer } from './styles'

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

export function Cart() {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethodTypes>(
    null as any,
  )
  const [zipcode, setZipcode] = useState('')
  const [street, setStreet] = useState('')
  const [number, setNumber] = useState('')
  const [complement, setComplement] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [city, setCity] = useState('')
  const [district, setDistrict] = useState('')

  const { setDeliveryAddressAndPaymentMethod, clearCartItemsAndTotalPrice } =
    useCart()

  const navigate = useNavigate()

  function handleSelectPaymentMethod(chosenPaymentMethod: PaymentMethodTypes) {
    if (paymentMethod === chosenPaymentMethod) {
      setPaymentMethod(null as any)
      return
    }

    setPaymentMethod(chosenPaymentMethod)
  }

  function resetForm() {
    setPaymentMethod(null as any)
    setZipcode('')
    setStreet('')
    setNumber('' as any)
    setComplement('')
    setNeighborhood('')
    setCity('')
    setDistrict('')
  }

  function handleAddDeliveryAddress() {
    const deliveryAddressData = {
      zipcode,
      street,
      number: Number(number),
      complement,
      neighborhood,
      city,
      district,
      paymentMethod,
    }

    try {
      deliveryAddressFormValidationSchema.parse({
        ...deliveryAddressData,
        paymentMethod,
      })
    } catch (err) {
      console.error(err)
      return
    }

    setDeliveryAddressAndPaymentMethod(deliveryAddressData, paymentMethod)

    resetForm()
    clearCartItemsAndTotalPrice()
    navigate('/order-completed')
  }

  return (
    <CartContainer className="container">
      <FormContainer>
        <Subtitle value={'Complete seu pedido'} />

        <form>
          <CardHeader
            icon={<MapPinLine size={22} />}
            title="Endereço de Entrega"
            description="Informe o endereço onde deseja receber seu pedido"
          />

          <InputsContainer>
            <Input
              inputSize="regular"
              type="text"
              value={zipcode}
              placeholder="CEP"
              onChange={(e) => setZipcode(e.target.value)}
              maxLength={8}
            />
            <Input
              inputSize="large"
              type="text"
              value={street}
              placeholder="Rua"
              onChange={(e) => setStreet(e.target.value)}
            />
            <div>
              <Input
                inputSize="regular"
                type="text"
                value={number}
                placeholder="Número"
                onChange={(e) => setNumber(e.target.value)}
              />
              <Input
                inputSize="large"
                type="text"
                value={complement}
                onChange={(e) => setComplement(e.target.value)}
                placeholder="Complemento"
              />
            </div>
            <div>
              <Input
                inputSize="regular"
                type="text"
                value={neighborhood}
                onChange={(e) => setNeighborhood(e.target.value)}
                placeholder="Bairro"
              />
              <Input
                inputSize="large"
                type="text"
                value={city}
                placeholder="Cidade"
                onChange={(e) => setCity(e.target.value)}
              />
              <Input
                inputSize="small"
                type="text"
                value={district}
                placeholder="UF"
                onChange={(e) => setDistrict(e.target.value)}
                maxLength={2}
              />
            </div>
          </InputsContainer>
        </form>

        <PaymentMethods
          paymentMethod={paymentMethod}
          onSelectPaymentMethod={handleSelectPaymentMethod}
        />
      </FormContainer>

      <CartSummary onAddDeliveryAddress={handleAddDeliveryAddress} />
    </CartContainer>
  )
}
