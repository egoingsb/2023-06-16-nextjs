"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const metadata = {
  title: "Create!",
};

export default function Create() {
  const params = useParams();
  const router = useRouter();
  const id = params.id;
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  useEffect(() => {
    fetch("http://localhost:9999/topics/" + id)
      .then((resp) => resp.json())
      .then((result) => {
        console.log("result", result);
        setTitle(result.title);
        setBody(result.body);
      });
  }, []);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const body = e.target.body.value;
        const option = {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, body }),
        };
        fetch("http://localhost:9999/topics/" + id, option)
          .then((resp) => resp.json())
          .then((result) => {
            router.push("/read/" + result.id);
            router.refresh();
          });
      }}
    >
      <p>
        <input
          type="text"
          placeholder="title"
          name="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </p>
      <p>
        <textarea
          name="body"
          placeholder="body"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        ></textarea>
      </p>
      <p>
        <input type="submit" value="update" />
      </p>
    </form>
  );
}
