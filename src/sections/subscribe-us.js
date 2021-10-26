/** @jsxRuntime classic */
/** @jsx jsx */
import { useState, useCallback } from 'react';
import { jsx, Box, Container, Button, Flex, Checkbox, Label } from 'theme-ui';
import { rgba } from 'polished';
import SectionHeader from 'components/section-header';
import Input from 'components/input';

const SubscribeUs = () => {
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted.');
  };

  const handleCheckbox = useCallback(() => {
    setChecked(!checked);
  }, [checked]);

  return (
    <Box as="section" sx={styles.section} variant="section.subscribe">
      <Container>
        <Box sx={styles.contentWrapper}>
          <SectionHeader
            slogan="unveil powerful insight since now"
            title="Like our service? Contact us!"
            isWhite={true}
          />
          <Box as="form" sx={styles.subscribe} onSubmit={handleSubmit}>
            <Flex sx={styles.inputGroup}>
              <Label htmlFor="email" variant="styles.srOnly">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                className="email-input"
                placeholder="Enter Email address"
              />
              <Button variant="secondary" sx={{bg: 'white', borderColor: "white"}}>Subscribe</Button>
            </Flex>
            <Box sx={styles.checkbox}>
              <Label htmlFor="no_spam" className={checked ? 'checked' : ''}>
                <Checkbox
                  sx={{bg: 'white' }}
                  id="no_spam"
                  onChange={handleCheckbox}
                  defaultChecked={checked}
                />
                Don’t provide any promotional message.
              </Label>
              {/* <Checkbox
                id="no_spam"
                checked={checked}
                onChange={handleCheckbox}
                label="Don’t provide any promotional message."
              /> */}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SubscribeUs;

const styles = {
  section: {
    pt: [6, null, null, null, 6],
    pb: [8, null, null, 9, 9],
  },
  contentWrapper: {
    background: "linear-gradient(136.82deg, rgba(237, 46, 126, 0.27) -28.85%, #EC3683 169.19%),linear-gradient(0deg, #021639, #021639)",
    borderRadius: '12px',
    p: ['40px', '40px', '40px 110px 50px', '50px 50px', '40px'],
    gap: ['25px','25px','50px', '50px', '50px',],
    display: ['block', null, null, 'block', 'grid'],
    alignItems: 'center',
    gridTemplateColumns: ['repeat(2, 1fr)'],
  },
  heading: {
    textAlign: ['center', null, 'left', 'center', 'left'],
    mb: ['30px', null, null, null, 0],
    ml: 0,
    h2: {
      fontSize: [6, null, null, null, null, 8, 9],
    },
    p: {
      lineHeight: 1.87,
      marginTop: 1,
      ml: ['auto', null, null, null, 0],
      mr: ['auto', null, null, null, 0],
      maxWidth: 420,
    },
  },
  subscribe: {
    '.email-input': {
      mr: [0, null, null, '15px'],
      minHeight: ['50px', '50px', '60px'],
    },
    button: {
      minHeight: ['50px', '50px', '60px'],
      fontSize: ['14px', '14px', '16px'],
      mt: ['15px', null, null, 0],
    },
  },
  inputGroup: {
    flexDirection: ['column', null, null, 'row'],
  },
  checkbox: {
    mt: ['24px'],
    label: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: 1.14,
      color: rgba('#9095AD', 0.9),
      zIndex: 10,
      svg: {
        path: {
          fill: '#EFF3F7',
        },
      },
      '&.checked': {
        svg: {
          path: {
            fill: 'primary',
          },
        },
      },
    },
  },
};
