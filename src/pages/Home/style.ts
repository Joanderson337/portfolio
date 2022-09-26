import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  height: 100vh;

  grid-template-areas:
    'header'
    'main'
    'about'
    'knowledge';
  grid-template-rows: 120px 1fr 1fr 1fr;
`
export const HeaderC = styled.div`
  grid-area: header;
  .mobile {
    display: none;
    align-items: center;
    margin: 4rem;
  }
  .desk {
    margin: 4rem;
  }
  @media (max-width: 768px) {
    .mobile {
      display: flex;
    }
    .desk {
      display: none;
    }
  }
`

export const Wrapper = styled.div`
  grid-area: main;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  gap: 12.9rem;

  > section {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    justify-content: center;
    @media (max-width: 568px) {
      margin-left: 12px;
    }

    > div {
      margin-bottom: 1.8rem;
    }
  }

  > svg {
    position: relative;
    top: -5rem;
  }
  @media (max-width: 1115px) {
    > svg {
      max-width: 380px;
    }
  }
  @media (max-width: 965px) {
    > svg {
      display: none;
    }
  }
`
export const About = styled.div`
  grid-area: about;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20rem;
  background-color: ${({ theme }) => theme.GRAY_100};

  > section {
    margin: 8.8rem 0 10.1rem 0;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    @media (max-width: 568px) {
      margin-left: 12px;
    }

    .aboutText {
      display: flex;
      flex-direction: column;
      gap: 20rem;
    }
  }

  @media (max-width: 1115px) {
    > svg {
      max-width: 280px;
    }
    > section {
      .aboutText {
        gap: 7rem;
      }
    }
  }
  @media (max-width: 965px) {
    > svg {
      display: none;
    }
  }
`
export const Knowledge = styled.a`
  grid-area: knowledge;
  display: flex;
  flex-direction: column;
  gap: 12.2rem;
  @media (max-width: 568px) {
    gap: 8.2rem;
  }

  .knowledgeTag {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 126px;
    @media (max-width: 568px) {
      margin-top: 16px;
    }
  }

  .cards {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    > div {
      justify-content: center;
      display: flex;
      flex-flow: row wrap;
      gap: 60px;
      margin-bottom: 120px;
    }
  }
`
