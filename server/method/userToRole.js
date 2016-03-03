//insert
Meteor.methods({
    'userToRole.insert': function (insertDoc) {
        Roles.addUsersToRoles(insertDoc.users, insertDoc.roles);
    },

    //update
    'userToRole.update': function (updateDoc) {
        Roles.setUserRoles(updateDoc.$set.users, updateDoc.$set.roles);
    },

    //remove
    'userToRole.remove': function (userId) {
        let roles=['Data','Setting','Report'];
        Roles.removeUsersFromRoles(userId,roles);
    }
});
