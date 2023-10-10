import {
  Wrapper,
  TextMassage,
} from 'components/ImageGallery/ItemGallary.styled';
import { Bear } from './Error.styled';

export const Error = () => {
  return (
    <Wrapper>
      <TextMassage>Error, try again.</TextMassage>
      <Bear />
    </Wrapper>
  );
};
