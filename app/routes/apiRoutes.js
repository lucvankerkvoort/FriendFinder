var friends = require("../data/friends");

// We export the entire function to our server file so we can use the functionality
module.exports = function(app) {
  app.get("api/friends", function(req, res) {
    res.json(friends);
  });

  // We create an object to hold our user data
  app.post("/api/friends", function(req, res) {
    var userInput = req.body;
    var bestFriend = {
      name: "",
      gender: "",
      photo: "",
      friendScore: Infinity
    };

    console.log({ userInput });

    for (let i = 0; i < friends.length; i++) {
      var currentFriend = friends[i];
      var totalDifference = 0;
      for (let j = 0; j < currentFriend.data.length; j++) {
        totalDifference += Math.abs(
          currentFriend.data[j] - parseInt(userInput.data[j])
        );
      }
      console.log(totalDifference);
      if (totalDifference < bestFriend.friendScore) {
        bestFriend.friendScore = totalDifference;
        bestFriend.name = currentFriend.name;
        bestFriend.gender = currentFriend.gender;
        bestFriend.photo = currentFriend.photo;
      }
    }

    console.log({ bestFriend });

    friends.push(userInput);
    res.json(bestFriend);
  });
};
