// this is an example of how to use the generated client
// to make a SOAP call to the Verifactu service
// not warranty that this code will work
// you will need to adapt it to your needs

import {
  RegistroAlta,
  SistemaInformatico,
} from '../src/generated/sistemafacturacion'
import { createClientAsync } from '../src/generated/sistemafacturacion/client'
import { RegFactuSistemaFacturacion } from '../src/generated/sistemafacturacion/definitions/RegFactuSistemaFacturacion'
import fs from 'fs'

import { ID_VERSION_REGISTRO_ALTA } from '../src/constants'
import { ClientSSLSecurityPFX } from '../src/index'

import xmlFormat from 'xml-formatter'

async function main() {
  // need a correct certificate and private key
  // on production it's only possible to use a valid certificate
  // use env var to store the content of the certificate and private key
  const CERT_PATH = './certificate.p12'
  const CERT_PASSPHRASE = process.env.CERT_PASSPHRASE || '...'

  // Client options for the SOAP call
  const options = {
    wsdl_options: {
      disableCache: true, // Optional SOAP client options
    },
  }

  const client = await createClientAsync(
    'https://prewww2.aeat.es/static_files/common/internet/dep/aplicaciones/es/aeat/tikeV1.0/cont/ws/SistemaFacturacion.wsdl',
    options,
    'https://prewww10.aeat.es/wlpl/TIKE-CONT/ws/SistemaFacturacion/VerifactuSOAP',
  )

  client.setSecurity(
    new ClientSSLSecurityPFX(
      CERT_PATH, // or a buffer: [fs.readFileSync('/path/to/pfx/cert', 'utf8'),
      CERT_PASSPHRASE,
    ),
  )

  try {
    const sistemaInformatico: SistemaInformatico = {
      NombreRazon: 'Quipu App SL',
      NIF: 'B66086042',
      NombreSistemaInformatico: 'Verifactu MS',
      IdSistemaInformatico: 'A1',
      Version: '1.0',
      NumeroInstalacion: 'INST001',
      TipoUsoPosibleSoloVerifactu: 'S',
      TipoUsoPosibleMultiOT: 'S',
      IndicadorMultiplesOT: 'S',
    }

    const registroAlta: RegistroAlta = {
      IDVersion: ID_VERSION_REGISTRO_ALTA,
      IDFactura: {
        IDEmisorFactura: 'B66086042',
        NumSerieFactura: 'A2004-001',
        FechaExpedicionFactura: '05-12-2024',
      },

      NombreRazonEmisor: 'NombreRazon',

      TipoFactura: 'F1',
      DescripcionOperacion: 'DescripcionOperacion',

      Destinatarios: {
        IDDestinatario: [
          {
            NombreRazon: 'Test Socieda SL',
            NIF: '999999999R',
          },
        ],
      },

      Desglose: {
        DetalleDesglose: [
          {
            CalificacionOperacion: 'S1',
            OperacionExenta: 'E1',
            BaseImponibleACoste: '100.00',
          },
        ],
      },
      CuotaTotal: '100.00',
      ImporteTotal: '100.00',
      Encadenamiento: {
        PrimerRegistro: 'S',
      },
      SistemaInformatico: sistemaInformatico,
      FechaHoraHusoGenRegistro: new Date().toISOString(),

      TipoHuella: '01',
      Huella: '1234567890', // need create algorithm to generate this value
    }

    const parameters: RegFactuSistemaFacturacion = {
      Cabecera: {
        ObligadoEmision: {
          NombreRazon: 'NombreRazon',
          NIF: 'B66086042',
        },
      },

      RegistroFactura: [
        {
          RegistroAlta: registroAlta,
        },
      ],
    }

    const result = await client.RegFactuSistemaFacturacionAsync(parameters, {
      // need send pretty XML else AEAT Soap service not recognize RegistroAlta tag
      // Codigo[4102].El XML no cumple el esquema. Falta informar campo obligatorio.: RegistroAlta
      postProcess: function (_xml: string) {
        return xmlFormat(_xml)
      },
    })

    console.log('Result:', result)
  } catch (error) {
    console.error('Error:', error)
  } finally {
    // save the request into a xml file
    const request = client.lastRequest

    fs.writeFileSync('./example/request.xml', request?.toString() || '')

    // save the response into a xml file
    const response = client.lastResponse

    fs.writeFileSync('./example/response.xml', response)
  }
}

main()
