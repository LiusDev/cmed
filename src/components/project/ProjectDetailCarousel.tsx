import { Carousel } from "@mantine/carousel"
import { Image } from "@mantine/core"

const items = [
    "/project/detail/carousel/1.png",
    "/project/detail/carousel/2.png",
    "/project/detail/carousel/3.png",
]

const ProjectDetailCarousel = () => {
    const slides = items.map((url, index) => (
        <Carousel.Slide key={url}>
            <img
                src={url}
                alt={`Gallery ${index}`}
                className="w-full h-full object-cover object-center"
            />
        </Carousel.Slide>
    ))
    return (
        <Carousel withIndicators height={600} loop>
            {slides}
        </Carousel>
    )
}

export default ProjectDetailCarousel
