// ============================================================
// useTheme.ts — Hook personalizado para manejar el tema visual
// ============================================================
// Este hook gestiona el estado del tema actual de la aplicación,
// permitiendo alternar entre modo "dark" (oscuro) y "light" (claro).
//
// Devuelve:
//   - El nombre del tema activo.
//   - Una función para cambiarlo.
//   - El conjunto de colores asociado (proveniente de styles/theme).
// ============================================================

import { useState } from "react";
import { themes } from "../styles/theme"; // Objeto con la paleta de colores por tema


// ============================================================
// Hook principal: useTheme
// ------------------------------------------------------------
// Maneja el estado global del tema visual.
// Por defecto inicia en modo "dark".
// ============================================================
export function useTheme() {
  // Estado del tema actual ("dark" o "light")
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  // Función que alterna entre los dos modos de tema
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // Obtiene el set de colores correspondiente al tema actual
  const colors = themes[theme];

  // Devuelve el estado, el toggler y los colores
  return { theme, toggleTheme, colors };
}