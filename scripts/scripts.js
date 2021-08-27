$(document).ready(function() {
  $('.tab-list a').click(function(e) {
    // Check for active
    $('.tab-list a').removeClass('active');
    $(this).addClass('active');

    // Display active tab
    let currentTab = $(this).attr('href');
    $('.tabs-content .register-tab-wrapper').hide();
    $(currentTab).fadeIn();

    e.preventDefault();
  });
})