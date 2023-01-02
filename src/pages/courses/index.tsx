import React from "react";
import type { NextPage } from "next";
import { trpc } from "../../utils/trpc";

const CoursesPage: NextPage = ({}) => {
  const { data } = trpc.courses.getCourses.useQuery();

  return <div>CoursesPage</div>;
};

export default CoursesPage;
