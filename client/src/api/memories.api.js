import api from './axiosClient';

export const fetchMemories  = (entryId) =>
  api.get(`/journal/${entryId}/memories`).then(r => r.data);

export const createMemory   = (entryId, data) =>
  api.post(`/journal/${entryId}/memories`, data).then(r => r.data);

export const updateMemory   = (entryId, memoryId, data) =>
  api.put(`/journal/${entryId}/memories/${memoryId}`, data).then(r => r.data);

export const deleteMemory   = (entryId, memoryId) =>
  api.delete(`/journal/${entryId}/memories/${memoryId}`).then(r => r.data);
