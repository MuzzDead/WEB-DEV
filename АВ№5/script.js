// Скрипт для відображення підказок на головній сторінці

$(document).ready(function() {
  $('.hero h2').tooltip({
    title: 'Відпочинок у найкращому місці',
    placement: 'bottom',
    trigger: 'hover'
  });
});

// Скрипт для відображення додаткової інформації про тур при наведенні курсору миші

$(document).ready(function() {
  $('.tours li a').hover(function() {
    $(this).find('img').attr('src', $(this).find('img').attr('data-img-hover'));
    $(this).find('p').show();
  }, function() {
    $(this).find('img').attr('src', $(this).find('img').attr('data-img'));
    $(this).find('p').hide();
  });
});
