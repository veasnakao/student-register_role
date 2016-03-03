//static
//Meteor.publish('subject', function (id) {
//    //waiting
//    Meteor._sleepForMs(2000);
//
//    let data = Collection.Subject.find({_id: id});
//    return data;
//});

//dynamic
Meteor.publish('subject',function(selector){
   //waiting
    Meteor._sleepForMs(10);
    let data = Collection.Subject.find(selector);
    return data;
});

Meteor.publish('subjects',function(){
    Meteor._sleepForMs(10);
    let data = Collection.Subject.find({});
    return data;
});