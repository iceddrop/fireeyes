import GuageChunk from "./Chunks/GaugeChunk";
import AirQualityChunk from "./Chunks/AirQualityChunk";
import RiskEvaluationsChunk from "./Chunks/RiskEvaluationsChunk/RiskEvaluationsChunk";
import NotificationsTableChunk from "./Chunks/NotificationsTableChunk/NotificationsTableChunk";
const Home = () => {
  return (
    <div className="relative z-[-1] pt-12">
      <div className="flex flex-col md:flex-row items-center md:justify-around">
        <AirQualityChunk />
        <RiskEvaluationsChunk />
      </div>
      <div>
         <NotificationsTableChunk />
      </div>
    </div>
  );
};

export default Home;
