// Your code here

Calculator={}


function saturdayFun(activity="roller-skate") {
  return (`This Saturday, I want to ${activity}!`);
}

function mondayWork(activity="go to the office") {
  return (`This Monday, I will ${activity}.`);
}

function wrapAdjective(parm="special",spec="*") {
  return function() {
    return `You are ${spec}${parm}${spec}!`

  }
}
