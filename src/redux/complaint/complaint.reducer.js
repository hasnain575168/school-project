import {
  ADD_COMPLAINT,
  ADD_COMPLAINTS,
  OVERWRITE_COMPLAINTS,
  READ_COMPLAINT,
  UNREAD_COMPLAINT,
  REMOVE_COMPLAINT,
} from './complaint.types';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_COMPLAINT:
      return [
        ...state,
        action.payload,
      ];

    case ADD_COMPLAINTS:
      return [
        ...state,
        ...action.payload,
      ];

    case OVERWRITE_COMPLAINTS:
      return [
        ...action.payload,
      ];

    case READ_COMPLAINT:
      return state.map((complaint) => (
        complaint._id === action.payload
          ? { ...complaint, read: true }
          : { ...complaint }
      ));

    case UNREAD_COMPLAINT:
      return state.map((complaint) => (
        complaint._id === action.payload
          ? { ...complaint, read: false }
          : { ...complaint }
      ));

    case REMOVE_COMPLAINT:
      return state.filter(({ _id }) => _id !== action.payload);

    default:
      return state;
  }
};
