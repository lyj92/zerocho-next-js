"use client";
import style from "./signup.module.css";
import BackButton from "@/app/(afterLogin)/components/BackButton";
import Form from "next/form";
import onSubmit from "../lib/signup";
import { useFormState, useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";

function showMessage(message: string | null | undefined) {
  console.log("message", message);
  if (message === "no_id") return "아이디를 입력하세요.";
  if (message === "no_name") return "닉네임을 입력하세요.";
  if (message === "no_password") return "비밀번호를 입력하세요.";
  if (message === "no_image") return "이미지를 업로드하세요.";
  if (message === "user_exists") return "이미 사용 중인 아이디입니다.";

  if (message === "nickname must be a string") {
    return "닉네임이 필요합니다.";
  }
  return message;
}

export default function SignUpForm() {
  const router = useRouter();
  const [state, formAction] = useFormState(onSubmit, { message: "" });
  const { pending } = useFormStatus();
  console.log("state", state);

  if (state?.redirect) {
    router.push("/home");
  }

  return (
    <Form action={formAction}>
      <div className={style.modalBody}>
        <div className={style.inputDiv}>
          <label className={style.inputLabel} htmlFor="id">
            아이디
          </label>
          <input
            id="id"
            name={"id"}
            className={style.input}
            type="text"
            placeholder=""
            defaultValue={state?.id as string}
          />
        </div>
        <div className={style.inputDiv}>
          <label className={style.inputLabel} htmlFor="name">
            닉네임
          </label>
          <input
            id="name"
            name={"nickname"}
            className={style.input}
            type="text"
            placeholder=""
            required
            defaultValue={state?.nickname as string}
          />
        </div>
        <div className={style.inputDiv}>
          <label className={style.inputLabel} htmlFor="password">
            비밀번호
          </label>
          <input
            id="password"
            name={"password"}
            className={style.input}
            type="password"
            placeholder=""
            required
            defaultValue={state?.password as string}
          />
        </div>
        <div className={style.inputDiv}>
          <label className={style.inputLabel} htmlFor="image">
            프로필
          </label>
          <input
            id="image"
            name="image"
            className={style.input}
            type="file"
            accept="image/*"
            required
            defaultValue={state?.image as string}
          />
        </div>
      </div>
      <div className={style.modalFooter}>
        <button type="submit" className={style.actionButton} disabled={pending}>
          가입하기
        </button>
        <div>{showMessage(state?.message)}</div>
      </div>
    </Form>
  );
}
