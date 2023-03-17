// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

$(document).ready(function () {
  var show = true;
  var countbox = ".diag__list";
  $(window).on("scroll load resize", function () {
    if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
    var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
    var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
    var w_height = $(window).height(); // Высота окна браузера
    var d_height = $(document).height(); // Высота всего документа
    var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
    if (
      w_top + 500 >= e_top ||
      w_height + w_top == d_height ||
      e_height + e_top < w_height
    ) {
      $(".bold").css("opacity", "1");
      $(".bold").spincrement({
        thousandSeparator: "",
        duration: 1200,
      });

      var xValues = [
        "980 человек",
        "64 человека",
        "380 человек",
        "900 человек",
      ];
      var yValues = [40, 13, 3, 44];
      var barColors = ["#10A565", "#5CEBAD", "#F5F5F5", "#35B78A"];

      new Chart("myChart", {
        type: "doughnut",
        data: {
          labels: xValues,
          datasets: [
            {
              backgroundColor: barColors,
              data: yValues,
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          plugins: {
            legend: false, // Hide legend
          },
        },
      });

      show = false;
    }
  });
});
