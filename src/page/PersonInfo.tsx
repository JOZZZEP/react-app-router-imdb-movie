import AddIcon from "@mui/icons-material/Add";
import CollectionsIcon from "@mui/icons-material/Collections";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import {
  Button,
  Card,
  CardMedia,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import { useParams } from "react-router-dom";
import PersonData from "../json/persons.json";

function PersonInfoPage() {
  const params = useParams();
  const name = params.name;
  const person = PersonData.find((person) => person.name === name);
  return (
    <>
      <Container maxWidth={"lg"}>
        <Box sx={{ display: "flex", pt: 2, pb: 2 }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h3">{person?.name}</Typography>
            <Typography pt={1} variant="body2">
              {person?.birthday} &middot; {person?.age}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 1,
          }}
        >
          <Card sx={{ flex: "1 0 200px"}} >
            <CardMedia component="img" image={person?.image} />
          </Card>
          <Box sx={{ flex: "5 0 400px" }}>
          <Box sx={{ height: "100%" }}>
              <iframe
                height={"100%"}
                width={"100%"}
                src="https://www.youtube.com/embed/8uuTQX3OPbQ"
              ></iframe>
            </Box>
          </Box>
          <Box
            sx={{
              flex: "1 0 150px",
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <IconButton
              sx={{
                flex: 1,
                borderRadius: 1,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
              }}
            >
              <Box>
                <CollectionsIcon fontSize="large" />
                <Typography variant="body2">PHOTO</Typography>
              </Box>
            </IconButton>
            <IconButton
              sx={{
                flex: 1,
                borderRadius: 1,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
              }}
            >
              <Box>
                <VideoLibraryIcon fontSize="large" />
                <Typography variant="body2">VIDEOS</Typography>
              </Box>
            </IconButton>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", pt: 2, pb: 2 }}>
          <Box sx={{ flex: "3 0 400px" }}>
            <Box pr={2} pt={2}>
              <Typography variant="body1">{person?.detail}</Typography>
              <Divider sx={{ mt: 2, mb: 1 }} />
            </Box>
          </Box>
        </Box>
        <Box sx={{ flex: "1 0 200px", display: "flex", alignItems: "center" }}>
          <Box width={"100%"}>
            <Button
              color="warning"
              startIcon={<AddIcon />}
              variant="contained"
              sx={{ borderRadius: 2, marginRight: 1, height: 50 }}
              fullWidth
            >
              ADD TO LIST
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default PersonInfoPage;
