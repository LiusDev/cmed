import { Partner } from "@/types"
import { twMerge } from "tailwind-merge"
import { Carousel } from "@mantine/carousel"
import { Trans } from "../common"


const persons = [
    {
        "id": 4,
        "name": "Tang Anh Tuan",
        "position": "CEO - Founder"
        
    },
    {
        "id": 4,
        "name": "Tang Anh Tuan",
        "position": "CEO - Founder"
    },
    {
        "id": 4,
        "name": "Tang Anh Tuan",
        "position": "CEO - Founder"
    },
    {
        "id": 4,
        "name": "Tang Anh Tuan",
        "position": "CEO - Founder"
    },
    {
        "id": 4,
        "name": "Tang Anh Tuan",
        "position": "CEO - Founder"
    }
]

const Personnel = ({ className = "" }) => {
    return (
        <section className={twMerge(`my-20 ${className}`)}>
            <img src="/about/personnel/bg.png" className="absolute w-4/5 mx-auto left-0 right-0" alt="image" />
            <div className="container m-auto px-4">
                <h2 className="absolute text-center text-4xl font-semibold mx-auto left-0 right-0 mt-20 text-secondary">
                    <Trans text="about.personnel.title" />
                </h2>
                <Carousel
                    withIndicators
                    height={800}
                    slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
                    slideGap={{ base: 0, sm: "md" }}
                    loop
                    align="start"
                    controlSize={40}
                >
                    {persons.map((person) => (
                        <Carousel.Slide key={person.id}>
                            <div className="h-full w-full mt-52">
                                <img
                                    src={"/about/personnel/person.png"}
                                    alt={person.name}
                                    className="object-contain mx-auto"
                                />
                                <div className="mx-auto h-20 text-center px-10">
                                    <div className="text-xl font-medium pt-5">{person.name}</div>
                                    <div className="text-base italic py-3">{person.position}</div>
                                    <ul className="text-start text-base">
                                        <li>CEO T-Matsuoka Medical Center</li>
                                        <li>CEO Sakura Clinic</li>
                                        <li>BOD Green Cross Hospital</li>
                                    </ul>
                                
                                </div>
                            </div>
                        </Carousel.Slide>
                    ))}
                </Carousel>
            </div>
        </section>
    )
}

export default Personnel
