import {
  ADD_COMPLAINT,
  ADD_COMPLAINTS,
  OVERWRITE_COMPLAINTS,
  READ_COMPLAINT,
  UNREAD_COMPLAINT,
  REMOVE_COMPLAINT,
} from './complaint.types';

export const addComplaint = (complaint) => ({
  type: ADD_COMPLAINT,
  payload: complaint,
});

export const addComplaints = (complaints) => ({
  type: ADD_COMPLAINTS,
  payload: complaints,
});

export const overwriteComplaints = (complaints) => ({
  type: OVERWRITE_COMPLAINTS,
  payload: complaints,
});

export const readComplaint = (id) => () => ({
  type: READ_COMPLAINT,
  payload: id,
});

export const unreadComplaint = (id) => () => ({
  type: UNREAD_COMPLAINT,
  payload: id,
});

export const removeComplaint = (id) => () => ({
  type: REMOVE_COMPLAINT,
  payload: id,
});
