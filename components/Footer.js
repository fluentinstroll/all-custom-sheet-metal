const footerStyle = {
    width: "100%",
    position: "static",
    bottom: "0px",
    background: "#21D19F",
    padding: "20px"
    };
  
  const Footer = () => (
    <div className="Footer" style={footerStyle}>
      <p>Address line 1</p>
      <p>Address Line 2</p>
      <p>Address Line 3</p>
      <p>Address Line 4</p>
    </div>
  );
  
  export default Footer;