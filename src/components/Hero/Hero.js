import React , {useState} from 'react';
import Collapsible from 'react-Collapsible'

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const [learnMore,setlearnMore]=useState(false);

const Hero = (props) => (
  <div>
    <Section row nopadding >
      <LeftSection>
        <SectionTitle main center>
            Welcome to my Portfolio <br/>
        </SectionTitle>
        <SectionText>
          Data Engineer with a passion for tech and all things tech. I recently graduated my masters 
          with first class. My major was big data and artificial intellegence following that I am on a lookout 
          for positions in data engineering. 
          <n/>
          As one of my favourite programming languages and toolkit for data engineering. I have hands on project done 
          individually on python (not my course work). I recently revisited pandas library following a certification form kaggle.
          I have hands on experience with Databricks, Azure Data lake, Azure cosomoDB. <br/>
        </SectionText>
        <Button onClick={() => window.location = " "}>Learn More</Button>
      </LeftSection>
    </Section>
  </div>
);

export default Hero;