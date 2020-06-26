// export const url = 'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=5';
// eslint-disable-next-line max-len
import queryString from 'query-string';

const url = 'https://frontend-test-assignment-api.abz.agency/api/v1/users';

export const getUrl = (pageNumber, howMuch) => queryString.stringifyUrl({
  url,
  query: {
    page: pageNumber, count: howMuch,
  },
});

export const downloadData = (URL) => {
  const data = [];

  fetch(URL)
    .then(response => response.json())
    .then(({ users }) => {
      users.forEach((element) => {
        data.push(element);
      });
    });

  return data;
};
