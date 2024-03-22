import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useScrollContext } from "../context/ScrollContext";
import MovieList from "../json/movie.json";
import "./Movie.css";

const MoviePage = () => {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const ref = useRef(document.createElement("div"));
  const navigate = useNavigate();
  const {movieScrollPosition, setMovieScrollPosition} = useScrollContext();

  useEffect(() => {
    ref.current.scrollLeft = movieScrollPosition;
    checkScrollPosition();

    const handleScroll = () => {
      checkScrollPosition();
    };

    if (ref.current) {
      ref.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const checkScrollPosition = () => {
    setShowLeftArrow(ref.current.scrollLeft > 0);
    setShowRightArrow(
      ref.current.scrollLeft < ref.current.scrollWidth - ref.current.clientWidth
    );
  };

  const scroll = (scrollOffset: number) => {
    ref.current.scrollLeft += scrollOffset;
  };

  const handleNavigation = (movieId: string) => {
    setMovieScrollPosition(ref.current.scrollLeft);
    navigate(`/movieInfo/${movieId}`);
  };

  return (
    <>
      <Container maxWidth={"lg"}>
        <Typography p={2} color={"gold"} variant="h4">
          Movies
        </Typography>
        <div className="body-container">
          <div className="main-slider-container">
            {showLeftArrow ? (
              <ArrowLeft
                sx={{ fontSize: "60px" }}
                className="arrow-icon left"
                onClick={() => scroll(-500)}
              />
            ) : null}
            <div className="slider" ref={ref}>
              {MovieList.map((movie, index) => (
                <Card
                  key={index}
                  sx={{
                    maxWidth: 200,
                    display: "inline-block",
                    whiteSpace: "wrap",
                    marginLeft: 1.5,
                    marginRight: 1.5,
                    borderRadius: 0,
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={movie.Poster}
                      onClick={() => {
                        handleNavigation(movie.imdbID);
                      }}
                    />
                  </CardActionArea>
                  <CardContent>
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                    >
                      <Typography
                        variant="body1"
                        display={"flex"}
                        alignItems={"stretch"}
                      >
                        <StarIcon
                          color="warning"
                          sx={{ fontSize: 22, marginRight: 0.5 }}
                        />
                        {movie.imdbRating}
                      </Typography>
                      <IconButton sx={{ borderRadius: 1, marginBottom: 0.3 }}>
                        <StarOutlineIcon sx={{ fontSize: 22 }} />
                      </IconButton>
                    </Box>
                    <Typography variant="body1" sx={{ minHeight: 80 }}>
                      {movie.Title}
                    </Typography>
                    <Button
                      startIcon={<AddIcon />}
                      fullWidth
                      sx={{ backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                    >
                      Watchlist
                    </Button>
                    <Button
                      color="inherit"
                      startIcon={<PlayArrowIcon />}
                      fullWidth
                      sx={{ marginTop: 1 }}
                    >
                      Trailer
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            {showRightArrow ? (
              <ArrowRight
                sx={{ fontSize: "60px" }}
                className="arrow-icon right"
                onClick={() => scroll(500)}
              />
            ) : null}
          </div>
        </div>
      </Container>
    </>
  );
};

export default MoviePage;
