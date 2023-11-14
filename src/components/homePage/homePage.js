import "./home.css";

export const HomePage = () => {
  return (
    <div className="home-page">
      <h1 spanName="spanName">Привет меня зовут</h1>
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
           <p>Я создаю различные проекты и адаптирую их под мобильные устройства</p>
        <h2>Мои проекты</h2>
        </div>
       
      </div>
    </div>
  );
};
