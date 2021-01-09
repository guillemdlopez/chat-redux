import { FETCH_MESSAGES, POST_MESSAGE } from "../actions/index";

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_MESSAGES: {
      return action.payload.messages;
    }
    case POST_MESSAGE: {
      const copyState = state.slice(0);
      copyState.push(action.payload);
      return copyState;
    }
    default:
      return state;
  }
}
