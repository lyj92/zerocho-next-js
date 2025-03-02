import style from "./post.module.css";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import ActionButton from "./ActionButton";
import PostArticle from "./PostArticle";
import PostImages from "./PostImages";
import { Post as PostType } from "@/app/model/Post";

// Faker.js 임포트 (설치 필요: npm install @faker-js/faker)
import { faker } from "@faker-js/faker/locale/ko";

dayjs.locale("ko");
dayjs.extend(relativeTime);

// Faker.js를 사용한 목 데이터 생성 함수
const createMockPost = (): PostType => {
  const randomId = faker.string.alphanumeric(10).toLowerCase();

  return {
    postId: faker.number.int({ min: 1, max: 10000 }),
    User: {
      id: randomId,
      nickname: faker.person.fullName(),
      image: faker.image.avatar(),
    },
    content: faker.lorem.paragraph(),
    createdAt: faker.date.recent(),
    Images: Array.from({ length: faker.number.int({ min: 0, max: 4 }) }, (_, i) => ({
      imageId: i + 1,
      ImageId: i + 1,
      link: faker.image.url({ width: 640, height: 480 }),
    })),
  };
};

// 목 데이터 생성 (개발 환경에서만 사용)
const mockPost = createMockPost();

type Props = {
  noImage?: boolean;
  post?: PostType; // post를 선택적으로 변경
};

export default function Post({ noImage, post }: Props) {
  // 실제 post 데이터가 없으면 목 데이터 사용
  const target = post || mockPost;

  // 개발 환경에서만 콘솔에 목 데이터 표시
  if (process.env.NODE_ENV === "development" && !post) {
    console.log("Using mock post data:", target);
  }

  return (
    <PostArticle post={target}>
      <div className={style.postWrapper}>
        <div className={style.postUserSection}>
          <Link href={`/${target.User.id}`} className={style.postUserImage}>
            <img src={target.User.image} alt={target.User.nickname} />
            <div className={style.postShade} />
          </Link>
        </div>
        <div className={style.postBody}>
          <div className={style.postMeta}>
            <Link href={`/${target.User.id}`}>
              <span className={style.postUserName}>{target.User.nickname}</span>
              &nbsp;
              <span className={style.postUserId}>@{target.User.id}</span>
              &nbsp; · &nbsp;
            </Link>
            <span className={style.postDate}>{dayjs(target.createdAt).fromNow(true)}</span>
          </div>
          <div>{target.content}</div>
          {!noImage && target.Images && target.Images.length > 0 && (
            <div>
              <PostImages post={target} />
            </div>
          )}
          <ActionButton />
        </div>
      </div>
    </PostArticle>
  );
}
