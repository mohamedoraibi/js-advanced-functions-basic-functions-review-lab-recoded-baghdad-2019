// Your code here

Calculator={}


function saturdayFun(activity="roller-skate") {
  return (`This Saturday, I want to ${activity}!`);
}

function mondayWork(activity="go to the office") {
  return (`This Monday, I will ${activity}.`);
}

function wrapAdjective(spec="*" ) {
  return function(parm="special") {
    return "You are "+spec+parm+spec+"!"

  }
}
