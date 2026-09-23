import { fetchAPI } from './api';

export const projectService = {
  getProjects: () => {
    return fetchAPI('/projects/');
  }
};