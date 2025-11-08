// React form handler update for Iron Brothers Landing
// Replace the existing handleLeadFormSubmit function with this implementation

const WORKER_ENDPOINT = 'https://iron-brothers-lead-capture.YOUR_SUBDOMAIN.workers.dev';

const handleLeadFormSubmit = async (event) => {
  event.preventDefault();
  setFormError('');

  // Basic validation
  if (!formData.name || !formData.email || !formData.goal) {
    setFormError(language === 'en' ? 'Please fill in all fields.' : 'Por favor, preencha todos os campos.');
    return;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    setFormError(language === 'en' ? 'Please enter a valid email address.' : 'Por favor, insira um endereço de e-mail válido.');
    return;
  }

  // Show loading state
  setFormError(language === 'en' ? 'Sending...' : 'Enviando...');

  try {
    const response = await fetch(WORKER_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        goal: formData.goal,
        website: '', // Honeypot field (leave empty)
        language: language, // Optional: track submission language
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Submission failed');
    }

    // Success
    setFormSubmitted(true);
    setFormData({ name: '', email: '', goal: '' });

    // Reset success message after 5 seconds
    setTimeout(() => setFormSubmitted(false), 5000);
  } catch (error) {
    console.error('Form submission error:', error);
    setFormError(
      language === 'en'
        ? 'Something went wrong. Please try again later.'
        : 'Algo deu errado. Tente novamente mais tarde.'
    );
  }
};

// Also add the honeypot field to the form JSX (hidden from users):
// Add this anywhere in your form (but not visible):
/*
<input
  type="text"
  name="website"
  tabIndex="-1"
  autoComplete="off"
  style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
/>
*/
