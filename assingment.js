//problem-1
function seertomon(mon){
    let seer = mon/40;
    return seer;
}

const seers = seertomon(120);
// console.log (seers);

//problem-2
function totalsales(shirtprice,pantprice,shoesprice){
    const perShirtpice = 2;
    const perPantpice = 10;
    const perShoespice = 30;
    const shirtsSale =perShirtpice *shirtprice;
    const pantsSale = perPantpice *pantprice;
    const shoesSale = perShoespice *shoesprice;
    const total = shirtsSale + pantsSale + shoesSale;
    return total;
}

var saleTotal = totalsales(100,200,500);
console.log(saleTotal);

//problem-3
function deliveryCost(totalIteam){
    
    if(totalIteam<=100){
        var count = totalIteam *100;
        return count;
    }
    else if(totalIteam<=200){
        
        const firstShirtCost = 100 *100;//first delivery cost
        const containShirtCost =totalIteam -100;
        const seceondShirtCost = containShirtCost * 80;
        const totalCost = firstShirtCost + seceondShirtCost;
        return totalCost;
    }
    else{
        const firstShirtCost =100 *100;//first delivery cost
        const seceondShirtCost =100 *80;// seceond delivery cost
        const containshirtCost = totalIteam - 200;
        const thirdShirtCost = containshirtCost * 50;
        const totalCost = firstShirtCost+seceondShirtCost+thirdShirtCost;
        return totalCost;
    } 

}

//problem-4
const names =['sumiya','omi','safin','mampu','shipa'];

function perfectFriend(friends){
    for(const friend of friends){
        if (friend.length ==5){
          return friend;
        }
    }
}