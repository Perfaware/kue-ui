import Ember from 'ember';

export default Ember.Route.extend({
  jobs: Ember.inject.service(),
     queryParams: {
        page: { refreshModel: true },
        sort: { refreshModel: true },
        state: { refreshModel: true }
    },

    model(params) {
        this.controllerFor('jobs.type').set('type', params.type);
        this.controllerFor('application').set('type', params.type);
        return this.get('jobs').find({
            type: params.type,
            state: params.state,
            page: params.page,
            order: params.order
        });
    },

    activate() {
        this._super();
        window.scrollTo(0,0);
    }

});
