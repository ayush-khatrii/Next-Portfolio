"use client";

import { useEffect, useState } from "react";

const birthYear = 2003;
const birthMonth = 0;
const birthDay = 1;

const calculateAge = () => {
  const dateParts = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  })
    .formatToParts()
    .reduce<Record<string, number>>((parts, part) => {
      if (part.type !== "literal") parts[part.type] = Number(part.value);
      return parts;
    }, {});
  let age = dateParts.year - birthYear;
  const birthdayHasPassed =
    dateParts.month - 1 > birthMonth ||
    (dateParts.month - 1 === birthMonth && dateParts.day >= birthDay);

  if (!birthdayHasPassed) age -= 1;

  return age;
};

const Age = () => {
  const [age, setAge] = useState<number | null>(null);

  useEffect(() => {
    setAge(calculateAge());

    const interval = window.setInterval(() => {
      setAge(calculateAge());
    }, 60 * 60 * 1000);

    return () => window.clearInterval(interval);
  }, []);

  return <>{age ?? ""}</>;
};

export default Age;