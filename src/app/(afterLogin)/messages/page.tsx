import style from "./message.module.css";
import Room from "./components/Room";

export default function Home() {
  return (
    <div>
      <div className={style.main}>
        <div className={style.header}>
          <h3>쪽지</h3>
        </div>
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
      </div>
    </div>
  );
}
