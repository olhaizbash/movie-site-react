import { useDispatch, useSelector } from "react-redux";
import { Container } from "../Container/Container";
import {
  SectionCatalog,
  InputWrapper,
  Input,
  InputPlaceholder,
  Wrapper,
  WrapperSearch,
} from "./CatalogSearch.styled";
import {
  selectIsLoading,
  selectSearchByNamePage,
  selectSearchByNameRes,
  selectSearchByNameTotalPage,
} from "../../redux/selectors";
import { useSearchParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { getSearchByName } from "../../redux/movieThunk";
import { AddLibraryButton } from "../Upcoming/Upcoming.styled";
import Movie from "./Movie";
import { useState } from "react";

const CatalogSearch = () => {
  const dispatch = useDispatch();
  const searchResult = useSelector(selectSearchByNameRes);
  const totalPage = useSelector(selectSearchByNameTotalPage);
  const isLoading = useSelector(selectIsLoading);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = useSelector(selectSearchByNamePage);
  const query = searchParams.get("query") ?? "";

  const onLoadMore = () => {
    dispatch(getSearchByName({ query, page: page + 1 }));
  };

  const handleSubmit = (e) => {
    if (e.target.value === "") {
      return setSearchParams({});
    }
    setSearchParams({ query: e.target.value });
  };
  const submitSearch = () => {
    dispatch(getSearchByName({ query, page: 1 }));
  };

  return (
    <SectionCatalog>
      <Container>
        <Wrapper>
          <WrapperSearch>
            <InputWrapper>
              <Input
                type="text"
                placeholder=" "
                value={query}
                onChange={handleSubmit}
                name="query"
              />
              <InputPlaceholder>Search movie</InputPlaceholder>
            </InputWrapper>
            <AddLibraryButton
              style={{ width: "90px" }}
              type="button"
              onClick={submitSearch}>
              Search
            </AddLibraryButton>
          </WrapperSearch>
          {isLoading && <Loader />}
          {searchResult.length > 0 && <Movie searchResult={searchResult} />}
          {searchResult.length > 0 && totalPage > page && (
            <AddLibraryButton
              style={{ marginLeft: "auto", marginRight: "auto" }}
              type="button"
              onClick={onLoadMore}>
              Load More
            </AddLibraryButton>
          )}
        </Wrapper>
      </Container>
    </SectionCatalog>
  );
};

export default CatalogSearch;
