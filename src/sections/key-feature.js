/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Tourism from 'assets/key-feature/tourism.svg';
import Mobility from 'assets/key-feature/mobility.svg';
import Retail from 'assets/key-feature/retail.svg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Tourism,
    altText: 'Drive Tourism Growth on yout City',
    title: 'Drive Tourism Growth on yout City',
    text:
      'Identify opportunities & measure success with insights for your city.',
  },
  {
    id: 2,
    imgSrc: Mobility,
    altText: 'Mobility Patterns Access Easily',
    title: 'Mobility Patterns Access Easily',
    text:
      'Mobility patterns unveiled seamlessly, accurately, quickly and freshly updated.',
  },
  {
    id: 3,
    imgSrc: Retail,
    altText: 'Retail Visitors Analytics',
    title: 'Retail Visitors Analytics',
    text:
      'Kido Dynamics breaks down visitation over time, trade area, brand, demographics and more.',
  },
];

export default function KeyFeature() {
  return (
    <section id="feature" sx={{ variant: 'section.keyFeature' }}>
      <Container>
        <SectionHeader
          slogan="What you can get"
          title="Meet the features of our product"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
        ))}
        </Grid>
      </Container>
   </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
