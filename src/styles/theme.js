// theme.js - Healthcare Green & Blue Theme Configuration

export const theme = {
  // Primary Colors
  colors: {
    primary: '#059669',        // Healthcare Green
    primaryHover: '#047857',   // Darker Healthcare Green
    primaryLight: '#10b981',   // Light Healthcare Green
    
    secondary: '#1d4ed8',      // Trust Blue
    secondaryHover: '#1e40af', // Darker Trust Blue
    secondaryLight: '#3b82f6', // Light Trust Blue
    
    accent: '#dc2626',         // Alert Red (for denials)
    accentHover: '#b91c1c',    // Darker Alert Red
    accentLight: '#ef4444',    // Light Alert Red
    
    // Background Colors
    background: '#f0fdf4',     // Light Green Background
    backgroundAlt: '#ffffff',  // White Background
    backgroundCard: '#ffffff', // Card Background
    
    // Text Colors
    textPrimary: '#1f2937',    // Dark Gray
    textSecondary: '#6b7280',  // Medium Gray
    textMuted: '#9ca3af',      // Light Gray
    textWhite: '#ffffff',      // White Text
    
    // Border Colors
    borderLight: '#d1fae5',    // Light Green Border
    borderMedium: '#a7f3d0',   // Medium Green Border
    borderDark: '#6ee7b7',     // Dark Green Border
    
    // Status Colors
    success: '#059669',        // Success Green
    warning: '#f59e0b',        // Warning Orange
    error: '#dc2626',          // Error Red
    info: '#1d4ed8',           // Info Blue
  },
  
  // Spacing
  spacing: {
    xs: '0.25rem',   // 4px
    sm: '0.5rem',    // 8px
    md: '1rem',      // 16px
    lg: '1.5rem',    // 24px
    xl: '2rem',      // 32px
    xxl: '3rem',     // 48px
    xxxl: '4rem',    // 64px
  },
  
  // Typography
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      serif: ['Georgia', 'serif'],
      mono: ['Monaco', 'Consolas', 'monospace'],
    },
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem',  // 36px
      '5xl': '3rem',     // 48px
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
    },
  },
  
  // Border Radius
  borderRadius: {
    sm: '0.375rem',   // 6px
    md: '0.5rem',     // 8px
    lg: '0.75rem',    // 12px
    xl: '1rem',       // 16px
    full: '9999px',   // Full rounded
  },
  
  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  },
  
  // Transitions
  transitions: {
    fast: '150ms ease-in-out',
    normal: '300ms ease-in-out',
    slow: '500ms ease-in-out',
  },
  
  // Component Specific Styles
  components: {
    button: {
      primary: {
        backgroundColor: '#059669',
        color: '#ffffff',
        hoverBackgroundColor: '#047857',
        focusRing: '0 0 0 2px rgba(5, 150, 105, 0.5)',
      },
      secondary: {
        backgroundColor: '#1d4ed8',
        color: '#ffffff',
        hoverBackgroundColor: '#1e40af',
        focusRing: '0 0 0 2px rgba(29, 78, 216, 0.5)',
      },
      danger: {
        backgroundColor: '#dc2626',
        color: '#ffffff',
        hoverBackgroundColor: '#b91c1c',
        focusRing: '0 0 0 2px rgba(220, 38, 38, 0.5)',
      },
    },
    card: {
      backgroundColor: '#ffffff',
      borderColor: '#d1fae5',
      shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      hoverShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    },
    icon: {
      primary: '#1d4ed8',
      success: '#059669',
      warning: '#f59e0b',
      danger: '#dc2626',
    },
  },
  
  // Service Specific Colors (for your medical billing services)
  serviceColors: {
    eligibilityVerification: '#1d4ed8',  // Trust Blue
    priorAuthorization: '#1d4ed8',       // Trust Blue
    denialManagement: '#dc2626',         // Alert Red
  },
}

// Helper functions for easier color access
export const getServiceIconColor = (serviceTitle) => {
  switch (serviceTitle) {
    case 'Denial Management':
      return theme.serviceColors.denialManagement
    case 'Prior Authorization':
      return theme.serviceColors.priorAuthorization
    case 'Eligibility Verification':
      return theme.serviceColors.eligibilityVerification
    default:
      return theme.colors.secondary
  }
}

// CSS-in-JS style helpers
export const styles = {
  primaryButton: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.textWhite,
    padding: `${theme.spacing.md} ${theme.spacing.xl}`,
    borderRadius: theme.borderRadius.lg,
    fontWeight: theme.typography.fontWeight.semibold,
    boxShadow: theme.shadows.md,
    transition: theme.transitions.normal,
    border: 'none',
    cursor: 'pointer',
  },
  
  secondaryButton: {
    backgroundColor: theme.colors.secondary,
    color: theme.colors.textWhite,
    padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
    borderRadius: theme.borderRadius.lg,
    fontWeight: theme.typography.fontWeight.semibold,
    boxShadow: theme.shadows.sm,
    transition: theme.transitions.normal,
    border: 'none',
    cursor: 'pointer',
  },
  
  card: {
    backgroundColor: theme.components.card.backgroundColor,
    borderRadius: theme.borderRadius.xl,
    boxShadow: theme.components.card.shadow,
    border: `1px solid ${theme.components.card.borderColor}`,
    transition: theme.transitions.normal,
  },
  
  iconContainer: {
    width: '4rem',
    height: '4rem',
    borderRadius: theme.borderRadius.full,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: theme.transitions.normal,
  },
}

export default theme