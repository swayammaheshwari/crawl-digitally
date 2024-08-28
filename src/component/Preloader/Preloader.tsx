export const Preloader = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "15px",
      }}
    >
      <div  className="w-24 h-24" >
        <img
          className=" "
          src="images/crawldigitalloading.gif"
          alt="Loading..."
        />
      </div>
    </div>
  );
};
