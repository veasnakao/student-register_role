//dynamic
Meteor.publish('student',function(selector){
    //waiting
    Meteor._sleepForMs(10);
    let data = Collection.Student.find(selector);
    return data;
});

Meteor.publish('students',function(){
    //waiting
    Meteor._sleepForMs(10);
    let data = Collection.Student.find({});
    return data;
});