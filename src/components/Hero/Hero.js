import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <div>
    <Section row nopadding >
      <LeftSection>
        <SectionTitle main center>
            Welcome to my Portfolio <br/>
        </SectionTitle>
        <SectionText>
          I am a postgraduate Computer Science Student majoring in Machine Learning and Big Data. With more <br/>
        </SectionText>
        <Button onClick={() => window.location = " "}>Learn More</Button>
      </LeftSection>
    </Section>
  </div>
);

export default Hero;