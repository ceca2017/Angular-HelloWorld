angular.module("demoApp").service('userService', function() {
  var collection = [
    {firstName: 'Thomas', lastName: 'Ochman'},
    {firstName: 'Andy', lastName: 'Cool'},
    {firstName: 'Raoul', lastName: 'Diffouo'}
  ];
  return {
    users: function() {
      return collection;
    },
    add: function(object) {
      collection.push(object);
    }
  }
});
