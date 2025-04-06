import BackButton from "../components/BackButton";
import SearchForm from "../components/SearchForm";
import Tab from "./components/Tab";
import Post from "../components/Post";
import SearchResult from "./components/SearchResult";
type Props = {
  searchParams: Promise<{ q?: string; f?: string; pf?: string }>;
};

export default async function Search({ searchParams }: Props) {
  // Promise를 기다리고 기본값 처리
  const query = await searchParams;

  return (
    <div className="flex flex-col items-center justify-between">
      <div className="flex flex-row w-full justify-between items-center">
        <BackButton />
        <SearchForm q={query?.q} f={query?.f} pf={query?.pf} />
        <div>dot</div>
      </div>
      <Tab />
      <div className=" flex flex-col w-full">
        <SearchResult searchParams={query as any} />
      </div>
    </div>
  );
}
