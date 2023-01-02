import React from "react";
import type { GetServerSidePropsContext, NextPage } from "next";
import { getSession } from "next-auth/react";

const CreateCoursePage: NextPage = ({}) => {
  return <div>CreateCoursePage</div>;
};

export default CreateCoursePage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}
