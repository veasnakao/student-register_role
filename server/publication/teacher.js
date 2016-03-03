//dynamic
Meteor.publish('teacher',function(selector){
    //waiting
    Meteor._sleepForMs(10);
    let data = Collection.Teacher.find(selector);
    return data;
});

Meteor.publish('teachers',function(){
    let data = Collection.Teacher.find({});
    return data;
});