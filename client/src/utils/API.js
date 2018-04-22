import axios from "axios";

export default {
  // Gets all projects
  getProjects: function() {
    return axios.get("/api/projects");
  },
  // Gets the project with the given id
  getProject: function(id) {
    return axios.get("/api/projects/" + id);
  },  
  // Saves a project to the database
  saveProject: function(projectData) {
    return axios.post("/api/projects", projectData);
  },
  //User: donor/charity API
  registerDonor: function(formData) {
    return axios.post("/donor/register", formData);
  },
  registerCharity: function(formData) {
    return axios.post("/charity/register", formData);
  },
  donorAuth: function(credentials) {
    return axios.post("/donor/login", credentials);
  },
  charityAuth: function(credentials) {
    return axios.post("/charity/login", credentials);
  },
}
