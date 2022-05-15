import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import LoginDialogs from "./common/loginDialogs";
import { Link } from "@mui/material";
import Usr from "../services/usrService";
import { useSelector, useDispatch } from "react-redux";
import { changeUsrState } from "../features/usr/usrSlice";
import { changeDaySongsState } from "../features/usr/dataSongsSlice";
import { Link as LinkRouter } from "react-router-dom";
const pages = ["发现音乐"];
const routes = ["/"];
const settings = new Array();
const settingsFunc = new Array();

const NavBar = () => {
  const usrState = useSelector((state) => state.usr.value);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [avatar, setAvatar] = React.useState("");
  const [daysongs, setDaySongs] = React.useState({});
  React.useEffect(() => {
    console.log("redux-state usr: ", usrState);
    if (!usrState) {
      settings[0] = "登录";
      setAvatar("/static/images/avatar/2.jpg");
      settingsFunc[0] = handleOpenLogin;
    } else {
      getDaySongs();
      handleloginedNavData();
    }
  }, [usrState, avatar, handleOpenLogin, handleloginedNavData]);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  //获取每日推荐歌曲
  async function getDaySongs() {
    const cookie = Usr.getCookie();
    const { data: daysongsData } = await Usr.getUsrDaySongs(cookie);
    console.log("daysongsData", daysongsData.data);
    dispatch(changeDaySongsState(daysongsData.data));
  }

  async function handleloginedNavData() {
    const usrDetail = await Usr.getUsrInformation();
    console.log("用户详细信息2", usrDetail.usrInformation.profile.avatarUrl);
    const avatarUrl = usrDetail.usrInformation.profile.avatarUrl;
    setAvatar(avatarUrl);
    settings[0] = "登出";
    settingsFunc[0] = handleLogout;
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  function handleOpenLogin() {
    setOpen(true);
    handleCloseUserMenu();
    // ChildRef.current.func();
    // ChildRef.current.qrlogin();
  }
  function handleUsrReload() {
    dispatch(changeUsrState(Usr.getCurrentUser()));
  }
  function handleLogout() {
    Usr.logout();
    dispatch(changeUsrState(Usr.getCurrentUser()));
    window.location.reload();
  }
  function handleOpenState() {
    setOpen(false);
  }

  return (
    <Box position="fixed" zIndex="1000">
      <AppBar
        sx={{
          height: "50px",
          width: "976px",
          backgroundColor: "rgb(45, 45, 45)",
          borderBottom: "1px solid rgb(100,100,100)",
          display: "flex",
          justifyContent: "center",
        }}
        position="static"
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <LinkRouter
              style={{ textDecoration: "none", color: "rgb(180,180,180)" }}
              to="/"
            >
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
              >
                MUSIC
              </Typography>
            </LinkRouter>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <LinkRouter
              style={{ textDecoration: "none", color: "rgb(180,180,180)" }}
              to="/"
            >
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
              >
                MUSIC
              </Typography>
            </LinkRouter>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page, index) => (
                <LinkRouter
                  style={{ textDecoration: "none" }}
                  key={page}
                  to="/"
                >
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                </LinkRouter>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={avatar} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting, index) => (
                  <MenuItem key={setting} onClick={settingsFunc[index]}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box
        sx={{
          height: "45px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgb(45, 45, 45)",
          borderRadius: " 0 0 0.625rem 0.625rem",
        }}
      >
        他们说我跟不上你的步伐
      </Box>
      <LoginDialogs
        open={open}
        handleOpenState={handleOpenState}
        handleUsrReload={handleUsrReload}
      ></LoginDialogs>
    </Box>
  );
};
export default NavBar;
