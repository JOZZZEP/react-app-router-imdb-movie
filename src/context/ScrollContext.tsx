import { Component, createContext, ReactNode, useContext } from "react";

interface ScrollContextType {
  movieScrollPosition: number;
  setMovieScrollPosition: (movieScrollPosition: number) => void;
  personScrollPosition: number;
  setPersonScrollPosition: (personScrollPosition: number) => void;
}

const ScrollContext = createContext<ScrollContextType>({
  movieScrollPosition: 0,
  setMovieScrollPosition: () => {},
  personScrollPosition: 0,
  setPersonScrollPosition: () => {},
});

export default class ScrollContextProvider extends Component<
  { children: ReactNode },
  { movieScrollPosition: number; personScrollPosition: number;}
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = {
      movieScrollPosition: 0,
      personScrollPosition: 0,
    };
  }

  setMovieScrollPosition = (movieScrollPosition: number) => {
    this.setState({ movieScrollPosition });
  };


  setPersonScrollPosition = (personScrollPosition: number) => {
    this.setState({ personScrollPosition });
  };


  render() {
    const contextValues = {
      movieScrollPosition: this.state.movieScrollPosition,
      setMovieScrollPosition: this.setMovieScrollPosition,
      personScrollPosition: this.state.personScrollPosition,
      setPersonScrollPosition: this.setPersonScrollPosition,
    };

    return (
      <ScrollContext.Provider value={contextValues}>
        {this.props.children}
      </ScrollContext.Provider>
    );
  }
}

export const useScrollContext = () => useContext(ScrollContext);
