import React from "react";
import type { InferGetServerSidePropsType, NextPage } from "next";
import MainLayout from "../../../components/home/MainLayout";
import { type GetServerSidePropsContext } from "next";
import Navbar from "../../../components/home/Navbar";
import Image from "next/image";

const Course: NextPage<CourseServerSideProps> = ({ params }) => {
  console.log(params);

  return (
    <>
      <MainLayout>
        <Navbar />
      </MainLayout>
      <div className="relative flex aspect-[18/6] flex-col justify-end opacity-80">
        <Image
          className="absolute object-cover"
          fill={true}
          alt="Image"
          src="/imagen-prueba-2.jpg"
        />
        <div className="relative flex flex-row items-end justify-between bg-transparent">
          <div className="flex-col  p-4">
            <h1 className="mb-2 text-3xl font-bold text-white">
              Curso instructor
            </h1>
            <h1>Duracion: 10 modulos</h1>
          </div>
          <div className="flex flex-col  items-center rounded-tl-xl bg-[rgb(0,0,0,0.8)] p-4 ">
            <h1>Comprar Curso</h1>
            <h1>240000</h1>
            <h1>Medios de pago</h1>
          </div>
        </div>
      </div>
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
