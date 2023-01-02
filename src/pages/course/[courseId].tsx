import React from "react";
import type { InferGetServerSidePropsType, NextPage } from "next";
import MainLayout from "../../../components/home/MainLayout";
import { type GetServerSidePropsContext } from "next";
import Navbar from "../../../components/home/Navbar";

const Course: NextPage<CourseServerSideProps> = ({ params }) => {
  console.log(params);

  return (
    <>
      <MainLayout>
        <Navbar />
      </MainLayout>
      <div className="aspect-[18/6] bg-lightContainer px-6 py-7"></div>
    </>
  );
};

export default Course;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { params } = context;

  return {
    props: {
      params,
    },
  };
};

type CourseServerSideProps = InferGetServerSidePropsType<
  typeof getServerSideProps
>;
