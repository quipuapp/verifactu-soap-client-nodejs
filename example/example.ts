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

async function main() {
  // need a correct certificate and private key
  // on production it's only possible to use a valid certificate
  // use env var to store the content of the certificate and private key
  const CERT_PATH = './certificate.crt'
  const KEY_PATH = './private.key'

  // Client options for the SOAP call
  const options = {
    wsdl_options: {
      cert: fs.readFileSync(CERT_PATH), // Client certificate
      key: fs.readFileSync(KEY_PATH), // Private key
      strictSSL: false, // Allow self-signed certificates
      rejectUnauthorized: false, // Disable SSL verification (use with caution)
      disableCache: true, // Optional SOAP client options
    },
  }

  const client = await createClientAsync(
    'https://prewww2.aeat.es/static_files/common/internet/dep/aplicaciones/es/aeat/tikeV1.0/cont/ws/SistemaFacturacion.wsdl',
    options,
  )

  client.setEndpoint(
    'https://prewww2.aeat.es/wlpl/TIKE-CONT/ws/SistemaFacturacion/VerifactuSOAP',
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
      IDVersion: '1.0',
      IDFactura: {
        IDEmisorFactura: 'B12345678',
        NumSerieFactura: 'A2004-001',
        FechaExpedicionFactura: '05-12-2004',
      },

      NombreRazonEmisor: 'NombreRazon',

      TipoFactura: 'F1',
      DescripcionOperacion: 'DescripcionOperacion',

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
      FechaHoraHusoGenRegistro: new Date(),

      TipoHuella: 'SHA-256',
      Huella: '1234567890', // need create algorithm to generate this value
    }

    const parameters: RegFactuSistemaFacturacion = {
      Cabecera: {
        ObligadoEmision: {
          NIF: 'B12345678',
          NombreRazon: 'NombreRazon',
        },
      },

      RegistroFactura: [
        {
          RegistroAlta: registroAlta,
        },
      ],
    }

    const result = await client.RegFactuSistemaFacturacionAsync(parameters)

    // keep the requesti

    console.log('Result:', result)
  } catch (error) {
    console.error('Error:', error)
  } finally {
    // save the request into a xml file
    const request = client.lastRequest

    fs.writeFileSync('./request.xml', request?.toString() || '')

    // save the response into a xml file
    const response = client.lastResponse

    fs.writeFileSync('./response.xml', response)
  }
}

main()
