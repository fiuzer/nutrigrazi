import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Graziela Cervilla - nutricionista SP, Vila Leopoldina e online";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background:
            "linear-gradient(120deg, #f8f3ee 0%, #eef4ea 48%, #f6ece4 100%)",
          color: "#261c19",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <p style={{ fontSize: 28, letterSpacing: "0.16em", marginBottom: 20, textTransform: "uppercase" }}>
          Graziela Cervilla
        </p>
        <h1 style={{ fontSize: 76, lineHeight: 1, margin: 0, maxWidth: 980, textAlign: "center" }}>
          Emagrecimento com saúde, GLP-1 e rotina real
        </h1>
      </div>
    ),
    {
      ...size,
    },
  );
}
