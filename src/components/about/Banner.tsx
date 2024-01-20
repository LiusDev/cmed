import { Button, Trans } from "../common"

const Banner = () => {
    return (
        <section className="mt-16">
            <div className="bg-[url('/home/home-banner.png')] bg-no-repeat bg-center bg-cover grid grid-cols-12 relative">
                <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-primary/50 flex items-center justify-center py-40 px-4 lg:px-20 transition-all">
                    <div className="text-secondary">
                        <h1 className="text-7xl font-bold mb-12">
                            <Trans text="terms.banner.title" />
                        </h1>
                        <p className="mb-12 text-lg font-light">
                            <Trans text="terms.banner.description" />
                        </p>
                        
                    </div>
                    
                </div>
                <div className="flex absolute space-x-2 bottom-10 right-20">
                    <Button className="w-44 uppercase">
                        <Trans text="terms.banner.buttonContent1" />
                    </Button>
                    <Button className="w-44 uppercase">
                        <Trans text="terms.banner.buttonContent2" />
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Banner
