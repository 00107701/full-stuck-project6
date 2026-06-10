import api from './axiosClient';

// אפשר לסנן: fetchTrips(userId, { status: 'planned' })
export const fetchTrips = (userId, params = {}) =>
  api.get(`/travelers/${userId}/trips`, { params }).then(r => r.data);

export const createTrip = (userId, data) =>
  api.post(`/travelers/${userId}/trips`, data).then(r => r.data);

export const updateTrip = (userId, tripId, data) =>
  api.put(`/travelers/${userId}/trips/${tripId}`, data).then(r => r.data);

export const deleteTrip = (userId, tripId) =>
  api.delete(`/travelers/${userId}/trips/${tripId}`).then(r => r.data);
