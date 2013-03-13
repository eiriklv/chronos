define(["jquery","backbone","views/graph_view","views/graph","models/job","components/fuzzy_matcher","jquery/select2"],function(e,t,n,r,i,s){var o;return o=t.View.extend({el:".app",events:{"click .new-job":"newJob","click .view-graph":"showGraph","click .total-jobs":"showAll"},initialize:function(){this.listenTo(app.jobsCollection,{add:this.updateJobsCount,remove:this.updateJobsCount,reset:this.updateJobsCount,sync:this.setPersisted})},setPersisted:function(e,t,n){e.each&&e.each(function(e){e.set({persisted:!0},{silent:!0})})},newJob:function(t){var n=new i({persisted:!1});app.detailsCollection.add(n,{validate:!1,create:!0}),e(".right-pane").scrollTop(0)},showGraph:function(t){var r,i,s,o;t&&t.preventDefault()&&t.stopPropagation()&&t.stopImmediatePropagation(),s=e(t.currentTarget),i=s.data("job-id"),r=new n({}),app.lightbox.addClass("graph-wrapper").content(r).open(),!i||r.setTarget(i),r.showGraph()},showAll:function(){app.resultsCollection.reset(app.jobsCollection.models),e("#search-filter").val("")},updateJobsCount:function(){this.$(".all-jobs-count").text(app.jobsCollection.length)}}),o});