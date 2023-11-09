import "./home.css";

export const HomePage = () => {
  return (
    <div className="home-page">
      <h1 class="spanName">Привет меня зовут</h1>
      <h3 class="spanName loader">
        <span class="m">Е</span>
        <span class="m">Л</span>
        <span class="m">Е</span>
        <span class="m">Н</span>
        <span class="m">А</span>
        <span class="m">&nbsp;</span>
        <span class="m">С</span>
        <span class="m">В</span>
        <span class="m">Я</span>
        <span class="m">Т</span>
        <span class="m">О</span>
        <span class="m">Ш</span>
        <span class="m">Е</span>
        <span class="m">Н</span>
        <span class="m">К</span>
        <span class="m">О</span>
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
