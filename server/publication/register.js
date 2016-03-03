//dynamic
Meteor.publish('register',function(selector){
    //waiting
    Meteor._sleepForMs(10);
    let data = Collection.Register.find(selector);
    return data;
});
Meteor.publish('registers',function(){
    //waiting
    Meteor._sleepForMs(10);
    let data = Collection.Register.find();
    return data;
});