import { SET_USERS , SET_POSTS} from "./types";

const initialState={
    usersList:[],
    posts:[]
};

const users = (state = initialState, action)=>{
    switch (action.type){
        case SET_USERS:
            return {
                ...state,
                usersList:action.payload
            }
            case SET_POSTS:
                return {
                    ...state,
                    posts:action.payload
                }
        default:
          return state;
    }
}

export default users;