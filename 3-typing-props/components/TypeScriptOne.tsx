// types: while building applications
// interfaces: while building libraries

type NameProps = {
  name: string; //type of prop, that component will recieve
};
export default function TypeScriptOne(props: NameProps) {
  return (
    <>
      <h1>Welcome {props.name}, you have 12 unread messages</h1>
    </>
  );
}
