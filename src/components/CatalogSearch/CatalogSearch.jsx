import { useDispatch, useSelector } from "react-redux";
import { Container } from "../Container/Container";
import {
  SectionCatalog,
  InputWrapper,
  Input,
  InputPlaceholder,
  Wrapper,
} from "./CatalogSearch.styled";
import {
  selectIsLoading,
  selectSearchByNameRes,
  selectSearchByNameTotalPage,
} from "../../redux/selectors";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { getSearchByName } from "../../redux/movieThunk";
import MovieList from "./MovieList";
import { WeeklyTrendsList } from "../WeeklyTrends/WeeklyTrends.styles";
import { AddLibraryButton } from "../Upcoming/Upcoming.styled";

const CatalogSearch = () => {
  const dispatch = useDispatch();
  const searchResult = useSelector(selectSearchByNameRes);
  const totalPage = useSelector(selectSearchByNameTotalPage);
  const isLoading = useSelector(selectIsLoading);
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    dispatch(getSearchByName({ query, page }));
  }, [page, query, dispatch]);

  const onLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleSubmit = (e) => {
    if (e.target.value === "") {
      return setSearchParams({});
    }
    setSearchParams({ query: e.target.value });
  };

  return (
    <SectionCatalog>
      <Container>
        <Wrapper>
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
          {isLoading && <Loader />}
          {searchResult.length > 0 && (
            <WeeklyTrendsList>
              {searchResult?.map((el) => (
                <MovieList el={el} key={el.id} />
              ))}
            </WeeklyTrendsList>
          )}
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
