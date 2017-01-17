import Ember from 'ember';

export default Ember.Route.extend({
  model(){
  return this.store.createRecord('user')
},

  actions:{
    createUser(newUser){

      newUser.save().then(()=>this.transitionTo('users.index'))
    }
  },
  willTransition(){
    // rollbackAttributes() removes the record from the store if the model 'isNew'
    this.controller.get('model').rollbackAttributes()
  }
});
