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
