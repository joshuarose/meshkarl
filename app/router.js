import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('create-an-account');
  this.route('faq');
  this.route('support');
  this.route('how-it-works');
  this.route('users');
});

export default Router;
