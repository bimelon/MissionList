export const CLEAR_MISSION = 'CLEAR_MISSION'
export const CREAT_MISSION = 'CREAT_MISSION';
export const READ_MISSION = 'READ_MISSION';
export const ADD_MISSION = 'ADD_MISSION';

export function creatMission(){
  return {
    type:CREAT_MISSION,
  };
}

export function readMission(){
  return {
    type:READ_MISSION,
  };
}

export function addMission(){
  return {
    type:ADD_MISSION,
  };
}
export function clearMission(key){
  return {
    type:CLEAR_MISSION,
    key:key,
  };
}
