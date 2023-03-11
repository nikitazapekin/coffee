import "./footerOfPage.css"
import Beans from "./coffee-beans.png"
import Bb from "./bb.png"

export const FooterOfPage=()=>{
    return (
        <div>
            <div className="footerOfPage">
                <div className="footerOfPageItems">
                    <div className="footerOfPageItem">
                        <img src={Beans} alt="beans" className="footerBeansImage" />
                        Coffee house</div>
                    <div className="footerOfPageItem">Our Coffee</div>
                    <div className="footerOfPageItem">For Your Pleasure</div>
                </div>
                <div className="footerOfPageLine">
                    <hr className="footerOfPageHr" />
        <img src={Bb} alt="beans" className="footerOfPageLineImage" />
                    <hr className="footerOfPageHr" />
                </div>
            </div>
        </div>
    )
}