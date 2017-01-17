import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('faq');
  this.route('support');
  this.route('how-it-works');
  this.route('users', function() {
    this.route('new');
  });
});

export default Router;
