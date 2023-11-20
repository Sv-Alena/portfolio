import "./home.css";
import { Skills } from "./Skills";

export const HomePage = () => {


  return (
    <div className="home-page">
      <p  className="box">Привет! меня зовут</p>
      <h3 class="animate-charcter"> ЕЛЕНА СВЯТОШЕНКО</h3>

     

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
          <span style={{color: '#153757'}}> web</span>-сайты и приложения. 
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
