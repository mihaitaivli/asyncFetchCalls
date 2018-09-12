const fetchCall = async (api) => {
  try {
    const response = await fetch(api);
    if (!response.ok) throw Error(response.statusText);
    const data = await response.json();
    return data;
  } catch (error) {
    return error.toString();
  }
}

export default fetchCall;