"use server";
import { redirect } from "next/navigation";

export default async function onSubmit(
  state: { message: string } | undefined,
  formData: FormData
): Promise<
  | {
      message: string;
      id?: string;
      nickname?: string;
      password?: string;
      image?: string;
    }
  | undefined
> {
  if (!formData.get("id") || !(formData.get("id") as string)?.trim()) {
    return { message: "no_id" };
  }
  if (
    !formData.get("nickname") ||
    !(formData.get("nickname") as string)?.trim()
  ) {
    return { message: "no_name" };
  }

  if (
    !formData.get("password") ||
    !(formData.get("password") as string)?.trim()
  ) {
    return { message: "no_password" };
  }
  if (!formData.get("image")) {
    return { message: "no_image" };
  }
  // formData.set("nickname", formData.get("nickname") as string);
  let shouldRedirect = false;
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/users`,
      {
        method: "POST",
        body: formData,
        credentials: "include",
      }
    );

    if (response.status === 403) {
      return { message: "user_exists" };
    } else if (response.status === 400) {
      return {
        message: (await response.json()).data[0],
        id: formData.get("id") as string,
        nickname: formData.get("nickname") as string,
        password: formData.get("password") as string,
        image: formData.get("image") as string,
      };
    }

    console.log(await response?.json());
    shouldRedirect = true;
  } catch (error) {
    console.error(error);
    return { message: "서버 오류 발생" };
  }

  if (shouldRedirect) {
    redirect("/home"); // try/catch문 안에서 X
  }
  return { message: "" };
}
