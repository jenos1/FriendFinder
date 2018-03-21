var express = require("express");
var path = require("path");
var friendsArr = require("../data/friends.js");

// Routing
module.exports = function(app) {
  app.get("/api/friends", function (req, res) {
    res.json(friendsArr);
  });

// Post newFriend data to friendsArr & get best match.
  app.post("/api/friends", function (req, res) {
    // req.body holds parameters that are sent up from the client as part of a POST request
    var bestMatch = {
      name: "",
      photo: "",
      diffFriend: 100
    };

    var newFriend = req.body;
    // friendsArr.push(req.body);
    console.log("Emily data ", newFriend);
    var newScores = newFriend.scores;
    console.log("Emily scores ", newScores);
    var diff = 0;
    var diffArr = [];

    for(var i = 0; i < friendsArr.length; i++) {
        console.log("friendsArr ", friendsArr[i]);
        console.log("Index 0 ", friendsArr[0]);
        // diff = 0;
      for (var s = 0; s < friendsArr[i].scores[s]; s++ ){
        diff += Math.abs(parseInt(newScores[s]) - parseInt(friendsArr[i].scores[s]));
        
        
      }
      diffArr.push(diff);
      console.log("Diff ", diff);
      console.log("DiffArr", diffArr);
      
      
      // Find the closest match (smallest sum of differences) & return name & photo link.
      // Math.min expects distinct variables not an array, so apply method is used.
      // 
      
    };
    // friendsArr.push(req.body);
  	// res.json(bestMatch);
  });
};