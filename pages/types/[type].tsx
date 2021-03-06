import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import { TypeContainer } from "../../containers/Type";
import { TypeProvider } from "../../context/type/TypeProvider";
import HeaderLayout from "../../layouts/HeaderLayout";
import { MainLayout } from "../../layouts/MainLayout";

const TypePage: NextPage = () => {
  const router = useRouter();
  const { type } = router.query;

  return (
    <div className="app-container">
      <Head>
        <title>Pokenext!</title>
        <meta content="Generated by create next app" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <HeaderLayout />
      <TypeProvider>
        <MainLayout>
          <TypeContainer type={type as string} />
        </MainLayout>
      </TypeProvider>
    </div>
  );
};

export default TypePage;
