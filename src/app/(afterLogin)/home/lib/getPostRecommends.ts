type Props = { pageParam?: number };

export async function getPostRecommends({ pageParam }: Props) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/postRecommends?cursor=${pageParam}`,
    {
      next: {
        tags: ["posts", "recommends"],
        revalidate: 60,
      },
      // cache: "no-store", // next.js 15버젼에서는 기본값 (없어도 됨) no-store 일때 revalidate 설정은 불가 => 말이 안되는 모순되는 상황 캐시를 하지 말라는데 캐시 값을 1분마다 지워라는 성립되지않음
      cache: "force-cache", // 캐싱을 하고 싶다면 선언해야함
    }
  );
  if (!res?.ok) {
    throw new Error("Failed to fetch data");
  }
  return res?.json();
}
