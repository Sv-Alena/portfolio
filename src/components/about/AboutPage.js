import { Sertificats } from "./MySertificat";
import "./aboutPage.css";

export const AboutPage = () => {
  return (
    <div className="container-aboutPage">
      <div className="container-About-Me">
        <div className="textAbout">
          <p>
            Моя новая профессия началась с обучения в школе програмирования
            CanSheCode Inc. от HTML до Node и продолжается по сегодняшний день.
          </p>
        </div>
        <div>
          <Sertificats/>
        </div>
      </div>

      <div className="container-contacts"></div>
    </div>
  );
};
