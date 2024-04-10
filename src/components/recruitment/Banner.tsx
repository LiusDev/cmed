import { useRouter } from "next/router"
import { Button, Trans } from "../common"
import { useCallback, useState, type ChangeEventHandler } from "react"

const Banner = () => {
    const router = useRouter()
    const [keyword, setKeyword] = useState("")

    const handleSearchButton = useCallback(() => {
        router.push(`/project?keyword=${keyword}`)
    }, [keyword, router])

    const handleSearchInput = useCallback<ChangeEventHandler<HTMLInputElement>>(e => { setKeyword(e.target.value) }, [])


    return (
        <section className="mt-16">
            <div className="bg-[url('/home/home-banner.webp')] bg-no-repeat bg-center bg-cover aspect-4/3 md:aspect-21/9 lg:aspect-4/1 flex justify-center items-end">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-4 pb-12 w-full px-4">
                    <input
                        type="text"
                        className="w-full max-w-[800px] h-12 bg-white px-8 outline-none"
                        placeholder="Tìm kiếm vị trí tuyển dụng"
                        value={keyword}
                        onChange={handleSearchInput}
                    />
                    <Button className="h-12" onClick={handleSearchButton}>
                        <Trans text="common.search" />
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Banner
