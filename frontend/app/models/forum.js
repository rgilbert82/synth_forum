import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  slug: DS.attr('string'),

  user: DS.belongsTo('user'),
  topics: DS.hasMany('topic', {async: true})
});
