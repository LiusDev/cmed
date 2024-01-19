import { Trans } from "../common"

const Content = () => {
    return (
        <div className="md:px-72 px-5 space-y-5 pb-20">
            <h1 className="text-center text-2xl font-bold py-20 "><Trans text="terms.content.title" /></h1>
            <div className="text-justify">
                <h2 className="uppercase text-lg font-bold"><span>01. </span><Trans text="terms.content.terms1.title" /></h2>
                <p><Trans text="terms.content.terms1.terms1.1" /></p>
                <p><Trans text="terms.content.terms1.terms1.2" /></p>
                <p><Trans text="terms.content.terms1.terms1.3" /></p>
            </div>
            <div className="text-justify">
                <h2 className="uppercase text-lg font-bold"><span>02. </span><Trans text="terms.content.terms2.title" /></h2>
                <p><Trans text="terms.content.terms2.terms2.1" /></p>
            </div>
            <div className="text-justify">
                <h2 className="uppercase text-lg font-bold"><span>03. </span><Trans text="terms.content.terms3.title" /></h2>
                <p><Trans text="terms.content.terms1.terms1.1" /></p>
                <p><Trans text="terms.content.terms1.terms1.2" /></p>
                <p><Trans text="terms.content.terms1.terms1.3" /></p>
            </div>
            <div className="text-justify">
                <h2 className="uppercase text-lg font-bold"><span>04. </span><Trans text="terms.content.terms4.title" /></h2>
                <p><Trans text="terms.content.terms1.terms1.1" /></p>
                <p><Trans text="terms.content.terms1.terms1.2" /></p>
                <p><Trans text="terms.content.terms1.terms1.3" /></p>
            </div>
            <div className="text-justify">
                <h2 className="uppercase text-lg font-bold"><span>05. </span><Trans text="terms.content.terms5.title" /></h2>
                <p><Trans text="terms.content.terms1.terms1.1" /></p>
                <p><Trans text="terms.content.terms1.terms1.2" /></p>
                <p><Trans text="terms.content.terms1.terms1.3" /></p>
            </div>
            <div className="text-justify">
                <h2 className="uppercase text-lg font-bold"><span>06. </span><Trans text="terms.content.terms6.title" /></h2>
                <p><Trans text="terms.content.terms1.terms1.1" /></p>
                <p><Trans text="terms.content.terms1.terms1.2" /></p>
                <p><Trans text="terms.content.terms1.terms1.3" /></p>
            </div>
        </div>
    )
}

export default Content