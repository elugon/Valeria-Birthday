import PageSection from '@parts/PageSection'
import InnerWrapper from '@parts/InnerWrapper'
function Footer() {
  return (
    <footer className='flex justify-center items-center'>
      <PageSection>
        <InnerWrapper>
          <p className='flex justify-center items-center max-w-2xl'>
            ¿Bailamos?
          </p>
        </InnerWrapper>
      </PageSection>
    </footer>
  )
}
export default Footer
