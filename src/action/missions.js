export const CLEAR_MISSION = 'CLEAR_MISSION'

export function clearMission(key){
  return {
    type:CLEAR_MISSION,
    key:key,
  };
}
