import {BaseUrl} from './NetworkUrl';

const get = urlOption => {
  return fetch(BaseUrl + urlOption, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: 'apikey 7s0cxsgzv8n92uBkaGY9Q4:1w7EahAbtclox8vn7CvxnB',
    },
  })
    .then(res => {
      if (!res.ok) {
        throw Error('Network response was not ok');
      }
      return res.json();
    })
    .catch(err => {
      console.log('Error', err);
      throw err;
    });
};

export {get};
