import Box from "./Box";

function Layout() {
  return (
    <>
      <h1 className="m-4">Cryptocurrency Realtime Price</h1>
      <div className="container my-5">
        <div className="row gy-4 gx-3">
          <div className="col-lg-4">
            <Box currency="bitcoin"></Box>
          </div>
          <div className="col-lg-4">
            <Box currency="ethereum"></Box>
          </div>
          <div className="col-lg-4">
            <Box currency="litecoin"></Box>
          </div>
          <div className="col-lg-4">
            <Box currency="monero"></Box>
          </div>
          <div className="col-lg-4">
            <Box currency="xrp"></Box>
          </div>
          <div className="col-lg-4">
            <Box currency="dogecoin"></Box>
          </div>
          <div className="col-lg-4">
            <Box currency="dash"></Box>
          </div>
          <div className="col-lg-4">
            <Box currency="maidsafecoin"></Box>
          </div>
          <div className="col-lg-4">
            <Box currency="lisk"></Box>
          </div>
          <div className="col-lg-4">
            <Box currency="storj"></Box>
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
