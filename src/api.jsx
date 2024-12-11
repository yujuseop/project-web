<<<<<<< HEAD
const BASE_URL = "http://fandom-k-api.vercel.app";
export async function getVoteData(pageSize = 6) {
  const query = `/12-9/idols?pageSize=${pageSize}`;
  const response = await fetch(`${BASE_URL}/${query}`);

=======

const BASE_URL = "https://fandom-k-api.vercel.app/";

export async function getChartData({ gender, pageSize = 10 }) {
  const url = new URL(`12-9/charts/{gender}`, BASE_URL);
  url.searchParams.append("gender", gender);
  url.searchParams.append("pageSize", pageSize);
  const response = await fetch(url.toString());
>>>>>>> 6c11dd6ebefd3e89020f1de11753bd87b17cb2a8
  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.statusText}`);
  }
  return response.json();
<<<<<<< HEAD
}

//이미지, 순위의 숫자, 이름, 투표수 api ?
=======
>>>>>>> 6c11dd6ebefd3e89020f1de11753bd87b17cb2a8

export async function getSponsershipData() {
  const response = await fetch(
    `https://fandom-k-api.vercel.app/12-9/donations?pageSize=10`
  );
  if (!response.ok) {
    throw new Error("후원데이터를 가져오는데 실패했습니다.");
  }
  const data = await response.json();
  return data;

}
