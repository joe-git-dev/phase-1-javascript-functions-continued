// code your solution here

function saturdayFun(activity) {
   if (activity){
    return `This Saturday, I want to ${activity}!`;
   }
    else {
    return 'This Saturday, I want to roller-skate!';
    }
}
saturdayFun(activity);
saturdayFun('bathe my dog');

function mondayWork(activity){
    if (activity){
        return `This Monday, I will ${activity}.`;
    }
    else {
        return 'This Monday, I will go to the office.';
    }
}
mondayWork(activity);
mondayWork("work from home");

function wrapAdjective(flair){
    return function(name) {
        return `You are ${flair}${name}${flair}!`;
    }
}

wrapAdjective('*')('special');
wrapAdjective('||')('special');