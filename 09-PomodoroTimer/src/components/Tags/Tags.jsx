import styled, { css } from "styled-components";
import { useContext } from "react";
import { StateContext } from "../StateProvider";

const Tags = () => {
  const {activeTag, setActiveTag} = useContext(StateContext);

  const handleTagClick = (index) => {
    setActiveTag(index);
  }

  return (
    <TagsContainer>
      {["Work", "Short Break", "Long Break"].map((tag, i) => (
        <Tag
          key={i}
          activetag={activeTag === i}
          onClick={() => handleTagClick(i)}
        >
          {tag}
        </Tag>
      ))}
    </TagsContainer>
  );
};

export default Tags;

const TagsContainer = styled.div`
  background: ${(props) => props.theme.colors.secondary};
  height: 5rem;
  width: 40rem;
  margin: 0 auto;
  border-radius: 5rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  transition: all 0.3s;

  @media screen and (max-width: 768px) {
    width: 30rem;
  }

  @media screen and (max-width: 480px) {
    width: 25rem;
  } 
`;

const Tag = styled.button`
  all: unset;
  height: 4rem;
  text-align: center;
  border-radius: 5rem;
  flex: 1;
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.3s;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
  }

  ${({ activetag }) => activetag && css`
    background: ${(props) => props.theme.colors.primary};
  `}
`;

