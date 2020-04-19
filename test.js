var data = '{"first_name":"John","last_name":"Doe","student_id":"123","performance":"Solo","skill":"Beginner","instrument":"Piano","location":"Austin","room":"212","time_slot":"9:00"}';
var data2 = '{"Student":{"first_name":"John","last_name":"Doe","student_id":"123","performance":"Solo","skill":"Beginner","instrument":"Piano","location":"Austin","room":"212","time_slot":"9:00"}}';
data = JSON.parse(data);
console.log("the length is: " + data.length + " and the data is: " + data);