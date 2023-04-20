// problem: make a prop optional
// sol 1: using Optional - "?""
// sol 2: assigning default value - when field is missing

type OptionalPropType = {
  name: string;
  message?: number; // sol 1 - message is an optional field
  isLoggedIn: boolean;
};

export default function OptionalProp({
  name,
  message = 0, // sol 2 - assigning default value while destructuring
  isLoggedIn
}: OptionalPropType) {
  return (
    <>
      <h3>
        {isLoggedIn &&
          `Welcome ${name}, you have ${
            message ? message : `no`
          } unread messages`}
      </h3>
    </>
  );
}
