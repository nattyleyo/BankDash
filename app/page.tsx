import React from "react";
import Container from "./components/Dashboard/Container";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import LoginForm from "./components/Forms/LoginForm";
import Landing from "./components/Home/Landing";
const Home = async () => {
  const session = await getServerSession(options);
  return <Landing />;
};
export default Home;
