import { Container } from "../Container/Container";
import {
  SectionCatalog,
  InputWrapper,
  Input,
  InputPlaceholder,
} from "./CatalogSearch.styled";

const CatalogSearch = () => {
  return (
    <SectionCatalog>
      <Container>
        <InputWrapper>
          <Input type="text" placeholder=" " />
          <InputPlaceholder>Search movie</InputPlaceholder>
        </InputWrapper>
        <div>Cards</div>
      </Container>
    </SectionCatalog>
  );
};

export default CatalogSearch;
