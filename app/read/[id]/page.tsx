type ReadProps = {
  params: {
    id: string;
  };
};
export default async function Read(props: ReadProps) {
  const URL = "http://localhost:9999/topics/" + props.params.id;
  const resp = await fetch(URL);
  const topic = await resp.json();
  return (
    <>
      <h2>{topic.title}</h2>
      {topic.body}
    </>
  );
}
