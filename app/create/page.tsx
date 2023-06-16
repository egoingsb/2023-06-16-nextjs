"use client";

import { useRouter } from "next/navigation";

export const metadata = {
  title: "Create!",
};

export default function Create() {
  const router = useRouter();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const body = e.target.body.value;
        const option = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, body }),
        };
        fetch("http://localhost:9999/topics", option)
          .then((resp) => resp.json())
          .then((result) => {
            router.push("/read/" + result.id);
          });
      }}
    >
      <p>
        <input type="text" placeholder="title" name="title" />
      </p>
      <p>
        <textarea name="body" placeholder="body"></textarea>
      </p>
      <p>
        <input type="submit" value="create" />
      </p>
    </form>
  );
}
