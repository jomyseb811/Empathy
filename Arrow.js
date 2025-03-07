const person = {
    name: 'Alice',
    friends: ['Bob', 'Charlie'],
    
    // Traditional function - creates new 'this' context
    printFriendsOld: function() {
        this.friends.forEach(function(friend) {
            console.log(this.name + ' knows ' + friend); // 'this' is undefined
        });
    },
    
    // Arrow function - inherits 'this' from outer scope
    printFriendsNew: function() {
        this.friends.forEach(friend => {
            console.log(this.name + ' knows ' + friend); // Works correctly
        });
    }
    
};
