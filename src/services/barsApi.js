export const getBars = () => {
  return fetch('https://backend-bars.herokuapp.com/api/v1/bars', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => {
      if(!res.ok) throw 'unable to fetch route';
      return res.json();
    });
};

export const createBar = ({ name, address, notes }) => {
  return fetch('https://backend-bars.herokuapp.com/api/v1/bars', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ name, address, notes })
  })
    .then(res => {
      if(!res.ok) throw 'can not get contacts';
      return res.json();
    });
};


