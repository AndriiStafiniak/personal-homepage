import { Container } from "../../common/Container";
import { Header } from "../../common/Header";
import { Section } from "../../common/Section";
import { MainStyled } from "./styled";
import { skills, skillsToLearn } from "../../common/assests/skillset";
import HeaderPortfolio from "../../common/PortfolioSection";
import { Footer } from "../../common/Footer";
import { PortfolioProjects } from "./PortfolioProjects";


function App() {
  return (
    <Container>
      <Header />
      <MainStyled>
        <Section
          title="My skillset includes 🛠️"
          body={skills}
        />
        <Section
          title="What I want to learn next 🚀"
          body={skillsToLearn}
        />
      </MainStyled>
      <section>
        <HeaderPortfolio />
        <PortfolioProjects />
      </section>
      <Footer />
    </Container>
  );
}

export default App;
