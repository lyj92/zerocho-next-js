import SearchForm from "../components/SearchForm";
import Trend from "../components/Trend";

export default function Explore() {
  return (
    <div className="flex w-[660px] flex-col">
      <SearchForm />

      <div className="mt-14 flex flex-col">
        <h2 className="text-xl font-semibold">나를 위한 트렌드</h2>
        <Trend />
        <Trend />
        <Trend />
      </div>
    </div>
  );
}
