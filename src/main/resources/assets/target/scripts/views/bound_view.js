define(["jquery","underscore","backbone","components/configured_rivets","components/mixable_view"],function(e,t,n,r,i){function u(e,t){return!e[o]||!e[o][t]?null:e[o][t]}function a(e,n,r){e[o]||(e[o]={}),t.isObject(n)?t.merge(e[o],n):e[o][n]=r}var s=i.prototype.undelegateEvents,o="_rivets",f=i.extend({getBindModels:function(){return t.pick(this,"model","collection")},addRivets:function(){if(u(this,"enabled"))return;a(this,"enabled",!0),this.listenTo(this,{render:function(e){var n;e=t.defaults(e||{},{sync:!0}),this.disableRivets(),n=r.bind(this.$el,this.getBindModels()),a(this,{view:n}),e.sync&&n.sync()}})},syncRivets:function(){if(!this._rivetsView||!this._rivetsView.sync)return;return this._rivetsView.sync()},disableRivets:function(){var e=u(this,"view");e&&e.unbind&&(e.unbind(),a(this,"view",null))},removeRivets:function(){this.disableRivets(),a(this,"enabled",!1)},undelegateEvents:function(){return this.removeRivets(),s.call(this)}});return f});