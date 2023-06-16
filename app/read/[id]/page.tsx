type ReadProps = {
  params: {
    id: string;
  };
};
export default async function Read(props: ReadProps) {
  const resp = await fetch(
    "http://localhost:3000/api/topics/" + props.params.id
  );
  const topic = await resp.json();
  return (
    <>
      <h2>{topic.title}</h2>
      {topic.body}
    </>
  );
}
