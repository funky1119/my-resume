import axios from "axios";

const SOUNDS = `http://localhost:3000/sound`;

// async/await 사용을 원한다면, 함수 외부에 `async` 키워드를 추가하세요.
export async function getSounds(name: string) {
  try {
    const response = await axios.get(`${SOUNDS}/${name}`);
    return response;
  } catch (error) {
    console.error(error);
  }
}
