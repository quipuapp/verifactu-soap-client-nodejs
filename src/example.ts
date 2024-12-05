import {
  RegistroAlta,
  SistemaInformatico,
} from './generated/sistemafacturacion'
import { createClientAsync } from './generated/sistemafacturacion/client'
import { RegFactuSistemaFacturacion } from './generated/sistemafacturacion/definitions/RegFactuSistemaFacturacion'

async function main() {
  const client = await createClientAsync(
    'https://prewww2.aeat.es/static_files/common/internet/dep/aplicaciones/es/aeat/tikeV1.0/cont/ws/SistemaFacturacion.wsdl',
    {
      // Optional SOAP client options
      disableCache: true,
    },
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

    console.log('Result:', result)
  } catch (error) {
    console.error('Error:', error)
  }
}

main()
