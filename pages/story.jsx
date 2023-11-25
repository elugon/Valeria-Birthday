import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import Button_Filled_LArrow from '@parts/Button_Filled_LArrow'
import OurStory_Landing from '@sections/OurStory_Landing'
import Head from 'next/head'

function OurStory() {
  return (
    <main>
      <Head>
        <title>Quien soy</title>
      </Head>
      <OurStory_Landing />
      <PageSection color={'cream'}>
        <InnerWrapper>

          <div className='mt-12'>
              <div>
                <p className='mb-6'>
                  Soy la chispa de cada fiesta y la sonrisa que ilumina cualquier día gris. Mi carisma
                  es tan contagioso como mi risa, y mi corazón, bueno, es tan grande como mi
                  impresionante lista de amigos. Inteligente, creativa, y con una honestidad que,
                  cuidado, ¡podría robarte el corazón! En resumen, soy esa magia que todo el mundo
                  quiere tener cerca.{' '}
                </p>
                <p className='mb-6'>
                  Ah, y por cierto, me encanta comer. Así que, si me invitas a comer, es muy probable
                  que no te diga que no. Adoro el verano y la playa; Y sobre Harry Potter, ¡soy fan total! Especialmente de Gryffindor,
                  obviamente. Porque, ¿quién no querría ser parte de la casa más valiente y audaz?
                  ¡Soy prácticamente la Hermione Granger de la vida real, pero con un apetito de Ron
                  Weasley!{' '}
                </p>
                
              <div className='mb-12'>
            <Button_Filled_LArrow text='Back' url='/' />
          </div>
          </div>
          </div>
        </InnerWrapper>
      </PageSection>
    </main>
  )
}
export default OurStory
