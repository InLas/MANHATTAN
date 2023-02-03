'use strict'

@@include('plugins/slick.min.js');
@@include('plugins/sliders.js');

const headerToogle = document.querySelector('.menu-header__toogle');
const navHeader = document.querySelector('.nav-header');
const announcementsToogles = document.querySelectorAll('.announcements__toogle');
const announcementsLists = document.querySelectorAll('.announcements__list');

window.onload = function () {
  document.addEventListener('click', documentActions);

  function documentActions(e) {
    const targetElement = e.target;

    if (targetElement.classList.contains('menu-header__toogle')) {
      navHeader.classList.toggle('_active');
      targetElement.classList.toggle('_active');
    }

    if (targetElement.classList.contains('announcements__toogle')) {
      announcementsToogles.forEach(announcementsToogle => {
        announcementsToogle.classList.remove('_active');
      });

      targetElement.classList.add('_active');

      announcementsLists.forEach(announcementsList => {
        announcementsList.classList.remove('_active');

        if (targetElement.dataset.announcements === announcementsList.dataset.announcements) {
          announcementsList.classList.add('_active');
        }
      });
    }
  };

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
      navHeader.classList.remove('_active');
      headerToogle.classList.remove('_active');
    }
  });
}