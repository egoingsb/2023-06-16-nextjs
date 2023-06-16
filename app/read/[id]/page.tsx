type ReadProps = {
  params: {
    id: string;
  };
};
export default function Read(props: ReadProps) {
  return <>Read!!! {props.params.id}</>;
}
