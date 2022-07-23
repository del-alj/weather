import Head from "next/head";
import { SearchBox } from "../components/SearchBox";
import { Div, Container } from "../styles/style-main";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Weather App</title>
      </Head>
      <Div>
        <Container>
          <SearchBox />
        </Container>
      </Div>
    </div>
  );
}
