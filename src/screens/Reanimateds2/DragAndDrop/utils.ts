export const clamp = (
  value: number,
  lowerBound: number,
  upperBound: number
) => {
  "worklet";
  return Math.max(lowerBound, Math.min(value, upperBound));
};

export const objectMove = (object: any, from: number, to: number) => {
  "worklet";
  const newObject = Object.assign({}, object);

  for (const id in object) {
    if (object[id] === from) {
      newObject[id] = to;
    }

    if (object[id] === to) {
      newObject[id] = from;
    }
  }

  return newObject;
};
