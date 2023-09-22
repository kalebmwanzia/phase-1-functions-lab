// Code your solution in this file!
function distanceFromHqInBlocks(distanceInblocks){
  return distanceInblocks>=42?(distanceInblocks-42):(42-distanceInblocks);
  }


function distanceFromHqInFeet(pickuplocation){
  const distanceInFeet= distanceFromHqInBlocks
  (pickuplocation)*264
  return distanceInFeet;
}
 function distanceTravelledInFeet(start,pickuplocation){
  return start>pickuplocation?(start-pickuplocation)
  *264:(pickuplocation-start)*264
 } 
 function calculatesFarePrice(start,pickuplocation){
  const distance=distanceTravelledInFeet(start,
    pickuplocation);
    if(distance<400)
    return 0;
  }
   if (distance>400&&distance<=2000){
      return(distance-400)*2/100;
  }
  else if(distance>2000&&distance<=2500){
    return 25
  }
  else{
    return'cannot travel that far';
  }
  
  