Meteor.publish('queryResponses', function(queryId) {
    return Responses.find({queryId: queryId});
});

Meteor.startup(function () {
    // code to run on server at startup
});