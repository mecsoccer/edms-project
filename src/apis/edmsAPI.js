import stringParser from 'query-string';

const resources = {
    departments: [
        { id: 1, name: 'account' },
        { id: 2, name: 'finance' },
        { id: 3, name: 'HR' },
        { id: 4, name: 'media' },
    ],
    activities: [
        { id: 1, document: 'Campaign Proposal Slides.ppt', title: 'Document Approval', time: '4 mins ago', user: 'Segun Oni', comment: false, status: 'approved'},
        { id: 2, document: 'Campaign Proposal Slides.ppt', title: 'Document Rejected', time: '9 mins ago', user: 'Segun Oni', comment: false, status: 'rejected' },
    ],
    documents: [
        {id: 1, name: 'Application for leave', description: 'Alpha deta business proposal', created: 'today, 14:30pm', owner: 'Segun Oni', class: 'proposal', due: '12-jan-2018', status: 'pending' },
        {id: 2, name: 'Application for leave', description: 'Presentation Slides', created: 'yesterday, 14:30pm', owner: 'Wale Oni', class: 'proposal', due: '12-jan-2018', status: 'pending' },
        {id: 3, name: 'Application for leave', description: 'Presentation Slides', created: 'yesterday, 14:30pm', owner: 'Segun Oni', class: 'application', due: '12-jan-2018', status: 'pending' },
        {id: 4, name: 'Application for leave', description: 'Presentation Slides', created: 'yesterday, 14:30pm', owner: 'John Doe', class: 'proposal', due: '12-jan-2018', status: 'pending' },
        {id: 5, name: 'Application for leave', description: 'Alpha deta business proposal', created: 'today, 14:30pm', owner: 'Segun Oni', class: 'proposal', due: '12-jan-2018', status: 'approved' },
        {id: 6, name: 'Application for leave', description: 'Presentation Slides', created: 'yesterday, 14:30pm', owner: 'Wale Oni', class: 'proposal', due: '12-jan-2018', status: 'approved' },
        {id: 7, name: 'Application for leave', description: 'Presentation Slides', created: 'yesterday, 14:30pm', owner: 'Segun Oni', class: 'application', due: '12-jan-2018', status: 'approved' },
        {id: 8, name: 'Application for leave', description: 'Presentation Slides', created: 'yesterday, 14:30pm', owner: 'John Doe', class: 'proposal', due: '12-jan-2018', status: 'approved' },
        {id: 9, name: 'Application for leave', description: 'Alpha deta business proposal', created: 'today, 14:30pm', owner: 'Segun Oni', class: 'proposal', due: '12-jan-2018', status: 'approved' },
        {id: 10, name: 'Application for leave', description: 'Presentation Slides', created: 'yesterday, 14:30pm', owner: 'Wale Oni', class: 'proposal', due: '12-jan-2018', status: 'rejected' },
        {id: 11, name: 'Application for leave', description: 'Presentation Slides', created: 'yesterday, 14:30pm', owner: 'Segun Oni', class: 'application', due: '12-jan-2018', status: 'rejected' },
    ],
    members: [],
}

export default {
    get: (requestString) => {
      const path = requestString.match(/\/[a-z]+/g).join('');
      const queryString = requestString.substr(path.length);
      const queryObject = stringParser.parse(queryString);

      if (Object.keys(queryObject).length === 0) {
          return Promise.resolve({
              data: resources[path.slice(1)]
          });
      }
      return Promise.resolve({
        data: resources[path.slice(1)].filter(res => queryObject[Object.keys(queryObject)[0]] === res[Object.keys(queryObject)[0]])
      });
    }
  };