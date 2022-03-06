import React from 'react';
import { Fade } from "react-awesome-reveal";
import './FAQs.css';
import Header from '../common/Header';
import Text from '../common/Text';
import Questions from './cards/question';
import CTA from './CTA-FAQ';
import Filters from './Filters';
import { questionList } from "../../lib/questionList";

export default function FAQ() {
  const [currentItems, setCurrentItems] = React.useState([]); // React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage, setItemsPerPage] = React.useState(6);
  const [pageNumberLimit, setPageNumberLimit] = React.useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = React.useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = React.useState(0);
  const [pages, setPages] = React.useState([]);
  const [indexOfLastItem, setIndexOfLastItem] = React.useState(null);
  const [indexOfFirstItem, setIndexOfFirstItem] = React.useState(null);

  /* filters */
  const [filteredQuestions, setFilteredQuestions] = React.useState([]); // React.useState([]);
  const [search, setSearch] = React.useState('');
  const [tag, setTag] = React.useState('none');
  const [tags, setTags] = React.useState([]);

  const sortedQuestions = React.useMemo(() => [], []);
  questionList?.map((a) => (!sortedQuestions.includes(a)? sortedQuestions.push(a) : null));
  sortedQuestions?.sort((a, b) => (a.name < b.name ? -1 : 1));

  React.useEffect(() => {
    const _pages: number[] = [];
    for (
      let i = 1;
      i <= Math.ceil((filteredQuestions?.length ?? 0) / itemsPerPage);
      i += 1
    ) {
      _pages.push(i);
    }
    setPages(_pages);
  }, [filteredQuestions, itemsPerPage]);

  React.useEffect(() => {
    if (sortedQuestions && sortedQuestions?.length > 0) {
      const _tags = Array.from(
        new Set(sortedQuestions?.map((q) => q?.etiqueta1 ?? null))
      )?.filter((x) => !!x);
      _tags.push(...Array.from(
        new Set(sortedQuestions?.map((q) => q?.etiqueta2 ?? null))
      )?.filter((x) => !!x));
      _tags.push(...Array.from(
        new Set(sortedQuestions?.map((q) => q?.etiqueta3 ?? null))
      )?.filter((x) => !!x));
      setTags(_tags);
      }
  }, [sortedQuestions]);

  React.useEffect(() => {
    if (sortedQuestions && sortedQuestions?.length > 0) {
      setFilteredQuestions(
        sortedQuestions?.filter((question) => {
          const textSearch = question?.question
            ?.toLowerCase()
            .includes(search.toLowerCase());
          const tagSearch =
            tag === 'none' ? true : question?.etiqueta1 === String(tag) || question?.etiqueta2 === String(tag) || question?.etiqueta3 === String(tag);
          return textSearch && tagSearch;
        })
      );
    }
  }, [tag, sortedQuestions, search]);

  React.useEffect(() => {
    setIndexOfLastItem(currentPage * itemsPerPage);
  }, [currentPage, itemsPerPage]);

  React.useEffect(() => {
    setIndexOfFirstItem(indexOfLastItem - itemsPerPage);
  }, [indexOfLastItem, itemsPerPage]);

  React.useEffect(() => {
    if (filteredQuestions) {
      setCurrentItems(
        filteredQuestions?.slice(indexOfFirstItem, indexOfLastItem)
      );
    }
  }, [filteredQuestions, indexOfFirstItem, indexOfLastItem]);

  function previousPage() {
    if (currentPage !== pages[0]) {
      setCurrentPage(currentPage - 1);
      if ((currentPage - 1) % pageNumberLimit === 0) {
        setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
        setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
      }
    }
  }

  function nextPage() {
    if (currentPage !== pages.length) {
      setCurrentPage(currentPage + 1);
      if (currentPage + 1 > maxPageNumberLimit) {
        setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
        setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
      }
    }
  }

    return(
      <div className="">
        <Fade cascade triggerOnce>
            <Header image="/images/bandera.jpg" title="PREGUNTAS FRECUENTES" text="" />
            {/* <Text text={'A continuación se presentan las preguntas más frecuentes en los estudiantes de todas las carreras.'} /> */}
            <div>
                <Filters setSearch={setSearch} tags={tags} setTag={setTag} />
            </div>
            <div className='faqcards__container'>
                <div className='faqcards__wrapper'>
                    <ul className='faqcards__items'>
                        <Questions questions={currentItems} />
                    </ul>
                </div>
            </div>
            <CTA />
        </Fade>
      </div>
    )
}