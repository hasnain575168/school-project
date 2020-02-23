const parseQueryString = (queryString) => {
  if (!queryString.includes('?')) {
    return {};
  }

  const params = {};

  const queries = queryString.split('?')[1].split('&');

  for (let i = 0; i < queries.length; i += 1) {
    const [key, value] = queries[i].split('=');

    params[key] = value;
  }

  return params;
};

export default parseQueryString;
