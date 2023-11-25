import H2 from '@typography/H2'
import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
function Rules({ num }) {
  return (
    <PageSection color={'cream-light'} id='Rules'>
      <InnerWrapper>
        <H2 before={num} color={'black'}>
          Normas
        </H2>
        <p className=''>
          Atención, amantes del caos: nada de tirar papelillos ni convertirse en un DJ con silbatos.
          Respetamos el volumen de la música (aunque nuestro espíritu quiera más) y cuidamos la
          decoración como si fuera nuestro Iphone. ¡Seamos salvajes, pero con estilo!
        </p>
      </InnerWrapper>
    </PageSection>
  )
}
export default Rules
