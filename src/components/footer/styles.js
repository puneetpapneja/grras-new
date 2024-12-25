import styled from 'styled-components';

const sFooter = styled.div`
  right: 0;
  bottom: 0;
  left: 0;
  padding-top: 0.5rem;
  text-align: left;
  position: ${(props) => (props.isMobile ? 'fixed' : '')};
  font-size: smaller;
`;

export default {
  sFooter
};
