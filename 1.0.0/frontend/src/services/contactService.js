import { fetchAPI } from './api';

export const contactService = {
  submitContactForm: (formDataObj) => {
    const formData = new FormData();
    formData.append('name', formDataObj.name);
    formData.append('email', formDataObj.email);
    formData.append('subject', formDataObj.subject);
    formData.append('message', formDataObj.message);
    
    if (formDataObj.attachments && formDataObj.attachments.length > 0) {
      formDataObj.attachments.forEach(file => {
        formData.append('attachments', file);
      });
    }

    return fetchAPI('/contact/', {
      method: 'POST',
      body: formData
    });
  }
};