import BannerImage from '../BannerImage'
import BannerContent from '../BannerContent'

const Banner = () => {
  return (
    <section className="bg-gradient-center container flex flex-col items-center justify-center overflow-hidden py-10 md:py-20">
      <BannerContent />
      <BannerImage />
    </section>
  )
}

export default Banner
