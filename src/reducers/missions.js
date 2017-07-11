import { CLEAR_MISSION } from '../action/missions';

const initialState = {
  missions:[
  {
    key:1,
    title:"1000語読もう",
    importance:0,
    clear:1,
  },{
    key:2,
    title:"2000語読もう",
    importance:0,
    clear:0,
  },{
    key:3,
    title:"3000語読もう",
    importance:0,
    clear:0,
  },{
    key:4,
    title:"動物の本を読もう",
    importance:1,
    clear:0,
  },
  ]
};

export default function missionsReducer(state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case CLEAR_MISSION:
      return Object.assign({},state,{
        missions: state.missions.map((missions)=>{
          if(missions.key == action.key){
            return Object.assign({},missions,{clear:1})
          }
          return missions
        })
      })
    default:
      return state;
  }
}
