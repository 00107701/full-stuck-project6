import api from './axiosClient';

export const fetchEntries = (userId) =>
  api.get(`/travelers/${userId}/journal`).then(r => r.data);

export const createEntry  = (userId, data) =>
  api.post(`/travelers/${userId}/journal`, data).then(r => r.data);

export const updateEntry  = (userId, entryId, data) =>
  api.put(`/travelers/${userId}/journal/${entryId}`, data).then(r => r.data);

// השרת מוחק memories לפני הרשומה
export const deleteEntry  = (userId, entryId) =>
  api.delete(`/travelers/${userId}/journal/${entryId}`).then(r => r.data);
