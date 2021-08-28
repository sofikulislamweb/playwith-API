const myFriend = () => {
    fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(data => bestFriend(data))
}
myFriend()
const bestFriend = friends => {
    const bestfriends = friends.results;
    const friendsContainer = document.getElementById('friend');
    for (const friend of bestfriends) {
        console.log(friend);
        const p = document.createElement('p');
        p.innerText = `First Name ${friend.name.first} Last Name ${friend.name.last}`
        friendsContainer.appendChild(p)
    }

}