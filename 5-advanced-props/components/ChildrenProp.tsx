// problem: access children props - without sending props from the component
// using children keyword

type ChildrenPropType = {
  children: string; // keyword
};
export default function ChildrenProp({ children }: ChildrenPropType) {
  return (
    <>
      <h1>{children}</h1>
    </>
  );
}
