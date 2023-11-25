import H2 from '@typography/H2'
import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import H3 from '../typography/H3'
import Button_Filled from '@parts/Button_Filled'
function Details({ num }) {
  return (
    <PageSection color={'cream'} id='details'>
      <InnerWrapper>
        <H2 before={num} color={'black'}>
          Detalles del Evento!
        </H2>
        <div className='grid grid-cols-5 gap-14 mt-8'>
          <div className='col-span-5 md:col-span-4 xl:grid-cols-3 pt-0 mt-0'>
            <div className='mb-12 mt-0 pt-0 pb-2'>
              <H3>Cuando y Donde</H3>
              <p>Sabado, 17 de Febrero, 2024 / Desde las 19:00h hasta las 00:00h</p>
              <p>
                <span className='font-semibold'>MIA&apos;S PARTY</span>
                <br />
                Paseo de la rambleta 18, local 2 San Adrián de Besos, Badalona.
              </p>
              <div className='mb-8'>
                <Button_Filled url='https://maps.app.goo.gl/CNusMEaERYQaATw48' text='Map' />
              </div>
            </div>

            <div className='mb-12 mt-4 py-2'>
              <H3>Código de Vestimenta</H3>
              <p>
                Olvídate del arcoíris, esta noche el negro manda. Traje formal, pero con tu estilo
                único. ¿Eres capaz de destacar en la multitud con el mismo color? ¡Desafío aceptado!
              </p>
            </div>
            <div className='mb-12 mt-4 py-2'>
              <H3>Regalos en Efectivo ¡Al Cajón Mágico!</H3>
              <p>
                ¿En efectivo? ¡Súper original! Pero, hey, es práctico. Así que si traes un sobre
                lleno de amor (y billetes), échalo en el cajón que encontrarás al entrar. ¡Es como
                una piñata, pero al revés!
              </p>
            </div>
            <div className='mb-12 mt-4 py-2'>
              <H3>Comida y Bebidas ¡Para Todos los Gustos!</H3>
              <p>
                ¿Listo para saborear la fiesta? Tendremos bebidas ilimitadas (alcohólicas y no
                alcohólicas según la edad), así como una deliciosa variedad de bocadillos salados y
                dulces. ¡Y eso no es todo! Entre las 20:00 y 21:00 hrs, disfruta de suculentas
                hamburguesas y tacos de carne. ¡Come todo lo que quieras!
              </p>
            </div>
            <div className='mb-12 mt-4 py-2'>
              <H3>Itinerario</H3>
              <p>
                <ul>
                  <li>
                    <strong>19:00h:</strong> Comenzamos con un mágico vals.
                  </li>
                  <li>
                    <strong>20:00h a 21:00h:</strong> Hora de deleitarse con hamburguesas y tacos.
                  </li>
                  <li>
                    <strong>22:00h:</strong> El gran momento de la torta.
                  </li>
                  <li>
                    <strong>23:00h a 00:00h:</strong> ¡La hora loca! Un cierre espectacular con
                    mucha diversión y baile.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default Details
