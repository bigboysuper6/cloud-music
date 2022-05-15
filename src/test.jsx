React.useImperativeHandle(props.onRef, () => {
  return {
    func: handleClickOpen,
    qrlogin,
  };
});

const navRef = React.useRef();
const [is_fixed, set_is_fixed] = React.useState(false);

React.useEffect(() => {
  const fixedTop = navRef.current.offsetTop;
  console.log("offsetTop", fixedTop);
  window.onscroll = () => {
    let scrollTop = document.documentElement.scrollTop;
    console.log("scrollTop", scrollTop);
    const isFixed = scrollTop >= fixedTop;
    set_is_fixed(isFixed);
    console.log(is_fixed);
  };
}, [is_fixed]);
// let ChildRef = React.createRef();
{
  /* <Link to={`/songlist/${props.list.id}`}> */
}
<CardActionArea>
  {/* <CardMedia
  component="img"
  //   image={props.list.picUrl}
  image={
    "https://p1.music.126.net/tXm2rpyXBdJuSRkMDk48WA==/109951166375994003.jpg"
  }
  alt="green iguana"
>
  每日推荐
</CardMedia> */}
</CardActionArea>;
{
  /* </Link> */
}
