import React , {useState} from 'react';
import Collapsible from 'react-Collapsible'

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const [learnMore,setLearnMore]=useState(false);
const {text}='As one of my favourite programming languages and toolkit for data engineering. <n/> I have hands on project done individually on python (not my course work). I recently revisited pandas library following a certification form kaggle.<n/> I have hands on experience with Databricks, Azure Data lake, Azure cosomoDB.'
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
           <br/>
        </SectionText>
        {learnMore ? text: '${text.substring(0,250)}'}
        <Button onClick={() => setLearnMore(!learnMore)= " "}>Learn More</Button>
      </LeftSection>
    </Section>
  </div>
);

export default Hero;