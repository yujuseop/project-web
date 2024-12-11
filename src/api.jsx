const BASE_URL = "http://fandom-k-api.vercel.app";
export async function getVoteData(pageSize = 6) {
  const query = `/12-9/idols?pageSize=${pageSize}`;
  const response = await fetch(`${BASE_URL}/${query}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.statusText}`);
  }
  return response.json();
}

//이미지, 순위의 숫자, 이름, 투표수 api ?
