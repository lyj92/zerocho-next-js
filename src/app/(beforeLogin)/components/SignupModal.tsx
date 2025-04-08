import style from "./signup.module.css";
import BackButton from "@/app/(afterLogin)/components/BackButton";
import SignUpForm from "./signUpForm";

export default function SignupModal() {
  return (
    <>
      <div className={style.modalBackground}>
        <div className={style.modal}>
          <div className={style.modalHeader}>
            <BackButton />
            <div>계정을 생성하세요.</div>
          </div>
          <SignUpForm />
        </div>
      </div>
    </>
  );
}
