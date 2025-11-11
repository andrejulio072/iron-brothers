const landingStyles = {
	page: {
		position: 'relative',
		minHeight: '100vh',
		fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
		background: 'radial-gradient(circle at top, #1f2a44, #0c111f)',
		color: '#f3f4f6',
		overflowX: 'hidden',
		paddingBottom: '96px'
	},
	backdrop: {
		position: 'fixed',
		inset: 0,
		background: 'radial-gradient(circle at 20% 20%, rgba(96, 165, 250, 0.15), transparent 55%), radial-gradient(circle at 80% 10%, rgba(248, 113, 113, 0.12), transparent 45%)',
		zIndex: 0,
		pointerEvents: 'none'
	},
	content: {
		position: 'relative',
		zIndex: 1,
		maxWidth: '1180px',
		margin: '0 auto',
		padding: '0 32px'
	},
	navbar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: '32px 0'
	},
	navBrand: {
		fontSize: '20px',
		fontWeight: 700,
		letterSpacing: '0.08em',
		textTransform: 'uppercase'
	},
	navLinks: {
		display: 'flex',
		gap: '24px',
		listStyle: 'none',
		margin: 0
	},
	navLink: {
		fontSize: '15px',
		color: '#e0e7ff',
		textDecoration: 'none',
		fontWeight: 500
	},
	navActions: {
		display: 'flex',
		gap: '12px',
		alignItems: 'center'
	},
	toggleButton: {
		background: 'rgba(30, 41, 59, 0.6)',
		color: '#bfdbfe',
		border: '1px solid rgba(148, 163, 184, 0.3)',
		borderRadius: '999px',
		padding: '8px 18px',
		fontSize: '14px',
		cursor: 'pointer',
		backdropFilter: 'blur(6px)'
	},
	ctaButton: {
		background: 'linear-gradient(90deg, #60a5fa, #a855f7)',
		color: '#0f172a',
		border: 'none',
		borderRadius: '999px',
		padding: '10px 24px',
		fontSize: '14px',
		fontWeight: 600,
		cursor: 'pointer'
	},
	secondaryButton: {
		background: 'rgba(15, 23, 42, 0.7)',
		color: '#e2e8f0',
		border: '1px solid rgba(148, 163, 184, 0.35)',
		borderRadius: '999px',
		padding: '10px 24px',
		fontSize: '14px',
		fontWeight: 600,
		cursor: 'pointer'
	},
	hero: {
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
		gap: '32px',
		paddingBottom: '64px'
	},
	heroVisuals: {
		display: 'flex',
		flexDirection: 'column',
		gap: '24px'
	},
	imageStack: {
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
		gap: '16px'
	},
	imageCard: {
		position: 'relative',
		overflow: 'hidden',
		borderRadius: '18px',
		border: '1px solid rgba(148, 163, 184, 0.25)',
		boxShadow: '0 20px 45px rgba(9, 15, 29, 0.35)'
	},
	heroImage: {
		width: '100%',
		height: '100%',
		objectFit: 'cover',
		display: 'block',
		filter: 'saturate(1.15) contrast(1.05)'
	},
	imageCredit: {
		position: 'absolute',
		bottom: '12px',
		left: '16px',
		padding: '6px 10px',
		borderRadius: '999px',
		background: 'rgba(15, 23, 42, 0.7)',
		color: 'rgba(226, 232, 240, 0.86)',
		fontSize: '11px',
		letterSpacing: '0.08em',
		textTransform: 'uppercase'
	},
	heroTitle: {
		fontSize: '52px',
		fontWeight: 700,
		lineHeight: 1.05,
		marginBottom: '24px',
		color: '#f8fafc'
	},
	heroSubtitle: {
		fontSize: '18px',
		color: 'rgba(226, 232, 240, 0.88)',
		marginBottom: '24px',
		maxWidth: '540px'
	},
	heroHighlights: {
		display: 'flex',
		flexDirection: 'column',
		gap: '16px',
		margin: 0,
		padding: 0,
		listStyle: 'none'
	},
	highlight: {
		display: 'flex',
		alignItems: 'flex-start',
		gap: '12px',
		padding: '14px 18px',
		background: 'rgba(30, 41, 59, 0.55)',
		borderRadius: '14px',
		border: '1px solid rgba(148, 163, 184, 0.2)'
	},
	metricsGrid: {
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
		gap: '24px',
		marginBottom: '64px'
	},
	metricPanel: {
		background: 'rgba(15, 23, 42, 0.55)',
		border: '1px solid rgba(148, 163, 184, 0.2)',
		borderRadius: '20px',
		padding: '24px',
		backdropFilter: 'blur(14px)'
	},
	metricCard: {
		background: 'rgba(15, 23, 42, 0.55)',
		border: '1px solid rgba(148, 163, 184, 0.2)',
		borderRadius: '18px',
		padding: '24px',
		textAlign: 'center'
	},
	metricValue: {
		fontSize: '32px',
		fontWeight: 700,
		color: '#bfdbfe'
	},
	section: {
		marginBottom: '80px'
	},
	sectionHeader: {
		display: 'flex',
		flexDirection: 'column',
		gap: '12px',
		marginBottom: '32px'
	},
	sectionLabel: {
		fontSize: '13px',
		letterSpacing: '0.3em',
		textTransform: 'uppercase',
		color: 'rgba(148, 163, 184, 0.7)'
	},
	sectionTitle: {
		fontSize: '36px',
		fontWeight: 600,
		color: '#f8fafc'
	},
	sectionSubtitle: {
		fontSize: '17px',
		color: 'rgba(226, 232, 240, 0.8)',
		maxWidth: '620px'
	},
	cardGrid: {
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
		gap: '24px'
	},
	splitSection: {
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
		gap: '28px',
		alignItems: 'flex-start'
	},
	glassCard: {
		background: 'rgba(15, 23, 42, 0.72)',
		border: '1px solid rgba(148, 163, 184, 0.25)',
		borderRadius: '20px',
		padding: '28px',
		boxShadow: '0 24px 48px rgba(8, 15, 33, 0.35)',
		backdropFilter: 'blur(12px)'
	},
	cardImage: {
		width: '100%',
		height: 160,
		objectFit: 'cover',
		borderRadius: '14px',
		marginBottom: '14px'
	},
	list: {
		listStyle: 'none',
		margin: 0,
		padding: 0,
		display: 'flex',
		flexDirection: 'column',
		gap: '12px'
	},
	bulletItem: {
		display: 'flex',
		gap: '10px',
		color: 'rgba(226, 232, 240, 0.9)'
	},
	muted: {
		color: 'rgba(148, 163, 184, 0.8)',
		fontSize: '15px'
	},
	resultsGrid: {
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
		gap: '24px',
		marginTop: '32px'
	},
	resultCard: {
		background: 'rgba(30, 41, 59, 0.38)',
		borderRadius: '16px',
		border: '1px solid rgba(148, 163, 184, 0.2)',
		padding: '24px'
	},
	pricingCard: {
		background: 'rgba(15, 23, 42, 0.75)',
		border: '1px solid rgba(59, 130, 246, 0.35)',
		borderRadius: '22px',
		padding: '32px',
		boxShadow: '0 30px 60px rgba(14, 23, 42, 0.4)'
	},
	quote: {
		fontSize: '17px',
		color: 'rgba(226, 232, 240, 0.9)',
		lineHeight: 1.6,
		marginBottom: '18px'
	},
	faqItem: {
		borderBottom: '1px solid rgba(148, 163, 184, 0.2)',
		padding: '20px 0'
	},
	faqQuestion: {
		fontSize: '18px',
		fontWeight: 500,
		color: '#f8fafc',
		marginBottom: '8px'
	},
	ctaSection: {
		background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.2), rgba(129, 140, 248, 0.1))',
		border: '1px solid rgba(148, 163, 184, 0.25)',
		borderRadius: '26px',
		padding: '48px',
		boxShadow: '0 32px 60px rgba(12, 23, 48, 0.35)',
		backdropFilter: 'blur(14px)',
		textAlign: 'center'
	},
	ctaTitle: {
		fontSize: '32px',
		fontWeight: 600,
		marginBottom: '16px'
	},
	ctaParagraph: {
		fontSize: '17px',
		color: 'rgba(226, 232, 240, 0.85)',
		maxWidth: '580px',
		margin: '0 auto 28px auto'
	},
	ctaActions: {
		display: 'flex',
		justifyContent: 'center',
		gap: '16px',
		flexWrap: 'wrap'
	},
	secondaryButton: {
		background: 'rgba(15, 23, 42, 0.7)',
		color: '#e2e8f0',
		border: '1px solid rgba(148, 163, 184, 0.35)',
		borderRadius: '999px',
		padding: '12px 26px',
		fontSize: '14px',
		fontWeight: 500,
		cursor: 'pointer'
	},
	leadForm: {
		display: 'flex',
		flexDirection: 'column',
		gap: '12px',
		marginTop: '20px'
	},
	leadInput: {
		background: 'rgba(15, 23, 42, 0.7)',
		border: '1px solid rgba(148, 163, 184, 0.35)',
		borderRadius: '12px',
		padding: '12px 16px',
		color: '#f8fafc',
		fontSize: '14px'
	},
	leadDisclaimer: {
		color: 'rgba(148, 163, 184, 0.75)',
		fontSize: '12px',
		lineHeight: 1.5
	},
	note: {
		color: 'rgba(148, 163, 184, 0.85)',
		fontSize: '14px',
		marginTop: '18px',
		lineHeight: 1.6
	},
	footer: {
		marginTop: '80px',
		paddingTop: '32px',
		borderTop: '1px solid rgba(148, 163, 184, 0.2)',
		display: 'flex',
		flexDirection: 'column',
		gap: '16px',
		alignItems: 'center'
	},
	footerLinks: {
		display: 'flex',
		gap: '24px',
		listStyle: 'none',
		padding: 0,
		margin: 0,
		fontSize: '14px'
	}
};

export default landingStyles;
