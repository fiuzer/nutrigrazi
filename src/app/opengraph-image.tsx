import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Graziela Cervilla - nutricionista em São Paulo e online";
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
          padding: "64px",
          width: "100%",
        }}
      >
        <div
          style={{
            border: "1px solid rgba(123, 95, 82, 0.35)",
            borderRadius: "999px",
            fontSize: 24,
            letterSpacing: "0.2em",
            marginBottom: 26,
            padding: "10px 22px",
            textTransform: "uppercase",
          }}
        >
          Nutricionista SP e online
        </div>
        <h1
          style={{
            fontSize: 78,
            lineHeight: 1.14,
            margin: 0,
            maxWidth: 980,
            textAlign: "center",
          }}
        >
          Emagrecimento com qualidade de vida e rotina possível
        </h1>
        <p style={{ fontSize: 30, marginTop: 28 }}>Graziela Cervilla | CRN-3 43973</p>
      </div>
    ),
    {
      ...size,
    },
  );
}
