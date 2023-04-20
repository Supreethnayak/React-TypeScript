// typing an array prop
type devNamesType = {
  devNames: {
    first: string;
    last: string;
  }[];
};
export default function TypingArrayProp({ devNames }: devNamesType) {
  return (
    <>
      {devNames?.map((name) => {
        return (
          <h4 key={name.first}>
            {name.first} {name.last}
          </h4>
        );
      })}
    </>
  );
}
