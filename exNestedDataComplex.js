let activities = [
  ["work", 9],
  ["eat", 2],
  ["play", 2],
  ["sleep", 7]
];

// calculate hours spent on each activity and append percentage to inner array:

for (let i = 0; i < activities.length; i++){
  let percentage = ((activities[i][1] / 24) * 100).toFixed();
  activities[i][2] = percentage + '%';
}
console.log(activities.join('\n'));
