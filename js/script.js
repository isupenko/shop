let button = document.getElementById('burger');

let navigation = document.getElementById('menu');

button.addEventListener('click', function () {
  navigation.classList.toggle('menu-header_show');
});

window.onload = function () {
  document.addEventListener("click", documentActions);


  //Actions (делегирование событий click)

  function documentActions(e) {
    //создаем константу и присваиваем нажатый обьект
    const targetElement = e.target;
    //если у нашего обьекта есть класс 'search-form__icon'
    if (targetElement.classList.contains('header__search')) {
      //тогда мы находим обьект '.search-form' обращаемся к списку классов и убираем или добавляем '_active'
      document.querySelector('.search-form').classList.toggle('_active');
      //Убираем поле формы щелкнув по любому месту
    } else if (!targetElement.closest('.search-form') && document.querySelector('.search-form._active')) {
      document.querySelector('.search-form').classList.remove('_active');
    }
  }
}