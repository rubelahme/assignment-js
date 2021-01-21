//code link: https://github.com/rubelahme/assignment-js



// one ************************
function kilometerToMeter(value) {
    var meter = value *1000;
    return meter;
}
var totalResult =kilometerToMeter(3);
console.log(totalResult);




// two*************************
function budgetCalculator(watch,mobail,laptop) {
    var watch=(watch *50);
    var mobail=(mobail *100);
    var laptop=(laptop *200);
    var totalCost = watch + mobail + laptop;
    return totalCost;
}
var totalmoney =budgetCalculator(3,3,3);
console.log(totalmoney);





// three****************************
function hotelCost(totalDay){
    var totalCost =0;
    if (totalDay <=10) {
        totalCost = totalDay *100;
    } else if (totalDay <=20){
        var fast10Day =10 *100;
        var remainingDay =totalDay -10;
        var second20Day = remainingDay *80
        totalCost =fast10Day + second20Day;
    } else{
        var fast10Day =10 *100;
        var second20Day = 10 *80
        var remainingDay =totalDay -20;
        var thirdallDay =remainingDay *50;
        totalCost =fast10Day +second20Day+ thirdallDay;
    }
    return totalCost;
} 
var totalRastHotelDay =hotelCost(15);
console.log(totalRastHotelDay);





// four*******************************************
function megaFriend(){
    var totalName =['mamun','topu','monirAhmed','mdrubelahmed'];
    var biggName = 0;
    var longName;
    for (var i = 0; i <totalName.length; i++) {
       if (totalName[i].length > biggName) {
           var biggName =totalName[i].length;
           longName =totalName[i];
       } 
    }
    return longName;
}
var totalBigFriendName =megaFriend();
console.log(totalBigFriendName);



