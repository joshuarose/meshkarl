import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createAccount(){
      let user = this.get('store').createRecord('user', {
        name: this.get('name'),
        email: this.get('email'),
        password: this.get('password')
      })
      user.save()
    }
  }
});
