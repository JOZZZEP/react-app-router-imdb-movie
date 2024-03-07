import { AppBar } from "@mui/material";
import IMDB_Logo from "../assets/imdb_logo.png";

function Header() {
  return (
    <>
      <AppBar position="sticky" sx={{ display: "flex", alignItems: "center"}}>
        <div style={{ width: '85%',
        paddingTop: 10,
        paddingBottom: 10,
        display:"flex",
        alignItems:"center"
        }}>
            <img src={IMDB_Logo} height={32}></img>
        </div>
      </AppBar>
    </>
  );
}

export default Header;
