// ============================================================
// Footer.tsx — Pie de página de la aplicación OCR Extractor
// ============================================================
// Muestra información de derechos de autor y créditos del equipo.
// Se adapta dinámicamente al tema mediante props de color y borde.
// ============================================================

// Tipado de propiedades que recibe el componente
interface FooterProps {
  color: string;        // Color principal del texto del footer
  borderColor: string;  // Color del borde superior (separa visualmente el pie)
}


// ============================================================
// Componente principal: Footer
// ------------------------------------------------------------
// Renderiza el pie de página con:
//   - Año actual dinámico
//   - Texto de derechos reservados
//   - Créditos del desarrollador o equipo
// Usa estilos en línea basados en las props de color y tema activo.
// ============================================================
export default function Footer({ color, borderColor }: FooterProps) {
  return (
    <footer
      style={{
        marginTop: 40,                     // Separación respecto al contenido superior
        padding: "20px 0",                 // Espaciado vertical interno
        textAlign: "center",               // Centrado del contenido
        borderTop: `1px solid ${borderColor}`, // Línea divisoria superior
        color,                             // Color de texto dinámico
        opacity: 0.7,                      // Ligera transparencia para tono discreto
        fontSize: 14,                      // Tamaño de fuente pequeño
      }}
    >
      {/* ===================================================== */}
      {/* Línea de derechos de autor */}
      {/* -----------------------------------------------------
          Muestra el año actual de forma automática.
      ===================================================== */}
      <p>
        © {new Date().getFullYear()} OCR Extractor Pro — Todos los derechos
        reservados.
      </p>

      {/* ===================================================== */}
      {/* Créditos del equipo desarrollador */}
      {/* -----------------------------------------------------
          Usa un <strong> para resaltar el nombre del equipo.
          Se puede estilizar adicionalmente con CSS (Footer.css).
      ===================================================== */}
      <p style={{ marginTop: 4 }}>
        Desarrollado con ❤️ por <strong>Team UNISIMA⛰️🏔️-Cobra-Pixel🐍🤖 </strong>
      </p>
    </footer>
  );
}