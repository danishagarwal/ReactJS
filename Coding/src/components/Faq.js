import { useState } from "react"
import { FAQ } from "../constants"


const Section = ({ isVisible, setIsVisible, title, description }) => {

    return (
        <div className="p-2 m-2 border border-black">
            <div className="flex justify-between">
                <h1 className="text-md">{title}</h1>
                {isVisible ?
                    <button
                        className=" underline mx-2 text-black "
                        onClick={() => { setIsVisible(false) }}>
                        Collapse
                    </button>
                    :
                    <button
                        className="underline text-black mx-2 "
                        onClick={() => { setIsVisible(true) }}>
                        Expand
                    </button>
                }

            </div>


            {isVisible && <p className="text-xs">{description}</p>}
        </div >
    )
}


const Faq = () => {

    const [visibleSection, setVisibleSection] = useState(""); //Initially description to be hidden

    return (
        <div>
            <h1 className="text-3xl p-2 m-2 font-bold">Frequently Asked Questions</h1>
            {FAQ.map((ques) => {
                return (
                    <Section id={ques.id} title={ques.title} key={ques.id} description={ques.description} isVisible={visibleSection === ques.id}
                        setIsVisible={(display) => {
                            if (display) {
                                setVisibleSection(ques.id);
                            }
                            //To collapse
                            else {
                                setVisibleSection("");
                            }
                        }}></Section>
                )
            })}
        </div>
    )

}

export default Faq;