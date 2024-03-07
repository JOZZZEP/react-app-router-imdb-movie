import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { Card, CardActionArea, CardMedia, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useScrollContext } from "../context/ScrollContext";
import PersonList from "../json/persons.json";

function PersonComp() {
  const { personScrollPosition, setPersonScrollPosition } = useScrollContext();
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const ref = useRef(document.createElement("div"));
  const navigate = useNavigate();

  const checkScrollPosition = () => {
    setShowLeftArrow(ref.current.scrollLeft > 0);
    setShowRightArrow(
      ref.current.scrollLeft < ref.current.scrollWidth - ref.current.clientWidth
    );
  };

  useEffect(() => {
    ref.current.scrollLeft = personScrollPosition;

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

  const scroll = (scrollOffset: number) => {
    ref.current.scrollLeft += scrollOffset;
  };

  const handleNavigation = (name: string) => {
    setPersonScrollPosition(ref.current.scrollLeft)
    navigate(`/person/${name}`);
  };

  return (
    <>
      <Container maxWidth={"lg"} sx={{ pb: 4 }}>
        <Typography p={2} color={"gold"} variant="h4">
          Actor
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
              {PersonList.map((person) => (
                <Card
                  key={person.id}
                  sx={{
                    maxWidth: 200,
                    display: "inline-block",
                    whiteSpace: "wrap",
                    marginLeft: 1.5,
                    marginRight: 1.5,
                    backgroundColor: "transparent",
                    borderRadius: "50%",
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={person.image}
                      sx={{ aspectRatio: "1/1" }}
                      onClick={() => {
                        handleNavigation(person.name);
                      }}
                    />
                  </CardActionArea>
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
}

export default PersonComp;
