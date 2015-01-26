//= require jquery
//= require jquery_ujs
//= require turbolinks

//= require react
//= require react_ujs

//= require js-routes

//= require_tree .

$(document).ready(function () {
  console.log('It will throw an error calling Routes.root_path()');
  var root_path = Routes.root_path();
  console.log('If it print this, the bug has been fixed. Returned route: ' + root_path);
});