const fetchCall = async (api) => {
  const res = await fetch(api);
  const data = await res.json();
  return data;
}

export default fetchCall;