import React from "react";
import DashboardMain from "../components/Dashboard/DashboardMain";
import Layout from "../components/Layout";
import Head from "next/head";
import authCheck from "../hook/authCheck";

const Dashboard = () => {
  return (
    <Layout>
      <Head>
        <title>Alumni Network | Dashboard</title>
      </Head>
      <DashboardMain />
    </Layout>
  );
};

export default authCheck(Dashboard);
