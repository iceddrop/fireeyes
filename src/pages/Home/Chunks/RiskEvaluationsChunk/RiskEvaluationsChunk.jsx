import Humidity from "./Humidity";
import Temperature from "./Temperature";
const RiskEvaluationsChunk = () => {
    return (
         <div className="lg:flex items-center">
             <Humidity />
             <Temperature />
         </div>
    ) 
}

export default RiskEvaluationsChunk;