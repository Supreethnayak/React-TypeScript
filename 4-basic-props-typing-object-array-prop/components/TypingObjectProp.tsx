// typing an object prop
type PersonNameType = {
  personName: { firstName: string; lastName: string };
};
export default function TypingObjectProp({ personName }: PersonNameType) {
  return (
    <>
      <h2>
        {personName.firstName} {personName.lastName}{" "}
      </h2>
    </>
  );
}
