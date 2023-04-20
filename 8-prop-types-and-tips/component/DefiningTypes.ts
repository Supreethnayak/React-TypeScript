// file type must be .ts and not .tsx

// NameType can be imported to other required files
export type NameType = {
  first: string;
  last: string;
};

// 1. re-using NameType in same Types file
export type userDetailsType = {
  name: NameType;
  message: number;
  isLoggedIn: boolean;
};
