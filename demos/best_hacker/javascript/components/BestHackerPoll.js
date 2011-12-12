dojo.provide('client.components.BestHackerPoll');

mulberry.component('BestHackerPoll', {
  componentTemplate : dojo.cache('client.components', 'BestHackerPoll/BestHackerPoll.haml'),

  prep : function() {
    this.hackers = this.baseObj.getData('Hacker').hackers;
    dojo.forEach(this.hackers, function(hacker) {

    });
  },

  init : function() {
  }
});
