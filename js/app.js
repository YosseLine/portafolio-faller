$(document).ready(function() {
  $('#btn-next-page').on('click', function(event) {
    event.preventDefault();
    $('#principal').addClass('hidden');
    $('#second-page').removeClass('hidden').addClass('transition-page');
  });
});
