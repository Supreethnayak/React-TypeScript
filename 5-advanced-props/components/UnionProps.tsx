// problem:
// 1. render only on status, depending on props
// 2. accepting only Union status
type StatusType = {
  status: "loading" | "success" | "error";
};
export default function UnionProps({ status }: StatusType) {
  return (
    <>
      <h1>
        {status === "loading"
          ? `Loading`
          : status === "success"
          ? `Success`
          : status === "error" && `Error`}
      </h1>
    </>
  );
}
