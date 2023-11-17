import "./home.css";
import { Skills } from "./Skills";

export const HomePage = () => {
  return (
    <div className="home-page">
      <h1 className="spanName">Привет меня зовут</h1>
      <h3 class="spanName loader">
        <span spanName="m">Е</span>
        <span spanName="m">Л</span>
        <span spanName="m">Е</span>
        <span spanName="m">Н</span>
        <span spanName="m">А</span>
        <span spanName="m">&nbsp;</span>
        <span spanName="m">С</span>
        <span spanName="m">В</span>
        <span spanName="m">Я</span>
        <span spanName="m">Т</span>
        <span spanName="m">О</span>
        <span spanName="m">Ш</span>
        <span spanName="m">Е</span>
        <span spanName="m">Н</span>
        <span spanName="m">К</span>
        <span spanName="m">О</span>
      </h3>

      <div className="home-page_final-block">
        <img
          className="home-photo"
          src="https://avatars.mds.yandex.net/get-ydo/1540809/2a0000017dc1fb807e92fec1e9e0691a8df9/diploma"
        />
        <div>
          <p>
            Создаю различные проекты и адаптирую их под мобильные устройства
          </p>
          <p>
          Я <span style={{color: '#f5329d'}}>Front-End разработчик</span>.
          Мне нравится создавать полезные, функциональные 
          <span style={{color: '#588903'}}> web</span>-сайты и приложения. 
          <p style={{letterSpacing: '6px', fontSize: '16px'}}>Владею навыками:</p>
          
        </p>
        <Skills/>
        <p>Приятно осознавать,
          что мои работы приносят пользу и помогают людям.</p>
        </div>
      </div>
    </div>
  );
};
