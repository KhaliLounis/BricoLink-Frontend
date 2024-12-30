import FeaturesSection from '@/components/Home/Features'
import HeroSection from '@/components/Home/Hero'
import PageSections from '@/components/Home/PageSections'
import PopularServices from '@/components/Home/Services'

const Page = () => {
  return (
    <div>
      <HeroSection />
      <PopularServices />
      <FeaturesSection />
      <PageSections />
    </div>
  )
}
export default Page
