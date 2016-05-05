# timestamper

Client sends time as a string, Server processes and sends back time JSON

## Tech
Express, Angular

## Niceties && Detail
UNIX Date format conversion. 

```
if(allNums.test(query)){									//query is all numbers
var date = new Date(query*1000);
...
else if(query.search(regMonths)!==-1){						//query has a month
var date = new Date(query)/1000;
```

Regex for checking all numbers.
```
	var allNums = /^\d+$/;
```
Redirect by opening new tab,
```
$window.open($window.location.href+$scope.userInputTime)
```
