// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

//= require jquery
//= require semantic-ui
import "@hotwired/turbo-rails"
import "controllers"

$(function() {     $('.ui.dropdown').dropdown(); });
// $(document).on('turbo:load', function(){ //     $('.ui.dropdown').dropdown(); // })
