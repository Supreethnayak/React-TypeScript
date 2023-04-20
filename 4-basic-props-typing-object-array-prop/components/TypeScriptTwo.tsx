// problem: make no of unread messages to prop
// define type for boolean and object

type NameProps = {
  name: string; //type of prop, that component will recieve
  message: number;
  isLoggedIn: boolean;
};
export default function TypeScriptOne({
  name,
  message,
  isLoggedIn
}: NameProps) {
  return (
    <>
      <h1>
        {isLoggedIn
          ? `Welcome ${name}, you have ${message} unread messages`
          : ` Welcome Guest!`}
      </h1>
    </>
  );
}
