$(document).ready(function() {
    const home = location.host;
    const steMapLnk = ('*');
    $(steMapLnk).each(function() {
      $(this).css('text-transform', '');
      $(this).attr('title', 'class\'s used are: ' + $(this).attr('class') + '');
  
    })
  });
  