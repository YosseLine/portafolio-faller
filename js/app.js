$(document).ready(function() {
  $('#btn-next-page').on('click', function(event) {
    event.preventDefault();
    $('#principal').addClass('transition-page');
    $('#second-page').removeClass('hidden');
  });
});
