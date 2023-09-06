type ClassValue = string | undefined | boolean;

export const classes = (classesList: ClassValue[]): string => {
  if (!classesList.length) return "";

  return classesList
    .filter((cl) => typeof cl === "string" && cl.length)
    .join(" ");
};
