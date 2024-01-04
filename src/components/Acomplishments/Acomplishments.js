import React from 'react';

import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 3, text: 'Open Source Projects'},
  { number: 3.8, text: 'GPA', },
  { number: 48, text: 'Github Repositories', },
  { number: 50, text: 'Github Stars', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle> Personal Achivements</SectionTitle>
    <Boxes>
      {data.map((card,index)=> 
         (
          <Box key= {index}>
            <BoxNum> {card.number}</BoxNum>
            <BoxText>{card.text}</BoxText>
          </Box>
         )
      )}
    </Boxes>
  </Section>
  
);

export default Acomplishments;
