import React from "react";
import { Box, Typography, useTheme, alpha } from "@mui/material";
import { keyframes } from "@emotion/react";

const wifiPulse = keyframes`
  0% {
    transform: scale(0.8);
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    transform: scale(1.2);
    opacity: 0;
  }
`;

const ledPulse = keyframes`
  0%, 100% {
    opacity: 0.4;
  }

  50% {
    opacity: 1;
  }
`;

const floatAnim = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-10px);
  }
`;

export default function HomeNetworkAnimation() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "background.default",
        transition: "all 0.3s ease",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: 900,
          height: 500,
          overflow: "hidden",
          borderRadius: "28px",
          background: isDark
            ? `linear-gradient(
                to bottom right,
                ${theme.palette.grey[900]},
                ${theme.palette.grey[800]},
                #0f172a
              )`
            : `linear-gradient(
                to bottom right,
                #eef5ff,
                #ffffff,
                #eefcf3
              )`,
          border: `1px solid ${alpha(theme.palette.divider, 0.2)}`,
          boxShadow: isDark
            ? "0 20px 60px rgba(0,0,0,0.5)"
            : "0 20px 60px rgba(0,0,0,0.1)",
          transition: "all 0.3s ease",
        }}
      >
        {/* Ambient glow */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: isDark
              ? `
                radial-gradient(circle at top left, rgba(59,130,246,0.15), transparent 30%),
                radial-gradient(circle at bottom right, rgba(34,197,94,0.12), transparent 30%)
              `
              : `
                radial-gradient(circle at top left, rgba(59,130,246,0.08), transparent 30%),
                radial-gradient(circle at bottom right, rgba(34,197,94,0.08), transparent 30%)
              `,
          }}
        />

        {/* Shelf */}
        <Box
          sx={{
            position: "absolute",
            bottom: 90,
            left: 0,
            right: 0,
            height: 24,
            bgcolor: isDark ? "#7c4f2d" : "#d59a63",
          }}
        />

        {/* ROUTER */}
        <Box
          sx={{
            position: "absolute",
            left: 90,
            bottom: 110,
            textAlign: "center",
          }}
        >
          {/* WiFi */}
          <Box
            sx={{
              position: "absolute",
              left: "50%",
              top: -70,
              transform: "translateX(-50%)",
            }}
          >
            {[40, 70, 100].map((size, i) => (
              <Box
                key={size}
                sx={{
                  position: "absolute",
                  width: size,
                  height: size,
                  left: -(size / 2),
                  top: -(i * 15),
                  border: `4px solid ${
                    isDark ? "#4ade80" : "#22c55e"
                  }`,
                  borderColor: `${
                    isDark ? "#4ade80" : "#22c55e"
                  } transparent transparent transparent`,
                  borderRadius: "50%",
                  opacity: 0,
                  animation: `${wifiPulse} 2.5s infinite`,
                  animationDelay: `${i * 0.5}s`,
                }}
              />
            ))}
          </Box>

          {/* Router body */}
          <Box
            sx={{
              position: "relative",
              width: 260,
              height: 110,
              borderRadius: "16px",
              background: isDark
                ? "linear-gradient(to bottom right, #111827, #1f2937)"
                : "linear-gradient(to bottom right, #18181b, #27272a)",
              boxShadow: isDark
                ? "0 10px 30px rgba(0,0,0,0.6)"
                : "0 10px 30px rgba(0,0,0,0.3)",
            }}
          >
            {/* Grid */}
            <Box
              sx={{
                position: "absolute",
                inset: 1.5,
                display: "grid",
                gridTemplateColumns: "repeat(8, 1fr)",
                gap: 0.5,
                opacity: 0.15,
              }}
            >
              {Array.from({ length: 64 }).map((_, i) => (
                <Box
                  key={i}
                  sx={{
                    height: 4,
                    borderRadius: 999,
                    bgcolor: "#d4d4d8",
                  }}
                />
              ))}
            </Box>

            {/* Antennas */}
<Box
  sx={{
    position: "absolute",
    width: 10,
    height: 120,
    bgcolor: "#111827",
    borderRadius: "999px",
    left: 28,
    top: -95,
    zIndex: 1,
    transform: "rotate(-8deg)",
    transformOrigin: "bottom center",
  }}
/>

<Box
  sx={{
    position: "absolute",
    width: 10,
    height: 120,
    bgcolor: "#111827",
    borderRadius: "999px",
    right: 28,
    top: -95,
    zIndex: 1,
    transform: "rotate(8deg)",
    transformOrigin: "bottom center",
  }}
/>

            {/* Logo */}
            <Typography
              sx={{
                position: "absolute",
                left: 20,
                bottom: 16,
                color: "#e5e7eb",
                fontWeight: 700,
              }}
            >
              Linksys
            </Typography>

            {/* LED */}
            <Box
              sx={{
                position: "absolute",
                left: 22,
                bottom: 8,
                width: 40,
                height: 4,
                borderRadius: 999,
                bgcolor: "#3b82f6",
                animation: `${ledPulse} 1.5s infinite`,
                boxShadow: "0 0 12px rgba(59,130,246,0.8)",
              }}
            />
          </Box>

          {/* Label */}
          <DeviceLabel isDark={isDark}>
            OpenWRT Router
          </DeviceLabel>
        </Box>

        <svg
  style={{
    position: "absolute",
    left: 335,
    bottom: 148,
    width: 360,
    height: 120,
    overflow: "visible",
    pointerEvents: "none",
  }}
  viewBox="0 0 360 120"
>
  {/* Main cable */}
  <path
    d="M0 55 
       C80 55, 120 55, 170 55
       C230 55, 250 82, 320 82"
    stroke={isDark ? "#60a5fa" : "#3b82f6"}
    strokeWidth="10"
    fill="none"
    strokeLinecap="round"
  />

  {/* RJ45 connector on server side */}
  <rect
    x="315"
    y="72"
    width="22"
    height="18"
    rx="2"
    fill={isDark ? "#d1d5db" : "#e5e7eb"}
    stroke="#9ca3af"
    strokeWidth="1"
  />

  {/* Animated data packets */}
  <circle r="6" fill="#93c5fd">
    <animateMotion
      dur="2s"
      repeatCount="indefinite"
      path="M0 55 
             C80 55, 120 55, 170 55
             C230 55, 250 82, 320 82"
    />
  </circle>

  <circle r="5" fill="#60a5fa">
    <animateMotion
      dur="2s"
      begin="0.8s"
      repeatCount="indefinite"
      path="M0 55 
             C80 55, 120 55, 170 55
             C230 55, 250 82, 320 82"
    />
  </circle>
</svg>

        {/* SERVER */}
        <Box
          sx={{
            position: "absolute",
            right: 90,
            bottom: 90,
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: 260,
              height: 110,
              borderRadius: "16px",
              overflow: "hidden",
              background: isDark
                ? "linear-gradient(to bottom right, #1e293b, #0f172a)"
                : "linear-gradient(to bottom right, #2a2a2a, #111827)",
              boxShadow: isDark
                ? "0 10px 30px rgba(0,0,0,0.6)"
                : "0 10px 30px rgba(0,0,0,0.3)",
            }}
          >
            {/* Red line */}
            <Box
              sx={{
                position: "absolute",
                left: 60,
                top: 0,
                bottom: 0,
                width: 8,
                bgcolor: "#dc2626",
              }}
            />

            {/* Ports */}
            <Box
              sx={{
                position: "absolute",
                left: 18,
                bottom: 18,
                display: "flex",
                gap: 1,
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  bgcolor: "#737373",
                }}
              />

              {[1, 2].map((i) => (
                <Box
                  key={i}
                  sx={{
                    width: 20,
                    height: 8,
                    borderRadius: 1,
                    bgcolor: "#404040",
                    border: "1px solid #737373",
                  }}
                />
              ))}
            </Box>

            {/* Holes */}
            <Box
              sx={{
                position: "absolute",
                right: 12,
                top: 18,
                width: 90,
                display: "grid",
                gridTemplateColumns: "repeat(6, 1fr)",
                gap: 0.5,
              }}
            >
              {Array.from({ length: 36 }).map((_, i) => (
                <Box
                  key={i}
                  sx={{
                    width: 4,
                    height: 4,
                    borderRadius: "50%",
                    bgcolor: "#525252",
                  }}
                />
              ))}
            </Box>

            {/* Logo */}
            <Typography
              sx={{
                position: "absolute",
                right: 16,
                bottom: 14,
                color: "#e5e7eb",
                fontWeight: 700,
              }}
            >
              ThinkCentre
            </Typography>
          </Box>

          <DeviceLabel isDark={isDark}>
            Home Server
          </DeviceLabel>
        </Box>

        {/* Floating Devices */}
        <Box
          sx={{
            position: "absolute",
            top: 40,
            right: 40,
            display: "flex",
            gap: 2,
          }}
        >
          {["📶", "💻", "📱"].map((icon, i) => (
            <Box
              key={icon}
              sx={{
                width: 60,
                height: 60,
                borderRadius: "18px",
                bgcolor: alpha(
                  theme.palette.background.paper,
                  isDark ? 0.08 : 0.9
                ),
                backdropFilter: "blur(10px)",
                border: `1px solid ${alpha(
                  theme.palette.divider,
                  0.2
                )}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 24,
                boxShadow: isDark
                  ? "0 8px 24px rgba(0,0,0,0.5)"
                  : "0 10px 24px rgba(0,0,0,0.08)",
                animation: `${floatAnim} 3s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`,
              }}
            >
              {icon}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

function DeviceLabel({ children, isDark }) {
  return (
    <Box
      sx={{
        mt: 3,
        px: 3,
        py: 1.5,
        borderRadius: "18px",
        bgcolor: isDark
          ? "rgba(255,255,255,0.06)"
          : "rgba(255,255,255,0.95)",
        backdropFilter: "blur(12px)",
        border: `1px solid ${
          isDark
            ? "rgba(255,255,255,0.08)"
            : "rgba(0,0,0,0.06)"
        }`,
        display: "inline-block",
        boxShadow: isDark
          ? "0 8px 24px rgba(0,0,0,0.4)"
          : "0 6px 20px rgba(0,0,0,0.08)",
      }}
    >
      <Typography
        sx={{
          fontWeight: 700,
          color: isDark ? "#f3f4f6" : "#111827",
        }}
      >
        {children}
      </Typography>
    </Box>
  );
}