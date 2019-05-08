// The server must flatten the JSON hierarchy, mapping each item / object in the JSON to a single line of CSV report(see included sample output), where the keys of the JSON objects will be the columns of the CSV report.
// You may assume the JSON data has a regular structure and hierarchy(see included sample file).In other words, all sibling records at a particular level of the hierarchy will have the same set of properties, but child objects might not contain the same properties.In all cases, every property you encounter must be present in the final CSV output.
// You may also assume that child records in the JSON will always be in a property called`children`.


module.exports = {

  parse: function(JSONobj) {
    var flattened = flattenJSON(JSONobj);

    return flattened;
  }

};

// helper functions ====================================

var flattenJSON = function(obj) {
  var csv = [];
  var properties = [];

  // get keys, except 'children'
  csv.push(getKeys(obj));
  properties.push(getKeys(obj));
  flattenRecurse(obj, csv, properties);

  return csv.join("\n");
}

var getKeys = function(obj) {
  var results = Object.keys(obj);
  var index = null;
  for (let i = results.length-1; i >=0; i--) {
    if(results[i] === 'children') {
      index = i;
    }
  }
  if (index !== null) {
    results.splice(index, 1);
  }
  return results.join(',');
}

var getValues = function(obj) {
  var results = [];
  for (var key in obj) {
    if (key !== 'children') {
      results.push(obj[key]);
    }
  }
  return results.join(',');
}

var flattenRecurse = function(obj, resultArr, propsArr) {
  resultArr.push(getValues(obj));
  if (obj.children.length === 0) {
    // do nothing
  } else {
    for (var i = 0; i < obj.children.length; i++) {
      if (i === 0) {
        var newProps = getKeys(obj.children[i]);
        var includes = false;
        for (var str of propsArr) {
          if (str === newProps) {
            includes = true;
          }
        }
        if (includes === false) {
          resultArr.push(newProps);
          propsArr.push(newProps);
        }
      }
      flattenRecurse(obj.children[i], resultArr, propsArr);
    }
  }
}

// var sample = {
//   "firstName": "Joshie",
//     "lastName": "Wyattson",
//       "county": "San Mateo",
//         "city": "San Mateo",
//           "role": "Broker",
//             "sales": 1000000,
//               "children": [
//                 {
//                   "firstName": "Beth Jr.",
//                   "lastName": "Johnson",
//                   "county": "San Mateo",
//                   "city": "Pacifica",
//                   "role": "Manager",
//                   "sales": 2900000,
//                   "children": [
//                     {
//                       "firstName": "Smitty",
//                       "lastName": "Won",
//                       "county": "San Mateo",
//                       "city": "Redwood City",
//                       "role": "Sales Person",
//                       "sales": 4800000,
//                       "children": []
//                     },
//                     {
//                       "firstName": "Allen",
//                       "lastName": "Price",
//                       "county": "San Mateo",
//                       "city": "Burlingame",
//                       "role": "Sales Person",
//                       "sales": 2500000,
//                       "children": []
//                     }
//                   ]
//                 },
//                 {
//                   "firstName": "Beth",
//                   "lastName": "Johnson",
//                   "county": "San Francisco",
//                   "city": "San Francisco",
//                   "role": "Broker/Sales Person",
//                   "sales": 7500000,
//                   "children": [
//                     {
//                       "firstName": "Al",
//                       "lastName": "Wei",
//                       "county": "Santa Clara",
//                       "city": "Mountain View",
//                       "role": "Awesome",
//                       "sales": 48000000000,
//                       "chinchilla": "Lily",
//                       "children": []
//                     },
//                     {
//                       "firstName": "Bob",
//                       "lastName": "Wei",
//                       "county": "Santa Clara",
//                       "city": "Mountain View",
//                       "role": "Awesome",
//                       "sales": 48000000000,
//                       "chinchilla": "Daisy",
//                       "children": []
//                     }
//                   ]
//                 }
//               ]
// };

// console.log(flattenJSON(sample));