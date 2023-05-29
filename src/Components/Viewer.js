import React, { useEffect, useRef } from "react";
import useMediaQuery from "../Helpers/Hooks/UseMediaQuery";

// Our wonderful chair model
const MODEL_UID = "9b4f845e1eb347d699185d83edd548d1";

export const Viewer = () => {
  const mobile = useMediaQuery("(max-width: 550px)");
  // This ref will contain the actual iframe object
  const viewerIframeRef = useRef(null);

  const ViewerIframe = (
    <center>
      <iframe
        // We feed the ref to the iframe component to get the underlying DOM object
        ref={viewerIframeRef}
        title="sketchfab-viewer"
        style={{
          display: "flex",
          justifySelf: "center",
          alignSelf: "center",
          height: mobile ? "73vh !important" : "88vh",
          width: "100vw",
          position: "absolute",
          left: 0,
          bottom: 0,
        }}
      />
    </center>
  );

  //tablet- 1.53

  useEffect(() => {
    // Initialize the viewer
    setTimeout(() => {
      let client = new window.Sketchfab(viewerIframeRef.current);
      client.init(MODEL_UID, {
        success: () => {},
        error: () => {
          console.log("Viewer error");
        },
        autostart: 1,
      });
    }, 2000);
  }, []);

  return ViewerIframe;
};
