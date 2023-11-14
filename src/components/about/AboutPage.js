import { Sertificats } from "./MySertificat";
import { Skills } from "./Skills";

export const AboutPage = () => {
  return (
    <div>
      <div className="container-About-Me">
        <p class="textAbout">
          Я <span class="green">Front-End разработчик</span> , живу в России.
          Люблю создавать полезные, функциональные{" "}
          <span class="red">web-сайты и приложения</span> . Приятно осознавать,
          что мои работы приносят пользу и помогают людям.
        </p>
      </div>
      <Sertificats/>
      <Skills/>
      <div className="container-contacts"></div>
    </div>
  );
};
