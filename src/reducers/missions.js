import { CLEAR_MISSION ,CREAT_MISSION,READ_MISSION,ADD_MISSION} from '../action/missions';

const initialState = {
  missions:[
  {
    key:1,
    title:"1000語読もう",
    importance:0,
    clear:1,
  }
  ]
};

const Realm = require('realm');

const MissionSchema = {
  name:'missions',
  primaryKey:'key',
  properties:{
    key: 'int',
    title: 'string',
    importance:'int',
    clear:'int',
  }
};


export default function missionsReducer(state = initialState, action) {
  console.log(action.type);
  const realm = new Realm({schema: [MissionSchema]});
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
   case ADD_MISSION:
    realm.write(() => {
      realm.create('missions', {
        key:state.missions.length,
        title:"1000語読もう",
        importance:0,
        clear:1,
      },true);
    });
    return state;

    case READ_MISSION:
      return Object.assign({},state,{missions:realm.objects('missions')});

    case CREAT_MISSION:
      realm.write(() => {
        realm.create('missions', {
          key:1,
          title:"1000語読もう",
          importance:0,
          clear:1,
        },true);
      });
      realm.write(() => {
        realm.create('missions', {
          key:2,
          title:"2000語読もう",
          importance:0,
          clear:1,
        },true);
      });
    return state;

    default:
      return state;
  }
}
