Router.route('/', function () {
  this.render('hello', {
    data: function () { return Items.findOne({_id: this.params._id}); }
  });
});


//// Example route
//Router.route('/', function () {
//  this.render('hello', {
//    data: function () { return Items.findOne({_id: this.params._id}); }
//  });
//});
