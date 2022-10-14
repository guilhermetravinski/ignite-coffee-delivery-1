import { MapPinLine } from 'phosphor-react'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as zod from 'zod'
import { CartContext } from '../../contexts/CartContext'
import { CardHeader } from './components/CardHeader'
import { CartSummary } from './components/CartSummary'
import { PaymentMethods } from './components/PaymentMethods'
import { Subtitle } from './components/Subtitle'
import {
  CartContainer,
  DefaultInput,
  FormContainer,
  FullsizeInput,
  InputsContainer,
  SmallInput,
} from './styles'

const deliveryAddressFormValidationSchema = zod.object({
  zipcode: zod.string().regex(/[0-9]{5}-[0-9]{3}/, 'Digite um CEP Válido'),
  street: zod.string().min(5, 'Digite um nome de rua válido'),
  number: zod.number().min(1, 'Digite um número da propriedade válido'),
  complement: zod.string().optional(),
  neighborhood: zod.string().min(1, 'Digite um bairro válido'),
  city: zod.string().min(1, 'Digite uma cidade válida'),
  district: zod.string().min(2).max(2, 'O UF precisa ter 2 digitos'),
  paymentMethod: zod.enum(['credit-card', 'debit-card', 'money']),
})

export function Cart() {
  const [paymentMethod, setPaymentMethod] = useState('')
  const [zipcode, setZipcode] = useState('')
  const [street, setStreet] = useState('')
  const [number, setNumber] = useState('')
  const [complement, setComplement] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [city, setCity] = useState('')
  const [district, setDistrict] = useState('')

  const { setDeliveryAddressAndPaymentMethod } = useContext(CartContext)

  const navigate = useNavigate()

  function handleSelectPaymentMethod(chosenPaymentMethod: string) {
    if (paymentMethod === chosenPaymentMethod) {
      setPaymentMethod('')
      return
    }

    setPaymentMethod(chosenPaymentMethod)
  }

  function resetForm() {
    setPaymentMethod('')
    setZipcode('')
    setStreet('')
    setNumber('' as any)
    setComplement('')
    setNeighborhood('')
    setCity('')
    setDistrict('')
  }

  function handleAddDeliveryAddress() {
    try {
      deliveryAddressFormValidationSchema.parse({
        zipcode,
        street,
        number: Number(number),
        complement,
        neighborhood,
        city,
        district,
        paymentMethod,
      })
    } catch (err) {
      console.error(err)
      return
    }

    setDeliveryAddressAndPaymentMethod(
      {
        zipcode,
        street,
        number: Number(number),
        complement,
        neighborhood,
        city,
        district,
      },
      paymentMethod as any,
    )
    resetForm()

    navigate('/order-completed')
  }

  return (
    <CartContainer>
      <FormContainer>
        <Subtitle value={'Complete seu pedido'} />

        <form>
          <CardHeader
            icon={<MapPinLine size={22} />}
            title="Endereço de Entrega"
            description="Informe o endereço onde deseja receber seu pedido"
          />

          <InputsContainer>
            <DefaultInput
              type="text"
              value={zipcode}
              placeholder="CEP"
              onChange={(e) => setZipcode(e.target.value)}
            />
            <FullsizeInput
              type="text"
              value={street}
              placeholder="Rua"
              onChange={(e) => setStreet(e.target.value)}
            />
            <div>
              <DefaultInput
                type="text"
                value={number}
                placeholder="Número"
                onChange={(e) => setNumber(e.target.value)}
              />
              <FullsizeInput
                type="text"
                value={complement}
                onChange={(e) => setComplement(e.target.value)}
                placeholder="Complemento"
              />
            </div>
            <div>
              <DefaultInput
                type="text"
                value={neighborhood}
                onChange={(e) => setNeighborhood(e.target.value)}
                placeholder="Bairro"
              />
              <FullsizeInput
                type="text"
                value={city}
                placeholder="Cidade"
                onChange={(e) => setCity(e.target.value)}
              />
              <SmallInput
                type="text"
                value={district}
                placeholder="UF"
                onChange={(e) => setDistrict(e.target.value)}
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
