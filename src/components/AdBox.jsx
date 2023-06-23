export const AdBox = () => {
  const frames = [
    <iframe
      src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=21&l=ur1&category=kitchen&banner=0GBWQY9ZR0620KKMXWR2&f=ifr&linkID=05ec5769c289bb745a77a6a8308f34af&t=kylejoeckel-20&tracking_id=kylejoeckel-20"
      width="125"
      height="125"
      scrolling="no"
      border="0"
      marginWidth="0"
      style={{ border: "none" }}
      frameBorder="0"
      sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"
    ></iframe>,
    <iframe
      src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=21&l=ur1&category=kitchen&banner=0C2GDWTEXPE7HV7RAQ82&f=ifr&linkID=1f5d867c80bf20ce1c06dde4263542f1&t=kylejoeckel-20&tracking_id=kylejoeckel-20"
      width="125"
      height="125"
      scrolling="no"
      border="0"
      marginWidth="0"
      style={{ border: "none" }}
      frameBorder="0"
      sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"
    ></iframe>,
    <iframe
      src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=21&l=ur1&category=kitchen&banner=04AP3HD9S2FXVPKW4182&f=ifr&linkID=74fad20b1a7e93721f198e85f188b151&t=kylejoeckel-20&tracking_id=kylejoeckel-20"
      width="125"
      height="125"
      scrolling="no"
      border="0"
      marginWidth="0"
      style={{ border: "none" }}
      frameBorder="0"
      sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"
    ></iframe>,
    <iframe
      src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=21&l=ur1&category=kitchen&banner=16YJ90NQST9G4GR8SDG2&f=ifr&linkID=e5255cbcb26c0fb7f75a0bb11e62a092&t=kylejoeckel-20&tracking_id=kylejoeckel-20"
      width="125"
      height="125"
      scrolling="no"
      border="0"
      marginWidth="0"
      style={{ border: "none" }}
      frameBorder="0"
      sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"
    ></iframe>,
    <iframe
      src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=21&l=ur1&category=gourmet&banner=1F6R1JY1XW26C7B9K2G2&f=ifr&linkID=e0ea1415cf6bb999ce4774fe04b80994&t=kylejoeckel-20&tracking_id=kylejoeckel-20"
      width="125"
      height="125"
      scrolling="no"
      border="0"
      marginWidth="0"
      style={{ border: "none" }}
      frameBorder="0"
      sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"
    ></iframe>,
    <iframe
      src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=21&l=ur1&category=gourmet&banner=1HN0SQGXKCCJ4YE167G2&f=ifr&linkID=ab40d94cc7892ea1cc67d022ddac0f7d&t=kylejoeckel-20&tracking_id=kylejoeckel-20"
      width="125"
      height="125"
      scrolling="no"
      border="0"
      marginWidth="0"
      style={{ border: "none" }}
      frameBorder="0"
      sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"
    ></iframe>,
    <iframe
      src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=20&l=ur1&category=grocery&banner=0Q64NK0ZCB0S52KF7BR2&f=ifr&linkID=862bdf0a9ada9c5e7a1f9ce54ea7446e&t=kylejoeckel-20&tracking_id=kylejoeckel-20"
      width="120"
      height="90"
      scrolling="no"
      border="0"
      marginWidth="0"
      style={{ border: "none" }}
      frameBorder="0"
      sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"
    ></iframe>,
  ];
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        margin: "8px",
      }}
    >
      {frames
        .sort(() => Math.random() - 0.5)
        .map((frame, key) => {
          if (key < 4) return frame;
        })}
    </div>
  );
};

export default AdBox;
