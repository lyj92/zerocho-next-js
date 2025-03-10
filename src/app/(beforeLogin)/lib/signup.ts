"use server";
import { redirect } from "next/navigation";

export default async function onSubmit(
  state: { message: string } | undefined,
  formData: FormData
): Promise<{ message: string } | undefined> {
  if (!formData.get("id") || !(formData.get("id") as string)?.trim()) {
    return { message: "no_id" };
  }
  if (!formData.get("name") || !(formData.get("name") as string)?.trim()) {
    return { message: "no_name" };
  }
  if (!formData.get("password") || !(formData.get("password") as string)?.trim()) {
    return { message: "no_password" };
  }
  if (!formData.get("image")) {
    return { message: "no_image" };
  }

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`, {
      method: "POST",
      body: formData,
      credentials: "include",
    });

    if (response.status === 403) {
      return { message: "user_exists" }; // 기존처럼 예외 대신 반환
    }

    redirect("/home");
  } catch (error) {
    console.error(error);
    return { message: "서버 오류 발생" };
  }
}
