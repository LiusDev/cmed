import { Trans } from "../common"
import ReasonCard from "./ReasonCard"

const WhyUs = () => {
  return (
    <div className="">
        <h1 className="font-bold text-primary text-3xl text-center py-20"><Trans text="services.detail.title" /></h1>
        <div className="flex px-72 pb-20 space-x-5">
            <ReasonCard title={"services.detail.reasons.reason1.title"} content={"services.detail.reasons.reason1.content"} />
            <ReasonCard title={"services.detail.reasons.reason2.title"} content={"services.detail.reasons.reason2.content"} />
            <ReasonCard title={"services.detail.reasons.reason3.title"} content={"services.detail.reasons.reason3.content"} />
        </div>
    </div>
    
  )
}

export default WhyUs